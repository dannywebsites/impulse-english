import * as gemini from '../services/gemini.js';
import { emitJobStatus } from '../utils/events.js';
import { readdir } from 'fs/promises';
import { join, basename, extname } from 'path';

/**
 * Image library — real photos from the Impulse English Academy project.
 * Organized by category with keywords for matching.
 */
const IMAGE_LIBRARY = {
  blog: [
    {
      path: '/images/blog/alumna-certificado-c1-cambridge.jpg',
      keywords: ['cambridge', 'certificado', 'c1', 'examen', 'alumna', 'estudiante', 'logro', 'resultado'],
      alt_text: 'Alumna con certificado C1 de Cambridge en Impulse English Academy',
    },
    {
      path: '/images/blog/certificado-oficial-cambridge-impulse.jpg',
      keywords: ['certificado', 'cambridge', 'oficial', 'titulo', 'acreditacion'],
      alt_text: 'Certificado oficial de Cambridge de Impulse English Academy',
    },
    {
      path: '/images/blog/linguaskill-logo-examen-cambridge.png',
      keywords: ['linguaskill', 'examen', 'test', 'cambridge', 'evaluacion', 'nivel'],
      alt_text: 'Logo de Linguaskill, examen oficial de Cambridge',
    },
  ],
  services: [
    {
      path: '/images/services/clases-ingles-jovenes-madrid.jpg',
      keywords: ['jovenes', 'adolescentes', 'secundaria', 'teenager', 'clase', 'grupo'],
      alt_text: 'Clase de ingles para jovenes en Madrid',
    },
    {
      path: '/images/services/clases-ingles-madrid-norte-instalaciones.jpg',
      keywords: ['instalaciones', 'academia', 'madrid', 'norte', 'centro', 'aula'],
      alt_text: 'Instalaciones de clases de ingles en Madrid Norte',
    },
    {
      path: '/images/services/estudiantes-ingles-primaria-secundaria.jpg',
      keywords: ['estudiantes', 'primaria', 'secundaria', 'ninos', 'colegio', 'escolar'],
      alt_text: 'Estudiantes de ingles de primaria y secundaria',
    },
    {
      path: '/images/services/ingles-infantil-great-little-people-madrid.jpg',
      keywords: ['infantil', 'ninos', 'pequenos', 'little', 'guarderia', 'preescolar', 'bebes'],
      alt_text: 'Clases de ingles infantil con Great Little People en Madrid',
    },
    {
      path: '/images/services/ninos-aprendiendo-ingles-jugando.jpg',
      keywords: ['ninos', 'aprender', 'jugar', 'divertido', 'actividades', 'ludico'],
      alt_text: 'Ninos aprendiendo ingles jugando en Impulse Academy',
    },
    {
      path: '/images/services/patrick-panda-mascota-ingles-ninos.jpg',
      keywords: ['patrick', 'panda', 'mascota', 'ninos', 'infantil', 'divertido'],
      alt_text: 'Patrick Panda, mascota de ingles para ninos de Impulse',
    },
    {
      path: '/images/services/profesor-ingles-nativo-madrid.jpg',
      keywords: ['profesor', 'nativo', 'teacher', 'docente', 'clase', 'ensenanza', 'metodo'],
      alt_text: 'Profesor de ingles nativo en Madrid',
    },
  ],
  locations: [
    {
      path: '/images/locations/academia-cambridge-madrid-aula.jpg',
      keywords: ['academia', 'cambridge', 'aula', 'clase', 'interior', 'sala'],
      alt_text: 'Aula de academia Cambridge en Madrid',
    },
    {
      path: '/images/locations/academia-ingles-barrio-pilar-interior.jpg',
      keywords: ['barrio', 'pilar', 'interior', 'academia', 'sede', 'local'],
      alt_text: 'Interior de la academia de ingles en Barrio del Pilar',
    },
    {
      path: '/images/locations/academia-ingles-la-vaguada-exterior.jpg',
      keywords: ['vaguada', 'exterior', 'fachada', 'edificio', 'ubicacion'],
      alt_text: 'Exterior de la academia de ingles junto a La Vaguada',
    },
    {
      path: '/images/locations/clases-ingles-madrid-norte-instalaciones.jpg',
      keywords: ['madrid', 'norte', 'instalaciones', 'centro', 'equipamiento'],
      alt_text: 'Instalaciones de clases de ingles en Madrid Norte',
    },
    {
      path: '/images/locations/impulse-english-academy-classroom-la-vaguada.jpg',
      keywords: ['classroom', 'vaguada', 'aula', 'clase', 'moderna'],
      alt_text: 'Aula de Impulse English Academy junto a La Vaguada',
    },
  ],
  homepage: [
    {
      path: '/images/homepage/impulse-academy-recepcion-entrada.jpg',
      keywords: ['recepcion', 'entrada', 'bienvenida', 'lobby', 'academia'],
      alt_text: 'Recepcion y entrada de Impulse English Academy',
    },
    {
      path: '/images/homepage/impulse-english-academy-logo-oficial.png',
      keywords: ['logo', 'marca', 'impulse', 'oficial', 'branding'],
      alt_text: 'Logo oficial de Impulse English Academy',
    },
  ],
};

/**
 * Get all images as a flat array
 */
function getAllImages() {
  return Object.values(IMAGE_LIBRARY).flat();
}

/**
 * Score an image against topic keywords
 */
function scoreImage(image, topicWords) {
  let score = 0;
  for (const keyword of image.keywords) {
    for (const word of topicWords) {
      if (keyword.includes(word) || word.includes(keyword)) {
        score += 1;
      }
    }
  }
  return score;
}

/**
 * Select best matching images for the content topic
 */
function selectImages(topic, keywords, count = 3) {
  const allImages = getAllImages();
  const topicWords = `${topic} ${keywords}`
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove accents for matching
    .split(/\s+/)
    .filter((w) => w.length > 2);

  // Score each image
  const scored = allImages.map((img) => ({
    ...img,
    score: scoreImage(img, topicWords),
  }));

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  // Take top matches; if no matches, pick one from each category
  const selected = scored.filter((img) => img.score > 0).slice(0, count);

  if (selected.length < count) {
    // Fill with diverse category picks
    const categories = Object.keys(IMAGE_LIBRARY);
    for (const cat of categories) {
      if (selected.length >= count) break;
      const catImage = IMAGE_LIBRARY[cat].find(
        (img) => !selected.some((s) => s.path === img.path)
      );
      if (catImage) {
        selected.push({ ...catImage, score: 0 });
      }
    }
  }

  return selected.slice(0, count);
}

const PLACEMENT_LABELS = [
  'After the introduction, before the first major section',
  'Between the second and third major sections',
  'Before the conclusion or final section',
  'Within the FAQ or tips section',
];

/**
 * Run image selection (replaces AI image generation)
 * Picks real photos from the project's image library based on content topic.
 */
export async function runImageGeneration(job, researchData, settings = {}) {
  const { id: jobId, topic, keywords } = job;

  try {
    emitJobStatus(jobId, 'images', 'running', 'Selecting images from library...');

    const selected = selectImages(topic, keywords, 3);

    const inBlogImages = selected.map((img, i) => ({
      url: img.path,
      alt_text: img.alt_text,
      caption: `Impulse English Academy — ${topic}`,
      placement: PLACEMENT_LABELS[i] || PLACEMENT_LABELS[0],
    }));

    emitJobStatus(jobId, 'images', 'completed', `Selected ${inBlogImages.length} images from library`);

    return inBlogImages;
  } catch (error) {
    emitJobStatus(jobId, 'images', 'error', `Image selection failed: ${error.message}`);
    throw error;
  }
}

export default runImageGeneration;
