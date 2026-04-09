---
phase: 06-component-debranding
plan: 01
subsystem: ui
tags: [astro, typescript, react, content-collections, zod, debranding]

# Dependency graph
requires:
  - phase: 04-client-onboarding-cli
    provides: onboard-client.js generator that outputs brand-config.ts for new clients
provides:
  - BrandSection interface replacing ImpulseSection in data/articles/types.ts
  - brandSection Zod schema key in src/content/config.ts
  - brandSection frontmatter key in all 23 markdown article files
  - brandSection property in cambridge-b2-first.ts and cambridge-c1-advanced.ts
  - article.brandSection access in PAAArticlePage.tsx
  - brandSectionTemplate key in brand-config.ts
  - brandSectionTemplate in onboard-client.js generated output
affects:
  - 06-component-debranding (plan 02 onward)
  - future client onboarding flows

# Tech tracking
tech-stack:
  added: []
  patterns:
    - BrandSection replaces ImpulseSection as the generic branded CTA section type throughout the PAA article system
    - Schema (Zod config.ts) + frontmatter (*.md) + types (types.ts) + consumers (PAAArticlePage.tsx) + generators (onboard-client.js) must all be renamed together atomically

key-files:
  created: []
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/data/articles/types.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/content/config.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/content/articles/*.md (23 files)
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/data/articles/cambridge-b2-first.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/data/articles/cambridge-c1-advanced.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/PAAArticlePage.tsx
    - brand-config.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/onboard-client.js
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/migrate-articles.ts

key-decisions:
  - "ImpulseSection renamed to BrandSection across entire type/schema/data/consumer cascade — new client developers see generic type names with no Impulse references"
  - "migrate-articles.ts auto-fixed to use brandSection output key — ensures script cannot generate stale impulseSection frontmatter"

patterns-established:
  - "Rename cascade order: types.ts first, then config.ts + all markdown simultaneously (Zod validates markdown at build), then TS data files, then component consumers, then generator scripts"

requirements-completed: [ONBD-01]

# Metrics
duration: 12min
completed: 2026-04-09
---

# Phase 06 Plan 01: ImpulseSection to BrandSection Rename Summary

**Eliminated all Impulse-branded type names from the PAA article system — BrandSection interface, brandSection Zod schema key, and brandSection frontmatter now used across 30+ files with Astro build passing cleanly**

## Performance

- **Duration:** 12 min
- **Started:** 2026-04-09T18:25:00Z
- **Completed:** 2026-04-09T18:37:51Z
- **Tasks:** 2
- **Files modified:** 30 (23 markdown + 7 TS/TSX/JS files)

## Accomplishments
- Renamed `ImpulseSection` to `BrandSection` in data/articles/types.ts and updated `PAAArticle.impulseSection` field to `PAAArticle.brandSection`
- Renamed Zod schema key from `impulseSection` to `brandSection` in src/content/config.ts
- Bulk-renamed `impulseSection:` frontmatter key to `brandSection:` in all 23 markdown article files via sed
- Renamed `impulseSection:` property in cambridge-b2-first.ts (11 occurrences) and cambridge-c1-advanced.ts (10 occurrences)
- Updated PAAArticlePage.tsx to access `article.brandSection` instead of `article.impulseSection` (4 property accesses)
- Renamed `impulseSectionTemplate` to `brandSectionTemplate` in brand-config.ts and onboard-client.js
- Astro build confirmed passing: 131 pages built with zero errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Rename ImpulseSection in types, schema, and all data files** - `7444e33` (feat)
2. **Task 2: Update PAAArticlePage consumer + config/generator files + build verification** - `2d3cdf8` (feat)

**Plan metadata:** (docs commit below)

## Files Created/Modified
- `data/articles/types.ts` - Renamed ImpulseSection to BrandSection, impulseSection field to brandSection
- `src/content/config.ts` - Renamed Zod schema key impulseSection to brandSection
- `src/content/articles/*.md` (23 files) - Renamed impulseSection frontmatter key to brandSection
- `data/articles/cambridge-b2-first.ts` - Renamed 11 impulseSection property keys to brandSection
- `data/articles/cambridge-c1-advanced.ts` - Renamed 10 impulseSection property keys to brandSection
- `components/PAAArticlePage.tsx` - Updated 4 article.impulseSection accesses to article.brandSection
- `brand-config.ts` (project root) - Renamed impulseSectionTemplate to brandSectionTemplate
- `scripts/onboard-client.js` - Renamed impulseSectionTemplate to brandSectionTemplate in generated output
- `scripts/migrate-articles.ts` - Auto-fixed: renamed impulseSection output to brandSection

## Decisions Made
- Rename cascade executed in strict order: types.ts first, then Zod config + all markdown simultaneously, then TS data files, then component consumers, then generator scripts — this ordering ensures the Astro build never sees a mismatch between schema and frontmatter
- migrate-articles.ts fixed as part of auto-fix (Rule 1) because it would generate stale impulseSection frontmatter if run without this fix

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed migrate-articles.ts still outputting impulseSection frontmatter**
- **Found during:** Task 2 cascade verification (final grep check)
- **Issue:** `scripts/migrate-articles.ts` had 5 references to `impulseSection`/`article.impulseSection` — if run, it would generate markdown with `impulseSection:` key that would fail Zod validation
- **Fix:** Renamed comment, output key, and all three property accesses to `brandSection`
- **Files modified:** `scripts/migrate-articles.ts`
- **Verification:** Final cascade grep returns zero matches
- **Committed in:** `2d3cdf8` (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (Rule 1 - Bug)
**Impact on plan:** Essential correctness fix — migrate-articles.ts would break the build if run post-rename without this fix. No scope creep.

## Issues Encountered
- `npx astro check` prompted for interactive npm install — used `npm run build` instead which fully validates Zod schemas and TypeScript at build time. Build passed with 131 pages.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All ImpulseSection/impulseSection/impulseSectionTemplate references eliminated from source
- Astro build validated: schema, frontmatter, types, and consumers are in sync
- Ready for Phase 06 Plan 02 (component debranding of remaining Impulse-specific components)

---
*Phase: 06-component-debranding*
*Completed: 2026-04-09*
