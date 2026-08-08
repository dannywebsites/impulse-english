/**
 * Single source of truth for the learn-English resource cluster.
 *
 * Three routes depend on this agreeing exactly:
 *   src/pages/aprende-ingles/index.astro    — the Tier-1 pillar, lists the cluster
 *   src/pages/aprende-ingles/[slug].astro   — builds the cluster
 *   src/pages/blog/[slug].astro             — builds everything EXCEPT the cluster
 *
 * Same reasoning as utils/extranjeroCluster.ts: if the last one's idea of the
 * category drifts from the middle one's, the articles are built at both URLs or at
 * neither, and both failures are quiet — a mistyped string just filters to an empty
 * list and the build still goes green. Hence one constant, imported everywhere.
 *
 * The pillar at /aprende-ingles/ predates this cluster: it shipped in the WordPress
 * migration as a standalone guide. It is reused rather than replaced because a new
 * /aprender-ingles/ beside it would cannibalise the same head term.
 */
export const APRENDE_INGLES_CATEGORY = 'Aprender inglés';

/** Canonical path for a cluster article. Trailing slash — the site is `trailingSlash: 'always'`. */
export function aprendeInglesHref(slug: string): string {
  return `/aprende-ingles/${slug}/`;
}

/** The pillar itself. Every cluster article links up to this in its intro. */
export const APRENDE_INGLES_PILLAR = '/aprende-ingles/';
