/**
 * Single source of truth for the study-abroad article cluster.
 *
 * Three routes depend on this agreeing exactly:
 *   src/pages/blog/extranjero/index.astro    — lists the cluster
 *   src/pages/blog/extranjero/[slug].astro   — builds the cluster
 *   src/pages/blog/[slug].astro              — builds everything EXCEPT the cluster
 *
 * If the last one's idea of the category ever drifts from the middle one's, the
 * articles are either built at both URLs or at neither, and both failures are
 * quiet: a mistyped string just filters to an empty list and the build still goes
 * green. Hence one constant, imported everywhere, rather than three literals.
 */
export const EXTRANJERO_CATEGORY = 'Inglés en el extranjero';

/** Canonical path for a cluster article. Trailing slash — the site is `trailingSlash: 'always'`. */
export function extranjeroHref(slug: string): string {
  return `/blog/extranjero/${slug}/`;
}
