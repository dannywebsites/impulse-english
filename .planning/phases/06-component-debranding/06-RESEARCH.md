# Phase 6: Component Debranding - Research

**Researched:** 2026-04-09
**Domain:** React/Astro component refactoring — hardcoded brand string elimination
**Confidence:** HIGH

## Summary

Phase 6 is a pure find-and-replace + import-wiring phase with zero new dependencies. Every change follows the same pattern established in Phase 5: identify a hardcoded Impulse string, replace it with the corresponding `NAP.*` field (already imported in most files), verify the build compiles. The work is mechanical but requires careful cascade tracking because the `ImpulseSection` → `BrandSection` rename touches 30+ files across three subsystems (types, schema, article data).

One important discovery: `seo-system/App.tsx` **already mounts `<Toaster />`** (line 89 of the current file). The FORM-06 gap is therefore already closed in the source tree. The planner should verify this is the case before writing any implementation task for it — if confirmed, FORM-06 becomes a verification-only item, not an implementation item.

The markdown frontmatter files in `src/content/articles/` use the key `impulseSection:` in YAML — these are Astro Content Collection source files. Renaming the Zod schema key in `config.ts` from `impulseSection` to `brandSection` requires renaming the key in every one of the 23 markdown files as well or the Astro build will reject them with a validation error.

**Primary recommendation:** Execute changes in dependency order — types first, then schema/config, then markdown files, then component consumers — so the build can be verified incrementally and failures pinpoint exactly which file is the root cause.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Rename `ImpulseSection` interface in `data/articles/types.ts` to `BrandSection`
- **D-02:** Rename `impulseSection` schema key in `src/content/config.ts` to `brandSection`
- **D-03:** Update all consumers of `ImpulseSection` type and `impulseSection` schema key across the codebase (article data files, PAAArticlePage.tsx, any imports)
- **D-04:** Rename `impulseSectionTemplate` key in `brand-config.ts` to `brandSectionTemplate`
- **D-05:** CookieBanner.tsx derives the localStorage key from a slugified version of `NAP.shortName` + `_cookie_consent` (e.g., `"impulse_english_cookie_consent"`). Import NAP and compute at module level.
- **D-06:** Logo.tsx imports NAP and reads `NAP.shortName` (e.g., "Impulse English"). Split on first space to get the two display spans (brand word + second word). If shortName has no space, use full shortName for first span and empty second span.
- **D-07:** Navbar.tsx replaces hardcoded `"Impulse English Academy"` alt text with `NAP.name` (already imports NAP)
- **D-08:** Footer.tsx replaces hardcoded `"Impulse English Academy"` alt text with `NAP.name` (already imports NAP)
- **D-09:** CoursePageLayout.tsx replaces fallback hero alt `"Impulse English Academy La Vaguada Madrid"` with template using `NAP.name` and `NAP.city` (already imports NAP)
- **D-10:** PAAArticlePage.tsx replaces visible "Impulse English Academy" text with `NAP.name` (needs NAP import added)
- **D-11:** LeadForm.tsx replaces hardcoded `'Barrio del Pilar'` in GTM dataLayer with `NAP.neighborhood` (already imports NAP)
- **D-12:** seo-system App.tsx adds `<Toaster />` mount from sonner (sonner already installed in seo-system). This closes the FORM-06 gap from Phase 1 where toast calls fire into void.

### Claude's Discretion

- Exact implementation of shortName splitting logic in Logo.tsx
- Whether to add a `NAP.cookieConsentKey` field or compute the slug inline
- Order of changes within plans
- Whether seo-system's SEOHead.tsx copy also needs NAP import updates (check if it has the same hardcoded constants as main site's SEOHead.tsx — Phase 5 may have only fixed the main site copy)

### Deferred Ideas (OUT OF SCOPE)

- auto-publish.js references to `impulseSectionTemplate` — Phase 8 scope (Auto-Publish Pipeline Decouple)
- seo-system SEOHead.tsx debranding — check if Phase 5 covered it or if it needs separate attention
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FORM-06 | Sonner toast library added for error/success notifications in LeadForm | `seo-system/App.tsx` already has `<Toaster />` mounted at line 89 — verify in-place before treating as an implementation task; main site LeadForm already wired |
| ONBD-01 | CLI script walks user through structured question flow | Closure gaps HIGH-01 through HIGH-06 and MED-01 through MED-03 are all component/type debranding tasks this phase addresses; completing them satisfies the integration gap in ONBD-01 |
</phase_requirements>

## Standard Stack

No new dependencies required. All libraries already installed.

### Core (already installed)
| Library | Version | Purpose | Status |
|---------|---------|---------|--------|
| `sonner` | ^2.0.7 | Toast notifications | Installed in both main site and seo-system |
| `react` | 18.3.1 / 19.0.0 | UI rendering | In use |
| Astro Content Collections | Astro 5.7.10 built-in | Article schema validation | Config file at `src/content/config.ts` |

**Installation:** None needed.

### Key NAP Fields Available (confirmed from `utils/napData.ts`)
| Field | Value | Used By |
|-------|-------|---------|
| `NAP.name` | "Impulse English Academy La Vaguada" | Navbar, Footer, CoursePageLayout, PAAArticlePage alt text |
| `NAP.shortName` | "Impulse English" | Logo.tsx split display |
| `NAP.neighborhood` | "La Vaguada, Barrio del Pilar" | LeadForm GTM dataLayer |
| `NAP.city` | "Madrid" | CoursePageLayout fallback alt |

## Architecture Patterns

### Pattern 1: NAP Field Substitution (established in Phase 5)
**What:** Import NAP where not already imported, replace hardcoded string with `NAP.field`.
**When to use:** All component alt text, visible text, and GTM payload replacements.
**Example:**
```typescript
// Before (Navbar.tsx line 74)
alt="Impulse English Academy"

// After
alt={NAP.name}

// Import already exists in Navbar.tsx — no new import needed
```

### Pattern 2: Computed Constant from NAP
**What:** Derive a computed value from NAP at module level, use as constant.
**When to use:** CookieBanner.tsx localStorage key.
**Example:**
```typescript
// CookieBanner.tsx — new import + derived constant
import { NAP } from '../utils/napData';

const CONSENT_KEY = NAP.shortName.toLowerCase().replace(/\s+/g, '_') + '_cookie_consent';
// Result: "impulse_english_cookie_consent" for current NAP.shortName
```

### Pattern 3: String Split for Multi-Span Display
**What:** Split `NAP.shortName` on first space to populate two styled `<span>` elements.
**When to use:** Logo.tsx two-line text rendering.
**Example:**
```typescript
// Logo.tsx — replaces hardcoded "Impulse" / "Academy" literals
import { NAP } from '../utils/napData';

const [brandWord, ...rest] = NAP.shortName.split(' ');
const secondWord = rest.join(' ');

// In JSX:
<span className="...">{brandWord}</span>
<span className="...">{secondWord}</span>
```

### Pattern 4: Type/Interface Rename Cascade
**What:** Rename an interface and all its consumers in strict dependency order.
**When to use:** ImpulseSection → BrandSection rename.
**Order:**
1. `data/articles/types.ts` — rename `ImpulseSection` to `BrandSection` and `PAAArticle.impulseSection` field to `brandSection`
2. `src/content/config.ts` — rename `impulseSection` schema key to `brandSection`
3. All 23 `src/content/articles/*.md` frontmatter — rename `impulseSection:` to `brandSection:`
4. `data/articles/cambridge-b2-first.ts` and `cambridge-c1-advanced.ts` — rename `impulseSection` property key
5. `components/PAAArticlePage.tsx` — update `article.impulseSection.*` references to `article.brandSection.*`
6. `brand-config.ts` — rename `impulseSectionTemplate` to `brandSectionTemplate`
7. `scripts/onboard-client.js` — rename the key name in the generated template string (line 127)

**Critical:** The Astro build validates frontmatter against the Zod schema at build time. If `config.ts` is updated but markdown files still use `impulseSection:`, the build fails. Steps 2 and 3 must be completed together (or step 3 first) before running a build check.

### Anti-Patterns to Avoid
- **Renaming config.ts before markdown files:** Astro build validates all markdown frontmatter on startup — if the schema key changes but frontmatter does not, every article build fails immediately.
- **Importing NAP with @/ alias in seo-system components:** seo-system uses relative imports (`../utils/napData`), not `@/` alias. The `@/` alias resolves to seo-system root, not project root, in Vite context.
- **Editing `.astro/collections/articles.schema.json`:** This is an auto-generated file produced by Astro at build time. Do not edit it manually — it will be regenerated correctly after `config.ts` and markdown files are updated.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Toast notifications | Custom toast component | `sonner` (already installed) | Already wired in both codebases |
| Slug/key derivation for localStorage | Custom hash | `NAP.shortName.toLowerCase().replace(/\s+/g, '_')` | Simple, deterministic, matches decision D-05 |
| Brand name lookup | Any abstraction layer | Direct `NAP.*` field access | NAP is already the single source of truth |

## Runtime State Inventory

| Category | Items Found | Action Required |
|----------|-------------|-----------------|
| Stored data | `impulse_cookie_consent` localStorage key in browsers of existing Impulse users | Key name changes from `impulse_cookie_consent` to `impulse_english_cookie_consent` — existing users' consent resets (acceptable for template portability per CONTEXT.md) |
| Live service config | None — no external services reference the localStorage key | None |
| OS-registered state | None — no OS-level registrations for these component strings | None |
| Secrets/env vars | None — component strings are not env vars or secret keys | None |
| Build artifacts | `.astro/collections/articles.schema.json` — auto-generated cache of Zod schema | Will auto-regenerate on next `astro build` or `astro dev`; do not edit manually |

**Note on `ImpulseSection` rename in compiled output:** The seo-system has a pre-built `dist/` bundle (noted in Phase 3 tech debt). This bundle is not updated by source edits. However, the `ImpulseSection` type is TypeScript-only and erased at compile time — no runtime behavior depends on the interface name. The rename is a source-only change with zero runtime state impact.

## Common Pitfalls

### Pitfall 1: Markdown Frontmatter Schema Mismatch
**What goes wrong:** `astro build` / `astro dev` throws Zod validation errors for every article — "Unrecognized key(s) in object: 'impulseSection'"
**Why it happens:** Astro Content Collections validate all markdown frontmatter against the Zod schema on startup. If `config.ts` is updated to `brandSection` but markdown files still say `impulseSection:`, validation fails for every article.
**How to avoid:** Update all 23 markdown files in the same commit as (or immediately after) updating `config.ts`. Never run a build with the schema and frontmatter out of sync.
**Warning signs:** Build output shows multiple "Invalid frontmatter" errors mentioning `impulseSection`.

### Pitfall 2: PAAArticle Type vs. Frontmatter Field Mismatch
**What goes wrong:** TypeScript errors in `PAAArticlePage.tsx` after `types.ts` rename — `article.brandSection` is undefined, `article.impulseSection` is not found.
**Why it happens:** `PAAArticle` interface uses `impulseSection: ImpulseSection` — renaming the interface without renaming the field leaves `PAAArticlePage.tsx` accessing a non-existent property.
**How to avoid:** In `types.ts`, rename BOTH the interface (`ImpulseSection` → `BrandSection`) AND the field on `PAAArticle` (`impulseSection` → `brandSection`). Then update all consumers.
**Warning signs:** TypeScript compiler errors on `article.impulseSection` after the rename.

### Pitfall 3: seo-system Relative Import Path
**What goes wrong:** `Cannot resolve module '../utils/napData'` in seo-system components, OR the import resolves to the wrong file.
**Why it happens:** seo-system uses relative imports (`../utils/napData`), not `@/` path alias. The `@/` alias in seo-system resolves to the seo-system root (not project root), so `@/utils/napData` would fail or find wrong file.
**How to avoid:** Use relative path `../utils/napData` when adding NAP import to seo-system components (e.g., CookieBanner.tsx, PAAArticlePage.tsx if they are seo-system copies).
**Warning signs:** Build error "Cannot find module '@/utils/napData'" in seo-system context.

### Pitfall 4: Logo.tsx — shortName With No Space
**What goes wrong:** `brandWord` becomes the full shortName and `secondWord` is an empty string — the lower span renders empty.
**Why it happens:** If a client sets `NAP.shortName` to a single word (e.g., "Linguawise"), the split produces `['Linguawise']`, `rest` is `[]`, `rest.join(' ')` is `''`.
**How to avoid:** The CONTEXT.md decision explicitly addresses this: "If shortName has no space, use full shortName for first span and empty second span." The empty span renders as blank — acceptable behavior. Implement exactly as specified.
**Warning signs:** Second span shows nothing in the UI — this is expected for single-word brand names.

### Pitfall 5: onboard-client.js Template String Update
**What goes wrong:** Newly onboarded clients get a `brand-config.ts` still containing `impulseSectionTemplate` key.
**Why it happens:** `onboard-client.js` generates `brand-config.ts` from an inline template string. The key name `impulseSectionTemplate` is in the template string at line 127, not in the actual `brand-config.ts` at project root. Both files need updating.
**How to avoid:** Update both `brand-config.ts` (the live config) and `scripts/onboard-client.js` (the generator template) in the same plan wave. Neither is in scope for Phase 8 — the key name rename in onboard-client.js IS in scope per D-04.
**Warning signs:** After running onboarding, the generated `brand-config-draft.ts` still shows `impulseSectionTemplate`.

### Pitfall 6: FORM-06 Already Implemented
**What goes wrong:** Planner creates an implementation task for mounting `<Toaster />` in `seo-system/App.tsx` — but it already exists.
**Why it happens:** The milestone audit noted FORM-06 as a gap, but by the time Phase 6 research was conducted, `App.tsx` line 89 already shows `<Toaster />` mounted inside the return JSX.
**How to avoid:** The plan for FORM-06 should be a verification task, not an implementation task. Executor should confirm `<Toaster />` is present and rendering, then mark FORM-06 satisfied.
**Warning signs:** If an implementation task adds a second `<Toaster />` render — duplicate toasters would show overlapping notifications.

## Code Examples

### CookieBanner.tsx — Before and After
```typescript
// BEFORE (line 3)
const CONSENT_KEY = 'impulse_cookie_consent';

// AFTER
import { NAP } from '../utils/napData';
const CONSENT_KEY = NAP.shortName.toLowerCase().replace(/\s+/g, '_') + '_cookie_consent';
// Result for current NAP: "impulse_english_cookie_consent"
```

### Logo.tsx — Before and After
```typescript
// BEFORE (lines 34-35)
<span className={`font-bold text-xl tracking-tight uppercase ...`}>Impulse</span>
<span className={`font-medium text-[0.6rem] tracking-[0.2em] uppercase ...`}>Academy</span>

// AFTER
import { NAP } from '../utils/napData';
// At component top level or inside component:
const [brandWord, ...rest] = NAP.shortName.split(' ');
const secondWord = rest.join(' ');

<span className={`font-bold text-xl tracking-tight uppercase ...`}>{brandWord}</span>
<span className={`font-medium text-[0.6rem] tracking-[0.2em] uppercase ...`}>{secondWord}</span>
```

### PAAArticlePage.tsx — Visible text and data access
```typescript
// BEFORE (line 126)
<span className="flex items-center gap-1">
  <BookOpen className="w-3.5 h-3.5" />
  Impulse English Academy
</span>

// AFTER (add NAP import at top of file)
import { NAP } from '../utils/napData';
// ...
<span className="flex items-center gap-1">
  <BookOpen className="w-3.5 h-3.5" />
  {NAP.name}
</span>

// Also update all article.impulseSection.* → article.brandSection.* (4 occurrences in file)
```

### Markdown frontmatter rename (all 23 *.md files)
```yaml
# BEFORE
impulseSection:
  heading: "..."
  content: "..."
  ctaLinks: [...]

# AFTER
brandSection:
  heading: "..."
  content: "..."
  ctaLinks: [...]
```

### types.ts — Full rename
```typescript
// BEFORE
export interface ImpulseSection { ... }
// In PAAArticle:
impulseSection: ImpulseSection;

// AFTER
export interface BrandSection { ... }
// In PAAArticle:
brandSection: BrandSection;
```

## File Change Inventory

Complete list of files that need editing this phase (for planner reference):

**Component changes (8 files):**
- `components/Logo.tsx` — D-06: add NAP import, split shortName for span text
- `components/Navbar.tsx` — D-07: replace 2 hardcoded alt text strings with `NAP.name`
- `components/Footer.tsx` — D-08: replace 1 hardcoded alt text string with `NAP.name`
- `components/CoursePageLayout.tsx` — D-09: replace 1 fallback alt with `${NAP.name} ${NAP.city}`
- `components/PAAArticlePage.tsx` — D-10: add NAP import, replace visible text, update `article.brandSection.*` access (4 occurrences)
- `components/CookieBanner.tsx` — D-05: add NAP import, derive `CONSENT_KEY` from `NAP.shortName`
- `components/LeadForm.tsx` — D-11: replace 2 `'Barrio del Pilar'` strings with `NAP.neighborhood`
- `seo-system/App.tsx` — D-12: VERIFY `<Toaster />` already present; no code change expected

**Type/schema changes (4 files):**
- `data/articles/types.ts` — D-01: rename `ImpulseSection` → `BrandSection`, `impulseSection` field → `brandSection`
- `src/content/config.ts` — D-02: rename `impulseSection` schema key → `brandSection`
- `brand-config.ts` — D-04: rename `impulseSectionTemplate` key → `brandSectionTemplate`
- `scripts/onboard-client.js` — D-04: rename `impulseSectionTemplate` in generator template string

**Article data files (2 TypeScript files):**
- `data/articles/cambridge-b2-first.ts` — D-03: rename `impulseSection` property key → `brandSection`
- `data/articles/cambridge-c1-advanced.ts` — D-03: rename `impulseSection` property key → `brandSection`

**Markdown frontmatter (23 files — D-03):**
All 23 files in `src/content/articles/` — rename `impulseSection:` to `brandSection:` in frontmatter

**Auto-generated (do not edit):**
- `.astro/collections/articles.schema.json` — regenerates automatically on build

**Total: 37 files** (8 components + 4 type/schema + 2 TS data + 23 markdown)

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| Hardcode brand strings in components | Import from `NAP` single source of truth | Template portable — swapping napData.ts updates all components |
| `impulse_cookie_consent` localStorage key | `{shortName_slug}_cookie_consent` | Cookie consent is brand-agnostic |
| `ImpulseSection` TypeScript type | `BrandSection` | New client developers see generic type names |

## Open Questions

1. **FORM-06 Toaster already present in App.tsx**
   - What we know: Line 89 of `seo-system/App.tsx` shows `<Toaster />` inside the component return
   - What's unclear: Whether this was added during Phase 5 work or was already there — the milestone audit (conducted 2026-04-09) says it was missing
   - Recommendation: Planner should create a verification-only task. Executor checks the line is present, runs the seo-system dev server briefly to confirm toasts render, marks FORM-06 satisfied. If somehow missing (e.g., file was reverted), implement as D-12 specifies.

2. **seo-system duplicate components**
   - What we know: seo-system has mirror copies of some main site components. Phase 5 noted seo-system uses relative imports.
   - What's unclear: Whether `CookieBanner.tsx`, `Logo.tsx`, or `PAAArticlePage.tsx` have seo-system copies that also need debranding. CONTEXT.md deferred seo-system SEOHead.tsx check to Claude's Discretion.
   - Recommendation: Planner should include a quick grep task at wave start to identify any seo-system copies of the 7 components being modified. If copies exist and are user-visible, include them in the wave; otherwise document as out of scope.

## Environment Availability

Step 2.6: SKIPPED (no external dependencies — phase is purely code/config edits; all libraries already installed).

## Sources

### Primary (HIGH confidence)
- Direct file reads: `components/Logo.tsx`, `CookieBanner.tsx`, `Navbar.tsx`, `Footer.tsx`, `CoursePageLayout.tsx`, `PAAArticlePage.tsx`, `LeadForm.tsx`, `seo-system/App.tsx` — verified actual line content
- Direct file reads: `data/articles/types.ts`, `src/content/config.ts`, `brand-config.ts`, `utils/napData.ts` — verified field names and structure
- Direct file read: `.planning/v1.0-MILESTONE-AUDIT.md` — gap definitions
- Grep search: `impulseSection` across entire codebase — 32 files found, all categorized

### Secondary (MEDIUM confidence)
- Astro Content Collections validation behavior: verified by Zod schema in `src/content/config.ts` + Astro 5 docs (training knowledge, confirmed by schema structure)
- seo-system import path pattern: confirmed from Phase 5 accumulated context in STATE.md

## Metadata

**Confidence breakdown:**
- File inventory: HIGH — all files directly read and verified
- Change patterns: HIGH — all follow Phase 5 established patterns, no new dependencies
- Cascade order (markdown before build): HIGH — Astro Content Collections validation is well-understood
- FORM-06 status: HIGH — `<Toaster />` is present on line 89 of App.tsx in current source

**Research date:** 2026-04-09
**Valid until:** 2026-05-09 (stable libraries, no version changes expected)
