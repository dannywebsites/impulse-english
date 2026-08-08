/**
 * Canonical metadata for the academy's own YouTube clips.
 *
 * Why this exists: 23 pages embed a clip through <LazyVideo>, and until now only
 * /, /testimonios/ and one article emitted the matching VideoObject. The other 21 —
 * every barrio page, every course page, the Cambridge and Linguaskill hubs — carried
 * a player Google could not see. testimonios.astro already says it in a comment:
 * "an embed on its own earns nothing".
 *
 * The embed and the markup are declared in different files (the player is a React
 * island, the schema is built in the .astro frontmatter), so they drift silently.
 * Keeping the facts in one place means a page adds a video by naming it, not by
 * retyping a duration and an upload date that nothing validates.
 *
 * Durations and upload dates are read from the channel itself (yt-dlp), not guessed.
 */
import { generateVideoObjectSchema } from './schemaData';

export interface ChannelVideo {
  youtubeId: string;
  name: string;
  description: string;
  /** YYYY-MM-DD, from the channel. */
  uploadDate: string;
  /** ISO 8601, from the channel. */
  duration: string;
}

export const CHANNEL_VIDEOS = {
  /** 4:43 tour of the academy and the method. The site's general-purpose clip — on 15 pages. */
  quienesSomos: {
    youtubeId: 'Fdso-d9_F20',
    name: 'Quiénes somos en Impulse English Academy: nuestro método y filosofía',
    description:
      'Recorrido por Impulse English Academy en La Vaguada y Barrio del Pilar: quiénes somos, cómo damos las clases de inglés y en qué se basa nuestro método con grupos reducidos y profesores certificados.',
    uploadDate: '2025-12-08',
    duration: 'PT4M43S',
  },
  primaria: {
    youtubeId: 'G_fFoyb8sdc',
    name: 'Cómo enseñamos inglés en educación primaria',
    description:
      'Cómo trabajamos el inglés con los alumnos de primaria (6-12 años) en Impulse English Academy: la dinámica de clase, los grupos reducidos y la preparación de Cambridge Young Learners.',
    uploadDate: '2025-12-08',
    duration: 'PT1M12S',
  },
  secundaria: {
    youtubeId: 'yYf0hsBtd14',
    name: 'Cómo preparamos a nuestros alumnos de secundaria',
    description:
      'Cómo preparamos a los alumnos de secundaria en Impulse English Academy: refuerzo del inglés del instituto y preparación de los exámenes oficiales de Cambridge.',
    uploadDate: '2025-12-08',
    duration: 'PT39S',
  },
  dublin: {
    youtubeId: 'yMLWvuW5hOQ',
    name: 'De Barrio del Pilar a una multinacional en Dublín gracias al inglés',
    description:
      'Un alumno de Impulse English Academy cuenta cómo pasó de estudiar inglés en Barrio del Pilar a trabajar en una multinacional en Dublín.',
    uploadDate: '2025-12-08',
    duration: 'PT2M14S',
  },
  josmary: {
    youtubeId: 'ZK1UjWaghu0',
    name: 'De la inseguridad a la confianza: la historia de Josmary',
    description:
      'Josmary cuenta cómo pasó de tener vacíos de gramática y vocabulario a sentirse con confianza en inglés en las clases nocturnas de B1 con JP en Impulse English Academy, La Vaguada.',
    uploadDate: '2026-01-05',
    duration: 'PT2M7S',
  },
  profesorTitulado: {
    youtubeId: 'ZiEizGt2DkI',
    name: 'De no tener confianza en su inglés a ser profesor titulado',
    description:
      'Daniel necesitaba certificar su nivel de inglés para su carrera docente. Cuenta cómo pasó de no tener confianza en su inglés a ejercer como profesor titulado.',
    uploadDate: '2025-12-08',
    duration: 'PT56S',
  },
} as const satisfies Record<string, ChannelVideo>;

export type ChannelVideoKey = keyof typeof CHANNEL_VIDEOS;

/**
 * VideoObject for a clip this page embeds. Add it to the page's `schemas` array.
 *
 * Only call this on a page that actually renders the player — schema for a video the
 * reader cannot see is exactly the mismatch Google's structured-data guidelines treat
 * as spam.
 */
export function channelVideoSchema(key: ChannelVideoKey) {
  const v = CHANNEL_VIDEOS[key];
  return generateVideoObjectSchema({
    name: v.name,
    description: v.description,
    embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
    // oardefault is the original-aspect frame; maxresdefault centre-crops a vertical
    // Short and cuts heads off in the thumbnail Google shows.
    thumbnailUrl: `https://i.ytimg.com/vi/${v.youtubeId}/oardefault.jpg`,
    uploadDate: v.uploadDate,
    duration: v.duration,
  });
}
