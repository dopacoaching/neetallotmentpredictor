import { Request, Response } from 'express';
import prisma from '../config/db';
import * as XLSX from 'xlsx';

// Hardcoded for now as requested
const ADMIN_USER = "itdopa";
const ADMIN_PASS = "dopa1234";

export const adminLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    res.json({ success: true, token: "admin-session-valid" }); // Simple mock token
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};

export const exportUsersExcel = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' }
    });

    const data = users.map(u => ({
      Name: u.name,
      Mobile: u.mobile,
      Rank: u.rank,
    }));

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
        const users = await prisma.user.findMany({
            orderBy: { createdAt: 'desc' }
        });
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

// Sort round labels: numeric rounds first (1, 2, 3…), then alpha for named rounds
const sortRounds = (rounds: string[]): string[] =>
  [...rounds].sort((a, b) => {
    const na = parseInt(a) || 999;
    const nb = parseInt(b) || 999;
    return na !== nb ? na - nb : a.localeCompare(b);
  });

export const getCutoffData = async (req: Request, res: Response) => {
  try {
    const [keralaRows, mccRows] = await Promise.all([
      prisma.allotment.findMany({
        where: { counsellingBody: "Kerala CEE" },
        select: { collegeName: true, specialty: true, category: true, round: true, rank: true, year: true },
      }),
      prisma.allotment.findMany({
        where: { counsellingBody: "MCC" },
        select: { collegeName: true, specialty: true, category: true, round: true, rank: true, year: true },
      }),
    ]);

    // For Kerala: group by (campus, specialty, category) -> round -> max rank (most recent year wins)
    const keralaMap = new Map<string, { campus: string; specialty: string; category: string; rounds: Record<string, { rank: number; year: number }> }>();
    const keralaRoundSet = new Set<string>();

    for (const row of keralaRows) {
      const r = row.round?.trim();
      if (!r) continue;
      const campus = getCampus(row.collegeName);
      if (!campus) continue;
      keralaRoundSet.add(r);
      const cat = row.category ?? '';
      const key = `${campus}||${row.specialty}||${cat}`;

      if (!keralaMap.has(key)) {
        keralaMap.set(key, { campus, specialty: row.specialty, category: cat, rounds: {} });
      }
      const entry = keralaMap.get(key)!;
      const existing = entry.rounds[r];
      if (!existing || row.year > existing.year || (row.year === existing.year && row.rank > existing.rank)) {
        entry.rounds[r] = { rank: row.rank, year: row.year };
      }
    }

    const keralaGrouped: Record<string, { specialty: string; category: string; rounds: Record<string, number> }[]> = {
      Calicut: [], Kottayam: [], TVM: [],
    };
    for (const [, e] of keralaMap) {
      keralaGrouped[e.campus].push({
        specialty: e.specialty,
        category: e.category,
        rounds: Object.fromEntries(Object.entries(e.rounds).map(([r, v]) => [r, v.rank])),
      });
    }
    for (const campus of Object.keys(keralaGrouped)) {
      keralaGrouped[campus].sort((a, b) => a.specialty.localeCompare(b.specialty) || a.category.localeCompare(b.category));
    }

    // For All India: group by (collegeName, specialty, category) -> round -> max rank
    const mccMap = new Map<string, { collegeName: string; specialty: string; category: string; rounds: Record<string, { rank: number; year: number }> }>();
    const allIndiaRoundSet = new Set<string>();

    for (const row of mccRows) {
      const r = row.round?.trim();
      if (!r) continue;
      allIndiaRoundSet.add(r);
      const cat = row.category ?? '';
      const key = `${row.collegeName}||${row.specialty}||${cat}`;

      if (!mccMap.has(key)) {
        mccMap.set(key, { collegeName: row.collegeName, specialty: row.specialty, category: cat, rounds: {} });
      }
      const entry = mccMap.get(key)!;
      const existing = entry.rounds[r];
      if (!existing || row.year > existing.year || (row.year === existing.year && row.rank > existing.rank)) {
        entry.rounds[r] = { rank: row.rank, year: row.year };
      }
    }

    const allIndia = Array.from(mccMap.values())
      .map(({ collegeName, specialty, category, rounds }) => ({
        collegeName,
        specialty,
        category,
        rounds: Object.fromEntries(Object.entries(rounds).map(([r, v]) => [r, v.rank])),
      }))
      .sort((a, b) => a.collegeName.localeCompare(b.collegeName) || a.specialty.localeCompare(b.specialty));

    res.json({
      kerala: keralaGrouped,
      keralaRounds: sortRounds([...keralaRoundSet]),
      allIndia,
      allIndiaRounds: sortRounds([...allIndiaRoundSet]),
    });
  } catch (error) {
    console.error("getCutoffData error:", error);
    res.status(500).json({ error: "Failed to fetch cutoff data" });
  }
};
