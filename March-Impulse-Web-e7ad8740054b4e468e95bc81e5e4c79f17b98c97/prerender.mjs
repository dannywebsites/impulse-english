/**
 * Pre-rendering script for Impulse English Academy
 * Generates static HTML for all routes so search engines can crawl the content.
 *
 * Usage: node prerender.mjs (run after `vite build`)
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import {
  writeFileSync,
  mkdirSync,
  existsSync,
  statSync,
  createReadStream,
} from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, 'dist');

// Every route defined in App.tsx + the 404 page
const routes = [
  '/',
  // Cursos
  '/cursos-ingles/infantil',
  '/cursos-ingles/primaria',
  '/cursos-ingles/secundaria',
  '/cursos-ingles/adultos',
  '/cursos-ingles/particulares',
  '/cursos-ingles/online',
  // Cambridge Exams (Consolidated Hub)
  '/examenes-cambridge',
  '/examenes-cambridge/b1-preliminary',
  '/examenes-cambridge/b2-first',
  '/examenes-cambridge/c1-advanced',
  '/examenes-cambridge/fechas-precios',
  '/examenes-cambridge/centros-madrid',
  // Linguaskill (Consolidated Hub)
  '/linguaskill',
  '/linguaskill/curso-intensivo',
  '/linguaskill/precios-fechas',
  '/linguaskill/ejemplo-examen',
  // About / Info
  '/sobre-nosotros',
  '/metodologia',
  '/preguntas-frecuentes',
  '/testimonios',
  '/blog',
  // Madrid City-Wide Pages
  '/academias-ingles-madrid',
  '/academias-ingles-madrid/adultos',
  '/academias-ingles-madrid/certificaciones',
  '/academias-ingles-madrid/por-barrios',
  '/academias-ingles-madrid/ninos',
  // Location Pages (Local SEO Focus)
  '/academia-ingles-barrio-del-pilar',
  '/academia-ingles-la-vaguada',
  '/academia-ingles-penagrande',
  '/academia-ingles-la-ventilla',
  '/academia-ingles-la-paz',
  '/academia-ingles-plaza-castilla',
  '/academia-ingles-tetuan',
  '/academia-ingles-cuatro-torres',
  // Blog Spoke Pages - Cambridge
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
  // Blog Spoke Pages - Linguaskill
  '/blog/centros-linguaskill',
  '/blog/certificado-linguaskill',
  '/blog/linguaskill-online-casa',
  '/blog/linguaskill-vs-aptis',
  '/blog/opiniones-linguaskill',
  '/blog/precio-linguaskill-online',
  '/blog/precio-linguaskill-reservar',
  '/blog/recursos-pdf-linguaskill',
  '/blog/registro-linguaskill',
  // New SEO Pages
  '/preparacion-b2-first-madrid',
  '/blog/mejores-academias-madrid',
  // PAA Blog Pages - Cambridge B2 First
  '/blog/validez-certificado-b2-cambridge',
  '/blog/nota-aprobar-b2-first',
  '/blog/es-dificil-b2-first',
  '/blog/preparar-b2-first-3-meses',
  '/blog/cuantas-veces-b2-first',
  '/blog/tiempo-preparacion-b2-first',
  // PAA Blog Pages - Cambridge C1 Advanced
  '/blog/tiempo-b2-a-c1',
  '/blog/es-dificil-c1-advanced',
  '/blog/trabajos-piden-c1-ingles',
  '/blog/c1-advanced-caduca',
  '/blog/diferencia-b2-c1',
  '/blog/vale-pena-c1-espana',
  // PAA Blog Pages - Linguaskill
  '/blog/linguaskill-vs-cambridge-dificultad',
  '/blog/linguaskill-casa-fiable',
  '/blog/universidades-aceptan-linguaskill',
  '/blog/linguaskill-reconocimiento-internacional',
  '/blog/linguaskill-oposiciones-validez',
  // PAA Blog Pages - Cambridge B1
  '/blog/b1-suficiente-trabajar',
  '/blog/precio-b1-cambridge',
  '/blog/tiempo-preparar-b1-cero',
  '/blog/b1-universidad-espana',
  // PAA Blog Pages - Comparisons
  '/blog/cambridge-vs-linguaskill-diferencias',
  '/blog/cambridge-vs-ielts-espana',
  '/blog/academia-vs-profesor-particular',
  '/blog/ingles-presencial-vs-online',
  '/blog/b1-vs-b2-que-nivel-necesito',
  // PAA Blog Pages - Learning Methods
  '/blog/cuanto-tiempo-aprender-ingles',
  '/blog/entiendo-ingles-no-hablo',
  '/blog/verguenza-hablar-ingles',
  '/blog/perder-miedo-hablar-ingles',
  '/blog/clases-particulares-vs-academia',
  '/blog/ingles-online-vs-presencial',
  '/blog/por-que-no-avanzo-ingles',
  // PAA Blog Pages - Skills
  '/blog/mejorar-listening-ingles',
  '/blog/mejorar-speaking-ingles',
  '/blog/pensar-ingles-no-traducir',
  '/blog/no-entiendo-ingles-hablado',
  // PAA Blog Pages - Kids Early Childhood
  '/blog/ninos-aprender-ingles-pequenos',
  '/blog/edad-empezar-ingles-bebes',
  '/blog/ninos-confusion-dos-idiomas',
  '/blog/ingles-jugando-funciona',
  '/blog/mejor-metodo-ingles-ninos',
  '/blog/great-little-people-metodologia',
  // PAA Blog Pages - Kids Primary
  '/blog/hijo-preparar-cambridge',
  '/blog/motivar-hijo-ingles',
  '/blog/hijo-no-avanza-ingles',
  '/blog/ingles-colegio-suficiente',
  // PAA Blog Pages - Career
  '/blog/nivel-ingles-empresas',
  '/blog/ingles-entrevistas-trabajo',
  // Other
  '/aprende-ingles',
  '/contacto',
  '/reservar-clase',
  '/gracias',
  // Legal
  '/aviso-legal',
  '/politica-cookies',
  '/politica-privacidad',
  // 404 page (rendered separately as 404.html)
  '/404',
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
};

/** Start a static file server with SPA fallback (serves index.html for unknown paths) */
function startServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = (req.url || '/').split('?')[0];
      const filePath = join(distDir, url);

      try {
        if (existsSync(filePath) && statSync(filePath).isFile()) {
          const ext = extname(filePath);
          res.writeHead(200, {
            'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
          });
          createReadStream(filePath).pipe(res);
        } else {
          // SPA fallback — serve index.html for any unmatched route
          res.writeHead(200, { 'Content-Type': 'text/html' });
          createReadStream(join(distDir, 'index.html')).pipe(res);
        }
      } catch {
        res.writeHead(500);
        res.end('Internal server error');
      }
    });

    server.listen(port, '127.0.0.1', () => resolve(server));
  });
}

const MAX_RETRIES = 2;

async function renderRoute(route, browser, port) {
  const page = await browser.newPage();
  try {
    await page.goto(`http://127.0.0.1:${port}${route}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });

    // Wait for React to render content into #root
    await page.waitForFunction(
      () => {
        const root = document.getElementById('root');
        return root && root.children.length > 0;
      },
      { timeout: 30000 }
    );

    // Allow useEffect hooks to complete (SEOHead meta tags, etc.)
    await new Promise((r) => setTimeout(r, 1500));

    const html = await page.content();

    // Determine output path
    let outputPath;
    if (route === '/') {
      outputPath = join(distDir, 'index.html');
    } else if (route === '/404') {
      outputPath = join(distDir, '404.html');
    } else {
      outputPath = join(distDir, route, 'index.html');
    }

    const dir = dirname(outputPath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    writeFileSync(outputPath, html, 'utf-8');
    return true;
  } finally {
    await page.close();
  }
}

async function prerender() {
  if (!existsSync(distDir)) {
    console.error('Error: dist/ directory not found. Run "vite build" first.');
    process.exit(1);
  }

  console.log(`Pre-rendering ${routes.length} routes...\n`);

  const PORT = 4173;
  const server = await startServer(PORT);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  // Warm up: load one page first to cache the JS bundle in the browser
  console.log('  Warming up browser...');
  const warmupPage = await browser.newPage();
  await warmupPage.goto(`http://127.0.0.1:${PORT}/`, {
    waitUntil: 'networkidle2',
    timeout: 60000,
  });
  await warmupPage.close();
  console.log('  Warm-up complete.\n');

  const CONCURRENCY = 4;
  let completed = 0;
  const failed = [];

  // Process routes with concurrency limit
  const queue = [...routes];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length > 0) {
      const route = queue.shift();
      if (!route) continue;

      let success = false;
      for (let attempt = 1; attempt <= MAX_RETRIES + 1; attempt++) {
        try {
          await renderRoute(route, browser, PORT);
          completed++;
          console.log(`  [${completed}/${routes.length}] ${route}`);
          success = true;
          break;
        } catch (error) {
          if (attempt <= MAX_RETRIES) {
            console.log(`  RETRY [${route}] attempt ${attempt + 1}...`);
            await new Promise((r) => setTimeout(r, 2000));
          } else {
            console.error(`  ERROR [${route}]: ${error.message}`);
            failed.push(route);
          }
        }
      }
    }
  });

  await Promise.all(workers);
  await browser.close();
  server.close();

  console.log(
    `\nPre-rendering complete: ${completed} pages generated, ${failed.length} errors.`
  );

  if (failed.length > 0) {
    console.log('Failed routes:', failed.join(', '));
    process.exit(1);
  }
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
