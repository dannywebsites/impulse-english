/**
 * verify:links — every internal link an article asks for must actually render.
 *
 * Why this gate exists
 * --------------------
 * resolveInternalLinks used to drop any ref it did not recognise, with no warning and
 * no build failure. The writer emits refs the way a person says them ("Inglés para
 * secundaria"); the map was keyed the way the original PAA spreadsheet did
 * ("Secundaria"). 253 of 383 refs — 66% — resolved to nothing, and six articles
 * rendered a completely empty "Te puede interesar". Every build was green throughout.
 *
 * So this scores from dist/, not from source. Source can only tell you what was asked
 * for; dist tells you what a reader and a crawler actually get. Three checks:
 *
 *   1. requested vs rendered  — an article asking for N refs must render N links
 *   2. no empty sections      — an article with refs must not render zero links
 *   3. no dead hrefs          — every rendered href must exist as a page in dist/
 *
 * Check 3 matters because an alias can point at a tidy-looking URL that was never
 * built, which is a 404 the build is perfectly happy to emit.
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const DIST = join(ROOT, 'dist');
const ARTICLES = join(ROOT, 'src', 'content', 'articles');

if (!existsSync(DIST)) {
  console.error('verify:links — no dist/. Run `npm run build` first; this gate reads the built site.');
  process.exit(2);
}

/** Every URL path the build actually emitted. */
const built = new Set();
(function walk(dir, rel = '') {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, `${rel}/${e}`);
    else if (e === 'index.html') built.add(`${rel}/`);
  }
})(DIST);
built.add('/');

/** Frontmatter internalLinkRefs, in source order. */
function refsOf(md) {
  const m = md.match(/^internalLinkRefs:\n((?:[ \t]+- .*\n)+)/m);
  if (!m) return [];
  return m[1].trimEnd().split('\n').map((l) => l.replace(/^\s*-\s*/, '').trim()).filter(Boolean);
}

/**
 * The hrefs inside the rendered "Te puede interesar" block.
 *
 * Bounded by the section's own closing tag, not by a character count. A fixed-width
 * window looked like it worked and silently capped every long list at 8 links — the
 * same class of quiet truncation this gate exists to catch, so it is worth naming.
 */
function renderedLinks(html) {
  const i = html.indexOf('Te puede interesar');
  if (i === -1) return null; // section absent entirely
  const end = html.indexOf('</section>', i);
  const seg = html.slice(i, end === -1 ? html.length : end);
  return [...seg.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]);
}

/** Where an article's page landed. Frontmatter url is authoritative for the path. */
function pageFor(md, slug) {
  const m = md.match(/^url:\s*(.+)$/m);
  let u = (m ? m[1] : `/blog/${slug}`).trim().replace(/^["']|["']$/g, '');
  if (!u.endsWith('/')) u += '/';
  const p = join(DIST, u, 'index.html');
  return existsSync(p) ? { url: u, html: readFileSync(p, 'utf8') } : null;
}

const errors = [];
let checkedArticles = 0;
let shadowed = 0;
let totalRequested = 0;
let totalRendered = 0;

for (const f of readdirSync(ARTICLES).filter((f) => f.endsWith('.md'))) {
  // Desktop-sync twins ("foo 2.md") are not real articles and are not built.
  if (/ \d+\.md$/.test(f)) continue;
  const md = readFileSync(join(ARTICLES, f), 'utf8');
  const refs = refsOf(md);
  if (refs.length === 0) continue;

  const slug = basename(f, '.md');
  // A static src/pages/blog/<slug>.astro outranks the collection route, so the built
  // page is a hand-written component that never calls resolveInternalLinks. Its
  // frontmatter refs are inert by design; judging it here would report a defect that
  // does not exist. (That those wrappers exist at all is a separate, known issue.)
  if (existsSync(join(ROOT, 'src', 'pages', 'blog', `${slug}.astro`))) {
    shadowed++;
    continue;
  }

  const page = pageFor(md, slug);
  if (!page) continue;

  checkedArticles++;
  totalRequested += refs.length;

  const links = renderedLinks(page.html);
  if (links === null) {
    errors.push(`${f}: asks for ${refs.length} internal links but the page renders no "Te puede interesar" section at all`);
    continue;
  }
  totalRendered += links.length;

  if (links.length < refs.length) {
    errors.push(`${f}: asks for ${refs.length} internal links, renders ${links.length} — ${refs.length - links.length} silently dropped`);
  }
  for (const href of links) {
    if (!built.has(href)) errors.push(`${f}: renders a link to ${href}, which is not a page in dist/`);
  }
}

console.log('\n# Internal link audit\n');
console.log(`  articles checked : ${checkedArticles}`);
console.log(`  skipped (static wrapper shadows the collection route): ${shadowed}`);
console.log(`  refs requested   : ${totalRequested}`);
console.log(`  links rendered   : ${totalRendered}`);

if (errors.length) {
  console.log(`\n  ❌ ${errors.length} problem(s):\n`);
  for (const e of errors) console.log(`     ${e}`);
  console.log('\nFAIL ❌\n');
  process.exit(1);
}
console.log('\n  ✅ every requested internal link renders, and every rendered link exists\n');
console.log('ALL PASS ✅\n');
