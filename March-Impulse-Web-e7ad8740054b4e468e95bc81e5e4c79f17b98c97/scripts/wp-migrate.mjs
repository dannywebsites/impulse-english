#!/usr/bin/env node
/**
 * WordPress Migration Script
 *
 * Reads pre-rendered HTML from /dist/ and pushes it to WordPress via REST API.
 *
 * Prerequisites:
 *   1. Run `npm run build` first to generate /dist/
 *   2. Create .env file with WP_SITE_URL, WP_USERNAME, WP_APP_PASSWORD
 *   3. Install Rank Math SEO plugin on WordPress
 *   4. Set permalinks to /%postname%/
 *
 * Usage:
 *   node scripts/wp-migrate.mjs                  # Migrate all pages
 *   node scripts/wp-migrate.mjs --dry-run        # Preview without creating
 *   node scripts/wp-migrate.mjs --only /contacto  # Migrate single page
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { load } from 'cheerio';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const distDir = join(projectRoot, 'dist');

// ============================================================
// CONFIGURATION
// ============================================================

// Load .env manually (avoid dotenv dependency)
function loadEnv() {
  const envPath = join(projectRoot, '.env');
  if (!existsSync(envPath)) {
    console.error('ERROR: .env file not found at', envPath);
    console.error('Create it with: WP_SITE_URL, WP_USERNAME, WP_APP_PASSWORD');
    process.exit(1);
  }
  const envContent = readFileSync(envPath, 'utf-8');
  const env = {};
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    env[key] = value;
  }
  return env;
}

const env = loadEnv();
const WP_SITE_URL = env.WP_SITE_URL?.replace(/\/$/, '');
const WP_USERNAME = env.WP_USERNAME;
const WP_APP_PASSWORD = env.WP_APP_PASSWORD;

if (!WP_SITE_URL || !WP_USERNAME || !WP_APP_PASSWORD) {
  console.error('ERROR: Missing required .env variables');
  console.error('Need: WP_SITE_URL, WP_USERNAME, WP_APP_PASSWORD');
  process.exit(1);
}

const AUTH_HEADER = 'Basic ' + Buffer.from(`${WP_USERNAME}:${WP_APP_PASSWORD}`).toString('base64');

// CLI args
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const ONLY_ROUTE = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;

// ============================================================
// ROUTE DEFINITIONS
// ============================================================

// All routes from prerender.mjs — categorized by WordPress content type
const ROUTE_MAP = {
  // Pages that need parent pages created first
  parents: [
    { slug: 'cursos-ingles', title: 'Cursos de Inglés' },
    { slug: 'examenes-cambridge', title: 'Exámenes Cambridge', hasContent: true },
    { slug: 'linguaskill', title: 'Linguaskill', hasContent: true },
    { slug: 'academias-ingles-madrid', title: 'Academias de Inglés en Madrid', hasContent: true },
  ],

  // Standalone pages (no parent)
  pages: [
    { route: '/', slug: 'home', isFrontPage: true },
    { route: '/sobre-nosotros', slug: 'sobre-nosotros' },
    { route: '/metodologia', slug: 'metodologia' },
    { route: '/preguntas-frecuentes', slug: 'preguntas-frecuentes' },
    { route: '/testimonios', slug: 'testimonios' },
    { route: '/blog', slug: 'blog' },
    { route: '/contacto', slug: 'contacto' },
    { route: '/reservar-clase', slug: 'reservar-clase' },
    { route: '/gracias', slug: 'gracias' },
    { route: '/aprende-ingles', slug: 'aprende-ingles' },
    { route: '/preparacion-b2-first-madrid', slug: 'preparacion-b2-first-madrid' },
    { route: '/aviso-legal', slug: 'aviso-legal' },
    { route: '/politica-cookies', slug: 'politica-cookies' },
    { route: '/politica-privacidad', slug: 'politica-privacidad' },
  ],

  // Child pages (need parent ID)
  childPages: [
    // Courses
    { route: '/cursos-ingles/infantil', slug: 'infantil', parent: 'cursos-ingles' },
    { route: '/cursos-ingles/primaria', slug: 'primaria', parent: 'cursos-ingles' },
    { route: '/cursos-ingles/secundaria', slug: 'secundaria', parent: 'cursos-ingles' },
    { route: '/cursos-ingles/adultos', slug: 'adultos', parent: 'cursos-ingles' },
    { route: '/cursos-ingles/particulares', slug: 'particulares', parent: 'cursos-ingles' },
    { route: '/cursos-ingles/online', slug: 'online', parent: 'cursos-ingles' },
    // Cambridge exams
    { route: '/examenes-cambridge/b1-preliminary', slug: 'b1-preliminary', parent: 'examenes-cambridge' },
    { route: '/examenes-cambridge/b2-first', slug: 'b2-first', parent: 'examenes-cambridge' },
    { route: '/examenes-cambridge/c1-advanced', slug: 'c1-advanced', parent: 'examenes-cambridge' },
    { route: '/examenes-cambridge/fechas-precios', slug: 'fechas-precios', parent: 'examenes-cambridge' },
    { route: '/examenes-cambridge/centros-madrid', slug: 'centros-madrid', parent: 'examenes-cambridge' },
    // Linguaskill
    { route: '/linguaskill/curso-intensivo', slug: 'curso-intensivo', parent: 'linguaskill' },
    { route: '/linguaskill/precios-fechas', slug: 'precios-fechas', parent: 'linguaskill' },
    { route: '/linguaskill/ejemplo-examen', slug: 'ejemplo-examen', parent: 'linguaskill' },
    // Madrid city pages
    { route: '/academias-ingles-madrid/adultos', slug: 'adultos', parent: 'academias-ingles-madrid' },
    { route: '/academias-ingles-madrid/certificaciones', slug: 'certificaciones', parent: 'academias-ingles-madrid' },
    { route: '/academias-ingles-madrid/por-barrios', slug: 'por-barrios', parent: 'academias-ingles-madrid' },
    { route: '/academias-ingles-madrid/ninos', slug: 'ninos', parent: 'academias-ingles-madrid' },
  ],

  // Location pages (flat URLs, no parent)
  locationPages: [
    { route: '/academia-ingles-barrio-del-pilar', slug: 'academia-ingles-barrio-del-pilar' },
    { route: '/academia-ingles-la-vaguada', slug: 'academia-ingles-la-vaguada' },
    { route: '/academia-ingles-penagrande', slug: 'academia-ingles-penagrande' },
    { route: '/academia-ingles-la-ventilla', slug: 'academia-ingles-la-ventilla' },
    { route: '/academia-ingles-la-paz', slug: 'academia-ingles-la-paz' },
    { route: '/academia-ingles-plaza-castilla', slug: 'academia-ingles-plaza-castilla' },
    { route: '/academia-ingles-tetuan', slug: 'academia-ingles-tetuan' },
    { route: '/academia-ingles-cuatro-torres', slug: 'academia-ingles-cuatro-torres' },
  ],

  // Blog posts (will be created as WordPress posts with /blog/ prefix)
  blogPosts: [
    '/blog/cambridge-b1-guia',
    '/blog/cambridge-b2-beneficios',
    '/blog/ejercicios-b2-cambridge',
    '/blog/escala-cambridge',
    '/blog/examenes-cambridge-guia',
    '/blog/examen-cae-cambridge',
    '/blog/libros-cambridge-recursos',
    '/blog/pdfs-cambridge-advanced',
    '/blog/precio-cambridge-c1-madrid',
    '/blog/registro-cambridge',
    '/blog/centros-linguaskill',
    '/blog/certificado-linguaskill',
    '/blog/linguaskill-online-casa',
    '/blog/linguaskill-vs-aptis',
    '/blog/opiniones-linguaskill',
    '/blog/precio-linguaskill-online',
    '/blog/precio-linguaskill-reservar',
    '/blog/recursos-pdf-linguaskill',
    '/blog/registro-linguaskill',
    '/blog/mejores-academias-madrid',
    '/blog/validez-certificado-b2-cambridge',
    '/blog/nota-aprobar-b2-first',
    '/blog/es-dificil-b2-first',
    '/blog/preparar-b2-first-3-meses',
    '/blog/cuantas-veces-b2-first',
    '/blog/tiempo-preparacion-b2-first',
    '/blog/tiempo-b2-a-c1',
    '/blog/es-dificil-c1-advanced',
    '/blog/trabajos-piden-c1-ingles',
    '/blog/c1-advanced-caduca',
    '/blog/diferencia-b2-c1',
    '/blog/vale-pena-c1-espana',
    '/blog/linguaskill-vs-cambridge-dificultad',
    '/blog/linguaskill-casa-fiable',
    '/blog/universidades-aceptan-linguaskill',
    '/blog/linguaskill-reconocimiento-internacional',
    '/blog/linguaskill-oposiciones-validez',
    '/blog/b1-suficiente-trabajar',
    '/blog/precio-b1-cambridge',
    '/blog/tiempo-preparar-b1-cero',
    '/blog/b1-universidad-espana',
    '/blog/cambridge-vs-linguaskill-diferencias',
    '/blog/cambridge-vs-ielts-espana',
    '/blog/academia-vs-profesor-particular',
    '/blog/ingles-presencial-vs-online',
    '/blog/b1-vs-b2-que-nivel-necesito',
    '/blog/cuanto-tiempo-aprender-ingles',
    '/blog/entiendo-ingles-no-hablo',
    '/blog/verguenza-hablar-ingles',
    '/blog/perder-miedo-hablar-ingles',
    '/blog/clases-particulares-vs-academia',
    '/blog/ingles-online-vs-presencial',
    '/blog/por-que-no-avanzo-ingles',
    '/blog/mejorar-listening-ingles',
    '/blog/mejorar-speaking-ingles',
    '/blog/pensar-ingles-no-traducir',
    '/blog/no-entiendo-ingles-hablado',
    '/blog/ninos-aprender-ingles-pequenos',
    '/blog/edad-empezar-ingles-bebes',
    '/blog/ninos-confusion-dos-idiomas',
    '/blog/ingles-jugando-funciona',
    '/blog/mejor-metodo-ingles-ninos',
    '/blog/great-little-people-metodologia',
    '/blog/hijo-preparar-cambridge',
    '/blog/motivar-hijo-ingles',
    '/blog/hijo-no-avanza-ingles',
    '/blog/ingles-colegio-suficiente',
    '/blog/nivel-ingles-empresas',
    '/blog/ingles-entrevistas-trabajo',
  ],
};

// ============================================================
// HTML EXTRACTION
// ============================================================

/**
 * Read pre-rendered HTML and extract content, meta, and schema.
 */
function extractPageData(route) {
  let htmlPath;
  if (route === '/') {
    htmlPath = join(distDir, 'index.html');
  } else if (route === '/404') {
    htmlPath = join(distDir, '404.html');
  } else {
    htmlPath = join(distDir, route, 'index.html');
  }

  if (!existsSync(htmlPath)) {
    console.warn(`  WARNING: No HTML found for ${route} at ${htmlPath}`);
    return null;
  }

  const html = readFileSync(htmlPath, 'utf-8');
  const $ = load(html);

  // Extract content from #root div
  const rootContent = $('#root').html() || '';

  // Extract SEO metadata
  const title = $('title').text() || '';
  const metaDescription = $('meta[name="description"]').attr('content') || '';
  const canonical = $('link[rel="canonical"]').attr('href') || '';
  const ogTitle = $('meta[property="og:title"]').attr('content') || title;
  const ogDescription = $('meta[property="og:description"]').attr('content') || metaDescription;
  const ogImage = $('meta[property="og:image"]').attr('content') || '';

  // Extract H1 for post title
  const h1 = $('#root h1').first().text() || title;

  // Extract JSON-LD schemas
  const schemas = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const schemaText = $(el).html();
      if (schemaText) schemas.push(JSON.parse(schemaText));
    } catch (e) {
      // Skip malformed JSON-LD
    }
  });

  // Clean the content: remove React-specific attributes
  let cleanContent = rootContent
    .replace(/\s*data-reactroot="[^"]*"/g, '')
    .replace(/\s*data-reactroot/g, '');

  return {
    route,
    title: h1,
    seoTitle: title,
    metaDescription,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    content: cleanContent,
    schemas,
  };
}

// ============================================================
// WORDPRESS REST API HELPERS
// ============================================================

const API_BASE = `${WP_SITE_URL}/wp-json/wp/v2`;

async function wpRequest(endpoint, method = 'GET', body = null) {
  const url = `${API_BASE}${endpoint}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: AUTH_HEADER,
    },
  };
  if (body) options.body = JSON.stringify(body);

  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    const errorMsg = data.message || JSON.stringify(data);
    throw new Error(`WP API ${method} ${endpoint}: ${response.status} - ${errorMsg}`);
  }

  return data;
}

/** Create a WordPress page */
async function createPage(pageData, parentId = 0) {
  const body = {
    title: pageData.title,
    content: pageData.content,
    slug: pageData.slug,
    status: 'publish',
    parent: parentId,
    meta: {},
  };

  // Add Rank Math meta if available
  if (pageData.seoTitle) body.meta.rank_math_title = pageData.seoTitle;
  if (pageData.metaDescription) body.meta.rank_math_description = pageData.metaDescription;
  if (pageData.canonical) body.meta.rank_math_canonical_url = pageData.canonical;
  if (pageData.ogTitle) body.meta.rank_math_facebook_title = pageData.ogTitle;
  if (pageData.ogDescription) body.meta.rank_math_facebook_description = pageData.ogDescription;
  if (pageData.ogImage) body.meta.rank_math_facebook_image = pageData.ogImage;

  return wpRequest('/pages', 'POST', body);
}

/** Create a WordPress post */
async function createPost(postData) {
  const body = {
    title: postData.title,
    content: postData.content,
    slug: postData.slug,
    status: 'publish',
    meta: {},
  };

  if (postData.seoTitle) body.meta.rank_math_title = postData.seoTitle;
  if (postData.metaDescription) body.meta.rank_math_description = postData.metaDescription;
  if (postData.canonical) body.meta.rank_math_canonical_url = postData.canonical;
  if (postData.ogTitle) body.meta.rank_math_facebook_title = postData.ogTitle;
  if (postData.ogDescription) body.meta.rank_math_facebook_description = postData.ogDescription;
  if (postData.ogImage) body.meta.rank_math_facebook_image = postData.ogImage;

  return wpRequest('/posts', 'POST', body);
}

/** Check if a page/post with slug already exists */
async function findBySlug(type, slug) {
  try {
    const results = await wpRequest(`/${type}?slug=${slug}&status=publish,draft`);
    return results.length > 0 ? results[0] : null;
  } catch {
    return null;
  }
}

/** Test API connection */
async function testConnection() {
  try {
    const user = await wpRequest('/../wp/v2/users/me');
    console.log(`Connected as: ${user.name} (${user.slug})`);
    return true;
  } catch (e) {
    // Try alternative endpoint
    try {
      const pages = await wpRequest('/pages?per_page=1');
      console.log(`Connected successfully. Found ${pages.length} existing page(s).`);
      return true;
    } catch (e2) {
      console.error('ERROR: Cannot connect to WordPress REST API');
      console.error(e2.message);
      return false;
    }
  }
}

// ============================================================
// MIGRATION LOGIC
// ============================================================

async function migrate() {
  console.log('='.repeat(60));
  console.log('WordPress Migration Script');
  console.log('='.repeat(60));
  console.log(`Target: ${WP_SITE_URL}`);
  console.log(`User: ${WP_USERNAME}`);
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN (no changes)' : 'LIVE'}`);
  if (ONLY_ROUTE) console.log(`Only: ${ONLY_ROUTE}`);
  console.log('');

  // Verify dist/ exists
  if (!existsSync(distDir)) {
    console.error('ERROR: dist/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Test API connection
  if (!DRY_RUN) {
    console.log('Testing WordPress API connection...');
    const connected = await testConnection();
    if (!connected) process.exit(1);
    console.log('');
  }

  const stats = { pages: 0, posts: 0, errors: 0, skipped: 0 };
  const parentIds = {}; // slug → WP page ID

  // ---- STEP 1: Create parent pages ----
  if (!ONLY_ROUTE) {
    console.log('--- Step 1: Creating parent pages ---');
    for (const parent of ROUTE_MAP.parents) {
      try {
        const existing = !DRY_RUN ? await findBySlug('pages', parent.slug) : null;
        if (existing) {
          console.log(`  SKIP (exists): /${parent.slug} [ID: ${existing.id}]`);
          parentIds[parent.slug] = existing.id;
          stats.skipped++;
          continue;
        }

        let pageData;
        if (parent.hasContent) {
          // These parent slugs also have their own content
          const route = '/' + parent.slug;
          pageData = extractPageData(route);
          if (!pageData) {
            // Create empty parent page
            pageData = { title: parent.title, content: '', seoTitle: parent.title, metaDescription: '' };
          }
        } else {
          pageData = { title: parent.title, content: '', seoTitle: parent.title, metaDescription: '' };
        }

        if (DRY_RUN) {
          console.log(`  DRY RUN: Would create parent page /${parent.slug}`);
          parentIds[parent.slug] = 0;
        } else {
          const result = await createPage({ ...pageData, slug: parent.slug }, 0);
          parentIds[parent.slug] = result.id;
          console.log(`  CREATED: /${parent.slug} [ID: ${result.id}]`);
        }
        stats.pages++;
      } catch (e) {
        console.error(`  ERROR: /${parent.slug} - ${e.message}`);
        stats.errors++;
      }
    }
    console.log('');
  }

  // ---- STEP 2: Create standalone pages ----
  console.log('--- Step 2: Creating standalone pages ---');
  const pagesToCreate = ONLY_ROUTE
    ? ROUTE_MAP.pages.filter(p => p.route === ONLY_ROUTE)
    : ROUTE_MAP.pages;

  for (const page of pagesToCreate) {
    try {
      const existing = !DRY_RUN ? await findBySlug('pages', page.slug) : null;
      if (existing) {
        console.log(`  SKIP (exists): ${page.route} [ID: ${existing.id}]`);
        stats.skipped++;
        continue;
      }

      const data = extractPageData(page.route);
      if (!data) {
        stats.errors++;
        continue;
      }

      if (DRY_RUN) {
        console.log(`  DRY RUN: Would create page ${page.route} — "${data.seoTitle?.slice(0, 50)}..."`);
      } else {
        const result = await createPage({ ...data, slug: page.slug }, 0);
        console.log(`  CREATED: ${page.route} [ID: ${result.id}]`);

        // Set as front page if needed
        if (page.isFrontPage) {
          console.log(`  NOTE: Set page ID ${result.id} as static front page in Settings → Reading`);
        }
      }
      stats.pages++;
    } catch (e) {
      console.error(`  ERROR: ${page.route} - ${e.message}`);
      stats.errors++;
    }
  }
  console.log('');

  // ---- STEP 3: Create child pages ----
  if (!ONLY_ROUTE || ROUTE_MAP.childPages.some(p => p.route === ONLY_ROUTE)) {
    console.log('--- Step 3: Creating child pages ---');
    const childPages = ONLY_ROUTE
      ? ROUTE_MAP.childPages.filter(p => p.route === ONLY_ROUTE)
      : ROUTE_MAP.childPages;

    for (const child of childPages) {
      try {
        const existing = !DRY_RUN ? await findBySlug('pages', child.slug) : null;
        if (existing) {
          console.log(`  SKIP (exists): ${child.route} [ID: ${existing.id}]`);
          stats.skipped++;
          continue;
        }

        const data = extractPageData(child.route);
        if (!data) {
          stats.errors++;
          continue;
        }

        const parentId = parentIds[child.parent] || 0;

        if (DRY_RUN) {
          console.log(`  DRY RUN: Would create child page ${child.route} (parent: ${child.parent})`);
        } else {
          const result = await createPage({ ...data, slug: child.slug }, parentId);
          console.log(`  CREATED: ${child.route} [ID: ${result.id}, parent: ${parentId}]`);
        }
        stats.pages++;
      } catch (e) {
        console.error(`  ERROR: ${child.route} - ${e.message}`);
        stats.errors++;
      }
    }
    console.log('');
  }

  // ---- STEP 4: Create location pages ----
  if (!ONLY_ROUTE || ROUTE_MAP.locationPages.some(p => p.route === ONLY_ROUTE)) {
    console.log('--- Step 4: Creating location pages ---');
    const locationPages = ONLY_ROUTE
      ? ROUTE_MAP.locationPages.filter(p => p.route === ONLY_ROUTE)
      : ROUTE_MAP.locationPages;

    for (const loc of locationPages) {
      try {
        const existing = !DRY_RUN ? await findBySlug('pages', loc.slug) : null;
        if (existing) {
          console.log(`  SKIP (exists): ${loc.route} [ID: ${existing.id}]`);
          stats.skipped++;
          continue;
        }

        const data = extractPageData(loc.route);
        if (!data) {
          stats.errors++;
          continue;
        }

        if (DRY_RUN) {
          console.log(`  DRY RUN: Would create location page ${loc.route}`);
        } else {
          const result = await createPage({ ...data, slug: loc.slug }, 0);
          console.log(`  CREATED: ${loc.route} [ID: ${result.id}]`);
        }
        stats.pages++;
      } catch (e) {
        console.error(`  ERROR: ${loc.route} - ${e.message}`);
        stats.errors++;
      }
    }
    console.log('');
  }

  // ---- STEP 5: Create blog posts ----
  if (!ONLY_ROUTE || ROUTE_MAP.blogPosts.some(r => r === ONLY_ROUTE)) {
    console.log('--- Step 5: Creating blog posts ---');
    const blogPosts = ONLY_ROUTE
      ? ROUTE_MAP.blogPosts.filter(r => r === ONLY_ROUTE)
      : ROUTE_MAP.blogPosts;

    for (const route of blogPosts) {
      const slug = route.replace('/blog/', '');
      try {
        const existing = !DRY_RUN ? await findBySlug('posts', slug) : null;
        if (existing) {
          console.log(`  SKIP (exists): ${route} [ID: ${existing.id}]`);
          stats.skipped++;
          continue;
        }

        const data = extractPageData(route);
        if (!data) {
          stats.errors++;
          continue;
        }

        if (DRY_RUN) {
          console.log(`  DRY RUN: Would create post ${route} — "${data.seoTitle?.slice(0, 50)}..."`);
        } else {
          const result = await createPost({ ...data, slug });
          console.log(`  CREATED: ${route} [ID: ${result.id}]`);
        }
        stats.posts++;
      } catch (e) {
        console.error(`  ERROR: ${route} - ${e.message}`);
        stats.errors++;
      }
    }
    console.log('');
  }

  // ---- SUMMARY ----
  console.log('='.repeat(60));
  console.log('Migration Summary');
  console.log('='.repeat(60));
  console.log(`  Pages created: ${stats.pages}`);
  console.log(`  Posts created: ${stats.posts}`);
  console.log(`  Skipped (existing): ${stats.skipped}`);
  console.log(`  Errors: ${stats.errors}`);
  console.log(`  Total: ${stats.pages + stats.posts + stats.skipped + stats.errors}`);
  console.log('');

  if (stats.errors > 0) {
    console.log('WARNING: Some items failed. Review errors above and re-run with --only to retry.');
  }

  if (!DRY_RUN && stats.pages > 0) {
    console.log('NEXT STEPS:');
    console.log('  1. Set the homepage as static front page in Settings → Reading');
    console.log('  2. Import redirects into the Redirection plugin');
    console.log('  3. Verify URLs: curl each route and check HTTP 200');
    console.log('  4. Validate schema with Google Rich Results Test');
    console.log('  5. Test mobile rendering on 3+ device sizes');
  }
}

// ============================================================
// REDIRECT EXPORT (for Redirection plugin import)
// ============================================================

function exportRedirects() {
  console.log('\n--- Redirects for WordPress Redirection Plugin (CSV) ---\n');
  console.log('"source","target","type"');

  const redirects = [
    ['/exam-impulse', '/reservar-clase'],
    ['/exam-impulse/', '/reservar-clase'],
    ['/blogs-impulse', '/blog'],
    ['/blogs-impulse/', '/blog'],
    ['/ingles-la-vaguada/infantil', '/cursos-ingles/infantil'],
    ['/ingles-la-vaguada/primaria', '/cursos-ingles/primaria'],
    ['/ingles-la-vaguada/secundaria', '/cursos-ingles/secundaria'],
    ['/ingles-la-vaguada/adultos', '/cursos-ingles/adultos'],
    ['/ingles-la-vaguada/particulares', '/cursos-ingles/particulares'],
    ['/examenes-cambridge/linguaskill', '/linguaskill'],
    ['/examenes-cambridge/guia-completa', '/examenes-cambridge'],
    ['/examenes-cambridge/fechas', '/examenes-cambridge/fechas-precios'],
    ['/examenes-cambridge/c1-advanced-guia', '/examenes-cambridge/c1-advanced'],
    ['/examenes-cambridge/libros-recursos', '/blog/libros-cambridge-recursos'],
    ['/examenes-cambridge/b2-beneficios', '/blog/cambridge-b2-beneficios'],
    ['/examenes-cambridge/b1-guia', '/blog/cambridge-b1-guia'],
    ['/examenes-cambridge/precio-c1', '/blog/precio-cambridge-c1-madrid'],
    ['/examenes-cambridge/registro', '/blog/registro-cambridge'],
    ['/examenes-cambridge/escala', '/blog/escala-cambridge'],
    ['/examenes-cambridge/ejercicios-b2', '/blog/ejercicios-b2-cambridge'],
    ['/examenes-cambridge/pdfs-advanced', '/blog/pdfs-cambridge-advanced'],
    ['/examenes-cambridge/cae', '/blog/examen-cae-cambridge'],
    ['/linguaskill/precios-sedes', '/linguaskill/precios-fechas'],
    ['/linguaskill/precio-reservar', '/blog/precio-linguaskill-reservar'],
    ['/linguaskill/online-desde-casa', '/blog/linguaskill-online-casa'],
    ['/linguaskill/centros', '/blog/centros-linguaskill'],
    ['/linguaskill/opiniones', '/blog/opiniones-linguaskill'],
    ['/linguaskill/vs-aptis', '/blog/linguaskill-vs-aptis'],
    ['/linguaskill/registro', '/blog/registro-linguaskill'],
    ['/linguaskill/certificado-validez', '/blog/certificado-linguaskill'],
    ['/linguaskill/recursos-pdf', '/blog/recursos-pdf-linguaskill'],
    ['/linguaskill/precio-online', '/blog/precio-linguaskill-online'],
  ];

  redirects.forEach(([source, target]) => {
    console.log(`"${source}","${target}","301"`);
  });

  console.log('\nCopy this CSV and import via Redirection plugin → Import/Export');
}

// ============================================================
// RUN
// ============================================================

if (args.includes('--redirects')) {
  exportRedirects();
} else {
  migrate().catch((err) => {
    console.error('Migration failed:', err);
    process.exit(1);
  });
}
