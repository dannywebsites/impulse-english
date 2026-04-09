// brand-config.ts — Single source of truth for all brand-specific values
// When templating this project for a new client, THIS is the first file you change.
// Skills, pipeline prompts, and page builders all reference this config.

export const BRAND_CONFIG = {
  // ─── Identity ───────────────────────────────────────────────────────
  companyName: 'Impulse English Academy',
  shortName: 'Impulse English',
  legalName: 'Impulse English Academy La Vaguada',
  tagline: 'Centro Preparador Oficial Cambridge en La Vaguada, Madrid. 100% de aprobados en 2024-2025.',
  industry: 'English Language Academy',

  // ─── Voice & Language ───────────────────────────────────────────────
  language: 'es-ES',               // BCP 47 tag (es-ES = Peninsular Spanish, es-MX = Mexican, en-US, etc.)
  voiceRegister: 'formal-friendly', // formal-friendly | casual | professional | academic
  pronouns: 'vosotros',            // vosotros (Spain) | ustedes (LATAM) | you (English)
  brandMentionLevel: 'subtle',     // subtle | moderate | prominent
  tone: 'Professional yet approachable. Authority through results, not academic jargon.',

  // ─── Pipeline Settings ─────────────────────────────────────────────
  pipelineLanguage: 'Spanish',     // Human-readable language name used in pipeline prompts (not BCP 47)
  locationCode: 'Spain',           // Country string used in DataForSEO location_name
  researchDepth: 'standard',       // standard | deep — controls research thoroughness

  // ─── Target Audience ────────────────────────────────────────────────
  targetAudience: 'Padres buscando clases de ingles para sus hijos y adultos/jovenes profesionales en Madrid',
  audienceSegments: [
    'Parents looking for kids English classes (ages 3-17)',
    'Adult professionals needing Cambridge certification',
    'Young professionals preparing for Linguaskill',
    'University students needing B1/B2 for graduation',
  ],

  // ─── Unique Value Proposition ───────────────────────────────────────
  uniqueValue: 'Centro Oficial Cambridge con 100% aprobados, grupos reducidos de max. 10 alumnos, profesores nativos certificados TEFL/CELTA',
  socialProof: '100% de aprobados en examenes Cambridge 2024-2025. Mas de 500 alumnos satisfechos.',
  credentials: [
    'Official Cambridge Preparation Centre',
    'Official Linguaskill Centre',
    'Official Great Little People Centre',
    'Official Partner of ESIC Idiomas',
  ],

  // ─── CTA Defaults ──────────────────────────────────────────────────
  primaryCta: { text: 'Prueba de nivel gratis', href: '/reservar-clase' },
  secondaryCta: { text: 'Nuestros cursos', href: '/cursos-ingles/adultos' },

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

  // ─── Brand Section Template ──────────────────────────────────────
  // This is the branded CTA section inserted into every article.
  // {topicRef} is replaced dynamically based on article category.
  brandSectionTemplate: {
    headingPattern: '{companyName} te ayuda con {topicRef}',
    content: 'En {companyName}, {tagline}, os acompanamos en cada paso. Con un {socialProof}, grupos reducidos de maximo 10 alumnos y profesores nativos certificados TEFL/CELTA, teneis todo lo necesario para alcanzar vuestros objetivos.',
  },

  // ─── Category Topic References ─────────────────────────────────────
  // Maps article categories to the phrase used in the impulse section heading
  categoryTopicRef: {
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
  },
} as const;

// ─── Type Exports ──────────────────────────────────────────────────
export type BrandConfig = typeof BRAND_CONFIG;
