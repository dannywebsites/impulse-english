#!/usr/bin/env node
/**
 * verify:facts — guards the commercial pages against factual drift.
 *
 * Reads dist/, never source. Three reasons that matters here:
 *   1. dist/ is what visitors and Google actually receive.
 *   2. It excludes dead components by construction. ValuesSection.tsx and InfoCards.tsx both
 *      carried "150+" and have zero importers — a source scan reports defects that don't ship.
 *   3. It excludes the ~300 .bak-* / " 2.tsx" Desktop-sync twins that pollute every glob here.
 *
 * FAIL-OPEN IS THE ENEMY. Every gate in this repo has failed by not looking:
 *   - geo-audit.py never exits non-zero; it prints a grade and returns 0.
 *   - verify_quotes.py printed "0 FAIL" for months on a regex that matched nothing, and six
 *     fabricated testimonials shipped behind it.
 *   - geo-audit.py's dist_of() returns None silently when a route doesn't resolve.
 * So this script: asserts every route resolves, prints the number of checks actually performed,
 * fails if that number is zero, and ships a --self-test that must go red on a poisoned fixture.
 *
 * Usage:
 *   node scripts/verify-facts/run.mjs              # gate (build dist/ first)
 *   node scripts/verify-facts/run.mjs --self-test  # prove the gate can fail
 *   node scripts/verify-facts/run.mjs --list       # show the register
 */

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');
const DIST = join(ROOT, 'dist');
const FACTS = JSON.parse(readFileSync(join(HERE, 'facts.json'), 'utf8'));

const argv = process.argv.slice(2);
const SELF_TEST = argv.includes('--self-test');
const LIST = argv.includes('--list');

const RED = (s) => `\x1b[31m${s}\x1b[0m`;
const GREEN = (s) => `\x1b[32m${s}\x1b[0m`;
const DIM = (s) => `\x1b[2m${s}\x1b[0m`;

/**
 * React SSR splits `{expr} text` into `183<!-- --> Reseñas`. Without stripping those markers
 * a search for "183 Reseñas" silently misses — exactly the false-negative this gate exists to
 * prevent. Also decode the entities Astro emits so "garantía" matches "garant&iacute;a".
 */
const ENT = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ' };
function normalise(html) {
  return html
    .replace(/<!--\s*-->/g, '')
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d))
    .replace(/&[a-z]+;/gi, (m) => ENT[m.toLowerCase()] ?? m);
}

/** Visible prose only — drops <script>, <style> and every tag's attributes (so alt text too). */
function visibleText(html) {
  return normalise(html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
}

/** Everything, including attributes and inline JSON-LD. Used when alt text counts. */
function fullText(html) {
  return normalise(html).replace(/\s+/g, ' ');
}

function routeToFile(route) {
  const rel = route === '/' ? 'index.html' : join(route.replace(/^\/|\/$/g, ''), 'index.html');
  return join(DIST, rel);
}

if (LIST) {
  console.log(`\nRoutes gated: ${FACTS.routes.length}`);
  FACTS.routes.forEach((r) => console.log(`  ${r}`));
  console.log(`\nRetired strings (must never appear):`);
  FACTS.retired.forEach((r) => console.log(`  ${r.label}\n    ${DIM(r.why)}\n    → ${r.instead}`));
  console.log(`\nCanonical facts:`);
  FACTS.canonical.forEach((c) => console.log(`  ${c.fact} = ${c.value}  on ${c.mustAppearOn.join(', ')}`));
  process.exit(0);
}

// ---------------------------------------------------------------- load routes

if (!existsSync(DIST)) {
  console.error(RED('FAIL: dist/ does not exist. Run `npm run build` first.'));
  process.exit(1);
}

const pages = new Map();
const missing = [];
for (const route of FACTS.routes) {
  const file = routeToFile(route);
  if (!existsSync(file)) { missing.push(route); continue; }
  pages.set(route, readFileSync(file, 'utf8'));
}

// A route that does not resolve is a HARD FAIL, never a silent skip. geo-audit.py's dist_of()
// returns None here and quietly downgrades the score instead — that bug shipped once already.
if (missing.length) {
  console.error(RED(`FAIL: ${missing.length} route(s) have no built output:`));
  missing.forEach((r) => console.error(`  ${r}  → ${routeToFile(r)}`));
  console.error(DIM('  Either the route was renamed (update facts.json) or the build is stale.'));
  process.exit(1);
}

// ---------------------------------------------------------------- self-test

if (SELF_TEST) {
  console.log('Self-test: poisoning an in-memory page with each retired string.\n');
  let caught = 0;
  for (const rule of FACTS.retired) {
    const probe = {
      '150+ / 155+ review count': 'Más de 150+ familias nos avalan',
      'pass-rate guarantee': 'Ofrecemos garantía 100% aprobados Cambridge',
      '+1.000 alumnos': 'Más de 1.000 alumnos formados desde 2023',
      'retired legal name': 'Bienvenido a Impulse English Academy La Vaguada',
      'unsourced salary statistic': 'Estadísticas muestran 15-25% aumento salarial con B2',
    }[rule.label];
    if (!probe) { console.error(RED(`  no probe defined for "${rule.label}" — add one`)); process.exit(1); }
    if (new RegExp(rule.pattern, 'i').test(probe)) { console.log(GREEN(`  caught  ${rule.label}`)); caught++; }
    else console.error(RED(`  MISSED  ${rule.label}  (pattern does not match its own probe)`));
  }
  const ok = caught === FACTS.retired.length;
  console.log(`\n${caught}/${FACTS.retired.length} patterns caught their probe.`);
  console.log(ok ? GREEN('Self-test PASS — the gate can fail.') : RED('Self-test FAIL — a rule cannot detect its own defect.'));
  process.exit(ok ? 0 : 1);
}

// ---------------------------------------------------------------- checks

let checks = 0;
const failures = [];
const accepted = [];

/** A finding is "accepted" only if facts.json names this exact rule AND this exact route. */
function isAccepted(ruleLabel, route) {
  return (FACTS.accepted ?? []).some((a) => a.rule === ruleLabel && a.routes.includes(route));
}
function acceptedNote(ruleLabel) {
  return (FACTS.accepted ?? []).find((a) => a.rule === ruleLabel);
}

// 1. Retired strings must not appear anywhere in the gated routes.
for (const rule of FACTS.retired) {
  const re = new RegExp(rule.pattern, 'gi');
  for (const [route, html] of pages) {
    const haystack = rule.ignoreInAltText ? visibleText(html) : fullText(html);
    checks++;
    const hits = haystack.match(re);
    if (hits) {
      const finding = {
        route, kind: 'retired', label: rule.label,
        detail: `found ${hits.length}× "${[...new Set(hits)].join('", "')}"`,
        why: rule.why, instead: rule.instead,
      };
      if (isAccepted(rule.label, route)) accepted.push(finding);
      else failures.push(finding);
    }
  }
}

// 2. Canonical facts must be present on the routes that assert them.
for (const fact of FACTS.canonical) {
  for (const route of fact.mustAppearOn) {
    if (!pages.has(route)) continue;
    checks++;
    const haystack = fullText(pages.get(route));
    if (!haystack.includes(fact.value)) {
      failures.push({
        route, kind: 'missing', label: fact.fact,
        detail: `expected "${fact.value}" and it is not on the page`,
        why: `Source of truth: ${fact.source}`, instead: fact.value,
      });
    }
  }
}

// 3. Structured data must agree with the visible copy.
for (const check of FACTS.schemaChecks) {
  for (const [route, html] of pages) {
    checks++;
    const ld = [...normalise(html).matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)]
      .map((m) => m[1].replace(/\s+/g, '')).join('');
    if (!ld.includes(check.jsonPathContains.replace(/\s+/g, ''))) {
      failures.push({
        route, kind: 'schema', label: check.fact,
        detail: `JSON-LD does not contain ${check.jsonPathContains}`,
        why: check.why, instead: check.jsonPathContains,
      });
    }
  }
}

// ---------------------------------------------------------------- report

console.log(`\nroutes scanned:  ${pages.size}/${FACTS.routes.length}`);
console.log(`checks performed: ${checks}`);

// A green run that checked nothing is a failure, not a pass.
if (checks === 0) {
  console.error(RED('\nFAIL: zero checks performed — the gate is not looking at anything.'));
  process.exit(1);
}

// Accepted findings are real. Print them every run so they cannot quietly become permanent.
if (accepted.length) {
  const byRule = new Map();
  for (const a of accepted) byRule.set(a.label, [...(byRule.get(a.label) ?? []), a.route]);
  console.log(`\nACCEPTED (open, not failing — see facts.json "accepted"):`);
  for (const [label, routes] of byRule) {
    const note = acceptedNote(label);
    console.log(`  • ${label} — ${routes.length} route(s), raised ${note?.raised}, owner ${note?.owner}`);
    console.log(`    ${DIM(note?.reason ?? '')}`);
  }
}

if (!failures.length) {
  console.log(GREEN(`\nPASS — ${checks} checks, 0 failures, ${accepted.length} accepted.\n`));
  process.exit(0);
}

console.error(RED(`\n${failures.length} FAILURE(S):\n`));
for (const f of failures) {
  console.error(`  ${RED('✗')} ${f.route}  [${f.kind}] ${f.label}`);
  console.error(`      ${f.detail}`);
  console.error(`      ${DIM(f.why)}`);
  console.error(`      ${DIM('use instead: ' + f.instead)}\n`);
}
process.exit(1);
