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

const getCampus = (collegeName: string): 'Calicut' | 'Kottayam' | 'TVM' | null => {
  const lower = collegeName.toLowerCase();
  if (lower.includes('calicut') || lower.includes('kozhikode')) return 'Calicut';
  if (lower.includes('kottayam')) return 'Kottayam';
  if (lower.includes('trivandrum') || lower.includes('thiruvananthapuram') || lower.includes('tvm')) return 'TVM';
  return null;
};

type SlotEntry = { rank: number; year: number };

// Keep highest rank from the most recent year (= last seat allotted in the season)
function pickBest(existing: SlotEntry | undefined, row: { rank: number; year: number }): SlotEntry {
  if (!existing) return { rank: row.rank, year: row.year };
  if (row.year > existing.year) return { rank: row.rank, year: row.year };
  if (row.year === existing.year && row.rank > existing.rank) return { rank: row.rank, year: row.year };
  return existing;
}

export const debugCutoffData = async (req: Request, res: Response) => {
  try {
    const [bodies, rounds, colleges] = await Promise.all([
      prisma.allotment.findMany({ select: { counsellingBody: true }, distinct: ['counsellingBody'] }),
      prisma.allotment.findMany({
        select: { counsellingBody: true, round: true },
        distinct: ['counsellingBody', 'round'],
        orderBy: { counsellingBody: 'asc' },
      }),
      prisma.allotment.findMany({
        where: { counsellingBody: { contains: 'Kerala', mode: 'insensitive' } },
        select: { collegeName: true },
        distinct: ['collegeName'],
        take: 30,
      }),
    ]);
    res.json({
      counsellingBodies: bodies.map(b => b.counsellingBody),
      rounds,
      kerala_colleges: colleges.map(c => c.collegeName),
    });
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
};

export const getCutoffData = async (req: Request, res: Response) => {
  try {
    const [keralaRows, mccRows] = await Promise.all([
      prisma.allotment.findMany({
        where: { counsellingBody: "Kerala CEE" },
        select: { collegeName: true, specialty: true, rank: true, year: true },
      }),
      prisma.allotment.findMany({
        where: { counsellingBody: "MCC" },
        select: { specialty: true, rank: true, year: true },
      }),
    ]);

    // Kerala: per (campus, specialty) — highest rank from most recent year
    const keralaMap = new Map<string, SlotEntry>();
    for (const row of keralaRows) {
      const campus = getCampus(row.collegeName);
      if (!campus) continue;
      const key = `${campus}||${row.specialty}`;
      keralaMap.set(key, pickBest(keralaMap.get(key), row));
    }

    // All India: per specialty — highest rank from most recent year
    const mccMap = new Map<string, SlotEntry>();
    for (const row of mccRows) {
      mccMap.set(row.specialty, pickBest(mccMap.get(row.specialty), row));
    }

    const specialtySet = new Set<string>([
      ...mccMap.keys(),
      ...[...keralaMap.keys()].map(k => k.split('||')[1]),
    ]);

    const departments = [...specialtySet].sort().map(specialty => ({
      specialty,
      allIndia: mccMap.get(specialty)?.rank                  ?? null,
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
