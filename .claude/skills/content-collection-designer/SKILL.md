---
name: Content Collection Designer
description: >
  Design and maintain Astro Content Collections with Zod schema validation for the Impulse English
  Academy blog system. Use this skill when creating new article schemas, modifying the article
  frontmatter structure, adding new article categories, building the PAAArticlePage component,
  configuring the dynamic blog route, or setting up the image selection system. This skill defines
  the exact data contract that the auto-publish pipeline must output. Always use when working with
  blog articles, content types, or the article rendering pipeline.
---

# Content Collection Designer

Defines the complete data architecture for blog articles on the Impulse English Academy website.
This includes the Zod validation schema, TypeScript types, article categories, image selection
system, internal link mapping, and the dynamic route that renders articles.

## When to Use

- Creating or modifying the article Zod schema (`src/content/config.ts`)
- Adding new article categories
- Modifying the PAAArticlePage component contract
- Setting up the `[slug].astro` dynamic route
- Configuring the image selection system (catalogs, categories, keywords)
- Working with the auto-publish pipeline output format

---

## 1. Zod Schema (Content Collection)

**File:** `src/content/config.ts`

```typescript
import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    url: z.string(),                          // e.g., "/blog/es-dificil-b2-first"
    category: z.string(),                     // e.g., "Cambridge B2 First"
    priority: z.enum(['High', 'Medium']),
    question: z.string(),                     // The PAA question (H1)
    seoTitle: z.string(),
    metaDescription: z.string(),
    paaAnswer: z.string(),                    // Direct answer paragraph
    contextSections: z.array(z.object({
      heading: z.string(),
      content: z.string(),                    // HTML content
    })),
    impulseSection: z.object({
      heading: z.string(),
      content: z.string(),
      ctaLinks: z.array(z.object({
        text: z.string(),
        href: z.string(),
      })),
    }),
    faqItems: z.array(z.object({       // FAQItem type — re-exported from utils/schemaData.ts, NEVER define locally
      question: z.string(),
      answer: z.string(),
    })),
    internalLinkRefs: z.array(z.string()),    // References to internal-links.ts
    breadcrumbs: z.array(z.object({
      label: z.string(),
      href: z.string().optional(),
    })),
    publishedDate: z.string(),                // ISO 8601 "2025-03-01"
    modifiedDate: z.string(),
    readTime: z.string(),                     // "6 min"
    imageKey: z.string().optional(),          // Legacy key for fallback images
    articleImages: z.array(z.object({
      url: z.string(),                        // S3 URL
      alt: z.string(),                        // Spanish alt text
      placement: z.enum(['hero', 'inline']),
    })).min(3).optional(),                    // 3+ images required (1 hero + 2 inline)
  }),
});

export const collections = { articles };
```

---

## 2. TypeScript Types

**File:** `data/articles/types.ts`

```typescript
export type ArticleCategory =
  | 'Cambridge B2 First'
  | 'Cambridge C1 Advanced'
  | 'Cambridge B1 Preliminary'
  | 'Cambridge A2 Key'
  | 'Linguaskill'
  | 'Comparison'
  | 'Learning Methods'
  | 'Skills'
  | 'Kids Early Childhood'
  | 'Kids Primary'
  | 'Kids Secondary'
  | 'Career'
  | 'Local Madrid'
  | 'Price'
  | 'Definitions';

export interface PAAArticle {
  slug: string;
  url: string;
  category: ArticleCategory;
  priority: 'High' | 'Medium';
  question: string;
  seoTitle: string;
  metaDescription: string;
  paaAnswer: string;
  contextSections: ContentSection[];
  impulseSection: ImpulseSection;
  faqItems: FAQItem[];
  internalLinkRefs: string[];
  breadcrumbs: BreadcrumbItem[];
  publishedDate: string;
  modifiedDate: string;
  readTime: string;
  imageKey?: string;
  articleImages?: ArticleImage[];
}
```

**Critical:** `FAQItem` is re-exported from `utils/schemaData.ts` — NEVER define locally:
```typescript
export type { FAQItem } from '../../utils/schemaData';
```

---

## 3. Category Configuration

**File:** `data/category-config.ts`

Each of the 15 categories maps to display metadata, hub pages, and tracking:

| Category | Hub Path | Image Key | Lead Form Source | Color |
|---|---|---|---|---|
| Cambridge B2 First | /examenes-cambridge/b2-first | cambridge | paa-cambridge-b2 | blue |
| Cambridge C1 Advanced | /examenes-cambridge/c1-advanced | cambridge | paa-cambridge-c1 | blue |
| Cambridge B1 Preliminary | /examenes-cambridge/b1-preliminary | cambridge | paa-cambridge-b1 | blue |
| Cambridge A2 Key | /examenes-cambridge | cambridge | paa-cambridge-a2 | blue |
| Linguaskill | /linguaskill | technology | paa-linguaskill | teal |
| Comparison | /blog | classroom | paa-comparison | purple |
| Learning Methods | /metodologia | classroom | paa-learning-methods | green |
| Skills | /metodologia | adults | paa-skills | orange |
| Kids Early Childhood | /cursos-ingles/infantil | infantil | paa-kids-infantil | pink |
| Kids Primary | /cursos-ingles/primaria | students | paa-kids-primaria | pink |
| Kids Secondary | /cursos-ingles/secundaria | teenagers | paa-kids-secundaria | indigo |
| Career | /cursos-ingles/adultos | adults | paa-career | slate |
| Local Madrid | /academias-ingles-madrid | reception | paa-local-madrid | red |
| Price | /contacto | reception | paa-price | emerald |
| Definitions | /blog | classroom | paa-definitions | amber |

---

## 4. Dynamic Route

**File:** `src/pages/blog/[slug].astro`

```typescript
export async function getStaticPaths() {
  const articles = await getCollection('articles');
  return articles.map((entry) => ({
    params: { slug: entry.id.replace(/\.md$/, '') },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const slug = entry.id.replace(/\.md$/, '');
const data = entry.data;
const article = { slug, ...data };
const siblings = getSiblingArticles(slug, 3);
const fullUrl = `${businessInfo.url}${data.url}`;

// Schema injection
const schemaImage = data.articleImages?.[0]?.url ?? FALLBACK_IMAGE;
const articleSchema = generateArticleSchema({
  headline: data.seoTitle,
  description: data.metaDescription,
  url: fullUrl,
  image: schemaImage,
  datePublished: data.publishedDate,
  dateModified: data.modifiedDate,
  wordCount: 1500,
});

const schemas = [articleSchema];
if (data.faqItems.length > 0) {
  schemas.push(generateFAQSchema(data.faqItems));
}
```

**Rendering:**
```html
<BaseLayout title={data.seoTitle} description={data.metaDescription}
  canonical={data.url} ogType="article"
  publishedTime={data.publishedDate} modifiedTime={data.modifiedDate}
  schemas={schemas}>
  <PAAArticlePage article={article} siblingArticles={siblings} client:idle />
  <CookieBanner client:idle />
</BaseLayout>
```

**Priority rule:** Static `.astro` files in `src/pages/blog/` take priority over this dynamic route. Articles with hand-written pages won't use this route.

---

## 5. PAAArticlePage Component

**File:** `components/PAAArticlePage.tsx`

**Props:** `{ article: PAAArticle; siblingArticles?: ArticleCard[] }`

**Sections rendered in order:**

1. **Navbar** (`client:idle`)
2. **Hero** — background image from `articleImages[hero]`, gradient overlay (accent-blue/95 → #0a3560/80), breadcrumb, category badge, read time, H1 question, red divider, date + byline
3. **Direct Answer** — blue-bordered box with `paaAnswer`
4. **Context Sections** — alternating white/zinc-50 backgrounds, H2 headings, HTML content via `dangerouslySetInnerHTML`
   - **Inline images** inserted after sections 1 and 3 (from `articleImages.filter(placement === 'inline')`)
5. **Internal Links** — grid with ArrowRight icons, resolved from `internalLinkRefs`
6. **Impulse CTA** — blue background, H2 + content + CTA buttons + LeadForm (compact)
7. **FAQ Accordion** — if `faqItems.length > 0`
8. **Related Articles** — up to 3 sibling articles from same category
9. **Back to Hub** — link to category hub page
10. **Footer**

**Image resolution priority:**
1. `articleImages.find(placement === 'hero')`
2. `articleImages[0]`
3. Legacy `imageKey` lookup map
4. Fallback: `classroom` image

---

## 6. Image Catalog System

8 categories of S3-hosted images, each with 3-5 photos and Spanish alt text:

| Category Key | # Images | Used For |
|---|---|---|
| `cambridge` | 5 | Cambridge exam articles, certificates |
| `classroom` | 4 | General articles, comparisons, definitions |
| `infantil` | 4 | Early childhood / kids articles |
| `students` | 4 | Primary school articles |
| `teenagers` | 4 | Secondary school articles |
| `adults` | 3 | Adult courses, career articles |
| `reception` | 3 | Location pages, price articles |
| `technology` | 3 | Linguaskill, online learning |

### Image Selection Logic (from auto-publish pipeline)
1. Match category to primary image key via `CATEGORY_IMAGE_MAP`
2. If no match, try keyword regex rules (`KEYWORD_IMAGE_RULES`)
3. Default to `classroom`
4. Select: 1 hero (primary category), 1 inline (primary), 1 inline (complementary category)
5. Complementary pairs: cambridge↔classroom, infantil↔reception, adults↔cambridge, etc.

---

## 7. Internal Links System

**File:** `data/internal-links.ts`

Maps string references to URL + anchor text. Used by `PAAArticlePage` to render the internal links section.

Key mappings:
| Reference | URL | Purpose |
|---|---|---|
| B2 page | /examenes-cambridge/b2-first/ | B2 First exam page |
| C1 Guide | /examenes-cambridge/c1-advanced/ | C1 Advanced page |
| B1 Guide | /examenes-cambridge/b1-preliminary/ | B1 Preliminary page |
| Cambridge Hub | /examenes-cambridge/ | All Cambridge exams |
| Linguaskill page | /linguaskill/ | Linguaskill hub |
| Metodologia | /metodologia/ | Teaching methodology |
| Cursos Adultos | /cursos-ingles/adultos/ | Adult courses |
| Infantil | /cursos-ingles/infantil/ | Kids courses |
| Primaria | /cursos-ingles/primaria/ | Primary courses |
| Secundaria | /cursos-ingles/secundaria/ | Secondary courses |
| Contacto | /contacto/ | Contact page |
| Precios Cambridge | /examenes-cambridge/fechas-precios/ | Cambridge pricing |
| Precios Linguaskill | /linguaskill/precios-fechas/ | Linguaskill pricing |
| Location pages | /academias-ingles-madrid/ | Madrid hub |
| Barrio del Pilar | /academia-ingles-barrio-del-pilar/ | Location page |
| La Vaguada page | /academia-ingles-la-vaguada/ | Location page |

### Category → Internal Links Mapping (from auto-publish pipeline)
Each category has a default set of internal links:
- **Cambridge B2 First:** B2 page, Metodologia, Cursos Adultos, Precios Cambridge
- **Linguaskill:** Linguaskill page, Precios Linguaskill, Cursos Adultos
- **Kids Early Childhood:** Infantil, Great Little People, Metodologia
- **Local Madrid:** Location pages, Barrio del Pilar, La Vaguada page, Contacto
- **Price:** Precios Cambridge, Precios Linguaskill, Contacto, Cursos Adultos

---

## 8. Data Functions

**File:** `data/articles/index.ts`

| Function | Returns | Purpose |
|---|---|---|
| `allPAAArticles` | PAAArticle[] | Master flat array of all articles |
| `articleMap` | Map<slug, PAAArticle> | Fast lookup by slug |
| `getArticleCards()` | ArticleCard[] | For blog listing page |
| `getArticlesByCategory(cat)` | PAAArticle[] | Filter by category |
| `getSiblingArticles(slug, limit)` | ArticleCard[] | Same-category articles excluding self |
| `getAllRoutes()` | string[] | For sitemap/prerendering |

---

## Adding a New Category Checklist

When adding a new article category, update ALL of these files in order:

1. `data/articles/types.ts` — add to `ArticleCategory` union type
2. `data/category-config.ts` — add display metadata (hub path, image key, lead form source, color)
3. `seo-writer/scripts/auto-publish.js` — add regex pattern to `CATEGORY_RULES`
4. `seo-writer/scripts/auto-publish.js` — add CTA links to `CTA_LINKS_BY_CATEGORY`
5. `seo-writer/scripts/auto-publish.js` — add internal links to `INTERNAL_LINKS_BY_CATEGORY`
6. `seo-writer/scripts/auto-publish.js` — add breadcrumb hub to `BREADCRUMB_HUBS`
7. `seo-writer/scripts/auto-publish.js` — add image mapping to `CATEGORY_IMAGE_MAP`

Missing any file will cause either build errors (types.ts) or silent data gaps (missing CTAs, wrong images).

---

## Related Skills

- **schema-markup-generator** — Article and FAQ schemas generated from this data
- **brand-voice-enforcer** — Content in articles must follow voice rules
- **auto-publish-pipeline** — Generates files conforming to this schema
- **astro-site-builder** — Content Collections configured in this project structure