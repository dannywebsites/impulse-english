import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import type { ArticleCard } from '../data/articles/types';

interface RelatedArticlesProps {
  articles: ArticleCard[];
  title?: string;
}

export default function RelatedArticles({ articles, title = "Artículos relacionados" }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <aside className="py-12 px-6 bg-zinc-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.href}
              className="bg-white rounded-lg p-5 hover:shadow-md transition-shadow group border border-zinc-100"
            >
              <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">
                {article.category}
              </span>
              <h3 className="text-base font-bold text-zinc-900 mt-2 mb-2 group-hover:text-accent-blue transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-zinc-500 text-sm mb-3 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
                <ArrowRight className="w-4 h-4 text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
