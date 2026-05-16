import { Request, Response } from 'express';
import prisma from '../config/db';
import * as XLSX from 'xlsx';

const ADMIN_USER = "itdopa";
const ADMIN_PASS = "dopa1234";

export const adminLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    res.json({ success: true, token: "admin-session-valid" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};

export const exportUsersExcel = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
    const data = users.map(u => ({ Name: u.name, Mobile: u.mobile, Rank: u.rank }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registered Users");
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=Registered_Users.xlsx');
    res.send(buffer);
  } catch (error) {
    console.error("Export error:", error);
    res.status(500).json({ error: "Failed to export data" });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch users" });
  }
};

// ── helpers ─────────────────────────────────────────────────────────────────

const getCampus = (collegeName: string): 'Calicut' | 'Kottayam' | 'TVM' | null => {
  const lower = collegeName.toLowerCase();
  if (lower.includes('calicut') || lower.includes('kozhikode')) return 'Calicut';
  if (lower.includes('kottayam')) return 'Kottayam';
  if (lower.includes('trivandrum') || lower.includes('thiruvananthapuram') || lower.includes('tvm')) return 'TVM';
  return null;
};

// Only Government Dental Colleges (not private colleges in the same city)
const isGDC = (collegeName: string): boolean => {
  const lower = collegeName.toLowerCase();
  return (
    lower.includes('government dental') ||
    lower.includes('govt dental') ||
    lower.includes('govt. dental') ||
    lower.startsWith('gdc') ||
    lower.includes(' gdc ')
  );
};

// Kerala CEE State Merit only — exclude Stray Merit, Management, NRI, etc.
const isStateMerit = (category: string | null): boolean => {
  if (!category) return false;
  const upper = category.toUpperCase().trim();
  if (upper.includes('STRAY')) return false;
  if (upper.includes('MANAGEMENT') || upper.includes('NRI') || upper.includes('GOVT QUOTA') || upper.includes('GOVT. QUOTA')) return false;
  return upper.includes('STATE') || upper === 'SM';
};

// MCC Open/General merit only — exclude OBC, SC, ST, EWS, PwD reserved categories
const isOpenMerit = (category: string | null): boolean => {
  if (!category) return true; // null category → include (some MCC data may not have category)
  const upper = category.toUpperCase().trim();
  // Exclude reserved categories
  const reserved = ['OBC', 'SC', 'ST', 'EWS', 'PWD', 'PH', 'MINORITY', 'NRI', 'MANAGEMENT'];
  if (reserved.some(r => upper.includes(r))) return false;
  return true;
};

// Exclude Mop-Up / Stray Vacancy rounds for MCC
const isRegularRound = (round: string | null): boolean => {
  if (!round) return true;
  const lower = round.toLowerCase();
  return !lower.includes('mop') && !lower.includes('stray');
};

type SlotEntry = { rank: number; year: number };

// Keep highest rank from the most recent year (= last seat allotted in the season)
function pickBest(existing: SlotEntry | undefined, row: { rank: number; year: number }): SlotEntry {
  if (!existing) return { rank: row.rank, year: row.year };
  if (row.year > existing.year) return { rank: row.rank, year: row.year };
  if (row.year === existing.year && row.rank > existing.rank) return { rank: row.rank, year: row.year };
  return existing;
}

// ── debug endpoint ───────────────────────────────────────────────────────────

export const debugCutoffData = async (req: Request, res: Response) => {
  try {
    const [bodies, keralaCategories, mccCategories, mccRounds, keralaColleges] = await Promise.all([
      prisma.allotment.findMany({ select: { counsellingBody: true }, distinct: ['counsellingBody'] }),
      prisma.allotment.findMany({
        where: { counsellingBody: "Kerala CEE" },
        select: { category: true },
        distinct: ['category'],
      }),
      prisma.allotment.findMany({
        where: { counsellingBody: "MCC" },
        select: { category: true },
        distinct: ['category'],
      }),
      prisma.allotment.findMany({
        where: { counsellingBody: "MCC" },
        select: { round: true },
        distinct: ['round'],
      }),
      prisma.allotment.findMany({
        where: { counsellingBody: "Kerala CEE" },
        select: { collegeName: true, category: true },
        distinct: ['collegeName'],
        take: 50,
      }),
    ]);
    res.json({
      counsellingBodies: bodies.map(b => b.counsellingBody),
      kerala_categories: keralaCategories.map(c => c.category),
      mcc_categories: mccCategories.map(c => c.category),
      mcc_rounds: mccRounds.map(r => r.round),
      kerala_colleges: keralaColleges,
    });
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
};

// ── cutoff data ──────────────────────────────────────────────────────────────

export const getCutoffData = async (req: Request, res: Response) => {
  try {
    const [keralaRows, mccRows] = await Promise.all([
      prisma.allotment.findMany({
        where: { counsellingBody: "Kerala CEE" },
        select: { collegeName: true, specialty: true, category: true, rank: true, year: true },
      }),
      prisma.allotment.findMany({
        where: { counsellingBody: "MCC" },
        select: { specialty: true, category: true, round: true, rank: true, year: true },
      }),
    ]);

    // Kerala: GDC only, State Merit category, mapped to campus
    const keralaMap = new Map<string, SlotEntry>(); // key: `${campus}||${specialty}`
    for (const row of keralaRows) {
      if (!isGDC(row.collegeName)) continue;
      if (!isStateMerit(row.category)) continue;
      const campus = getCampus(row.collegeName);
      if (!campus) continue;
      const key = `${campus}||${row.specialty}`;
      keralaMap.set(key, pickBest(keralaMap.get(key), row));
    }

    // All India: Open/General merit, regular rounds only
    const mccMap = new Map<string, SlotEntry>(); // key: specialty
    for (const row of mccRows) {
      if (!isRegularRound(row.round)) continue;
      if (!isOpenMerit(row.category)) continue;
      mccMap.set(row.specialty, pickBest(mccMap.get(row.specialty), row));
    }

    const specialtySet = new Set<string>([
      ...mccMap.keys(),
      ...[...keralaMap.keys()].map(k => k.split('||')[1]),
    ]);

    const departments = [...specialtySet].sort().map(specialty => ({
      specialty,
      allIndia: mccMap.get(specialty)?.rank                   ?? null,
      calicut:  keralaMap.get(`Calicut||${specialty}`)?.rank  ?? null,
      kottayam: keralaMap.get(`Kottayam||${specialty}`)?.rank ?? null,
      tvm:      keralaMap.get(`TVM||${specialty}`)?.rank      ?? null,
    })).filter(d => d.allIndia !== null || d.calicut !== null || d.kottayam !== null || d.tvm !== null);

    res.json({ departments });
  } catch (error) {
    console.error("getCutoffData error:", error);
    res.status(500).json({ error: "Failed to fetch cutoff data" });
  }
};
