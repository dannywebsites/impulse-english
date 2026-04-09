# Requirements: Impulse English Academy — Website Template

**Defined:** 2026-04-09
**Core Value:** The template must be portable — changing brand-config.ts, napData.ts, and config files should produce a fully functional website for a new client.

## v1 Requirements

### Lead Form

- [x] **FORM-01**: LeadForm webhook URL is read from environment variable via astro:env, not hardcoded in component
- [x] **FORM-02**: LeadForm checks response.ok after fetch and throws on HTTP 4xx/5xx errors (fixes silent lead loss)
- [x] **FORM-03**: User sees a visible error message with retry option when form submission fails
- [x] **FORM-04**: LeadForm includes a honeypot field using off-screen CSS positioning (not display:none) with tabIndex={-1} and autoComplete="one-time-code"
- [x] **FORM-05**: Bot submissions (honeypot filled) return fake success without hitting webhook
- [x] **FORM-06**: Sonner toast library added for error/success notifications in LeadForm

### Image Consolidation

- [ ] **IMG-01**: All S3-hosted images used by production components are downloaded to src/assets/images/
- [ ] **IMG-02**: Central image registry file (utils/images.ts) exports all image imports from one location
- [ ] **IMG-03**: All component files reference images through the central registry, not direct S3 URLs
- [ ] **IMG-04**: seo-system mirrored components updated to use local image paths in the same changeset

### Image Optimization

- [ ] **OPT-01**: Astro image pipeline configured with <Image> and <Picture> components from astro:assets
- [ ] **OPT-02**: Hero images use <Picture> with avif and webp formats and loading="eager"
- [ ] **OPT-03**: Non-hero images use lazy loading via loading="lazy"
- [ ] **OPT-04**: Hand-rolled image optimization system (optimize-images.mjs, manual srcset) replaced by Astro native pipeline

### Client Onboarding

- [ ] **ONBD-01**: CLI script at scripts/onboard-client.js walks user through structured question flow using @inquirer/prompts
- [ ] **ONBD-02**: Question flow covers: business identity, contact info, geo coordinates, opening hours, social profiles, brand voice, credentials
- [ ] **ONBD-03**: Script generates populated brand-config.ts and napData.ts from answers
- [ ] **ONBD-04**: Script generates buildPageTitle.ts with new brand constants
- [ ] **ONBD-05**: Script creates .env.template with required environment variables documented
- [ ] **ONBD-06**: Script runs npm run build after generation to verify the template compiles
- [ ] **ONBD-07**: TEMPLATE_MODE guard prevents running onboarding on production repo (checks git remote or env var)
- [ ] **ONBD-08**: Generated config files are written as drafts first, requiring human confirmation before promotion to final files

## v2 Requirements

### Form Enhancement

- **FORM-07**: Backend serverless proxy for form submissions (rate limiting, validation)
- **FORM-08**: Duplicate lead detection by email address
- **FORM-09**: CAPTCHA fallback for persistent bot traffic

### Content Pipeline

- **PIPE-01**: Approval workflow for auto-published articles (draft → review → publish)
- **PIPE-02**: Article preview before publishing

### Security

- **SEC-01**: Content Security Policy headers in vercel.json
- **SEC-02**: Google Search Console verification code (replace PLACEHOLDER)

### Testing

- **TEST-01**: Unit tests for LeadForm component
- **TEST-02**: Integration tests for auto-publish pipeline
- **TEST-03**: Schema.org markup validation tests

### Onboarding Enhancement

- **ONBD-09**: Research agent that scrapes client website via Firecrawl to auto-populate answers
- **ONBD-10**: Web UI alternative to CLI for non-technical users

## Out of Scope

| Feature | Reason |
|---------|--------|
| Visual theme picker / admin dashboard | Over-engineering — template is developer-operated |
| SSR / server-side rendering | Static site architecture is a feature, not a limitation |
| Multi-tenancy | One repo per client is the correct model |
| CAPTCHA on lead form | Honeypot chosen for zero UX friction |
| Rate limiting on form | Requires serverless function — deferred to v2 |
| Image CDN / CloudFront | Local images with Astro optimization is sufficient |
| Auto-generated alt text | Adds AI dependency to build — manual alt text preferred |
| Approval workflow for articles | User explicitly deferred — auto-post for now |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FORM-01 | Phase 1 | Complete |
| FORM-02 | Phase 1 | Complete |
| FORM-03 | Phase 1 | Complete |
| FORM-04 | Phase 1 | Complete |
| FORM-05 | Phase 1 | Complete |
| FORM-06 | Phase 1 | Complete |
| IMG-01 | Phase 2 | Pending |
| IMG-02 | Phase 2 | Pending |
| IMG-03 | Phase 2 | Pending |
| IMG-04 | Phase 2 | Pending |
| OPT-01 | Phase 3 | Pending |
| OPT-02 | Phase 3 | Pending |
| OPT-03 | Phase 3 | Pending |
| OPT-04 | Phase 3 | Pending |
| ONBD-01 | Phase 4 | Pending |
| ONBD-02 | Phase 4 | Pending |
| ONBD-03 | Phase 4 | Pending |
| ONBD-04 | Phase 4 | Pending |
| ONBD-05 | Phase 4 | Pending |
| ONBD-06 | Phase 4 | Pending |
| ONBD-07 | Phase 4 | Pending |
| ONBD-08 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 22 total
- Mapped to phases: 22
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-09*
*Last updated: 2026-04-09 after roadmap creation*
