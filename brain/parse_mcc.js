'use strict';
// parse_mcc.js — CommonJS parser for MCC NEET MDS PDF-pasted allotment data
// Usage: node parse_mcc.js <input.txt> [output.csv]
//        Output defaults to stdout if second arg is omitted.

const fs   = require('fs');
const path = require('path');

// ─── constants ───────────────────────────────────────────────────────────────

// Quota tokens — try in this order (longest / most-specific first)
const QUOTAS = [
  'Management/Paid Seats Quota',
  'Delhi University Quota',
  'Aligarh Muslim University',
  'All India',
];

// Specialties — longest-first so substring collisions are resolved correctly
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

// Specialty → normalised output name
const SPECIALTY_NORM = {
  'PROSTHODONTICS AND CROWN AND BRIDGE':
    'PROSTHODONTICS AND CROWN & BRIDGE',
  'ORAL AND MAXILLOFACIAL PATHOLOGY AND ORAL MICROBIOLOGY':
    'ORAL PATHOLOGY AND MICROBIOLOGY',
};

// ─── helpers ─────────────────────────────────────────────────────────────────

/** Wrap a single CSV field safely — quotes only when necessary. */
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

/**
 * Extract state from the trailing ", State, PINCODE" of an institute string.
 * Returns the state string or '' if not found.
 */
function extractState(instituteText) {
  // match ", <State text>, <6-digit PIN>" at end
  const m = instituteText.match(/,\s*([A-Za-z][A-Za-z\s()]+?),\s*\d{6}\s*$/);
  if (!m) return '';
  let state = m[1].trim();
  // Normalise "Delhi (NCT)" → "Delhi"
  state = state.replace(/\s*\(NCT\)\s*/gi, '').trim();
  return state;
}

/**
 * Extract college name from institute text.
 * Strategy:
 *   1. Strip the trailing ", State, PIN" portion.
 *   2. Split remaining by comma.
 *   3. Take first part as name.
 *   4. If second part is short (< 30 chars), does NOT start with a digit,
 *      and is not a long all-uppercase string — append it (it's a city/campus).
 */
function extractCollegeName(instituteText) {
  // Remove trailing ", State, PIN"
  const stripped = instituteText
    .replace(/,\s*[A-Za-z][A-Za-z\s()]+?,\s*\d{6}\s*$/, '')
    .trim();

  const parts = stripped.split(',').map(p => p.trim()).filter(Boolean);
  if (parts.length === 0) return instituteText.trim();

  let name = parts[0];

  if (parts.length > 1) {
    const second = parts[1];
    const isShort       = second.length < 30;
    const noLeadDigit   = !/^\d/.test(second);
    // "not all-uppercase-long" — skip if all-caps and > 10 chars (it's an address)
    const notAllCapsAddr = !(second === second.toUpperCase() && second.length > 10);

    if (isShort && noLeadDigit && notAllCapsAddr) {
      name = name + ', ' + second;
    }
  }

  return name;
}

/**
 * Parse the category tail: text is like "Open General Allotted",
 * "OBC OBC Allotted", "EWS EWS Allotted" etc.
 * Returns category string for CSV.
 */
function parseCategory(tail) {
  // Remove trailing "Allotted" (case-insensitive)
  const clean = tail.replace(/\bAllotted\b/gi, '').trim();
  const words = clean.split(/\s+/).filter(Boolean);

  if (words.length === 0) return '';

  if (words.length === 1) return words[0].toUpperCase();

  const w1 = words[0];
  const w2 = words[1];

  // "Open General" is a special compound category
  if (w1.toLowerCase() === 'open' && w2.toLowerCase() === 'general') {
    return 'OPEN GENERAL';
  }

  // If both words are the same → use just one (e.g. "OBC OBC" → "OBC")
  if (w1.toLowerCase() === w2.toLowerCase()) {
    return w1.toUpperCase();
  }

  // Different words → use first only (e.g. "Open OBC" → "OPEN", "Open EWS" → "OPEN")
  return w1.toUpperCase();
}

// ─── row splitter ─────────────────────────────────────────────────────────────

/**
 * Split the flat (newline-collapsed) text into logical row strings.
 * Each row starts with: <SNo digits> <Rank digits> <quota keyword>
 * We split on the boundary just before each match.
 */
function splitIntoRows(flat) {
  // Build a regex that matches the row-start pattern.
  // Quota start words: All India | Delhi University | Management | Aligarh
  const quotaAlt = 'All India|Delhi University|Management|Aligarh';
  // Pattern: word-boundary, 1-3 digit SNo, spaces, 1-6 digit Rank, spaces, quota
  const rowStart = new RegExp(
    `(?:^|(?<=\\s))(\\d{1,3})\\s+(\\d{1,6})\\s+(?:${quotaAlt})`,
    'g'
  );

  const rows = [];
  let lastIndex = 0;
  let match;
  const matches = [];

  // Collect all match positions
  while ((match = rowStart.exec(flat)) !== null) {
    matches.push(match.index);
  }

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i];
    const end   = i + 1 < matches.length ? matches[i + 1] : flat.length;
    rows.push(flat.slice(start, end).trim());
  }

  return rows;
}

// ─── single-row parser ───────────────────────────────────────────────────────

function parseRow(rowText) {
  const errors = [];

  // ── 1. Extract SNo and Rank (leading numbers) ──
  const leadMatch = rowText.match(/^(\d{1,3})\s+(\d{1,6})\s+/);
  if (!leadMatch) {
    errors.push(`Cannot parse SNo/Rank from: ${rowText.slice(0, 60)}`);
    return { ok: false, errors };
  }
  const sno  = parseInt(leadMatch[1], 10);
  const rank = parseInt(leadMatch[2], 10);
  let rest = rowText.slice(leadMatch[0].length);

  // ── 2. Extract quota ──
  let quota = '';
  for (const q of QUOTAS) {
    if (rest.startsWith(q)) {
      quota = q;
      rest = rest.slice(q.length).trimStart();
      break;
    }
  }
  if (!quota) {
    errors.push(`Row ${sno}: no quota matched in: ${rest.slice(0, 80)}`);
    return { ok: false, errors };
  }

  // ── 3. Extract specialty (search in upper-cased rest) ──
  const restUpper = rest.toUpperCase();
  let specialty = '';
  let specialtyIdx = -1;
  for (const sp of SPECIALTIES) {
    const idx = restUpper.indexOf(sp);
    if (idx !== -1) {
      specialty    = sp;
      specialtyIdx = idx;
      break;
    }
  }
  if (!specialty) {
    errors.push(`Row ${sno}: no specialty matched in: ${rest.slice(0, 120)}`);
    return { ok: false, errors };
  }

  // ── 4. Institute text = everything before specialty ──
  const instituteRaw = rest.slice(0, specialtyIdx).trim();

  // ── 5. Category tail = everything after specialty ──
  const afterSpecialty = rest.slice(specialtyIdx + specialty.length).trim();
  const category = parseCategory(afterSpecialty);

  // ── 6. Derive state and college name ──
  const state       = extractState(instituteRaw);
  const collegeName = extractCollegeName(instituteRaw);

  // ── 7. Normalize specialty ──
  const specialtyOut = SPECIALTY_NORM[specialty] || specialty;

  // ── 8. Derive college_type ──
  const collegeType = quota === 'Management/Paid Seats Quota' ? 'Private' : 'Government';

  return {
    ok: true,
    errors,
    data: {
      college_name:      collegeName,
      college_code:      '',
      specialty:         specialtyOut,
      category:          category,
      cutoff_rank:       rank,
      year:              2025,
      counselling_body:  'MCC',
      degree:            'MDS',
      round:             'Round 1',
      state:             state,
      college_type:      collegeType,
      quota:             quota,
    },
  };
}

// ─── main ────────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    process.stderr.write('Usage: node parse_mcc.js <input.txt> [output.csv]\n');
    process.exit(1);
  }

  const inputPath  = path.resolve(args[0]);
  const outputPath = args[1] ? path.resolve(args[1]) : null;

  if (!fs.existsSync(inputPath)) {
    process.stderr.write(`File not found: ${inputPath}\n`);
    process.exit(1);
  }

  const raw = fs.readFileSync(inputPath, 'utf8');

  // ── Pre-process: strip the PDF table header row(s) ──
  // Remove lines that are part of the column header block
  const headerLineRe = /^(SNo|Rank|Allotted Quota|Allotted Institute|Course|Category|Candidate|Remarks|Alloted)/i;
  const dataLines = raw
    .split('\n')
    .filter(line => !headerLineRe.test(line.trim()))
    .join(' ');

  // Collapse multiple spaces
  const flat = dataLines.replace(/\s{2,}/g, ' ').trim();

  // ── Split into logical rows ──
  const rowTexts = splitIntoRows(flat);

  if (rowTexts.length === 0) {
    process.stderr.write('WARNING: No rows found. Check input format.\n');
  }

  // ── Parse each row ──
  const HEADERS = [
    'college_name','college_code','specialty','category',
    'cutoff_rank','year','counselling_body','degree',
    'round','state','college_type','quota',
  ];

  const outputLines = [HEADERS.join(',')];
  let parsed = 0;
  let failed = 0;

  for (const rowText of rowTexts) {
    const result = parseRow(rowText);
    if (!result.ok) {
      failed++;
      for (const e of result.errors) process.stderr.write('PARSE ERROR: ' + e + '\n');
      continue;
    }
    parsed++;
    const d = result.data;
    outputLines.push(csvRow([
      d.college_name,
      d.college_code,
      d.specialty,
      d.category,
      d.cutoff_rank,
      d.year,
      d.counselling_body,
      d.degree,
      d.round,
      d.state,
      d.college_type,
      d.quota,
    ]));
  }

  const csvContent = outputLines.join('\n') + '\n';

  if (outputPath) {
    fs.writeFileSync(outputPath, csvContent, 'utf8');
    process.stderr.write(`Wrote ${parsed} rows to ${outputPath}  (${failed} failed)\n`);
  } else {
    process.stdout.write(csvContent);
    if (failed > 0) {
      process.stderr.write(`${failed} rows failed to parse.\n`);
    }
  }
}

main();
