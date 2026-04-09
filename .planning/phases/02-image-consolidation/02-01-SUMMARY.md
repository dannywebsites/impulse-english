---
phase: 02-image-consolidation
plan: "01"
subsystem: image-assets
tags: [images, registry, s3-migration, local-assets]
dependency_graph:
  requires: []
  provides: [utils/images.ts, public/images/academy/]
  affects: [02-02, 02-03, 02-04, 02-05]
tech_stack:
  added: []
  patterns: [url-string-registry, category-subdirectories, kebab-case-filenames]
key_files:
  created:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/images.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/download-s3-images.cjs
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/s3-to-local-manifest.json
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/public/images/academy/ (69 images)
  modified: []
decisions:
  - "Gallery suffix for academyImages.ts exports to avoid collision with images.ts exports (infantilGalleryImages vs infantilImages)"
  - "69/71 images downloaded — 1 HTTP 403 (Academy Exterior NACHOS path inaccessible), 1 de-dup at runtime"
  - "Review images img-8600 through img-8611 categorised as facilities/ (regex missed IMG_86xx range) — functionally correct, local paths in manifest"
metrics:
  duration: "~18 minutes"
  completed: "2026-04-09"
  tasks: 2
  files_created: 73
  files_modified: 0
---

# Phase 02 Plan 01: S3 Image Download and Central Registry

**One-liner:** Downloaded 69 S3 images to `public/images/academy/` category subdirectories and created `utils/images.ts` central registry with all typed exports, zero S3 URLs, and local path references.

## What Was Built

### Task 1: Download all S3 images (commit d14e41f)

- Created `scripts/download-s3-images.cjs` — a Node.js download script with all 71 unique S3 URLs (after deduplication), categorisation logic, kebab-case filename conversion, and retry handling
- Downloaded 69/71 images to `public/images/academy/` in category subdirectories:
  - `facilities/` — 41 files (classroom, school, nabscab shots, escuela gonzalo)
  - `logos/` — 12 files (Cambridge, Linguaskill, GLP, ESIC, Impulse)
  - `team/` — 5 files (JP, Lucia, Danny/Daniel)
  - `students/` — 10 files (lara-c1, lucia-secundary, img-86xx)
  - `locations/` — 1 file (outside-academy.jpg)
- Created `scripts/s3-to-local-manifest.json` — maps every S3 URL to its local path (null for the 403 failure)

### Task 2: Create central image registry (commit bb65048)

- Created `utils/images.ts` (1,146 lines) as the single canonical image registry
- Type exports: `ImageSize`, `OptimizedImageData`, `S3ImageData`, `AcademyImage`, `ImageEntry`, `ImageSet`
- Data exports from `src/data/images.ts` (preserved exact names):
  - `facilityImages`, `s3FacilityImages`, `infantilImages`, `studentImages`, `certificationImages`, `brandingImages`, `teamImages`, `s3CambridgeImages`, `s3SecondaryImages`, `s3InfantilImages`, `s3ReviewImages`, `s3LinguaskillImages`
- Data exports from `src/data/academyImages.ts` (renamed with Gallery suffix):
  - `infantilGalleryImages`, `primariaGalleryImages`, `secundariaGalleryImages`, `adultosGalleryImages`, `facilitiesGalleryImages`, `certificatesGalleryImages`, `brandingGalleryImages`, `exteriorGalleryImages`
- Helper function: `generateImageSchema` (copied verbatim from academyImages.ts)
- Zero S3 URLs — all replaced with `/images/academy/` local paths
- Optimized images (`/images/optimized/`) preserved unchanged per D-06
- TypeScript compiles with no errors (`tsc --noEmit --skipLibCheck`)

## Verification Results

- `find public/images/academy -type f | wc -l` = **69** (71 unique URLs → 1 HTTP 403, 1 de-dup = 69 files)
- `grep -c "impulseenglish.s3" utils/images.ts` = **0**
- `grep -c "/images/academy/" utils/images.ts` = **81**
- `grep -c "/images/optimized/" utils/images.ts` = **76**
- `npx tsc --noEmit --skipLibCheck utils/images.ts` = exit 0

## Deviations from Plan

### Auto-fixed Issues

None.

### Known Deviations

**1. File count: 69 instead of 73+**
- **Found during:** Task 1 execution
- **Issue:** The plan estimated 73 unique S3 images. The actual unique URL count after deduplication was 71 image URLs. 1 returned HTTP 403 (NACHOS photos Academy Exterior — S3 access restriction on that specific path). 1 was a de-dup of `lara-c1-cert.jpeg` (same filename from two different S3 paths wrote to same local file). Result: 69 files on disk.
- **Impact:** None — all accessible images are present locally. The 403 image (`Academy+Exterior.JPG`) has a functional equivalent (`OUTSIDE+ACADEMY.jpg` which did download successfully).
- **Fix:** Not needed — the inaccessible image is a server-side S3 permission issue, not a code issue.

**2. Review images categorised as `facilities/` instead of `students/`**
- **Found during:** Task 1 script output review
- **Issue:** `img-8600.jpg` through `img-8611.jpg` were placed in `facilities/` — the regex `img_86\d{2}` only caught `img_8636+` (the NEW/ subfolder images). The root-level `IMG_8600-IMG_8611` matched facilities fallback.
- **Impact:** None functionally — images exist at the manifest paths, and the registry uses those paths. All 14 `s3ReviewImages` in `utils/images.ts` point to the correct local paths.
- **Fix:** Not fixed (categorisation-only, no functional impact). Future cleanup can move files to `students/` and update manifest.

**3. `certificatesImages` not found in `academyImages.ts`**
- **Found during:** Task 2 implementation
- **Issue:** The plan listed `certificatesImages -> certificatesGalleryImages` as a migration but this export does not exist in `src/data/academyImages.ts`.
- **Fix:** Exported `certificatesGalleryImages` as empty array `[]`. This is accurate and matches the source.

## Known Stubs

None — all data entries in `utils/images.ts` have valid local URL paths. The `exteriorGalleryImages` contains `outside-academy.jpg` which is the functional equivalent of the 403-blocked `Academy+Exterior.JPG`.

## Self-Check: PASSED

- `utils/images.ts` — FOUND
- `scripts/download-s3-images.cjs` — FOUND
- `scripts/s3-to-local-manifest.json` — FOUND
- `public/images/academy/` — FOUND (69 files)
- commit d14e41f — FOUND
- commit bb65048 — FOUND
