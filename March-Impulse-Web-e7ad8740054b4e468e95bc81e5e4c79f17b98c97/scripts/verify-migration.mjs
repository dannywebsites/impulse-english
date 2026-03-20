#!/usr/bin/env node
/**
 * Migration Verification Script
 *
 * After running wp-migrate.mjs, run this to verify all URLs return HTTP 200
 * and all redirects return HTTP 301.
 *
 * Usage:
 *   node scripts/verify-migration.mjs                           # Verify production
 *   node scripts/verify-migration.mjs --base https://staging.example.com  # Verify staging
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Load .env
function loadEnv() {
  const envPath = join(projectRoot, '.env');
  if (!existsSync(envPath)) return {};
  const content = readFileSync(envPath, 'utf-8');
  const env = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    env[trimmed.slice(0, eqIdx).trim()] = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
  }
  return env;
}

const args = process.argv.slice(2);
const baseIdx = args.indexOf('--base');
const env = loadEnv();
const BASE_URL = (baseIdx !== -1 ? args[baseIdx + 1] : env.WP_SITE_URL || 'https://www.impulse-english.es').replace(/\/$/, '');

// All routes that should return 200
const LIVE_ROUTES = [
  '/',
  '/sobre-nosotros',
  '/metodologia',
  '/preguntas-frecuentes',
  '/testimonios',
  '/blog',
  '/contacto',
  '/reservar-clase',
  '/gracias',
  '/aprende-ingles',
  '/preparacion-b2-first-madrid',
  '/aviso-legal',
  '/politica-cookies',
  '/politica-privacidad',
  '/cursos-ingles/infantil',
  '/cursos-ingles/primaria',
  '/cursos-ingles/secundaria',
  '/cursos-ingles/adultos',
  '/cursos-ingles/particulares',
  '/cursos-ingles/online',
  '/examenes-cambridge',
  '/examenes-cambridge/b1-preliminary',
  '/examenes-cambridge/b2-first',
  '/examenes-cambridge/c1-advanced',
  '/examenes-cambridge/fechas-precios',
  '/examenes-cambridge/centros-madrid',
  '/linguaskill',
  '/linguaskill/curso-intensivo',
  '/linguaskill/precios-fechas',
  '/linguaskill/ejemplo-examen',
  '/academias-ingles-madrid',
  '/academias-ingles-madrid/adultos',
  '/academias-ingles-madrid/certificaciones',
  '/academias-ingles-madrid/por-barrios',
  '/academias-ingles-madrid/ninos',
  '/academia-ingles-barrio-del-pilar',
  '/academia-ingles-la-vaguada',
  '/academia-ingles-penagrande',
  '/academia-ingles-la-ventilla',
  '/academia-ingles-la-paz',
  '/academia-ingles-plaza-castilla',
  '/academia-ingles-tetuan',
  '/academia-ingles-cuatro-torres',
  // Blog posts (sample — full list in migration script)
  '/blog/cambridge-b1-guia',
  '/blog/cambridge-b2-beneficios',
  '/blog/examenes-cambridge-guia',
  '/blog/linguaskill-online-casa',
  '/blog/mejores-academias-madrid',
  '/blog/validez-certificado-b2-cambridge',
  '/blog/es-dificil-b2-first',
  '/blog/cuanto-tiempo-aprender-ingles',
  '/blog/ninos-aprender-ingles-pequenos',
  '/blog/nivel-ingles-empresas',
];

// Redirects that should return 301
const REDIRECTS = [
  ['/exam-impulse', '/reservar-clase'],
  ['/blogs-impulse', '/blog'],
  ['/ingles-la-vaguada/infantil', '/cursos-ingles/infantil'],
  ['/examenes-cambridge/linguaskill', '/linguaskill'],
  ['/linguaskill/precios-sedes', '/linguaskill/precios-fechas'],
];

async function checkUrl(url, expectedStatus) {
  try {
    const response = await fetch(url, { redirect: 'manual' });
    return {
      url,
      status: response.status,
      expected: expectedStatus,
      pass: response.status === expectedStatus,
      location: response.headers.get('location') || '',
    };
  } catch (e) {
    return { url, status: 'ERROR', expected: expectedStatus, pass: false, error: e.message };
  }
}

async function verify() {
  console.log('='.repeat(60));
  console.log('Migration Verification');
  console.log('='.repeat(60));
  console.log(`Base URL: ${BASE_URL}`);
  console.log('');

  let passed = 0;
  let failed = 0;

  // Check live routes (HTTP 200)
  console.log(`--- Checking ${LIVE_ROUTES.length} live routes (expect 200) ---`);
  for (const route of LIVE_ROUTES) {
    const result = await checkUrl(`${BASE_URL}${route}`, 200);
    if (result.pass) {
      passed++;
    } else {
      failed++;
      console.log(`  FAIL: ${route} — got ${result.status} (expected 200)`);
    }
  }
  console.log(`  ${passed} passed, ${failed} failed\n`);

  // Check redirects (HTTP 301)
  console.log(`--- Checking ${REDIRECTS.length} redirects (expect 301) ---`);
  let redirectPassed = 0;
  let redirectFailed = 0;
  for (const [source, target] of REDIRECTS) {
    const result = await checkUrl(`${BASE_URL}${source}`, 301);
    if (result.pass) {
      redirectPassed++;
    } else {
      redirectFailed++;
      console.log(`  FAIL: ${source} — got ${result.status} (expected 301, target: ${target})`);
    }
  }
  console.log(`  ${redirectPassed} passed, ${redirectFailed} failed\n`);

  // Summary
  console.log('='.repeat(60));
  console.log(`Total: ${passed + redirectPassed} passed, ${failed + redirectFailed} failed`);
  if (failed + redirectFailed === 0) {
    console.log('ALL CHECKS PASSED');
  } else {
    console.log('SOME CHECKS FAILED — review errors above');
    process.exit(1);
  }
}

verify().catch(console.error);
