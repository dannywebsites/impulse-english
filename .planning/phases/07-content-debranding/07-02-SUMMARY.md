---
phase: 07-content-debranding
plan: 02
subsystem: cli
tags: [onboarding, debranding, markdown, astro, node-fs, readdirSync]

# Dependency graph
requires:
  - phase: 04-client-onboarding-cli
    provides: onboard-client.js CLI base with promotion flow and draft system
  - phase: 07-content-debranding
    provides: 07-01 Astro page NAP import debranding (safety net context)
provides:
  - replaceInMarkdownArticles() function with timestamped backup in onboard-client.js
  - replaceInAstroPageMeta() recursive .astro safety-net scanner in onboard-client.js
  - readdirSync import added to onboard-client.js
  - Both debranding steps wired into promotion flow before build verification
affects: [07-content-debranding, template-portability, onboarding-cli]

# Tech tracking
tech-stack:
  added: [readdirSync from node:fs (new import)]
  patterns: [longer-string-first replacement to prevent double-replacement, timestamped backup before file modification, recursive .astro file collection]

key-files:
  created: []
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/onboard-client.js

key-decisions:
  - "replaceInMarkdownArticles replaces 'Impulse English Academy' before 'Impulse English' to prevent double-replacement (e.g. 'Acme English Academy' being hit again by shortName replacement)"
  - "Articles backed up to timestamped directory (articles-backup-{Date.now()}) before any modification, satisfying CLAUDE.md backup rule"
  - "replaceInAstroPageMeta uses recursive readdirSync with withFileTypes for clean directory traversal without additional dependencies"
  - "Both functions exported for testability, consistent with Phase 04 pattern of named exports on onboard-client.js"

patterns-established:
  - "Longer-string-first replacement: always replace 'Impulse English Academy' before 'Impulse English' in debranding loops"
  - "Timestamped backup directories: articles-backup-{Date.now()} pattern prevents backup collisions on repeated runs"

requirements-completed: [ONBD-01]

# Metrics
duration: 1min
completed: 2026-04-09
---

# Phase 07 Plan 02: Content Debranding — Markdown Articles + Astro Meta Safety Net Summary

**`replaceInMarkdownArticles()` with timestamped backup and `replaceInAstroPageMeta()` recursive safety-net added to onboarding CLI, wired after config promotion, closing markdown debranding gap HIGH-08 and implementing D-10**

## Performance

- **Duration:** ~1 min
- **Started:** 2026-04-09T18:03:31Z
- **Completed:** 2026-04-09T18:04:27Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments
- Added `readdirSync` to the `node:fs` import in onboard-client.js
- Implemented `replaceInMarkdownArticles()` that backs up all 23 .md article files to a timestamped directory before replacing "Impulse English Academy" → `answers.legalName` and "Impulse English" → `answers.shortName`
- Implemented `replaceInAstroPageMeta()` that recursively scans `src/pages/**/*.astro` for residual hardcoded brand references (belt-and-suspenders D-10 safety net)
- Wired both functions after "All drafts promoted" log and before build verification step
- Exported both functions for testability consistent with Phase 04 pattern

## Task Commits

Each task was committed atomically:

1. **Task 1: Add replaceInMarkdownArticles and replaceInAstroPageMeta functions to onboarding CLI** - `1ba7756` (feat)

**Plan metadata:** (docs commit follows)

## Files Created/Modified
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/onboard-client.js` - Added readdirSync import, two new debranding functions, two call sites, and exports

## Decisions Made
- **Longer-string-first replacement:** "Impulse English Academy" is replaced before "Impulse English" in both functions to prevent a new client brand like "Acme English Academy" from being double-hit by the shortName replacement pass
- **Timestamped backup:** `articles-backup-{Date.now()}` naming ensures idempotent re-runs don't overwrite previous backups
- **Recursive traversal with withFileTypes:** avoids `stat()` calls per entry, cleaner than filtering strings after the fact
- **Exports added:** Both functions added to the named export list at the bottom, consistent with the testability pattern established in Phase 04

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness
- Phase 07-02 complete: markdown articles will now be debranded during `npm run onboard`
- The full content debranding suite (Astro NAP imports from 07-01 + markdown replacement from 07-02 + Astro meta safety net from 07-02) is now in place
- Phase 07 is complete pending state/roadmap updates

## Self-Check

- [x] `replaceInMarkdownArticles` appears in file (function + call site + export = 3 occurrences)
- [x] `replaceInAstroPageMeta` appears in file (function + call site + export = 3 occurrences)
- [x] `readdirSync` appears in import line
- [x] `articles-backup` backup directory creation confirmed
- [x] `answers.legalName` found 7 times across both functions
- [x] `node -c scripts/onboard-client.js` exits 0
- [x] Commit `1ba7756` exists

## Self-Check: PASSED

---
*Phase: 07-content-debranding*
*Completed: 2026-04-09*
