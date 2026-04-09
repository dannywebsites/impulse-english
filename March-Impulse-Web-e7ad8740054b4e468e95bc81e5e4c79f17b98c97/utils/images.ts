// Central Image Registry — single source of truth for all image references.
// Phase 3: Astro native image pipeline handles optimization at build time.
// Hand-rolled optimization system (OptimizedImageData, ImageSize) removed in Plan 04.
//
// All images use local paths under /images/academy/ (served from public/).

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface S3ImageData {
  name: string;
  alt: string;
  altEn: string;
  category: string;
  url: string; // Local path: /images/academy/...
}

export interface AcademyImage {
  url: string;
  alt: string;
  title: string;
  description: string;
  category: 'infantil' | 'primaria' | 'secundaria' | 'adultos' | 'facilities' | 'certificates' | 'branding' | 'exterior';
  aspectRatio: 'portrait' | 'square' | 'landscape';
  keywords: string[];
}

// ============================================
// S3 FACILITIES - Real Academy Photos (local copies)
// ============================================

export const s3FacilityImages = {
  classroom1: {
    name: 'impulse-academy-facility-1',
    alt: 'Estudiantes primaria felices aprendiendo inglés en Impulse English Academy La Vaguada Madrid',
    altEn: 'Happy primary students learning English at Impulse English Academy La Vaguada Madrid',
    category: 'facilities',
    url: '/images/academy/facilities/primary-classes-students-smiling.jpg'
  },
  classroom2: {
    name: 'impulse-academy-facility-2',
    alt: 'Aula de inglés Impulse English Academy - ambiente de aprendizaje',
    altEn: 'English classroom Impulse English Academy - learning environment',
    category: 'facilities',
    url: '/images/academy/facilities/nabscabdsc-6774.jpeg'
  },
  classroom3: {
    name: 'impulse-academy-facility-3',
    alt: 'Instalaciones Impulse English Academy - espacio educativo',
    altEn: 'Impulse English Academy facilities - educational space',
    category: 'facilities',
    url: '/images/academy/facilities/nabscabdsc-6785.jpeg'
  },
  classroom4: {
    name: 'impulse-academy-facility-4',
    alt: 'Academia de inglés Barrio del Pilar - vista interior',
    altEn: 'English academy Barrio del Pilar - interior view',
    category: 'facilities',
    url: '/images/academy/facilities/nabscabdsc-6786.jpeg'
  },
  classroom5: {
    name: 'impulse-academy-facility-5',
    alt: 'Centro de inglés La Vaguada - sala de clases',
    altEn: 'English center La Vaguada - classroom',
    category: 'facilities',
    url: '/images/academy/facilities/nabscabdsc-6794.jpeg'
  }
} as const;

// ============================================
// S3 REVIEW IMAGES - Student Reviews (local copies)
// ============================================

export const s3ReviewImages = {
  review1: {
    name: 'student-review-impulse-1',
    alt: 'Alumno satisfecho Impulse English Academy - testimonio real',
    altEn: 'Satisfied student Impulse English Academy - real testimonial',
    category: 'reviews',
    url: '/images/academy/students/img-8597.jpg'
  },
  review2: {
    name: 'student-review-impulse-2',
    alt: 'Reseña alumno Impulse English Academy - experiencia positiva',
    altEn: 'Student review Impulse English Academy - positive experience',
    category: 'reviews',
    url: '/images/academy/students/img-8598.jpg'
  },
  review3: {
    name: 'student-review-impulse-3',
    alt: 'Testimonio estudiante inglés Madrid - Impulse Academy',
    altEn: 'English student testimonial Madrid - Impulse Academy',
    category: 'reviews',
    url: '/images/academy/students/img-8599.jpg'
  },
  review4: {
    name: 'student-review-impulse-4',
    alt: 'Opinión alumno academia inglés Barrio del Pilar',
    altEn: 'Student opinion English academy Barrio del Pilar',
    category: 'reviews',
    url: '/images/academy/facilities/img-8600.jpg'
  },
  review5: {
    name: 'student-review-impulse-5',
    alt: 'Familia satisfecha Impulse English Academy',
    altEn: 'Satisfied family Impulse English Academy',
    category: 'reviews',
    url: '/images/academy/facilities/img-8602.jpg'
  },
  review6: {
    name: 'student-review-impulse-6',
    alt: 'Estudiante feliz clases inglés La Vaguada',
    altEn: 'Happy student English classes La Vaguada',
    category: 'reviews',
    url: '/images/academy/facilities/img-8603.jpg'
  },
  review7: {
    name: 'student-review-impulse-7',
    alt: 'Alumno con certificado inglés Impulse Academy',
    altEn: 'Student with English certificate Impulse Academy',
    category: 'reviews',
    url: '/images/academy/facilities/img-8604.jpg'
  },
  review8: {
    name: 'student-review-impulse-8',
    alt: 'Éxito estudiante academia inglés Madrid Norte',
    altEn: 'Student success English academy North Madrid',
    category: 'reviews',
    url: '/images/academy/facilities/img-8605.jpg'
  },
  review9: {
    name: 'student-review-impulse-9',
    alt: 'Testimonio real alumno Impulse English',
    altEn: 'Real student testimonial Impulse English',
    category: 'reviews',
    url: '/images/academy/facilities/img-8606.jpg'
  },
  review10: {
    name: 'student-review-impulse-10',
    alt: 'Estudiante certificado Cambridge Impulse Academy',
    altEn: 'Cambridge certified student Impulse Academy',
    category: 'reviews',
    url: '/images/academy/facilities/img-8607.jpg'
  },
  review11: {
    name: 'student-review-impulse-11',
    alt: 'Reseña positiva academia inglés Madrid',
    altEn: 'Positive review English academy Madrid',
    category: 'reviews',
    url: '/images/academy/facilities/img-8608.jpg'
  },
  review12: {
    name: 'student-review-impulse-12',
    alt: 'Alumno feliz aprendiendo inglés Impulse',
    altEn: 'Happy student learning English Impulse',
    category: 'reviews',
    url: '/images/academy/facilities/img-8609.jpg'
  },
  review13: {
    name: 'student-review-impulse-13',
    alt: 'Familia recomendando Impulse English Academy',
    altEn: 'Family recommending Impulse English Academy',
    category: 'reviews',
    url: '/images/academy/facilities/img-8610.jpg'
  },
  review14: {
    name: 'student-review-impulse-14',
    alt: 'Experiencia alumno Impulse English Academy',
    altEn: 'Student experience Impulse English Academy',
    category: 'reviews',
    url: '/images/academy/facilities/img-8611.jpg'
  }
} as const;

// ============================================
// S3 SECONDARY COURSE IMAGES (local copies)
// ============================================

export const s3SecondaryImages = {
  luciaStudent: {
    name: 'lucia-alumna-secundaria-impulse',
    alt: 'Lucia - alumna de secundaria en Impulse English Academy',
    altEn: 'Lucia - secondary student at Impulse English Academy',
    category: 'secondary',
    url: '/images/academy/team/lucia-photo-academy.jpeg'
  },
  gonzaloClass1: {
    name: 'clase-secundaria-gonzalo-1',
    alt: 'Clase de inglés secundaria - estudiantes preparando Cambridge',
    altEn: 'Secondary English class - students preparing Cambridge',
    category: 'secondary',
    url: '/images/academy/facilities/escuela-gonzalo-18.jpeg'
  },
  gonzaloClass2: {
    name: 'clase-secundaria-gonzalo-2',
    alt: 'Alumnos de secundaria en clase de inglés - Impulse Academy',
    altEn: 'Secondary students in English class - Impulse Academy',
    category: 'secondary',
    url: '/images/academy/facilities/escuela-gonzalo-4.jpeg'
  }
} as const;

// ============================================
// S3 GREAT LITTLE PEOPLE (INFANTIL) IMAGES (local copies)
// ============================================

export const s3InfantilImages = {
  glpClass: {
    name: 'great-little-people-clase-infantil',
    alt: 'Clase de inglés infantil Great Little People - niños aprendiendo jugando',
    altEn: 'Kids English class Great Little People - children learning through play',
    category: 'infantil',
    url: '/images/academy/facilities/crazy-people-follow-2.jpeg'
  }
} as const;

// ============================================
// S3 LINGUASKILL IMAGES (local copies)
// ============================================

export const s3LinguaskillImages = {
  logo: {
    name: 'linguaskill-logo-impulse',
    alt: 'Logo Linguaskill - examen oficial Cambridge en Impulse Academy',
    altEn: 'Linguaskill logo - official Cambridge exam at Impulse Academy',
    category: 'linguaskill',
    url: '/images/academy/logos/linguaskill.png'
  },
  logoWhite: {
    name: 'linguaskill-logo-white-impulse',
    alt: 'Logo Linguaskill blanco - certificación inglés online',
    altEn: 'Linguaskill white logo - online English certification',
    category: 'linguaskill',
    url: '/images/academy/logos/logo-linguaskill-white.png'
  }
} as const;

// ============================================
// S3 ADULTS/EXAMS/CAMBRIDGE IMAGES (local copies)
// ============================================

export const s3CambridgeImages = {
  laraC1Cert: {
    name: 'lara-c1-certificado-cambridge',
    alt: 'Lara con certificado C1 Cambridge - caso de éxito adultos',
    altEn: 'Lara with C1 Cambridge certificate - adult success story',
    category: 'cambridge',
    url: '/images/academy/students/lara-c1-cert.jpeg'
  },
  cambridgeLogo: {
    name: 'cambridge-logo-centro-oficial',
    alt: 'Logo Cambridge - centro oficial preparador exámenes',
    altEn: 'Cambridge logo - official exam preparation center',
    category: 'cambridge',
    url: '/images/academy/logos/cambridge-logo-edited.png'
  },
  cambridgeSearch: {
    name: 'cambridge-search-centro-preparador',
    alt: 'Búsqueda centro Cambridge - Impulse English Academy verificado',
    altEn: 'Cambridge center search - Impulse English Academy verified',
    category: 'cambridge',
    url: '/images/academy/facilities/cambridge-search.jpeg'
  },
  cambridgeCertificate: {
    name: 'cambridge-certificado-oficial',
    alt: 'Certificado oficial Cambridge - centro preparador autorizado',
    altEn: 'Official Cambridge certificate - authorized preparation center',
    category: 'cambridge',
    url: '/images/academy/facilities/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg'
  }
} as const;

// ============================================
// GALLERY IMAGES — From academyImages.ts with Gallery suffix
// to avoid collision with images.ts exports above.
// All S3 URLs replaced with local /images/academy/ paths.
// ============================================

// INFANTIL GALLERY (6 photos — from academyImages.ts infantilImages)
export const infantilGalleryImages: AcademyImage[] = [
  {
    url: '/images/academy/facilities/infantil-classes.jpg',
    alt: 'Clase de inglés infantil Great Little People academia La Vaguada Barrio del Pilar Madrid',
    title: 'Clases inglés infantil La Vaguada Barrio del Pilar',
    description: 'Niños de infantil aprendiendo inglés con metodología Great Little People en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'infantil',
    aspectRatio: 'landscape',
    keywords: ['inglés infantil la vaguada', 'great little people barrio del pilar', 'academia inglés niños madrid', 'clases inglés infantil']
  },
  {
    url: '/images/academy/facilities/infantile-classes.jpg',
    alt: 'Niños pequeños clase inglés inmersión La Vaguada Barrio del Pilar Madrid',
    title: 'Inmersión inglés infantil La Vaguada Madrid',
    description: 'Clases de inglés para niños de 2-5 años con inmersión total en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'infantil',
    aspectRatio: 'landscape',
    keywords: ['inmersión inglés niños la vaguada', 'great little people madrid', 'academia infantil barrio del pilar', 'inglés desde 2 años']
  },
  {
    url: '/images/academy/facilities/escuela-gonzalo-21.jpeg',
    alt: 'Niño de infantil feliz aprendiendo inglés en academia Impulse English La Vaguada Madrid',
    title: 'Clases de inglés infantil La Vaguada Madrid',
    description: 'Estudiante feliz participando en clase de inglés en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'infantil',
    aspectRatio: 'landscape',
    keywords: ['inglés infantil madrid', 'great little people', 'academia inglés la vaguada', 'clases inglés niños barrio del pilar']
  },
  {
    url: '/images/academy/facilities/infants-class.jpg',
    alt: 'Clase de inglés para niños pequeños academia La Vaguada metodología inmersiva',
    title: 'Aula de inglés infantil Impulse English La Vaguada',
    description: 'Ambiente de aprendizaje para niños de infantil en Impulse English Academy. Metodología Great Little People con inmersión total en inglés desde los 2 años.',
    category: 'infantil',
    aspectRatio: 'landscape',
    keywords: ['clases inglés infantil', 'academia inglés niños madrid', 'great little people madrid', 'inmersión inglés niños']
  },
  {
    url: '/images/academy/students/img-8636.jpg',
    alt: 'Estudiantes de infantil aprendiendo inglés Great Little People La Vaguada Madrid',
    title: 'Grupo infantil inglés Impulse English La Vaguada',
    description: 'Grupo de niños de infantil (2-5 años) en clase de inglés con metodología Great Little People en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'infantil',
    aspectRatio: 'landscape',
    keywords: ['inglés infantil madrid', 'great little people', 'clases inglés niños 2-5 años', 'academia la vaguada']
  },
  {
    url: '/images/academy/facilities/infantil-3.jpg',
    alt: 'Niños pequeños clase inglés inmersión La Vaguada Barrio del Pilar Madrid',
    title: 'Inmersión inglés infantil Impulse English La Vaguada',
    description: 'Estudiantes de infantil en inmersión total de inglés con metodología Great Little People en Impulse English Academy, La Vaguada, Madrid.',
    category: 'infantil',
    aspectRatio: 'landscape',
    keywords: ['inmersión inglés niños', 'great little people madrid', 'academia infantil la vaguada', 'inglés desde 2 años']
  }
];

// PRIMARIA GALLERY (11 photos — from academyImages.ts primariaImages)
export const primariaGalleryImages: AcademyImage[] = [
  {
    url: '/images/academy/facilities/primary-classes-students-smiling.jpg',
    alt: 'Estudiantes primaria sonriendo clase inglés academia La Vaguada Barrio del Pilar Madrid',
    title: 'Estudiantes primaria felices clase inglés La Vaguada',
    description: 'Estudiantes de primaria sonriendo en clase de inglés en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Metodología comunicativa y ambiente positivo.',
    category: 'primaria',
    aspectRatio: 'landscape',
    keywords: ['inglés primaria la vaguada', 'estudiantes felices barrio del pilar', 'academia inglés niños madrid', 'clases primaria inglés']
  },
  {
    url: '/images/academy/facilities/primary-classes.jpg',
    alt: 'Clase inglés primaria Cambridge Young Learners La Vaguada Barrio del Pilar Madrid',
    title: 'Clases primaria Cambridge La Vaguada Barrio del Pilar',
    description: 'Clase de inglés para primaria (6-12 años) con preparación Cambridge Starters, Movers y Flyers en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'primaria',
    aspectRatio: 'landscape',
    keywords: ['cambridge young learners la vaguada', 'inglés primaria barrio del pilar', 'starters movers flyers madrid', 'academia inglés niños']
  },
  {
    url: '/images/academy/students/img-8639.jpg',
    alt: 'Estudiante de primaria clase inglés Cambridge Young Learners La Vaguada Madrid',
    title: 'Clase primaria Cambridge Impulse English La Vaguada',
    description: 'Estudiante de primaria participando en clase de inglés con preparación Cambridge Starters, Movers y Flyers en Impulse English Academy, La Vaguada.',
    category: 'primaria',
    aspectRatio: 'landscape',
    keywords: ['cambridge young learners', 'inglés primaria madrid', 'starters movers flyers', 'academia la vaguada']
  },
  {
    url: '/images/academy/students/img-8640.jpg',
    alt: 'Niño de primaria aprendiendo inglés academia La Vaguada Barrio del Pilar Madrid',
    title: 'Estudiante primaria Impulse English La Vaguada',
    description: 'Niño de primaria en clase de inglés con metodología comunicativa en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'primaria',
    aspectRatio: 'landscape',
    keywords: ['inglés primaria', 'metodología comunicativa', 'academia barrio del pilar', 'clases inglés niños']
  },
  {
    url: '/images/academy/students/img-8642.jpg',
    alt: 'Estudiantes primaria clase inglés grupos reducidos La Vaguada Madrid',
    title: 'Grupos reducidos primaria Impulse English La Vaguada',
    description: 'Estudiantes de primaria en clase de inglés con grupos reducidos máximo 10 alumnos en Impulse English Academy, La Vaguada, Madrid.',
    category: 'primaria',
    aspectRatio: 'landscape',
    keywords: ['grupos reducidos inglés', 'primaria la vaguada', 'atención personalizada', 'academia inglés madrid']
  },
  {
    url: '/images/academy/students/img-8643.jpg',
    alt: 'Clase inglés primaria ambiente positivo La Vaguada Barrio del Pilar Madrid',
    title: 'Ambiente positivo inglés primaria Impulse English',
    description: 'Ambiente de aprendizaje positivo en clase de inglés para primaria en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'primaria',
    aspectRatio: 'landscape',
    keywords: ['ambiente positivo inglés', 'clases primaria madrid', 'academia la vaguada', 'aprendizaje divertido']
  },
  {
    url: '/images/academy/facilities/priamry.jpg',
    alt: 'Estudiante de primaria inglés academia Cambridge La Vaguada Madrid',
    title: 'Clases inglés primaria La Vaguada preparación Cambridge',
    description: 'Estudiante de primaria (6-12 años) en clase de inglés con preparación Cambridge Young Learners en Impulse English Academy, La Vaguada, Barrio del Pilar.',
    category: 'primaria',
    aspectRatio: 'landscape',
    keywords: ['inglés primaria madrid', 'cambridge young learners', 'academia inglés la vaguada', 'clases inglés niños 6-12']
  },
  {
    url: '/images/academy/team/jp-with-students.jpg',
    alt: 'Profesor JP con estudiantes y certificados Cambridge Impulse English La Vaguada Madrid',
    title: 'Éxito estudiantes Cambridge Impulse English La Vaguada',
    description: 'Profesor JP celebrando con estudiantes sus certificaciones Cambridge en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. 100% aprobados.',
    category: 'primaria',
    aspectRatio: 'landscape',
    keywords: ['certificados cambridge', '100% aprobados', 'profesor jp', 'academia la vaguada madrid']
  },
  {
    url: '/images/academy/logos/cambridge-logo-edited.png',
    alt: 'Logo Cambridge English centro preparador oficial La Vaguada Madrid',
    title: 'Centro Preparador Cambridge Impulse English La Vaguada',
    description: 'Logo oficial Cambridge English. Impulse English Academy es centro preparador oficial Cambridge en La Vaguada, Barrio del Pilar, Madrid.',
    category: 'primaria',
    aspectRatio: 'landscape',
    keywords: ['cambridge logo', 'centro preparador oficial', 'cambridge english', 'la vaguada madrid']
  },
  {
    url: '/images/academy/facilities/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg',
    alt: 'Certificado oficial Cambridge English academia preparación La Vaguada Madrid',
    title: 'Certificado Cambridge oficial Impulse English',
    description: 'Certificado oficial Cambridge English. Impulse English Academy es centro oficial de preparación Cambridge en La Vaguada, Barrio del Pilar, Madrid.',
    category: 'primaria',
    aspectRatio: 'portrait',
    keywords: ['certificado cambridge oficial', 'centro preparación cambridge', 'la vaguada madrid', 'exámenes cambridge']
  },
  {
    url: '/images/academy/team/dnny-tour-of-ireland.jpg',
    alt: 'Danny tour de Irlanda Impulse English Academy excursión cultural',
    title: 'Tour de Irlanda Impulse English Academy',
    description: 'Excursión cultural a Irlanda organizada por Impulse English Academy. Experiencias de inmersión en inglés para estudiantes.',
    category: 'primaria',
    aspectRatio: 'landscape',
    keywords: ['tour irlanda', 'excursión inglés', 'inmersión cultural', 'impulse english academy']
  }
];

// SECUNDARIA GALLERY (10 photos — from academyImages.ts secundariaImages)
export const secundariaGalleryImages: AcademyImage[] = [
  {
    url: '/images/academy/team/daniel-helping-secondary-school-students.jpg',
    alt: 'Profesor Daniel ayudando estudiantes secundaria academia inglés La Vaguada Barrio del Pilar Madrid',
    title: 'Profesor Daniel secundaria La Vaguada Barrio del Pilar',
    description: 'Profesor Daniel proporcionando atención personalizada a estudiantes de secundaria en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'secundaria',
    aspectRatio: 'landscape',
    keywords: ['profesor inglés la vaguada', 'secundaria barrio del pilar', 'atención personalizada madrid', 'academia inglés adolescentes']
  },
  {
    url: '/images/academy/facilities/productive-secondary-school-students.jpg',
    alt: 'Estudiantes secundaria productivos clase inglés La Vaguada Barrio del Pilar Madrid',
    title: 'Estudiantes productivos secundaria La Vaguada',
    description: 'Estudiantes de secundaria trabajando productivamente en clase de inglés en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'secundaria',
    aspectRatio: 'landscape',
    keywords: ['secundaria inglés la vaguada', 'estudiantes productivos barrio del pilar', 'clases inglés madrid', 'academia adolescentes']
  },
  {
    url: '/images/academy/facilities/secondary-classes-student-happy.jpg',
    alt: 'Estudiante secundaria feliz clase inglés La Vaguada Barrio del Pilar Madrid',
    title: 'Estudiante feliz secundaria La Vaguada',
    description: 'Estudiante de secundaria feliz en clase de inglés en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Preparación Cambridge B1/B2.',
    category: 'secundaria',
    aspectRatio: 'landscape',
    keywords: ['estudiante feliz la vaguada', 'secundaria inglés barrio del pilar', 'cambridge b2 madrid', 'academia inglés adolescentes']
  },
  {
    url: '/images/academy/facilities/secondary-classes-students-answering-questions.jpg',
    alt: 'Estudiantes secundaria respondiendo preguntas clase inglés La Vaguada Barrio del Pilar Madrid',
    title: 'Participación estudiantes secundaria La Vaguada',
    description: 'Estudiantes de secundaria participando activamente respondiendo preguntas en clase de inglés en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'secundaria',
    aspectRatio: 'landscape',
    keywords: ['participación clase inglés la vaguada', 'secundaria activa barrio del pilar', 'metodología comunicativa madrid', 'academia inglés']
  },
  {
    url: '/images/academy/team/secondary-students-danny-helping-student.jpg',
    alt: 'Danny ayudando estudiante secundaria academia inglés La Vaguada Barrio del Pilar Madrid',
    title: 'Danny ayudando estudiante La Vaguada Barrio del Pilar',
    description: 'Profesor Danny proporcionando ayuda individual a estudiante de secundaria en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'secundaria',
    aspectRatio: 'landscape',
    keywords: ['profesor danny la vaguada', 'atención individual barrio del pilar', 'inglés secundaria madrid', 'academia inglés personalizada']
  },
  {
    url: '/images/academy/facilities/secondary-off.jpg',
    alt: 'Estudiantes secundaria clase inglés Cambridge B2 First La Vaguada Madrid',
    title: 'Clases inglés secundaria preparación Cambridge La Vaguada',
    description: 'Estudiantes de secundaria (13-17 años) en clase de inglés con preparación Cambridge B1 Preliminary, B2 First y C1 Advanced en Impulse English Academy.',
    category: 'secundaria',
    aspectRatio: 'landscape',
    keywords: ['inglés secundaria madrid', 'cambridge b2 first', 'academia la vaguada', 'preparación EBAU inglés']
  },
  {
    url: '/images/academy/facilities/escuela-gonzalo-18.jpeg',
    alt: 'Profesor Daniel ayudando estudiantes secundaria inglés La Vaguada Madrid',
    title: 'Profesor Daniel clase secundaria Impulse English',
    description: 'Profesor Daniel proporcionando atención personalizada a estudiantes de secundaria en Impulse English Academy, La Vaguada. Grupos reducidos máximo 10 alumnos.',
    category: 'secundaria',
    aspectRatio: 'landscape',
    keywords: ['profesor inglés madrid', 'grupos reducidos', 'atención personalizada', 'academia la vaguada']
  },
  {
    url: '/images/academy/students/lucia-secundary.jpeg',
    alt: 'Estudiante Lucía secundaria inglés Cambridge academia La Vaguada Barrio del Pilar',
    title: 'Lucía estudiante secundaria Impulse English La Vaguada',
    description: 'Lucía, estudiante de secundaria preparando examen Cambridge en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'secundaria',
    aspectRatio: 'portrait',
    keywords: ['estudiante secundaria inglés', 'cambridge madrid', 'academia la vaguada', 'preparación b2 first']
  },
  {
    url: '/images/academy/facilities/escuela-gonzalo-4.jpeg',
    alt: 'Estudiante secundaria trabajando feliz en clase de inglés La Vaguada Madrid',
    title: 'Estudiante secundaria feliz Impulse English La Vaguada',
    description: 'Estudiante de secundaria trabajando con entusiasmo en clase de inglés. Ambiente positivo de aprendizaje en Impulse English Academy, La Vaguada.',
    category: 'secundaria',
    aspectRatio: 'landscape',
    keywords: ['estudiante secundaria inglés', 'ambiente positivo', 'academia la vaguada', 'clases inglés madrid']
  },
  {
    url: '/images/academy/facilities/escuela-gonzalo.jpeg',
    alt: 'Estudiante secundaria concentrado clase inglés academia La Vaguada Madrid',
    title: 'Estudiante secundaria concentrado Impulse English',
    description: 'Estudiante de secundaria concentrado en ejercicios de inglés. Preparación intensiva para exámenes Cambridge y EBAU en academia La Vaguada.',
    category: 'secundaria',
    aspectRatio: 'landscape',
    keywords: ['inglés secundaria', 'preparación EBAU', 'cambridge b1 b2', 'academia barrio del pilar']
  }
];

// ADULTOS GALLERY (7 photos — from academyImages.ts adultosImages)
export const adultosGalleryImages: AcademyImage[] = [
  {
    url: '/images/academy/facilities/adult-one-to-one-classes.jpg',
    alt: 'Clases inglés adultos one-to-one individuales La Vaguada Barrio del Pilar Madrid',
    title: 'Clases individuales adultos La Vaguada Barrio del Pilar',
    description: 'Clases de inglés one-to-one para adultos en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Atención personalizada y horarios flexibles.',
    category: 'adultos',
    aspectRatio: 'landscape',
    keywords: ['clases individuales inglés la vaguada', 'one-to-one barrio del pilar', 'inglés adultos personalizado madrid', 'academia inglés particulares']
  },
  {
    url: '/images/academy/team/jp-with-students.jpg',
    alt: 'Profesor JP con estudiantes adultos y certificados Cambridge La Vaguada Madrid',
    title: 'Profesor JP con estudiantes adultos Impulse English',
    description: 'Profesor JP con estudiantes adultos celebrando sus certificados Cambridge en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. 100% aprobados.',
    category: 'adultos',
    aspectRatio: 'landscape',
    keywords: ['profesor jp', 'estudiantes adultos', 'certificados cambridge', 'academia la vaguada madrid']
  },
  {
    url: '/images/academy/students/lara-c1-cert.jpeg',
    alt: 'Lara con certificado Cambridge C1 Advanced academia La Vaguada Madrid',
    title: 'Lara certificado C1 Advanced Impulse English',
    description: 'Lara Witzert mostrando su certificado Cambridge C1 Advanced obtenido en Impulse English Academy, La Vaguada. 100% tasa de aprobados 2024-25.',
    category: 'adultos',
    aspectRatio: 'landscape',
    keywords: ['c1 advanced certificado', '100% aprobados cambridge', 'academia la vaguada', 'éxito estudiantes']
  },
  {
    url: '/images/academy/facilities/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg',
    alt: 'Certificado oficial Cambridge English academia preparación La Vaguada Madrid',
    title: 'Certificado Cambridge oficial Impulse English',
    description: 'Certificado oficial Cambridge English. Impulse English Academy es centro oficial de preparación Cambridge en La Vaguada, Barrio del Pilar, Madrid.',
    category: 'adultos',
    aspectRatio: 'landscape',
    keywords: ['certificado cambridge oficial', 'centro preparación cambridge', 'la vaguada madrid', 'exámenes cambridge']
  },
  {
    url: '/images/academy/logos/linguaskill-logo-blanco.png',
    alt: 'Examen Linguaskill centro oficial academia La Vaguada Madrid',
    title: 'Centro oficial Linguaskill Impulse English La Vaguada',
    description: 'Impulse English Academy es centro oficial Linguaskill en La Vaguada, Madrid. Certificación rápida con resultados en 48 horas.',
    category: 'adultos',
    aspectRatio: 'landscape',
    keywords: ['linguaskill madrid', 'centro oficial linguaskill', 'certificación rápida inglés', 'academia la vaguada']
  },
  {
    url: '/images/academy/logos/cambridge-logo-edited.png',
    alt: 'Centro Preparador Oficial Cambridge English adultos La Vaguada Madrid',
    title: 'Centro Cambridge preparación adultos Impulse English',
    description: 'Impulse English Academy es centro preparador oficial Cambridge para adultos en La Vaguada, Madrid.',
    category: 'adultos',
    aspectRatio: 'landscape',
    keywords: ['cambridge centro preparador', 'adultos cambridge', 'b2 first c1 advanced madrid', 'academia la vaguada']
  },
  {
    url: '/images/academy/facilities/cambridge-search.jpeg',
    alt: 'Búsqueda centro Cambridge oficial Impulse English Academy verificado',
    title: 'Centro Cambridge verificado Impulse English',
    description: 'Impulse English Academy aparece en la búsqueda oficial de centros Cambridge como centro preparador verificado en La Vaguada, Madrid.',
    category: 'adultos',
    aspectRatio: 'landscape',
    keywords: ['cambridge centro verificado', 'centro oficial cambridge', 'preparación cambridge madrid', 'academia la vaguada']
  }
];

// FACILITIES GALLERY (8 photos — from academyImages.ts facilitiesImages)
export const facilitiesGalleryImages: AcademyImage[] = [
  {
    url: '/images/academy/facilities/classroom-facilities-main-classroom.jpg',
    alt: 'Aula principal instalaciones academia inglés La Vaguada Barrio del Pilar Madrid',
    title: 'Aula principal La Vaguada Barrio del Pilar',
    description: 'Aula principal de Impulse English Academy con instalaciones modernas en La Vaguada, Barrio del Pilar, Madrid. Equipamiento audiovisual completo.',
    category: 'facilities',
    aspectRatio: 'landscape',
    keywords: ['aula principal la vaguada', 'instalaciones barrio del pilar', 'academia inglés moderna madrid', 'equipamiento audiovisual']
  },
  {
    url: '/images/academy/facilities/photos-of-facilities.jpg',
    alt: 'Instalaciones academia inglés La Vaguada Barrio del Pilar Madrid',
    title: 'Instalaciones Impulse English La Vaguada Barrio del Pilar',
    description: 'Instalaciones de Impulse English Academy en La Vaguada, Barrio del Pilar, Madrid. Espacios diseñados para el aprendizaje efectivo del inglés.',
    category: 'facilities',
    aspectRatio: 'landscape',
    keywords: ['instalaciones academia la vaguada', 'espacios aprendizaje barrio del pilar', 'academia inglés madrid', 'ambiente estudio']
  },
  {
    url: '/images/academy/facilities/stairs.jpg',
    alt: 'Escaleras interiores academia inglés La Vaguada Barrio del Pilar Madrid',
    title: 'Interior academia La Vaguada Barrio del Pilar',
    description: 'Escaleras interiores de Impulse English Academy en La Vaguada, Barrio del Pilar, Madrid. Dos plantas con múltiples aulas.',
    category: 'facilities',
    aspectRatio: 'landscape',
    keywords: ['interior academia la vaguada', 'dos plantas barrio del pilar', 'academia inglés amplia madrid', 'instalaciones modernas']
  },
  {
    url: '/images/academy/facilities/technology-based-classroom-photo.jpg',
    alt: 'Aula tecnológica academia inglés La Vaguada Barrio del Pilar Madrid',
    title: 'Aula tecnológica La Vaguada Barrio del Pilar',
    description: 'Aula con tecnología educativa avanzada en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Pizarras digitales y recursos multimedia.',
    category: 'facilities',
    aspectRatio: 'landscape',
    keywords: ['aula tecnológica la vaguada', 'pizarra digital barrio del pilar', 'tecnología educativa madrid', 'recursos multimedia inglés']
  },
  {
    url: '/images/academy/facilities/toilet-facilities.jpg',
    alt: 'Aseos instalaciones academia inglés La Vaguada Barrio del Pilar Madrid',
    title: 'Instalaciones aseos La Vaguada Barrio del Pilar',
    description: 'Aseos limpios y modernos en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Instalaciones completas y accesibles.',
    category: 'facilities',
    aspectRatio: 'landscape',
    keywords: ['aseos academia la vaguada', 'instalaciones completas barrio del pilar', 'academia inglés accesible madrid', 'servicios']
  },
  {
    url: '/images/academy/facilities/class-room-facilities.jpeg',
    alt: 'Instalaciones aula academia inglés La Vaguada Barrio del Pilar Madrid',
    title: 'Aula principal Impulse English Academy La Vaguada',
    description: 'Instalaciones modernas de Impulse English Academy en La Vaguada, Barrio del Pilar, Madrid. Aulas climatizadas con grupos reducidos.',
    category: 'facilities',
    aspectRatio: 'landscape',
    keywords: ['instalaciones academia inglés', 'aulas modernas', 'la vaguada madrid', 'barrio del pilar']
  },
  {
    url: '/images/academy/facilities/escuela-gonzalo-18.jpeg',
    alt: 'Profesor Daniel con estudiantes clase inglés academia La Vaguada Madrid',
    title: 'Clase de inglés Impulse English La Vaguada',
    description: 'Profesor Daniel proporcionando atención personalizada a estudiantes en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Grupos reducidos máximo 10 alumnos.',
    category: 'facilities',
    aspectRatio: 'landscape',
    keywords: ['profesor inglés madrid', 'grupos reducidos', 'atención personalizada', 'academia la vaguada']
  },
  {
    url: '/images/academy/facilities/nabscabdsc-6785.jpeg',
    alt: 'Vista aérea aula Stephen academia inglés La Vaguada Madrid',
    title: 'Aula de Stephen Impulse English La Vaguada',
    description: 'Vista panorámica del aula de Stephen en Impulse English Academy. Espacio diseñado para grupos reducidos de máximo 10 estudiantes.',
    category: 'facilities',
    aspectRatio: 'landscape',
    keywords: ['aula inglés', 'grupos reducidos', 'academia la vaguada', 'barrio del pilar madrid']
  }
];

// CERTIFICATES GALLERY (empty — certificatesImages did not exist in academyImages.ts)
export const certificatesGalleryImages: AcademyImage[] = [];

// BRANDING GALLERY (4 photos — from academyImages.ts brandingImages)
// Note: renamed from brandingImages to avoid collision with brandingImages (OptimizedImageData)
export const brandingGalleryImages: AcademyImage[] = [
  {
    url: '/images/academy/logos/img-4117-1.png',
    alt: 'Logo oficial Impulse English Academy La Vaguada Madrid',
    title: 'Logo Impulse English Academy',
    description: 'Logo oficial de Impulse English Academy, academia de inglés en La Vaguada, Barrio del Pilar, Madrid. Centro oficial Cambridge y Linguaskill.',
    category: 'branding',
    aspectRatio: 'square',
    keywords: ['impulse english logo', 'academia inglés madrid', 'la vaguada', 'cambridge linguaskill']
  },
  {
    url: '/images/academy/logos/cambridge-logo.png',
    alt: 'Logo Cambridge Be Prepared centro oficial La Vaguada Madrid',
    title: 'Centro oficial Cambridge Impulse English',
    description: 'Impulse English Academy es centro oficial de preparación Cambridge en La Vaguada, Madrid. Preparamos B1 Preliminary, B2 First, C1 Advanced.',
    category: 'branding',
    aspectRatio: 'landscape',
    keywords: ['centro oficial cambridge', 'cambridge madrid', 'preparación exámenes', 'la vaguada']
  },
  {
    url: '/images/academy/logos/great-liyyle-peopel-logo.png',
    alt: 'Logo Great Little People metodología inglés infantil La Vaguada Madrid',
    title: 'Great Little People Impulse English La Vaguada',
    description: 'Metodología Great Little People para inglés infantil (2-5 años) en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.',
    category: 'branding',
    aspectRatio: 'landscape',
    keywords: ['great little people', 'inglés infantil', 'metodología niños', 'la vaguada madrid']
  },
  {
    url: '/images/academy/logos/esic-idiomas.jpg',
    alt: 'Logo ESIC Idiomas partner oficial Impulse English La Vaguada Madrid',
    title: 'Partner ESIC Idiomas Impulse English',
    description: 'Impulse English Academy es partner oficial de ESIC Idiomas, manteniendo estándares de enseñanza de inglés universitarios.',
    category: 'branding',
    aspectRatio: 'landscape',
    keywords: ['esic idiomas', 'partner oficial', 'estándares universitarios', 'academia inglés madrid']
  }
];

// EXTERIOR GALLERY (1 photo — from academyImages.ts exteriorImages)
export const exteriorGalleryImages: AcademyImage[] = [
  {
    url: '/images/academy/locations/outside-academy.jpg',
    alt: 'Fachada exterior academia inglés Impulse English La Vaguada Barrio del Pilar Madrid',
    title: 'Fachada Impulse English Academy La Vaguada Madrid',
    description: 'Vista exterior de Impulse English Academy, Av. de El Ferrol 22, La Vaguada, Barrio del Pilar, Madrid 28029. A 500m del Metro Barrio del Pilar.',
    category: 'exterior',
    aspectRatio: 'landscape',
    keywords: ['academia inglés la vaguada', 'barrio del pilar madrid', 'impulse english', 'fuencarral el pardo']
  }
];

// ============================================
// HELPER FUNCTIONS (from academyImages.ts)
// ============================================

/**
 * Generate ImageObject schema for an image
 * Enhanced with datePublished, author, @id linking for local SEO
 */
export function generateImageSchema(image: AcademyImage, pageUrl: string) {
  const imageId = image.url.split('/').pop()?.replace(/[^a-zA-Z0-9]/g, '-') || 'image';

  return {
    "@type": "ImageObject",
    "@id": `https://impulse-english.es/#image-${imageId}`,
    "url": image.url,
    "name": image.title,
    "description": image.description,
    "caption": image.alt,
    "contentUrl": image.url,
    "encodingFormat": image.url.toLowerCase().endsWith('.png') ? "image/png" : "image/jpeg",
    "inLanguage": "es",
    "datePublished": "2024-01-15",
    "dateModified": "2025-01-01",
    "author": {
      "@type": "Organization",
      "@id": "https://impulse-english.es/#organization",
      "name": "Impulse English Academy"
    },
    "copyrightHolder": {
      "@type": "Organization",
      "@id": "https://impulse-english.es/#organization",
      "name": "Impulse English Academy"
    },
    "creator": {
      "@type": "Organization",
      "@id": "https://impulse-english.es/#organization",
      "name": "Impulse English Academy"
    },
    "isPartOf": {
      "@type": "WebPage",
      "@id": `https://impulse-english.es${pageUrl}`,
      "url": `https://impulse-english.es${pageUrl}`
    },
    "contentLocation": {
      "@type": "Place",
      "@id": "https://impulse-english.es/#location",
      "name": "Impulse English Academy - La Vaguada, Barrio del Pilar",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. de El Ferrol, 22",
        "addressLocality": "Madrid",
        "addressRegion": "Madrid",
        "postalCode": "28029",
        "addressCountry": "ES",
        "areaServed": "La Vaguada, Barrio del Pilar"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.4789,
        "longitude": -3.7114
      }
    },
    "keywords": image.keywords.join(", ")
  };
}

// ============================================
// AGGREGATE EXPORTS (convenience)
// ============================================

export const allImages = {} as const;

export const allS3Images = {
  ...s3FacilityImages,
  ...s3ReviewImages,
  ...s3SecondaryImages,
  ...s3InfantilImages,
  ...s3LinguaskillImages,
  ...s3CambridgeImages
} as const;

// ============================================
// BLOG IMAGES — Named registry for all 8 unique images used across blog pages
// Blog pages use S3ImageData shape (single url, no responsive variants).
// ============================================

export const blogImages = {
  cambridgeCertificate: {
    name: 'cambridge-certificado-oficial-blog',
    alt: 'Certificado oficial Cambridge - centro preparador autorizado',
    altEn: 'Official Cambridge certificate - authorized preparation center',
    category: 'cambridge',
    url: '/images/academy/facilities/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg'
  },
  mainClassroom: {
    name: 'aula-principal-impulse-blog',
    alt: 'Aula principal academia de inglés Impulse English Academy Madrid',
    altEn: 'Main classroom Impulse English Academy Madrid',
    category: 'facilities',
    url: '/images/academy/facilities/classroom-facilities-main-classroom.jpg'
  },
  technologyClassroom: {
    name: 'aula-tecnologica-impulse-blog',
    alt: 'Aula tecnológica preparación exámenes Impulse English Academy',
    altEn: 'Technology classroom exam preparation Impulse English Academy',
    category: 'facilities',
    url: '/images/academy/facilities/technology-based-classroom-photo.jpg'
  },
  infantilClass: {
    name: 'clase-infantil-impulse-blog',
    alt: 'Clase de inglés infantil Great Little People Impulse English Academy',
    altEn: 'Kids English class Great Little People Impulse English Academy',
    category: 'infantil',
    url: '/images/academy/facilities/infantil-classes.jpg'
  },
  adultOneToOne: {
    name: 'clases-adultos-one-to-one-blog',
    alt: 'Clases individuales de inglés para adultos Impulse English Academy',
    altEn: 'One-to-one adult English classes Impulse English Academy',
    category: 'adults',
    url: '/images/academy/facilities/adult-one-to-one-classes.jpg'
  },
  outsideAcademy: {
    name: 'exterior-academia-impulse-blog',
    alt: 'Exterior academia de inglés Impulse English Academy Madrid',
    altEn: 'Exterior of Impulse English Academy Madrid',
    category: 'locations',
    url: '/images/academy/locations/outside-academy.jpg'
  },
  cambridgeLogo: {
    name: 'cambridge-logo-centro-oficial-blog',
    alt: 'Logo Cambridge - centro oficial preparador exámenes',
    altEn: 'Cambridge logo - official exam preparation center',
    category: 'cambridge',
    url: '/images/academy/logos/cambridge-logo-edited.png'
  },
  jpWithStudents: {
    name: 'jp-con-estudiantes-certificados-blog',
    alt: 'Profesor JP con estudiantes y certificados Cambridge Impulse English Academy',
    altEn: 'Teacher JP with students and Cambridge certificates Impulse English Academy',
    category: 'team',
    url: '/images/academy/team/jp-with-students.jpg'
  }
} as const satisfies Record<string, S3ImageData>;

// Type exports
export type AllImageKey = keyof typeof allImages;
export type S3ImageKey = keyof typeof allS3Images;
export type BlogImageKey = keyof typeof blogImages;
