import React from 'react';
import { useParams } from 'react-router-dom';
import PAAArticlePage from '../../components/PAAArticlePage';
import { articleMap, getSiblingArticles } from '../../data/articles';

/**
 * Wrapper component for PAA article routes.
 * Looks up article by slug from URL and renders PAAArticlePage.
 */
export default function PAAArticleRoute() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <div>Article not found</div>;

  const article = articleMap.get(slug);
  if (!article) {
    return <div>Article not found: {slug}</div>;
  }

  const siblings = getSiblingArticles(slug, 3);

  return <PAAArticlePage article={article} siblingArticles={siblings} />;
}
