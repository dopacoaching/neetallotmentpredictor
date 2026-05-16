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
    res.status(500).json({ 
      error: "Failed to fetch specialties", 
      message: error instanceof Error ? error.message : String(error) 
    });
  }
};

export const getFilters = async (req: Request, res: Response) => {
  try {
    const { counselling_body } = req.query;
    const where = counselling_body ? { counsellingBody: String(counselling_body) } : {};

    const roundRows = await prisma.allotment.findMany({
      where: { ...where, round: { not: null } },
      select: { round: true },
      distinct: ['round'],
      orderBy: { round: 'asc' },
    });

    res.json({
      categories: ["GENERAL", "OBC", "SC", "ST", "EWS"],
      rounds: roundRows.map(r => r.round).filter(Boolean).sort() as string[],
    });
  } catch (error) {
    console.error('getFilters error:', error);
    res.status(500).json({ 
      error: "Failed to fetch filters",
      message: error instanceof Error ? error.message : String(error)
    });
  }
};

export const predictAllotment = async (req: Request, res: Response) => {
  try {
    const { userId, rank: rawRank, specialty, category, collegeType, round, counsellingBody } = req.body;

    const rank = Number(rawRank);
    if (!rank || isNaN(rank) || rank < 1) {
      return res.status(400).json({ error: "VALIDATION_ERROR", message: "A valid rank is required" });
    }

    // Category Mapping: 
    // We dynamically identify specific categories to exclude for "GENERAL"
    let categoryFilter: any = undefined;

    if (category && category !== "All") {
      if (category === "GENERAL") {
        const allCats = await prisma.allotment.findMany({
          select: { category: true },
          distinct: ['category'],
        });
        
        // Keywords that represent "General" or "Open" seats across different counselling bodies
        const generalKeywords = ["GENERAL", "OPEN", "UNRESERVED", "UR", "STATE MERIT", "SM", "OPEN GENERAL"];
        
        const specificCats = allCats
          .map(c => c.category)
          .filter(c => {
            if (!c) return false;
            const upperC = c.toUpperCase();
            return !generalKeywords.some(gk => upperC.includes(gk));
          }) as string[];
        
        categoryFilter = { notIn: specificCats };
      } else {
        categoryFilter = category;
      }
    }

    // We search for a range around the user's rank:
    // 1. Difficult: rank - 3000 (slightly more generous than 2000)
    // 2. Safe: rank + 20000 (more generous than 15000)
    const allotments = await prisma.allotment.findMany({
      where: {
        rank: {
          gte: Math.max(1, rank - 3000),
          lte: rank + 20000,
        },
        specialty: specialty === "All Fields" || !specialty ? undefined : specialty,
        category: categoryFilter,
        collegeType: collegeType === "All Colleges" || !collegeType
          ? undefined
          : collegeType === "Private"
          ? { in: ["Self-Financing", "Private"] }
          : collegeType,
        round: round === "All Rounds" || !round ? undefined : round,
        counsellingBody: counsellingBody === "All" || !counsellingBody ? undefined : counsellingBody,
      },
      orderBy: { rank: 'asc' },
    });

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
        rankDiff: Math.abs(a.rank - rank),
      };
    });

    // Refine selection to "Best 15":
    const safeOptions = results
      .filter(r => r.highChance)
      .sort((a, b) => b.year - a.year || a.rankDiff - b.rankDiff);

    const difficultOptions = results
      .filter(r => !r.highChance)
      .sort((a, b) => b.year - a.year || a.rankDiff - b.rankDiff);

    // Dynamic balancing: target 10 safe, 5 difficult, but fill if one side is lacking
    let finalSelection: any[] = [];
    
    if (safeOptions.length >= 10 && difficultOptions.length >= 5) {
      finalSelection = [...safeOptions.slice(0, 10), ...difficultOptions.slice(0, 5)];
    } else if (safeOptions.length < 10) {
      finalSelection = [...safeOptions, ...difficultOptions.slice(0, 15 - safeOptions.length)];
    } else {
      finalSelection = [...safeOptions.slice(0, 15 - difficultOptions.length), ...difficultOptions];
    }

    const limitedResults = finalSelection
      .sort((a, b) => b.year - a.year || a.cutoffRank - b.cutoffRank)
      .map(({ rankDiff: _rankDiff, ...r }) => r);

    // Log the search — validate userId is a 24-char hex string for MongoDB
    const isValidObjectId = userId && typeof userId === 'string' && /^[0-9a-fA-F]{24}$/.test(userId);
    if (isValidObjectId) {
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
    res.status(500).json({ 
      error: "Prediction failed",
      message: error instanceof Error ? error.message : String(error)
    });
  }
};
