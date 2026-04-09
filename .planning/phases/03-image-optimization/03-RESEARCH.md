# Phase 03: Image Optimization - Research

**Researched:** 2026-04-09
**Domain:** Astro 5 `astro:assets` image pipeline — `<Image>`, `<Picture>`, `getImage()`
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Move all 73 images from `public/images/academy/` to `src/assets/images/academy/` preserving category subdirectory structure (facilities/, logos/, students/, team/, locations/, general/). Astro's `<Image>` and `<Picture>` only optimize images imported from `src/`.
- **D-02:** Keep `public/images/academy/` as a secondary copy for seo-system access. The seo-system is a standalone Vite SPA that cannot consume `astro:assets` imports.
- **D-03:** After Astro pipeline is verified working, delete `public/images/optimized/` (211 hand-generated files) and `public/images/original/` (23 source files).
- **D-04:** In `.astro` files use Astro's `<Image>` and `<Picture>` directly with static imports from `src/assets/images/`.
- **D-05:** For React components (.tsx), use `getImage()` in the `.astro` page/layout frontmatter to generate optimized URLs at build time, then pass URLs as string props to React components. React components continue using `<img>` tags.
- **D-06:** Hero images use `<Picture>` with `formats={['avif', 'webp']}` and `loading="eager"`.
- **D-07:** Non-hero images use `<Image>` or `getImage()` with `loading="lazy"` (default).
- **D-08:** Refactor `utils/images.ts` to export Astro-compatible static imports (ImageMetadata). Each entry gains an `import` from `src/assets/images/academy/...`. Preserve existing `url` string property for seo-system consumers.
- **D-09:** Investigate whether a single `utils/images.ts` can cleanly export both `ImageMetadata` and URL strings, or whether a companion `utils/images-astro.ts` is needed.
- **D-10:** Delete `scripts/optimize-images.mjs` (main site Sharp script, 349 lines).
- **D-11:** Delete `seo-system/scripts/optimize-images.mjs`.
- **D-12:** Delete `components/OptimizedImage.tsx` and its sub-exports.
- **D-13:** Update `TeamSection.tsx` to accept an optimized image URL as a prop instead of importing `OptimizedImage`.
- **D-14:** Remove `OptimizedImageData` and `ImageSize` types from `utils/images.ts` once no consumers remain. Keep `S3ImageData` and `AcademyImage` types.

### Claude's Discretion

- Exact file structure for static imports (one big file vs. per-category files)
- Whether to create an Astro wrapper component for common image patterns
- Build verification approach (visual check vs. automated size comparison)
- Order of migration (hero images first vs. all at once)

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| OPT-01 | Astro image pipeline configured with `<Image>` and `<Picture>` from `astro:assets` | Astro 5.18.1 ships Sharp-based image service by default; no additional config needed beyond moving images to `src/` |
| OPT-02 | Hero images use `<Picture>` with avif and webp formats and `loading="eager"` | `<Picture>` `formats` prop accepts `['avif', 'webp']`; avif is first for best compression |
| OPT-03 | Non-hero images use lazy loading via `loading="lazy"` | Default on Astro `<Image>` is `loading="lazy"` — no extra config |
| OPT-04 | Hand-rolled optimization system (optimize-images.mjs, manual srcset) replaced by Astro native pipeline | Two delete targets: `scripts/optimize-images.mjs` and `seo-system/scripts/optimize-images.mjs`; one component delete: `components/OptimizedImage.tsx` |
</phase_requirements>

---

## Summary

This phase replaces a hand-rolled Sharp optimization pipeline (`optimize-images.mjs` + `OptimizedImage.tsx` + `public/images/optimized/`) with Astro's built-in `astro:assets` image service. Astro 5.18.1 is already installed and already uses Sharp internally — no new dependencies are needed.

The core constraint is the Astro/React island boundary: Astro `<Image>` and `<Picture>` components cannot be rendered inside React `.tsx` files (they are Astro-only components). React components that render images must receive pre-optimized URL strings via props. The `getImage()` function from `astro:assets` runs in `.astro` frontmatter at build time and returns a URL string safe for prop-passing.

The second constraint is the seo-system dual-access requirement. Images must remain in `public/images/academy/` (served as static URLs) while simultaneously being moved to `src/assets/images/academy/` for Astro pipeline access. This means physically copying all 69 files, not moving them.

**Primary recommendation:** Implement in three waves: (1) move images + build `utils/images-astro.ts` registry, (2) migrate `.astro` pages/layouts using `<Image>`/`<Picture>`, (3) migrate React components via `getImage()` props, then delete hand-rolled artifacts.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `astro:assets` | Built into Astro 5.18.1 | `<Image>`, `<Picture>`, `getImage()` | Official Astro image pipeline, no install needed |
| `sharp` | 0.34.5 (already installed) | Image processing at build time | Astro's internal Sharp service; already in `package.json` |

### No New Dependencies Required

Astro 5 ships with an image service backed by Sharp. Since Sharp 0.34.5 is already in `package.json`, no `npm install` is needed for this phase.

**Version verification:** Astro 5.18.1 confirmed via `node -e "require('./node_modules/astro/package.json').version"`.

---

## Architecture Patterns

### Two-Registry Pattern (resolves D-09)

A single `utils/images.ts` file cannot cleanly export both Astro `ImageMetadata` (static ESM imports resolved at build time by Vite/Astro) and URL strings. Static `import` statements must be at module top level — they cannot be inside object literals or conditionally structured. Mixing them in one file creates Vite resolution ambiguity.

**Resolution:** Create `utils/images-astro.ts` as the Astro-side registry. It re-exports ImageMetadata from static imports. The existing `utils/images.ts` remains unchanged for seo-system consumers (URL strings only).

```typescript
// utils/images-astro.ts — Astro pipeline registry (main site only)
// Source: Astro docs https://docs.astro.build/en/guides/images/#images-in-astro-files

import estudiantesSonriendo from '../src/assets/images/academy/students/estudiantes-primaria-sonriendo.jpg';
import classroomFacility from '../src/assets/images/academy/facilities/classroom-facilities-main-classroom.jpg';
// ... one import per image

export const astroImages = {
  team: {
    estudiantesSonriendo,   // type: ImageMetadata
  },
  facilities: {
    classroomFacility,
  },
  // ... structured by category
} as const;
```

**Why not one file:** Vite resolves static `import` paths at parse time. If `utils/images.ts` contains both `import foo from '../src/assets/...'` (Astro ImageMetadata) and `url: '/images/academy/...'` (string), the seo-system Vite build will attempt to resolve the Astro imports too — and fail because `src/assets/` is an Astro-only convention. Two files keeps concerns separated cleanly.

### Pattern: `<Picture>` for Hero Images (OPT-02)

Use in `.astro` pages and layouts. `formats` order matters: Astro generates sources in the specified order; browsers pick the first supported format.

```astro
---
// Source: https://docs.astro.build/en/guides/images/#picture-
import { Picture } from 'astro:assets';
import { astroImages } from '@/utils/images-astro';
---

<Picture
  src={astroImages.facilities.heroClassroom}
  formats={['avif', 'webp']}
  alt="Aula Impulse English Academy La Vaguada Madrid"
  loading="eager"
  fetchpriority="high"
  width={1920}
  class="w-full h-full object-cover"
/>
```

`avif` before `webp` gives maximum compression for modern browsers; older browsers fall back to the original format automatically.

### Pattern: `<Image>` for Non-Hero Images (OPT-03)

```astro
---
import { Image } from 'astro:assets';
import { astroImages } from '@/utils/images-astro';
---

<Image
  src={astroImages.team.estudiantesSonriendo}
  alt="Estudiantes de primaria sonriendo en clase de inglés"
  width={800}
  loading="lazy"
  class="w-full h-auto rounded-2xl"
/>
```

`loading="lazy"` is the default on Astro `<Image>` — explicitly setting it documents intent but is not required.

### Pattern: `getImage()` for React Component Props (D-05)

This is the key pattern for React island images. `getImage()` runs at build time in `.astro` frontmatter and returns a plain object with a `src` string safe for prop-passing.

```astro
---
// In the .astro page that mounts TeamSection
import { getImage } from 'astro:assets';
import { astroImages } from '@/utils/images-astro';
import TeamSection from '../../components/TeamSection';

const teamImg = await getImage({
  src: astroImages.team.estudiantesSonriendo,
  format: 'webp',
  width: 800,
});
---

<TeamSection teamImageSrc={teamImg.src} teamImageAlt="Estudiantes de primaria sonriendo" />
```

```tsx
// TeamSection.tsx — after migration
interface TeamSectionProps {
  teamImageSrc: string;
  teamImageAlt: string;
}

export default function TeamSection({ teamImageSrc, teamImageAlt }: TeamSectionProps) {
  return (
    // ...
    <img src={teamImageSrc} alt={teamImageAlt} className="w-full h-auto object-cover" loading="lazy" />
  );
}
```

### Pattern: index.astro Hero `<picture>` → `<Picture>`

The homepage `index.astro` has a hand-written `<picture>` element with hardcoded `/images/optimized/` paths for the mobile/tablet hero fallback. Replace with `<Picture>` using static imports from `src/assets/`.

```astro
---
import { Picture } from 'astro:assets';
import heroMobile from '../assets/images/academy/students/hero-mobile-estudiantes-primaria.jpg';
---

<Picture
  src={heroMobile}
  formats={['avif', 'webp']}
  alt="Estudiantes de primaria sonriendo en clase de inglés - Impulse English Academy"
  widths={[640, 1024]}
  sizes="(max-width: 640px) 640px, 1024px"
  loading="eager"
  fetchpriority="high"
  class="absolute inset-0 w-full h-full object-cover"
/>
```

### CoursesSection.tsx — Additional OptimizedImageData Consumer

CONTEXT.md lists `TeamSection.tsx` as the only consumer of `OptimizedImage.tsx`, which is correct. However, **`CoursesSection.tsx` is also an `OptimizedImageData` consumer** — it uses `courseImages` (which have `sizes.sm/md/lg/xl.webp/.jpg` shape) and manually builds `<picture>` elements with srcset strings. This is a second hand-rolled pattern requiring migration.

`CoursesSection` receives `optimizedImage: OptimizedImageData` on each course object. After migration, it should receive pre-optimized URL strings via the `.astro` parent using `getImage()`, matching the same approach as `TeamSection`.

### Recommended Project Structure (post-migration)

```
src/
├── assets/
│   └── images/
│       └── academy/           ← New Astro-optimized source (69 files)
│           ├── facilities/
│           ├── logos/
│           ├── students/
│           ├── team/
│           ├── locations/
│           └── general/
public/
└── images/
    └── academy/               ← Keep as seo-system mirror (D-02)
        ├── facilities/
        ├── logos/
        ├── students/
        ├── team/
        ├── locations/
        └── general/
utils/
├── images.ts                  ← Unchanged (URL strings, seo-system consumers)
└── images-astro.ts            ← New (ImageMetadata static imports, Astro site only)
```

### Anti-Patterns to Avoid

- **Using `<Image>` from `astro:assets` inside `.tsx` React components:** These components are rendered in the browser as React islands. Astro components (including `<Image>`) cannot be used inside React component trees. Always use `getImage()` in frontmatter and pass URLs as props.
- **Importing images from `public/`:** Astro's image pipeline only processes images imported from `src/`. Images in `public/` are served verbatim with no optimization.
- **Dynamic imports for images:** `import(variable)` is not supported for Astro image processing. Every image must be a static `import` statement at module top level. This is why `utils/images-astro.ts` needs one `import` statement per image.
- **Deleting `public/images/academy/` before seo-system migration:** The seo-system Vite SPA reads from `/images/academy/` URL paths. Delete only `public/images/optimized/` and `public/images/original/`.
- **Using the `image` Astro config key to set a custom endpoint:** Not needed — Sharp service is default in Astro 5 static output. Adding custom image config risks overriding Sharp.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| WebP/AVIF conversion | Sharp scripts, manual `<source>` tags | `<Picture formats={['avif','webp']}>` | Astro handles format negotiation, srcset generation, and file output |
| Responsive srcset | Manual `srcSet` string concatenation | `<Image widths={[400,800,1200]}>` | Astro generates correct srcset and sizes attributes |
| Build-time URL generation for React props | Custom Vite plugins | `getImage()` in `.astro` frontmatter | Official Astro API, runs at static build time |
| Image dimensions | Manual width/height tracking per image | Astro intrinsic dimensions from `ImageMetadata` | Astro reads dimensions from the import and prevents CLS automatically |

**Key insight:** The hand-rolled system pre-generated four resolutions (sm/md/lg/xl) × two formats (webp/jpg) = 8 files per image = 211 files total. Astro generates equivalent output at build time without maintaining any of those files in version control.

---

## Common Pitfalls

### Pitfall 1: Dynamic import paths

**What goes wrong:** Developer writes `import(imagePath)` or uses a variable in an import path, expecting Astro to resolve it. Build fails or image is not optimized.

**Why it happens:** Vite/Rollup resolves static imports at parse time. Dynamic paths cannot be analyzed statically.

**How to avoid:** Every image in `utils/images-astro.ts` must be a top-level static `import` statement. The registry object then references the imported variable (already resolved `ImageMetadata`).

**Warning signs:** Build error mentioning "dynamic import" or images served from `public/` fallback at runtime.

### Pitfall 2: React component tries to use `<Image>` from `astro:assets`

**What goes wrong:** Developer imports `{ Image } from 'astro:assets'` inside a `.tsx` file. TypeScript may not catch this at compile time but the component will fail at runtime as an unknown element.

**Why it happens:** `astro:assets` is a virtual module that only exists in the Astro build context, not in React's runtime.

**How to avoid:** Audit every `.tsx` file after migration. React components must only receive `src: string` and use plain `<img>` tags.

**Warning signs:** Runtime "Image is not a function" or blank image elements in React components.

### Pitfall 3: `getImage()` called outside `.astro` frontmatter

**What goes wrong:** `getImage()` called inside a TypeScript utility or at component render time. Returns a Promise that is never awaited, or throws because Sharp is not available in browser context.

**Why it happens:** `getImage()` calls Sharp under the hood — it's a server/build-time function only.

**How to avoid:** `getImage()` must always be called with `await` in `.astro` frontmatter (the `---` block). Never call it in `.ts` utilities or `.tsx` components.

**Warning signs:** `await getImage()` works but the returned `src` contains a Vite internal URL (works in dev, breaks in production build).

### Pitfall 4: Hero image `fetchpriority` omitted on `<Picture>`

**What goes wrong:** Hero `<Picture>` has `loading="eager"` but no `fetchpriority="high"`. Browser still de-prioritizes the LCP image.

**Why it happens:** `loading="eager"` prevents lazy loading but does not signal priority to the browser's preload scanner.

**How to avoid:** Always add `fetchpriority="high"` alongside `loading="eager"` on above-the-fold `<Picture>` elements.

### Pitfall 5: `public/images/optimized/` deleted before build verification

**What goes wrong:** The hand-rolled system's outputs are deleted before confirming the Astro pipeline produces equivalent images at the same URLs. Pages that still reference `/images/optimized/` paths (e.g., `index.astro` hero picture element) serve 404s.

**Why it happens:** Migration order: delete artifacts first, then update references. Should be reversed.

**How to avoid:** Delete `public/images/optimized/` and `public/images/original/` only after: (1) all component references to those paths are updated, and (2) `npm run build` completes without errors.

### Pitfall 6: `src/assets/images/` path not matched by `@/` alias

**What goes wrong:** `@/src/assets/images/academy/foo.jpg` resolves incorrectly. The `@/` alias maps to the project root (`__dirname` in `astro.config.mjs`), so `@/src/assets/...` is correct but `@/assets/...` is not.

**Why it happens:** Alias is `@` → project root, not `@` → `src/`.

**How to avoid:** Static imports in `utils/images-astro.ts` should use relative paths (`../src/assets/images/academy/...`) or the full `@/src/assets/images/academy/...` form. Verify with one import in dev before writing all 69.

---

## Code Examples

### Complete `utils/images-astro.ts` structure

```typescript
// utils/images-astro.ts
// Astro static image imports for the main site pipeline.
// Do NOT import this file from seo-system — use utils/images.ts (URL strings) instead.
// Source: https://docs.astro.build/en/guides/images/#images-in-astro-files

// TEAM
import estudiantesSonriendo from '../src/assets/images/academy/students/estudiantes-primaria-sonriendo.jpg';

// FACILITIES (s3 set — real academy photos)
import classroom1 from '../src/assets/images/academy/facilities/primary-classes-students-smiling.jpg';
// ... (one per academy image file)

export const astroTeamImages = { estudiantesSonriendo } as const;
export const astroFacilityImages = { classroom1 } as const;
// ... per category
```

### `<Picture>` in page `.astro` file

```astro
---
import { Picture } from 'astro:assets';
import { astroFacilityImages } from '@/utils/images-astro';
---

<Picture
  src={astroFacilityImages.classroom1}
  formats={['avif', 'webp']}
  alt="Estudiantes primaria clase inglés Impulse English Academy"
  loading="eager"
  fetchpriority="high"
  class="w-full h-full object-cover"
/>
```

### `getImage()` in `.astro` frontmatter for React prop

```astro
---
import { getImage } from 'astro:assets';
import { astroTeamImages } from '@/utils/images-astro';
import TeamSection from '../../components/TeamSection';

const teamImg = await getImage({
  src: astroTeamImages.estudiantesSonriendo,
  format: 'webp',
  width: 800,
  quality: 80,
});
---

<TeamSection
  teamImageSrc={teamImg.src}
  teamImageAlt="Estudiantes de primaria sonriendo en clase de inglés"
  client:visible
/>
```

### Multiple `getImage()` calls for CoursesSection

CoursesSection receives a `courses` array where each course has an `optimizedImage`. After migration, the `.astro` parent pre-generates all course images:

```astro
---
import { getImage } from 'astro:assets';
import { astroCourseImages } from '@/utils/images-astro';
import CoursesSection from '../../components/CoursesSection';

const courseImgUrls = {
  generalInfantil: (await getImage({ src: astroCourseImages.generalInfantil, format: 'webp', width: 800 })).src,
  preparacionMovers: (await getImage({ src: astroCourseImages.preparacionMovers, format: 'webp', width: 800 })).src,
  extensivoSecundaria: (await getImage({ src: astroCourseImages.extensivoSecundaria, format: 'webp', width: 800 })).src,
  preparacionKet: (await getImage({ src: astroCourseImages.preparacionKet, format: 'webp', width: 800 })).src,
};
---

<CoursesSection courseImages={courseImgUrls} client:visible />
```

---

## Runtime State Inventory

Step 2.5: SKIPPED — This is not a rename/refactor/migration of identifiers. Image files are being moved and references updated, but no stored data, live service config, OS state, secrets, or build artifacts embed image paths as runtime-stored state. The `public/images/academy/` copy remains in place (D-02), so no runtime references break.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|---------|
| Node.js | Build pipeline | ✓ | (macOS Darwin) | — |
| Sharp | Astro image service | ✓ | 0.34.5 (in package.json) | — |
| Astro | `<Image>`, `<Picture>`, `getImage()` | ✓ | 5.18.1 | — |

No missing dependencies. All tools required for this phase are already installed.

---

## Validation Architecture

`nyquist_validation` is explicitly `false` in `.planning/config.json`. This section is skipped per config.

---

## Open Questions

1. **Hero images in `public/images/optimized/` that have no counterpart in `public/images/academy/`**
   - What we know: `public/images/optimized/` contains 211 files including hero images (`hero-mobile-estudiantes-primaria.webp`, `hero-tablet-estudiantes-primaria.webp`) that were generated from originals in `public/images/original/` (23 files). Some originals may not be in `public/images/academy/`.
   - What's unclear: Whether the hero source originals exist in `public/images/original/` and need to be copied to `src/assets/images/academy/` too.
   - Recommendation: During Wave 1 (image move), the planner should include a step to audit `public/images/original/` and identify which files are hero sources. These 23 originals may be the source for `facilityImages`, `infantilImages`, `teamImages`, etc. (the `OptimizedImageData` shape entries). Confirm by checking filenames against the optimized set.

2. **`CoursesSection.tsx` migration scope**
   - What we know: CONTEXT.md only lists `TeamSection.tsx` as the OptimizedImage consumer. Investigation revealed `CoursesSection.tsx` also uses `OptimizedImageData` shape (`courseImages`) and builds manual `<picture>` elements with srcset.
   - What's unclear: CONTEXT.md D-12 says delete `OptimizedImage.tsx` (imported only by TeamSection.tsx). CoursesSection does NOT import `OptimizedImage.tsx` — it uses `OptimizedImageData` type and manual `<picture>`. So `OptimizedImage.tsx` can still be deleted. But CoursesSection's manual picture elements are also hand-rolled and must be replaced.
   - Recommendation: Add `CoursesSection.tsx` migration to the plan. The approach is identical to TeamSection: `getImage()` in `.astro` parent, prop-passed URLs in React component.

3. **`ValuesSection.tsx` and `InfoCards.tsx` image handling**
   - What we know: Both import `s3FacilityImages` (URL string shape, not OptimizedImageData). They use plain `<img src={...url}>` tags with the `/images/academy/` URL string.
   - What's unclear: Whether these need `getImage()` migration or can stay as-is (since the `url` strings will still work as long as `public/images/academy/` is kept).
   - Recommendation: These components don't need migration in Phase 3. They use S3ImageData (URL strings) pointing to `public/images/academy/` which remains in place (D-02). Optionally improve with `getImage()` for avif/webp, but not required for OPT-01 through OPT-04.

---

## Sources

### Primary (HIGH confidence)
- Astro 5.18.1 installed (`node_modules/astro/package.json`) — version confirmed locally
- Astro official docs: https://docs.astro.build/en/guides/images/ — `<Image>`, `<Picture>`, `getImage()` API
- `astro.config.mjs` — current project config (no image service override, Sharp default applies)
- `utils/images.ts` — full registry audit (1266 lines, two shape types confirmed)
- `components/OptimizedImage.tsx` — hand-rolled component confirmed, 3 exports
- `components/TeamSection.tsx` — confirmed imports OptimizedImage, uses `OptimizedImageData`
- `components/CoursesSection.tsx` — confirmed uses `OptimizedImageData`, manual `<picture>` elements
- `src/pages/index.astro` — hero `<picture>` element referencing `/images/optimized/` paths confirmed

### Secondary (MEDIUM confidence)
- Astro image docs pattern for `getImage()` in frontmatter — matches known Astro 5 API
- Two-file registry pattern (images.ts + images-astro.ts) — derived from Vite static import constraint

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — Astro 5.18.1 and Sharp 0.34.5 confirmed installed; no new deps needed
- Architecture patterns: HIGH — `<Image>`, `<Picture>`, `getImage()` are stable Astro 5 APIs; dual-registry pattern derived from Vite import resolution rules
- Pitfalls: HIGH — based on direct inspection of existing code patterns and known Astro/Vite constraints
- CoursesSection scope gap: HIGH — confirmed by reading the component source; CONTEXT.md did not list it but it is a hand-rolled consumer

**Research date:** 2026-04-09
**Valid until:** 2026-07-09 (Astro image API is stable; Sharp major version changes are rare)
