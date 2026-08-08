// Category configuration: hub pages, display names, colors, images, and lead form sources

import type { ArticleCategory } from './articles/types';

export interface CategoryConfig {
  displayName: string;
  hubPath: string;
  hubLabel: string;
  blogFilterName: string;
  imageKey: string;
  leadFormSource: string;
  color: string;
}

export const categoryConfig: Record<ArticleCategory, CategoryConfig> = {
  'Cambridge B2 First': {
    displayName: 'Cambridge B2 First',
    hubPath: '/examenes-cambridge/b2-first/',
    hubLabel: 'B2 First',
    blogFilterName: 'Exámenes Cambridge',
    imageKey: 'cambridge',
    leadFormSource: 'paa-cambridge-b2',
    color: 'blue',
  },
  'Cambridge C1 Advanced': {
    displayName: 'Cambridge C1 Advanced',
    hubPath: '/examenes-cambridge/c1-advanced/',
    hubLabel: 'C1 Advanced',
    blogFilterName: 'Exámenes Cambridge',
    imageKey: 'cambridge',
    leadFormSource: 'paa-cambridge-c1',
    color: 'blue',
  },
  'Cambridge B1 Preliminary': {
    displayName: 'Cambridge B1 Preliminary',
    hubPath: '/examenes-cambridge/b1-preliminary/',
    hubLabel: 'B1 Preliminary',
    blogFilterName: 'Exámenes Cambridge',
    imageKey: 'cambridge',
    leadFormSource: 'paa-cambridge-b1',
    color: 'blue',
  },
  'Cambridge A2 Key': {
    displayName: 'Cambridge A2 Key',
    hubPath: '/examenes-cambridge/',
    hubLabel: 'Exámenes Cambridge',
    blogFilterName: 'Exámenes Cambridge',
    imageKey: 'cambridge',
    leadFormSource: 'paa-cambridge-a2',
    color: 'blue',
  },
  'Linguaskill': {
    displayName: 'Linguaskill',
    hubPath: '/linguaskill/',
    hubLabel: 'Linguaskill',
    blogFilterName: 'Linguaskill',
    imageKey: 'technology',
    leadFormSource: 'paa-linguaskill',
    color: 'teal',
  },
  'Comparison': {
    displayName: 'Comparativas',
    hubPath: '/blog/',
    hubLabel: 'Blog',
    blogFilterName: 'Comparativas',
    imageKey: 'classroom',
    leadFormSource: 'paa-comparison',
    color: 'purple',
  },
  'Learning Methods': {
    displayName: 'Métodos de Aprendizaje',
    hubPath: '/metodologia/',
    hubLabel: 'Metodología',
    blogFilterName: 'Metodología',
    imageKey: 'classroom',
    leadFormSource: 'paa-learning-methods',
    color: 'green',
  },
  'Skills': {
    displayName: 'Destrezas',
    hubPath: '/metodologia/',
    hubLabel: 'Metodología',
    blogFilterName: 'Destrezas',
    imageKey: 'adults',
    leadFormSource: 'paa-skills',
    color: 'orange',
  },
  'Kids Early Childhood': {
    displayName: 'Inglés Infantil',
    hubPath: '/cursos-ingles/infantil/',
    hubLabel: 'Infantil',
    blogFilterName: 'Niños',
    imageKey: 'infantil',
    leadFormSource: 'paa-kids-infantil',
    color: 'pink',
  },
  'Kids Primary': {
    displayName: 'Inglés Primaria',
    hubPath: '/cursos-ingles/primaria/',
    hubLabel: 'Primaria',
    blogFilterName: 'Niños',
    imageKey: 'students',
    leadFormSource: 'paa-kids-primaria',
    color: 'pink',
  },
  'Kids Secondary': {
    displayName: 'Inglés Secundaria',
    hubPath: '/cursos-ingles/secundaria/',
    hubLabel: 'Secundaria',
    blogFilterName: 'Adolescentes',
    imageKey: 'teenagers',
    leadFormSource: 'paa-kids-secundaria',
    color: 'indigo',
  },
  // 'Career' NO se reapunta a /ingles-para-empresas/. Este grupo está escrito
  // para el profesional que paga su propio curso ("¿el inglés sube el sueldo?",
  // "¿cómo preparo una entrevista?"), y mandarlo a un formulario de presupuesto
  // corporativo es una ruta de conversión peor que /cursos-ingles/adultos/.
  'Career': {
    displayName: 'Inglés Profesional',
    hubPath: '/cursos-ingles/adultos/',
    hubLabel: 'Adultos',
    blogFilterName: 'Carrera Profesional',
    imageKey: 'adults',
    leadFormSource: 'paa-career',
    color: 'slate',
  },
  // Para los artículos B2B que se escriban a partir de ahora — quien busca es
  // RR. HH., no el alumno. Hoy no hay ninguno etiquetado así, y es deliberado:
  // no se reetiqueta nada retroactivamente.
  'Empresas': {
    displayName: 'Inglés para empresas',
    hubPath: '/ingles-para-empresas/',
    hubLabel: 'Inglés para empresas',
    blogFilterName: 'Empresas',
    imageKey: 'adults',
    leadFormSource: 'paa-empresas',
    color: 'slate',
  },
  'Local Madrid': {
    displayName: 'Academias Madrid',
    hubPath: '/academias-ingles-madrid/',
    hubLabel: 'Academias Madrid',
    blogFilterName: 'Academias Madrid',
    imageKey: 'reception',
    leadFormSource: 'paa-local-madrid',
    color: 'red',
  },
  'Price': {
    displayName: 'Precios',
    hubPath: '/contacto/',
    hubLabel: 'Contacto',
    blogFilterName: 'Precios',
    imageKey: 'reception',
    leadFormSource: 'paa-price',
    color: 'emerald',
  },
  'Definitions': {
    displayName: 'Conceptos',
    hubPath: '/blog/',
    hubLabel: 'Blog',
    blogFilterName: 'Conceptos',
    imageKey: 'classroom',
    leadFormSource: 'paa-definitions',
    color: 'amber',
  },
  // Study-abroad cluster. Until 2026-08-07 this key did not exist, so all 21 articles
  // hit the `?? categoryConfig['Cambridge B2 First']` fallback in PAAArticlePage and
  // shipped a "Cambridge B2 First" badge, a "Volver a B2 First" link and a
  // `paa-cambridge-b2` lead source. hubPath goes to the sales pillar rather than the
  // blog hub, matching every other category — the reader lands somewhere that converts.
  'Inglés en el extranjero': {
    displayName: 'Inglés en el extranjero',
    hubPath: '/ingles-en-el-extranjero/',
    hubLabel: 'Inglés en el extranjero',
    blogFilterName: 'Inglés en el extranjero',
    imageKey: 'classroom',
    leadFormSource: 'paa-extranjero',
    color: 'teal',
  },
  // The MCER ladder (A1-C2). `niveles de inglés` is 14.800/mo at LOW competition and its
  // People Also Ask is almost entirely self-assessment — "¿cómo saber si soy B2?",
  // "¿qué nivel da la ESO?". hubPath is therefore the free 25-minute level test rather than
  // a course page: the question the reader arrived with IS the thing the test answers.
  'Niveles de inglés': {
    displayName: 'Niveles de inglés',
    hubPath: '/prueba-de-nivel-ingles/',
    hubLabel: 'la prueba de nivel',
    blogFilterName: 'Niveles de inglés',
    imageKey: 'classroom',
    leadFormSource: 'paa-niveles',
    color: 'purple',
  },
  // The learn-English resource cluster, built from the academy's own YouTube Shorts.
  //
  // hubPath deliberately breaks the "always point at a converting page" convention the
  // other categories follow. This cluster has a real Tier-1 pillar at /aprende-ingles/,
  // and its articles are supposed to link UP to it — that is what makes the cluster
  // legible to Google as a cluster rather than 12 loose pages. Conversion is carried by
  // the mid-article CTABand and the impulseSection links instead.
  //
  // blogFilterName matches the "Aprender Inglés" group the 8 existing static articles
  // already use, so these join that group in the /blog/ directory rather than opening a
  // near-identical second one.
  'Aprender inglés': {
    displayName: 'Aprender inglés',
    hubPath: '/aprende-ingles/',
    hubLabel: 'Aprender inglés',
    blogFilterName: 'Aprender Inglés',
    imageKey: 'classroom',
    leadFormSource: 'paa-aprende-ingles',
    color: 'sky',
  },
};
