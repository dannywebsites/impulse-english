# Phase 07: Content Debranding - Research

**Researched:** 2026-04-09
**Domain:** Astro page meta tags, TypeScript article data, YAML markdown frontmatter, Node.js CLI scripting
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Each .astro page imports `NAP` from the appropriate relative path to `utils/napData` and uses template literals for meta title, description, and keywords. Pattern: `` title={`${pageSpecificPart} | ${NAP.name}`} ``
- **D-02:** Pages that already import NAP (Phase 5/6 work) just need their hardcoded meta strings replaced. Pages that don't import NAP yet need the import added.
- **D-03:** The `description` and `keywords` props use NAP.name, NAP.city, NAP.neighborhood where "Impulse English Academy", "Madrid", "Barrio del Pilar" appear.
- **D-04:** `data/articles/cambridge-b2-first.ts` and `cambridge-c1-advanced.ts` import NAP and replace all literal "Impulse English Academy" with `NAP.name` in content strings (seoTitle, seoDescription, contextSections content, FAQ answers).
- **D-05:** Since these are TypeScript files with template literals, NAP.name can be interpolated directly: `` `En ${NAP.name}, te preparamos...` ``
- **D-06:** The 23 markdown files in `src/content/articles/` contain "Impulse English Academy" in frontmatter fields. These are YAML strings — they cannot import NAP.
- **D-07:** Strategy for markdown: Replace "Impulse English Academy" with a placeholder or accept existing articles keep the current brand name and only NEW articles use dynamic values. See D-08 for resolution.
- **D-08:** Recommended approach: The onboarding CLI does a find-and-replace in markdown files to replace the brand name from brand-config during onboarding.
- **D-09:** The onboarding CLI adds a step to find-and-replace "Impulse English Academy" in all markdown article files with the new client's brand name.
- **D-10:** The onboarding CLI adds a step to update .astro page meta tags if any still contain hardcoded brand references (belt-and-suspenders alongside NAP import changes).
- **D-11:** Success: after running onboarding with test data, `grep -r "Impulse" dist/` returns zero results.

### Claude's Discretion
- Exact page-specific meta title patterns (what comes before `| ${NAP.name}`)
- Whether to use a content collection transform vs CLI find-and-replace for markdown
- Grouping of .astro pages into batches for the plan
- Whether seo-system pages also need meta tag debranding

### Deferred Ideas (OUT OF SCOPE)
- auto-publish.js generating branded articles — Phase 8 scope
- seo-system page meta tags — check if covered by Phase 5 or needs separate attention
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| ONBD-01 | CLI script at scripts/onboard-client.js walks user through structured question flow | Phase 7 closes gap HIGH-07 (18 .astro pages with hardcoded meta) and HIGH-08 (63+ Impulse refs in article data + 23 markdown files). The CLI already generates napData.ts and brand-config.ts — this phase adds a markdown find-and-replace step so onboarding fully replaces the brand name in article content. |
</phase_requirements>

---

## Summary

Phase 07 is a mechanical find-and-replace phase across three distinct file types: Astro page `.astro` files (meta props), TypeScript article data files (string literals), and YAML markdown frontmatter files. Each file type requires a different substitution strategy because of their different execution environments.

The audit confirms the CONTEXT.md numbers: **16 .astro page files** (not 18 — the actual grep shows 16 files, though some subdirectory pages were also impacted bringing the effective count to 20 total .astro files across all directories) have hardcoded "Impulse" in meta strings. **2 TypeScript article data files** have 40 combined occurrences. **All 23 markdown article files** have "Impulse" references, totaling 48 occurrences. The markdown references are predominantly in the `brandSection` field (heading and content), with a smaller number embedded within `contextSections.content` HTML strings in a few files.

The central constraint is that YAML markdown cannot import TypeScript. The onboarding CLI (already ~1016 lines, fully functional for config generation) needs one new function: a `replaceInMarkdownArticles(brandName)` function that reads all `.md` files in `src/content/articles/`, replaces "Impulse English Academy" (and the shorthand "Impulse English") with the new brand name, and writes them back. This function is called after the user confirms promotion of the generated config files.

**Primary recommendation:** Three sequential tasks — (1) NAP import + meta tag replacement in all .astro pages, (2) NAP import + template literal replacement in the two TS article data files, (3) CLI markdown find-and-replace function addition. No build-time transforms required. No content collection schema changes needed.

---

## Runtime State Inventory

> This is a rename/refactor phase. Each category is answered explicitly.

| Category | Items Found | Action Required |
|----------|-------------|------------------|
| Stored data | None. The site is fully static. No database, no Mem0, no ChromaDB. | None |
| Live service config | None. Vercel config (`vercel.json`) does not reference "Impulse" in redirect rules (confirmed — redirects use URL paths only). | None |
| OS-registered state | None. No Task Scheduler tasks, no pm2 processes, no systemd units. | None |
| Secrets/env vars | None. `.env` variables are for webhook URL and tracking IDs — none use "Impulse" as a key name. | None |
| Build artifacts | `dist/` directory will contain "Impulse" until a fresh build is run after source changes. The onboarding CLI already runs `npm run build` as its final step (unless `--skip-build`). | Existing dist/ is regenerated during onboarding build verification step — no separate action needed. |

**Note on markdown:** The 23 `.md` files in `src/content/articles/` contain "Impulse" as literal string content. These are source files (not compiled artifacts), so changing them changes what gets compiled into `dist/`. The CLI find-and-replace step (D-09) handles them at onboarding time.

---

## Standard Stack

### Core (all already installed — no new dependencies required)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Astro | 5.7.10 | Renders `.astro` pages with TypeScript frontmatter | Project framework — NAP import works identically to any other TS import in frontmatter |
| Node.js `fs` module | built-in | File read/write for markdown find-and-replace in CLI | Already used in `onboard-client.js` (`readFileSync`, `writeFileSync`) |
| Node.js `path` module | built-in | Resolving `src/content/articles/` directory path | Already used in `onboard-client.js` |
| Node.js `fs.readdirSync` | built-in | Listing all `.md` files in articles directory | Already used pattern in CLI for directory operations |

### No New Dependencies

This phase installs nothing. All tools needed are already in the codebase:
- NAP import pattern: established in Phases 5-6 (BaseLayout.astro, SEOHead.tsx)
- CLI file I/O: established in onboard-client.js (generateBrandConfig, generateNapData, etc.)
- Template literal interpolation: standard TypeScript

---

## Architecture Patterns

### Pattern 1: NAP Import in .astro Frontmatter

**What:** Add a single import line to the frontmatter section of each .astro page, then replace hardcoded "Impulse..." strings in the `<BaseLayout>` props with template literals.

**When to use:** Any .astro page that passes `title`, `description`, or `keywords` as string props to BaseLayout.

**Confirmed: No .astro pages currently import NAP.** Zero results from `grep -rn "import.*NAP\|from.*napData" src/pages/ --include="*.astro"`. Every page needs the import added.

**Relative import paths vary by directory depth:**

```typescript
// src/pages/*.astro (depth 1 from utils/)
import { NAP } from '../../utils/napData';

// src/pages/cursos-ingles/*.astro (depth 2)
import { NAP } from '../../../utils/napData';

// src/pages/academias-ingles-madrid/*.astro (depth 2)
import { NAP } from '../../../utils/napData';

// src/pages/examenes-cambridge/*.astro (depth 2)
import { NAP } from '../../../utils/napData';

// src/pages/blog/index.astro — SPECIAL CASE
// Already imports from '../../layouts/BaseLayout.astro' (3-level deep)
import { NAP } from '../../../utils/napData';
```

**Verified path depth:** `src/pages/index.astro` already imports from `'../../utils/images-astro'` confirming the 2-level relative path for top-level pages. Subdir pages like `infantil.astro` import from `'../../../utils/images-astro'` confirming 3-level for pages in subdirectories.

**Example replacement (sobre-nosotros.astro):**
```typescript
// BEFORE
import { NAP } from '../../utils/napData';  // ADD THIS LINE

<BaseLayout
  title="Sobre Nosotros"
  description="Conoce Impulse English Academy. Centro preparador Cambridge oficial en La Vaguada, Madrid."
  ...
>

// AFTER
import { NAP } from '../../utils/napData';

<BaseLayout
  title={`Sobre Nosotros | ${NAP.name}`}
  description={`Conoce ${NAP.name}. Centro preparador Cambridge oficial en La Vaguada, ${NAP.city}.`}
  ...
>
```

### Pattern 2: NAP Import in TypeScript Article Data Files

**What:** Add NAP import at top of file, replace all string literals containing "Impulse English Academy" or "Impulse" with template literals.

**Example (cambridge-b2-first.ts):**
```typescript
// ADD at top of file (line 1, before other imports)
import { NAP } from '../utils/napData';

// BEFORE
heading: 'Preparamos el B2 First en Impulse',
content: 'En Impulse English Academy, Centro Preparador Oficial Cambridge...'

// AFTER
heading: `Preparamos el B2 First en ${NAP.shortName}`,
content: `En ${NAP.name}, Centro Preparador Oficial Cambridge...`
```

**Relative path:** `data/articles/cambridge-b2-first.ts` is 2 levels from root, `utils/napData.ts` is 1 level. Import: `'../utils/napData'`.

**Confirmed count:** 21 occurrences in cambridge-b2-first.ts, 19 in cambridge-c1-advanced.ts (40 total).

**Shorthand "Impulse" references:** Some headings use bare "Impulse" (e.g., `'Preparamos el B2 First en Impulse'`). These should use `NAP.shortName` (`"Impulse English"`) or `NAP.name` depending on context.

### Pattern 3: CLI Markdown Find-and-Replace Function

**What:** New function in `onboard-client.js` that scans `src/content/articles/*.md` and replaces brand name strings.

**When to call:** After promotion of config files succeeds (currently after `copyFileSync` loop completes), before the build verification step.

**Implementation pattern (matching existing CLI style):**

```javascript
// New function — add after generateWebmanifest()
function replaceInMarkdownArticles(answers) {
  const articlesDir = join(WEBSITE_ROOT, 'src', 'content', 'articles');
  const files = readdirSync(articlesDir).filter(f => f.endsWith('.md'));
  
  let totalReplacements = 0;
  for (const file of files) {
    const filePath = join(articlesDir, file);
    const original = readFileSync(filePath, 'utf-8');
    
    // Replace full brand name first (order matters — longer match first)
    let updated = original
      .replace(/Impulse English Academy/g, answers.legalName)
      .replace(/Impulse English/g, answers.shortName);
    
    if (updated !== original) {
      writeFileSync(filePath, updated, 'utf-8');
      const count = (original.match(/Impulse English Academy|Impulse English/g) || []).length;
      totalReplacements += count;
      console.log(`  \x1b[32m✓\x1b[0m  ${file} (${count} replacements)`);
    }
  }
  console.log(`\n  Total: ${totalReplacements} brand name replacements in ${files.length} articles`);
}
```

**Call site:** Insert after promotion loop (`console.log('\n\x1b[1mAll drafts promoted.\x1b[0m')`) and before build verification:

```javascript
// ─── Article debranding ───────────────────────────────────────────────────
console.log('\n\x1b[1mUpdating article content with new brand name...\x1b[0m');
replaceInMarkdownArticles(answers);
```

**Node.js imports needed:** `readdirSync` — already imported at top of file (`import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs'`). Just add `readdirSync` to the destructured import.

### Pattern 4: index.astro Non-Meta Impulse References

**What:** index.astro has 4 Impulse occurrences. 2 are in meta props (handled by Pattern 1). 2 are non-meta: an iframe `title` attribute in an inline script, and an image `alt` attribute.

**The non-meta occurrences:**
```javascript
// Line 58 — inline script (is:inline), sets iframe title
f.title = 'Impulse English Academy, La Vaguada, Barrio del Pilar.';

// Line 72 — Picture alt attribute
alt="Estudiantes de primaria sonriendo en clase de inglés - Impulse English Academy"

// Line 102 — TeamSection prop
teamImageAlt="Profesores y estudiantes de inglés en Impulse English Academy"
```

**Important constraint:** The `is:inline` script at line 58 cannot access Astro frontmatter variables directly. However, D-03 in CONTEXT.md only requires replacing "Impulse English Academy", "Madrid", "Barrio del Pilar" from meta props. The inline script iframe title and alt text references are also in scope for grep success.

**Resolution:** For the `alt` attributes and TeamSection prop — these are in the Astro template, so they CAN use `{NAP.name}`:
```astro
alt={`Estudiantes de primaria sonriendo en clase de inglés - ${NAP.name}`}
teamImageAlt={`Profesores y estudiantes de inglés en ${NAP.name}`}
```

For the `is:inline` script — use `define:vars` directive (established pattern from Phase 05-01 decision):
```astro
<script is:inline define:vars={{ brandName: NAP.name, neighborhood: NAP.neighborhood }}>
  // ...
  f.title = `${brandName}, La Vaguada, ${neighborhood}.`;
```

### Recommended Project Structure (no changes needed)

The existing structure is correct. This phase modifies files within it:
```
March-Impulse-Web-.../
├── src/pages/              ← 20 .astro files to modify (meta props)
├── data/articles/          ← 2 .ts files to modify (NAP import + template literals)
├── src/content/articles/   ← 23 .md files to modify (CLI handles at onboarding time)
│                             Source updated now; CLI applies changes on clone
├── scripts/
│   └── onboard-client.js   ← Add replaceInMarkdownArticles() function
└── utils/
    └── napData.ts           ← Source of truth (read-only in this phase)
```

### Anti-Patterns to Avoid

- **Skipping the relative path depth check:** Using `'../../utils/napData'` in a subdirectory page (cursos-ingles, examenes-cambridge, academias-ingles-madrid) will cause a build error. Paths must be 3 levels: `'../../../utils/napData'`.
- **Using `define:vars` unnecessarily:** Only needed for `is:inline` scripts. Regular Astro template expressions `{NAP.name}` work everywhere else.
- **Regex order in CLI:** "Impulse English Academy" must be replaced before "Impulse English" to avoid double-replacement. Always run longer string first.
- **Breaking the Zod schema:** The markdown `brandSection` schema requires `heading`, `content`, and `ctaLinks` (array). Do not remove the `brandSection` key — only replace the string values inside it.
- **Missing `readdirSync` import:** The CLI uses `readFileSync` and `writeFileSync` but not `readdirSync` currently — must be added to the destructured import at line 8.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Markdown file scanning | Custom recursive walker | `readdirSync(dir).filter(f => f.endsWith('.md'))` | Articles directory is flat — no subdirectories, no recursion needed |
| String replacement in YAML | YAML parser/serializer | Simple string replace on raw file content | YAML structure is predictable, quotes are consistent, regex is sufficient and avoids yaml parsing edge cases |
| NAP values in pages | Build-time content transform | Direct NAP import in frontmatter | Astro frontmatter is full TypeScript — imports work natively |
| Tracking all changed files | Diff-based system | `updated !== original` check per file | Simple and sufficient for this one-time CLI operation |

---

## Common Pitfalls

### Pitfall 1: Import Path Depth Errors

**What goes wrong:** Build fails with "Cannot resolve module" on pages in subdirectories.
**Why it happens:** Pages at `src/pages/cursos-ingles/infantil.astro` are 3 levels from root, but `../../utils/napData` only goes 2 levels.
**How to avoid:** Pages in any subdirectory of `src/pages/` must use `../../../utils/napData`. Confirmed from existing imports in infantil.astro: `'../../../utils/images-astro'`.
**Warning signs:** Build error immediately on `npm run build`.

### Pitfall 2: is:inline Script Variable Access

**What goes wrong:** `NAP.name` is used directly inside an `is:inline` script — Astro strips frontmatter access in inline scripts.
**Why it happens:** `is:inline` prevents Astro processing of the script content. Only `define:vars` passes variables through.
**How to avoid:** For line 58 in index.astro (iframe title), use `define:vars={{ brandName: NAP.name, ... }}` on the script tag.
**Warning signs:** The iframe title shows "undefined" or the literal text "NAP.name".

### Pitfall 3: Partial "Impulse" Replacement in Markdown

**What goes wrong:** After CLI runs, `grep -r "Impulse" dist/` still finds results.
**Why it happens:** The markdown has both "Impulse English Academy" (full) and bare "Impulse" used in headings like `'Preparamos el B2 First en Impulse'`. The 48 total occurrences include both forms. Replacing only "Impulse English Academy" leaves the heading shorthand.
**How to avoid:** Replace "Impulse English Academy" first, then "Impulse English" (shortName), with care not to replace "Impulse" as a bare word (which might match unrelated content). Verified: the bare "Impulse" in markdown always appears as "Impulse English Academy" or "Impulse English" — the regex `/Impulse English Academy/g` followed by `/Impulse English/g` covers all 48 occurrences.
**Warning signs:** Post-build grep returns results from markdown-sourced article pages.

### Pitfall 4: Markdown Backup Before CLI Modification

**What goes wrong:** CLI modifies source files without backup, making reversal difficult.
**Why it happens:** The existing CLI backs up generated config files (napData.ts, brand-config.ts) to `.draft/backup/` but the new markdown step has no equivalent.
**How to avoid:** The CLI should back up the `src/content/articles/` directory before modification, or at minimum add the backup to the existing `backupMap`. CLAUDE.md mandates backups before editing.
**Warning signs:** No `.bak` files created for markdown changes.

### Pitfall 5: Articles Updated in Source but CLI Step Missing for New Clones

**What goes wrong:** A new client clones the repo, the markdown files still say "Impulse English Academy" because the Phase 07 source changes only updated the Impulse production repo's markdown files, not the template's onboarding logic.
**Why it happens:** The markdown files in source contain the real brand name. A new clone needs the CLI's find-and-replace step (D-09) to work correctly.
**How to avoid:** Both changes must happen: (a) update markdown sources to use generic language OR keep current content as template baseline that CLI replaces, AND (b) add CLI function. Decision D-08 chose CLI find-and-replace as the strategy, so the markdown source changes in Phase 7 replace "Impulse English Academy" with generic content, AND the CLI handles it on future clones.
**Warning signs:** Running onboarding on a fresh clone, building, then grepping `dist/` still finds brand references.

---

## Code Examples

### .astro Page Meta — Complete Before/After (sobre-nosotros.astro)

```typescript
// Source: existing pattern from BaseLayout.astro (Phase 05)
// BEFORE (current state)
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SobreNosotrosPage from '../../pages/SobreNosotrosPage';
import CookieBanner from '../../components/CookieBanner';
import { getImage } from 'astro:assets';
import { astroHeroImages } from '../../utils/images-astro';

const heroImg = await getImage({ src: astroHeroImages.jpWithStudents, format: 'webp', width: 1920, quality: 80 });
---

<BaseLayout
  title="Sobre Nosotros"
  description="Conoce Impulse English Academy. Centro preparador Cambridge oficial en La Vaguada, Madrid. Más de 10 años enseñando inglés. 100% aprobados."
  keywords="sobre nosotros academia inglés, quienes somos impulse english, historia academia inglés madrid, equipo profesores inglés"
  canonical="/sobre-nosotros"
>

// AFTER
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SobreNosotrosPage from '../../pages/SobreNosotrosPage';
import CookieBanner from '../../components/CookieBanner';
import { getImage } from 'astro:assets';
import { astroHeroImages } from '../../utils/images-astro';
import { NAP } from '../../utils/napData';

const heroImg = await getImage({ src: astroHeroImages.jpWithStudents, format: 'webp', width: 1920, quality: 80 });
---

<BaseLayout
  title={`Sobre Nosotros | ${NAP.name}`}
  description={`Conoce ${NAP.name}. Centro preparador Cambridge oficial en La Vaguada, ${NAP.city}. Más de 10 años enseñando inglés. 100% aprobados.`}
  keywords={`sobre nosotros academia inglés, quienes somos ${NAP.shortName.toLowerCase()}, historia academia inglés ${NAP.city.toLowerCase()}, equipo profesores inglés`}
  canonical="/sobre-nosotros"
>
```

### TS Article Data — NAP Import Pattern

```typescript
// Source: consistent with Phase 05/06 NAP usage pattern
// data/articles/cambridge-b2-first.ts — top of file
import type { PAAArticle } from './types';
import { NAP } from '../utils/napData';  // ADD THIS LINE

// BEFORE
heading: 'Preparamos el B2 First en Impulse',
content: 'En Impulse English Academy, Centro Preparador Oficial Cambridge, os acompañamos...'

// AFTER
heading: `Preparamos el B2 First en ${NAP.shortName}`,
content: `En ${NAP.name}, Centro Preparador Oficial Cambridge, os acompañamos...`
```

### CLI Markdown Replace — Module Import Update

```javascript
// scripts/onboard-client.js — line 8 (current)
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';

// AFTER — add readdirSync
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, readdirSync } from 'node:fs';
```

---

## Complete Scope Summary (Exact File Counts)

### .astro Pages to Modify (20 files total)

**Root-level pages (16 files — use `../../utils/napData`):**
- `src/pages/index.astro` — 4 occurrences (2 meta, 2 non-meta alt/title)
- `src/pages/sobre-nosotros.astro` — 1 occurrence
- `src/pages/metodologia.astro` — 1 occurrence
- `src/pages/nuestro-equipo.astro` — 1 occurrence
- `src/pages/precios.astro` — 1 occurrence
- `src/pages/testimonios.astro` — 1 occurrence
- `src/pages/contacto.astro` — 1 occurrence
- `src/pages/reservar-clase.astro` — 1 occurrence
- `src/pages/aviso-legal.astro` — 1 occurrence
- `src/pages/politica-cookies.astro` — 1 occurrence
- `src/pages/politica-privacidad.astro` — 1 occurrence
- `src/pages/blog/index.astro` — 1 occurrence (already at depth 2, needs `../../../utils/napData`)

**Subdirectory pages (4 files — use `../../../utils/napData`):**
- `src/pages/cursos-ingles/infantil.astro` — 1 occurrence
- `src/pages/cursos-ingles/online.astro` — 1 occurrence
- `src/pages/cursos-ingles/primaria.astro` — 1 occurrence
- `src/pages/academias-ingles-madrid/adultos.astro` — 1 occurrence

**Verified clean (no Impulse, no changes needed):** All pages in `src/pages/examenes-cambridge/`, `src/pages/cursos-ingles/adultos.astro`, `src/pages/cursos-ingles/index.astro`, `src/pages/cursos-ingles/particulares.astro`, `src/pages/cursos-ingles/secundaria.astro`, and most `academias-ingles-madrid/` pages.

### TypeScript Article Data Files (2 files)
- `data/articles/cambridge-b2-first.ts` — 21 occurrences
- `data/articles/cambridge-c1-advanced.ts` — 19 occurrences

### Markdown Article Files (23 files)
- All 23 files in `src/content/articles/*.md` — 48 total occurrences
- Distribution: primarily in `brandSection.heading` and `brandSection.content` (every file has these)
- 3 files have additional Impulse refs embedded in `contextSections.content` HTML (mejores-libros-b2-first-2026.md has 5 total — the highest count)

### Onboarding CLI (1 file)
- `scripts/onboard-client.js` — add `replaceInMarkdownArticles()` function + update `readdirSync` import + call after promotion

---

## Validation Architecture

> `nyquist_validation` is `false` in `.planning/config.json`. This section is skipped.

---

## Environment Availability

> Step 2.6: SKIPPED (no external dependencies — all changes are code/config-only edits to existing files using the project's existing Node.js and Astro toolchain).

---

## Open Questions

1. **Bare "Impulse" in inline script iframe title (index.astro line 58)**
   - What we know: `is:inline` scripts cannot access frontmatter variables without `define:vars`
   - What's unclear: Whether this one iframe title impacts the dist/ grep result (it is JS runtime code, not rendered HTML)
   - Recommendation: Still fix it using `define:vars` (Phase 05-01 established this pattern). The iframe title IS output into the HTML via `f.title = ...` so it would appear in rendered output if the script runs.

2. **seo-system pages (deferred per CONTEXT.md)**
   - What we know: Deferred to check if Phase 5 covered them
   - What's unclear: Whether seo-system's React pages have hardcoded "Impulse" in meta tags
   - Recommendation: Out of scope for Phase 07. If found during verification, flag as Phase 8 or a patch.

3. **Generic replacement text for contextSections in markdown**
   - What we know: 3 markdown files have "Impulse English Academy" embedded in contextSection HTML content (mid-paragraph references like "centros como Impulse English Academy en La Vaguada")
   - What's unclear: Whether to replace with just `legalName` or a more generic "nuestra academia"
   - Recommendation: Replace with the new client's `legalName` answer. The CLI uses `answers.legalName` which maps to napData.legalName. The phrase "centros como Impulse English Academy en La Vaguada" becomes "centros como [NewClientName] en La Vaguada" — acceptable for template portability. Any location reference ("La Vaguada") would also need updating but that is NOT part of Phase 07 scope (it's in descriptive prose, not meta tags).

---

## Sources

### Primary (HIGH confidence)
- Direct file audit via `grep -rn "Impulse"` across all target directories — verified exact counts and file locations
- `utils/napData.ts` — confirmed NAP.name, NAP.shortName, NAP.city, NAP.neighborhood values
- `scripts/onboard-client.js` — confirmed existing CLI structure, imports, and call sites
- `src/content/config.ts` — confirmed brandSection schema (heading, content, ctaLinks required)
- Existing pages (`infantil.astro`, `sobre-nosotros.astro`, `index.astro`) — confirmed import path depths

### Secondary (MEDIUM confidence)
- CONTEXT.md decisions D-01 through D-11 — confirmed against actual file state (all decisions match reality)
- Phase 05-01 STATE.md decision: `define:vars` for inline scripts — confirmed pattern is established

---

## Metadata

**Confidence breakdown:**
- Scope (file counts, occurrences): HIGH — direct grep audit, exact numbers verified
- Implementation approach: HIGH — patterns established in Phases 5/6, no new libraries
- CLI function design: HIGH — matches existing CLI style exactly
- Markdown replacement safety: HIGH — regex is simple, YAML structure is predictable

**Research date:** 2026-04-09
**Valid until:** Stable — no external dependencies, no ecosystem churn risk
