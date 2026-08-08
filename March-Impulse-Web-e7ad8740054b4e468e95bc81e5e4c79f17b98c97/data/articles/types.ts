// Type definitions for PAA (People Also Ask) article pages

export interface ContentSection {
  heading: string;
  content: string;
}

export interface CtaLink {
  text: string;
  href: string;
}

export interface ImpulseSection {
  heading: string;
  content: string;
  ctaLinks: CtaLink[];
}

import type { FAQItem } from '../../utils/schemaData';
export type { FAQItem };

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export type ArticlePriority = 'High' | 'Medium';

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
  | 'Definitions'
  | 'Inglés en el extranjero'
  | 'Niveles de inglés'
  // The learn-English resource cluster under /aprende-ingles/. Registering it here is
  // only step one of four — categoryConfig, the blog index and blog-directory all need
  // it too, or PAAArticlePage falls back to Cambridge B2 First and the article ships
  // with the wrong badge, the wrong hub link and the wrong GHL lead source.
  | 'Aprender inglés'
  | 'Empresas';

export interface ArticleImage {
  url: string;
  alt: string;
  placement: 'hero' | 'inline';
}

/**
 * A YouTube clip from the academy's own channel. `vertical` and `placement` carry zod
 * defaults, so they are always present on data read through the content collection —
 * they stay optional here for objects built by hand.
 */
export interface ArticleVideo {
  youtubeId: string;
  title: string;
  description: string;
  uploadDate: string;
  /** ISO 8601, e.g. PT47S */
  duration: string;
  vertical?: boolean;
  placement?: 'hero' | 'inline';
}

export interface PAAArticle {
  slug: string;
  url: string;
  category: ArticleCategory;
  priority: ArticlePriority;
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
  // Ranked listicle entries ("mejores academias de inglés en X"). Rendered as ItemList
  // schema by blog/[slug].astro; the visible ranking lives in contextSections.
  listItems?: { position: number; name: string; description: string }[];
  // Verbatim Google reviews, rendered through <GoogleReviews>.
  googleReviews?: { name: string; text: string }[];
  // Channel clips. A `hero` video renders before the "Respuesta directa" card; the
  // route emits one VideoObject per entry.
  videos?: ArticleVideo[];
}

// Blog listing card for BlogPage
export interface ArticleCard {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  href: string;
  priority: ArticlePriority;
}
