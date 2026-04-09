---
phase: 05-critical-infrastructure-debranding
plan: 02
subsystem: infra
tags: [cli, onboarding, napData, webmanifest, tracking, debranding]

# Dependency graph
requires:
  - phase: 05-01
    provides: "napData.ts with siteTitle, social.xHandle, and tracking object — fields the CLI must now generate"
provides:
  - "onboard-client.js extended with tracking questions (category 9), xHandle question, siteTitle question"
  - "generateNapData() produces siteTitle, social.xHandle, and tracking block"
  - "generateWebmanifest() produces site.webmanifest with /images/favicons/ paths"
  - "site.webmanifest included in draftFiles, backupMap, and promotionMap"
  - "All new generators exported for testing"
affects: [phase-06, template-portability, client-onboarding]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Tracking IDs collected via CLI prompts with placeholder defaults (not Impulse production values)"
    - "siteTitle derived interactively (legalName + neighborhood as default) rather than hardcoded"
    - "webmanifest generated from CLI answers to ensure brand name is client-specific"

key-files:
  created: []
  modified:
    - "March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/onboard-client.js"

key-decisions:
  - "Tracking ID defaults are PLACEHOLDER strings (G-XXXXXXXXXX, AW-XXXXXXXXXXX, GTM-XXXXXXX) — new clients get placeholders, Impulse production values stay only in napData.ts"
  - "siteTitle asked interactively after Geo & Address category with default derived from legalName + neighborhood"
  - "Removed 'Update Google Analytics / GTM IDs' from success message next steps — now automated"

patterns-established:
  - "generateWebmanifest pattern: JSON.stringify with null/2 for readable output, all paths use /images/favicons/"

requirements-completed: [ONBD-01]

# Metrics
duration: 8min
completed: 2026-04-09
---

# Phase 05 Plan 02: Onboarding CLI Tracking + Webmanifest Extension Summary

**CLI extended with category (9) Tracking & Analytics, xHandle and siteTitle questions, generateWebmanifest() function, and updated generateNapData() producing all five new napData fields**

## Performance

- **Duration:** 8 min
- **Started:** 2026-04-09T18:10:00Z
- **Completed:** 2026-04-09T18:18:00Z
- **Tasks:** 2 (1 implementation, 1 verification)
- **Files modified:** 1

## Accomplishments
- Extended onboard-client.js with all six changes from the plan: generateWebmanifest, xHandle question, siteTitle question, category (9) Tracking, updated generateNapData template, updated draftFiles/backupMap/promotionMap
- Comprehensive grep audit confirmed zero hardcoded Impulse infrastructure values in BaseLayout.astro or SEOHead.tsx
- Full Astro build passes (131 pages, exits 0)

## Task Commits

Each task was committed atomically:

1. **Task 1: Extend onboarding CLI with tracking questions, xHandle, webmanifest generator** - `ad51eb9` (feat)
2. **Task 2: Verify end-to-end debranding with grep audit** - verification only, no files changed

**Plan metadata:** (docs commit below)

## Files Created/Modified
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/onboard-client.js` — Extended with generateWebmanifest, xHandle/siteTitle/tracking questions, updated generateNapData, updated draftFiles/backupMap/promotionMap, updated exports

## Decisions Made
- Tracking ID defaults are placeholder strings not Impulse production values — new clients get `G-XXXXXXXXXX` etc. as reminders to fill in their own IDs
- siteTitle asked interactively after Geo & Address with a smart default (`${legalName} – ${neighborhood}`)
- "Update Google Analytics / GTM IDs" removed from success message next steps — this manual step is now automated by the tracking category

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- `isProductionRepo()` guard blocked direct `node -e` test of exports. Resolved by passing `TEMPLATE_MODE=true` in the verification command. Expected behaviour — the guard is working correctly.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 05 complete: both debranding plans (napData field additions + CLI extension) are done
- Full client onboarding via `npm run onboard` now produces all napData fields including siteTitle, xHandle, and tracking IDs
- site.webmanifest is now part of the onboarding output pipeline
- Ready for Phase 06 when scheduled

---
*Phase: 05-critical-infrastructure-debranding*
*Completed: 2026-04-09*
