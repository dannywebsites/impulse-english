import { emitJobStatus } from '../utils/events.js';

/**
 * Category-based default thumbnails for featured images.
 * Maps content topics to the best representative image from the library.
 */
const THUMBNAIL_MAP = [
  {
    keywords: ['cambridge', 'examen', 'certificado', 'b1', 'b2', 'c1', 'first', 'preliminary', 'linguaskill'],
    path: '/images/blog/certificado-oficial-cambridge-impulse.jpg',
    alt: 'Certificado oficial de Cambridge en Impulse English Academy',
  },
  {
    keywords: ['ninos', 'infantil', 'primaria', 'pequenos', 'bebes', 'preescolar'],
    path: '/images/services/ninos-aprendiendo-ingles-jugando.jpg',
    alt: 'Ninos aprendiendo ingles en Impulse English Academy',
  },
  {
    keywords: ['jovenes', 'adolescentes', 'secundaria', 'teenager', 'instituto'],
    path: '/images/services/clases-ingles-jovenes-madrid.jpg',
    alt: 'Clases de ingles para jovenes en Madrid',
  },
  {
    keywords: ['profesor', 'nativo', 'teacher', 'metodo', 'metodologia', 'ensenanza'],
    path: '/images/services/profesor-ingles-nativo-madrid.jpg',
    alt: 'Profesor de ingles nativo en Impulse English Academy',
  },
  {
    keywords: ['ubicacion', 'vaguada', 'pilar', 'madrid', 'norte', 'academia', 'direccion'],
    path: '/images/locations/academia-ingles-la-vaguada-exterior.jpg',
    alt: 'Academia de ingles Impulse junto a La Vaguada, Madrid',
  },
  {
    keywords: ['adultos', 'empresas', 'profesional', 'business', 'clase'],
    path: '/images/services/clases-ingles-madrid-norte-instalaciones.jpg',
    alt: 'Clases de ingles para adultos en Madrid Norte',
  },
];

// Default fallback thumbnail
const DEFAULT_THUMBNAIL = {
  path: '/images/homepage/impulse-academy-recepcion-entrada.jpg',
  alt: 'Impulse English Academy — Academia de ingles en Madrid',
};

/**
 * Select the best thumbnail based on content topic
 */
function selectThumbnail(topic, keywords) {
  const searchText = `${topic} ${keywords}`
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  let bestMatch = null;
  let bestScore = 0;

  for (const entry of THUMBNAIL_MAP) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (searchText.includes(kw)) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestMatch || DEFAULT_THUMBNAIL;
}

/**
 * Run thumbnail selector (replaces AI thumbnail generation)
 * Picks the most relevant real photo as featured image.
 */
export async function runThumbnailGenerator(job, content, settings = {}) {
  const { id: jobId, topic, keywords } = job;

  try {
    emitJobStatus(jobId, 'thumbnail', 'running', 'Selecting featured image...');

    const selected = selectThumbnail(topic, keywords);

    emitJobStatus(jobId, 'thumbnail', 'completed', 'Featured image selected');

    return {
      url: selected.path,
      prompt: `Selected from library: ${selected.alt}`,
    };
  } catch (error) {
    emitJobStatus(jobId, 'thumbnail', 'error', `Thumbnail selection failed: ${error.message}`);
    throw error;
  }
}

export default runThumbnailGenerator;
