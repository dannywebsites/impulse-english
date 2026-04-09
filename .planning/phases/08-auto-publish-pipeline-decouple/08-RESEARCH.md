# Phase 8: Auto-Publish Pipeline Decouple - Research

**Researched:** 2026-04-09
**Domain:** Node.js ESM TypeScript import, brand config decoupling, image registry integration
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Delete the hardcoded `BRAND` object (lines ~45-57 in auto-publish.js) and import `BRAND_CONFIG` from `brand-config.ts` instead.
- **D-02:** Map BRAND fields to BRAND_CONFIG equivalents:
  - `BRAND.companyName` → `BRAND_CONFIG.companyName`
  - `BRAND.companyDescription` → `BRAND_CONFIG.tagline`
  - `BRAND.targetAudience` → `BRAND_CONFIG.targetAudience`
  - `BRAND.uniqueValue` → `BRAND_CONFIG.uniqueValue`
  - `BRAND.socialProof` → `BRAND_CONFIG.socialProof`
  - `BRAND.brandMentionLevel` → `BRAND_CONFIG.brandMentionLevel`
- **D-03:** For fields not in brand-config.ts (`language`, `locationCode`, `researchDepth`), add them to brand-config.ts with current Impulse defaults. The onboarding CLI already generates brand-config.ts so new fields are portable.
- **D-04:** auto-publish.js is ESM. Use relative path: `import { BRAND_CONFIG } from '../../brand-config.js'`. Research must verify the actual import mechanism.
- **D-05:** Alternative if direct TS import fails: auto-publish.js reads brand-config.ts as text and parses it, OR a small JS wrapper re-exports BRAND_CONFIG.
- **D-06:** Replace all hardcoded S3 image URLs in auto-publish.js with imports from `utils/images.ts`. The `blogImages` export provides URL strings.
- **D-07:** Import path from seo-writer/scripts/ to utils/images.ts: use relative path `../../March-Impulse-Web-.../utils/images.js`.
- **D-08:** The onboarding CLI already generates brand-config.ts. Any new fields added in D-03 must also be added to the CLI's brand-config generator.

### Claude's Discretion

- Exact import mechanism (direct TS import, dynamic import, JS wrapper, or text parsing)
- Whether to create a small `brand-config.js` that re-exports from `.ts` for Node.js ESM compatibility
- How to structure the image pool from blogImages (array of URLs vs object)
- Whether `BRAND` variable name should be kept as an alias or all references renamed to `BRAND_CONFIG`

### Deferred Ideas (OUT OF SCOPE)

None — this is the last phase in the milestone.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| ONBD-01 | CLI script at scripts/onboard-client.js walks user through structured question flow | New fields (`language`, `locationCode`, `researchDepth`) added to brand-config.ts must also be added to the CLI generator — confirmed in onboard-client.js generateBrandConfig() function |
| IMG-03 | All component files reference images through the central registry, not direct S3 URLs | auto-publish.js IMAGE_CATALOG contains ~30 S3 URLs; replacing with blogImages from utils/images.ts closes this gap for the pipeline |
</phase_requirements>

---

## Summary

Phase 8 decouples `seo-writer/scripts/auto-publish.js` from its hardcoded `BRAND` object and S3 image catalog, replacing both with imports from `brand-config.ts` and `utils/images.ts`. This is the final gap closure step making the SEO pipeline brand-agnostic.

**The critical technical question — "how does an ESM Node.js .js script import from a .ts file?" — has a clean answer: Node.js 24 (the version installed on this machine) natively supports TypeScript imports via `--experimental-strip-types`. Verified by live test: `node --experimental-strip-types -e "import { BRAND_CONFIG } from '../../brand-config.ts'"` succeeds from the `seo-writer/scripts/` directory. No ts-node, no wrapper file, no build step required.**

The `BRAND` object in auto-publish.js has only 5 fields actively used in prompts (`companyName`, `companyDescription`, `targetAudience`, `uniqueValue`, `socialProof`). Three additional fields (`language`, `locationCode`, `researchDepth`) are defined but never referenced in the script body — they can be dropped or added to brand-config.ts as documented fields. The `blogImages` export in utils/images.ts provides 8 images with `url` and `alt` fields in the `S3ImageData` shape, directly replacing the S3 IMAGE_CATALOG.

**Primary recommendation:** Use `--experimental-strip-types` Node.js flag to import `.ts` files directly. Update the `publish` npm script in `seo-writer/scripts/package.json` and the shebang/usage comment. Keep `BRAND` as a local alias mapping for minimal diff against prompt code.

---

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Node.js built-in ESM | v24.11.0 (installed) | Module system for auto-publish.js | Already in use — no new dependency |
| `--experimental-strip-types` | Node.js 22+ flag | Import `.ts` files without transpilation | Zero dependency, no build step, verified working |

### Supporting
No new libraries needed. This phase is pure refactoring.

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `--experimental-strip-types` flag | `tsx` or `ts-node` | Adds a dev dependency; unnecessary given Node 24 is installed |
| `--experimental-strip-types` flag | Compile brand-config.ts to brand-config.js | Extra build step; breaks when client swaps brand-config.ts |
| `--experimental-strip-types` flag | Parse brand-config.ts as text | Brittle — fails on any TS syntax change |
| `--experimental-strip-types` flag | Small brand-config.js re-export wrapper | One extra file; less clean than direct import |

**Installation:** No new packages required.

---

## Architecture Patterns

### Recommended Change Structure

```
seo-writer/scripts/
  auto-publish.js     ← Modified: BRAND block deleted, imports added, IMAGE_CATALOG replaced
  package.json        ← Modified: publish script gets --experimental-strip-types flag

brand-config.ts       ← Modified: add language, locationCode, researchDepth fields
                        (onboard-client.js generator also updated)

March-Impulse-Web-.../
  utils/images.ts     ← No changes needed — blogImages export already correct shape
  scripts/
    onboard-client.js ← Modified: generateBrandConfig() adds new fields to template
```

### Pattern 1: Direct TypeScript Import with Strip-Types Flag

**What:** Node.js 24 strips TypeScript type annotations at parse time, importing `.ts` files as if they were `.js`. No transpilation, no type checking at runtime.

**When to use:** When the TypeScript file only uses type annotations (no decorators, no `const enum`, no `namespace`). `brand-config.ts` uses only `as const` and `export type` — both are safe.

**Example:**
```javascript
// seo-writer/scripts/auto-publish.js — top of file
import { BRAND_CONFIG } from '../../brand-config.ts';
import { blogImages } from '../../March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/images.ts';
```

```json
// seo-writer/scripts/package.json
{
  "scripts": {
    "publish": "node --experimental-strip-types auto-publish.js"
  }
}
```

**Verified working:** Live test from `seo-writer/scripts/` directory confirms both imports resolve and export correct values.

### Pattern 2: BRAND Local Alias (minimal diff strategy)

**What:** After importing BRAND_CONFIG, create a local `BRAND` alias that maps BRAND_CONFIG fields to the names the prompt strings expect. This minimizes changes to the prompt template strings.

**When to use:** When prompt strings reference `BRAND.companyDescription` (not `BRAND_CONFIG.tagline`). Keeps prompt code readable and unchanged.

**Example:**
```javascript
// After the import statement:
const BRAND = {
  companyName:        BRAND_CONFIG.companyName,
  companyDescription: BRAND_CONFIG.tagline,
  targetAudience:     BRAND_CONFIG.targetAudience,
  uniqueValue:        BRAND_CONFIG.uniqueValue,
  socialProof:        BRAND_CONFIG.socialProof,
  brandMentionLevel:  BRAND_CONFIG.brandMentionLevel,
};
```

This pattern means zero changes to the 5 prompt strings that reference `BRAND.*`. Only the object definition moves to an import.

### Pattern 3: IMAGE_CATALOG Replacement via blogImages

**What:** Replace the entire `IMAGE_CATALOG` (S3 URLs, ~30 entries, ~8 categories) with a flat pool derived from `blogImages`. The `selectArticleImages()` function is simplified to random selection from the pool.

**When to use:** When image category matching is less important than brand-portability. For a new client, the IMAGE_CATALOG categories (cambridge, classroom, etc.) are Impulse-specific anyway.

**Simplest correct approach:**
```javascript
// Import
import { blogImages } from '../../March-Impulse-Web-.../utils/images.ts';

// Convert blogImages object to array for pool
const IMAGE_POOL = Object.values(blogImages);
// Shape: [{ name, alt, altEn, category, url }, ...]

// Simplified selectArticleImages:
function selectArticleImages(topic, category) {
  const shuffled = shuffle([...IMAGE_POOL]);
  const hero = shuffled[0];
  return [
    { url: hero.url, alt: hero.alt, placement: 'hero' },
    { url: shuffled[1].url, alt: shuffled[1].alt, placement: 'inline' },
    { url: shuffled[2].url, alt: shuffled[2].alt, placement: 'inline' },
  ];
}
```

Note: blogImages has 8 entries — enough for 3 unique images per article. The old S3 IMAGE_CATALOG had category-matching logic (CATEGORY_IMAGE_MAP, KEYWORD_IMAGE_RULES, COMPLEMENTARY_CATEGORIES). This can be simplified away since the new images are generic academy photos suitable for any article, and the Impulse-specific category names (cambridge, infantil) won't map to a new client's categories anyway.

### Anti-Patterns to Avoid

- **Keeping `.js` extension in import path for `.ts` file:** `import from '../../brand-config.js'` will fail — Node must see the real `.ts` extension when using `--experimental-strip-types`.
- **Removing `--experimental-strip-types` and expecting imports to work:** Without the flag, Node.js 24 does not parse `.ts` files.
- **Using `as const` satisfies syntax in brand-config.ts additions:** The `satisfies` operator is supported by strip-types (it's pure TS syntax), so new fields can use the same patterns.
- **Forgetting to update `seo-writer/scripts/package.json` `publish` script:** If the npm script doesn't include `--experimental-strip-types`, running `npm run publish` will fail even after the import is added.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| TypeScript at runtime | Custom TS parser or text-based config reader | `node --experimental-strip-types` | Node.js 24 handles it natively, verified working |
| Image registry | Rebuild IMAGE_CATALOG with local paths | `blogImages` from `utils/images.ts` | Already maintained, correct shape, 8 images |
| Brand config reader | JSON-based config alongside TS | `BRAND_CONFIG` from `brand-config.ts` | Single source of truth already exists |

**Key insight:** The temptation to add a build step or intermediate file is unnecessary. Node.js 24 (installed) makes direct `.ts` imports a solved problem.

---

## Audit: BRAND Fields vs BRAND_CONFIG Fields

This mapping is verified against actual file contents:

| BRAND field | Used in prompts? | BRAND_CONFIG equivalent | Notes |
|-------------|-----------------|------------------------|-------|
| `companyName` | YES (line 631) | `companyName` | Direct match |
| `companyDescription` | YES (line 632) | `tagline` | Different name — needs alias |
| `targetAudience` | YES (line 510) | `targetAudience` | Direct match |
| `uniqueValue` | YES (line 633) | `uniqueValue` | Direct match |
| `socialProof` | YES (line 634) | `socialProof` | Direct match |
| `brandMentionLevel` | NO (defined, not used) | `brandMentionLevel` | Direct match — include for completeness |
| `language` | NO (defined, not used) | NOT in BRAND_CONFIG | Add to brand-config.ts per D-03 |
| `locationCode` | NO (defined, not used) | NOT in BRAND_CONFIG | Add to brand-config.ts per D-03 |
| `researchDepth` | NO (defined, not used) | NOT in BRAND_CONFIG | Add to brand-config.ts per D-03 |

**Key finding:** The three "extra" fields (`language`, `locationCode`, `researchDepth`) are defined in BRAND but never referenced anywhere in the script body. They can be added to brand-config.ts for documentation purposes (so new clients know these pipeline settings exist), but their absence won't break anything.

---

## Audit: IMAGE_CATALOG vs blogImages

**Current IMAGE_CATALOG:** ~30 S3 URLs across 8 categories (cambridge, classroom, infantil, students, teenagers, adults, reception, technology). All URLs are `https://impulseenglish.s3.us-east-1.amazonaws.com/...` — hardcoded, Impulse-specific, inaccessible to new clients.

**blogImages export:** 8 entries, all using local `/images/academy/...` paths. Shape: `{ name, alt, altEn, category, url }`. Confirmed: `Object.values(blogImages)` returns an array with `.url` and `.alt` on each item — exactly what `selectArticleImages` returns.

**Gap:** blogImages has 8 images vs IMAGE_CATALOG's 30. For the hero+2 inline selection (3 images per article), 8 is sufficient. The category-based routing logic (CATEGORY_IMAGE_MAP, KEYWORD_IMAGE_RULES, COMPLEMENTARY_CATEGORIES) can be removed — it was Impulse-specific and won't generalize to other clients.

**Decision for planner:** Simplify `selectArticleImages` to shuffle-and-slice from `IMAGE_POOL` (derived from `Object.values(blogImages)`). The category matching infrastructure can be removed entirely or kept as dead code — removing is cleaner.

---

## Common Pitfalls

### Pitfall 1: `.js` extension in import path for `.ts` source file
**What goes wrong:** `import { BRAND_CONFIG } from '../../brand-config.js'` throws `ERR_MODULE_NOT_FOUND` — no `.js` file exists at that path.
**Why it happens:** Node.js ESM requires exact file extensions. The decision text in CONTEXT.md (D-04) mentions `.js` extension — this is INCORRECT for `--experimental-strip-types`. The actual file is `.ts` and must be imported as `.ts`.
**How to avoid:** Use `../../brand-config.ts` (not `.js`) in the import path.
**Warning signs:** `Cannot find module '../../brand-config.js'` error at startup.

### Pitfall 2: Missing `--experimental-strip-types` flag
**What goes wrong:** Adding the `.ts` import but forgetting to update the npm `publish` script causes `SyntaxError: Unexpected token ':'` when Node tries to parse TypeScript type annotations as JavaScript.
**Why it happens:** `package.json` `publish` script currently reads `node auto-publish.js` — without the flag.
**How to avoid:** Update `seo-writer/scripts/package.json` in the same commit as the import change.
**Warning signs:** Script fails with a syntax error on the first type annotation in brand-config.ts.

### Pitfall 3: `as const satisfies` syntax not supported by strip-types
**What goes wrong:** If new fields added to brand-config.ts use TypeScript features beyond basic type annotations (e.g., `const enum`, namespace, decorators), strip-types will fail.
**Why it happens:** `--experimental-strip-types` only strips type annotations — it does not transform TS features.
**How to avoid:** The existing brand-config.ts only uses `as const` and `export type` — both are safe. New fields should follow the same pattern. `satisfies` keyword is fine — it's a type annotation, not a transformation.
**Warning signs:** `SyntaxError` on brand-config.ts content.

### Pitfall 4: IMAGE_POOL has fewer images than needed (< 3)
**What goes wrong:** `selectArticleImages` requests hero + 2 inline = 3 images. If IMAGE_POOL has fewer than 3 items, shuffled[1] or shuffled[2] will be `undefined`.
**Why it happens:** blogImages currently has 8 entries — sufficient. Risk arises if a new client's images.ts has fewer blog images defined.
**How to avoid:** Add a guard: if `IMAGE_POOL.length < 3`, allow repeats (use modulo index). Document minimum blogImages count in the template.
**Warning signs:** `Cannot read properties of undefined (reading 'url')` in selectArticleImages.

### Pitfall 5: Forgetting to update onboard-client.js generator (D-08)
**What goes wrong:** New fields added to brand-config.ts (language, locationCode, researchDepth) are absent from the generated brand-config.ts when `onboard-client.js` runs for a new client. The pipeline script fails because BRAND_CONFIG lacks these fields.
**Why it happens:** The generator template in `generateBrandConfig()` (onboard-client.js lines 67-142) must be updated to include new fields.
**How to avoid:** Plan must include a task that updates onboard-client.js in the same wave as brand-config.ts changes.
**Warning signs:** New client onboarding produces a brand-config.ts that doesn't include `language`, `locationCode`, `researchDepth` fields.

---

## Code Examples

Verified patterns from actual file inspection:

### Complete import block (top of auto-publish.js after change)
```javascript
import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenAI } from '@google/genai';
import { ApifyClient } from 'apify-client';
import { stringify as yamlStringify, Scalar } from 'yaml';
import { writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { BRAND_CONFIG } from '../../brand-config.ts';
import { blogImages } from '../../March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/images.ts';
```

### BRAND local alias (replaces hardcoded BRAND object, lines 44-59)
```javascript
// Brand settings — sourced from brand-config.ts (generated by onboarding CLI)
const BRAND = {
  companyName:        BRAND_CONFIG.companyName,
  companyDescription: BRAND_CONFIG.tagline,
  targetAudience:     BRAND_CONFIG.targetAudience,
  uniqueValue:        BRAND_CONFIG.uniqueValue,
  socialProof:        BRAND_CONFIG.socialProof,
  brandMentionLevel:  BRAND_CONFIG.brandMentionLevel,
};
```

### IMAGE_POOL from blogImages (replaces IMAGE_CATALOG, ~lines 196-244)
```javascript
// Image pool — sourced from utils/images.ts central registry
const IMAGE_POOL = Object.values(blogImages);
// Shape: Array<{ name, alt, altEn, category, url }>
```

### Simplified selectArticleImages
```javascript
function selectArticleImages(topic, category) {
  const pool = shuffle([...IMAGE_POOL]);
  // Guard: if pool has fewer than 3, allow repeats
  const get = (i) => pool[i % pool.length];
  return [
    { url: get(0).url, alt: get(0).alt, placement: 'hero' },
    { url: get(1).url, alt: get(1).alt, placement: 'inline' },
    { url: get(2).url, alt: get(2).alt, placement: 'inline' },
  ];
}
```

### Updated package.json publish script
```json
{
  "scripts": {
    "publish": "node --experimental-strip-types auto-publish.js"
  }
}
```

### New fields to add to brand-config.ts (after `brandMentionLevel`)
```typescript
  // ─── Pipeline Settings ─────────────────────────────────────────────
  language: 'Spanish',          // Human-readable language name used in prompts (not BCP 47)
  locationCode: 'Spain',        // Country string used in DataForSEO location_name
  researchDepth: 'standard',    // standard | deep — controls research thoroughness
```

### Updated onboard-client.js generateBrandConfig() template addition
```javascript
  // ─── Pipeline Settings ─────────────────────────────────────────────
  language: '${esc(answers.pipelineLanguage || 'Spanish')}',
  locationCode: '${esc(answers.locationCode || 'Spain')}',
  researchDepth: '${esc(answers.researchDepth || 'standard')}',
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `ts-node` for TS in Node.js | `--experimental-strip-types` flag | Node.js 22.6 (stable in 23+, Node 24 stable) | No extra dependencies |
| S3 image URLs in pipeline scripts | Local image paths via utils/images.ts | Phase 2 (image consolidation) | New client images work without S3 access |

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | `--experimental-strip-types` flag | Yes | v24.11.0 | — |
| `brand-config.ts` | BRAND_CONFIG import | Yes | Current | — |
| `utils/images.ts` | blogImages import | Yes | Current | — |
| `seo-writer/scripts/package.json` | publish script update | Yes | Current | — |

**Missing dependencies:** None. All required files exist and imports verified working.

---

## Open Questions

1. **Should CATEGORY_IMAGE_MAP / KEYWORD_IMAGE_RULES be kept for future use?**
   - What we know: These structures are Impulse-specific (references 'Cambridge B2 First', 'Linguaskill' etc.) and won't generalize to other clients.
   - What's unclear: Whether future phases might want category-aware image selection for English academy clients.
   - Recommendation: Remove entirely. The structures are hardcoded Impulse content and violate template portability. If a new client needs category-routing, they extend their own images.ts.

2. **Should `language`, `locationCode`, `researchDepth` be asked in the onboarding CLI?**
   - What we know: D-03 says add them to brand-config.ts with Impulse defaults. D-08 says update the CLI generator.
   - What's unclear: Whether new clients will need to change these (e.g., French academy, US location).
   - Recommendation: Add them to the generator template with hardcoded defaults (not as interactive CLI questions). They're pipeline internals, not brand-voice fields. A developer setting up a new client can edit brand-config.ts directly.

---

## Sources

### Primary (HIGH confidence)
- Live code inspection of `seo-writer/scripts/auto-publish.js` — BRAND block lines 44-59, IMAGE_CATALOG lines 196-244, BRAND usage in prompts lines 510, 631-634
- Live code inspection of `brand-config.ts` — all BRAND_CONFIG fields verified
- Live code inspection of `utils/images.ts` — blogImages export shape verified (lines 821-878)
- Live code inspection of `seo-writer/scripts/package.json` — type: module, publish script
- Live code inspection of `onboard-client.js` — generateBrandConfig() template lines 67-142
- **Live execution test:** `node --experimental-strip-types` importing both `brand-config.ts` and `utils/images.ts` from `seo-writer/scripts/` context — both succeed on Node.js v24.11.0

### Secondary (MEDIUM confidence)
- Node.js 22+ release notes: `--experimental-strip-types` introduced in Node 22.6, unflagged in Node 23, stable in Node 24

---

## Metadata

**Confidence breakdown:**
- Import mechanism: HIGH — verified by live execution test on the installed Node.js version
- BRAND field mapping: HIGH — verified by reading actual BRAND object and BRAND_CONFIG, confirmed which fields are used in prompts
- Image replacement: HIGH — verified blogImages shape and count (8 images), confirmed sufficient for 3-per-article selection
- Onboarding CLI update: HIGH — generateBrandConfig() template located and read, extension pattern is clear

**Research date:** 2026-04-09
**Valid until:** 2026-07-09 (stable — Node.js 24 LTS, no fast-moving dependencies)
