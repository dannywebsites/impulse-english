---
name: Schema Markup Generator
description: >
  Generate Schema.org JSON-LD structured data for every page type on the Impulse English Academy
  website. Use this skill when adding schema markup to any page, creating new schema types, debugging
  Google Search Console structured data errors, or validating existing markup. Covers LocalBusiness,
  EducationalOrganization, Course, Article, FAQPage, BreadcrumbList, Service, LocationPage, WebSite,
  WebPage, and DefinedTerm schemas. Always use this skill when building or modifying any page's
  structured data.
---

# Schema Markup Generator

Generates all Schema.org JSON-LD structured data for the Impulse English Academy website. Every page
gets global schemas (Organization + WebSite) plus page-specific schemas injected via the BaseLayout
`@graph` pattern. All business data comes from a single source of truth: `napData.ts`.

## When to Use

- Adding Schema.org markup to any page
- Creating new schema types (Course, Service, etc.)
- Debugging Google Search Console structured data errors
- Validating existing markup
- Building location pages with multi-entity schemas
- Working with FAQ markup (must use FAQItem from schemaData.ts)

---

## 1. NAP Data (Single Source of Truth)

**File:** `utils/napData.ts` — business identity (address, phone, geo, hours, credentials)
**File:** `brand-config.ts` — brand voice layer (company name, tagline, audience, CTAs)

All business information is centralized in `napData.ts`. Brand voice and marketing values are in `brand-config.ts`. NEVER hardcode NAP or brand values anywhere else. When templating for a new client, update both files.

```typescript
export const NAP = {
  name: "Impulse English Academy La Vaguada",
  shortName: "Impulse English",
  streetAddress: "Av. de El Ferrol, 22",
  neighborhood: "La Vaguada, Barrio del Pilar",
  district: "Fuencarral-El Pardo",
  postalCode: "28029",
  city: "Madrid",
  addressRegion: "Community of Madrid",
  country: "ES",
  phone: "+34 604 910 611",
  phoneRaw: "+34604910611",
  email: "info@impulse-english.es",
  website: "https://impulse-english.es",
  logo: "https://impulse-english.es/images/optimized/impulse-logo-400.webp",
  geo: { latitude: 40.4789, longitude: -3.7114 },

  openingHours: [
    { dayOfWeek: "Monday", opens: "10:00", closes: "21:30" },
    { dayOfWeek: "Tuesday", opens: "15:30", closes: "21:30" },
    { dayOfWeek: "Wednesday", opens: "10:00", closes: "21:30" },
    { dayOfWeek: "Thursday", opens: "15:30", closes: "21:30" },
    { dayOfWeek: "Friday", opens: "13:30", closes: "19:30" },
  ],

  priceRange: "€64 - €79/mes",

  social: {
    instagram: "https://www.instagram.com/impulse_english_lavaguada/",
    facebook: "https://www.facebook.com/impulseenglishlavaguada/",
    tiktok: "https://www.tiktok.com/@impulse_english_lavaguada",
    x: "https://x.com/impulse_vaguada",
    linkedin: "https://www.linkedin.com/company/101859096/",
    youtube: "https://www.youtube.com/@Impulse-English",
  },

  sameAs: [/* all social + GBP URLs */],

  areaServed: [
    "Barrio del Pilar", "La Vaguada", "Penagrande", "La Ventilla",
    "La Paz", "Plaza Castilla", "Tetuan", "Cuatro Torres",
    "Mirasierra", "Montecarmelo", "Las Tablas", "Fuencarral-El Pardo", "Madrid",
  ],

  metro: ["Herrera Oria (Linea 9)", "Barrio del Pilar (Linea 9)", "Penagrande (Linea 7)"],
  busLines: ["42", "49", "67", "83", "126", "128", "132", "133", "134", "137", "147"],

  credentials: [
    "Official Cambridge Preparation Centre",
    "Official Linguaskill Centre",
    "Official Great Little People Centre",
    "Official Partner of ESIC Idiomas",
  ],

  aggregateRating: { ratingValue: 5, reviewCount: 150, bestRating: 5, worstRating: 1 },
  foundingDate: "2022",
};
```

---

## 2. Schema Generator Functions

**File:** `utils/schemaData.ts`

### generateOrganizationSchema()
Returns dual-type `["LocalBusiness", "EducationalOrganization"]` with:
- PostalAddress, GeoCoordinates
- OpeningHoursSpecification (5 days)
- aggregateRating from Google Reviews
- sameAs array (all social profiles)
- areaServed, hasCredential, priceRange
- foundingDate, numberOfEmployees

### generateWebSiteSchema()
Returns `WebSite` with name, URL, and potentialAction SearchAction.

### generateArticleSchema(props)
```typescript
props: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  wordCount: number;
}
```
Returns `Article` with:
- `author`: Organization (NOT Person) — links to the Organization schema
- `publisher`: Organization
- `mainEntityOfPage`: WebPage
- `inLanguage`: "es"

### generateFAQSchema(faqs)
```typescript
faqs: FAQItem[]  // { question: string; answer: string }
```
Returns `FAQPage` with `mainEntity` array of `Question` → `acceptedAnswer`.

**Runtime validation:** Throws if any FAQ item is missing `question` or `answer` keys. Build will fail on malformed data.

**CRITICAL RULE:** Always import `FAQItem` from `utils/schemaData.ts`. Never define the interface locally. The `data/articles/types.ts` re-exports it:
```typescript
export type { FAQItem } from '../../utils/schemaData';
```

### generateCourseSchema(props)
```typescript
props: {
  name: string;
  description: string;
  url: string;
  courseCode?: string;
  educationalLevel?: string;
}
```
Returns `Course` with:
- `provider`: Organization reference
- `offers`: Offer with `price: "64"`, `priceCurrency: "EUR"`, `priceSpecification` for range (64-79)

### generateServiceSchema(props)
```typescript
props: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string;
}
```
Returns `Service` with provider link.

### generateLocationPageSchema(props)
```typescript
props: {
  locationName: string;
  description: string;
  url: string;
  nearbyAreas: string[];
}
```
Returns a full `@graph` with:
- LocalBusiness (location-specific)
- 6 Service schemas (Infantil, Primaria, Secundaria, Adultos, Cambridge Prep, Linguaskill)
- Each Service has PriceSpecification (minPrice: 64, maxPrice: 79, unitText: "/mes")

### generateBreadcrumbSchema(items)
```typescript
items: { name: string; url?: string }[]
```
Returns `BreadcrumbList` with position-indexed `ListItem` entries.

### generateWebPageSchema(props)
Returns `WebPage` with name, description, URL, breadcrumb.

### generateDefinedTermSchema(name, description)
Returns `DefinedTerm` with `inDefinedTermSet` for glossary/definition pages.

---

## 3. @graph Injection Pattern

**File:** `src/layouts/BaseLayout.astro`

Every page gets schemas combined into a single `@graph`:

```typescript
// Global schemas (on every page)
const globalSchemas = [generateOrganizationSchema(), generateWebSiteSchema()];

// Page passes its own schemas via props
const allSchemas = [...globalSchemas, ...pageSchemas];

// Remove @context from individual items, wrap in @graph
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": allSchemas.map(s => {
    const { "@context": _, ...rest } = s;
    return rest;
  })
};
```

Rendered as: `<script type="application/ld+json" set:html={JSON.stringify(schemaGraph)} />`

### AggregateRating Dedup (MANDATORY)
When generating schemas for any page, always mention the aggregateRating dedup logic. If any page-specific schema has `aggregateRating`, it MUST be stripped from the global Organization schema to prevent Google's "Review has multiple aggregate ratings" error:

```typescript
const pageHasAggregateRating = schemas.some(s => s.aggregateRating != null);
if (pageHasAggregateRating) {
  const { aggregateRating: _, ...rest } = orgSchema;
  orgSchema = rest;
}
```

---

## 4. Schema by Page Type

| Page Type | Schemas |
|---|---|
| Homepage | Organization + WebSite + WebPage |
| Blog article | Organization + WebSite + Article + FAQPage (if FAQs) |
| Course page | Organization + WebSite + Course |
| Location page | Organization + WebSite + LocationPage @graph (6 services) |
| Exam page | Organization + WebSite + WebPage + Course |
| Blog listing | Organization + WebSite + WebPage |
| Contact | Organization + WebSite + WebPage |

---

## 5. Exported Utilities

| Export | Type | Purpose |
|---|---|---|
| `businessInfo` | object | Shortcut: `{ name, url, phone, email }` |
| `FAQItem` | interface | `{ question: string; answer: string }` |
| `getSchemaAddress()` | function | Returns PostalAddress object |
| `getAddressLines()` | function | Returns display address array |

---

## Related Skills

- **content-collection-designer** — Article data feeds into Article + FAQ schemas
- **page-builder** — Pages must inject correct schemas via BaseLayout props
- **astro-site-builder** — BaseLayout template handles schema injection
- **seo-optimizer** — Schema markup is a key SEO signal