# SITE DOCUMENTATION
## impulse-english.es — Master Reference Document
**Generated:** 2026-03-21
**Project:** Impulse English Academy / English Language Education / Madrid, Spain
**Purpose:** Replication reference for future EMD micro-site builds

---

## 1. PROJECT OVERVIEW

### 1.1 Site Summary
- **Domain:** impulse-english.es
- **Niche:** English language education (academy)
- **Target Location:** Madrid, Spain — specifically Barrio del Pilar / La Vaguada (North Madrid)
- **Monetisation Model:** Lead generation (trial class bookings, course enrolments)
- **Primary CTA:** Free level test booking form → LeadConnectorHQ (GoHighLevel) webhook
- **Secondary CTAs:** Phone call (+34 604 910 611), WhatsApp, Google Maps
- **Total Pages Built:** 112+ (12 root pages + 6 courses + 4 exams + 8 locations + 75+ blog articles + 3 legal + 4 info hub pages)
- **Total Source Files:** ~19,934 (including node_modules); ~300 hand-written source files
- **Framework:** Astro 5.7.10 + React 19 + Tailwind CSS 3.4.17
- **Deployment:** Vercel (static output)
- **Language:** Peninsular Spanish (Spain) — vosotros forms, Spain-specific vocabulary

### 1.2 Business Objectives This Site Was Built To Achieve
1. **Lead Generation:** Capture trial class bookings via LeadForm → GoHighLevel webhook → 24-hour callback
2. **Local SEO Dominance:** Rank for "academia inglés barrio del pilar", "academia inglés la vaguada", and 8 Madrid neighborhood variants
3. **Authority Building:** 75+ blog articles targeting Cambridge/Linguaskill exam queries (People Also Ask targeting)
4. **Trust & Social Proof:** 150+ Google reviews (5-star), 100% Cambridge pass rate messaging, official credentials
5. **LLM/GEO Visibility:** llms.txt, AI crawler permissions, structured data, direct-answer content for AI search

---

## 2. FILE STRUCTURE & ARCHITECTURE

### 2.1 Complete File Tree (Source Files Only)

```
/
├── README.md
├── package.json                    # Astro 5.7.10, React 19, Tailwind 3.4.17
├── package-lock.json
├── astro.config.mjs                # Site: impulse-english.es, static output, trailing slash
├── tailwind.config.ts              # Brand colors, custom fonts
├── tsconfig.json                   # Strict mode, bundler resolution
├── vite.config.ts                  # Alias @/ → root
├── postcss.config.js               # Tailwind + autoprefixer
├── vercel.json                     # Build config, headers, 100+ redirects, rewrites
├── prerender.mjs                   # Pre-rendering script
│
├── public/
│   ├── robots.txt                  # AI crawlers allowed, sitemap refs, llms.txt ref
│   ├── llms.txt                    # AI reference file (4,650 bytes)
│   ├── sitemap.xml                 # Auto-generated URL sitemap
│   ├── sitemap-images.xml          # Image sitemap for Google Image Search
│   └── images/                     # Public image copies
│       ├── optimized/              # Responsive breakpoints (sm/md/lg/xl, webp+jpg)
│       └── original/               # Source images
│
├── src/
│   ├── index.css                   # Global styles (Tailwind base + custom)
│   ├── gtm.d.ts                    # GTM TypeScript declarations
│   ├── layouts/
│   │   ├── BaseLayout.astro        # Master layout: head, GTM, GA4, consent, schema, analytics
│   │   ├── ArticleLayout.astro     # Blog article wrapper
│   │   ├── CourseLayout.astro      # Course page wrapper
│   │   └── ExamLayout.astro        # Exam page wrapper
│   ├── pages/                      # Astro routes (118 .astro files)
│   │   ├── index.astro             # Homepage
│   │   ├── 404.astro               # Not found
│   │   ├── contacto.astro
│   │   ├── sobre-nosotros.astro
│   │   ├── metodologia.astro
│   │   ├── testimonios.astro
│   │   ├── preguntas-frecuentes.astro
│   │   ├── reservar-clase.astro
│   │   ├── gracias.astro           # Thank-you (noindex)
│   │   ├── aprende-ingles.astro
│   │   ├── preparacion-b2-first-madrid.astro
│   │   ├── aviso-legal.astro
│   │   ├── politica-privacidad.astro
│   │   ├── politica-cookies.astro
│   │   ├── cursos-ingles/
│   │   │   ├── infantil.astro
│   │   │   ├── primaria.astro
│   │   │   ├── secundaria.astro
│   │   │   ├── adultos.astro
│   │   │   ├── particulares.astro
│   │   │   └── online.astro
│   │   ├── examenes-cambridge/
│   │   │   ├── index.astro
│   │   │   ├── b1-preliminary.astro
│   │   │   ├── b2-first.astro
│   │   │   ├── c1-advanced.astro
│   │   │   ├── fechas-precios.astro
│   │   │   └── centros-madrid.astro
│   │   ├── linguaskill/
│   │   │   ├── index.astro
│   │   │   ├── curso-intensivo.astro
│   │   │   ├── ejemplo-examen.astro
│   │   │   └── precios-fechas.astro
│   │   ├── academia-ingles-barrio-del-pilar.astro
│   │   ├── academia-ingles-la-vaguada.astro
│   │   ├── academia-ingles-penagrande.astro
│   │   ├── academia-ingles-la-ventilla.astro
│   │   ├── academia-ingles-la-paz.astro
│   │   ├── academia-ingles-plaza-castilla.astro
│   │   ├── academia-ingles-tetuan.astro
│   │   ├── academia-ingles-cuatro-torres.astro
│   │   ├── academias-ingles-madrid/
│   │   │   ├── index.astro
│   │   │   ├── adultos.astro
│   │   │   ├── ninos.astro
│   │   │   ├── certificaciones.astro
│   │   │   └── por-barrios.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       ├── [slug].astro        # Dynamic Content Collection route
│   │       └── [55+ static .astro article files]
│   ├── content/
│   │   ├── config.ts               # Content Collection schema (18 fields)
│   │   └── articles/               # 21 markdown articles
│   │       ├── b2-first-papel-ordenador.md
│   │       ├── c1-advanced-caduca.md
│   │       └── [19 more .md files]
│   └── data/
│       ├── academyImages.ts
│       ├── images.ts               # Image library (optimized + S3)
│       ├── imageManifest.json
│       └── articles/
│           ├── index.ts            # Article registry + helpers
│           ├── types.ts            # PAAArticle interface
│           ├── cambridge-b2-first.ts
│           └── cambridge-c1-advanced.ts
│
├── components/                     # 32 React components
│   ├── Navbar.tsx                  # Navigation with dropdowns
│   ├── Footer.tsx                  # Footer (simple/full variants)
│   ├── Hero.tsx                    # Homepage hero with shield design
│   ├── LeadForm.tsx                # Lead capture → GoHighLevel webhook
│   ├── ContactSection.tsx          # Contact info + map + form
│   ├── SEOHead.tsx                 # Meta tag manager (React SPA fallback)
│   ├── SchemaMarkup.tsx            # JSON-LD injection
│   ├── CoursesSection.tsx          # 7-course grid
│   ├── TestimonialsSection.tsx     # 12+ carousel testimonials
│   ├── FAQSection.tsx              # Accordion FAQ component
│   ├── FAQ.tsx                     # Simple FAQ list
│   ├── MetodoSection.tsx           # Teaching methodology
│   ├── Newsletter.tsx              # Contact CTA with social links
│   ├── PartnersSection.tsx         # Partner logos
│   ├── ValuesSection.tsx           # Academy values
│   ├── LocationsSection.tsx        # 8 Madrid location links
│   ├── TeamSection.tsx             # Teacher profiles
│   ├── WelcomeSection.tsx          # Welcome/intro
│   ├── ContentSections.tsx         # Generic content wrapper
│   ├── Breadcrumb.tsx              # Breadcrumb navigation
│   ├── InfoCards.tsx               # 3-column info cards
│   ├── VideoCTA.tsx                # YouTube embed + CTA overlay
│   ├── LazyVideo.tsx               # Lazy-loading video
│   ├── AcademyGallery.tsx          # Photo gallery grid
│   ├── FullPhotoGallery.tsx        # Expanded gallery view
│   ├── NewsOverlay.tsx             # News/announcement overlay
│   ├── Logo.tsx                    # Logo component
│   ├── PAAArticlePage.tsx          # People Also Ask article template
│   ├── CoursePageLayout.tsx        # Course page layout
│   ├── ExamPageLayout.tsx          # Exam page layout
│   ├── RelatedArticles.tsx         # Related articles sidebar
│   ├── OptimizedImage.tsx          # Responsive image with srcset
│   └── CookieBanner.tsx            # GDPR cookie consent
│
├── pages/                          # DEPRECATED — Do NOT use for routing (see warning below)
│   ├── HomePage.tsx                # Imported by src/pages/index.astro as client component
│   ├── ContactoPage.tsx
│   ├── SobreNosotrosPage.tsx
│   ├── MetodologiaPage.tsx
│   ├── BlogPage.tsx
│   ├── TestimonialsPage.tsx
│   ├── PreguntasFrecuentesPage.tsx
│   ├── ReservarClasePage.tsx
│   ├── GraciasPage.tsx
│   ├── NotFoundPage.tsx
│   ├── cursos/                     # 6 course page components
│   ├── examenes-cambridge/         # 4 exam page components
│   ├── ubicaciones/                # 8 location page components
│   ├── legal/                      # 3 legal page components
│   └── blog/                       # 75+ individual blog page components
│
│   WARNING — LEGACY DIRECTORY:
│   The /pages/ directory is DEPRECATED. These React .tsx files are NOT
│   route endpoints — they are client components imported by Astro pages.
│   ALL routing MUST use src/pages/*.astro exclusively.
│   Future builds must NEVER create routes in /pages/. Doing so causes
│   "Double Implementation" errors where two files define the same page.
│
├── utils/
│   ├── napData.ts                  # Single source of truth for NAP data
│   ├── schemaData.ts               # Schema.org generators (9 types)
│   └── buildPageTitle.ts           # Title tag formula (max 70 chars)
│
├── data/
│   ├── category-config.ts          # 16 content categories
│   ├── internal-links.ts           # 43 internal link mappings
│   ├── articles/                   # Article data collections
│   ├── location-pages/             # Location content docs
│   └── paas/                       # PAA opportunity CSVs
│
├── scripts/
│   ├── optimize-images.mjs         # Sharp-based responsive image generator
│   ├── generate-image-sitemap.mjs  # XML image sitemap builder
│   ├── migrate-articles.ts         # TS → Astro Content Collection migration
│   ├── verify-migration.mjs        # Migration verification
│   └── wp-migrate.mjs              # WordPress migration script
│
├── assets/images/
│   ├── original/                   # 15 high-res source images
│   ├── optimized/                  # 145+ responsive variants (sm/md/lg/xl, webp+jpg)
│   ├── blog/                       # 3 blog images
│   ├── homepage/                   # 2 homepage images
│   ├── locations/                  # 5 location images
│   └── services/                   # ESIC partner image
│
├── seo-system/                     # Dedicated SEO pipeline (26+ subdirectories)
│   ├── brand/                      # NAP, voice, services, team, about, USP, social
│   ├── site/pages/                 # 70+ page blueprints
│   ├── files/                      # CLAUDE.md, engine docs
│   ├── components/
│   ├── data/
│   └── utils/
│
└── dist/                           # Build output (static HTML)
```

### 2.2 Architecture Decisions

| File / Folder | Purpose | Notes |
|--------------|---------|-------|
| `astro.config.mjs` | Framework config | Static output, trailing slash, React integration, sitemap plugin |
| `BaseLayout.astro` | Master HTML shell | GTM, GA4, consent mode, schema @graph, Vercel Analytics, font preloads |
| `vercel.json` | Deployment config | HSTS headers, noindex on /gracias, 100+ WordPress redirects, 404 rewrite |
| `utils/napData.ts` | NAP single source of truth | Every component imports from here — never hardcode business info |
| `utils/schemaData.ts` | Schema generators | 9 schema types, all reference napData.ts |
| `utils/buildPageTitle.ts` | Title formula | `{theme} | Impulse English Academy La Vaguada | Barrio del Pilar` max 70 chars |
| `components/LeadForm.tsx` | Lead capture | GoHighLevel webhook + GTM dataLayer event |
| `components/SEOHead.tsx` | Meta tags (SPA) | Client-side meta management for React pages |
| `src/layouts/BaseLayout.astro` | Meta tags (SSR) | Server-rendered meta tags — preferred method |
| `public/robots.txt` | Crawler instructions | AI crawlers explicitly allowed, sitemap refs, llms.txt ref |
| `public/llms.txt` | LLM reference | 4,650-byte structured business overview for AI search |
| `scripts/optimize-images.mjs` | Image pipeline | S3 download → Sharp → 4 sizes × 2 formats (WebP + JPEG) |
| `scripts/generate-image-sitemap.mjs` | Image SEO | Generates sitemap-images.xml for Google Image Search |
| `data/category-config.ts` | Content taxonomy | 16 categories with hub paths, colors, lead form sources |
| `data/internal-links.ts` | Link resolver | 43 reference names → URL + anchor text mappings |
| `seo-system/` | SEO engine | 10-agent pipeline with brand docs, page blueprints, optimization |

---

## 3. PAGE BY PAGE BREAKDOWN

---

### Page: Homepage — `/`

**Purpose:** Primary landing page — showcase academy, build trust, drive trial bookings
**Target Keyword:** academia inglés barrio del pilar, academia inglés la vaguada
**Search Intent:** Commercial / Navigational

#### Content Structure
| Section | Component | Content Summary | SEO Purpose |
|---------|-----------|-----------------|-------------|
| Hero | `Hero.tsx` + Vimeo background video | Shield design mobile, full-screen video desktop | Brand impact, engagement |
| News Overlay | `NewsOverlay.tsx` | Current news/announcements | Freshness signal |
| Welcome | `WelcomeSection.tsx` | H2: ¡Bienvenido a nuestra Academia de Inglés | Brand introduction |
| Team | `TeamSection.tsx` | H2: Un equipo apasionado por formarte | Trust (teacher profiles) |
| Courses | `CoursesSection.tsx` | H2: Aprende inglés en todos los niveles | Internal linking to 6 courses |
| Methodology | `MetodoSection.tsx` | H2: El Método Impulse | Authority, methodology proof |
| Partners | `PartnersSection.tsx` | H2: Colaboradores Oficiales | Trust (Cambridge, ESIC logos) |
| Testimonials | `TestimonialsSection.tsx` | H2: Lo que dicen nuestros estudiantes | Social proof (12+ reviews) |
| Video CTA | `VideoCTA.tsx` | YouTube embed + CTA | Engagement, conversion |
| Locations | `LocationsSection.tsx` | 8 Madrid neighborhood links | Local SEO internal linking |
| Contact | `ContactSection.tsx` | H2: Contacta con nosotros + map + form | Conversion |
| Newsletter | `Newsletter.tsx` | Social links + CTA buttons | Engagement, social signals |

#### Meta Data
```
Title: Impulse English Academy | academia de inglés en Barrio del Pilar, Madrid. Con profesores nativos especializados en exámenes Cambridge, ofrecemos cursos para niños, infantiles, adolescentes y adultos
Meta Description: Academia de inglés en Barrio del Pilar, Madrid. Profesores nativos especializados en exámenes Cambridge. Cursos para niños, infantiles, adolescentes y adultos. 100% aprobados.
Canonical: https://impulse-english.es/
Keywords: academia inglés barrio del pilar, academia inglés la vaguada, cambridge madrid, cursos inglés niños, clases inglés adultos, profesores nativos madrid
OG Type: website
OG Image: https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/LOGO+WHITE+BACKGROUND.jpg
fullTitle: true (uses title as-is, no brand append)
```

#### Conversion Elements on This Page
- [x] CTA above fold: "Clase de Prueba Gratuita" + "Llamar"
- [x] Phone number visible: Yes (Navbar + Contact section)
- [x] Form present: Yes (ContactSection with LeadForm)
- [x] Trust signals: Cambridge logo, Linguaskill logo, Great Little People, ESIC, 100% pass rate, 150+ reviews
- [x] FAQ section: No (not on homepage)

---

### Page: Contacto — `/contacto`

**Purpose:** Contact information, directions, lead capture form
**Target Keyword:** contacto academia inglés madrid
**Search Intent:** Navigational / Transactional

#### Meta Data
```
Title: Contacto | Impulse English Academy La Vaguada | Barrio del Pilar
Meta Description: Contacta con Impulse English Academy. Av. de El Ferrol 22, La Vaguada, Madrid. Tel: 604 910 611. Prueba de nivel gratuita. Metro Barrio del Pilar.
Canonical: https://impulse-english.es/contacto/
Keywords: contacto academia inglés madrid, dirección impulse english, teléfono academia inglés la vaguada, horarios academia inglés
```

#### Content Structure
| Section | Heading | Content Summary | SEO Purpose |
|---------|---------|-----------------|-------------|
| Hero | H1: Contacto | Academy facade image | NAP reinforcement |
| Contact Info | H2: Información de Contacto | Address, Metro/Bus, Phone, Email, Hours, WhatsApp | Local SEO signals |
| Form | H2: Envíanos un mensaje | LeadForm (name, email, phone, age, level) | Conversion |
| Gallery | H2: Nuestras Instalaciones | 9 academy photos | Trust |
| Directions | H2: Cómo llegar | Google Map embed + YouTube directions video | Local SEO, UX |
| FAQ | 13 questions | Hours, pricing, level testing, transport | Featured snippets |

---

### Page: Sobre Nosotros — `/sobre-nosotros`

**Purpose:** Brand story, trust building, credentials showcase
**Target Keyword:** academia inglés la vaguada historia
**Search Intent:** Informational / Navigational

#### Meta Data
```
Title: Sobre Nosotros | Impulse English Academy La Vaguada | Barrio del Pilar
Meta Description: Conoce Impulse English Academy. Centro preparador Cambridge oficial en La Vaguada, Madrid. Más de 10 años enseñando inglés. 100% aprobados.
Canonical: https://impulse-english.es/sobre-nosotros/
Keywords: sobre nosotros academia inglés, quienes somos impulse english, historia academia inglés madrid, equipo profesores inglés
```

#### Content Structure
| Section | Heading | Content Summary | SEO Purpose |
|---------|---------|-----------------|-------------|
| Hero | H1: Sobre Nosotros | Professor/students image | Brand identity |
| History | H2: Conoce Nuestra Historia | Video + narrative | Authority |
| Mission | H2: Más Que Una Academia, Una Familia | Family business story | Trust, differentiation |
| Certifications | 6 credential cards | Cambridge, Linguaskill, GLP, ESIC, reviews, 100% pass | Authority |
| FAQ | 4 questions | Centro Preparador definition, academy vs tutors | Featured snippets |

---

### Page: Metodología — `/metodologia`

**Purpose:** Showcase teaching method, differentiate from competitors
**Target Keyword:** metodología inglés, como aprender inglés rápido
**Search Intent:** Informational / Commercial

#### Meta Data
```
Title: Metodología | Impulse English Academy La Vaguada | Barrio del Pilar
Meta Description: Conoce la metodología Impulse: conversación desde día 1, grupos reducidos máx 10 alumnos, personalización total. 100% aprobados Cambridge. Academia Madrid.
Canonical: https://impulse-english.es/metodologia/
Keywords: metodología inglés, como aprender inglés rápido, método conversacional inglés, clases inglés personalizadas madrid
```

#### Content Structure
| Section | Heading | Content Summary | SEO Purpose |
|---------|---------|-----------------|-------------|
| 7 Pillars | H2 per pillar | Personalización, Motivación, Conversación (70% speaking), Safe Environment, Spaced Repetition, Communicative Practice, 5 Skills | Authority, differentiation |
| Stats | Display metrics | 100% pass rate, 40-60% better retention, 70% speaking, max 7-10 per group | Social proof |
| FAQ | 9 questions | Listening, speaking, vocabulary, pronunciation, practice tips | Featured snippets |

---

### Page: Testimonios — `/testimonios`

**Purpose:** Social proof, review showcase
**Target Keyword:** opiniones academia inglés madrid
**Search Intent:** Commercial

#### Meta Data
```
Title: Opiniones | Impulse English Academy La Vaguada | Barrio del Pilar
Meta Description: Opiniones reales de alumnos de Impulse English Academy. 150+ reseñas 5 estrellas en Google. Testimonios de éxito con Cambridge y Linguaskill.
Canonical: https://impulse-english.es/testimonios/
Keywords: opiniones academia inglés madrid, reseñas impulse english, testimonios alumnos cambridge, valoraciones clases inglés
```

---

### Page: Preguntas Frecuentes — `/preguntas-frecuentes`

**Purpose:** FAQ hub for featured snippets + user education
**Target Keyword:** preguntas frecuentes academia inglés
**Search Intent:** Informational

#### Meta Data
```
Title: FAQ Inglés | Impulse English Academy La Vaguada | Barrio del Pilar
Meta Description: Respuestas a todas tus preguntas sobre cursos, horarios, precios, exámenes Cambridge y Linguaskill. Academia de inglés en La Vaguada, Barrio del Pilar.
Canonical: https://impulse-english.es/preguntas-frecuentes/
Keywords: preguntas frecuentes academia inglés, faq clases inglés madrid, dudas cambridge linguaskill, información cursos inglés
```

#### Content Structure
- 6 SEO-optimized FAQs at top (featured snippet targeting)
- 7 FAQ sections by topic: Academy, Courses, Pricing, Methods, Schedules, Exams, Online vs Presential
- 40+ total FAQ items with FAQPage schema markup

---

### Page: Reservar Clase — `/reservar-clase`

**Purpose:** Trial class booking (primary conversion page)
**Target Keyword:** reservar clase inglés madrid
**Search Intent:** Transactional

#### Meta Data
```
Title: Reservar Clase | Impulse English Academy La Vaguada | Barrio del Pilar
Meta Description: Reserva tu clase de prueba gratuita en Impulse English Academy. Sin compromiso. Te contactamos en menos de 24 horas. La Vaguada, Barrio del Pilar.
Canonical: https://impulse-english.es/reservar-clase/
Keywords: reservar clase inglés, prueba gratis inglés madrid, clase prueba academia inglés, inscripción cursos inglés
```

#### Form Details
- Fields: Name, Email, Phone, English Level (dropdown), Privacy checkbox
- Webhook: LeadConnectorHQ → `https://services.leadconnectorhq.com/hooks/OAJYwGK3D8G66kUMQsht/webhook-trigger/0fe57216-4cdc-42af-b2d6-d401e9015573`
- GTM Event: `generate_lead` with `form_type: course_inquiry`
- Success: Redirect to `/gracias`

---

### Page: Gracias — `/gracias`

**Purpose:** Post-conversion thank-you page
**Search Intent:** N/A (noindex)

#### Meta Data
```
Title: Gracias | Impulse English La Vaguada
Meta Description: Tu solicitud ha sido recibida. Te contactaremos en menos de 24 horas.
Canonical: https://impulse-english.es/gracias/
Robots: noindex, nofollow (via X-Robots-Tag header in vercel.json)
```

---

### Page: Blog Hub — `/blog`

**Purpose:** Content hub for all articles, category filtering
**Target Keyword:** blog inglés, artículos cambridge
**Search Intent:** Informational

#### Meta Data
```
Title: Blog Inglés | Impulse English Academy La Vaguada | Barrio del Pilar
Meta Description: Blog de Impulse English Academy. Guías sobre exámenes Cambridge, Linguaskill, consejos para aprender inglés y recursos educativos. Academia Madrid.
Canonical: https://impulse-english.es/blog/
Keywords: blog inglés, artículos cambridge, guía linguaskill, aprender inglés tips, recursos inglés madrid
```

---

### Page: 404 — Not Found

#### Meta Data
```
Title: Página No Encontrada | Impulse English La Vaguada
Meta Description: La página que buscas no existe o ha sido movida.
```

---

### Course Pages (6 pages)

| Page | URL | Title Tag | Meta Description |
|------|-----|-----------|-----------------|
| Infantil | `/cursos-ingles/infantil` | Inglés Infantil (2–5 años) | Clases de inglés infantil (2–5) en La Vaguada / Barrio del Pilar. Metodología Great Little People 100% en inglés, grupos máx. 7 y clase de prueba gratis. |
| Primaria | `/cursos-ingles/primaria` | Inglés Primaria (6–12 años) | Clases de inglés para primaria en La Vaguada / Barrio del Pilar. Cambridge Young Learners, grupos reducidos, profesores cualificados. |
| Secundaria | `/cursos-ingles/secundaria` | Inglés Secundaria y EBAU | Clases de inglés para secundaria en La Vaguada / Barrio del Pilar. Preparación EBAU y Cambridge B1, B2, C1. 100% aprobados 2024/2025. |
| Adultos | `/cursos-ingles/adultos` | Clases Inglés Adultos | Inglés para adultos en La Vaguada / Barrio del Pilar. Grupos máx. 8, horarios mañana y tarde, preparación Cambridge y centro oficial Linguaskill. |
| Particulares | `/cursos-ingles/particulares` | Clases Particulares Inglés | Clases particulares de inglés 1:1 en La Vaguada / Barrio del Pilar. 100% personalizadas, horarios flexibles, online o presencial. |
| Online | `/cursos-ingles/online` | Clases Inglés Online | Clases de inglés online en directo. Grupos reducidos (máx. 8), preparación Cambridge y Linguaskill, modalidad 100% online o híbrida. |

**All course pages include:** Course schema + FAQ schema, LeadForm, photo gallery, 8-10 FAQs, breadcrumbs

---

### Exam Pages (6 pages)

| Page | URL | Title Tag | Meta Description |
|------|-----|-----------|-----------------|
| Cambridge Hub | `/examenes-cambridge` | Exámenes Cambridge | Centro preparador Cambridge oficial en Madrid. B1, B2 First, C1 Advanced. 100% aprobados. Barrio del Pilar, La Vaguada. |
| B1 Preliminary | `/examenes-cambridge/b1-preliminary` | Preparación Cambridge B1 PET | Preparación examen Cambridge B1 Preliminary (PET) en Madrid. Centro oficial con 100% aprobados. Grupos reducidos. |
| B2 First | `/examenes-cambridge/b2-first` | Preparación Cambridge B2 First | Preparación Cambridge B2 First (FCE) en Madrid. Centro oficial, 100% aprobados. El certificado más demandado. |
| C1 Advanced | `/examenes-cambridge/c1-advanced` | Examen Cambridge C1 Advanced | Guía completa del C1 Advanced Cambridge: estructura, puntuación, estrategias y requisitos para aprobar. |
| Fechas/Precios | `/examenes-cambridge/fechas-precios` | Fechas Exámenes Cambridge 2026 | Todas las fechas de exámenes Cambridge 2026 por nivel, formato digital y papel, plazos de inscripción. |
| Centros Madrid | `/examenes-cambridge/centros-madrid` | Centros Cambridge en Madrid | Guía completa de centros Cambridge autorizados en Madrid y Barcelona 2025. |

---

### Linguaskill Pages (4 pages)

| Page | URL | Title Tag | Meta Description |
|------|-----|-----------|-----------------|
| Hub | `/linguaskill` | Linguaskill | Guía definitiva del examen Linguaskill con ejemplos reales, estructura, tipos de preguntas y preparación. Resultados en 48 horas. |
| Intensivo | `/linguaskill/curso-intensivo` | Curso Intensivo Linguaskill | Prepárate para Linguaskill en 4-8 semanas con cursos intensivos online. Desde 79€/mes en Madrid. |
| Ejemplo | `/linguaskill/ejemplo-examen` | Ejemplo Examen Linguaskill | Formato completo del examen Linguaskill con ejemplos reales de cada módulo. |
| Precios | `/linguaskill/precios-fechas` | Linguaskill Precios y Fechas | Guía completa Linguaskill 2026: precios 120-150€, sedes oficiales, modalidades online y presencial. |

---

### Location Pages (8 pages)

| Page | URL | Title Tag | Meta Description |
|------|-----|-----------|-----------------|
| Barrio del Pilar | `/academia-ingles-barrio-del-pilar` | Academia Inglés Barrio del Pilar | Academia de inglés en Barrio del Pilar, junto a La Vaguada. Centro preparador Cambridge oficial. 100% aprobados. |
| La Vaguada | `/academia-ingles-la-vaguada` | Academia Inglés La Vaguada | Academia de inglés en La Vaguada y Barrio del Pilar, Madrid. Profesores nativos especializados en Cambridge. 100% aprobados. |
| Peñagrande | `/academia-ingles-penagrande` | Academia Inglés Peñagrande | Academia de inglés cerca de Peñagrande Madrid. Centro preparador Cambridge oficial con 100% aprobados. |
| La Ventilla | `/academia-ingles-la-ventilla` | Academia Inglés La Ventilla | Academia de inglés cerca de La Ventilla Madrid. Centro preparador Cambridge oficial con 100% aprobados. |
| La Paz | `/academia-ingles-la-paz` | Academia Inglés La Paz | Academia de inglés cerca de La Paz Madrid. Centro preparador Cambridge oficial con 100% aprobados. |
| Plaza Castilla | `/academia-ingles-plaza-castilla` | Academia Inglés Plaza Castilla | Academia de inglés cerca de Plaza Castilla Madrid. Centro preparador Cambridge oficial con 100% aprobados. |
| Tetuán | `/academia-ingles-tetuan` | Academia Inglés Tetuán | Academia de inglés cerca de Tetuán Madrid. Centro preparador Cambridge oficial con 100% aprobados. |
| Cuatro Torres | `/academia-ingles-cuatro-torres` | Academia Inglés Cuatro Torres | Academia de inglés cerca de Cuatro Torres Business Area Madrid. Horarios flexibles para profesionales. |

**All location pages include:** Location-specific schema (LocalBusiness + Service catalog), FAQ schema, 6 benefit cards, 5 course cards, 10-12 localized FAQs, LeadForm

---

### Info Hub Pages (5 pages under `/academias-ingles-madrid/`)

| Page | URL | Title Tag |
|------|-----|-----------|
| Hub | `/academias-ingles-madrid` | Academias Inglés Baratas Madrid |
| Adultos | `/academias-ingles-madrid/adultos` | Clases Inglés Adultos Madrid |
| Niños | `/academias-ingles-madrid/ninos` | Inglés para Niños en Madrid |
| Certificaciones | `/academias-ingles-madrid/certificaciones` | Certificaciones Inglés Madrid |
| Por Barrios | `/academias-ingles-madrid/por-barrios` | Academias Inglés por Barrios Madrid |

---

### Blog Articles (55+ static pages + 21 Content Collection articles)

All blog articles follow the same template (`PAAArticlePage.tsx`):

**Template structure:**
1. Hero with image overlay, title, category tag, read time, dates
2. Direct answer box (blue highlight — targets Google People Also Ask)
3. Context sections (alternating white/gray backgrounds)
4. Internal links grid
5. Impulse CTA section (blue background, LeadForm embedded)
6. FAQ accordion
7. Related articles (3 siblings from same category)
8. Back to hub link

**Complete blog article meta data is listed in the exploration data above — 55+ static .astro files plus 21 Content Collection markdown articles.**

---

### Legal Pages (3 pages)

| Page | URL | Title Tag |
|------|-----|-----------|
| Aviso Legal | `/aviso-legal` | Aviso Legal |
| Política Privacidad | `/politica-privacidad` | Política Privacidad |
| Política Cookies | `/politica-cookies` | Política de Cookies |

**Legal entity:** Daniel John Fitzpatrick, CIF: Y3699929W

---

## 4. TECHNICAL SEO — COMPLETE AUDIT

### 4.1 Meta Tag Implementation

**Server-rendered via `BaseLayout.astro`** (preferred method):
- `<title>` — built via `buildPageTitle()` formula or `fullTitle` override
- `<meta name="description">` — per-page
- `<meta name="robots">` — `index, follow, max-image-preview:large` (default) or `noindex, nofollow` (gracias)
- `<meta name="keywords">` — per-page (when provided)
- `<meta name="author">` — "Impulse English Academy" (default)
- `<meta name="publisher">` — "Impulse English Academy La Vaguada – Barrio del Pilar"
- `<meta name="geo.region">` — "ES-MD"
- `<meta name="geo.placename">` — "Madrid"
- `<link rel="canonical">` — per-page, trailing slash enforced
- Open Graph: og:title, og:description, og:type, og:image (1200×630), og:site_name, og:locale (es_ES), og:url
- Twitter Card: summary_large_image, twitter:site @ImpulseEnglish, twitter:creator @ImpulseEnglish
- Article tags (when ogType=article): article:published_time, article:modified_time, article:author

### 4.2 Title Tag Formula

```typescript
// buildPageTitle.ts
const CORE_BRAND = 'Impulse English Academy La Vaguada';
const BARRIO_SUFFIX = 'Barrio del Pilar';
const SHORT_BRAND = 'Impulse English La Vaguada';

// Priority order:
// 1. Barrio Bonus: "{theme} | Impulse English Academy La Vaguada | Barrio del Pilar" (if theme < 15 chars and total ≤ 70)
// 2. Standard: "{theme} | Impulse English Academy La Vaguada" (if ≤ 70)
// 3. Emergency: "{theme} | Impulse English La Vaguada" (if ≤ 70)
// 4. Hard truncate: truncate theme to fit within 70 chars
```

### 4.3 URL Structure

All URLs use trailing slashes (enforced by Astro config + Vercel config):

| Page Type | URL Pattern | Example |
|-----------|------------|---------|
| Root pages | `/{slug}/` | `/contacto/` |
| Course pages | `/cursos-ingles/{course}/` | `/cursos-ingles/infantil/` |
| Cambridge exams | `/examenes-cambridge/{exam}/` | `/examenes-cambridge/b2-first/` |
| Linguaskill | `/linguaskill/{page}/` | `/linguaskill/precios-fechas/` |
| Location pages | `/academia-ingles-{location}/` | `/academia-ingles-barrio-del-pilar/` |
| Info hubs | `/academias-ingles-madrid/{topic}/` | `/academias-ingles-madrid/adultos/` |
| Blog articles | `/blog/{slug}/` | `/blog/cambridge-vs-linguaskill-diferencias/` |
| Legal pages | `/{slug}/` | `/politica-privacidad/` |

### 4.4 WordPress Migration Redirects

100+ permanent (301) redirects in `vercel.json`:
- Old WordPress paths (`/ingles-la-vaguada/*`, `/exam-impulse`, `/blogs-impulse`)
- Old `/ubicaciones/*` → new `/academia-ingles-*` pattern
- Old exam paths → new blog article paths
- Old blog pagination (`/blog-1` through `/blog-7`) → `/blog/`
- WordPress artifacts (`/author/*`, `/category/*`, `/dipl-testimonial/*`, `/qsm_quiz/*`)

### 4.5 Image Optimisation

**Pipeline:** `scripts/optimize-images.mjs` using Sharp

| Breakpoint | Width | Format | Quality |
|-----------|-------|--------|---------|
| sm | 400px | WebP + JPEG | 80 |
| md | 800px | WebP + JPEG | 80 |
| lg | 1200px | WebP + JPEG | 80 |
| xl | 1920px | WebP + JPEG | 80 |

**Naming convention:** `{semantic-name}-{size}.{format}`
Example: `academia-cambridge-madrid-aula-md.webp`

**Loading strategy:**
- Hero images: `loading="eager"` (above fold)
- All other images: `loading="lazy"`
- Alt text: Spanish primary

**Image sitemap:** `sitemap-images.xml` generated by `scripts/generate-image-sitemap.mjs` with titles, captions, geo-location tags

---

## 5. SCHEMA & STRUCTURED DATA

### 5.1 Schema Types Used

1. **LocalBusiness + EducationalOrganization** — Main entity (every page via BaseLayout @graph)
2. **WebSite** — Site identity with SearchAction (every page via BaseLayout @graph)
3. **Course** — Course offerings (6 course pages)
4. **Article** — Blog posts (all blog articles)
5. **FAQPage** — FAQ sections (course, exam, location, blog pages)
6. **BreadcrumbList** — Navigation breadcrumbs
7. **WebPage** — Individual page metadata
8. **Service** — Exam prep & course services (location pages)
9. **DefinedTerm** — Glossary/key concept definitions

### 5.2 Full Schema Code — As Implemented

#### Organization Schema (LocalBusiness + EducationalOrganization)

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  "@id": "https://impulse-english.es/#organization",
  "name": "Impulse English Academy La Vaguada",
  "alternateName": "Impulse English",
  "description": "Academia de inglés en Madrid especializada en preparación de exámenes Cambridge, Linguaskill y clases para todas las edades. Centro oficial Cambridge con 100% de aprobados.",
  "url": "https://impulse-english.es",
  "logo": {
    "@type": "ImageObject",
    "url": "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117.PNG"
  },
  "image": "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117.PNG",
  "telephone": "+34604910611",
  "email": "info@impulse-english.es",
  "foundingDate": "2022",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. de El Ferrol, 22",
    "addressLocality": "Madrid",
    "addressRegion": "Community of Madrid",
    "postalCode": "28029",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.4789,
    "longitude": -3.7114
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "10:00", "closes": "21:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "15:30", "closes": "21:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "10:00", "closes": "21:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "15:30", "closes": "21:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "13:30", "closes": "19:30" }
  ],
  "priceRange": "€64 - €79/mes",
  "hasMap": "https://share.google/GuRfJ3TjrnIIUhrdk",
  "sameAs": [
    "https://share.google/GuRfJ3TjrnIIUhrdk",
    "https://www.instagram.com/impulse_english_lavaguada/",
    "https://www.facebook.com/impulseenglishlavaguada/",
    "https://www.tiktok.com/@impulse_english_lavaguada",
    "https://x.com/impulse_vaguada",
    "https://www.linkedin.com/company/101859096/",
    "https://www.youtube.com/@Impulse-English"
  ],
  "areaServed": [
    { "@type": "Neighborhood", "name": "Barrio del Pilar" },
    { "@type": "Neighborhood", "name": "La Vaguada" },
    { "@type": "City", "name": "Peñagrande" },
    { "@type": "City", "name": "La Ventilla" },
    { "@type": "City", "name": "La Paz" },
    { "@type": "City", "name": "Plaza Castilla" },
    { "@type": "City", "name": "Tetuán" },
    { "@type": "City", "name": "Cuatro Torres" },
    { "@type": "City", "name": "Fuencarral-El Pardo" },
    { "@type": "City", "name": "Madrid" }
  ],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "Official Cambridge Preparation Centre" },
    { "@type": "EducationalOccupationalCredential", "name": "Official Linguaskill Centre" },
    { "@type": "EducationalOccupationalCredential", "name": "Official Great Little People Centre" },
    { "@type": "EducationalOccupationalCredential", "name": "Official Partner of ESIC Idiomas" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 5,
    "reviewCount": 150,
    "bestRating": 5,
    "worstRating": 1
  },
  "knowsLanguage": ["es", "en"],
  "knowsAbout": ["Cambridge Exam Preparation", "Business English", "Linguaskill Certification", "English Language Teaching"],
  "slogan": "Tu academia de inglés en Madrid"
}
```

#### WebSite Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Impulse English Academy La Vaguada",
  "alternateName": "Impulse English",
  "url": "https://impulse-english.es",
  "publisher": {
    "@type": "EducationalOrganization",
    "@id": "https://impulse-english.es/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://impulse-english.es/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "es"
}
```

#### Course Schema (template)

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "[Course Name]",
  "description": "[Course Description]",
  "url": "[Course URL]",
  "provider": {
    "@type": "EducationalOrganization",
    "@id": "https://impulse-english.es/#organization",
    "name": "Impulse English Academy La Vaguada",
    "url": "https://impulse-english.es"
  },
  "courseCode": "[e.g., INF-GLP, PRIM-CYL, SEC-CAM, ADU-GEN, PRIV-IND, ONL-GRP]",
  "educationalLevel": "[Preschool / Primary / Secondary / Adult Education / All Levels]",
  "timeRequired": "[PT1H / PT2H / P9M]",
  "inLanguage": "en",
  "availableLanguage": ["es", "en"],
  "offers": {
    "@type": "Offer",
    "price": "[price]",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "validFrom": "DYNAMIC — see note below"
  }
}
```

> **MASTER TEMPLATE RULE — Dynamic `validFrom`:** Never hardcode the year in `validFrom`. In `schemaData.ts`, replace the static `"2025-01-01"` with:
> ```js
> validFrom: `${new Date().getFullYear()}-01-01`
> ```
> This ensures the schema stays current across year boundaries without manual updates.

#### Location Page Schema (template with Service catalog)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://impulse-english.es/#organization",
      "name": "Impulse English Academy La Vaguada",
      "description": "Academia de inglés cerca de [Location], Madrid...",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cursos de Inglés",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Clases de Inglés Infantil cerca de [Location]",
            "serviceType": "English Classes for Children",
            "offers": { "@type": "Offer", "price": "64", "priceCurrency": "EUR" }
          },
          {
            "@type": "Service",
            "name": "Clases de Inglés Primaria cerca de [Location]",
            "offers": { "@type": "Offer", "price": "71", "priceCurrency": "EUR" }
          },
          {
            "@type": "Service",
            "name": "Clases de Inglés Secundaria cerca de [Location]",
            "offers": { "@type": "Offer", "price": "75", "priceCurrency": "EUR" }
          },
          {
            "@type": "Service",
            "name": "Clases de Inglés para Adultos cerca de [Location]",
            "offers": { "@type": "Offer", "price": "79", "priceCurrency": "EUR" }
          },
          {
            "@type": "Service",
            "name": "Preparación Exámenes Cambridge cerca de [Location]",
            "serviceType": "Cambridge Exam Preparation"
          },
          {
            "@type": "Service",
            "name": "Examen Linguaskill cerca de [Location]",
            "serviceType": "Linguaskill Certification"
          }
        ]
      }
    }
  ]
}
```

### 5.3 Where Schema Is Injected

| Schema Type | Pages | Injection Method |
|------------|-------|-----------------|
| Organization + WebSite | ALL pages | BaseLayout.astro `<script type="application/ld+json">` via @graph |
| Course | 6 course pages, exam pages | Passed as `schemas` prop to BaseLayout |
| Article | All blog articles | Passed as `schemas` prop to BaseLayout |
| FAQPage | Course, exam, location, FAQ pages | Passed as `schemas` prop to BaseLayout |
| BreadcrumbList | Pages with breadcrumbs | Passed as `schemas` prop |
| Service (via Location) | 8 location pages | Location @graph with OfferCatalog |

---

## 6. LLM OPTIMISATION

### 6.1 llms.txt — Full Contents

```
# Impulse English Academy La Vaguada

> Official AI reference file for Impulse English Academy. This document provides authoritative, structured information for LLMs, AI agents, and search engine crawlers.

## Business Overview

**Impulse English Academy La Vaguada** is a premier English language academy in the La Vaguada neighborhood of Madrid, Spain. We provide comprehensive English instruction for children, teenagers, and adults, alongside specialized preparation for official Cambridge and Linguaskill examinations.

- **Official Website:** https://impulse-english.es
- **Phone:** +34 604 910 611
- **Email:** info@impulse-english.es
- **Address:** Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid, Spain
- **Rating:** 5/5 stars on Google (150+ reviews)
- **Founded:** 2022
- **Price Range:** €64–€79/mes

## Core Courses

### Children & Teens
- **Infantil (Ages 2–5):** Early childhood English immersion using the Great Little People methodology. [/cursos-ingles/infantil](https://impulse-english.es/cursos-ingles/infantil)
- **Primaria (Ages 6–12):** Foundational English skills for primary school students. [/cursos-ingles/primaria](https://impulse-english.es/cursos-ingles/primaria)
- **Secundaria (Ages 13–17):** Advanced grammar, vocabulary, and academic English with Cambridge exam preparation. [/cursos-ingles/secundaria](https://impulse-english.es/cursos-ingles/secundaria)

### Adults
- **Adultos:** Practical English for career, travel, and conversational fluency. [/cursos-ingles/adultos](https://impulse-english.es/cursos-ingles/adultos)
- **Clases Particulares:** 1-on-1 personalized instruction tailored to individual goals. [/cursos-ingles/particulares](https://impulse-english.es/cursos-ingles/particulares)
- **Clases Online:** Remote learning options with full flexibility. [/cursos-ingles/online](https://impulse-english.es/cursos-ingles/online)

## Official Exam Preparation

### Cambridge English
- **B1 Preliminary (PET):** Intermediate level certification.
- **B2 First (FCE):** Upper-intermediate level, widely recognized by employers and universities.
- **C1 Advanced (CAE):** Advanced level for professional and academic purposes.
- [Cambridge Exam Hub](https://impulse-english.es/examenes-cambridge)

### Linguaskill
Fast, accurate online testing by Cambridge with results in 48 hours. Intensive preparation courses available.
- [Linguaskill Page](https://impulse-english.es/linguaskill)

## Official Credentials
- Official Cambridge Preparation Centre
- Official Linguaskill Centre
- Official Great Little People Centre
- Official Partner of ESIC Idiomas

## Madrid Locations Served

Our academy is centrally located in **La Vaguada** and serves students across northern Madrid:

1. **Barrio del Pilar** — [/academia-ingles-barrio-del-pilar](https://impulse-english.es/academia-ingles-barrio-del-pilar)
2. **La Vaguada** — [/academia-ingles-la-vaguada](https://impulse-english.es/academia-ingles-la-vaguada)
3. **Peñagrande** — [/academia-ingles-penagrande](https://impulse-english.es/academia-ingles-penagrande)
4. **La Ventilla** — [/academia-ingles-la-ventilla](https://impulse-english.es/academia-ingles-la-ventilla)
5. **La Paz** — [/academia-ingles-la-paz](https://impulse-english.es/academia-ingles-la-paz)
6. **Plaza Castilla** — [/academia-ingles-plaza-castilla](https://impulse-english.es/academia-ingles-plaza-castilla)
7. **Tetuán** — [/academia-ingles-tetuan](https://impulse-english.es/academia-ingles-tetuan)
8. **Cuatro Torres** — [/academia-ingles-cuatro-torres](https://impulse-english.es/academia-ingles-cuatro-torres)

## How to Reach Us

### Metro
- Herrera Oria (Línea 9)
- Barrio del Pilar (Línea 9)
- Peñagrande (Línea 7)

### Bus
Lines 42, 49, 67, 83, 126, 128, 132, 133, 134, 137, 147

## Opening Hours
- Lunes: 10:00–21:30
- Martes: 15:30–21:30
- Miércoles: 10:00–21:30
- Jueves: 15:30–21:30
- Viernes: 13:30–19:30
- Sábado–Domingo: Cerrado

## Social Media
- [Instagram](https://www.instagram.com/impulse_english_lavaguada/)
- [Facebook](https://www.facebook.com/impulseenglishlavaguada/)
- [TikTok](https://www.tiktok.com/@impulse_english_lavaguada)
- [X (Twitter)](https://x.com/impulse_vaguada)
- [LinkedIn](https://www.linkedin.com/company/101859096/)
- [YouTube](https://www.youtube.com/@Impulse-English)

## Key Pages
- [Home](https://impulse-english.es/)
- [About Us](https://impulse-english.es/sobre-nosotros)
- [Methodology](https://impulse-english.es/metodologia)
- [Blog](https://impulse-english.es/blog)
- [Book a Class](https://impulse-english.es/reservar-clase)
- [FAQ](https://impulse-english.es/preguntas-frecuentes)
- [Sitemap](https://impulse-english.es/sitemap.xml)
```

### 6.2 On-Page LLM Signals

| Element | Location | Content Summary |
|---------|----------|----------------|
| Direct answer box (paaAnswer) | Every blog article | Blue-highlighted direct answer targeting PAA snippets |
| FAQ sections with schema | Course, exam, location, FAQ pages | 200+ Q&A pairs with FAQPage schema |
| First-paragraph answers | Blog articles | Immediate keyword-rich answers |
| Named entities | Sitewide | "Impulse English Academy La Vaguada", "Barrio del Pilar", "Cambridge", "Linguaskill" |
| Structured Q&A | Blog articles | contextSections with clear headings |
| llms.txt | /llms.txt | Complete business reference for AI crawlers |
| robots.txt AI rules | /robots.txt | GPTBot, Google-Extended, ClaudeBot, anthropic-ai explicitly allowed |

### 6.3 LLM Optimisation Strategy

1. **llms.txt** — Structured markdown file at `/llms.txt` referenced from `robots.txt` via `Llms: /llms.txt`
2. **AI crawler permissions** — robots.txt explicitly allows GPTBot, Google-Extended, ClaudeBot, anthropic-ai
3. **Direct answer pattern** — Every PAA article starts with `paaAnswer` in a highlighted box for AI extraction
4. **FAQ schema everywhere** — FAQPage structured data on 40+ pages for Google featured snippets and AI answers
5. **Entity consistency** — NAP data centralized in `napData.ts`, consistent across all pages and schema
6. **SearchAction schema** — WebSite schema includes SearchAction for site search targeting

---

## 7. DESIGN & LAYOUT DECISIONS

### 7.1 Visual Design

| Element | Decision Made | Rationale |
|---------|--------------|-----------|
| Colour palette | accent-blue #12477d, brand-red #ea4e59, zinc-surface #F4F4F5 | Professional blue + urgency red for CTAs |
| Primary font | Inter (sans-serif, Google Fonts) | Clean, modern, excellent readability |
| Secondary font | Playfair Display (serif, Google Fonts) | Elegant headings, educational gravitas |
| Button style | Red (#ea4e59) with white text, rounded-lg, shadow-lg | High contrast CTA visibility |
| Layout approach | Mobile-first (Tailwind responsive) | 70%+ traffic likely mobile |
| Theme color | #12477d (meta theme-color) | Brand blue in browser chrome |

### 7.2 CSS Architecture

- **Framework:** Tailwind CSS 3.4.17
- **Global styles:** `src/index.css` with Tailwind directives + custom heading styles
- **Custom classes:** Headings use Playfair Display with `line-height: 1.1`; body uses Inter with `line-height: 1.6`
- **No custom CSS files** — everything via Tailwind utility classes
- **Breakpoints:** Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px)
- **Key decisions:** CSS variables via Tailwind config (not inline), scroll-smooth on html, selection colors match brand

### 7.3 JavaScript Used

| Script | Purpose | Location |
|--------|---------|---------|
| Google Tag Manager | Tag management | BaseLayout.astro `<head>` (GTM-TDC7CQDD) |
| Google Analytics 4 | Analytics tracking | BaseLayout.astro `<head>` (G-WN5973VY1M) |
| Google Ads | Conversion tracking | BaseLayout.astro `<head>` (AW-11461982741) |
| Vercel Analytics | Performance monitoring | BaseLayout.astro `<body>` (inject()) |
| Vercel Speed Insights | Core Web Vitals | BaseLayout.astro `<body>` (injectSpeedInsights()) |
| GDPR Consent Mode | Cookie consent | BaseLayout.astro `<head>` (default denied) |
| React 19 | UI components | Client-side hydration via Astro islands |
| Lucide React | Icons | Imported per-component |

### 7.4 Section Layout Per Page Type

**Homepage Layout:**
1. Full-screen hero (100dvh) with Vimeo background video
2. NewsOverlay (announcement bar)
3. WelcomeSection (introduction)
4. TeamSection (teacher profiles)
5. CoursesSection (7-course grid)
6. MetodoSection (methodology pillars)
7. PartnersSection (official logos)
8. TestimonialsSection (review carousel)
9. VideoCTA (YouTube embed)
10. LocationsSection (8 neighborhoods)
11. ContactSection (map + form)
12. Newsletter (social links + CTA)
13. Footer
14. CookieBanner

**Course Page Layout:**
1. Navbar
2. Breadcrumb
3. Hero with course image
4. Course description + benefits cards
5. Video section (YouTube)
6. Photo gallery
7. FAQ section (8-10 items)
8. LeadForm CTA
9. Footer
10. CookieBanner

**Location Page Layout:**
1. Navbar
2. Breadcrumb
3. Hero with location-specific messaging
4. 6 benefit cards (location, Cambridge, pass rate, groups, experience, methodology)
5. 5 course cards linking to course pages
6. Photo gallery
7. FAQ section (10-12 localized items)
8. LeadForm CTA
9. Footer
10. CookieBanner

**Blog Article Layout (PAAArticlePage):**
1. Navbar
2. Breadcrumb
3. Hero with image overlay + meta info
4. Direct answer box (blue highlight)
5. Context sections (alternating backgrounds)
6. Internal links grid
7. Impulse CTA section (blue, with LeadForm)
8. FAQ accordion
9. Related articles (3 siblings)
10. Back to hub link
11. Footer
12. CookieBanner

---

## 8. CONVERSION ELEMENTS & CTAs

### 8.1 CTA Inventory

| CTA Element | Text Used | Location | Action |
|------------|-----------|----------|--------|
| Primary hero button | "Clase de Prueba Gratuita" | Homepage hero | → /reservar-clase |
| Secondary hero button | "Llamar" | Homepage hero | → tel:+34604910611 |
| Navbar CTA | WhatsApp icon + Phone icon | All pages navbar | → wa.me + tel: |
| LeadForm submit | "Enviar solicitud" | Multiple pages | Webhook POST |
| Course CTA | "Prueba de nivel GRATIS" | Course pages | → /reservar-clase |
| Blog CTA | "Prueba de nivel gratis" / "Preparación [Exam]" | Blog articles | → /reservar-clase / exam page |
| Footer CTA | Contact links | All pages | → /contacto |
| Newsletter CTA | "Solicita información" / "Llámanos" | Near footer | → /reservar-clase / tel: |

### 8.2 Lead Capture Form

**Component:** `components/LeadForm.tsx`

- **Fields:** Nombre completo (required), Email (required), Teléfono (required), Nivel (select: infantil/primaria/secundaria/adulto/one-to-one/nos, required), Privacy checkbox (required)
- **Validation:** HTML5 required + type validation (email, tel)
- **Submission:** POST to GoHighLevel webhook with payload: `{ name, email, phone, level, source, timestamp }`
- **GTM tracking:** `generate_lead` event with `form_type: course_inquiry`, `course_name`, `location_preference: Barrio del Pilar`
- **Success flow:** Redirect to `/gracias`
- **Error handling:** Status display (idle → loading → success/error)
- **CTA button:** Red (#ea4e59 → darker hover), "Enviar solicitud" with Send icon

**Props for customisation:**
- `title` — form heading (default: "Solicita información")
- `subtitle` — subheading (default: "Déjanos tus datos y te contactamos en menos de 24 horas")
- `ctaText` — button text (default: "Enviar solicitud")
- `source` — lead source tracking (e.g., "infantil", "contacto", "reservar-clase")
- `compact` — reduced padding mode
- `showPhone`, `showLevel` — field visibility toggles

### 8.3 Trust Signals Used

| Trust Signal | Type | Location |
|-------------|------|---------|
| 100% aprobados Cambridge 2024/2025 | Pass rate stat | Sitewide (hero, course pages, exam pages) |
| 150+ reseñas 5 estrellas en Google | Review count | Testimonials, schema, llms.txt |
| Centro Preparador Cambridge Oficial | Credential badge | Sitewide |
| Centro Oficial Linguaskill | Credential badge | Sitewide |
| Great Little People Centre Oficial | Credential badge | Infantil page, about page |
| Partner ESIC Idiomas | Partnership badge | Footer, about page |
| Partner logos row | Visual logos | Footer (Cambridge, Linguaskill, GLP, ESIC) |
| Video testimonials | Student videos | Testimonials page (Sergio, Daniel de la Peña) |
| Google review carousel | 12+ reviews | Testimonials page |
| Grupos máx. 7-10 alumnos | Specificity | Course pages |

### 8.4 Conversion Flow

1. User lands on page (homepage, blog article, or location page)
2. Sees "Clase de Prueba Gratuita" / "Prueba de nivel GRATIS" CTA above fold
3. Clicks → redirected to `/reservar-clase`
4. Fills form: name, email, phone, level, privacy consent
5. Submits → webhook POST to GoHighLevel + GTM event
6. Redirected to `/gracias` — sees 4-step next process + course links
7. Academy contacts within 24 hours (phone/WhatsApp)

**Alternative paths:**
- Direct phone call: `tel:+34604910611`
- WhatsApp: `https://wa.me/34604910611`
- Contact page form with additional fields

---

## 9. PERFORMANCE & SPEED SETUP

### 9.1 Performance Decisions Made

| Decision | Implementation | Impact |
|----------|---------------|--------|
| Static site generation | Astro static output | Zero server-side rendering at runtime |
| Image optimization | Sharp → 4 sizes × 2 formats (WebP + JPEG) | ~80% file size reduction |
| Lazy loading | `loading="lazy"` on all below-fold images | Faster initial paint |
| Hero poster preload | `<link rel="preload" as="image" href="...hero-poster.jpg">` | Faster LCP |
| Font preconnect | `<link rel="preconnect" href="fonts.googleapis.com">` | Faster font loading |
| Vimeo preconnect | `<link rel="preconnect" href="player.vimeo.com">` | Faster hero video |
| Astro islands | `client:load`, `client:visible`, `client:idle` | Minimal JS hydration |
| Component lazy hydration | CookieBanner uses `client:idle` | Deferred non-critical JS |
| HSTS header | `max-age=63072000; includeSubDomains; preload` | Security + HTTPS redirect |
| Consent Mode default denied | Analytics blocked until consent | GDPR + reduced initial scripts |

### 9.2 Analytics & Tracking Stack

| Service | ID | Purpose |
|---------|-----|---------|
| Google Analytics 4 | G-WN5973VY1M | Web analytics |
| Google Ads | AW-11461982741 | Conversion tracking |
| Google Tag Manager | GTM-TDC7CQDD | Tag management |
| Vercel Analytics | (built-in) | Performance monitoring |
| Vercel Speed Insights | (built-in) | Core Web Vitals |

### 9.3 Hosting & Deployment

- **Hosted on:** Vercel
- **Deployment method:** Git push → Vercel auto-build → `npm run build` (Astro build) → `/dist/` output
- **SSL:** Automatic via Vercel + HSTS preload header
- **CDN:** Vercel Edge Network (global)
- **Build command:** `astro build`
- **Output directory:** `dist`
- **Clean URLs:** true (no .html extensions)
- **Trailing slashes:** enforced

---

## 10. LOCAL SEO SIGNALS

### 10.1 NAP Implementation

**Exact NAP used sitewide (from `utils/napData.ts`):**
```
Name: Impulse English Academy La Vaguada
Address: Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid
Phone: +34 604 910 611
Email: info@impulse-english.es
Website: https://impulse-english.es
```

**NAP appears on:**
- Schema markup (every page via Organization @graph)
- Footer (all pages)
- Contact page (full display with map)
- Navbar (phone + WhatsApp icons)
- llms.txt
- Location pages (repeated per neighborhood)
- LeadForm success messages

### 10.2 Location Signals

| Signal | Implementation |
|--------|---------------|
| Location in titles | Yes — "Barrio del Pilar" in title formula suffix |
| Location in meta | Yes — "La Vaguada, Barrio del Pilar" in descriptions |
| Location in first paragraph | Yes — location mentioned in hero/welcome sections |
| Service area stated | Yes — 10 areas in napData.areaServed |
| Maps embed | Yes — Google Maps iframe on contact page |
| 8 location pages | Yes — dedicated page per neighborhood with localized content |
| Metro/bus info | Yes — 3 metro stations, 11 bus lines listed |
| geo.region meta tag | Yes — "ES-MD" on all pages |
| geo.placename meta tag | Yes — "Madrid" on all pages |
| Nearby areas in footer | Yes — 8 neighborhoods linked in footer service areas |

### 10.3 Citation Block (Ready to Submit)

```
Business Name: Impulse English Academy La Vaguada
Address: Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid, Spain
Phone: +34 604 910 611
Email: info@impulse-english.es
Website: https://impulse-english.es
Category: English Language Academy / Language School
Founded: 2022
Price Range: €64 - €79/mes
Opening Hours: Mon 10:00-21:30, Tue 15:30-21:30, Wed 10:00-21:30, Thu 15:30-21:30, Fri 13:30-19:30, Sat-Sun Closed
Credentials: Official Cambridge Preparation Centre, Official Linguaskill Centre, Official Great Little People Centre, Official Partner ESIC Idiomas
Google Reviews: 5/5 stars (150+ reviews)
Google Business Profile: https://share.google/GuRfJ3TjrnIIUhrdk

Description: Academia de inglés en Madrid especializada en preparación de exámenes Cambridge, Linguaskill y clases para todas las edades. Centro oficial Cambridge con 100% de aprobados. Cursos para niños (2-5 años), primaria (6-12), secundaria (13-17), adultos, clases particulares y online. Ubicada en La Vaguada, Barrio del Pilar. Servimos: Barrio del Pilar, La Vaguada, Peñagrande, La Ventilla, La Paz, Plaza Castilla, Tetuán, Cuatro Torres.

Social:
- Instagram: https://www.instagram.com/impulse_english_lavaguada/
- Facebook: https://www.facebook.com/impulseenglishlavaguada/
- TikTok: https://www.tiktok.com/@impulse_english_lavaguada
- X: https://x.com/impulse_vaguada
- LinkedIn: https://www.linkedin.com/company/101859096/
- YouTube: https://www.youtube.com/@Impulse-English
```

---

## 11. EVERYTHING ELSE — ADDITIONAL ELEMENTS

| Element | File Location | What It Does | Why It Was Included |
|---------|--------------|--------------|---------------------|
| CookieBanner | `components/CookieBanner.tsx` | GDPR consent banner (Accept/Reject) | Spanish law (LSSI-CE + RGPD) compliance |
| Consent Mode | `BaseLayout.astro` head | Default analytics=denied, granted on accept | GDPR: no tracking until consent |
| Newsletter CTA | `components/Newsletter.tsx` | Social links + "Solicita información" + "Llámanos" | Engagement, social signals |
| NewsOverlay | `components/NewsOverlay.tsx` | Current announcements overlay on homepage | Freshness, engagement |
| WordPress migration | `scripts/wp-migrate.mjs` | Data migration from WordPress | Site was migrated from WordPress CMS |
| Article migration | `scripts/migrate-articles.ts` | Convert TS data → Astro Content Collections | Migration from static data to CMS-like system |
| Image optimization script | `scripts/optimize-images.mjs` | Batch S3 → responsive images | Build pipeline for image assets |
| Image sitemap generator | `scripts/generate-image-sitemap.mjs` | XML sitemap for Google Image Search | Image SEO |
| SEO System | `seo-system/` (26+ dirs) | 10-agent SEO optimization pipeline | Systematic SEO with brand docs, blueprints |
| Skip to content | `BaseLayout.astro` body | `<a href="#main" class="sr-only">` accessibility link | WCAG accessibility |
| Google Site Verification | `BaseLayout.astro` head | Verification meta tag (placeholder) | Google Search Console ownership |
| prerender.mjs | Root | Pre-rendering helper script | Build optimization |
| Legacy React pages | `pages/` directory (94+ files) | Original React SPA page components | Astro pages import these as client components |
| PAA CSVs | `data/paas/` | People Also Ask opportunity data | Content strategy planning |
| Location docs | `data/location-pages/` | Word docs with location page content | Content source material |

---

## 12. REPLICATION GUIDE

### 12.1 The Exact Steps Taken To Build This Site

1. **WordPress site existed** — original site with blog, basic pages
2. **Astro project initialized** — `npm create astro@latest` with React, Tailwind, sitemap integrations
3. **NAP data centralized** — `utils/napData.ts` created as single source of truth
4. **Schema generators built** — `utils/schemaData.ts` with 9 schema type functions
5. **Title formula created** — `utils/buildPageTitle.ts` with 70-char max and brand hierarchy
6. **BaseLayout built** — Master HTML shell with GTM, GA4, consent mode, schema @graph, font preloads
7. **Core components built** — Navbar, Footer, Hero, LeadForm, SEOHead, FAQSection, etc.
8. **Homepage assembled** — Full-screen hero + 12 content sections
9. **Course pages built** — 6 pages using CoursePageLayout template
10. **Exam pages built** — Cambridge hub + B1/B2/C1 + Linguaskill hub + sub-pages
11. **Location pages built** — 8 neighborhood pages with localized schema + content
12. **WordPress content migrated** — `scripts/wp-migrate.mjs` for content extraction
13. **Blog articles created** — 75+ static pages + 21 Content Collection markdown articles
14. **Image optimization pipeline** — Sharp-based responsive generation + image sitemap
15. **SEO system built** — 10-agent pipeline with brand docs and page blueprints
16. **WordPress redirects added** — 100+ 301 redirects in vercel.json
17. **llms.txt created** — AI reference file with structured business data
18. **robots.txt configured** — AI crawlers allowed, sitemap refs
19. **Legal pages added** — Aviso Legal, Privacy, Cookies (GDPR/LSSI-CE compliance)
20. **Cookie consent implemented** — Consent Mode default denied, banner for acceptance
21. **Vercel deployment configured** — HSTS, clean URLs, trailing slashes, noindex on /gracias
22. **SEO title audit** — Standardized to 55-70 characters across all pages

### 12.2 What To Keep Identical On Every Future Build

1. **NAP centralization pattern** — Single `napData.ts` file imported everywhere
2. **Schema architecture** — `schemaData.ts` with generator functions, @graph in BaseLayout
3. **Title formula** — `{theme} | {Brand} | {Location}` max 70 chars
4. **BaseLayout structure** — GTM + GA4 + Consent Mode + Schema + Vercel Analytics
5. **LeadForm pattern** — Webhook + GTM dataLayer + source tracking + redirect to /gracias
6. **Image pipeline** — S3 source → Sharp → 4 sizes × 2 formats → image sitemap
7. **llms.txt format** — Structured markdown with business overview, services, locations, contact
8. **robots.txt format** — AI crawlers allowed, sitemap refs, llms.txt ref, disallow utility pages
9. **FAQ pattern** — FAQSection component + FAQPage schema on every page with Q&A
10. **Location page template** — Localized schema with Service catalog + area-specific FAQs
11. **Blog article template (PAAArticlePage)** — Direct answer + context + CTA + FAQ + related
12. **Content Collection schema** — 18 frontmatter fields for article data
13. **Internal link resolver** — `data/internal-links.ts` reference name → URL mapping
14. **Category config** — `data/category-config.ts` with hub paths, colors, lead form sources
15. **WordPress redirect pattern** — Comprehensive 301s for all old URLs
16. **Legal compliance** — Cookie banner, consent mode, privacy policy, aviso legal
17. **Trailing slash enforcement** — Astro config + Vercel config + canonical URL logic

### 12.3 What Changes Per Niche / Client

| Element | What Changes | How To Adapt It |
|---------|-------------|-----------------|
| Domain | New domain | Update `astro.config.mjs` site field, napData.ts website |
| Business name | New brand | Update `napData.ts` name, shortName, legalName |
| Address & geo | New location | Update `napData.ts` all address fields + geo coords |
| Phone & email | New contacts | Update `napData.ts` phone, email, whatsapp |
| Opening hours | New schedule | Update `napData.ts` openingHours array |
| Social profiles | New accounts | Update `napData.ts` social + sameAs arrays |
| Colour palette | Client brand | Update `tailwind.config.ts` accent-blue, brand-red |
| Logo | New logo | Update `napData.ts` logo + image URLs |
| Areas served | New locations | Update `napData.ts` areaServed + create new location pages |
| Courses | New services | Create new course pages with CoursePageLayout |
| Credentials | New certifications | Update `napData.ts` credentials array |
| Aggregate rating | New reviews | Update `napData.ts` aggregateRating |
| Analytics IDs | New GA4/GTM/Ads | Update BaseLayout.astro script tags |
| Webhook URL | New CRM | Update LeadForm.tsx webhookUrl default |
| H1s / content | New keywords | Rewrite page content for new niche |
| Blog articles | New topics | Create new Content Collection articles |
| llms.txt | New niche content | Rewrite with new business info |
| vercel.json redirects | Old site URLs | Add redirects for previous site structure |
| WordPress migration | Not needed if new build | Remove scripts/wp-migrate.mjs |
| Pricing in schema | New prices | Update schemaData.ts Service offers |
| Title formula brand | New brand name | Update buildPageTitle.ts constants |

### 12.4 Time Estimate Per Phase

| Phase | Estimated Time |
|-------|---------------|
| Project setup & file structure (Astro + config) | 30 mins |
| NAP data + schema generators + title formula | 45 mins |
| BaseLayout (GTM, GA4, consent, schema, fonts) | 60 mins |
| Core components (Navbar, Footer, Hero, LeadForm, FAQ) | 3 hours |
| Homepage assembly (12 sections) | 2 hours |
| Course pages (6 × template) | 3 hours |
| Exam/certification pages (4-6 pages) | 2 hours |
| Location pages (8 × template with localized schema) | 4 hours |
| Blog article system (PAAArticlePage + Content Collections) | 3 hours |
| Blog content creation (75+ articles) | 40+ hours |
| Image optimization pipeline | 1 hour |
| SEO files (robots.txt, llms.txt, sitemaps) | 30 mins |
| Legal pages + GDPR compliance | 1 hour |
| WordPress redirects (if migration) | 1 hour |
| QA & testing | 2 hours |
| **Total (excluding blog content)** | **~24 hours** |
| **Total (including blog content)** | **~64 hours** |

---

## 13. KNOWN ISSUES & IMPROVEMENTS

### 13.1 Issues Found During Audit

1. **Homepage title tag is excessively long** — Full title is 175+ characters: "Impulse English Academy | academia de inglés en Barrio del Pilar, Madrid. Con profesores nativos especializados en exámenes Cambridge, ofrecemos cursos para niños, infantiles, adolescentes y adultos". Uses `fullTitle: true` to bypass the 70-char formula. Should be shortened.

2. **CLAUDE.md says "React + TypeScript + Vite"** — The project is actually **Astro + React + Tailwind**. Documentation is outdated.

3. **DEPRECATED: `/pages/` React directory** — Every page exists as both a React component in `pages/` AND an Astro file in `src/pages/`. The `/pages/` directory is DEPRECATED and must NOT be used for routing. All routing uses `src/pages/*.astro` exclusively. The React `.tsx` files are imported as `client:load` components — they are NOT route endpoints. Future builds must NEVER create routes in `/pages/` to prevent "Double Implementation" errors.

4. **Google Site Verification placeholder** — `<meta name="google-site-verification" content="PLACEHOLDER">` in BaseLayout.astro — needs real verification code.

5. **Favicon uses JPEG** — All favicon/apple-touch-icon sizes point to the same S3 JPEG URL. Should use proper ICO/PNG favicons at correct sizes.

6. **RESOLVED: Location page URLs** — Old `/ubicaciones/*` pattern has been redirected to canonical `/academia-ingles-*` pattern via vercel.json 301s. The llms.txt and all documentation now use the canonical URLs.

7. **Some location pages lack specific transit info** — Not all 8 location pages have the same depth of "how to get there" content.

8. **No sitemap.xml for blog articles** — The Astro sitemap plugin auto-generates `sitemap.xml`, but Content Collection articles may need verification that all slugs are included.

9. **LeadForm `showAge` prop is unused** — Parameter `_showAge` is defined but prefixed with underscore (intentionally unused).

10. **MASTER TEMPLATE FIX: Dynamic `validFrom`** — Replace `validFrom: "2025-01-01"` in `schemaData.ts` with `` validFrom: `${new Date().getFullYear()}-01-01` `` to auto-update yearly. See Section 5.2 for details.

### 13.2 Recommended Improvements For Future Builds

1. **Proper favicon set** — Generate ICO (16×16, 32×32), PNG (192×192, 512×512), and Apple Touch Icon (180×180) from the logo
2. **Shorten homepage title** — Use the buildPageTitle formula consistently, even for homepage
3. **MANDATORY: No routing in `/pages/`** — All future builds must use `src/pages/*.astro` exclusively for routing. The `/pages/` React directory is deprecated. Do NOT create new route files there. React components should be imported into Astro pages as `client:load` islands only
4. **Add Web App Manifest** — `manifest.json` for PWA capabilities
5. **RESOLVED: llms.txt URLs** — All location URLs in documentation now use canonical `/academia-ingles-*` pattern
6. **Automate price/date updates** — Use environment variables or a config file for year-specific content (2025/2026)
7. **Add breadcrumb schema to all pages** — Currently only some pages pass breadcrumb schema
8. **Core Web Vitals monitoring** — Set up alerts via Vercel Speed Insights for LCP/CLS/INP regressions
9. **Image alt text audit** — Ensure all images have Spanish alt text with keyword targeting
10. **Consider RSS feed** — For blog article syndication and social media automation

---

*Documentation generated by Claude — 2026-03-21*
*Reference this document before starting every new EMD micro-site build*
