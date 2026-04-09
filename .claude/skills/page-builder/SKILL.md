---
name: Page Builder
description: >
  Build new pages for the Impulse English Academy website following established patterns and
  conventions. Use this skill when creating location pages, course pages, exam pages, blog pages,
  or any new .astro page. Covers all 4 layout patterns (Base, Article, Course, Exam), the complete
  component inventory (20+ shared components), and the page taxonomy (138 pages across 7 sections).
  Also use when modifying existing page structures or adding new page types.
---

# Page Builder

Creates new pages following the exact patterns established across the 138-page Impulse English
Academy website. Every page type has a specific layout pattern, component set, and schema injection
approach that must be followed for consistency.

## When to Use

- Creating new location pages (academia-ingles-*.astro)
- Adding new course pages
- Building exam preparation pages
- Creating static blog pages
- Adding new mega-hub or informational pages
- Modifying existing page structures

---

## 1. Page Taxonomy (138 Pages)

| Section | Path | Count | Pattern |
|---|---|---|---|
| Root pages | `/` | 12 | Base layout + React components |
| Course pages | `/cursos-ingles/` | 7 | Base layout + course components |
| Exam pages | `/examenes-cambridge/` | 6 | Base layout + exam components |
| Linguaskill | `/linguaskill/` | 4 | Base layout + course components |
| Location pages | `/academia-ingles-*/` | 11 | Base layout + location React page |
| Mega-hubs | `/academias-ingles-madrid/` | 5 | Base layout + hub components |
| Blog (static) | `/blog/*.astro` | 74 | Base layout + hand-written content |
| Blog (dynamic) | `/blog/[slug].astro` | 1 | Content Collection route |
| Legal | `/politica-*/`, `/aviso-legal/` | 3 | Base layout + text |
| Utility | `/gracias/`, `/404/` | 2 | Base layout |
| **Total** | | **~138** | |

---

## 2. Layout Patterns

### Pattern A: Base Layout (Most Pages)
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SomePage from '../../pages/SomePage';
import CookieBanner from '../../components/CookieBanner';
import { generateWebPageSchema } from '../../utils/schemaData';

const schemas = [generateWebPageSchema({ name: '...', description: '...', url: '...' })];
---
<BaseLayout title="..." description="..." canonical="/path/" schemas={schemas}>
  <SomePage client:idle />
  <CookieBanner client:idle />
</BaseLayout>
```

### Pattern B: Article Layout (Blog Posts)
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import PAAArticlePage from '../../../components/PAAArticlePage';
import { generateArticleSchema, generateFAQSchema } from '../../../utils/schemaData';
// ... schema injection with Article + FAQ schemas
---
<BaseLayout title={seoTitle} description={metaDescription} canonical={url}
  ogType="article" publishedTime={date} schemas={schemas}>
  <PAAArticlePage article={article} siblingArticles={siblings} client:idle />
  <CookieBanner client:idle />
</BaseLayout>
```

### Pattern C: Location Page
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import LocationPage from '../../pages/LocationPage';
import CookieBanner from '../../components/CookieBanner';
import { generateLocationPageSchema } from '../../utils/schemaData';

const schemas = [generateLocationPageSchema({
  locationName: 'Academia Ingles Barrio del Pilar',
  description: '...',
  url: '/academia-ingles-barrio-del-pilar/',
  nearbyAreas: ['La Vaguada', 'Penagrande', ...],
})];
---
<BaseLayout title="..." description="..." canonical="/academia-ingles-barrio-del-pilar/" schemas={schemas}>
  <LocationPage location="barrio-del-pilar" client:idle />
  <CookieBanner client:idle />
</BaseLayout>
```

---

## 3. Component Inventory

### Layout Components
| Component | File | Usage |
|---|---|---|
| Navbar | `components/Navbar.tsx` | Every page (client:idle) |
| Footer | `components/Footer.tsx` | Every page (simple or full variant) |
| CookieBanner | `components/CookieBanner.tsx` | Every page (client:idle, GDPR) |

### Content Components
| Component | File | Usage |
|---|---|---|
| Hero | `components/Hero.tsx` | Homepage, main pages |
| PAAArticlePage | `components/PAAArticlePage.tsx` | Blog articles |
| LeadForm | `components/LeadForm.tsx` | CTAs, contact sections |
| FAQSection | `components/FAQSection.tsx` | FAQ accordions on any page |
| ContactSection | `components/ContactSection.tsx` | Contact info blocks |
| CoursesSection | `components/CoursesSection.tsx` | Course listing grids |
| LocationsSection | `components/LocationsSection.tsx` | Location cards |
| TestimonialsSection | `components/TestimonialsSection.tsx` | Review cards |
| MetodoSection | `components/MetodoSection.tsx` | Methodology explanation |
| PartnersSection | `components/PartnersSection.tsx` | Partner logos |
| Newsletter | `components/Newsletter.tsx` | Email signup |
| InfoCards | `components/InfoCards.tsx` | Feature/benefit cards |
| TeamSection | `components/TeamSection.tsx` | Teacher profiles |

### Media Components
| Component | File | Usage |
|---|---|---|
| OptimizedImage | `components/OptimizedImage.tsx` | Lazy-loaded images |
| LazyVideo | `components/LazyVideo.tsx` | Vimeo/YouTube embeds |
| AcademyGallery | `components/AcademyGallery.tsx` | Photo gallery |
| FullPhotoGallery | `components/FullPhotoGallery.tsx` | Full-width gallery |
| NewsOverlay | `components/NewsOverlay.tsx` | News/announcement popup |

### Navigation
| Component | File | Usage |
|---|---|---|
| Breadcrumb | `components/Breadcrumb.tsx` | Article pages, deep pages |

---

## 4. LeadForm Integration

Every page with a CTA uses the LeadForm component:

```tsx
<LeadForm source="paa-cambridge-b2" compact={true} />
```

- `source` — tracking parameter for analytics (matches `leadFormSource` in category-config)
- `compact` — side-by-side layout for article pages
- Submits to GoHighLevel webhook
- Fields: name, email, phone, message (optional)

---

## 5. Static vs Dynamic Blog Pages

**Static blog pages** (74 `.astro` files in `src/pages/blog/`):
- Hand-written content with embedded React components
- Take priority over the dynamic `[slug].astro` route
- Used for older articles or articles needing custom layouts

**Dynamic blog articles** (Content Collection via `[slug].astro`):
- Generated from `.md` files in `src/content/articles/`
- Use the standardized PAAArticlePage component
- Created by the auto-publish pipeline
- All new articles should use this pattern

---

## 6. Creating a New Page

### Checklist
1. Create `.astro` file in correct `src/pages/` subdirectory
2. Import BaseLayout and required components
3. Select the correct schema function for the page type (see Section 7)
4. Pass `title`, `description`, `canonical`, and `schemas` to BaseLayout
5. Add `CookieBanner client:idle` as last child
6. Use `client:idle` for ALL React components (NEVER `client:load` — it blocks rendering)
7. Check if old URLs need redirects in `vercel.json` (see redirect-manager skill)
8. Verify canonical URL ends with trailing slash (e.g., `/academia-ingles-tetuan/`)
9. For location pages: include `nearbyAreas` array in schema props with surrounding neighborhoods

### Templates
The `templates/` directory contains starter files:
- `page-with-faq.astro.template` — Astro wrapper with FAQ schema
- `page-with-faq.tsx.template` — React page component with FAQ section

---

## 7. Page-Specific Schema Selection

| Page Type | Schema Function | Extra |
|---|---|---|
| Homepage | `generateWebPageSchema()` | + aggregateRating on Org |
| Course page | `generateCourseSchema()` | pricing, level, provider (Organization ref) |
| Location page | `generateLocationPageSchema()` | 6 services, area |
| Blog article | `generateArticleSchema()` | + FAQPage if FAQs |
| Exam page | `generateWebPageSchema()` | + Course schema |
| Generic page | `generateWebPageSchema()` | breadcrumbs |

---

## Related Skills

- **astro-site-builder** — project structure and BaseLayout that pages use
- **schema-markup-generator** — schema functions injected into pages
- **content-collection-designer** — article data contract for dynamic blog pages
- **redirect-manager** — add redirects when moving or renaming pages
