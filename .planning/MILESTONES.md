# Milestones

## v1.0 Website Template MVP (Shipped: 2026-04-09)

**Phases completed:** 8 phases, 22 plans, 29 tasks

**Key accomplishments:**

1. Lead form hardened with honeypot spam protection, webhook URL moved to env var, error feedback via sonner toasts
2. 73 S3 images consolidated to local assets with central registry at utils/images.ts — zero external image URLs remain in source
3. Astro native image pipeline (`<Picture>`/`<Image>` + `getImage()`) replaces hand-rolled optimization system
4. Interactive CLI onboarding (`scripts/onboard-client.js`) generates brand-config.ts, napData.ts, buildPageTitle.ts, .env.template from 9-category question flow
5. Full template debranding — BaseLayout, SEOHead, 7 React components, 16 .astro pages, article content, and webmanifest all read from napData/brand-config
6. Auto-publish pipeline decoupled from hardcoded BRAND block — imports brand-config.ts and blogImages registry

**Stats:**

- 200 commits, 907 files changed, +76,956 / -11,251 lines
- Timeline: 20 days (2026-03-20 → 2026-04-09)
- Requirements: 22/22 satisfied + 18/18 audit gaps closed

---
