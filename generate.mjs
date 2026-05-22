// Vibe Perfumes — Gemini image generator
// Reads prompts.json and produces a PNG for each entry via the Gemini REST API.
//
// Usage:
//   1. cp .env.example .env  &&  put your key in .env (GEMINI_API_KEY=...)
//   2. node generate.mjs                       # generate all 50, sorted by rank
//   3. node generate.mjs --only 27,50,23       # generate specific designs only
//   4. node generate.mjs --from 1 --to 5       # generate ranks 1..5 only
//
// Output goes to ./images/ (gitignored).
// Free-tier rate limits apply — script paces requests at 6/minute by default.

import fs from 'node:fs';
import path from 'node:path';

// --- minimal .env loader (no deps) ---------------------------------------------
function loadEnv() {
  const envPath = '.env';
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
loadEnv();

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash-image';
const OUT_DIR = process.env.OUT_DIR || 'images';
const REQUESTS_PER_MIN = Number(process.env.REQUESTS_PER_MIN || 6);

if (!API_KEY) {
  console.error('ERROR: GEMINI_API_KEY missing. Create a .env file with GEMINI_API_KEY=your_key');
  process.exit(1);
}

// --- arg parsing ---------------------------------------------------------------
const args = process.argv.slice(2);
function flag(name) {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : null;
}
const only = flag('--only');
const fromRank = flag('--from');
const toRank = flag('--to');

const prompts = JSON.parse(fs.readFileSync('prompts.json', 'utf8'));

let selected = prompts;
if (only) {
  const ids = new Set(only.split(',').map(s => s.trim()));
  selected = prompts.filter(p => ids.has(p.id));
}
if (fromRank) selected = selected.filter(p => p.rank >= Number(fromRank));
if (toRank) selected = selected.filter(p => p.rank <= Number(toRank));

if (selected.length === 0) {
  console.error('No prompts selected.');
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

console.log(`Model: ${MODEL}`);
console.log(`Pacing: ${REQUESTS_PER_MIN} requests/minute`);
console.log(`Generating ${selected.length} of ${prompts.length} images → ./${OUT_DIR}/\n`);

// --- Gemini call ---------------------------------------------------------------
async function generateOne(p) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  const body = {
    contents: [{ parts: [{ text: p.prompt }] }],
    generationConfig: { responseModalities: ['IMAGE'] },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`HTTP ${res.status}: ${txt.slice(0, 400)}`);
  }
  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts || [];
  const imgPart = parts.find(x => x.inlineData?.data);
  if (!imgPart) throw new Error('No image in response: ' + JSON.stringify(data).slice(0, 400));
  const buf = Buffer.from(imgPart.inlineData.data, 'base64');
  const filePath = path.join(OUT_DIR, p.filename);
  fs.writeFileSync(filePath, buf);
  return filePath;
}

// --- main loop with pacing -----------------------------------------------------
const sleep = ms => new Promise(r => setTimeout(r, ms));
const intervalMs = Math.ceil(60_000 / REQUESTS_PER_MIN);

const results = { ok: [], fail: [] };
const started = Date.now();

for (let i = 0; i < selected.length; i++) {
  const p = selected[i];
  const tag = `[rank ${p.rank} · design ${p.id} · ${p.name}]`;
  process.stdout.write(`${tag} ... `);
  try {
    const filePath = await generateOne(p);
    console.log(`OK → ${filePath}`);
    results.ok.push(p);
  } catch (err) {
    console.log(`FAIL: ${err.message}`);
    results.fail.push({ ...p, error: err.message });
  }
  if (i < selected.length - 1) await sleep(intervalMs);
}

const mins = ((Date.now() - started) / 60000).toFixed(1);
console.log(`\nDone in ${mins} min. ${results.ok.length} ok, ${results.fail.length} failed.`);

if (results.fail.length) {
  fs.writeFileSync('failed.json', JSON.stringify(results.fail, null, 2));
  console.log('Wrote failed.json — retry with: node generate.mjs --only ' + results.fail.map(p => p.id).join(','));
  process.exit(2);
}
