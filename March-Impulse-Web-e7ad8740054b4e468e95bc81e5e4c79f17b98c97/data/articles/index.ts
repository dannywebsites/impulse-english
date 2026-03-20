// Master registry of all PAA articles
import { cambridgeB2FirstArticles } from './cambridge-b2-first';
import { cambridgeC1AdvancedArticles } from './cambridge-c1-advanced';
// Import remaining categories as they're created:
// import { cambridgeB1Articles, cambridgeA2Articles, definitionsArticles } from './cambridge-b1-a2-definitions';
// import { linguaskillArticles } from './linguaskill';
// import { comparisonArticles } from './comparison';
// import { learningMethodsArticles } from './learning-methods';
// import { skillsArticles } from './skills';
// import { kidsEarlyChildhoodArticles } from './kids-early-childhood';
// import { kidsPrimaryArticles } from './kids-primary';
// import { kidsSecondaryArticles } from './kids-secondary';
// import { careerArticles } from './career';
// import { localMadridArticles } from './local-madrid';
// import { priceArticles } from './price';

import type { PAAArticle, ArticleCard } from './types';

// Flatten all articles into a master array
export const allPAAArticles: PAAArticle[] = [
  ...cambridgeB2FirstArticles,
  ...cambridgeC1AdvancedArticles,
  // Add remaining arrays as they're created
  // ...cambridgeB1Articles,
  // ...cambridgeA2Articles,
  // ...definitionsArticles,
  // ...linguaskillArticles,
  // ...comparisonArticles,
  // ...learningMethodsArticles,
  // ...skillsArticles,
  // ...kidsEarlyChildhoodArticles,
  // ...kidsPrimaryArticles,
  // ...kidsSecondaryArticles,
  // ...careerArticles,
  // ...localMadridArticles,
  // ...priceArticles,
];

// Create a map for fast lookup by slug
export const articleMap = new Map<string, PAAArticle>(
  allPAAArticles.map(article => [article.slug, article])
);

// Generate article cards for BlogPage listing
export function getArticleCards(): ArticleCard[] {
  return allPAAArticles.map(article => ({
    id: article.slug,
    title: article.question,
    excerpt: article.metaDescription,
    category: article.category,
    readTime: article.readTime,
    href: article.url,
    priority: article.priority,
  }));
}

// Get articles by category
export function getArticlesByCategory(category: string): PAAArticle[] {
  return allPAAArticles.filter(a => a.category === category);
}

// Get sibling articles from same category
export function getSiblingArticles(slug: string, limit: number = 3): ArticleCard[] {
  const article = articleMap.get(slug);
  if (!article) return [];

  return getArticlesByCategory(article.category)
    .filter(a => a.slug !== slug)
    .slice(0, limit)
    .map(a => ({
      id: a.slug,
      title: a.question,
      excerpt: a.metaDescription,
      category: a.category,
      readTime: a.readTime,
      href: a.url,
      priority: a.priority,
    }));
}

// Get all routes for prerendering
export function getAllRoutes(): string[] {
  return allPAAArticles.map(article => article.url);
}
