---
phase: 03-image-optimization
plan: "04"
subsystem: website
tags: [image-cleanup, hand-rolled-removal, optimized-image-deletion, utils-cleanup]
dependency_graph:
  requires: [03-02, 03-03]
  provides: [clean-codebase, no-optimized-image-paths, no-optimized-image-component]
  affects: [utils/images.ts, utils/napData.ts, components/VideoCTA.tsx, cursos-pages, TestimonialsPage]
tech_stack:
  added: []
  patterns: [plain-img-tags-for-public-images]
key_files:
  created: []
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/images.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/napData.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/VideoCTA.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/TestimonialsPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/cursos/SecundariaPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/cursos/InfantilPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/cursos/PrimariaPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/cursos/AdultosPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/cursos/ParticularsPage.tsx
  deleted:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/optimize-images.mjs
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/scripts/optimize-images.mjs
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/OptimizedImage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/public/images/optimized/ (211 files)
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/public/images/original/ (23 files)
decisions:
  - "OptimizedImage consumers in SecundariaPage and TestimonialsPage replaced with plain img tags using /images/academy/ paths"
  - "VideoCTA.tsx teamImages dependency replaced with plain img using primary-classes-students-smiling.jpg"
  - "napData.ts logo/image updated from /images/optimized/ to /images/academy/logos/img-4117.png"
  - "allImages aggregate now exports empty const — legacy aggregator no longer needed"
  - "allS3Images unchanged — still aggregates all S3 exports for consumers"
metrics:
  duration: 9m
  tasks_completed: 2
  files_changed: 246
  completed_date: "2026-04-09"
---

# Phase 03 Plan 04: Final Cleanup — Delete Hand-Rolled Optimization System Summary

**One-liner:** Deleted 246 files (211 generated images, 23 originals, 2 scripts, 1 component) and stripped OptimizedImageData/ImageSize types from utils/images.ts, completing OPT-04.

## What Was Built

The entire hand-rolled Sharp image optimization system has been removed:

- **Deleted**: `scripts/optimize-images.mjs` — the Sharp-based batch optimization script
- **Deleted**: `seo-system/scripts/optimize-images.mjs` — duplicate SEO system version
- **Deleted**: `components/OptimizedImage.tsx` — the responsive picture/srcset component with OptimizedImageData input
- **Deleted**: `public/images/optimized/` — 211 pre-generated webp/jpg files at sm/md/lg/xl sizes
- **Deleted**: `public/images/original/` — 23 source originals (now in src/assets/images/academy/)
- **Cleaned**: `utils/images.ts` — removed `ImageSize`, `OptimizedImageData`, `ImageEntry`, `ImageSet` types; removed `facilityImages`, `infantilImages`, `studentImages`, `certificationImages`, `brandingImages`, `teamImages`, `courseImages` exports
- **Fixed**: `utils/napData.ts` — logo/image path updated from `/images/optimized/` to `/images/academy/`

## Task Completion

| Task | Status | Commit |
|------|--------|--------|
| Task 1: Delete hand-rolled artifacts and clean up images.ts types | Complete | bc1cec5 |
| Task 2: Visual verification checkpoint | Auto-approved (--auto mode) | — |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed remaining OptimizedImage consumers before deletion**
- **Found during:** Task 1 verification step
- **Issue:** 6 pages still imported OptimizedImage (InfantilPage, PrimariaPage, AdultosPage, ParticularsPage, SecundariaPage, TestimonialsPage) and 1 component (VideoCTA.tsx) still used teamImages with sizes object
- **Fix:** Removed unused imports from InfantilPage, PrimariaPage, AdultosPage, ParticularsPage; replaced actual rendering usage in SecundariaPage (studentImages.teenagers) and TestimonialsPage (certificationImages.studentC1) with plain img tags using /images/academy/ paths; replaced VideoCTA.tsx teamImages usage with plain img
- **Files modified:** 6 page files + components/VideoCTA.tsx
- **Commit:** bc1cec5

**2. [Rule 1 - Bug] Fixed napData.ts logo path pointing to /images/optimized/**
- **Found during:** Task 1 final audit
- **Issue:** `napData.ts` lines 35-36 had `logo` and `image` pointing to `/images/optimized/impulse-logo-400.webp` which would 404 after directory deletion
- **Fix:** Updated both to `/images/academy/logos/img-4117.png`
- **Files modified:** utils/napData.ts
- **Commit:** bc1cec5

## Verification

- `scripts/optimize-images.mjs`: does not exist
- `seo-system/scripts/optimize-images.mjs`: does not exist
- `components/OptimizedImage.tsx`: does not exist
- `public/images/optimized/`: does not exist
- `public/images/original/`: does not exist
- `grep -c "OptimizedImageData" utils/images.ts` (excluding comments): 0
- `grep -c "ImageSize" utils/images.ts` (excluding comments): 0
- `/images/optimized` references in source files: 0
- `npm run build` (with PUBLIC_WEBHOOK_URL): 131 pages built successfully

## Known Stubs

None. All references resolved to real files in /images/academy/.

## Self-Check: PASSED

- bc1cec5 exists in git log
- utils/images.ts verified clean of OptimizedImageData types
- Build produces 131 pages successfully
- No /images/optimized/ references remain in source
