#!/usr/bin/env node
// Design-system verification for impulse-english.es
//
// Why this exists. The site has a design system (src/index.css, @layer components)
// and shared section components. Content work in August 2026 shipped seven pages of
// hand-written raw Tailwind that ignored both: no eyebrow/rule headers, no buttons
// below the hero, no stars or Google mark on the reviews, no photo of the teacher,
// and prose on `leading-relaxed` instead of `.t-body` — the inconsistent line
// spacing. A written rule did not prevent that. This does.
//
// Two tiers, deliberately:
//
//   ERRORS  — structural, always fail. These are the things a reader notices:
//             a review that doesn't look like a review, a page with nothing to
//             click, price hidden below the fold, copy invisible to the auditor.
//
//   DEBT    — token drift (raw utilities, headings with no eyebrow/rule). This
//             predates the design system across all 21 page components, so
//             failing on it outright would just get the gate switched off.
//             Instead it RATCHETS: the current count is recorded in baseline.json
//             and the build fails if any file gets worse. Pay it down whenever you
//             touch a file, then --update-baseline.
//
// Usage:
//   node scripts/verify-design/run.mjs                    # check
//   node scripts/verify-design/run.mjs --list             # every offending line
//   node scripts/verify-design/run.mjs --update-baseline  # after paying debt down
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..');
const BASELINE = join(HERE, 'baseline.json');
const LIST = process.argv.includes('--list');
const UPDATE = process.argv.includes('--update-baseline');

// pages/hubs added 2026-08-08. Directory coverage rather than a PAGE_COMPONENTS
// entry on purpose: the next hub then ships gated too. Single-file coverage is
// exactly how PAAArticlePage drifted to 100% raw Tailwind while nobody looked.
const PAGE_DIRS = ['pages/cursos', 'pages/ubicaciones', 'pages/extranjero', 'pages/hubs'];

// Individual components that render a whole page type and therefore carry the
// same design responsibility as anything in PAGE_DIRS.
//
// PAAArticlePage is the template behind every collection blog article and every
// article the writer pipeline will produce from now on. It was never scanned,
// which is exactly how it drifted to 100% raw Tailwind — `container mx-auto
// px-6`, hand-rolled type — while carrying `prose prose-zinc` classes that
// matched nothing, because @tailwindcss/typography is not installed. One
// unscanned file governed 58 articles.
const PAGE_COMPONENTS = ['components/PAAArticlePage.tsx'];

// dangerouslySetInnerHTML is a structural error because it hides copy from
// geo-audit. That reasoning is about the SERVICE and LOCATION pages geo-audit
// actually scores (`--set servicios`, `--set barrios`). Blog articles are not in
// either set, and their bodies arrive from the CMS collection as HTML strings,
// so there is no JSX alternative available to this component. Exempt it from
// that ONE rule by name, and keep every other rule and all debt counting live.
const DANGEROUS_HTML_EXEMPT = new Set(['PAAArticlePage.tsx']);
const read = (p) => readFileSync(p, 'utf8');
const tsxIn = (d) =>
  existsSync(join(ROOT, d))
    ? readdirSync(join(ROOT, d)).filter((f) => f.endsWith('.tsx') && !f.includes('.bak')).map((f) => join(ROOT, d, f))
    : [];

/* ---------------------------- ERRORS ---------------------------- */

// dangerouslySetInnerHTML hides copy from geo-audit's strip_code: its tag
// stripper matches from "<p" to the first ">", swallowing prose held inside the
// attribute. It already cost one round of pricing copy the auditor could not see.
const dangerousHtml = (src) => {
  const n = (src.match(/dangerouslySetInnerHTML/g) || []).length;
  return n ? [`${n}× dangerouslySetInnerHTML — write real JSX children instead`] : [];
};

// A block of real Google reviews must look like Google reviews.
//
// Both quote styles, deliberately. The double-quote-only version of this test
// never fired on pages/extranjero/, whose review objects are all single-quoted —
// the same blind spot that let six testimonials past verify_quotes.py until
// 2026-08-06. A check that silently matches nothing reads exactly like a pass.
const REVIEW_OBJ = /\{\s*(?:name|author):\s*(["'])(?:(?!\1).)+\1\s*,\s*(?:text|quote):\s*["']/;
const reviewBlocks = (src, all) => {
  if (!REVIEW_OBJ.test(src)) return [];
  const s = src + all;
  const missing = [];
  if (!/fill-amber-400/.test(s)) missing.push('star row');
  if (!/#4285F4/.test(s)) missing.push('Google mark');
  if (!/gbpUrl/.test(s)) missing.push('link to the Google profile');
  return missing.length ? [`review block missing: ${missing.join(', ')}`] : [];
};

// Something to click on the way down, not only in the hero.
//
// Counts real CTAs, not just token usage: the barrio pages hand-style their
// anchors (rounded + padding + background) instead of using .btn-*, and they do
// give the reader somewhere to go. Not using the button system is token debt,
// which is measured separately — having nothing to click is the actual defect.
const AD_HOC_BUTTON = /<a\b[^>]*className="[^"]*(?=[^"]*\brounded-)(?=[^"]*\bpy-)(?=[^"]*\bbg-)[^"]*"/g;
const midPageCtas = (src, all) => {
  const s = src + all;
  const n = (s.match(/btn-primary|btn-secondary/g) || []).length + (s.match(AD_HOC_BUTTON) || []).length;
  return n >= 2 ? [] : [`only ${n} CTA(s) below the hero — needs at least 2`];
};

// Course pages must show price, group size and address without scrolling.
const quickFacts = (src, all, file) =>
  !file.includes('/cursos/') || /<QuickFacts/.test(src)
    ? []
    : ['no <QuickFacts> strip under the hero — price is not above the fold'];

const ERRORS = [
  ['dangerous-html', dangerousHtml],
  ['google-reviews', reviewBlocks],
  ['mid-page-cta', midPageCtas],
  ['quick-facts', quickFacts],
];

/* ----------------------------- DEBT ----------------------------- */

const TOKEN_SWAPS = [
  [/container\s+mx-auto\s+max-w-\w+/g, '.container-narrow / .container-page'],
  [/max-w-4xl\s+mx-auto/g, '.container-narrow'],
  [/text-zinc-[67]00\s+leading-relaxed/g, '.t-body'],
  [/className="text-indigo-600 hover:underline"/g, 'text-accent-blue or .btn-*'],
  [/<a\b[^>]*className="[^"]*(?=[^"]*\brounded-)(?=[^"]*\bpy-)(?=[^"]*\bbg-)[^"]*"/g, '.btn-primary / .btn-secondary / .btn-outline'],
];

const rawUtilities = (src) => {
  const hits = [];
  for (const [re, token] of TOKEN_SWAPS) {
    for (const m of src.match(re) || []) hits.push(`raw utility "${m.trim()}" → ${token}`);
  }
  return hits;
};

const bareHeadings = (src) => {
  const hits = [];
  for (const m of src.matchAll(/<h2\b[^>]*>/g)) {
    const before = src.slice(Math.max(0, m.index - 400), m.index);
    const after = src.slice(m.index, m.index + 400);
    if (!/eyebrow/.test(before) && !/rule/.test(after)) {
      hits.push(`<h2> with no eyebrow/rule: "${after.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 46)}"`);
    }
  }
  return hits;
};

const DEBT = [['raw-utilities', rawUtilities], ['bare-headings', bareHeadings]];

/* ---------------------------------------------------------------- */

function componentSources(src) {
  // Marker rules must see the components a page renders, or a page that composes
  // correctly reads as a page missing everything.
  let out = '';
  // Default AND named imports: `import { GoogleMark } from '.../components/...'`
  // is how the barrio pages pull the Google mark in, and matching only the
  // default form made the gate blind to it.
  for (const m of src.matchAll(/^import\s+(?:\w+|\{[^}]*\}|\w+\s*,\s*\{[^}]*\})\s+from\s+'([^']*\/components\/[^']+)'/gm)) {
    const name = m[1].split('/components/')[1];
    for (const ext of ['.tsx', '.ts']) {
      const p = join(ROOT, 'components', name + ext);
      if (existsSync(p)) { out += '\n' + read(p); break; }
    }
  }
  // Sibling imports from inside components/ itself: `import CTABand from './CTABand'`.
  // The pattern above only follows paths containing "/components/", which a file
  // already IN that directory never writes. Adding PAAArticlePage to the scan
  // exposed this: it composes <CTABand>, and the gate reported it as having only
  // one CTA because it could not see through the relative import.
  for (const m of src.matchAll(/^import\s+(?:\w+|\{[^}]*\}|\w+\s*,\s*\{[^}]*\})\s+from\s+'\.\/([\w-]+)'/gm)) {
    for (const ext of ['.tsx', '.ts']) {
      const p = join(ROOT, 'components', m[1] + ext);
      if (existsSync(p)) { out += '\n' + read(p); break; }
    }
  }
  return out;
}

const files = [
  ...PAGE_DIRS.flatMap(tsxIn),
  ...PAGE_COMPONENTS.map((p) => join(ROOT, p)).filter(existsSync),
];
if (!files.length) { console.error('no page files found — run from the project root'); process.exit(1); }

const prev = existsSync(BASELINE) ? JSON.parse(read(BASELINE)) : {};
const errors = [];
const debtNow = {};
const debtDetail = {};

for (const file of files) {
  const src = read(file);
  const all = componentSources(src);
  const name = basename(file);

  for (const [rule, fn] of ERRORS) {
    if (rule === 'dangerous-html' && DANGEROUS_HTML_EXEMPT.has(name)) continue;
    for (const hit of fn(src, all, file)) errors.push(`${name} — ${rule}: ${hit}`);
  }
  const d = DEBT.flatMap(([rule, fn]) => fn(src).map((h) => `${rule}: ${h}`));
  debtNow[name] = d.length;
  debtDetail[name] = d;
}

console.log('\n# Design audit\n');

if (errors.length) {
  console.log('  ERRORS — these fail the build\n');
  for (const e of errors) console.log(`  ✗ ${e}`);
} else {
  console.log(`  ✅ no structural errors across ${files.length} page components`);
}

const worse = Object.entries(debtNow).filter(([f, n]) => n > (prev[f] ?? 0));
const better = Object.entries(debtNow).filter(([f, n]) => n < (prev[f] ?? 0));
const total = Object.values(debtNow).reduce((a, b) => a + b, 0);
const wasTotal = Object.values(prev).reduce((a, b) => a + b, 0);

console.log(`\n  Token debt: ${total} across ${files.length} files (baseline ${existsSync(BASELINE) ? wasTotal : 'none yet'})`);
if (better.length) for (const [f, n] of better) console.log(`      ↓ ${f}: ${prev[f]} → ${n}`);
if (worse.length) {
  console.log('\n  DEBT INCREASED — new raw utilities or unlabelled headings:\n');
  for (const [f, n] of worse) {
    console.log(`  ✗ ${f}: ${prev[f] ?? 0} → ${n}`);
    for (const h of debtDetail[f].slice(0, LIST ? 99 : 5)) console.log(`      ${h}`);
  }
}
if (LIST && !worse.length) {
  for (const [f, d] of Object.entries(debtDetail)) {
    if (!d.length) continue;
    console.log(`\n  ${f} (${d.length})`);
    for (const h of d) console.log(`      ${h}`);
  }
}

if (UPDATE) {
  writeFileSync(BASELINE, JSON.stringify(debtNow, null, 2) + '\n');
  console.log(`\n  baseline.json updated → ${total} total`);
}

const failed = errors.length + (UPDATE ? 0 : worse.length);
console.log(`\n${failed === 0 ? 'ALL PASS ✅' : `${failed} PROBLEM(S) ❌`}\n`);
process.exit(failed === 0 ? 0 : 1);
