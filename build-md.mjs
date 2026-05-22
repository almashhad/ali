import fs from 'fs';

const p = JSON.parse(fs.readFileSync('prompts.json', 'utf8'));

let md = '# Vibe Perfumes — Gemini Image Prompts (50 Designs)\n\n';
md += '**Ordered by score (highest first).** Open [gemini.google.com](https://gemini.google.com), paste each prompt, and request a wide 16:9 image. The 6 designs tied at the top represent the strongest concepts from the master document.\n\n';
md += '> All prompts target Google Gemini Imagen / Nano Banana. They have been stripped of Midjourney-specific flags (`--ar`, `--style raw`) and rewritten with explicit aspect-ratio language Gemini understands.\n\n';
md += '## Quick reference table\n\n';
md += '| Rank | Design # | Score | Name |\n|---:|---:|---:|---|\n';
for (const x of p) {
  md += `| ${x.rank} | ${x.id} | ${x.score} | ${x.name} |\n`;
}
md += '\n---\n\n## The prompts\n\n';
for (const x of p) {
  md += `### Rank ${x.rank} — Design ${x.id}: ${x.name}  \`${x.score}/50\`\n\n`;
  md += `**Filename suggestion:** \`${x.filename}\`\n\n`;
  md += '```text\n' + x.prompt + '\n```\n\n';
  md += '---\n\n';
}

md = md.replace(/---\n\n$/, '');
fs.writeFileSync('GEMINI-PROMPTS.md', md);
console.log('wrote GEMINI-PROMPTS.md,', fs.statSync('GEMINI-PROMPTS.md').size, 'bytes,', p.length, 'prompts');
