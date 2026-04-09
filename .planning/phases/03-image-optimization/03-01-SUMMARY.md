---
phase: 03-image-optimization
plan: 01
subsystem: image-pipeline
tags: [images, astro, optimization, registry]
dependency_graph:
  requires: []
  provides: [src/assets/images/academy/, utils/images-astro.ts]
  affects: [plans 03-02 through 03-04]
tech_stack:
  added: []
  patterns: [static-esm-image-imports, two-registry-pattern]
key_files:
  created:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/assets/images/academy/
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/images-astro.ts
  modified: []
decisions:
  - "Images copied (not moved) from public/ so seo-system retains access at public/images/academy/"
  - "utils/images-astro.ts is a separate registry from utils/images.ts — two-registry pattern per D-08/D-09"
  - "91 static imports cover all images including originals from public/images/original/"
  - "Build failure without PUBLIC_WEBHOOK_URL is pre-existing Phase 1 requirement, not caused by this plan"
metrics:
  duration: "12 minutes"
  completed: "2026-04-09T15:02:21Z"
  tasks: 2
  files: 92
---

# Phase 03 Plan 01: Image Foundation — Source Copy and Static Registry

One-liner: Copied 91 production images to src/assets/images/academy/ and created utils/images-astro.ts with 91 static ImageMetadata imports organized into 8 category exports for Astro pipeline consumption.

## What Was Built

### Task 1: Copy all images to src/assets/images/academy/
Created the directory structure `src/assets/images/academy/{facilities,logos,students,team,locations,general}` and populated it with all production images:

- Copied all 69 images from `public/images/academy/` preserving subdirectory structure
- Copied 22 original high-quality sources from `public/images/original/` into correct category subdirs (6 facilities, 12 students, 1 team, 3 logos)
- Total: 91 files in `src/assets/images/academy/`
- `public/images/academy/` left untouched (still 69 files) — seo-system retains access

### Task 2: Create utils/images-astro.ts registry
Created `utils/images-astro.ts` with 91 static top-level import statements (one per image file), grouped by category with inline comments. Exports 8 named category objects:

- `astroHeroImages` — hero/facility originals used for eager-loaded hero sections
- `astroFacilityImages` — all 47 facility/gallery images
- `astroCourseImages` — 4 course images (generalInfantil, preparacionMovers, extensivoSecundaria, preparacionKet)
- `astroTeamImages` — 6 team member images
- `astroStudentImages` — 18 student images including gallery shots
- `astroCertImages` — 4 certification images
- `astroLogoImages` — 15 logo images (Cambridge, Linguaskill, GLP, Impulse)
- `astroLocationImages` — 1 location image

All import paths use `../src/assets/images/academy/` relative from `utils/`. No `astro:assets` imports, no `url:` string properties, no dynamic imports.

`utils/images.ts` is unchanged — seo-system continues to work without modification.

## Verification

- `find src/assets/images/academy/ -type f | wc -l` → 91
- `grep -c "^import " utils/images-astro.ts` → 91
- `grep -c "export const" utils/images-astro.ts` → 8
- `public/images/academy/` file count → 69 (unchanged)
- `npm run build` (with PUBLIC_WEBHOOK_URL set) → passes, 131 pages built

## Deviations from Plan

None - plan executed exactly as written.

Note: `npm run build` without `PUBLIC_WEBHOOK_URL` fails with `[EnvInvalidVariables]` — this is a pre-existing requirement from Phase 1 (astro:env/client schema), not caused by this plan. Build succeeds when the env var is provided.

## Known Stubs

None. This plan is foundational infrastructure — no UI rendering paths are involved.

## Self-Check: PASSED

- `src/assets/images/academy/` exists with 91 files: FOUND
- `utils/images-astro.ts` exists: FOUND
- Task 1 commit 3341979: FOUND
- Task 2 commit 56d268b: FOUND
- `public/images/academy/` unchanged at 69 files: VERIFIED
