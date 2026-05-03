'use strict';
// parse_mcc_r2.js — Parser for MCC Round 2 PDF data
// Usage: node parse_mcc_r2.js <input.txt> [output.csv]

const fs   = require('fs');
const path = require('path');

const QUOTAS = [
  'Management/Paid Seats Quota',
  'Delhi University Quota',
  'Aligarh Muslim University',
  'Banaras Hindu University',
  'All India',
  'Armed Forces Medical',
];

const SPECIALTIES = [
  'ORAL AND MAXILLOFACIAL PATHOLOGY AND ORAL MICROBIOLOGY',
  'ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS',
  'CONSERVATIVE DENTISTRY AND ENDODONTICS',
  'PROSTHODONTICS AND CROWN AND BRIDGE',
  'PEDIATRIC AND PREVENTIVE DENTISTRY',
  'ORAL AND MAXILLOFACIAL SURGERY',
  'ORAL MEDICINE AND RADIOLOGY',
  'PUBLIC HEALTH DENTISTRY',
  'PERIODONTOLOGY',
];

const SPECIALTY_NORM = {
  'PROSTHODONTICS AND CROWN AND BRIDGE': 'PROSTHODONTICS AND CROWN & BRIDGE',
  'ORAL AND MAXILLOFACIAL PATHOLOGY AND ORAL MICROBIOLOGY': 'ORAL PATHOLOGY AND MICROBIOLOGY',
};

function csvField(val) {
  const s = String(val == null ? '' : val);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function csvRow(fields) {
  return fields.map(csvField).join(',');
}

function extractState(instituteText) {
  const m = instituteText.match(/,\s*([A-Za-z][A-Za-z\s()]+?),\s*\d{6}\s*$/);
  if (!m) return '';
  let state = m[1].trim();
  state = state.replace(/\s*\(NCT\)\s*/gi, '').trim();
  return state;
}

function extractCollegeName(instituteText) {
  const stripped = instituteText.replace(/,\s*[A-Za-z][A-Za-z\s()]+?,\s*\d{6}\s*$/, '').trim();
  const parts = stripped.split(',').map(p => p.trim()).filter(Boolean);
  if (parts.length === 0) return instituteText.trim();
  let name = parts[0];
  if (parts.length > 1) {
    const second = parts[1];
    if (second.length < 30 && !/^\d/.test(second) && !(second === second.toUpperCase() && second.length > 10)) {
      name = name + ', ' + second;
    }
  }
  return name;
}

function parseCategory(text) {
  const clean = text.replace(/\bAllotted\b/gi, '').trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';
  if (words.length === 1) return words[0].toUpperCase();
  const w1 = words[0].toLowerCase();
  const w2 = words[1].toLowerCase();
  if (w1 === 'open' && w2 === 'general') return 'OPEN GENERAL';
  if (w1 === w2) return w1.toUpperCase();
  // Handle "Open OBC", "Open EWS" etc.
  if (w1 === 'open') return 'OPEN ' + w2.toUpperCase();
  if (w2 === 'obc' || w2 === 'ews' || w2 === 'sc' || w2 === 'st') return w1.toUpperCase() + ' ' + w2.toUpperCase();
  return w1.toUpperCase();
}

function parseRow(rowText) {
  const leadMatch = rowText.match(/^(\d+)\s+(\d+)\s+/);
  if (!leadMatch) return { ok: false, error: 'Lead match failed' };
  const sno = parseInt(leadMatch[1], 10);
  const rank = parseInt(leadMatch[2], 10);
  let rest = rowText.slice(leadMatch[ leadMatch.length - 1 === leadMatch[0] ? 0 : leadMatch[0].length ]);
  // Correct leadMatch[0] length usage
  rest = rowText.slice(leadMatch[0].length);

  // Determine if R2 exists
  const r2Keywords = ['Upgraded', 'Fresh Allotted in 2nd Round', 'No Upgradation', 'Did not opt for Upgradation', 'Did not fill up fresh choices', 'Not Allotted'];
  
  // Find where R2 starts or the end remarks
  // In R2 reports, R1 status is followed by R2 Quota or "-"
  // Status words: Reported, Not Reported, Seat Surrendered
  const statusMatch = rest.match(/(Reported|Not Reported|Seat Surrendered|Seat Cancelled)/i);
  if (!statusMatch) return { ok: false, error: 'Status not found' };
  
  const r1EndIdx = statusMatch.index + statusMatch[0].length;
  const r1Text = rest.slice(0, statusMatch.index).trim();
  const status = statusMatch[0];
  const r2Part = rest.slice(r1EndIdx).trim();

  // Find R2 Remarks
  let r2Remarks = '';
  for (const rem of r2Keywords) {
    if (r2Part.includes(rem)) {
      r2Remarks = rem;
      break;
    }
  }

  const isR2Active = r2Remarks === 'Upgraded' || r2Remarks === 'Fresh Allotted in 2nd Round';
  const isR1Active = r2Remarks === 'No Upgradation' || r2Remarks === 'Did not opt for Upgradation' || r2Remarks === 'Did not fill up fresh choices' || status === 'Reported';

  let targetText = '';
  let targetQuota = '';
  let targetCategoryPart = '';

  if (isR2Active) {
    // Parse R2 part
    // Format: Quota Institute Specialty Category OptionNo Remarks
    // Strip Remarks from end
    let r2Core = r2Part.replace(r2Remarks, '').trim();
    
    // Find Quota
    for (const q of QUOTAS) {
      if (r2Core.startsWith(q)) {
        targetQuota = q;
        r2Core = r2Core.slice(q.length).trim();
        break;
      }
    }
    
    // Find Specialty
    const r2CoreUpper = r2Core.toUpperCase();
    let specialty = '';
    let spIdx = -1;
    for (const sp of SPECIALTIES) {
      const idx = r2CoreUpper.indexOf(sp);
      if (idx !== -1) {
        specialty = sp;
        spIdx = idx;
        break;
      }
    }
    
    if (!specialty) return { ok: false, error: 'Specialty not found in R2' };
    
    const instituteText = r2Core.slice(0, spIdx).trim();
    const tail = r2Core.slice(spIdx + specialty.length).trim();
    
    // Category is in the tail, before the option number
    const catMatch = tail.match(/^([A-Za-z\s]+?)\s+\d+/);
    const category = catMatch ? parseCategory(catMatch[1]) : parseCategory(tail);

    return {
      ok: true,
      data: {
        college_name: extractCollegeName(instituteText),
        college_code: '',
        specialty: SPECIALTY_NORM[specialty] || specialty,
        category: category,
        cutoff_rank: rank,
        year: 2025,
        counselling_body: 'MCC',
        degree: 'MDS',
        round: 'Round 2',
        state: extractState(instituteText),
        college_type: targetQuota === 'Management/Paid Seats Quota' ? 'Private' : 'Government',
        quota: targetQuota,
      }
    };
  } else if (isR1Active) {
    // Parse R1 part
    let r1Core = r1Text;
    
    // Quota
    for (const q of QUOTAS) {
      if (r1Core.startsWith(q)) {
        targetQuota = q;
        r1Core = r1Core.slice(q.length).trim();
        break;
      }
    }
    
    // Specialty
    const r1CoreUpper = r1Core.toUpperCase();
    let specialty = '';
    let spIdx = -1;
    for (const sp of SPECIALTIES) {
      const idx = r1CoreUpper.indexOf(sp);
      if (idx !== -1) {
        specialty = sp;
        spIdx = idx;
        break;
      }
    }
    
    if (!specialty) return { ok: false, error: 'Specialty not found in R1' };
    
    const instituteText = r1Core.slice(0, spIdx).trim();
    
    // Round 2 report usually doesn't show R1 category in the R1 column, 
    // but the final category is often in the tail of the row.
    // Let's look for a category in the whole row if R2 is '-'
    const tailMatch = r2Part.match(/([A-Za-z\s]+?)\s+\d+\s+/);
    const category = tailMatch ? parseCategory(tailMatch[1]) : 'OPEN GENERAL'; // fallback

    return {
      ok: true,
      data: {
        college_name: extractCollegeName(instituteText),
        college_code: '',
        specialty: SPECIALTY_NORM[specialty] || specialty,
        category: category,
        cutoff_rank: rank,
        year: 2025,
        counselling_body: 'MCC',
        degree: 'MDS',
        round: 'Round 2',
        state: extractState(instituteText),
        college_type: targetQuota === 'Management/Paid Seats Quota' ? 'Private' : 'Government',
        quota: targetQuota,
      }
    };
  }

  return { ok: false, error: 'No active allotment found (Vacant/Not Allotted)' };
}

function main() {
  const args = process.argv.slice(2);
  const inputPath = path.resolve(args[0]);
  const outputPath = args[1] ? path.resolve(args[1]) : null;

  const raw = fs.readFileSync(inputPath, 'utf8');
  const dataLines = raw.split('\n').filter(line => !/^(SNo|Rank|Allotted|Quota|Institute|Course|Remarks|candidate|Category|option)/i.test(line.trim())).join(' ');
  const flat = dataLines.replace(/\s{2,}/g, ' ').trim();

  // Split by SNo Rank (then Quota or dashes)
  const rowStart = new RegExp('(?:^|(?<=\\s))(\\d{1,5})\\s+(\\d{1,6})\\s+(?:-|All India|Delhi|Management|Aligarh|Banaras|Armed|Muslim|Jain|Non-Resident)', 'g');
  const matches = [];
  let match;
  while ((match = rowStart.exec(flat)) !== null) matches.push(match.index);

  const rowTexts = [];
  for (let i = 0; i < matches.length; i++) {
    rowTexts.push(flat.slice(matches[i], matches[i+1]).trim());
  }

  const HEADERS = ['college_name','college_code','specialty','category','cutoff_rank','year','counselling_body','degree','round','state','college_type','quota'];
  const outputLines = [HEADERS.join(',')];
  let count = 0;

  for (const rt of rowTexts) {
    const res = parseRow(rt);
    if (res.ok) {
      const d = res.data;
      outputLines.push(csvRow([d.college_name, d.college_code, d.specialty, d.category, d.cutoff_rank, d.year, d.counselling_body, d.degree, d.round, d.state, d.college_type, d.quota]));
      count++;
    }
  }

  const csv = outputLines.join('\n') + '\n';
  if (outputPath) {
    fs.writeFileSync(outputPath, csv);
    console.log(`Wrote ${count} rows to ${outputPath}`);
  } else {
    process.stdout.write(csv);
  }
}

main();
