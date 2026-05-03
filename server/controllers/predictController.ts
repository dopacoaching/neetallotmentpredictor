import { Request, Response } from 'express';
import prisma from '../config/db';

export const getSpecialties = async (req: Request, res: Response) => {
  try {
    const { counselling_body } = req.query;
    const where = counselling_body ? { counsellingBody: String(counselling_body) } : {};

    const rows = await prisma.allotment.findMany({
      where,
      select: { specialty: true },
      distinct: ['specialty'],
      orderBy: { specialty: 'asc' },
    });
    res.json({ specialties: rows.map(r => r.specialty) });
  } catch (error) {
    console.error('getSpecialties error:', error);
    res.status(500).json({ error: "Failed to fetch specialties" });
  }
};

export const getFilters = async (req: Request, res: Response) => {
  try {
    const { counselling_body } = req.query;
    const where = counselling_body ? { counsellingBody: String(counselling_body) } : {};

    const [categoryRows, roundRows] = await Promise.all([
      prisma.allotment.findMany({
        where: { ...where, category: { not: null } },
        select: { category: true },
        distinct: ['category'],
        orderBy: { category: 'asc' },
      }),
      prisma.allotment.findMany({
        where: { ...where, round: { not: null } },
        select: { round: true },
        distinct: ['round'],
        orderBy: { round: 'asc' },
      }),
    ]);

    res.json({
      categories: categoryRows.map(c => c.category).filter(Boolean).sort() as string[],
      rounds: roundRows.map(r => r.round).filter(Boolean).sort() as string[],
    });
  } catch (error) {
    console.error('getFilters error:', error);
    res.status(500).json({ error: "Failed to fetch filters" });
  }
};

export const predictAllotment = async (req: Request, res: Response) => {
  try {
    const { userId, rank: rawRank, specialty, category, collegeType, round, counsellingBody } = req.body;

    const rank = Number(rawRank);
    if (!rank || isNaN(rank) || rank < 1) {
      return res.status(400).json({ error: "VALIDATION_ERROR", message: "A valid rank is required" });
    }

    // We search for a range around the user's rank to give a balanced view:
    // 1. Difficult: Seats that closed slightly better than user's rank (rank - 2000)
    // 2. Good/High: Seats that closed at or worse than user's rank (rank + 10000)
    const allotments = await prisma.allotment.findMany({
      where: {
        rank: {
          gte: Math.max(1, rank - 2000),
          lte: rank + 15000,
        },
        specialty: specialty === "All Fields" || !specialty ? undefined : specialty,
        category: category === "All" || !category ? undefined : category,
        collegeType: collegeType === "All Colleges" || !collegeType
          ? undefined
          : collegeType === "Self-Financing"
          ? { in: ["Self-Financing", "Private"] }
          : collegeType,
        round: round === "All Rounds" || !round ? undefined : round,
        counsellingBody: counsellingBody === "All" || !counsellingBody ? undefined : counsellingBody,
      },
      orderBy: { rank: 'asc' },
    });

    // Deduplicate: for each (college, specialty, category, counsellingBody) keep the
    // best representative record — latest year first, then highest cutoff rank within
    // the same year (highest cutoff = most accessible round, e.g. stray round).
    const bestByKey = new Map<string, typeof allotments[0]>();
    for (const a of allotments) {
      const key = [a.collegeName, a.specialty, a.category ?? '', a.counsellingBody].join('||');
      const prev = bestByKey.get(key);
      if (!prev || a.year > prev.year || (a.year === prev.year && a.rank > prev.rank)) {
        bestByKey.set(key, a);
      }
    }
    const dedupedAllotments = Array.from(bestByKey.values());

    const results = dedupedAllotments.map(a => {
      let probability: 'High' | 'Good' | 'Difficult' = 'Difficult';
      
      const diff = a.rank - rank;

      if (diff >= 1500) {
        probability = 'High';
      } else if (diff >= 0) {
        probability = 'Good';
      } else {
        probability = 'Difficult';
      }

      return {
        collegeName: a.collegeName,
        state: a.state ?? '',
        specialty: a.specialty,
        degree: a.degree ?? '',
        category: a.category ?? '',
        quota: a.quota ?? '',
        round: a.round ?? '',
        cutoffRank: a.rank,
        counsellingBody: a.counsellingBody,
        year: a.year,
        probability,
        highChance: probability === 'High' || probability === 'Good',
        rankDiff: Math.abs(a.rank - rank), // Helper for sorting
      };
    });

    // Refine selection to "Best 15":
    // We want a balanced mix: 10 closest "Safe" options and 5 closest "Difficult" options
    const safeOptions = results
      .filter(r => r.highChance)
      .sort((a, b) => a.rankDiff - b.rankDiff)
      .slice(0, 10);
    
    const difficultOptions = results
      .filter(r => !r.highChance)
      .sort((a, b) => a.rankDiff - b.rankDiff)
      .slice(0, 5);

    const limitedResults = [...safeOptions, ...difficultOptions]
      .sort((a, b) => a.cutoffRank - b.cutoffRank)
      .map(({ rankDiff: _rankDiff, ...r }) => r);

    // Log the search — userId is a MongoDB ObjectId string; skip if absent/invalid
    if (userId && typeof userId === 'string' && userId.length > 0) {
      prisma.searchLog.create({
        data: {
          userId,
          rank,
          counsellingBody: counsellingBody || null,
          specialty: specialty || null,
          collegeType: collegeType || null,
          category: category || null,
          round: round || null,
          resultCount: limitedResults.length,
        },
      }).catch(err => console.error("Search log failed (non-fatal):", err));
    }

    res.json({
      results: limitedResults,
      userRank: rank,
      resultCount: limitedResults.length,
    });
  } catch (error) {
    console.error("Prediction error:", error);
    res.status(500).json({ error: "Prediction failed" });
  }
};
