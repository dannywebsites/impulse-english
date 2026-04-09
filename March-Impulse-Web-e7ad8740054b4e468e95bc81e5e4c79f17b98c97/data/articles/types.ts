// Type definitions for PAA (People Also Ask) article pages

export interface ContentSection {
  heading: string;
  content: string;
}

export interface CtaLink {
  text: string;
  href: string;
}

export interface BrandSection {
  heading: string;
  content: string;
  ctaLinks: CtaLink[];
}

export type { FAQItem } from '../../utils/schemaData';

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
  | 'Definitions';

export interface ArticleImage {
  url: string;
  alt: string;
  placement: 'hero' | 'inline';
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
  brandSection: BrandSection;
  faqItems: FAQItem[];
  internalLinkRefs: string[];
  breadcrumbs: BreadcrumbItem[];
  publishedDate: string;
  modifiedDate: string;
  readTime: string;
  imageKey?: string;
  articleImages?: ArticleImage[];
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
