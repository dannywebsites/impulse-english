---
phase: 02-image-consolidation
plan: 04
subsystem: seo-system
tags: [image-consolidation, seo-system, registry-migration, s3-elimination]
dependency_graph:
  requires: [02-01]
  provides: [seo-system-image-registry-complete]
  affects: [02-05]
tech_stack:
  added: []
  patterns: [relative-path-imports, shared-registry-consumption]
key_files:
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/components/AcademyGallery.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/components/FullPhotoGallery.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/components/TeamSection.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/components/InfoCards.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/components/ExamPageLayout.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/components/Footer.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/components/Navbar.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/components/PartnersSection.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/components/LocationsSection.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/SobreNosotrosPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/TestimonialsPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/cursos/InfantilPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/cursos/SecundariaPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/cursos/ParticularsPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/cursos/AdultosPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/cursos/PrimariaPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/examenes-cambridge/LinguaskillPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/examenes-cambridge/CambridgeHubPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/ubicaciones/BarrioDelPilarPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/ubicaciones/LaVaguadaPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/ubicaciones/PlazaCastillaPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/ubicaciones/TetuanPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/ubicaciones/PenagrandePage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/ubicaciones/CuatroTorresPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/ubicaciones/LaVentillaPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/pages/ubicaciones/LaPazPage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/utils/schemaData.ts
decisions:
  - "seo-system components use relative ../../utils/images path — @/ alias resolves to seo-system root, not project root"
  - "seo-system/src/data/ files intentionally NOT modified — they contain S3 URLs but are consumed by nothing after this plan; Plan 05 will delete them"
  - "brandingGalleryImages[1..3] used for Cambridge, GLP, ESIC partner logos in Footer and PartnersSection"
metrics:
  duration: 15m
  completed_date: "2026-04-09"
  tasks_completed: 2
  files_modified: 27
---

# Phase 02 Plan 04: seo-system Image Registry Migration Summary

All seo-system components and pages migrated from S3-hosted images to the shared local registry at utils/images.ts via relative paths. Zero S3 URLs remain in any active seo-system file (components, pages, utils).

## What Was Done

Migrated 9 components and 18 page files (plus 3 extra pages via Rule 2 deviation) from inline S3 URLs and old `seo-system/src/data/` imports to the shared central registry at `utils/images.ts`.

## Tasks Completed

### Task 1: Migrate seo-system components
**Commit:** d7e4abb

- `AcademyGallery.tsx`, `FullPhotoGallery.tsx`: changed `AcademyImage` and `generateImageSchema` import from `../src/data/academyImages` to `../../utils/images`
- `TeamSection.tsx`, `InfoCards.tsx`: changed `s3FacilityImages` import from `../src/data/images` to `../../utils/images`
- `ExamPageLayout.tsx`: fixed import and replaced 2 inline S3 URLs in `defaultGalleryImages` with `blogImages.jpWithStudents.url` and `blogImages.mainClassroom.url`
- `Footer.tsx`: replaced `LOGO_URL` S3 constant with `brandingImages.logoS3.url`; replaced 4 partner logo S3 URLs (Cambridge, Linguaskill, GLP, ESIC) with local paths via `brandingGalleryImages`
- `Navbar.tsx`: replaced `LOGO_URL` S3 constant with `brandingImages.logoS3.url`
- `PartnersSection.tsx`: replaced 4 partner logo S3 URLs with `brandingGalleryImages` entries and local path for Linguaskill white logo
- `LocationsSection.tsx`: replaced outside academy S3 URL with `exteriorGalleryImages[0].url`

### Task 2: Migrate seo-system pages
**Commit:** cd349da

- `SobreNosotrosPage.tsx`, `TestimonialsPage.tsx`: import updated to `../../utils/images`; 10 inline S3 URLs in gallery sections replaced with local paths
- `InfantilPage.tsx`: dual import replaced — `infantilImages as galleryImages` from academyImages and `infantilImages as heroImages` from images.ts → single `import { infantilGalleryImages as galleryImages, infantilImages as heroImages } from '../../../utils/images'`
- `SecundariaPage.tsx`, `PrimariaPage.tsx`: gallery images renamed to `secundariaGalleryImages` and `primariaGalleryImages`
- `ParticularsPage.tsx`, `AdultosPage.tsx`: imports updated; all inline S3 URLs replaced with local registry paths
- `LinguaskillPage.tsx`, `CambridgeHubPage.tsx`: imports updated to `../../../utils/images`
- All 8 ubicaciones pages: 14 inline S3 URLs each replaced with local paths via batch Python script

## Additional fix (schemaData.ts)
**Commit:** df26508 — `businessInfo.logo` and `businessInfo.image` in `seo-system/utils/schemaData.ts` replaced with local path `/images/academy/logos/img-4117.png`.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing coverage] Fixed S3 URLs in components not listed in plan**
- **Found during:** Task 1 execution
- **Issue:** `SEOHead.tsx`, `ValuesSection.tsx`, `CoursesSection.tsx` each contained S3 URLs but were not listed in the plan. These files are consumed by the same seo-system and would have left the site non-portable.
- **Fix:** Applied same local-path substitution to all three files.
- **Files modified:** `SEOHead.tsx`, `ValuesSection.tsx`, `CoursesSection.tsx`
- **Commit:** d7e4abb (included in Task 1 commit)

**2. [Rule 2 - Missing coverage] Fixed S3 URLs in pages not listed in plan**
- **Found during:** Task 2 execution
- **Issue:** `ContactoPage.tsx`, `BlogPage.tsx`, `MetodologiaPage.tsx` each contained S3 URLs but were not listed in the plan.
- **Fix:** Applied same local-path substitution to all three files.
- **Files modified:** `ContactoPage.tsx`, `BlogPage.tsx`, `MetodologiaPage.tsx`
- **Commit:** cd349da (included in Task 2 commit)

**3. [Rule 2 - Missing coverage] Fixed S3 URLs in seo-system/utils/schemaData.ts**
- **Found during:** Final verification
- **Issue:** `businessInfo.logo` and `businessInfo.image` still pointed to S3; not in plan scope but breaks the zero-S3 goal.
- **Fix:** Replaced both with `/images/academy/logos/img-4117.png`
- **Files modified:** `seo-system/utils/schemaData.ts`
- **Commit:** df26508

### Note on seo-system/src/data/ files
`seo-system/src/data/images.ts` and `seo-system/src/data/academyImages.ts` still contain S3 URLs (79 total). These are the old data files that Plan 05 will delete. No component or page imports from them after this plan, making them dead code. They were intentionally left untouched — deleting them is Plan 05's responsibility.

## Known Stubs

None. All image references are wired to concrete local paths that exist in the `/images/academy/` directory (consolidated in Phase 02 Plans 01-02).

## Self-Check: PASSED

- Commit d7e4abb: confirmed
- Commit cd349da: confirmed
- Commit df26508: confirmed
- S3 URLs in seo-system/components/: 0
- S3 URLs in seo-system/pages/: 0
- S3 URLs in seo-system/utils/: 0
- Old src/data imports in seo-system: 0
- Utils/images imports in components: 9 (positive)
- Utils/images imports in pages: 9 (positive)
- infantilGalleryImages in InfantilPage: confirmed
- No @/utils/images alias misuse: 0
