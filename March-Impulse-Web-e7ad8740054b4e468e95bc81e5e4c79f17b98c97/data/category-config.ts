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
    hubPath: '/examenes-cambridge/b2-first',
    hubLabel: 'B2 First',
    blogFilterName: 'Exámenes Cambridge',
    imageKey: 'cambridge',
    leadFormSource: 'paa-cambridge-b2',
    color: 'blue',
  },
  'Cambridge C1 Advanced': {
    displayName: 'Cambridge C1 Advanced',
    hubPath: '/examenes-cambridge/c1-advanced',
    hubLabel: 'C1 Advanced',
    blogFilterName: 'Exámenes Cambridge',
    imageKey: 'cambridge',
    leadFormSource: 'paa-cambridge-c1',
    color: 'blue',
  },
  'Cambridge B1 Preliminary': {
    displayName: 'Cambridge B1 Preliminary',
    hubPath: '/examenes-cambridge/b1-preliminary',
    hubLabel: 'B1 Preliminary',
    blogFilterName: 'Exámenes Cambridge',
    imageKey: 'cambridge',
    leadFormSource: 'paa-cambridge-b1',
    color: 'blue',
  },
  'Cambridge A2 Key': {
    displayName: 'Cambridge A2 Key',
    hubPath: '/examenes-cambridge',
    hubLabel: 'Exámenes Cambridge',
    blogFilterName: 'Exámenes Cambridge',
    imageKey: 'cambridge',
    leadFormSource: 'paa-cambridge-a2',
    color: 'blue',
  },
  'Linguaskill': {
    displayName: 'Linguaskill',
    hubPath: '/linguaskill',
    hubLabel: 'Linguaskill',
    blogFilterName: 'Linguaskill',
    imageKey: 'technology',
    leadFormSource: 'paa-linguaskill',
    color: 'teal',
  },
  'Comparison': {
    displayName: 'Comparativas',
    hubPath: '/blog',
    hubLabel: 'Blog',
    blogFilterName: 'Comparativas',
    imageKey: 'classroom',
    leadFormSource: 'paa-comparison',
    color: 'purple',
  },
  'Learning Methods': {
    displayName: 'Métodos de Aprendizaje',
    hubPath: '/metodologia',
    hubLabel: 'Metodología',
    blogFilterName: 'Metodología',
    imageKey: 'classroom',
    leadFormSource: 'paa-learning-methods',
    color: 'green',
  },
  'Skills': {
    displayName: 'Destrezas',
    hubPath: '/metodologia',
    hubLabel: 'Metodología',
    blogFilterName: 'Destrezas',
    imageKey: 'adults',
    leadFormSource: 'paa-skills',
    color: 'orange',
  },
  'Kids Early Childhood': {
    displayName: 'Inglés Infantil',
    hubPath: '/cursos-ingles/infantil',
    hubLabel: 'Infantil',
    blogFilterName: 'Niños',
    imageKey: 'infantil',
    leadFormSource: 'paa-kids-infantil',
    color: 'pink',
  },
  'Kids Primary': {
    displayName: 'Inglés Primaria',
    hubPath: '/cursos-ingles/primaria',
    hubLabel: 'Primaria',
    blogFilterName: 'Niños',
    imageKey: 'students',
    leadFormSource: 'paa-kids-primaria',
    color: 'pink',
  },
  'Kids Secondary': {
    displayName: 'Inglés Secundaria',
    hubPath: '/cursos-ingles/secundaria',
    hubLabel: 'Secundaria',
    blogFilterName: 'Adolescentes',
    imageKey: 'teenagers',
    leadFormSource: 'paa-kids-secundaria',
    color: 'indigo',
  },
  'Career': {
    displayName: 'Inglés Profesional',
    hubPath: '/cursos-ingles/adultos',
    hubLabel: 'Adultos',
    blogFilterName: 'Carrera Profesional',
    imageKey: 'adults',
    leadFormSource: 'paa-career',
    color: 'slate',
  },
  'Local Madrid': {
    displayName: 'Academias Madrid',
    hubPath: '/academias-ingles-madrid',
    hubLabel: 'Academias Madrid',
    blogFilterName: 'Academias Madrid',
    imageKey: 'reception',
    leadFormSource: 'paa-local-madrid',
    color: 'red',
  },
  'Price': {
    displayName: 'Precios',
    hubPath: '/contacto',
    hubLabel: 'Contacto',
    blogFilterName: 'Precios',
    imageKey: 'reception',
    leadFormSource: 'paa-price',
    color: 'emerald',
  },
  'Definitions': {
    displayName: 'Conceptos',
    hubPath: '/blog',
    hubLabel: 'Blog',
    blogFilterName: 'Conceptos',
    imageKey: 'classroom',
    leadFormSource: 'paa-definitions',
    color: 'amber',
  },
};
