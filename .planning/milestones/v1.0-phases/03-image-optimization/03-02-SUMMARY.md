---
phase: 03-image-optimization
plan: "02"
subsystem: website-frontend
tags: [image-optimization, astro-picture, hero, team-section, courses-section, favicons]
dependency_graph:
  requires: [03-01]
  provides: [homepage-astro-picture-hero, team-courses-getimage-props, favicon-decoupling]
  affects: [src/pages/index.astro, components/TeamSection.tsx, components/CoursesSection.tsx, src/layouts/BaseLayout.astro]
tech_stack:
  added: []
  patterns: [astro-picture-component, getimage-for-react-props, favicon-public-directory]
key_files:
  created:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/public/images/favicons/favicon-192x192.png
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/public/images/favicons/favicon-32x32.png
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/public/images/favicons/favicon-16x16.png
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/public/images/favicons/apple-touch-icon.png
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/pages/index.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/layouts/BaseLayout.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/TeamSection.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/CoursesSection.tsx
decisions:
  - "TeamSection uses jpWithStudents (team photo with students) not estudiantesSonriendo for team section image — more contextually accurate"
  - "CoursesSection fallback URLs use /images/academy/ paths — same as astroStudentImages source, always available in public/"
  - "index.astro getImage() calls use quality: 80 for all course/team images — good balance for card-sized images at 800px width"
metrics:
  duration: 5m
  completed: "2026-04-09T15:06:46Z"
  tasks_completed: 2
  files_modified: 8
---

# Phase 03 Plan 02: Homepage Astro Image Pipeline Migration Summary

Migrated the homepage hero from a hand-rolled `<picture>` srcset to Astro `<Picture>` with avif/webp/eager loading. Decoupled favicon files from the soon-to-be-deleted `/images/optimized/` directory. Converted TeamSection and CoursesSection to receive Astro-optimized image URLs as props via `getImage()` calls in index.astro frontmatter.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Migrate index.astro hero to Picture and decouple favicons | 44cc054 | src/pages/index.astro, src/layouts/BaseLayout.astro, public/images/favicons/* |
| 2 | Migrate TeamSection and CoursesSection to getImage() props | 5a08bca | components/TeamSection.tsx, components/CoursesSection.tsx |

## What Was Built

### Task 1: index.astro Hero + Favicons
- Replaced the hand-rolled `<picture>` block (referencing `/images/optimized/hero-mobile-*` and `/images/optimized/hero-tablet-*`) with Astro's `<Picture>` component
- `<Picture>` generates avif and webp variants at 640, 1024, and 1920px widths automatically
- `loading="eager"` and `fetchpriority="high"` preserved for LCP optimization
- Added `getImage()` calls in frontmatter for 7 images (1 team + 6 courses)
- Created `/public/images/favicons/` with 4 favicon files copied from `/images/optimized/`
- Updated `BaseLayout.astro` to reference `/images/favicons/` instead of `/images/optimized/` for all favicon links

### Task 2: TeamSection and CoursesSection Props Pattern
- `TeamSection.tsx`: Removed `import OptimizedImage` and `import { teamImages }` — now accepts `teamImageSrc?: string` and `teamImageAlt?: string` props with fallback URL
- `CoursesSection.tsx`: Removed `import type { OptimizedImageData }` and all manual `<picture>` srcset construction — now accepts `courseImageUrls?: Record<string, string>` prop
- `CoursesSection` course data now uses `imageUrl: string` and `imageAlt: string` instead of `optimizedImage: OptimizedImageData`
- Both components have fallback URLs pointing to `/images/academy/` (always-available public files)
- `index.astro` passes `teamImg.src` and `courseImgUrls` as props to both components

## Deviations from Plan

### Auto-adjusted (not bugs)

**1. TeamSection image choice**
- Plan suggested `astroTeamImages.estudiantesSonriendo` for the team section
- `estudiantesSonriendo` is already used as the hero background — `jpWithStudents` was selected instead as a more contextually accurate team section image (shows JP with students in a teaching context)

**2. Pre-existing env var build failure**
- Build fails without `PUBLIC_WEBHOOK_URL` env var (pre-existing, from Phase 01)
- Verified with `PUBLIC_WEBHOOK_URL=https://placeholder.example.com npm run build` — build completes successfully with all image variants generated

## Build Verification

Build output confirmed:
- Astro generated avif and webp variants for `estudiantes-primaria-sonriendo` (hero)
- Astro generated webp for `jp-with-students` (team section)
- 131 pages built successfully in 9.84s
- No `/images/optimized/hero-` references remain in index.astro
- No `OptimizedImage` import in TeamSection.tsx
- No `OptimizedImageData` usage in CoursesSection.tsx

## Known Stubs

None — all image URLs are real Astro-processed paths or valid fallback public paths.

## Self-Check: PASSED

- [x] `src/pages/index.astro` contains `import { Picture } from 'astro:assets'`
- [x] `src/pages/index.astro` contains `import { getImage } from 'astro:assets'`
- [x] `src/pages/index.astro` does NOT contain `/images/optimized/hero-`
- [x] `src/layouts/BaseLayout.astro` references `/images/favicons/` for all 4 favicon links
- [x] `public/images/favicons/` contains 4 files
- [x] `components/TeamSection.tsx` does NOT contain `import OptimizedImage`
- [x] `components/TeamSection.tsx` does NOT contain `import { teamImages }`
- [x] `components/CoursesSection.tsx` does NOT contain `OptimizedImageData`
- [x] `components/CoursesSection.tsx` does NOT contain hand-rolled srcSet string concatenation
- [x] Commits 44cc054 and 5a08bca exist
