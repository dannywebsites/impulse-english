/**
 * Official Academy Photos - SEO Optimized
 * Impulse English Academy - La Vaguada, Barrio del Pilar, Madrid
 *
 * All images include:
 * - Descriptive, keyword-rich alt text (max 125 chars for search result display)
 * - Location-relevant descriptions for AI/GEO optimization
 * - Category classification for proper page assignment
 * - Aspect ratio hints for proper display (portrait, square, landscape)
 */

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
// INFANTIL PHOTOS (2-5 years) - Great Little People
// 6 photos for clean 2x3 grid on desktop - all landscape for consistency
// ============================================
export const infantilImages: AcademyImage[] = [
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG",
    alt: "Clase de inglés infantil Great Little People academia La Vaguada Barrio del Pilar Madrid",
    title: "Clases inglés infantil La Vaguada Barrio del Pilar",
    description: "Niños de infantil aprendiendo inglés con metodología Great Little People en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "infantil",
    aspectRatio: "landscape",
    keywords: ["inglés infantil la vaguada", "great little people barrio del pilar", "academia inglés niños madrid", "clases inglés infantil"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantile+classes.JPG",
    alt: "Niños pequeños clase inglés inmersión La Vaguada Barrio del Pilar Madrid",
    title: "Inmersión inglés infantil La Vaguada Madrid",
    description: "Clases de inglés para niños de 2-5 años con inmersión total en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "infantil",
    aspectRatio: "landscape",
    keywords: ["inmersión inglés niños la vaguada", "great little people madrid", "academia infantil barrio del pilar", "inglés desde 2 años"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-21.JPEG",
    alt: "Niño de infantil feliz aprendiendo inglés en academia Impulse English La Vaguada Madrid",
    title: "Clases de inglés infantil La Vaguada Madrid",
    description: "Estudiante feliz participando en clase de inglés en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "infantil",
    aspectRatio: "landscape",
    keywords: ["inglés infantil madrid", "great little people", "academia inglés la vaguada", "clases inglés niños barrio del pilar"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/INFANTS+CLASS.jpg",
    alt: "Clase de inglés para niños pequeños academia La Vaguada metodología inmersiva",
    title: "Aula de inglés infantil Impulse English La Vaguada",
    description: "Ambiente de aprendizaje para niños de infantil en Impulse English Academy. Metodología Great Little People con inmersión total en inglés desde los 2 años.",
    category: "infantil",
    aspectRatio: "landscape",
    keywords: ["clases inglés infantil", "academia inglés niños madrid", "great little people madrid", "inmersión inglés niños"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/IMG_8636.jpg",
    alt: "Estudiantes de infantil aprendiendo inglés Great Little People La Vaguada Madrid",
    title: "Grupo infantil inglés Impulse English La Vaguada",
    description: "Grupo de niños de infantil (2-5 años) en clase de inglés con metodología Great Little People en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "infantil",
    aspectRatio: "landscape",
    keywords: ["inglés infantil madrid", "great little people", "clases inglés niños 2-5 años", "academia la vaguada"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/INFANTIL+3.jpg",
    alt: "Niños pequeños clase inglés inmersión La Vaguada Barrio del Pilar Madrid",
    title: "Inmersión inglés infantil Impulse English La Vaguada",
    description: "Estudiantes de infantil en inmersión total de inglés con metodología Great Little People en Impulse English Academy, La Vaguada, Madrid.",
    category: "infantil",
    aspectRatio: "landscape",
    keywords: ["inmersión inglés niños", "great little people madrid", "academia infantil la vaguada", "inglés desde 2 años"]
  }
];

// ============================================
// PRIMARIA PHOTOS (6-12 years) - Cambridge Young Learners
// ============================================
export const primariaImages: AcademyImage[] = [
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG",
    alt: "Estudiantes primaria sonriendo clase inglés academia La Vaguada Barrio del Pilar Madrid",
    title: "Estudiantes primaria felices clase inglés La Vaguada",
    description: "Estudiantes de primaria sonriendo en clase de inglés en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Metodología comunicativa y ambiente positivo.",
    category: "primaria",
    aspectRatio: "landscape",
    keywords: ["inglés primaria la vaguada", "estudiantes felices barrio del pilar", "academia inglés niños madrid", "clases primaria inglés"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes.JPG",
    alt: "Clase inglés primaria Cambridge Young Learners La Vaguada Barrio del Pilar Madrid",
    title: "Clases primaria Cambridge La Vaguada Barrio del Pilar",
    description: "Clase de inglés para primaria (6-12 años) con preparación Cambridge Starters, Movers y Flyers en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "primaria",
    aspectRatio: "landscape",
    keywords: ["cambridge young learners la vaguada", "inglés primaria barrio del pilar", "starters movers flyers madrid", "academia inglés niños"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/IMG_8639.jpg",
    alt: "Estudiante de primaria clase inglés Cambridge Young Learners La Vaguada Madrid",
    title: "Clase primaria Cambridge Impulse English La Vaguada",
    description: "Estudiante de primaria participando en clase de inglés con preparación Cambridge Starters, Movers y Flyers en Impulse English Academy, La Vaguada.",
    category: "primaria",
    aspectRatio: "landscape",
    keywords: ["cambridge young learners", "inglés primaria madrid", "starters movers flyers", "academia la vaguada"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/IMG_8640.jpg",
    alt: "Niño de primaria aprendiendo inglés academia La Vaguada Barrio del Pilar Madrid",
    title: "Estudiante primaria Impulse English La Vaguada",
    description: "Niño de primaria en clase de inglés con metodología comunicativa en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "primaria",
    aspectRatio: "landscape",
    keywords: ["inglés primaria", "metodología comunicativa", "academia barrio del pilar", "clases inglés niños"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/IMG_8642.jpg",
    alt: "Estudiantes primaria clase inglés grupos reducidos La Vaguada Madrid",
    title: "Grupos reducidos primaria Impulse English La Vaguada",
    description: "Estudiantes de primaria en clase de inglés con grupos reducidos máximo 10 alumnos en Impulse English Academy, La Vaguada, Madrid.",
    category: "primaria",
    aspectRatio: "landscape",
    keywords: ["grupos reducidos inglés", "primaria la vaguada", "atención personalizada", "academia inglés madrid"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/IMG_8643.jpg",
    alt: "Clase inglés primaria ambiente positivo La Vaguada Barrio del Pilar Madrid",
    title: "Ambiente positivo inglés primaria Impulse English",
    description: "Ambiente de aprendizaje positivo en clase de inglés para primaria en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "primaria",
    aspectRatio: "landscape",
    keywords: ["ambiente positivo inglés", "clases primaria madrid", "academia la vaguada", "aprendizaje divertido"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/PRIAMRY.jpg",
    alt: "Estudiante de primaria inglés academia Cambridge La Vaguada Madrid",
    title: "Clases inglés primaria La Vaguada preparación Cambridge",
    description: "Estudiante de primaria (6-12 años) en clase de inglés con preparación Cambridge Young Learners en Impulse English Academy, La Vaguada, Barrio del Pilar.",
    category: "primaria",
    aspectRatio: "landscape",
    keywords: ["inglés primaria madrid", "cambridge young learners", "academia inglés la vaguada", "clases inglés niños 6-12"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg",
    alt: "Profesor JP con estudiantes y certificados Cambridge Impulse English La Vaguada Madrid",
    title: "Éxito estudiantes Cambridge Impulse English La Vaguada",
    description: "Profesor JP celebrando con estudiantes sus certificaciones Cambridge en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. 100% aprobados.",
    category: "primaria",
    aspectRatio: "landscape",
    keywords: ["certificados cambridge", "100% aprobados", "profesor jp", "academia la vaguada madrid"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png",
    alt: "Logo Cambridge English centro preparador oficial La Vaguada Madrid",
    title: "Centro Preparador Cambridge Impulse English La Vaguada",
    description: "Logo oficial Cambridge English. Impulse English Academy es centro preparador oficial Cambridge en La Vaguada, Barrio del Pilar, Madrid.",
    category: "primaria",
    aspectRatio: "landscape",
    keywords: ["cambridge logo", "centro preparador oficial", "cambridge english", "la vaguada madrid"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG",
    alt: "Certificado oficial Cambridge English academia preparación La Vaguada Madrid",
    title: "Certificado Cambridge oficial Impulse English",
    description: "Certificado oficial Cambridge English. Impulse English Academy es centro oficial de preparación Cambridge en La Vaguada, Barrio del Pilar, Madrid.",
    category: "primaria",
    aspectRatio: "portrait",
    keywords: ["certificado cambridge oficial", "centro preparación cambridge", "la vaguada madrid", "exámenes cambridge"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/DNNY+TOUR+OF+IRELAND.JPG",
    alt: "Danny tour de Irlanda Impulse English Academy excursión cultural",
    title: "Tour de Irlanda Impulse English Academy",
    description: "Excursión cultural a Irlanda organizada por Impulse English Academy. Experiencias de inmersión en inglés para estudiantes.",
    category: "primaria",
    aspectRatio: "landscape",
    keywords: ["tour irlanda", "excursión inglés", "inmersión cultural", "impulse english academy"]
  }
];

// ============================================
// SECUNDARIA PHOTOS (13-17 years) - Cambridge B1/B2/C1
// ============================================
export const secundariaImages: AcademyImage[] = [
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Daniel+helping+secondary+school+students.JPG",
    alt: "Profesor Daniel ayudando estudiantes secundaria academia inglés La Vaguada Barrio del Pilar Madrid",
    title: "Profesor Daniel secundaria La Vaguada Barrio del Pilar",
    description: "Profesor Daniel proporcionando atención personalizada a estudiantes de secundaria en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "secundaria",
    aspectRatio: "landscape",
    keywords: ["profesor inglés la vaguada", "secundaria barrio del pilar", "atención personalizada madrid", "academia inglés adolescentes"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Productive+secondary+school+students.JPG",
    alt: "Estudiantes secundaria productivos clase inglés La Vaguada Barrio del Pilar Madrid",
    title: "Estudiantes productivos secundaria La Vaguada",
    description: "Estudiantes de secundaria trabajando productivamente en clase de inglés en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "secundaria",
    aspectRatio: "landscape",
    keywords: ["secundaria inglés la vaguada", "estudiantes productivos barrio del pilar", "clases inglés madrid", "academia adolescentes"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+classes+student+happy.JPG",
    alt: "Estudiante secundaria feliz clase inglés La Vaguada Barrio del Pilar Madrid",
    title: "Estudiante feliz secundaria La Vaguada",
    description: "Estudiante de secundaria feliz en clase de inglés en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Preparación Cambridge B1/B2.",
    category: "secundaria",
    aspectRatio: "landscape",
    keywords: ["estudiante feliz la vaguada", "secundaria inglés barrio del pilar", "cambridge b2 madrid", "academia inglés adolescentes"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+classes+students+answering+questions.JPG",
    alt: "Estudiantes secundaria respondiendo preguntas clase inglés La Vaguada Barrio del Pilar Madrid",
    title: "Participación estudiantes secundaria La Vaguada",
    description: "Estudiantes de secundaria participando activamente respondiendo preguntas en clase de inglés en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "secundaria",
    aspectRatio: "landscape",
    keywords: ["participación clase inglés la vaguada", "secundaria activa barrio del pilar", "metodología comunicativa madrid", "academia inglés"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+students+-+Danny+helping+student.JPG",
    alt: "Danny ayudando estudiante secundaria academia inglés La Vaguada Barrio del Pilar Madrid",
    title: "Danny ayudando estudiante La Vaguada Barrio del Pilar",
    description: "Profesor Danny proporcionando ayuda individual a estudiante de secundaria en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "secundaria",
    aspectRatio: "landscape",
    keywords: ["profesor danny la vaguada", "atención individual barrio del pilar", "inglés secundaria madrid", "academia inglés personalizada"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/SECONDARY+OFF.jpg",
    alt: "Estudiantes secundaria clase inglés Cambridge B2 First La Vaguada Madrid",
    title: "Clases inglés secundaria preparación Cambridge La Vaguada",
    description: "Estudiantes de secundaria (13-17 años) en clase de inglés con preparación Cambridge B1 Preliminary, B2 First y C1 Advanced en Impulse English Academy.",
    category: "secundaria",
    aspectRatio: "landscape",
    keywords: ["inglés secundaria madrid", "cambridge b2 first", "academia la vaguada", "preparación EBAU inglés"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-18.JPEG",
    alt: "Profesor Daniel ayudando estudiantes secundaria inglés La Vaguada Madrid",
    title: "Profesor Daniel clase secundaria Impulse English",
    description: "Profesor Daniel proporcionando atención personalizada a estudiantes de secundaria en Impulse English Academy, La Vaguada. Grupos reducidos máximo 10 alumnos.",
    category: "secundaria",
    aspectRatio: "landscape",
    keywords: ["profesor inglés madrid", "grupos reducidos", "atención personalizada", "academia la vaguada"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/LUCIA+SECUNDARY.JPEG",
    alt: "Estudiante Lucía secundaria inglés Cambridge academia La Vaguada Barrio del Pilar",
    title: "Lucía estudiante secundaria Impulse English La Vaguada",
    description: "Lucía, estudiante de secundaria preparando examen Cambridge en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "secundaria",
    aspectRatio: "portrait",
    keywords: ["estudiante secundaria inglés", "cambridge madrid", "academia la vaguada", "preparación b2 first"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-4.JPEG",
    alt: "Estudiante secundaria trabajando feliz en clase de inglés La Vaguada Madrid",
    title: "Estudiante secundaria feliz Impulse English La Vaguada",
    description: "Estudiante de secundaria trabajando con entusiasmo en clase de inglés. Ambiente positivo de aprendizaje en Impulse English Academy, La Vaguada.",
    category: "secundaria",
    aspectRatio: "landscape",
    keywords: ["estudiante secundaria inglés", "ambiente positivo", "academia la vaguada", "clases inglés madrid"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO.JPEG",
    alt: "Estudiante secundaria concentrado clase inglés academia La Vaguada Madrid",
    title: "Estudiante secundaria concentrado Impulse English",
    description: "Estudiante de secundaria concentrado en ejercicios de inglés. Preparación intensiva para exámenes Cambridge y EBAU en academia La Vaguada.",
    category: "secundaria",
    aspectRatio: "landscape",
    keywords: ["inglés secundaria", "preparación EBAU", "cambridge b1 b2", "academia barrio del pilar"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png",
    alt: "Centro Preparador Oficial Cambridge English secundaria La Vaguada Madrid",
    title: "Centro Cambridge preparación secundaria Impulse English",
    description: "Impulse English Academy es centro preparador oficial Cambridge para estudiantes de secundaria en La Vaguada, Madrid.",
    category: "secundaria",
    aspectRatio: "landscape",
    keywords: ["cambridge centro preparador", "secundaria cambridge", "b2 first madrid", "academia la vaguada"]
  }
];

// ============================================
// ADULTOS PHOTOS - Cambridge B2/C1/C2 & Linguaskill
// 6 images for clean 3x2 grid - all landscape for consistency
// ============================================
export const adultosImages: AcademyImage[] = [
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG",
    alt: "Clases inglés adultos one-to-one individuales La Vaguada Barrio del Pilar Madrid",
    title: "Clases individuales adultos La Vaguada Barrio del Pilar",
    description: "Clases de inglés one-to-one para adultos en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Atención personalizada y horarios flexibles.",
    category: "adultos",
    aspectRatio: "landscape",
    keywords: ["clases individuales inglés la vaguada", "one-to-one barrio del pilar", "inglés adultos personalizado madrid", "academia inglés particulares"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg",
    alt: "Profesor JP con estudiantes adultos y certificados Cambridge La Vaguada Madrid",
    title: "Profesor JP con estudiantes adultos Impulse English",
    description: "Profesor JP con estudiantes adultos celebrando sus certificados Cambridge en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. 100% aprobados.",
    category: "adultos",
    aspectRatio: "landscape",
    keywords: ["profesor jp", "estudiantes adultos", "certificados cambridge", "academia la vaguada madrid"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/LARA+C1+CERT.JPEG",
    alt: "Lara con certificado Cambridge C1 Advanced academia La Vaguada Madrid",
    title: "Lara certificado C1 Advanced Impulse English",
    description: "Lara Witzert mostrando su certificado Cambridge C1 Advanced obtenido en Impulse English Academy, La Vaguada. 100% tasa de aprobados 2024-25.",
    category: "adultos",
    aspectRatio: "landscape",
    keywords: ["c1 advanced certificado", "100% aprobados cambridge", "academia la vaguada", "éxito estudiantes"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG",
    alt: "Certificado oficial Cambridge English academia preparación La Vaguada Madrid",
    title: "Certificado Cambridge oficial Impulse English",
    description: "Certificado oficial Cambridge English. Impulse English Academy es centro oficial de preparación Cambridge en La Vaguada, Barrio del Pilar, Madrid.",
    category: "adultos",
    aspectRatio: "landscape",
    keywords: ["certificado cambridge oficial", "centro preparación cambridge", "la vaguada madrid", "exámenes cambridge"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/linguaskill-logo-blanco.png",
    alt: "Examen Linguaskill centro oficial academia La Vaguada Madrid",
    title: "Centro oficial Linguaskill Impulse English La Vaguada",
    description: "Impulse English Academy es centro oficial Linguaskill en La Vaguada, Madrid. Certificación rápida con resultados en 48 horas.",
    category: "adultos",
    aspectRatio: "landscape",
    keywords: ["linguaskill madrid", "centro oficial linguaskill", "certificación rápida inglés", "academia la vaguada"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png",
    alt: "Centro Preparador Oficial Cambridge English adultos La Vaguada Madrid",
    title: "Centro Cambridge preparación adultos Impulse English",
    description: "Impulse English Academy es centro preparador oficial Cambridge para adultos en La Vaguada, Madrid.",
    category: "adultos",
    aspectRatio: "landscape",
    keywords: ["cambridge centro preparador", "adultos cambridge", "b2 first c1 advanced madrid", "academia la vaguada"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Cambridge+search.JPEG",
    alt: "Búsqueda centro Cambridge oficial Impulse English Academy verificado",
    title: "Centro Cambridge verificado Impulse English",
    description: "Impulse English Academy aparece en la búsqueda oficial de centros Cambridge como centro preparador verificado en La Vaguada, Madrid.",
    category: "adultos",
    aspectRatio: "landscape",
    keywords: ["cambridge centro verificado", "centro oficial cambridge", "preparación cambridge madrid", "academia la vaguada"]
  }
];

// ============================================
// FACILITIES PHOTOS - Academy Interior
// ============================================
export const facilitiesImages: AcademyImage[] = [
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG",
    alt: "Aula principal instalaciones academia inglés La Vaguada Barrio del Pilar Madrid",
    title: "Aula principal La Vaguada Barrio del Pilar",
    description: "Aula principal de Impulse English Academy con instalaciones modernas en La Vaguada, Barrio del Pilar, Madrid. Equipamiento audiovisual completo.",
    category: "facilities",
    aspectRatio: "landscape",
    keywords: ["aula principal la vaguada", "instalaciones barrio del pilar", "academia inglés moderna madrid", "equipamiento audiovisual"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Photos+of+facilities.JPG",
    alt: "Instalaciones academia inglés La Vaguada Barrio del Pilar Madrid",
    title: "Instalaciones Impulse English La Vaguada Barrio del Pilar",
    description: "Instalaciones de Impulse English Academy en La Vaguada, Barrio del Pilar, Madrid. Espacios diseñados para el aprendizaje efectivo del inglés.",
    category: "facilities",
    aspectRatio: "landscape",
    keywords: ["instalaciones academia la vaguada", "espacios aprendizaje barrio del pilar", "academia inglés madrid", "ambiente estudio"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Stairs.JPG",
    alt: "Escaleras interiores academia inglés La Vaguada Barrio del Pilar Madrid",
    title: "Interior academia La Vaguada Barrio del Pilar",
    description: "Escaleras interiores de Impulse English Academy en La Vaguada, Barrio del Pilar, Madrid. Dos plantas con múltiples aulas.",
    category: "facilities",
    aspectRatio: "landscape",
    keywords: ["interior academia la vaguada", "dos plantas barrio del pilar", "academia inglés amplia madrid", "instalaciones modernas"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG",
    alt: "Aula tecnológica academia inglés La Vaguada Barrio del Pilar Madrid",
    title: "Aula tecnológica La Vaguada Barrio del Pilar",
    description: "Aula con tecnología educativa avanzada en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Pizarras digitales y recursos multimedia.",
    category: "facilities",
    aspectRatio: "landscape",
    keywords: ["aula tecnológica la vaguada", "pizarra digital barrio del pilar", "tecnología educativa madrid", "recursos multimedia inglés"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Toilet+facilities.JPG",
    alt: "Aseos instalaciones academia inglés La Vaguada Barrio del Pilar Madrid",
    title: "Instalaciones aseos La Vaguada Barrio del Pilar",
    description: "Aseos limpios y modernos en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Instalaciones completas y accesibles.",
    category: "facilities",
    aspectRatio: "landscape",
    keywords: ["aseos academia la vaguada", "instalaciones completas barrio del pilar", "academia inglés accesible madrid", "servicios"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/CLASS+ROOM+FACILITIES.JPEG",
    alt: "Instalaciones aula academia inglés La Vaguada Barrio del Pilar Madrid",
    title: "Aula principal Impulse English Academy La Vaguada",
    description: "Instalaciones modernas de Impulse English Academy en La Vaguada, Barrio del Pilar, Madrid. Aulas climatizadas con grupos reducidos.",
    category: "facilities",
    aspectRatio: "landscape",
    keywords: ["instalaciones academia inglés", "aulas modernas", "la vaguada madrid", "barrio del pilar"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-18.JPEG",
    alt: "Profesor Daniel con estudiantes clase inglés academia La Vaguada Madrid",
    title: "Clase de inglés Impulse English La Vaguada",
    description: "Profesor Daniel proporcionando atención personalizada a estudiantes en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid. Grupos reducidos máximo 10 alumnos.",
    category: "facilities",
    aspectRatio: "landscape",
    keywords: ["profesor inglés madrid", "grupos reducidos", "atención personalizada", "academia la vaguada"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/%40nabscabDSC_6785.JPEG",
    alt: "Vista aérea aula Stephen academia inglés La Vaguada Madrid",
    title: "Aula de Stephen Impulse English La Vaguada",
    description: "Vista panorámica del aula de Stephen en Impulse English Academy. Espacio diseñado para grupos reducidos de máximo 10 estudiantes.",
    category: "facilities",
    aspectRatio: "landscape",
    keywords: ["aula inglés", "grupos reducidos", "academia la vaguada", "barrio del pilar madrid"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-4.JPEG",
    alt: "Estudiante feliz clase de inglés academia La Vaguada Madrid",
    title: "Estudiante Impulse English Academy La Vaguada",
    description: "Estudiante trabajando con entusiasmo en clase de inglés. Ambiente positivo de aprendizaje en Impulse English Academy, La Vaguada.",
    category: "facilities",
    aspectRatio: "landscape",
    keywords: ["estudiante inglés", "ambiente positivo", "academia la vaguada", "clases inglés madrid"]
  }
];

// ============================================
// EXTERIOR PHOTOS - Academy Building
// ============================================
export const exteriorImages: AcademyImage[] = [
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/OUTSIDE+ACADEMY.jpg",
    alt: "Fachada exterior academia inglés Impulse English La Vaguada Barrio del Pilar Madrid",
    title: "Fachada Impulse English Academy La Vaguada Madrid",
    description: "Vista exterior de Impulse English Academy, Av. de El Ferrol 22, La Vaguada, Barrio del Pilar, Madrid 28029. A 500m del Metro Barrio del Pilar.",
    category: "exterior",
    aspectRatio: "landscape",
    keywords: ["academia inglés la vaguada", "barrio del pilar madrid", "impulse english", "fuencarral el pardo"]
  }
];

// ============================================
// BRANDING PHOTOS - Logos & Certifications
// ============================================
export const brandingImages: AcademyImage[] = [
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117+(1).PNG",
    alt: "Logo oficial Impulse English Academy La Vaguada Madrid",
    title: "Logo Impulse English Academy",
    description: "Logo oficial de Impulse English Academy, academia de inglés en La Vaguada, Barrio del Pilar, Madrid. Centro oficial Cambridge y Linguaskill.",
    category: "branding",
    aspectRatio: "square",
    keywords: ["impulse english logo", "academia inglés madrid", "la vaguada", "cambridge linguaskill"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Cambridge+logo.PNG",
    alt: "Logo Cambridge Be Prepared centro oficial La Vaguada Madrid",
    title: "Centro oficial Cambridge Impulse English",
    description: "Impulse English Academy es centro oficial de preparación Cambridge en La Vaguada, Madrid. Preparamos B1 Preliminary, B2 First, C1 Advanced.",
    category: "branding",
    aspectRatio: "landscape",
    keywords: ["centro oficial cambridge", "cambridge madrid", "preparación exámenes", "la vaguada"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/GREAT+LIYYLE+PEOPEL+LOGO.png",
    alt: "Logo Great Little People metodología inglés infantil La Vaguada Madrid",
    title: "Great Little People Impulse English La Vaguada",
    description: "Metodología Great Little People para inglés infantil (2-5 años) en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid.",
    category: "branding",
    aspectRatio: "landscape",
    keywords: ["great little people", "inglés infantil", "metodología niños", "la vaguada madrid"]
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/ESIC+IDIOMAS.jpg",
    alt: "Logo ESIC Idiomas partner oficial Impulse English La Vaguada Madrid",
    title: "Partner ESIC Idiomas Impulse English",
    description: "Impulse English Academy es partner oficial de ESIC Idiomas, manteniendo estándares de enseñanza de inglés universitarios.",
    category: "branding",
    aspectRatio: "landscape",
    keywords: ["esic idiomas", "partner oficial", "estándares universitarios", "academia inglés madrid"]
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get 4 images for a specific page category
 */
export function getImagesForPage(category: AcademyImage['category']): AcademyImage[] {
  switch (category) {
    case 'infantil':
      return infantilImages.slice(0, 4);
    case 'primaria':
      return primariaImages.slice(0, 4);
    case 'secundaria':
      return secundariaImages.slice(0, 4);
    case 'adultos':
      return adultosImages.slice(0, 4);
    case 'facilities':
      return facilitiesImages.slice(0, 4);
    case 'exterior':
      return exteriorImages.slice(0, 2);
    default:
      return [];
  }
}

/**
 * Get CSS object-fit value based on aspect ratio
 * Ensures full image visibility without cropping
 */
export function getObjectFit(aspectRatio: AcademyImage['aspectRatio']): string {
  // Use object-contain for portrait images to ensure full visibility
  // Use object-cover for landscape/square with careful positioning
  return aspectRatio === 'portrait' ? 'object-contain' : 'object-cover';
}

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

/**
 * Generate all ImageObject schemas for a page
 */
export function generatePageImageSchemas(images: AcademyImage[], pageUrl: string) {
  return images.map(img => generateImageSchema(img, pageUrl));
}

/**
 * Generate ImageGallery schema for collection pages
 * Links all images to LocalBusiness for enhanced local SEO
 */
export function generateImageGallerySchema(images: AcademyImage[], pageUrl: string, galleryName: string) {
  return {
    "@type": "ImageGallery",
    "@id": `https://impulse-english.es${pageUrl}#gallery`,
    "name": galleryName,
    "description": `Galería de fotos de ${galleryName} en Impulse English Academy, La Vaguada, Barrio del Pilar, Madrid`,
    "url": `https://impulse-english.es${pageUrl}`,
    "inLanguage": "es",
    "datePublished": "2024-01-15",
    "dateModified": "2025-01-01",
    "publisher": {
      "@type": "Organization",
      "@id": "https://impulse-english.es/#organization",
      "name": "Impulse English Academy"
    },
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://impulse-english.es/#organization",
      "name": "Impulse English Academy",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. de El Ferrol, 22",
        "addressLocality": "Madrid",
        "postalCode": "28029",
        "addressCountry": "ES"
      }
    },
    "associatedMedia": images.map(img => generateImageSchema(img, pageUrl)),
    "numberOfItems": images.length,
    "contentLocation": {
      "@type": "Place",
      "@id": "https://impulse-english.es/#location",
      "name": "Impulse English Academy - La Vaguada, Barrio del Pilar",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.4789,
        "longitude": -3.7114
      }
    }
  };
}
