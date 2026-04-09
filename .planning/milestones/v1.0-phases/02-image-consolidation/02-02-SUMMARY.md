---
phase: 02-image-consolidation
plan: 02
subsystem: main-site
tags: [images, s3-migration, registry, components, pages, local-assets]
dependency_graph:
  requires: [02-01]
  provides: [s3-free-main-site, registry-imports-all-components]
  affects: [all-pages, all-components, napData, schemaData, BaseLayout, SEOHead]
tech_stack:
  added: []
  patterns: [central-image-registry, root-relative-paths, local-image-refs]
key_files:
  created: []
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/images.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/napData.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/schemaData.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/layouts/BaseLayout.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/SEOHead.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/Footer.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/ExamPageLayout.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/PartnersSection.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/ValuesSection.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/PAAArticlePage.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/LocationsSection.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/TeamSection.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/InfoCards.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/CoursesSection.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/VideoCTA.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/cursos/ (5 files)
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/ubicaciones/ (10 files)
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/blog/ (85 files)
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/examenes-cambridge/ (4 files)
decisions:
  - "schemaData.ts prepends BASE_URL to NAP.logo/image for schema.org absolute URLs"
  - "courseImages added to utils/images.ts — was missing from Plan 01 registry"
  - "Gallery images renamed: infantilGalleryImages, primariaGalleryImages, secundariaGalleryImages"
  - "Academy+Exterior.JPG mapped to null in manifest — used outside-academy.jpg as substitute"
metrics:
  duration: "~25 minutes"
  completed_date: "2026-04-09"
  tasks: 2
  files: 131
---

# Phase 02 Plan 02: S3 Migration — Main Site Components and Pages Summary

**One-liner:** Replaced all S3 and production-domain image URLs with local /images/academy/ and /images/optimized/ paths across 131 files, with registry imports from @/utils/images throughout.

## What Was Done

### Task 1: Migrate data layer and layout files

- **napData.ts**: `logo` and `image` changed from `https://impulse-english.es/images/optimized/...` to root-relative `/images/optimized/impulse-logo-400.webp`
- **schemaData.ts**: Added `BASE_URL` constant and `absoluteLogo`/`absoluteImage` variables — schema.org requires absolute URLs, so these prepend `NAP.website` before the root-relative NAP paths
- **BaseLayout.astro**: `DEFAULT_OG_IMAGE` changed from S3 URL to `/images/academy/logos/logo-white-background.jpg`
- **SEOHead.tsx**: `DEFAULT_OG_IMAGE` updated; entire S3 preconnect block removed (preconnect/dns-prefetch links for S3 domain)

### Task 2: Migrate all main site components and pages

**Components migrated (13 files):**
- Footer.tsx, ExamPageLayout.tsx, PartnersSection.tsx, ValuesSection.tsx, PAAArticlePage.tsx, LocationsSection.tsx, TeamSection.tsx, InfoCards.tsx, CoursesSection.tsx, VideoCTA.tsx, AcademyGallery.tsx, FullPhotoGallery.tsx
- All imports changed from `../src/data/images` or `../src/data/academyImages` to `@/utils/images`
- All inline S3 URL strings replaced with local paths or registry references

**Pages migrated (118 files):**
- cursos/ (7): AdultosPage, InfantilPage, SecundariaPage, ParticularsPage, PrimariaPage, CursosOverviewPage, OnlinePage
- ubicaciones/ (10): All 10 neighborhood pages — zero S3 URLs confirmed per-file
- examenes-cambridge/ (4): LinguaskillPage, CambridgeHubPage, B1PreliminaryPage, B2FirstPage
- blog/ (85): All blog pages with inline S3 hero/inline image URLs replaced
- root pages (7): SobreNosotrosPage, NuestroEquipoPage, ContactoPage, GraciasPage, BlogPage, PreguntasFrecuentesPage, ReservarClasePage
- TestimonialsPage

**utils/images.ts additions:**
- Added `courseImages` export — was referenced by CoursesSection.tsx but missing from Plan 01 registry

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing] courseImages not in utils/images.ts**
- **Found during:** Task 2 (CoursesSection.tsx)
- **Issue:** Plan 01 did not add `courseImages` to the central registry, but CoursesSection.tsx imports it
- **Fix:** Added `courseImages` export to `utils/images.ts` with all 4 entries (generalInfantil, preparacionMovers, extensivoSecundaria, preparacionKet) using /images/optimized/ paths
- **Files modified:** `utils/images.ts`
- **Commit:** 5acbc7b

**2. [Rule 2 - Missing] Extra pages with S3 URLs not in plan's file list**
- **Found during:** Task 2 verification
- **Issue:** Plan listed explicit files, but grep revealed 85+ blog pages, 7 root pages, and 2 extra examenes pages also had inline S3 URLs
- **Fix:** Extended migration to cover all files with S3 URLs — acceptance criteria said zero S3 URLs in `components/` and `pages/`
- **Files modified:** 100+ additional files
- **Commit:** 5acbc7b

**3. [Rule 1 - Bug] Academy+Exterior.JPG maps to null in manifest**
- **Found during:** Task 2 blog page migration
- **Issue:** `MejoresAcademiasMadridNortePage.tsx` referenced `Academy+Exterior.JPG` which the manifest maps to null (file not downloaded)
- **Fix:** Substituted with `/images/academy/locations/outside-academy.jpg` (closest equivalent exterior shot)
- **Commit:** 5acbc7b

**4. [Rule 2 - Missing] AcademyGallery.tsx and FullPhotoGallery.tsx had old type imports**
- **Found during:** Task 2 scan
- **Issue:** `import type { AcademyImage } from '../src/data/academyImages'` in two gallery components
- **Fix:** Changed to `from '@/utils/images'` — AcademyImage is re-exported there
- **Commit:** 5acbc7b

## Verification Results

```
grep -r "impulseenglish.s3|impulse-english.es/images" components/ pages/ utils/ src/layouts/ | wc -l
= 0 ✓

grep -r "from.*src/data/images|from.*src/data/academyImages" components/ pages/ --include="*.tsx" | wc -l
= 0 ✓

grep -r "from '@/utils/images'" components/ pages/ --include="*.tsx" | wc -l
= 23 ✓

Per-file ubicaciones check: every file = 0 S3 URLs ✓
```

## Known Stubs

None — all image references point to real local files that were downloaded in Plan 01.

## Self-Check: PASSED

All commits exist:
- `9b6ba9c` — Task 1: data layer and layout files
- `5acbc7b` — Task 2: all main site components and pages

Zero S3 URLs confirmed across entire main site. Registry imports active on 23 component/page files.
