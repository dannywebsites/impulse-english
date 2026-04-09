#!/usr/bin/env node
// scripts/onboard-client.js — Client onboarding CLI
// Automates TEMPLATE-SETUP.md Steps 2-4: generates brand-config.ts, napData.ts,
// buildPageTitle.ts, and .env.template from answers to 8 question categories.

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { input, confirm, select, editor } from '@inquirer/prompts';
import { createPatch } from 'diff';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEBSITE_ROOT = join(__dirname, '..');
const PROJECT_ROOT = join(__dirname, '../..');
const DRAFT_DIR = join(PROJECT_ROOT, '.draft');
const BACKUP_DIR = join(DRAFT_DIR, 'backup');

// ─── TEMPLATE_MODE Guard ────────────────────────────────────────────────────

function isProductionRepo() {
  if (process.env.TEMPLATE_MODE === 'true') {
    return false;
  }
  try {
    const remotes = execSync('git remote -v', { cwd: PROJECT_ROOT, encoding: 'utf-8' });
    return remotes.toLowerCase().includes('impulse');
  } catch {
    return false;
  }
}

if (isProductionRepo()) {
  process.stderr.write(
    'ERROR: This appears to be the production Impulse repo.\n' +
    'Set TEMPLATE_MODE=true to override, or run on a fresh clone.\n'
  );
  process.exit(1);
}

// ─── Flags ──────────────────────────────────────────────────────────────────

const skipBuild = process.argv.includes('--skip-build');

// ─── Escape helper ──────────────────────────────────────────────────────────

function esc(value) {
  if (typeof value !== 'string') return value;
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// ─── File generators ────────────────────────────────────────────────────────

function generateBrandConfig(answers) {
  const audienceSegmentsTs = answers.audienceSegments
    .map(s => `    '${esc(s)}',`)
    .join('\n');
  const credentialsTs = answers.credentials
    .map(c => `    '${esc(c)}',`)
    .join('\n');

  // categoryTopicRef entries
  const categoryTopicRefTs = Object.entries(answers.categoryTopicRef)
    .map(([k, v]) => `    '${esc(k)}': '${esc(v)}',`)
    .join('\n');

  return `// brand-config.ts — Single source of truth for all brand-specific values
// When templating this project for a new client, THIS is the first file you change.
// Skills, pipeline prompts, and page builders all reference this config.

export const BRAND_CONFIG = {
  // ─── Identity ───────────────────────────────────────────────────────
  companyName: '${esc(answers.companyName)}',
  shortName: '${esc(answers.shortName)}',
  legalName: '${esc(answers.legalName)}',
  tagline: '${esc(answers.tagline)}',
  industry: '${esc(answers.industry)}',

  // ─── Voice & Language ───────────────────────────────────────────────
  language: '${esc(answers.language)}',               // BCP 47 tag (es-ES = Peninsular Spanish, es-MX = Mexican, en-US, etc.)
  voiceRegister: '${esc(answers.voiceRegister)}', // formal-friendly | casual | professional | academic
  pronouns: '${esc(answers.pronouns)}',            // vosotros (Spain) | ustedes (LATAM) | you (English)
  brandMentionLevel: '${esc(answers.brandMentionLevel)}',     // subtle | moderate | prominent
  tone: '${esc(answers.tone)}',

  // ─── Target Audience ────────────────────────────────────────────────
  targetAudience: '${esc(answers.targetAudience)}',
  audienceSegments: [
${audienceSegmentsTs}
  ],

  // ─── Unique Value Proposition ───────────────────────────────────────
  uniqueValue: '${esc(answers.uniqueValue)}',
  socialProof: '${esc(answers.socialProof)}',
  credentials: [
${credentialsTs}
  ],

  // ─── CTA Defaults ──────────────────────────────────────────────────
  primaryCta: { text: '${esc(answers.primaryCtaText)}', href: '${esc(answers.primaryCtaHref)}' },
  secondaryCta: { text: '${esc(answers.secondaryCtaText)}', href: '${esc(answers.secondaryCtaHref)}' },

  // ─── Content Rules ─────────────────────────────────────────────────
  // Banned AI words (language-agnostic, applies to all content)
  bannedWords: [
    'delve', 'tapestry', 'realm', 'landscape', 'ever-evolving', 'cutting-edge',
    'robust', 'transformative', 'pivotal', 'vibrant', 'crucial', 'compelling',
    'seamless', 'groundbreaking', 'leverage', 'harness', 'embark',
    'navigate', 'unveil', 'facilitate', 'synergy', 'game-changer',
    'unlock', 'unleash', 'elevate', 'utilize', 'endeavour',
    'multifaceted', 'holistic', 'paradigm', 'empower',
  ],

  // Article quality gates
  articleRules: {
    minWords: 800,
    maxWords: 5000,
    minH2Sections: 3,
    requireFaqSection: true,
    faqHeading: '## Preguntas frecuentes',  // Exact heading for FAQ section
    targetLength: '1500-2500 words',
  },

  // ─── Impulse Section Template ──────────────────────────────────────
  // This is the branded CTA section inserted into every article.
  // {topicRef} is replaced dynamically based on article category.
  impulseSectionTemplate: {
    headingPattern: '{companyName} te ayuda con {topicRef}',
    content: 'En {companyName}, {tagline}, os acompanamos en cada paso. Con un {socialProof}, grupos reducidos de maximo 10 alumnos y profesores nativos certificados TEFL/CELTA, teneis todo lo necesario para alcanzar vuestros objetivos.',
  },

  // ─── Category Topic References ─────────────────────────────────────
  // Maps article categories to the phrase used in the impulse section heading
  // NOTE: Update these categories for non-English-academy clients
  categoryTopicRef: {
${categoryTopicRefTs}
  },
} as const;

// ─── Type Exports ──────────────────────────────────────────────────
export type BrandConfig = typeof BRAND_CONFIG;
`;
}

function generateNapData(answers) {
  const openingHoursTs = answers.openingHours
    .map(h => `    { dayOfWeek: "${h.dayOfWeek}", opens: "${h.opens}", closes: "${h.closes}" },`)
    .join('\n');

  const openingHoursTextTs = answers.openingHoursText
    .map(t => `    "${t}",`)
    .join('\n');

  const areaServedTs = answers.areaServed
    .map(a => `    "${a}",`)
    .join('\n');

  const metroTs = answers.metro
    .map(m => `    "${m}",`)
    .join('\n');

  const busLinesTs = answers.busLines
    .map(b => `    "${b}",`)
    .join('\n');

  const credentialsTs = answers.credentials
    .map(c => `    "${c}",`)
    .join('\n');

  const sameAsTs = answers.sameAs
    .map(s => `    "${s}",`)
    .join('\n');

  return `// napData.ts — Single source of truth for all NAP (Name, Address, Phone) data
// Every component, schema, and page must import from here. Never hardcode NAP values.

export const NAP = {
  // Business identity
  name: "${answers.legalName}",
  shortName: "${answers.shortName}",
  legalName: "${answers.legalName}",

  // Address components
  streetAddress: "${answers.streetAddress}",
  neighborhood: "${answers.neighborhood}",
  district: "${answers.district}",
  postalCode: "${answers.postalCode}",
  city: "${answers.city}",
  addressRegion: "${answers.addressRegion}",
  country: "${answers.country}",

  // Formatted address strings
  fullAddress: "${answers.fullAddress}",
  shortAddress: "${answers.shortAddress}",

  // Contact
  phone: "${answers.phone}",
  phoneRaw: "${answers.phoneRaw}",
  phoneTel: "${answers.phoneTel}",
  whatsappUrl: "${answers.whatsappUrl}",
  email: "${answers.email}",

  // Web
  website: "${answers.website}",
  gbpUrl: "${answers.gbpUrl}",

  // Assets
  logo: "/images/academy/logos/img-4117.png", // REQUIRED: Replace with your logo path
  image: "/images/academy/logos/img-4117.png", // REQUIRED: Replace with your logo path

  // Geo coordinates
  geo: {
    latitude: ${answers.latitude},
    longitude: ${answers.longitude},
  },

  // Google Maps embed (based on address coordinates)
  mapsEmbedUrl:
    "${answers.mapsEmbedUrl}",
  mapsDirectionsUrl:
    "${answers.mapsDirectionsUrl}",

  // Opening hours
  openingHours: [
${openingHoursTs}
  ],

  // Human-readable hours
  openingHoursText: [
${openingHoursTextTs}
  ],

  // Price range
  priceRange: "${answers.priceRange}",

  // Social profiles
  social: {
    instagram: "${answers.instagram}",
    facebook: "${answers.facebook}",
    tiktok: "${answers.tiktok}",
    x: "${answers.x}",
    linkedin: "${answers.linkedin}",
    youtube: "${answers.youtube}",
  },

  // All sameAs URLs for schema
  sameAs: [
${sameAsTs}
  ],

  // Areas served
  areaServed: [
${areaServedTs}
  ],

  // Transit info
  metro: [
${metroTs}
  ],
  busLines: [${answers.busLines.map(b => `"${b}"`).join(', ')}],

  // Credentials
  credentials: [
${credentialsTs}
  ],

  // Aggregate rating (Google Reviews)
  aggregateRating: {
    ratingValue: ${answers.ratingValue},
    reviewCount: ${answers.reviewCount},
    bestRating: 5,
    worstRating: 1,
  },

  // Founding
  foundingDate: "${answers.foundingDate}",
} as const;

// Helper: Schema.org PostalAddress object
export function getSchemaAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.city,
    addressRegion: NAP.addressRegion,
    postalCode: NAP.postalCode,
    addressCountry: NAP.country,
  };
}

// Helper: Multi-line address for display
export function getAddressLines() {
  return [NAP.streetAddress, \`\${NAP.neighborhood}, \${NAP.postalCode} \${NAP.city}\`];
}
`;
}

function generateBuildPageTitle(answers) {
  return `const CORE_BRAND = '${esc(answers.CORE_BRAND)}';
const BARRIO_SUFFIX = '${esc(answers.BARRIO_SUFFIX)}';
const SHORT_BRAND = '${esc(answers.SHORT_BRAND)}';
const SEP = ' | ';

export function buildPageTitle(theme: string): string {
  const barrioBonus = \`\${theme}\${SEP}\${CORE_BRAND}\${SEP}\${BARRIO_SUFFIX}\`;
  const standard = \`\${theme}\${SEP}\${CORE_BRAND}\`;
  const emergency = \`\${theme}\${SEP}\${SHORT_BRAND}\`;

  // Barrio Bonus: short themes get the full location chain
  if (theme.length < 15 && barrioBonus.length <= 70) {
    return barrioBonus;
  }

  // Standard: core brand fits within 70 chars
  if (standard.length <= 70) {
    return standard;
  }

  // Emergency: shortened brand for long themes
  if (emergency.length <= 70) {
    return emergency;
  }

  // Hard safety: truncate theme to fit within 70 chars
  const maxTheme = 70 - SEP.length - SHORT_BRAND.length;
  return \`\${theme.slice(0, maxTheme)}\${SEP}\${SHORT_BRAND}\`;
}
`;
}

function generateEnvTemplate(answers) {
  return `# Environment variables for ${answers.companyName} website
# Copy this file to .env and fill in your values

# Webhook URL for lead form submissions (required)
# This is the endpoint that receives form data when a visitor submits the contact form
PUBLIC_WEBHOOK_URL=https://your-webhook-endpoint.com/submit
`;
}

// ─── Diff display ────────────────────────────────────────────────────────────

function displayColorDiff(filename, originalContent, newContent) {
  const patch = createPatch(filename, originalContent, newContent, 'original', 'draft');
  const lines = patch.split('\n');
  const colored = lines.map(line => {
    if (line.startsWith('+') && !line.startsWith('+++')) {
      return `\x1b[32m${line}\x1b[0m`;
    } else if (line.startsWith('-') && !line.startsWith('---')) {
      return `\x1b[31m${line}\x1b[0m`;
    } else if (line.startsWith('@')) {
      return `\x1b[36m${line}\x1b[0m`;
    }
    return line;
  });
  console.log(`\n=== ${filename} ===\n`);
  console.log(colored.join('\n'));
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n\x1b[1m╔════════════════════════════════════════════════════════╗\x1b[0m');
  console.log('\x1b[1m║     Client Onboarding CLI — Impulse Website Template   ║\x1b[0m');
  console.log('\x1b[1m╚════════════════════════════════════════════════════════╝\x1b[0m');
  console.log('\nThis wizard generates brand-config.ts, napData.ts, buildPageTitle.ts,');
  console.log('and .env.template from your answers. Drafts are reviewed before promotion.\n');
  console.log('Press Enter to keep the default (Impulse) value. Ctrl+C to cancel.\n');

  const answers = {};

  // ─── (1) Business Identity ─────────────────────────────────────────────────

  console.log('\n─── (1) Business Identity ─────────────────────────────\n');

  answers.companyName = await input({
    message: 'Company name:',
    default: 'Impulse English Academy',
  });

  answers.shortName = await input({
    message: 'Short name (used in compact contexts):',
    default: 'Impulse English',
  });

  answers.legalName = await input({
    message: 'Legal name (full legal entity name):',
    default: 'Impulse English Academy La Vaguada',
  });

  answers.tagline = await input({
    message: 'Tagline (one sentence description):',
    default: 'Centro Preparador Oficial Cambridge en La Vaguada, Madrid. 100% de aprobados en 2024-2025.',
  });

  answers.industry = await input({
    message: 'Industry (e.g. "English Language Academy"):',
    default: 'English Language Academy',
  });

  answers.foundingDate = await input({
    message: 'Founding year (YYYY):',
    default: '2022',
  });

  // ─── (2) Contact Info ──────────────────────────────────────────────────────

  console.log('\n─── (2) Contact Info ───────────────────────────────────\n');

  answers.phone = await input({
    message: 'Phone number (with country code, e.g. +34 604 910 611):',
    default: '+34 604 910 611',
  });

  // Derive phone variants
  answers.phoneRaw = answers.phone.replace(/[\s\-]/g, '');
  answers.phoneTel = 'tel:' + answers.phoneRaw;
  answers.whatsappUrl = 'https://wa.me/' + answers.phoneRaw.replace('+', '');

  answers.email = await input({
    message: 'Contact email:',
    default: 'info@impulse-english.es',
  });

  answers.website = await input({
    message: 'Website URL (https://...):',
    default: 'https://impulse-english.es',
  });

  answers.gbpUrl = await input({
    message: 'Google Business Profile URL:',
    default: 'https://share.google/GuRfJ3TjrnIIUhrdk',
  });

  // ─── (3) Geo & Address ────────────────────────────────────────────────────

  console.log('\n─── (3) Geo & Address ──────────────────────────────────\n');

  answers.streetAddress = await input({
    message: 'Street address:',
    default: 'Av. de El Ferrol, 22',
  });

  answers.neighborhood = await input({
    message: 'Neighborhood / zone:',
    default: 'La Vaguada, Barrio del Pilar',
  });

  answers.district = await input({
    message: 'District / borough:',
    default: 'Fuencarral-El Pardo',
  });

  answers.postalCode = await input({
    message: 'Postal code:',
    default: '28029',
  });

  answers.city = await input({
    message: 'City:',
    default: 'Madrid',
  });

  answers.addressRegion = await input({
    message: 'Region / state:',
    default: 'Community of Madrid',
  });

  answers.country = await input({
    message: 'Country code (ISO 3166-1 alpha-2, e.g. ES):',
    default: 'ES',
  });

  // Derive address strings
  answers.fullAddress = `${answers.streetAddress}, ${answers.neighborhood}, ${answers.postalCode} ${answers.city}`;
  answers.shortAddress = `${answers.streetAddress}, ${answers.postalCode} ${answers.city}`;

  const latStr = await input({
    message: 'Latitude (decimal degrees, e.g. 40.4789):',
    default: '40.4789',
  });
  answers.latitude = parseFloat(latStr);

  const lngStr = await input({
    message: 'Longitude (decimal degrees, e.g. -3.7114):',
    default: '-3.7114',
  });
  answers.longitude = parseFloat(lngStr);

  answers.mapsEmbedUrl = await input({
    message: 'Google Maps embed URL (Get from Google Maps > Share > Embed a map):',
    default: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.0!2d-3.7136!3d40.4789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229b1c1a2b3c5%3A0x1234567890abcdef!2sAv.+de+El+Ferrol%2C+22%2C+28029+Madrid!5e0!3m2!1ses!2ses!4v1709900000000',
  });

  // Derive mapsDirectionsUrl
  answers.mapsDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent(`${answers.streetAddress} ${answers.postalCode} ${answers.city} ${answers.country}`);

  answers.priceRange = await input({
    message: 'Price range (e.g. "€64 - €79/mes"):',
    default: '€64 - €79/mes',
  });

  const areaServedRaw = await editor({
    message: 'Areas served (one per line — edit, save, close):',
    default: [
      'Barrio del Pilar',
      'La Vaguada',
      'Peñagrande',
      'La Ventilla',
      'La Paz',
      'Plaza Castilla',
      'Tetuán',
      'Cuatro Torres',
      'Mirasierra',
      'Montecarmelo',
      'Las Tablas',
      'Fuencarral-El Pardo',
      'Madrid',
    ].join('\n'),
  });
  answers.areaServed = areaServedRaw.split('\n').map(s => s.trim()).filter(Boolean);

  const metroRaw = await editor({
    message: 'Metro stations (one per line — leave blank lines to skip):',
    default: [
      'Herrera Oria (Línea 9)',
      'Barrio del Pilar (Línea 9)',
      'Peñagrande (Línea 7)',
    ].join('\n'),
  });
  answers.metro = metroRaw.split('\n').map(s => s.trim()).filter(Boolean);

  const busLinesRaw = await editor({
    message: 'Bus lines (one per line — leave blank lines to skip):',
    default: ['42', '49', '67', '83', '126', '128', '132', '133', '134', '137', '147'].join('\n'),
  });
  answers.busLines = busLinesRaw.split('\n').map(s => s.trim()).filter(Boolean);

  // ─── (4) Opening Hours ────────────────────────────────────────────────────

  console.log('\n─── (4) Opening Hours ──────────────────────────────────\n');

  const dayDefaults = {
    Monday:    { open: true,  opens: '10:00', closes: '21:30' },
    Tuesday:   { open: true,  opens: '15:30', closes: '21:30' },
    Wednesday: { open: true,  opens: '10:00', closes: '21:30' },
    Thursday:  { open: true,  opens: '15:30', closes: '21:30' },
    Friday:    { open: true,  opens: '13:30', closes: '19:30' },
    Saturday:  { open: false, opens: '10:00', closes: '14:00' },
    Sunday:    { open: false, opens: '10:00', closes: '14:00' },
  };

  const spanishDayNames = {
    Monday: 'Lunes',
    Tuesday: 'Martes',
    Wednesday: 'Miércoles',
    Thursday: 'Jueves',
    Friday: 'Viernes',
    Saturday: 'Sábado',
    Sunday: 'Domingo',
  };

  const daySchedules = {};

  for (const [day, defaults] of Object.entries(dayDefaults)) {
    const isOpen = await confirm({
      message: `Is ${day} open?`,
      default: defaults.open,
    });

    if (isOpen) {
      const opensTime = await input({
        message: `  ${day} opens at (HH:MM):`,
        default: defaults.opens,
      });
      const closesTime = await input({
        message: `  ${day} closes at (HH:MM):`,
        default: defaults.closes,
      });
      daySchedules[day] = { open: true, opens: opensTime, closes: closesTime };
    } else {
      daySchedules[day] = { open: false };
    }
  }

  // Build openingHours array (open days only)
  answers.openingHours = Object.entries(daySchedules)
    .filter(([, s]) => s.open)
    .map(([day, s]) => ({ dayOfWeek: day, opens: s.opens, closes: s.closes }));

  // Build openingHoursText array with Spanish day names
  // Group consecutive closed days
  const openingHoursText = [];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let i = 0;
  while (i < days.length) {
    const day = days[i];
    const schedule = daySchedules[day];
    if (schedule.open) {
      openingHoursText.push(`${spanishDayNames[day]}: ${schedule.opens} – ${schedule.closes}`);
      i++;
    } else {
      // Collect consecutive closed days
      const closedGroup = [];
      while (i < days.length && !daySchedules[days[i]].open) {
        closedGroup.push(days[i]);
        i++;
      }
      if (closedGroup.length === 1) {
        openingHoursText.push(`${spanishDayNames[closedGroup[0]]}: Cerrado`);
      } else {
        const first = spanishDayNames[closedGroup[0]];
        const last = spanishDayNames[closedGroup[closedGroup.length - 1]];
        openingHoursText.push(`${first} – ${last}: Cerrado`);
      }
    }
  }
  answers.openingHoursText = openingHoursText;

  // ─── (5) Social Profiles ──────────────────────────────────────────────────

  console.log('\n─── (5) Social Profiles ────────────────────────────────\n');
  console.log('Leave empty to skip a social profile.\n');

  answers.instagram = await input({
    message: 'Instagram URL:',
    default: 'https://www.instagram.com/impulse_english_lavaguada/',
  });

  answers.facebook = await input({
    message: 'Facebook URL:',
    default: 'https://www.facebook.com/impulseenglishlavaguada/',
  });

  answers.tiktok = await input({
    message: 'TikTok URL:',
    default: 'https://www.tiktok.com/@impulse_english_lavaguada',
  });

  answers.x = await input({
    message: 'X (Twitter) URL:',
    default: 'https://x.com/impulse_vaguada',
  });

  answers.linkedin = await input({
    message: 'LinkedIn URL:',
    default: 'https://www.linkedin.com/company/101859096/',
  });

  answers.youtube = await input({
    message: 'YouTube URL:',
    default: 'https://www.youtube.com/@Impulse-English',
  });

  // Derive sameAs
  answers.sameAs = [
    answers.gbpUrl,
    answers.instagram,
    answers.facebook,
    answers.tiktok,
    answers.x,
    answers.linkedin,
    answers.youtube,
  ].filter(Boolean);

  // ─── (6) Brand Voice & Language ───────────────────────────────────────────

  console.log('\n─── (6) Brand Voice & Language ─────────────────────────\n');

  answers.language = await input({
    message: 'Language BCP 47 tag (e.g. es-ES, es-MX, en-US):',
    default: 'es-ES',
  });

  answers.voiceRegister = await select({
    message: 'Voice register:',
    choices: [
      { name: 'formal-friendly', value: 'formal-friendly' },
      { name: 'casual', value: 'casual' },
      { name: 'professional', value: 'professional' },
      { name: 'academic', value: 'academic' },
    ],
    default: 'formal-friendly',
  });

  answers.pronouns = await select({
    message: 'Pronouns:',
    choices: [
      { name: 'vosotros (Spain)', value: 'vosotros' },
      { name: 'ustedes (LATAM)', value: 'ustedes' },
      { name: 'you (English)', value: 'you' },
    ],
    default: 'vosotros',
  });

  answers.brandMentionLevel = await select({
    message: 'Brand mention level in content:',
    choices: [
      { name: 'subtle', value: 'subtle' },
      { name: 'moderate', value: 'moderate' },
      { name: 'prominent', value: 'prominent' },
    ],
    default: 'subtle',
  });

  answers.tone = await input({
    message: 'Content tone description:',
    default: 'Professional yet approachable. Authority through results, not academic jargon.',
  });

  answers.targetAudience = await input({
    message: 'Target audience (one sentence):',
    default: 'Padres buscando clases de ingles para sus hijos y adultos/jovenes profesionales en Madrid',
  });

  answers.uniqueValue = await input({
    message: 'Unique value proposition:',
    default: 'Centro Oficial Cambridge con 100% aprobados, grupos reducidos de max. 10 alumnos, profesores nativos certificados TEFL/CELTA',
  });

  answers.socialProof = await input({
    message: 'Social proof statement:',
    default: '100% de aprobados en examenes Cambridge 2024-2025. Mas de 500 alumnos satisfechos.',
  });

  const audienceSegmentsRaw = await editor({
    message: 'Audience segments (one per line):',
    default: [
      'Parents looking for kids English classes (ages 3-17)',
      'Adult professionals needing Cambridge certification',
      'Young professionals preparing for Linguaskill',
      'University students needing B1/B2 for graduation',
    ].join('\n'),
  });
  answers.audienceSegments = audienceSegmentsRaw.split('\n').map(s => s.trim()).filter(Boolean);

  // ─── (7) Credentials & Ratings ───────────────────────────────────────────

  console.log('\n─── (7) Credentials & Ratings ──────────────────────────\n');

  const credentialsRaw = await editor({
    message: 'Official credentials / certifications (one per line):',
    default: [
      'Official Cambridge Preparation Centre',
      'Official Linguaskill Centre',
      'Official Great Little People Centre',
      'Official Partner of ESIC Idiomas',
    ].join('\n'),
  });
  answers.credentials = credentialsRaw.split('\n').map(s => s.trim()).filter(Boolean);

  const ratingValueStr = await input({
    message: 'Average star rating (e.g. 5):',
    default: '5',
  });
  answers.ratingValue = parseFloat(ratingValueStr);

  const reviewCountStr = await input({
    message: 'Number of reviews (e.g. 150):',
    default: '150',
  });
  answers.reviewCount = parseInt(reviewCountStr, 10);

  // bestRating and worstRating are schema.org convention (fixed)

  // ─── (8) CTA Defaults ────────────────────────────────────────────────────

  console.log('\n─── (8) CTA Defaults ───────────────────────────────────\n');

  answers.primaryCtaText = await input({
    message: 'Primary CTA button text:',
    default: 'Prueba de nivel gratis',
  });

  answers.primaryCtaHref = await input({
    message: 'Primary CTA button URL:',
    default: '/reservar-clase',
  });

  answers.secondaryCtaText = await input({
    message: 'Secondary CTA button text:',
    default: 'Nuestros cursos',
  });

  answers.secondaryCtaHref = await input({
    message: 'Secondary CTA button URL:',
    default: '/cursos-ingles/adultos',
  });

  answers.CORE_BRAND = await input({
    message: 'Page title brand string (CORE_BRAND in buildPageTitle.ts):',
    default: 'Impulse English Academy La Vaguada',
  });

  answers.BARRIO_SUFFIX = await input({
    message: 'Location suffix for page titles (BARRIO_SUFFIX):',
    default: 'Barrio del Pilar',
  });

  answers.SHORT_BRAND = await input({
    message: 'Short brand for long page titles (SHORT_BRAND):',
    default: 'Impulse English La Vaguada',
  });

  // categoryTopicRef uses Impulse defaults (note for clients)
  answers.categoryTopicRef = {
    'Cambridge B2 First': 'el B2 First',
    'Cambridge C1 Advanced': 'el C1 Advanced',
    'Cambridge B1 Preliminary': 'el B1 Preliminary',
    'Cambridge A2 Key': 'el A2 Key',
    'Linguaskill': 'el Linguaskill',
    'Kids Early Childhood': 'el ingles infantil',
    'Kids Primary': 'el ingles en primaria',
    'Kids Secondary': 'el ingles en secundaria',
    'Kids': 'el ingles para ninos',
    'Career': 'el ingles profesional',
    'Local Madrid': 'el ingles en Madrid',
    'Price': 'tu preparacion',
    'default': 'tu aprendizaje de ingles',
  };

  // ─── Generate draft files ─────────────────────────────────────────────────

  console.log('\n\x1b[1mGenerating draft files...\x1b[0m\n');

  mkdirSync(DRAFT_DIR, { recursive: true });

  const draftFiles = {
    'brand-config.ts': {
      draftPath: join(DRAFT_DIR, 'brand-config.ts'),
      originalPath: join(PROJECT_ROOT, 'brand-config.ts'),
      content: generateBrandConfig(answers),
    },
    'napData.ts': {
      draftPath: join(DRAFT_DIR, 'napData.ts'),
      originalPath: join(WEBSITE_ROOT, 'utils', 'napData.ts'),
      content: generateNapData(answers),
    },
    'buildPageTitle.ts': {
      draftPath: join(DRAFT_DIR, 'buildPageTitle.ts'),
      originalPath: join(WEBSITE_ROOT, 'utils', 'buildPageTitle.ts'),
      content: generateBuildPageTitle(answers),
    },
    '.env.template': {
      draftPath: join(DRAFT_DIR, '.env.template'),
      originalPath: join(WEBSITE_ROOT, '.env.template'),
      content: generateEnvTemplate(answers),
    },
  };

  for (const [filename, info] of Object.entries(draftFiles)) {
    writeFileSync(info.draftPath, info.content, 'utf-8');
    console.log(`  \x1b[32m✓\x1b[0m .draft/${filename}`);
  }

  // ─── Show colorized diffs ─────────────────────────────────────────────────

  console.log('\n\x1b[1mReview changes:\x1b[0m');

  for (const [filename, info] of Object.entries(draftFiles)) {
    const originalContent = existsSync(info.originalPath)
      ? readFileSync(info.originalPath, 'utf-8')
      : '';
    displayColorDiff(filename, originalContent, info.content);
  }

  // ─── Promotion flow ───────────────────────────────────────────────────────

  const promote = await confirm({
    message: '\nPromote these drafts to final files?',
    default: false,
  });

  if (!promote) {
    console.log('\nDrafts preserved in .draft/ directory. You can edit them manually and re-run the script.');
    process.exit(0);
  }

  // Back up originals
  mkdirSync(BACKUP_DIR, { recursive: true });

  const backupMap = [
    { src: join(PROJECT_ROOT, 'brand-config.ts'),         dst: join(BACKUP_DIR, 'brand-config.ts.bak') },
    { src: join(WEBSITE_ROOT, 'utils', 'napData.ts'),      dst: join(BACKUP_DIR, 'napData.ts.bak') },
    { src: join(WEBSITE_ROOT, 'utils', 'buildPageTitle.ts'), dst: join(BACKUP_DIR, 'buildPageTitle.ts.bak') },
  ];

  for (const { src, dst } of backupMap) {
    if (existsSync(src)) {
      copyFileSync(src, dst);
      console.log(`  \x1b[33m↩\x1b[0m  Backed up ${src} → ${dst}`);
    }
  }

  // Copy drafts to final locations
  const promotionMap = [
    { src: join(DRAFT_DIR, 'brand-config.ts'),     dst: join(PROJECT_ROOT, 'brand-config.ts') },
    { src: join(DRAFT_DIR, 'napData.ts'),           dst: join(WEBSITE_ROOT, 'utils', 'napData.ts') },
    { src: join(DRAFT_DIR, 'buildPageTitle.ts'),    dst: join(WEBSITE_ROOT, 'utils', 'buildPageTitle.ts') },
    { src: join(DRAFT_DIR, '.env.template'),        dst: join(WEBSITE_ROOT, '.env.template') },
  ];

  for (const { src, dst } of promotionMap) {
    copyFileSync(src, dst);
    console.log(`  \x1b[32m✓\x1b[0m  Promoted ${src} → ${dst}`);
  }

  console.log('\n\x1b[1mAll drafts promoted.\x1b[0m');

  // ─── Build verification ───────────────────────────────────────────────────

  if (skipBuild) {
    console.log('\nSkipping build verification (--skip-build). Run npm run build manually to verify.');
    return;
  }

  console.log('\nRunning npm run build to verify configuration...\n');

  try {
    execSync('npm run build', { cwd: WEBSITE_ROOT, stdio: 'inherit' });
    console.log(`
\x1b[32m\x1b[1mBuild successful!\x1b[0m

Next steps (see TEMPLATE-SETUP.md):
  5. Install skills & agents (copy .claude/ directory)
  6. Update brand-voice-enforcer with new brand voice
  7. Update auto-publish-pipeline categories
  8. Update vercel.json redirects for new domain
  9. Update CLAUDE.md project description
  10. Update Google Analytics / GTM IDs
`);
  } catch {
    console.log('\nBuild failed. Review the errors above and fix the generated config files.');
  }
}

main().catch((err) => {
  if (err.name === 'ExitPromptError') {
    console.log('\nOnboarding cancelled.');
    process.exit(0);
  }
  console.error(err);
  process.exit(1);
});
