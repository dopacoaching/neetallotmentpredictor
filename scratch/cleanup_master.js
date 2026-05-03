const fs = require('fs');
const path = require('path');

const masterPath = path.resolve('server/dental_allotments.csv');
const r2Path = path.resolve('brain/mcc_r2_2025.csv');

function parseCsvLine(line) {
  const result = [];
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

const masterContent = fs.readFileSync(masterPath, 'utf8');
const masterLines = masterContent.split('\n').filter(l => l.trim());
const header = masterLines[0];

// Filter out old Round 2 records
const nonR2Lines = masterLines.filter((l, i) => {
  if (i === 0) return false;
  const cols = parseCsvLine(l);
  // round is usually at index 8 (0-based) in the master CSV
  // Headers: college_name, college_code, specialty, category, cutoff_rank, year, counselling_body, degree, round, state, college_type, quota
  return cols[8] !== 'Round 2' || cols[5] !== '2025';
});

const r2Content = fs.readFileSync(r2Path, 'utf8');
const r2Lines = r2Content.split('\n').filter((l, i) => i > 0 && l.trim());

const finalLines = [header, ...nonR2Lines, ...r2Lines];
fs.writeFileSync(masterPath, finalLines.join('\n') + '\n');
console.log(`Updated ${masterPath}. Total lines: ${finalLines.length}`);
