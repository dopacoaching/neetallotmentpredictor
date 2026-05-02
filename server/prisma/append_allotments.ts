
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function appendData(text: string) {
  const lines = text.split('\n').filter(l => l.trim());
  const year = 2024;
  const round = 'Rounds 1-3 (Safe Allotment)';
  const degree = 'MDS';

  console.log(`Processing ${lines.length} lines...`);

  let inserted = 0;
  let skipped = 0;

  for (const line of lines) {
    const parts = line.split('\t');
    if (parts.length < 5) continue;

    let rank: number;
    let collegePart: string;
    let specialtyPart: string;
    let category: string = 'GN'; 
    let quota: string = 'State Quota';
    let state: string = 'Kerala';
    let counsellingBody: string = 'MCC';
    let yearToUse = year;
    let roundToUse = round;

    // Format detection
    if (parts.length >= 8) {
        // Standardized/Python-parsed 8-column format
        // [sno, rank, quota, college, course, state, round, year]
        rank = parseInt(parts[1].trim(), 10);
        quota = parts[2].trim();
        collegePart = parts[3].trim();
        specialtyPart = parts[4].trim();
        state = parts[5].trim();
        roundToUse = parts[6].trim();
        yearToUse = parseInt(parts[7].trim(), 10);
        counsellingBody = (quota.includes('State') && state === 'Kerala') ? 'Kerala CEE' : 'MCC';
    } else if (parts[2] && !isNaN(parseInt(parts[2].trim(), 10))) {
        // Kerala CEE Formats (Roll is parts[1], Rank is parts[2])
        rank = parseInt(parts[2].trim(), 10);
        counsellingBody = 'Kerala CEE';
        state = 'Kerala';
        if (parts.length >= 7) {
            // 7-column format
            collegePart = parts[4].trim();
            specialtyPart = parts[5].trim();
            category = parts[6].trim().replace(/[#\s]+$/, '');
        } else {
            // 6-column format
            collegePart = parts[3].trim();
            specialtyPart = parts[4].trim();
            category = parts[5].trim().replace(/[#\s]+$/, '');
        }
    } else if (parts[1] && !isNaN(parseInt(parts[1].trim(), 10))) {
        // All India / Management Format (Rank is parts[1])
        rank = parseInt(parts[1].trim(), 10);
        quota = parts[2].trim();
        collegePart = parts[3].trim();
        specialtyPart = parts[4].trim();
        state = parts[5].trim();
        counsellingBody = 'MCC';
    } else {
        continue; // Header or unknown
    }

    // College: Code: Name (Handle both formats)
    const collegeMatch = collegePart.match(/^([^:]+):\s*(.*)$/);
    const collegeCode = collegeMatch ? collegeMatch[1].trim() : null;
    const collegeName = collegeMatch ? collegeMatch[2].trim() : collegePart;

    // Specialty: Code: Name (Handle both formats)
    const specialtyMatch = specialtyPart.match(/^([^:]+):\s*(.*)$/);
    const specialty = specialtyMatch ? specialtyMatch[2].trim() : specialtyPart;

    const collegeType = collegeName.toLowerCase().includes('govt') ? 'Government' : 'Self-Financing';

    const existing = await prisma.allotment.findFirst({
      where: {
        collegeName,
        specialty,
        rank,
        year: yearToUse,
        counsellingBody,
        category,
        round: roundToUse,
        quota,
        state
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
          year: yearToUse,
          counsellingBody,
          round: roundToUse,
          state,
          degree,
          collegeType,
          quota
        }
      });
      inserted++;
    }
  }

  console.log(`Batch complete: ${inserted} inserted, ${skipped} skipped.`);
}

const tempFile = path.resolve(__dirname, 'temp_append.txt');
if (fs.existsSync(tempFile)) {
    const content = fs.readFileSync(tempFile, 'utf-8');
    appendData(content)
        .then(() => {
            fs.unlinkSync(tempFile);
            process.exit(0);
        })
        .catch(e => {
            console.error(e);
            process.exit(1);
        })
        .finally(() => prisma.$disconnect());
} else {
    console.log("No temp_append.txt found. Ready for next batch.");
    prisma.$disconnect();
}
