# Phase 2: Image Consolidation — Research

**Researched:** 2026-04-09
**Domain:** Static asset migration — S3-to-local image consolidation, central registry creation, cross-project import alignment
**Confidence:** HIGH (all findings verified against live codebase)

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Create `utils/images.ts` as the single canonical image registry. Organize exports as category-based objects (facilities, logos, blog, team, partners, locations, etc.) matching the semantic groupings already present in `src/data/images.ts` and `src/data/academyImages.ts`.
- **D-02:** Each image entry exports: `name`, `alt` (Spanish), `altEn` (English), `category`, and a local import reference. The import uses Astro-compatible static imports from `src/assets/images/`.
- **D-03:** After `utils/images.ts` is established, delete `src/data/images.ts` and `src/data/academyImages.ts` — consolidate their contents into the single registry. Update all consumers.
- **D-04:** Download all 73 unique S3 images to `src/assets/images/` with category subdirectories: `facilities/`, `logos/`, `blog/`, `team/`, `partners/`, `locations/`, `general/`. This keeps the directory navigable.
- **D-05:** Use original filenames from S3 where possible, cleaned to kebab-case (no URL-encoded `+` signs, no ALL CAPS). Preserve file extensions as-is (jpg, png, webp).
- **D-06:** The `public/images/optimized/` directory (194 files from hand-rolled optimization) is NOT deleted in this phase — it's referenced by the existing `src/data/images.ts` responsive variants. Phase 3 handles replacing these with Astro's native pipeline. For Phase 2, the registry maps these local paths for images that already have optimized variants.
- **D-07:** seo-system components import from the main project's `utils/images.ts` via relative paths (e.g., `../../utils/images.ts`), NOT from a separate mirrored registry. This ensures a single source of truth (IMG-04).
- **D-08:** seo-system's own `src/data/images.ts` and `src/data/academyImages.ts` are deleted after migration — all imports point to the shared registry.
- **D-09:** For components with inline S3 URLs (e.g., `Footer.tsx`, `ExamPageLayout.tsx`, `LocationsSection.tsx`), replace the URL string with a registry import: `import { logos } from '@/utils/images'` then `src={logos.cambridge.url}`.
- **D-10:** For blog page components (`pages/blog/*.tsx`) that each have 1 S3 URL (typically OG/hero image), replace with registry references. These are high volume (~60+ files) but mechanical — each has one image to swap.
- **D-11:** For `napData.ts` and `utils/schemaData.ts` which reference S3 URLs for schema.org data (logo, OG image), update to use local paths via the registry.

### Claude's Discretion
- Exact category naming for subdirectories (as long as semantically clear)
- Whether to create a download script or download manually
- Order of file migration (which components first)
- Whether to batch-commit by category or by subsystem

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| IMG-01 | All S3-hosted images used by production components are downloaded to src/assets/images/ | 73 unique S3 URLs confirmed publicly accessible — curl returns HTTP 200; download script approach documented |
| IMG-02 | Central image registry file (utils/images.ts) exports all image imports from one location | Existing export structure (facilityImages, s3FacilityImages, etc.) mapped; type interfaces identified |
| IMG-03 | All component files reference images through the central registry, not direct S3 URLs | 153 affected files audited; 710 total occurrences confirmed; 3 subsystems identified |
| IMG-04 | seo-system mirrored components updated to use local image paths in the same changeset | seo-system import paths audited; relative path strategy confirmed viable via tsconfig |
</phase_requirements>

---

## Summary

This phase migrates 73 unique S3-hosted images to local `src/assets/images/` and routes all 710 S3 URL occurrences across 153 files through a single central registry at `utils/images.ts`. The work spans three subsystems: main site components/pages, seo-system mirrored components, and the business data layer (napData.ts, schemaData.ts, BaseLayout.astro).

The migration is mechanically well-defined but large in surface area. The 85 blog pages are the highest-volume category (85 files, only 8 unique S3 URLs between them — high repetition). The ubicaciones pages are the highest S3-density per file (LaVaguadaPage.tsx has 28 inline S3 references). The seo-system has 271 S3 URL occurrences in its own files, all of which must point to the shared registry via relative paths after migration.

A key architectural insight: the existing `src/data/images.ts` already uses URL strings (not static module imports) for its optimized images, referencing `public/images/optimized/` paths. The new registry at `utils/images.ts` will use the same string-based URL pattern for Phase 2 — pointing to `public/images/` paths. Phase 3 will convert these to Astro static imports. This keeps the registry compatible with both the Astro SSG main site and the Vite SPA seo-system without requiring cross-system module resolution.

**Primary recommendation:** Write a Node.js download script to fetch all 73 S3 images, create `utils/images.ts` with string-based URL references to `public/images/`, migrate main site files first, then seo-system files, then delete the old data files.

---

## Project Constraints (from CLAUDE.md)

| Directive | Impact on This Phase |
|-----------|---------------------|
| Images ONLY from project's /assets/images/ — never external/stock/AI | This IS the migration goal — all S3 refs must move to local |
| All visible content in Peninsular Spanish | Alt text in registry entries must be Spanish; altEn is secondary |
| Template portability — no hardcoded Impulse references | Registry must use relative/root-relative paths, not production domain URLs |
| No breaking changes to existing URLs and SEO | img src values change from S3 to local; final rendered URLs must remain equivalent |
| Use @/ prefix for absolute imports | Main site components: `import { images } from '@/utils/images'` |
| TypeScript strict mode — no `any` types | Registry types must be fully typed; export named interfaces |
| Back up files before editing | Wave 0 should include backup step for affected files |

---

## Standard Stack

### Core Tools (No New Dependencies Required)

| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| Node.js | 24.11.0 (verified) | Download script runtime | Already installed, used by project build |
| curl | 8.7.1 (verified) | Individual file download validation | Pre-installed on macOS |
| TypeScript | 5.6.0 | Registry type definitions | Project requirement |

**No new npm packages required.** The download script uses Node.js built-ins (https, fs, path) or a simple `curl` wrapper. All migration is text editing and file management.

### Installation
```bash
# No new installations — this phase uses existing project tooling
```

---

## Architecture Patterns

### Current State (What Exists)

```
March-Impulse-Web-e7ad8740.../
├── src/data/
│   ├── images.ts          # Main registry — 11 exports, OptimizedImageData + S3ImageData types
│   └── academyImages.ts   # Academy photos — AcademyImage[] arrays by category
├── utils/
│   ├── napData.ts         # logo + image props point to https://impulse-english.es/images/...
│   └── schemaData.ts      # may reference S3 URLs in schema generators
├── public/images/
│   ├── optimized/         # 194 pre-optimized files (webp+jpg at 4 sizes) — DO NOT DELETE
│   └── original/          # 23 original source files
└── seo-system/
    └── src/data/
        ├── images.ts      # Mirror of main images.ts — same 30 S3 URLs
        └── academyImages.ts # Mirror of main academyImages.ts — same 49 S3 URLs
```

### Target State (What Phase 2 Creates)

```
March-Impulse-Web-e7ad8740.../
├── src/assets/images/     # NEW — 73 downloaded S3 images, organized by category
│   ├── facilities/        # Academy interior/exterior photos
│   ├── logos/             # Brand logos (Cambridge, Linguaskill, Great Little People, etc.)
│   ├── blog/              # Blog hero/OG images
│   ├── team/              # Staff photos
│   ├── partners/          # Partner organization logos
│   ├── locations/         # Location-specific photos
│   └── general/           # Uncategorized
├── utils/
│   ├── images.ts          # NEW — single source of truth, URL strings to /images/... or /src/assets/...
│   ├── napData.ts         # UPDATED — logo/image use local path via registry
│   └── schemaData.ts      # UPDATED — any S3 refs replaced
├── public/images/
│   ├── optimized/         # PRESERVED — Phase 3 replaces these
│   └── original/          # PRESERVED
└── seo-system/
    └── src/data/
        ├── images.ts      # DELETED after migration
        └── academyImages.ts # DELETED after migration
```

### Pattern 1: Registry URL String Pattern

**What:** The registry stores URL strings pointing to `public/images/` (existing optimized) or `/src/assets/images/` (new S3 downloads). NOT Astro static imports in Phase 2 — that is Phase 3's job.

**Why this works:** Both the Astro SSG main site and the Vite SPA seo-system can consume string URLs in `<img src="...">` tags. Static Astro image imports (returning module objects with `.src`) only work in Astro files, not in `.tsx` React components served by the seo-system's Vite build.

**When to use:** All entries in `utils/images.ts` use this pattern in Phase 2.

```typescript
// Source: current src/data/images.ts pattern — verified in codebase
// utils/images.ts — the new central registry

export interface ImageEntry {
  name: string;
  alt: string;       // Spanish (primary)
  altEn: string;     // English (secondary)
  category: string;
  url: string;       // Local path, e.g. '/images/optimized/...' or served from src/assets/
}

export interface ImageSet {
  name: string;
  alt: string;
  altEn: string;
  category: string;
  sizes: {
    sm: { webp: string; jpg: string; width: number };
    md: { webp: string; jpg: string; width: number };
    lg: { webp: string; jpg: string; width: number };
    xl: { webp: string; jpg: string; width: number };
  };
}

// Preserve existing export names — ALL consumers depend on these
export const facilityImages = { ... };    // from current src/data/images.ts
export const s3FacilityImages = { ... };  // rename: drop s3 prefix or keep for compat
export const infantilImages = { ... };
export const studentImages = { ... };
export const certificationImages = { ... };
export const brandingImages = { ... };
export const teamImages = { ... };
export const s3CambridgeImages = { ... };
export const s3SecondaryImages = { ... };
export const s3InfantilImages = { ... };
export const s3ReviewImages = { ... };
export const s3LinguaskillImages = { ... };
// Plus all academyImages.ts exports:
export const infantilImages: AcademyImage[];   // conflict! see pitfall below
export const primariaImages: AcademyImage[];
export const secundariaImages: AcademyImage[];
// ...etc
```

**CRITICAL: Export name collision.** Both `src/data/images.ts` AND `src/data/academyImages.ts` export `infantilImages`. The registry must resolve this by namespacing (e.g., `infantilGallery` vs `infantilHero`) or by using sub-objects. The seo-system already imports both: `import { infantilImages as galleryImages } from '../../src/data/academyImages'` and `import { infantilImages as heroImages } from '../../src/data/images'`. The new registry must preserve this distinction.

### Pattern 2: Component Import Migration

**What:** Replace `import { s3FacilityImages } from '../src/data/images'` with `import { s3FacilityImages } from '@/utils/images'` (main site) or relative path (seo-system).

```typescript
// BEFORE (main site component):
import { s3CambridgeImages, s3SecondaryImages } from '../src/data/images';

// AFTER (main site component using @ alias):
import { s3CambridgeImages, s3SecondaryImages } from '@/utils/images';

// BEFORE (seo-system/components/ExamPageLayout.tsx):
import { s3CambridgeImages, s3SecondaryImages } from '../src/data/images';

// AFTER (seo-system component — relative path to main utils):
import { s3CambridgeImages, s3SecondaryImages } from '../../utils/images';

// BEFORE (seo-system/pages/cursos/InfantilPage.tsx):
import { infantilImages as galleryImages } from '../../src/data/academyImages';
import { infantilImages as heroImages } from '../../src/data/images';

// AFTER:
import { infantilGalleryImages as galleryImages, infantilImages as heroImages } from '../../../utils/images';
```

### Pattern 3: Inline S3 URL Replacement

**What:** Blog pages and some components hardcode S3 URLs directly in JSX. Replace with a registry import.

```typescript
// BEFORE (e.g. LinguaskillCasaFiablePage.tsx line 58):
<img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG"
     alt="Linguaskill desde casa fiabilidad y seguridad del examen online"
     className="w-full h-full object-cover" loading="eager" />

// AFTER:
import { blogImages } from '@/utils/images';
// ...
<img src={blogImages.technologyClassroom.url}
     alt="Linguaskill desde casa fiabilidad y seguridad del examen online"
     className="w-full h-full object-cover" loading="eager" />
```

### Pattern 4: napData.ts Schema URL Fix

**What:** `napData.ts` logo/image use production domain URLs (`https://impulse-english.es/images/...`). These break template portability. Replace with root-relative paths.

```typescript
// BEFORE (napData.ts):
logo: "https://impulse-english.es/images/optimized/impulse-logo-400.webp",
image: "https://impulse-english.es/images/optimized/impulse-logo-400.webp",

// AFTER:
logo: "/images/optimized/impulse-logo-400.webp",
image: "/images/optimized/impulse-logo-400.webp",
```

**Note:** Schema.org logo in JSON-LD should be an absolute URL. BaseLayout.astro can prefix with `BASE_URL` const when building the schema object — this is already how the site constructs canonical URLs. The registry stores the root-relative path; schema generation prepends the domain.

### Pattern 5: SEOHead.tsx Preconnect Cleanup

`components/SEOHead.tsx` has a preconnect block for `https://impulseenglish.s3.us-east-1.amazonaws.com` (lines 68-78). After migration, this preconnect is no longer needed and should be removed along with the S3 `DEFAULT_OG_IMAGE` constant.

### Recommended Project Structure for New Images

```
src/assets/images/
├── facilities/
│   ├── classroom-main.jpg
│   ├── classroom-technology.jpg
│   ├── exterior-academy.jpg
│   ├── stairs-interior.jpg
│   ├── toilet-facilities.jpg
│   └── ...
├── logos/
│   ├── cambridge-logo.png
│   ├── cambridge-logo-edited.png
│   ├── linguaskill-logo.png
│   ├── linguaskill-logo-white.png
│   ├── great-little-people-black.png
│   ├── great-little-people-white.png
│   ├── esic-idiomas.jpg
│   └── logo-white-background.jpg
├── blog/
│   ├── technology-classroom.jpg
│   ├── adult-one-to-one-classes.jpg
│   ├── classroom-facilities-main.jpg
│   ├── academy-exterior.jpg
│   ├── infantil-classes.jpg
│   ├── jp-with-students.jpg
│   └── cambridge-search.jpg
├── team/
│   ├── danny-tour-of-ireland.jpg
│   ├── lucia-photo-academy.jpg
│   └── jp-with-students.jpg
├── partners/
│   └── ... (any partner org logos not in logos/)
├── locations/
│   └── outside-academy.jpg
└── general/
    ├── img-8597.jpg
    ├── img-8598.jpg
    └── ...
```

### Anti-Patterns to Avoid

- **Naming conflict between images.ts and academyImages.ts exports:** Both export `infantilImages`. Resolve by renaming the academyImages exports in the unified registry (e.g., prefix with `gallery` or `academy`).
- **Using Astro static imports (`import myImg from '@/src/assets/...'`) in the registry in Phase 2:** Static imports return module objects with `.src`, `.width`, `.height` in Astro files, but this doesn't work the same way in seo-system's Vite SPA. Keep Phase 2 as string URLs; Phase 3 converts to Astro `<Image>` components.
- **Putting downloaded images in `src/assets/images/` without a corresponding `public/` copy:** `src/assets/` images are processed by Astro's build pipeline; they're NOT served at a predictable static URL unless imported in `.astro` files. For Phase 2 with string-based URLs, images should be in `public/images/` where they're served at root-relative paths. Alternatively, download to `public/images/academy/` which is simpler given the current pattern.
- **Deleting `public/images/optimized/`:** These 194 files back the existing `OptimizedImageData` entries in `facilityImages`, `studentImages`, etc. which still use `/images/optimized/` paths. Phase 3 deletes them.
- **Updating seo-system's `@` alias imports:** The seo-system's `tsconfig.json` maps `@` to the seo-system root (`./*`), so `@/utils/images` would resolve to `seo-system/utils/images.ts` — which doesn't exist. All cross-project imports MUST use relative paths.

---

## Critical Discovery: src/assets vs public/ for Downloaded Images

**This is the most important architectural decision for the planner to understand.**

CONTEXT.md D-02 says "The import uses Astro-compatible static imports from `src/assets/images/`". However:

1. The existing registry (`src/data/images.ts`) uses **string URL paths** to `public/images/optimized/`, NOT static imports.
2. The seo-system is a **Vite SPA** — Astro static imports (`import img from '@/src/assets/...'`) don't work in seo-system's build context.
3. TypeScript files (not `.astro` files) cannot easily use Astro's image processing pipeline.

**Resolution:** For Phase 2, download the 73 S3 images to `public/images/academy/` (following the existing `public/images/` convention) and reference them as URL strings like `/images/academy/facilities/classroom-main.jpg`. Phase 3 will move them to `src/assets/images/` and wire them through Astro's `<Image>` component with proper static imports. This keeps Phase 2 mechanical and avoids breaking the seo-system.

**If the planner chooses to follow D-02 literally** (download to `src/assets/`), then the registry must use static imports in `.astro` files and the seo-system cannot share the same import — it would need a different path strategy. This adds significant complexity and is a contradiction with D-07.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Downloading 73 S3 images | Custom fetch loop | Node.js script with `https.get()` or shell script with `curl` | One-time task; reliability > elegance |
| URL decoding S3 filenames | Custom decoder | `decodeURIComponent()` built-in | Handles `+` → space → kebab-case |
| Finding all S3 occurrences | Manual grep | `grep -roh "https://impulseenglish.s3[^\"']*"` | Gets all unique URLs for download list |
| Verifying zero S3 refs remain | Manual review | Post-migration grep command as verification step | Deterministic pass/fail |

**Key insight:** The most complex part of this phase is the registry design (resolving the export name collision), not the download itself.

---

## Common Pitfalls

### Pitfall 1: Export Name Collision (infantilImages)
**What goes wrong:** `src/data/images.ts` exports `infantilImages` (OptimizedImageData type, responsive sizes). `src/data/academyImages.ts` ALSO exports `infantilImages` (AcademyImage[] type, flat S3 URLs). Both are consumed by different seo-system pages using aliased imports. Merging into one file without resolving this causes TypeScript type errors and import confusion.
**Why it happens:** Two separate registries grew independently with the same semantic name.
**How to avoid:** In `utils/images.ts`, rename academyImages exports: `infantilGalleryImages`, `primariaGalleryImages`, `secundariaGalleryImages` etc. Update all consumer imports to use new names.
**Warning signs:** TypeScript error "Duplicate identifier 'infantilImages'" when merging files.

### Pitfall 2: seo-system @ Alias Points to Wrong Root
**What goes wrong:** Developer uses `import { facilityImages } from '@/utils/images'` in a seo-system file. TypeScript resolves `@` to the seo-system project root (`seo-system/`), so it tries to find `seo-system/utils/images.ts` which doesn't exist.
**Why it happens:** Both projects define `@` aliases but to different roots.
**How to avoid:** All seo-system imports of the shared registry MUST use relative paths. From `seo-system/components/`: `../../utils/images`. From `seo-system/pages/cursos/`: `../../../utils/images`. From `seo-system/pages/ubicaciones/`: `../../../utils/images`.
**Warning signs:** "Cannot find module '@/utils/images'" in seo-system TypeScript compilation.

### Pitfall 3: Inline S3 URL in seo-system Footer.tsx
**What goes wrong:** `seo-system/components/Footer.tsx` has `const LOGO_URL = 'https://impulseenglish.s3...'` hardcoded at the top — NOT imported from a data file. Easy to miss since grep finds it but it's a different pattern.
**Why it happens:** The seo-system Footer was written independently from the main site Footer.
**How to avoid:** Grep both main site AND seo-system for inline S3 strings, not just data file imports.
**Warning signs:** Post-migration S3 URL audit still shows hits in seo-system components.

### Pitfall 4: napData.ts Logo Remains Absolute Production URL
**What goes wrong:** `NAP.logo` and `NAP.image` use `https://impulse-english.es/images/...`. After changing to local paths, schema.org JSON-LD needs absolute URLs. If the path becomes root-relative, schema generators that pass `NAP.logo` directly to JSON-LD will produce invalid schema.
**Why it happens:** Schema.org requires absolute URLs for `logo.url` and `image` properties.
**How to avoid:** Change napData.ts to root-relative `/images/optimized/impulse-logo-400.webp`. In `schemaData.ts`, prefix with `BASE_URL` when building the Organization schema object. BaseLayout.astro already has `const BASE_URL = 'https://impulse-english.es'` — use this.
**Warning signs:** Google Search Console rich result validation errors after deployment.

### Pitfall 5: S3 Filenames with Special Characters
**What goes wrong:** S3 URLs contain `+` (spaces), ALL CAPS, and path segments with dots (`NACHOS+photos.+/`). Downloading these to local filesystem requires decoding and sanitizing filenames. A download script that uses the S3 URL path directly will create files named `NACHOS+photos.+/Technology-based+classroom+photo.JPG` which have invalid characters.
**Why it happens:** S3 allows arbitrary URL-encoded object keys.
**How to avoid:** The download script must: (1) decode URL encoding (`+` → space), (2) extract just the filename (strip path), (3) convert to kebab-case (lowercase, replace spaces and special chars with `-`). Output filenames like `technology-based-classroom-photo.jpg`.
**Warning signs:** Files appear on disk with `+` in names or path separators in filenames.

### Pitfall 6: One S3 URL Used by Multiple Blog Pages
**What goes wrong:** 85 blog pages reference S3 URLs, but there are only 8 unique S3 URLs among them. If the registry assigns the wrong key for a URL, all pages using that URL get the wrong reference.
**Why it happens:** The S3 images are reused across many blog pages as "generic" hero images.
**How to avoid:** Map each of the 8 unique blog S3 URLs to named registry entries. Each blog page imports the appropriate registry key. Verify via a diff that no S3 URL remains.

---

## Scale Summary (Verified Against Live Codebase)

| Metric | Count | Source |
|--------|-------|--------|
| Unique S3 URLs to download | 73 | `grep -roh` across all .ts/.tsx/.astro |
| Total S3 URL occurrences | 710 | grep -c count |
| Total affected files | 153 | grep -l count |
| Blog pages with S3 URLs | 85 | pages/blog/ grep count |
| Unique S3 URLs in blog pages | 8 | blog-specific grep |
| seo-system S3 occurrences | 271 | seo-system/ grep -c |
| Main site component S3 occurrences | ~24 | components/ grep count |
| ubicaciones pages S3 occurrences | 163 | pages/ubicaciones/ grep count |
| cursos pages S3 occurrences | 33 | pages/cursos/ grep count |
| napData.ts production domain URLs | 2 | grep verified |

---

## File-Level Consumer Map

### Main Site — Data Importers (import from src/data/images.ts or academyImages.ts)
| File | Imports |
|------|---------|
| `components/TeamSection.tsx` | `teamImages` |
| `components/InfoCards.tsx` | `s3FacilityImages` |
| `components/CoursesSection.tsx` | `s3InfantilImages`, `s3CambridgeImages`, `courseImages`, `infantilImages`, `certificationImages` |
| `components/VideoCTA.tsx` | `teamImages` |
| `components/ExamPageLayout.tsx` | `s3CambridgeImages`, `s3SecondaryImages` |
| `pages/cursos/InfantilPage.tsx` | `infantilImages` (as heroImages) |
| `pages/cursos/SecundariaPage.tsx` | `studentImages` |
| `pages/cursos/ParticularsPage.tsx` | `facilityImages`, `brandingImages`, `s3CambridgeImages`, `s3SecondaryImages` |
| `pages/cursos/AdultosPage.tsx` | `facilityImages` |
| `pages/cursos/PrimariaPage.tsx` | `studentImages` |
| `pages/TestimonialsPage.tsx` | `facilityImages`, `certificationImages` |
| `pages/examenes-cambridge/LinguaskillPage.tsx` | `s3CambridgeImages`, `s3SecondaryImages` |
| `pages/examenes-cambridge/CambridgeHubPage.tsx` | `s3CambridgeImages`, `s3SecondaryImages` |

### seo-system — Data Importers (import from seo-system/src/data/)
| File | Imports | Relative path to new registry |
|------|---------|-------------------------------|
| `seo-system/components/AcademyGallery.tsx` | `AcademyImage`, `generateImageSchema` from academyImages | `../../utils/images` |
| `seo-system/components/FullPhotoGallery.tsx` | `AcademyImage`, `generateImageSchema` from academyImages | `../../utils/images` |
| `seo-system/components/TeamSection.tsx` | `s3FacilityImages` | `../../utils/images` |
| `seo-system/components/InfoCards.tsx` | `s3FacilityImages` | `../../utils/images` |
| `seo-system/components/ExamPageLayout.tsx` | `s3CambridgeImages`, `s3SecondaryImages` | `../../utils/images` |
| `seo-system/pages/SobreNosotrosPage.tsx` | `facilityImages`, `certificationImages`, `studentImages` | `../utils/images` |
| `seo-system/pages/TestimonialsPage.tsx` | `facilityImages`, `certificationImages` | `../utils/images` |
| `seo-system/pages/cursos/InfantilPage.tsx` | `infantilImages` (both registries!) | `../../utils/images` |
| `seo-system/pages/cursos/SecundariaPage.tsx` | `secundariaImages` (academyImages), `studentImages` | `../../utils/images` |
| `seo-system/pages/cursos/ParticularsPage.tsx` | `facilityImages`, `brandingImages`, `s3CambridgeImages`, `s3SecondaryImages` | `../../utils/images` |
| `seo-system/pages/cursos/AdultosPage.tsx` | `facilityImages` | `../../utils/images` |
| `seo-system/pages/cursos/PrimariaPage.tsx` | `primariaImages` (academyImages), `studentImages` | `../../utils/images` |
| `seo-system/pages/examenes-cambridge/LinguaskillPage.tsx` | `s3CambridgeImages`, `s3SecondaryImages` | `../../utils/images` |
| `seo-system/pages/examenes-cambridge/CambridgeHubPage.tsx` | `s3CambridgeImages`, `s3SecondaryImages` | `../../utils/images` |

### Inline S3 URL Files (Not From Data Files)
| File | S3 Ref Count | Pattern |
|------|-------------|---------|
| `components/Footer.tsx` | 4 | Partner logos via NAP.logo + inline |
| `components/SEOHead.tsx` | 1 | DEFAULT_OG_IMAGE constant |
| `src/layouts/BaseLayout.astro` | 1 | DEFAULT_OG_IMAGE constant |
| `components/PartnersSection.tsx` | multiple | Partner logo URLs inline |
| `components/ValuesSection.tsx` | multiple | Photo URLs inline |
| `components/PAAArticlePage.tsx` | multiple | Hero/content image URLs inline |
| `components/LocationsSection.tsx` | multiple | Location photo URLs inline |
| `pages/blog/*.tsx` | 85 files × 1 | Hero image per page |
| `pages/ubicaciones/LaVaguadaPage.tsx` | 28 | Gallery images inline |
| `pages/ubicaciones/*.tsx` | ~15 each | Gallery images inline (8 pages) |
| `pages/cursos/AdultosPage.tsx` | 12 | Gallery inline |
| `seo-system/components/Footer.tsx` | 1 | LOGO_URL hardcoded |
| `seo-system/components/Navbar.tsx` | inline | Logo URL |
| `seo-system/components/PartnersSection.tsx` | multiple | Partner logos |
| `seo-system/components/LocationsSection.tsx` | multiple | Location photos |
| `seo-system/pages/ubicaciones/*.tsx` | ~15 each | Gallery images |

---

## Download Strategy

### Recommended: Node.js Script

**Why a script over manual download:** 73 files with URL-encoded names (+, ALL CAPS, path segments) — manual download and renaming is error-prone at this scale. A script guarantees consistent kebab-case naming and can output a URL-to-localpath mapping for use during registry creation.

**Script responsibilities:**
1. Read the list of 73 unique S3 URLs
2. Decode URL encoding (`decodeURIComponent`, replace `+` with space)
3. Extract filename, sanitize to kebab-case
4. Determine category based on URL path or filename patterns
5. Download to `public/images/academy/{category}/filename.ext`
6. Output a JSON manifest: `{ "s3Url": "/images/academy/facilities/classroom-main.jpg" }` — the registry builder consumes this

**Environment verification (confirmed):**
- Node.js 24.11.0 — available
- S3 bucket publicly accessible — HTTP 200 confirmed for test URL
- curl 8.7.1 — available as fallback

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Download script, build | Yes | 24.11.0 | — |
| npm | Package management | Yes | 11.6.1 | — |
| curl | S3 download verification | Yes | 8.7.1 | Node https.get() |
| S3 bucket public access | Image downloads | Yes | — (HTTP 200 confirmed) | — |
| Astro build | Post-migration verification | Yes | 5.7.10 | — |

**Missing dependencies with no fallback:** None.

**No new dependencies required for this phase.**

---

## State of the Art

| Old Approach | Current Approach | Status |
|--------------|------------------|--------|
| Direct S3 URLs in JSX | Local paths via central registry | This phase implements |
| Two separate data files (images.ts + academyImages.ts) | Single utils/images.ts | This phase implements |
| Hardcoded production domain in napData.ts | Root-relative paths | This phase implements |
| seo-system mirror files | seo-system imports from main utils | This phase implements |

**Post-phase-2, phase-3 will:**
- Convert `/images/optimized/` string paths to Astro static imports
- Replace `<img>` tags with `<Image>` and `<Picture>` components
- Delete `public/images/optimized/` and `public/images/original/`

---

## Open Questions

1. **Where to put downloaded images: `public/images/academy/` vs `src/assets/images/`**
   - What we know: CONTEXT.md D-02 says `src/assets/images/`. Current registry uses `public/images/` strings. seo-system can't use Astro static imports.
   - What's unclear: Does the user want the Phase 2 registry to use static imports (breaking seo-system sharing) or strings (deferring to Phase 3)?
   - Recommendation: Use `public/images/academy/` + string URLs for Phase 2. Add a note in registry comments that Phase 3 will migrate to `src/assets/`. This preserves D-07 (shared registry) and is consistent with D-06 (don't delete optimized files — they use the same public/ pattern).

2. **Export name collision resolution: rename strategy**
   - What we know: `infantilImages` exported by both source files, consumed with aliased imports.
   - What's unclear: Whether consumers alias at import site or registry renames exports.
   - Recommendation: Rename academyImages exports in registry to `{category}GalleryImages` (e.g., `infantilGalleryImages`). Update ~15 seo-system import sites to use new names. Less disruption than keeping the collision and requiring aliases everywhere.

3. **`generateImageSchema` function in academyImages.ts**
   - What we know: `seo-system/components/AcademyGallery.tsx` and `FullPhotoGallery.tsx` import `generateImageSchema` from `academyImages`.
   - What's unclear: Does this function exist in the main `src/data/academyImages.ts` or only the seo-system copy? Its implementation needs to move to `utils/images.ts`.
   - Recommendation: Verify in `src/data/academyImages.ts` before Wave 1; include `generateImageSchema` in the new registry exports.

---

## Verification Commands

```bash
# After migration: zero S3 URL occurrences should remain
grep -r "impulseenglish.s3\|impulse-english.es/images" \
  March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/ \
  --include="*.ts" --include="*.tsx" --include="*.astro"
# Expected output: no matches

# Verify all images in utils/images.ts exist on disk
# (script to check each url path exists in public/)

# Verify build succeeds after migration
cd March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97 && npm run build
```

---

## Sources

### Primary (HIGH confidence)
- Live codebase — direct file reading and grep audits
- `March-Impulse-Web-.../src/data/images.ts` — types, export names, existing URL patterns
- `March-Impulse-Web-.../src/data/academyImages.ts` — AcademyImage interface, category arrays
- `March-Impulse-Web-.../seo-system/tsconfig.json` — @ alias scope confirmed as seo-system root
- `March-Impulse-Web-.../astro.config.mjs` — @ alias scope confirmed as main project root
- S3 bucket HTTP probe — public access confirmed

### Secondary (MEDIUM confidence)
- CONTEXT.md design decisions — user-locked decisions, verified against codebase structure
- CLAUDE.md project conventions — naming, import, and language rules

---

## Metadata

**Confidence breakdown:**
- Scale/scope (file counts, S3 URL counts): HIGH — verified by grep against live codebase
- Export name collision: HIGH — verified by reading both data files
- seo-system import paths: HIGH — verified against tsconfig and existing import statements
- Download strategy: HIGH — S3 public access confirmed, Node.js/curl available
- src/assets vs public/ tension: MEDIUM — D-02 says src/assets but evidence points to public/ for Phase 2 compatibility; planner should address in Wave 0

**Research date:** 2026-04-09
**Valid until:** 2026-05-09 (stable — no fast-moving dependencies)
