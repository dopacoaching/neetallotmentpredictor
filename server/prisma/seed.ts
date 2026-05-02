import "dotenv/config";
import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function parseArgs() {
  const args = process.argv.slice(2);
  const result: { file?: string; body?: string; dryRun: boolean } = {
    dryRun: false,
  };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--file" && args[i + 1]) result.file = args[++i];
    if (args[i] === "--body" && args[i + 1]) result.body = args[++i];
    if (args[i] === "--dry-run") result.dryRun = true;
  }
  return result;
}

function normalizeTitle(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function normalizeRound(round: string): string {
  const cleaned = round.trim().toLowerCase();
  if (cleaned.includes("mop")) return "Mop-Up";
  const match = cleaned.match(/(\d+)/);
  if (match) return `Round ${match[1]}`;
  return normalizeTitle(round);
}

function normalizeCollegeType(ct: string): string {
  const lower = ct.trim().toLowerCase();
  if (lower.includes("govt") || lower.includes("government")) return "Government";
  if (lower.includes("deemed")) return "Deemed";
  if (lower.includes("private")) return "Private";
  return normalizeTitle(ct);
}

async function seed() {
  const { file, body, dryRun } = parseArgs();

  if (!file || !body) {
    console.error(
      "Usage: ts-node prisma/seed.ts --file <csv> --body <counselling_body> [--dry-run]"
    );
    process.exit(1);
  }

  const filePath = path.resolve(file);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n").filter((l) => l.trim());

  function parseCsvLine(line: string): string[] {
    const result: string[] = [];
    let cur = "", inQuote = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuote && line[i + 1] === '"') { cur += '"'; i++; }
        else inQuote = !inQuote;
      } else if (ch === ',' && !inQuote) {
        result.push(cur.trim()); cur = "";
      } else cur += ch;
    }
    result.push(cur.trim());
    return result;
  }

  const headers = parseCsvLine(lines[0]).map((h) => h.toLowerCase().replace(/\s+/g, "_"));

  const getCol = (row: string[], name: string): string => {
    const idx = headers.indexOf(name);
    return idx >= 0 ? (row[idx] ?? "").trim() : "";
  };

  let processed = 0;
  let inserted = 0;
  let skipped = 0;
  let errored = 0;

  for (let i = 1; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i]);
    processed++;

    try {
      const collegeName = getCol(cols, "college_name");
      const collegeCode = getCol(cols, "college_code").toUpperCase() || null;
      const specialty = getCol(cols, "specialty").trim();
      const category = getCol(cols, "category").toUpperCase() || null;
      const rankRaw = parseInt(getCol(cols, "cutoff_rank"), 10);
      const degree = getCol(cols, "degree") || null;
      const roundRaw = getCol(cols, "round");
      const round = roundRaw ? normalizeRound(roundRaw) : null;
      const yearRaw = parseInt(getCol(cols, "year"), 10);
      const state = getCol(cols, "state") || null;
      const collegeTypeRaw = getCol(cols, "college_type");
      const collegeType = collegeTypeRaw ? normalizeCollegeType(collegeTypeRaw) : null;
      const quota = getCol(cols, "quota") || null;

      if (!collegeName || !specialty || isNaN(rankRaw) || isNaN(yearRaw)) {
        console.warn(`Row ${i}: missing required fields — skipping`);
        skipped++;
        continue;
      }

      if (dryRun) {
        console.log(
          `[DRY RUN] Row ${i}: ${collegeName} | ${specialty} | ${rankRaw} | ${body}`
        );
        inserted++;
        continue;
      }

      const csvBody = getCol(cols, "counselling_body");
      const finalBody = csvBody || body;

      const existing = await prisma.allotment.findFirst({
        where: {
          collegeName,
          specialty,
          rank: rankRaw,
          year: yearRaw,
          counsellingBody: finalBody,
          round: round ?? null,
          category: category ?? null,
        },
      });

      if (existing) {
        skipped++;
      } else {
        await prisma.allotment.create({
          data: {
            collegeName,
            collegeCode,
            specialty,
            category,
            rank: rankRaw,
            degree,
            round,
            year: yearRaw,
            state,
            collegeType,
            quota,
            counsellingBody: finalBody,
          },
        });
        inserted++;
      }
    } catch (err) {
      console.error(`Row ${i} error:`, err);
      errored++;
    }
  }

  console.log(`\nSeed complete:`);
  console.log(`  Processed: ${processed}`);
  console.log(`  Inserted: ${inserted}`);
  console.log(`  Skipped (duplicates): ${skipped}`);
  console.log(`  Errored: ${errored}`);

  await prisma.$disconnect();
}

seed().catch((err) => {
  console.error(err);
  prisma.$disconnect();
  process.exit(1);
});
