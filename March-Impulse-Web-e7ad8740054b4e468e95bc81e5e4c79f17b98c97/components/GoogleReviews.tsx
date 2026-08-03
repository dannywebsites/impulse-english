import React from 'react';
import { Star } from 'lucide-react';
import { NAP } from '../utils/napData';

/**
 * Google review block.
 *
 * The reviews are real, verbatim and verified against the live Google Business
 * Profile by GEO-Content-Project/reviews/verify_quotes.py — so they should look
 * like what they are. The Google mark, the star row and the badge are lifted from
 * TestimonialsSection.tsx rather than redrawn, so every review surface on the site
 * reads the same.
 *
 * `reviews` is passed in from the page, not held here: verify_quotes.py and
 * geo-audit.py both read the page .tsx, and moving the quote strings into this
 * component would hide them from both gates.
 */

export interface GoogleReview {
  name: string;
  text: string;
}

interface Props {
  heading: string;
  intro?: string;
  reviews: GoogleReview[];
}

function GoogleMark({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function Stars({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 de 5 estrellas">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${className} fill-amber-400 text-amber-400`} />
      ))}
    </div>
  );
}

export default function GoogleReviews({ heading, intro, reviews }: Props) {
  return (
    <section className="section surface-alt px-6">
      <div className="container-narrow">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow mb-4">Opiniones reales de Google</span>
          <h2 className="t-h2 mb-5 text-zinc-900">{heading}</h2>
          <span className="rule"></span>
          {intro ? <p className="t-lede mt-6 text-zinc-600">{intro}</p> : null}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name} className="card flex flex-col p-6">
              <div className="mb-4 flex items-center justify-between">
                <Stars />
                <GoogleMark className="h-4 w-4 opacity-70" />
              </div>
              <blockquote className="t-body mb-5 flex-1 text-zinc-700">{r.text}</blockquote>
              <figcaption className="flex items-center gap-3 border-t border-zinc-200/70 pt-4">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-blue text-sm font-semibold text-white"
                >
                  {r.name.trim().charAt(0).toUpperCase()}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-zinc-900">{r.name}</span>
                  <span className="block text-xs text-zinc-500">Reseña verificada en Google</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={NAP.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-zinc-200/80 bg-white px-6 py-3 shadow-card transition-shadow hover:shadow-lift"
          >
            <GoogleMark />
            <Stars />
            <span className="text-sm font-medium text-zinc-600">
              {NAP.aggregateRating?.reviewCount ?? 180} reseñas reales
            </span>
          </a>
          <a href={NAP.gbpUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
