# Phase 4: Client Onboarding CLI - Research

**Researched:** 2026-04-09
**Domain:** Node.js CLI tooling — interactive prompts, file generation, draft/promotion UX, build verification
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Question Flow Design**
- D-01: Questions organized in 8 grouped categories with section headers matching TEMPLATE-SETUP.md: (1) Business Identity, (2) Contact Info, (3) Geo & Address, (4) Opening Hours, (5) Social Profiles, (6) Brand Voice & Language, (7) Credentials & Ratings, (8) CTA Defaults.
- D-02: Use `@inquirer/prompts` (ESM-first, individual prompt imports: `input`, `select`, `confirm`, `editor`).
- D-03: Show current Impulse values as defaults for each question. Developer sees what they're replacing, can press Enter to keep values.
- D-04: Opening hours use structured sub-flow: per day ask if open (Y/N), then open/close times. Weekend days default to closed.

**Draft/Promotion UX**
- D-05: Generated files written to `.draft/` at project root (`.draft/brand-config.ts`, `.draft/napData.ts`, `.draft/buildPageTitle.ts`, `.draft/.env.template`).
- D-06: After generation, display colorized diff of each draft against the current original.
- D-07: Single Y/N confirmation after showing all diffs: "Promote these drafts to final files?"
- D-08: On rejection: keep drafts in `.draft/`, print message. Originals never touched.
- D-09: On acceptance: copy each draft to its final location, back up originals to `.draft/backup/` before overwriting.

**TEMPLATE_MODE Guard**
- D-10: Check `TEMPLATE_MODE=true` env var first; fall back to checking git remote URLs for "impulse" (case-insensitive).
- D-11: Guard triggers: exit immediately with error message + exit code 1. "This appears to be the production Impulse repo. Set TEMPLATE_MODE=true to override, or run on a fresh clone."
- D-12: Guard runs as the very first step — before any questions.

**Build Verification**
- D-13: After promotion, automatically run `npm run build` in the website directory and report pass/fail.
- D-14: If build fails: show error output, keep promoted files in place (no rollback), suggest manual fix.
- D-15: If build succeeds: print success message with next steps (Steps 5-10 of TEMPLATE-SETUP.md).

### Claude's Discretion
- Exact question wording and help text for each prompt
- Whether to add a `--skip-build` flag for faster iteration during development
- Color scheme for diff output (green/red standard)
- Whether to validate individual answers inline (e.g., URL format, phone format) or batch-validate at the end
- Order of categories within the question flow (as long as all 8 categories are covered)

### Deferred Ideas (OUT OF SCOPE)
- ONBD-09 (v2): Research agent scraping client website via Firecrawl to auto-populate answers
- ONBD-10 (v2): Web UI alternative to CLI for non-technical users
- Auto-updating CLAUDE.md project description
- Auto-updating vercel.json redirects and analytics IDs
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| ONBD-01 | CLI script at `scripts/onboard-client.js` using `@inquirer/prompts` | @inquirer/prompts 8.4.1 confirmed available on npm registry; ESM import pattern documented below |
| ONBD-02 | Question flow covers all 8 categories | All 8 categories mapped to exact fields in brand-config.ts and napData.ts; field inventory below |
| ONBD-03 | Script generates populated `brand-config.ts` and `napData.ts` | Both files fully read; template strings documented; helper functions in napData.ts are portable and must be preserved verbatim |
| ONBD-04 | Script generates `buildPageTitle.ts` with new brand constants | 3 constants identified: CORE_BRAND, BARRIO_SUFFIX, SHORT_BRAND; function body is portable |
| ONBD-05 | Script creates `.env.template` with required env vars documented | PUBLIC_WEBHOOK_URL identified in astro.config.mjs env schema; format documented below |
| ONBD-06 | Script runs `npm run build` after generation to verify compilation | Build command confirmed as `npm run build` in website package.json; must be run with cwd = website directory |
| ONBD-07 | TEMPLATE_MODE guard prevents running on production repo | Git remote confirmed as `https://github.com/dannywebsites/impulse-english.git` — "impulse" match will trigger guard |
| ONBD-08 | Generated configs written as drafts, requiring human confirmation before promotion | Draft/promotion UX fully designed in D-05 through D-09 |
</phase_requirements>

---

## Summary

Phase 4 builds a Node.js CLI script at `scripts/onboard-client.js` that automates TEMPLATE-SETUP.md Steps 2-4 (brand-config.ts, napData.ts, buildPageTitle.ts). The script walks a developer through 8 question categories using `@inquirer/prompts`, generates draft files in `.draft/`, shows colorized diffs, and promotes files to their final locations after confirmation. A TEMPLATE_MODE guard prevents accidental runs on the production Impulse repo.

The script lives in the website subdirectory's `scripts/` folder alongside 5 existing scripts — all using Node.js ESM (`#!/usr/bin/env node` + `import` syntax). The website's `package.json` will need an `"onboard"` script alias. The script is a standalone Node.js file with no new framework dependencies beyond `@inquirer/prompts` (for prompts) and `diff` (for colorized diff output). Both packages are available in the npm registry.

The key implementation complexity is in two areas: (1) the opening hours sub-flow requires 7 day iterations with conditional time prompts, and (2) generating syntactically correct TypeScript from collected answers requires careful template string construction — particularly for napData.ts which has helper functions at the bottom that must be preserved verbatim.

**Primary recommendation:** Build the script as a single ESM `.js` file in the website's `scripts/` directory. Use `@inquirer/prompts` for all prompts, `diff` (npm package) for colorized diffs, and Node.js built-ins (`fs`, `path`, `child_process`) for file operations and build execution. No additional framework is needed.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `@inquirer/prompts` | 8.4.1 | Interactive CLI prompts | Locked decision D-02; official Inquirer successor, ESM-native, active development |
| `diff` (npm) | 8.0.4 | Text diff computation | Pure JS, dual ESM/CJS, well-maintained, used for generating colorized diff output |
| `node:fs/promises` | built-in | Async file read/write | Already used in project scripts; async version preferred over sync in async CLI context |
| `node:path` | built-in | Path manipulation | All existing scripts use path |
| `node:child_process` | built-in | Running `npm run build` | `execSync` or `spawnSync` adequate for build verification step |
| `node:url` | built-in | `fileURLToPath` for `__dirname` equivalent | Required pattern in ESM modules — all existing scripts use this |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `picocolors` | 1.1.1 | Terminal color output | If `diff` package's output needs additional colorization for section headers; zero-dependency, tiny footprint. Alternative to chalk. |
| `chalk` | 5.6.2 | Terminal color output (alternative) | Either picocolors or chalk works — both available on registry. Chalk is ESM-only from v5. |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `diff` npm package | `child_process` calling system `diff` | System diff not portable to Windows; npm diff package is pure JS cross-platform |
| `@inquirer/prompts` | `enquirer`, `prompts` | Locked decision — @inquirer/prompts is mandatory per D-02 |
| Separate `package.json` at root | Add to website `package.json` | Script lives in website's scripts/ dir — cleaner to add to website package.json |

**Installation (run inside website subdirectory):**
```bash
cd March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97
npm install @inquirer/prompts diff
```

**Version verification (confirmed 2026-04-09):**
- `@inquirer/prompts`: 8.4.1 (latest on registry)
- `diff`: 8.0.4 (latest on registry)

---

## Architecture Patterns

### Recommended Project Structure

The script is a single file. Supporting artifacts:

```
March-Impulse-Web-.../
├── scripts/
│   ├── onboard-client.js       ← NEW: main CLI entry point
│   ├── download-s3-images.cjs  (existing)
│   ├── verify-migration.mjs    (existing)
│   └── ...
├── package.json                ← ADD: "onboard" script alias
.draft/                         ← NEW: created at runtime by script (root-level)
├── brand-config.ts
├── napData.ts
├── buildPageTitle.ts
├── .env.template
└── backup/
    ├── brand-config.ts.bak
    ├── napData.ts.bak
    └── buildPageTitle.ts.bak
```

Note: `.draft/` is created at project root (one level above the website dir), matching where `brand-config.ts` lives. The website files (napData.ts, buildPageTitle.ts) are inside the website subdirectory — paths must be resolved relative to `__dirname`.

### Pattern 1: ESM Node.js Script with `__dirname` Equivalent

All existing scripts in `scripts/` use this pattern. Required because the project uses `"type": "module"` in package.json.

```javascript
#!/usr/bin/env node
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEBSITE_ROOT = join(__dirname, '..');           // website project root
const PROJECT_ROOT = join(__dirname, '../..');         // repo root (where brand-config.ts lives)
const DRAFT_DIR = join(PROJECT_ROOT, '.draft');
const BACKUP_DIR = join(DRAFT_DIR, 'backup');
```

### Pattern 2: @inquirer/prompts Individual Imports

The library uses named exports — import each prompt type individually:

```javascript
// Source: @inquirer/prompts 8.4.1 package
import { input, confirm, select } from '@inquirer/prompts';

// Basic input with default (shows current value)
const companyName = await input({
  message: 'Company name:',
  default: 'Impulse English Academy',
});

// Boolean confirmation
const isOpen = await confirm({
  message: 'Is Monday open?',
  default: true,
});

// Select from list
const voiceRegister = await select({
  message: 'Voice register:',
  choices: [
    { value: 'formal-friendly', name: 'formal-friendly (recommended for academies)' },
    { value: 'casual', name: 'casual' },
    { value: 'professional', name: 'professional' },
    { value: 'academic', name: 'academic' },
  ],
  default: 'formal-friendly',
});
```

### Pattern 3: Section Headers in Question Flow

Print section headers to console between question groups to match TEMPLATE-SETUP.md structure:

```javascript
console.log('\n─── (1) Business Identity ─────────────────────────────\n');
// ... business identity questions
console.log('\n─── (2) Contact Info ───────────────────────────────────\n');
// ... contact info questions
```

### Pattern 4: Git Remote Check for TEMPLATE_MODE Guard

```javascript
import { execSync } from 'node:child_process';

function isProductionRepo() {
  // Check env var first (allows override)
  if (process.env.TEMPLATE_MODE === 'true') return false;
  
  // Check git remote
  try {
    const remotes = execSync('git remote -v', { cwd: PROJECT_ROOT, encoding: 'utf-8' });
    return remotes.toLowerCase().includes('impulse');
  } catch {
    // Not a git repo or no remotes — not production
    return false;
  }
}

if (isProductionRepo()) {
  console.error('ERROR: This appears to be the production Impulse repo.');
  console.error('Set TEMPLATE_MODE=true to override, or run on a fresh clone.');
  process.exit(1);
}
```

**Note:** The current repo has remote `https://github.com/dannywebsites/impulse-english.git` — this contains "impulse" and WILL trigger the guard unless `TEMPLATE_MODE=true` is set. This is correct behavior for production protection.

### Pattern 5: Colorized Diff Display

```javascript
import { createPatch } from 'diff';

function showColorizedDiff(label, originalContent, draftContent) {
  const patch = createPatch(label, originalContent, draftContent, 'original', 'draft');
  const lines = patch.split('\n');
  for (const line of lines) {
    if (line.startsWith('+') && !line.startsWith('+++')) {
      console.log('\x1b[32m' + line + '\x1b[0m');  // green
    } else if (line.startsWith('-') && !line.startsWith('---')) {
      console.log('\x1b[31m' + line + '\x1b[0m');  // red
    } else {
      console.log(line);
    }
  }
}
```

### Pattern 6: Build Verification via child_process

```javascript
import { execSync } from 'node:child_process';

function runBuild() {
  console.log('\nRunning npm run build...\n');
  try {
    execSync('npm run build', {
      cwd: WEBSITE_ROOT,
      stdio: 'inherit',   // streams build output directly to terminal
    });
    return true;
  } catch {
    return false;
  }
}
```

Using `stdio: 'inherit'` passes build output directly to the terminal so TypeScript errors are visible inline.

### Pattern 7: Draft File Promotion with Backup

```javascript
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';

function promoteFiles(fileMap) {
  // fileMap: [{ draft, final, backupName }, ...]
  mkdirSync(BACKUP_DIR, { recursive: true });
  
  for (const { draft, final, backupName } of fileMap) {
    if (existsSync(final)) {
      copyFileSync(final, join(BACKUP_DIR, backupName));
    }
    copyFileSync(draft, final);
  }
}
```

### Pattern 8: TypeScript File Generation via Template Strings

Generate files as template literal strings and write with `writeFileSync`. The key constraint is preserving exact TypeScript syntax so `npm run build` passes without errors.

For `napData.ts` specifically: the helper functions `getSchemaAddress()` and `getAddressLines()` at lines 138-153 must be copied verbatim — they reference NAP properties and contain TypeScript-specific syntax. The safest approach is to read the original file, extract everything after the `NAP` const declaration, and append it to the generated NAP object.

### Anti-Patterns to Avoid

- **Using `require()` instead of `import`:** The website package.json has `"type": "module"`. Using `require()` will throw. All scripts must use ESM syntax.
- **Running `npm run build` from the wrong directory:** `execSync('npm run build')` without `cwd: WEBSITE_ROOT` will fail — there is no `package.json` at project root.
- **Hardcoding paths relative to cwd:** Scripts are invoked from different directories. Always resolve paths relative to `__dirname` (via `fileURLToPath`).
- **Generating TypeScript with unescaped backticks:** Template literal strings in the generated TS files will break if they contain backtick characters. Escape or use single quotes.
- **Writing `.draft/` inside the website subdirectory:** `.draft/` is at project root (same level as `brand-config.ts`), not inside `March-Impulse-Web-.../`.
- **Silent file overwrites:** D-09 explicitly requires backing up to `.draft/backup/` before overwriting originals. Skip the backup and the user has no recovery path.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Interactive CLI prompts | Custom readline loop | `@inquirer/prompts` | TTY handling, cursor movement, arrow key navigation, default value display — all complex |
| Text diff computation | Manual line comparison | `diff` npm package | Myers diff algorithm, handles edge cases, produces standard unified diff format |
| Terminal color output | ANSI escape codes by hand | `picocolors` or `chalk` or raw ANSI | ANSI codes are fine for simple green/red; picocolors/chalk add no value for 2 colors |
| Child process execution | Reimplementing exec | `node:child_process` execSync | Built-in is sufficient; no need for `execa` or other wrappers |

**Key insight:** The hard part of this CLI is not the framework — it's generating syntactically correct TypeScript template strings that survive `npm run build`. Test the generated output files against the TypeScript compiler early.

---

## Field Inventory: What to Collect Per Category

This maps CONTEXT.md categories to exact field names in brand-config.ts and napData.ts.

### Category 1: Business Identity
| Field | File | Property Path |
|-------|------|---------------|
| Company name | brand-config.ts | `companyName` |
| Short name | brand-config.ts | `shortName` |
| Legal name | brand-config.ts + napData.ts | `legalName` (both files) |
| Tagline | brand-config.ts | `tagline` |
| Industry | brand-config.ts | `industry` |
| Founding date | napData.ts | `foundingDate` |

### Category 2: Contact Info
| Field | File | Property Path |
|-------|------|---------------|
| Phone (formatted) | napData.ts | `phone` (e.g., "+34 604 910 611") |
| Phone raw | napData.ts | `phoneRaw` (derived: strip spaces/dashes) |
| Phone tel | napData.ts | `phoneTel` (derived: "tel:" + phoneRaw) |
| WhatsApp URL | napData.ts | `whatsappUrl` (derived: "https://wa.me/" + number) |
| Email | napData.ts | `email` |
| Website URL | napData.ts | `website` |
| Google Business Profile URL | napData.ts | `gbpUrl` |

### Category 3: Geo & Address
| Field | File | Property Path |
|-------|------|---------------|
| Street address | napData.ts | `streetAddress` |
| Neighborhood | napData.ts | `neighborhood` |
| District | napData.ts | `district` |
| Postal code | napData.ts | `postalCode` |
| City | napData.ts | `city` |
| Address region | napData.ts | `addressRegion` |
| Country | napData.ts | `country` |
| Full address | napData.ts | `fullAddress` (derived or manually entered) |
| Short address | napData.ts | `shortAddress` (derived or manually entered) |
| Latitude | napData.ts | `geo.latitude` |
| Longitude | napData.ts | `geo.longitude` |
| Maps embed URL | napData.ts | `mapsEmbedUrl` (manual — can't auto-generate reliably) |
| Maps directions URL | napData.ts | `mapsDirectionsUrl` (derived from address components) |
| Areas served | napData.ts | `areaServed` (array — use `editor` prompt or CSV input) |
| Metro lines | napData.ts | `metro` (array — optional, can default to empty) |
| Bus lines | napData.ts | `busLines` (array — optional, can default to empty) |
| Price range | napData.ts | `priceRange` |

### Category 4: Opening Hours
| Field | File | Property Path |
|-------|------|---------------|
| Per-day open/closed + times | napData.ts | `openingHours` array + `openingHoursText` array |

7 days × (is_open?, open_time, close_time) = up to 21 prompts. Weekend defaults to closed. The `openingHoursText` array (human-readable) must be generated from the structured hours data.

### Category 5: Social Profiles
| Field | File | Property Path |
|-------|------|---------------|
| Instagram URL | napData.ts | `social.instagram` |
| Facebook URL | napData.ts | `social.facebook` |
| TikTok URL | napData.ts | `social.tiktok` |
| X (Twitter) URL | napData.ts | `social.x` |
| LinkedIn URL | napData.ts | `social.linkedin` |
| YouTube URL | napData.ts | `social.youtube` |
| sameAs array | napData.ts | `sameAs` (derived: GBP URL + all social URLs) |

### Category 6: Brand Voice & Language
| Field | File | Property Path |
|-------|------|---------------|
| Language (BCP 47) | brand-config.ts | `language` |
| Voice register | brand-config.ts | `voiceRegister` (select: formal-friendly/casual/professional/academic) |
| Pronouns | brand-config.ts | `pronouns` (select: vosotros/ustedes/you) |
| Brand mention level | brand-config.ts | `brandMentionLevel` (select: subtle/moderate/prominent) |
| Tone description | brand-config.ts | `tone` |
| Target audience | brand-config.ts | `targetAudience` |
| Unique value | brand-config.ts | `uniqueValue` |
| Social proof | brand-config.ts | `socialProof` |
| Article rules | brand-config.ts | `articleRules.*` (can use defaults — not client-specific) |

### Category 7: Credentials & Ratings
| Field | File | Property Path |
|-------|------|---------------|
| Credentials list | brand-config.ts + napData.ts | `credentials` (both files — same values) |
| Rating value | napData.ts | `aggregateRating.ratingValue` |
| Review count | napData.ts | `aggregateRating.reviewCount` |
| Best/worst rating | napData.ts | `aggregateRating.bestRating/worstRating` (can default to 5/1) |

### Category 8: CTA Defaults
| Field | File | Property Path |
|-------|------|---------------|
| Primary CTA text | brand-config.ts | `primaryCta.text` |
| Primary CTA href | brand-config.ts | `primaryCta.href` |
| Secondary CTA text | brand-config.ts | `secondaryCta.text` |
| Secondary CTA href | brand-config.ts | `secondaryCta.href` |
| Page title brand constants | buildPageTitle.ts | `CORE_BRAND`, `BARRIO_SUFFIX`, `SHORT_BRAND` |

### napData.ts Fields That Can Be Derived (No Prompt Needed)

These should be computed from collected answers rather than prompted:
- `phoneRaw` — strip non-digits from `phone`
- `phoneTel` — `"tel:" + phoneRaw`
- `whatsappUrl` — `"https://wa.me/" + phoneRaw.replace('+','')`
- `mapsDirectionsUrl` — construct from `streetAddress + postalCode + city + country`
- `sameAs` — concatenate `gbpUrl` + all 6 social URLs (filter empty strings)

### napData.ts: Helper Functions (Preserve Verbatim)

Lines 138-153 of napData.ts contain TypeScript functions that reference NAP properties. These functions are generic (work for any client) and must NOT be prompted for — copy them verbatim from the original file into the generated output:

```typescript
export function getSchemaAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: NAP.streetAddress,
    // ...
  };
}

export function getAddressLines() {
  return [NAP.streetAddress, `${NAP.neighborhood}, ${NAP.postalCode} ${NAP.city}`];
}
```

**Implementation approach:** Read the original `napData.ts`, extract the helper functions using a regex or by splitting on a known comment (`// Helper:`), and append them unchanged to the generated file.

---

## Common Pitfalls

### Pitfall 1: Script Run Location and Path Resolution

**What goes wrong:** Developer runs `node scripts/onboard-client.js` from the project root rather than the website subdirectory. `__dirname` resolves correctly but all downstream paths (WEBSITE_ROOT, PROJECT_ROOT) depend on knowing where the script file is.

**Why it happens:** The `scripts/` folder is inside the website subdirectory (`March-Impulse-Web-.../scripts/`). The script should be invocable from any directory if paths use `__dirname`. The `package.json` `"onboard"` alias resolves this by running from the correct context.

**How to avoid:** Always resolve WEBSITE_ROOT and PROJECT_ROOT relative to `__dirname` via `fileURLToPath(import.meta.url)`. The `npm run onboard` alias in the website's `package.json` is the canonical invocation — document this clearly.

**Warning signs:** "Cannot find module" errors, or files being written to wrong locations.

### Pitfall 2: TypeScript Template Strings with Special Characters

**What goes wrong:** Generated `brand-config.ts` contains a string value with a backtick (e.g., in `tone` or `targetAudience`), breaking the template literal used to generate the file.

**Why it happens:** Template strings use backticks as delimiters. If collected user input contains backticks and is interpolated into a template literal string, it terminates the template early.

**How to avoid:** Escape backticks in collected values before interpolating: `value.replace(/`/g, '\\`')`. Alternatively, use single-quoted strings for all string values in the generated TypeScript where possible.

**Warning signs:** `SyntaxError: Unexpected identifier` when running `npm run build`.

### Pitfall 3: Opening Hours Sub-Flow Edge Cases

**What goes wrong:** `openingHoursText` array (human-readable) gets out of sync with `openingHours` array (structured schema data). Days with no opening hours entry are still included in the text array.

**Why it happens:** The two arrays serve different purposes but must be derived from the same data. Generating them separately leads to inconsistency.

**How to avoid:** Generate both arrays from a single collected hours data structure. For closed days, include text like "Sábado – Domingo: Cerrado" but do NOT add an entry to the schema `openingHours` array.

**Warning signs:** Schema.org validation errors, incorrect hours shown in Google Business Profile.

### Pitfall 4: `as const` Assertion on Generated Objects

**What goes wrong:** Generated `brand-config.ts` or `napData.ts` missing the `} as const;` at the end of the exported object. TypeScript infers mutable types instead of literal types, causing type errors in consuming components.

**Why it happens:** Template string generation — easy to forget the `as const` when building the template.

**How to avoid:** Both source files end with `} as const;`. Include this in the template string exactly. Also include the type export at the bottom of brand-config.ts: `export type BrandConfig = typeof BRAND_CONFIG;`.

**Warning signs:** TypeScript errors in schema generators or components that do strict literal type checks.

### Pitfall 5: TEMPLATE_MODE Guard — Production Developer Caught

**What goes wrong:** A developer working on the production Impulse repo is blocked by the guard even when they legitimately need to test the CLI.

**Why it happens:** The guard checks the git remote URL. The production repo remote contains "impulse".

**How to avoid:** The guard already has an escape hatch: `TEMPLATE_MODE=true`. Document this clearly in the CLI's error message (D-11 already requires this). The `--skip-build` flag (discretionary) provides similar escape for build step.

**Warning signs:** Exit code 1 with the guard message when running legitimately.

### Pitfall 6: `audienceSegments` and `categoryTopicRef` Complexity

**What goes wrong:** brand-config.ts has complex array/object fields (`audienceSegments`, `bannedWords`, `categoryTopicRef`) that are hard to collect via CLI prompts.

**Why it happens:** These fields are arrays and objects — not simple strings. A single input prompt cannot handle them well.

**How to avoid:** Use the Inquirer `editor` prompt for complex array fields (opens a text editor), or provide sensible defaults that the user can edit in the draft file after generation. The draft review step (D-06, D-07) is precisely the safety net for these complex fields. Document in the CLI output that these fields should be reviewed in the draft before confirming promotion.

---

## Code Examples

### Script Entry Point Structure

```javascript
// scripts/onboard-client.js
#!/usr/bin/env node
/**
 * Client Onboarding CLI
 * 
 * Walks through 8 question categories and generates draft config files.
 * Run with: npm run onboard (from website directory)
 * Set TEMPLATE_MODE=true to run on the production Impulse repo.
 */

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { input, confirm, select } from '@inquirer/prompts';
import { createPatch } from 'diff';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEBSITE_ROOT = join(__dirname, '..');
const PROJECT_ROOT = join(__dirname, '../..');
const DRAFT_DIR = join(PROJECT_ROOT, '.draft');
const BACKUP_DIR = join(DRAFT_DIR, 'backup');

// Step 1: TEMPLATE_MODE guard (must be first)
// Step 2: Question categories (1-8)
// Step 3: Generate draft files to DRAFT_DIR
// Step 4: Show colorized diffs
// Step 5: Single confirmation prompt
// Step 6: Promote or preserve drafts
// Step 7: Run npm run build (if promoted)
```

### package.json Addition

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "onboard": "node scripts/onboard-client.js"
  }
}
```

### .env.template Content

```
# Environment variables for Impulse English Academy website
# Copy this file to .env and fill in your values

# Webhook URL for lead form submissions (required)
# This is the endpoint that receives form data when a visitor submits the contact form
PUBLIC_WEBHOOK_URL=https://your-webhook-endpoint.com/submit
```

### .gitignore Addition Needed

The `.draft/` directory must be added to `.gitignore` at project root. Currently the root `.gitignore` has `*.zip` only. The website's `.gitignore` does not cover project root.

The script should create/append `.draft/` to the root `.gitignore` if not already present — or document this as a manual step in the post-run instructions.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `inquirer` (v8) monolithic | `@inquirer/prompts` individual imports | ~2022 | ESM-first, tree-shakeable, cleaner API |
| `chalk` for all color output | `picocolors` (zero-dependency) or raw ANSI | 2022-2023 | chalk v5+ ESM-only; picocolors is 3x faster, 10x smaller |
| `diff` v4 (dual-mode) | `diff` v8 (full ESM support) | 2024 | ESM export added; `import { createPatch } from 'diff'` now works natively |

**Deprecated/outdated:**
- `inquirer` v8 and below: CommonJS only, replaced by `@inquirer/prompts` with ESM-native architecture
- `chalk` v4: CommonJS, use v5+ (ESM) or picocolors instead

---

## Open Questions

1. **Where does `scripts/onboard-client.js` live relative to the package.json that will run it?**
   - What we know: The website's `package.json` is at `March-Impulse-Web-.../package.json`. The `scripts/` directory is inside the website subdirectory. The `onboard` alias would run `node scripts/onboard-client.js` from the website root.
   - What's unclear: Should `@inquirer/prompts` and `diff` be added to the website's `package.json`, or should there be a new root-level `package.json` for tooling scripts?
   - Recommendation: Add to the website's `package.json` devDependencies. The script is a development tool for the website project. This keeps installation simple: `cd March-Impulse-Web-... && npm install && npm run onboard`.

2. **`audienceSegments` and `categoryTopicRef` collection strategy**
   - What we know: These are complex array/object fields. They're business-specific and can't have generic defaults.
   - What's unclear: Whether the `editor` prompt (opens $EDITOR for multiline input) is reliable enough cross-platform for non-technical users.
   - Recommendation: Use `editor` prompt for `audienceSegments` (pre-populated with Impulse values as example). For `categoryTopicRef` — leave as Impulse defaults in the draft and document in post-generation output that this field requires manual editing if the new client is in a different industry.

3. **`mapsEmbedUrl` collection**
   - What we know: The Google Maps embed URL is complex and requires the Maps Embed API with a specific place ID. It cannot be reliably derived from coordinates alone.
   - What's unclear: Whether to prompt for it (users unlikely to have it ready) or omit it and leave the Impulse placeholder.
   - Recommendation: Provide the Impulse value as the default, add a comment in the generated file (`// REQUIRED: Replace with your Google Maps embed URL — see TEMPLATE-SETUP.md Step 3`), and mention it in the post-generation next steps output.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Script runtime | ✓ | v24.11.0 | — |
| npm | Package installation | ✓ | (with Node.js) | — |
| `@inquirer/prompts` | ONBD-01 | Must install | 8.4.1 available | — (no fallback — locked decision) |
| `diff` | ONBD-08 diff display | Must install | 8.0.4 available | Raw ANSI diff via custom code |
| git CLI | TEMPLATE_MODE guard | ✓ | (git repo confirmed) | Guard falls back to env var check |

**Missing dependencies with no fallback:**
- `@inquirer/prompts` — must be installed via `npm install @inquirer/prompts` in website directory

**Missing dependencies with fallback:**
- `diff` — if not installed, the colorized diff step could use a simple before/after display instead of a unified diff

---

## Sources

### Primary (HIGH confidence)
- npm registry `@inquirer/prompts` — version 8.4.1, ESM-native, individual imports confirmed
- npm registry `diff` — version 8.0.4, ESM + CJS dual export confirmed
- `brand-config.ts` (project root, 93 lines) — read directly, all fields inventoried
- `March-Impulse-Web-.../utils/napData.ts` (154 lines) — read directly, all fields inventoried
- `March-Impulse-Web-.../utils/buildPageTitle.ts` (30 lines) — read directly, 3 constants identified
- `March-Impulse-Web-.../package.json` — confirmed `"type": "module"`, confirmed `npm run build`
- `March-Impulse-Web-.../scripts/verify-migration.mjs` — confirmed ESM + `__dirname` pattern in use
- `March-Impulse-Web-.../astro.config.mjs` — confirmed `PUBLIC_WEBHOOK_URL` in env schema
- `TEMPLATE-SETUP.md` — confirmed Steps 2-4 as CLI scope, Steps 5-10 remain manual
- Git remote — confirmed `https://github.com/dannywebsites/impulse-english.git` (triggers guard)

### Secondary (MEDIUM confidence)
- npm registry `picocolors` (v1.1.1), `chalk` (v5.6.2) — both available for color output

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — @inquirer/prompts and diff versions verified against npm registry today
- Architecture: HIGH — all source files read directly; ESM pattern verified in existing scripts
- Field inventory: HIGH — inventoried from actual source files
- Pitfalls: MEDIUM — based on direct code inspection and known Node.js/ESM patterns; not all edge cases may be captured until implementation

**Research date:** 2026-04-09
**Valid until:** 2026-05-09 (stable dependencies — 30 day shelf life)
