
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  const filePath = path.resolve(__dirname, 'dental_data_2.txt');
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    process.exit(1);
  }

  const rawData = fs.readFileSync(filePath, 'utf-8');
  const lines = rawData.split('\n').filter(l => l.trim());
  const year = 2024;
  const counsellingBody = 'Kerala CEE';
  const round = 'Rounds 1-3 (Safe Allotment)';
  const state = 'Kerala';
  const degree = 'MDS';
  const quota = 'State Quota';

  console.log(`Starting seed of ${lines.length} records...`);

  let inserted = 0;
  let skipped = 0;

  for (const line of lines) {
    const parts = line.split('\t');
    if (parts.length < 6) continue;

    const rank = parseInt(parts[2].trim(), 10);
    if (isNaN(rank)) continue;

    // College: Code: Name
    const collegePart = parts[3].trim();
    const collegeMatch = collegePart.match(/^([^:]+):\s*(.*)$/);
    const collegeCode = collegeMatch ? collegeMatch[1].trim() : null;
    const collegeName = collegeMatch ? collegeMatch[2].trim() : collegePart;

    // Specialty: Code: Name
    const specialtyPart = parts[4].trim();
    const specialtyMatch = specialtyPart.match(/^([^:]+):\s*(.*)$/);
    const specialty = specialtyMatch ? specialtyMatch[2].trim() : specialtyPart;

    // Category
    const category = parts[5].trim().replace(/[#\s]+$/, '');
    
    const collegeType = collegeName.toLowerCase().includes('govt') ? 'Government' : 'Self-Financing';

    const existing = await prisma.allotment.findFirst({
      where: {
        collegeName,
        specialty,
        rank,
        year,
        counsellingBody,
        category,
        round
      }
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
          rank,
          year,
          counsellingBody,
          round,
          state,
          degree,
          collegeType,
          quota
        }
      });
      inserted++;
    }
  }

  console.log(`Seed complete: ${inserted} inserted, ${skipped} skipped.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
