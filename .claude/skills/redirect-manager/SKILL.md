---
name: Redirect Manager
description: >
  Manage URL redirects, security headers, and deployment config in vercel.json for the Impulse
  English Academy website. Use this skill when adding new redirects, fixing 404 errors from old URLs,
  migrating WordPress paths, configuring security headers, or modifying the Vercel deployment settings.
  This is the single source of truth for all redirects — never put redirects in astro.config.mjs.
  Also use when auditing Google Search Console for crawl errors or broken incoming links.
---

# Redirect Manager

Manages the `vercel.json` configuration that handles all URL redirects, security headers, and
deployment settings. This file is the SINGLE SOURCE OF TRUTH for redirects — Astro config never
handles routing. Contains 80+ permanent 301 redirects from the WordPress-to-Astro migration.

## When to Use

- Adding new redirects for old/broken URLs
- Fixing 404s reported in Google Search Console
- Migrating content from old URL patterns
- Configuring security headers (HSTS, X-Robots-Tag)
- Modifying Vercel deployment settings
- Auditing redirect chains or loops

---

## 1. Vercel Deployment Settings

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true,
  "trailingSlash": true
}
```

**Critical:** `trailingSlash: true` must match `astro.config.mjs: trailingSlash: 'always'`. Mismatch causes redirect loops.

---

## 2. Security Headers

### HSTS (All Pages)
```json
{
  "source": "/(.*)",
  "headers": [
    { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
  ]
}
```

### Noindex Pages
```json
{ "source": "/gracias", "headers": [{ "key": "X-Robots-Tag", "value": "noindex, nofollow" }] }
{ "source": "/blog", "has": [{ "type": "query", "key": "q" }], "headers": [{ "key": "X-Robots-Tag", "value": "noindex, nofollow" }] }
```

Pages marked noindex:
- `/gracias` — thank-you page (no SEO value)
- `/blog?q=*` — search results pages (duplicate content risk)

---

## 3. Complete Redirect Map

All redirects are `"permanent": true` (301 status). Organized by category:

### WWW Canonical (1 rule)
```json
{ "source": "/:path*", "has": [{ "type": "host", "value": "www.impulse-english.es" }], "destination": "https://impulse-english.es/:path*" }
```

### WordPress Assets (4 rules)
```json
{ "source": "/wp-content/themes/impulse-english/assets/images/optimized/:path*", "destination": "/images/optimized/:path*" }
{ "source": "/wp-content/:path*", "destination": "/" }
{ "source": "/wp-includes/:path*", "destination": "/" }
{ "source": "/wp-admin/:path*", "destination": "/" }
```

### WordPress Route Migration (4 rules)
```json
{ "source": "/exam-impulse", "destination": "/reservar-clase/" }
{ "source": "/exam-impulse/", "destination": "/reservar-clase/" }
{ "source": "/blogs-impulse", "destination": "/blog/" }
{ "source": "/blogs-impulse/", "destination": "/blog/" }
```

### Course Path Migration (6 rules)
```json
/ingles-la-vaguada/infantil     → /cursos-ingles/infantil/
/ingles-la-vaguada/primaria     → /cursos-ingles/primaria/
/ingles-la-vaguada/secundaria   → /cursos-ingles/secundaria/
/ingles-la-vaguada/adultos      → /cursos-ingles/adultos/
/ingles-la-vaguada/particulares → /cursos-ingles/particulares/
/ingles-la-vaguada/online       → /cursos-ingles/online/
```

### Cambridge Exam Paths (13 rules)
```json
/examenes-cambridge/linguaskill     → /linguaskill/
/examenes-cambridge/guia-completa   → /examenes-cambridge/
/examenes-cambridge/fechas          → /examenes-cambridge/fechas-precios/
/examenes-cambridge/c1-advanced-guia → /examenes-cambridge/c1-advanced/
/examenes-cambridge/libros-recursos → /blog/libros-cambridge-recursos/
/examenes-cambridge/b2-beneficios   → /blog/cambridge-b2-beneficios/
/examenes-cambridge/b1-guia         → /blog/cambridge-b1-guia/
/examenes-cambridge/precio-c1       → /blog/precio-cambridge-c1-madrid/
/examenes-cambridge/registro        → /blog/registro-cambridge/
/examenes-cambridge/escala          → /blog/escala-cambridge/
/examenes-cambridge/ejercicios-b2   → /blog/ejercicios-b2-cambridge/
/examenes-cambridge/pdfs-advanced   → /blog/pdfs-cambridge-advanced/
/examenes-cambridge/cae             → /blog/examen-cae-cambridge/
```

### Linguaskill Paths (11 rules)
```json
/linguaskill/precios-sedes       → /linguaskill/precios-fechas/
/linguaskill/precio-reservar     → /blog/precio-linguaskill-reservar/
/linguaskill/online-desde-casa   → /blog/linguaskill-online-casa/
/linguaskill/centros             → /blog/centros-linguaskill/
/linguaskill/opiniones           → /blog/opiniones-linguaskill/
/linguaskill/vs-aptis            → /blog/linguaskill-vs-aptis/
/linguaskill/registro            → /blog/registro-linguaskill/
/linguaskill/certificado-validez → /blog/certificado-linguaskill/
/linguaskill/recursos-pdf        → /blog/recursos-pdf-linguaskill/
/linguaskill/precio-online       → /blog/precio-linguaskill-online/
/linguaskill/guia-completa       → /linguaskill/
```

### Location Migration (10 rules)
```json
/ubicaciones/barrio-del-pilar        → /academia-ingles-barrio-del-pilar/
/ubicaciones/la-vaguada              → /academia-ingles-la-vaguada/
/ubicaciones/penagrande              → /academia-ingles-penagrande/
/ubicaciones/la-ventilla             → /academia-ingles-la-ventilla/
/ubicaciones/la-paz                  → /academia-ingles-la-paz/
/ubicaciones/plaza-castilla          → /academia-ingles-plaza-castilla/
/ubicaciones/tetuan                  → /academia-ingles-tetuan/
/ubicaciones/cuatro-torres           → /academia-ingles-cuatro-torres/
/ubicaciones/mirasierra              → /academia-ingles-mirasierra/
/ubicaciones/montecarmelo-las-tablas → /academia-ingles-montecarmelo-las-tablas/
```

### WordPress System Routes (12 rules)
```json
/hello-world[/]      → /
/hello-world/feed[/] → /
/hola-mundo[/]       → /
/author/:path*       → /blog/
/category/:path*     → /blog/
/comments/feed[/]    → /blog/
/dipl-testimonial/:path* → /testimonios/
/qsm_quiz/:path*    → /reservar-clase/
/search/:path*       → /
```

### Blog Pagination (14 rules)
```json
/blog-1[/] → /blog/
/blog-2[/] → /blog/
/blog-3[/] → /blog/
/blog-4[/] → /blog/
/blog-5[/] → /blog/aprender-ingles-podcasts/   (specific article)
/blog-6[/] → /blog/
/blog-7[/] → /blog/
```
Each path has both with and without trailing slash variants.

### Legacy Pages (12 rules)
```json
/muchas-gracias[/]         → /gracias/
/politica-de-cookies[/]    → /politica-cookies/
/politica-de-privacidad[/] → /politica-privacidad/
/testimonials[/]           → /testimonios/
/impulse-blog[/]           → /blog/
/clase-gratis-impulse[/]   → /reservar-clase/
/landing-page[/]           → /
```

### Blog-Specific Redirects (4 rules)
```json
/blog/author/:path*            → /sobre-nosotros/
/blog/dipl-testimonial/:path*  → /testimonios/
/blog/centros-cambridge-madrid → /examenes-cambridge/centros-madrid/
/blog/academias-ingles-madrid  → /academias-ingles-madrid/
```

### Feed Catchall (2 rules)
```json
/:path*/feed[/] → /blog/
```

---

## 4. Rewrite Fallback

```json
{ "source": "/(.*)", "destination": "/404.html" }
```

This catches all unmatched routes and serves the custom 404 page.

---

## 5. How to Add New Redirects

1. Open `vercel.json` in the website root
2. Add the redirect in the appropriate category section
3. Always use `"permanent": true` for SEO (301 status)
4. Always include both with and without trailing slash if the source doesn't use `:path*`
5. Destination should always end with `/` (trailing slash enforcement)
6. Test locally with `vercel dev` or deploy to preview
7. Check Google Search Console after deploy to verify crawl errors clear

### Rules:
- NEVER add redirects to `astro.config.mjs` — vercel.json is the single source of truth
- Wildcard patterns (`:path*`) handle trailing slashes automatically
- For non-wildcard sources, always include BOTH with and without trailing slash variants
- Keep redirects organized by category with comments
- New WordPress migration redirects go in the "WordPress" section
- After deploying new redirects, check Google Search Console to verify crawl errors clear

### Redirect Chain Prevention
Before adding any redirect, check if the destination URL is itself a redirect source elsewhere in vercel.json. Redirect chains (A→B→C) harm SEO through PageRank dilution and crawl budget waste. If a chain would be created, update the original redirect's destination to point directly to the final URL instead.

---

## Related Skills

- **astro-site-builder** — references this file for deployment config
- **vercel-deployer** — handles the broader Vercel deployment that uses this config
- **page-builder** — when creating new pages, check if old URLs need redirects
