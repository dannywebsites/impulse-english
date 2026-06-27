/**
 * Impulse English Academy - Optimized Image Library
 *
 * All images are optimized with:
 * - WebP format (modern browsers) + JPEG fallback
 * - 4 responsive sizes: sm (400w), md (800w), lg (1200w), xl (1920w)
 * - SEO-optimized alt tags in Spanish (primary) and English
 * - Semantic file naming for better SEO
 *
 * WordPress Compatibility:
 * These images can be uploaded to WordPress Media Library.
 * Use the same srcset pattern with wp_get_attachment_image_srcset()
 */

export interface ImageSize {
  webp: string;
  jpg: string;
  width: number;
}

export interface OptimizedImageData {
  name: string;
  alt: string;
  altEn: string;
  category: string;
  sizes: {
    sm: ImageSize;
    md: ImageSize;
    lg: ImageSize;
    xl: ImageSize;
  };
}

// ============================================
// FACILITIES - Academy Interior/Exterior
// ============================================

// S3 Image helper - for images stored on S3 (single URL, no responsive variants)
export interface S3ImageData {
  name: string;
  alt: string;
  altEn: string;
  category: string;
  url: string;
}

export const facilityImages = {
  classroom: {
    name: 'impulse-english-academy-classroom-la-vaguada',
    alt: 'Aula moderna de Impulse English Academy en La Vaguada Madrid - clases de inglés',
    altEn: 'Modern classroom at Impulse English Academy La Vaguada Madrid - English classes',
    category: 'facilities',
    sizes: {
      sm: { webp: '/images/optimized/impulse-english-academy-classroom-la-vaguada-sm.webp', jpg: '/images/optimized/impulse-english-academy-classroom-la-vaguada-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/impulse-english-academy-classroom-la-vaguada-md.webp', jpg: '/images/optimized/impulse-english-academy-classroom-la-vaguada-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/impulse-english-academy-classroom-la-vaguada-lg.webp', jpg: '/images/optimized/impulse-english-academy-classroom-la-vaguada-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/impulse-english-academy-classroom-la-vaguada-xl.webp', jpg: '/images/optimized/impulse-english-academy-classroom-la-vaguada-xl.jpg', width: 1920 }
    }
  },

  interiorBarrioPilar: {
    name: 'academia-ingles-barrio-pilar-interior',
    alt: 'Interior academia de inglés Barrio del Pilar - ambiente de aprendizaje',
    altEn: 'English academy interior Barrio del Pilar - learning environment',
    category: 'facilities',
    sizes: {
      sm: { webp: '/images/optimized/academia-ingles-barrio-pilar-interior-sm.webp', jpg: '/images/optimized/academia-ingles-barrio-pilar-interior-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/academia-ingles-barrio-pilar-interior-md.webp', jpg: '/images/optimized/academia-ingles-barrio-pilar-interior-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/academia-ingles-barrio-pilar-interior-lg.webp', jpg: '/images/optimized/academia-ingles-barrio-pilar-interior-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/academia-ingles-barrio-pilar-interior-xl.webp', jpg: '/images/optimized/academia-ingles-barrio-pilar-interior-xl.jpg', width: 1920 }
    }
  },

  madridNorte: {
    name: 'clases-ingles-madrid-norte-instalaciones',
    alt: 'Instalaciones clases de inglés Madrid Norte - Impulse English Academy',
    altEn: 'English class facilities North Madrid - Impulse English Academy',
    category: 'facilities',
    sizes: {
      sm: { webp: '/images/optimized/clases-ingles-madrid-norte-instalaciones-sm.webp', jpg: '/images/optimized/clases-ingles-madrid-norte-instalaciones-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/clases-ingles-madrid-norte-instalaciones-md.webp', jpg: '/images/optimized/clases-ingles-madrid-norte-instalaciones-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/clases-ingles-madrid-norte-instalaciones-lg.webp', jpg: '/images/optimized/clases-ingles-madrid-norte-instalaciones-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/clases-ingles-madrid-norte-instalaciones-xl.webp', jpg: '/images/optimized/clases-ingles-madrid-norte-instalaciones-xl.jpg', width: 1920 }
    }
  },

  cambridgeClassroom: {
    name: 'academia-cambridge-madrid-aula',
    alt: 'Aula preparación exámenes Cambridge Madrid - centro oficial',
    altEn: 'Cambridge exam preparation classroom Madrid - official center',
    category: 'facilities',
    sizes: {
      sm: { webp: '/images/optimized/academia-cambridge-madrid-aula-sm.webp', jpg: '/images/optimized/academia-cambridge-madrid-aula-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/academia-cambridge-madrid-aula-md.webp', jpg: '/images/optimized/academia-cambridge-madrid-aula-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/academia-cambridge-madrid-aula-lg.webp', jpg: '/images/optimized/academia-cambridge-madrid-aula-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/academia-cambridge-madrid-aula-xl.webp', jpg: '/images/optimized/academia-cambridge-madrid-aula-xl.jpg', width: 1920 }
    }
  },

  exterior: {
    name: 'academia-ingles-la-vaguada-exterior',
    alt: 'Academia de inglés La Vaguada exterior - Impulse English Academy',
    altEn: 'English academy La Vaguada exterior - Impulse English Academy',
    category: 'facilities',
    sizes: {
      sm: { webp: '/images/optimized/academia-ingles-la-vaguada-exterior-sm.webp', jpg: '/images/optimized/academia-ingles-la-vaguada-exterior-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/academia-ingles-la-vaguada-exterior-md.webp', jpg: '/images/optimized/academia-ingles-la-vaguada-exterior-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/academia-ingles-la-vaguada-exterior-lg.webp', jpg: '/images/optimized/academia-ingles-la-vaguada-exterior-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/academia-ingles-la-vaguada-exterior-xl.webp', jpg: '/images/optimized/academia-ingles-la-vaguada-exterior-xl.jpg', width: 1920 }
    }
  }
} as const;

// ============================================
// S3 FACILITIES - Real Academy Photos from S3
// ============================================

export const s3FacilityImages = {
  classroom1: {
    name: 'impulse-academy-facility-1',
    alt: 'Estudiantes primaria felices aprendiendo inglés en Impulse English Academy La Vaguada Madrid',
    altEn: 'Happy primary students learning English at Impulse English Academy La Vaguada Madrid',
    category: 'facilities',
    url: '/images/academy/primary-classes-students-smiling.jpg'
  },
  classroom2: {
    name: 'impulse-academy-facility-2',
    alt: 'Aula de inglés Impulse English Academy - ambiente de aprendizaje',
    altEn: 'English classroom Impulse English Academy - learning environment',
    category: 'facilities',
    url: '/images/academy/nabscabdsc-6774.jpeg'
  },
  classroom3: {
    name: 'impulse-academy-facility-3',
    alt: 'Instalaciones Impulse English Academy - espacio educativo',
    altEn: 'Impulse English Academy facilities - educational space',
    category: 'facilities',
    url: '/images/academy/nabscabdsc-6785.jpeg'
  },
  classroom4: {
    name: 'impulse-academy-facility-4',
    alt: 'Academia de inglés Barrio del Pilar - vista interior',
    altEn: 'English academy Barrio del Pilar - interior view',
    category: 'facilities',
    url: '/images/academy/nabscabdsc-6786.jpeg'
  },
  classroom5: {
    name: 'impulse-academy-facility-5',
    alt: 'Centro de inglés La Vaguada - sala de clases',
    altEn: 'English center La Vaguada - classroom',
    category: 'facilities',
    url: '/images/academy/nabscabdsc-6794.jpeg'
  }
} as const;

// ============================================
// INFANTIL - Great Little People
// ============================================

export const infantilImages = {
  greatLittlePeople: {
    name: 'ingles-infantil-great-little-people-madrid',
    alt: 'Clases inglés infantil Great Little People Madrid - niños 2-5 años',
    altEn: 'Kids English classes Great Little People Madrid - children 2-5 years',
    category: 'infantil',
    sizes: {
      sm: { webp: '/images/optimized/ingles-infantil-great-little-people-madrid-sm.webp', jpg: '/images/optimized/ingles-infantil-great-little-people-madrid-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/ingles-infantil-great-little-people-madrid-md.webp', jpg: '/images/optimized/ingles-infantil-great-little-people-madrid-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/ingles-infantil-great-little-people-madrid-lg.webp', jpg: '/images/optimized/ingles-infantil-great-little-people-madrid-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/ingles-infantil-great-little-people-madrid-xl.webp', jpg: '/images/optimized/ingles-infantil-great-little-people-madrid-xl.jpg', width: 1920 }
    }
  },

  patrickPanda: {
    name: 'patrick-panda-mascota-ingles-ninos',
    alt: 'Patrick the Panda mascota inglés para niños - Great Little People',
    altEn: 'Patrick the Panda mascot English for kids - Great Little People',
    category: 'infantil',
    sizes: {
      sm: { webp: '/images/optimized/patrick-panda-mascota-ingles-ninos-sm.webp', jpg: '/images/optimized/patrick-panda-mascota-ingles-ninos-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/patrick-panda-mascota-ingles-ninos-md.webp', jpg: '/images/optimized/patrick-panda-mascota-ingles-ninos-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/patrick-panda-mascota-ingles-ninos-lg.webp', jpg: '/images/optimized/patrick-panda-mascota-ingles-ninos-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/patrick-panda-mascota-ingles-ninos-xl.webp', jpg: '/images/optimized/patrick-panda-mascota-ingles-ninos-xl.jpg', width: 1920 }
    }
  },

  kidsLearning: {
    name: 'ninos-aprendiendo-ingles-jugando',
    alt: 'Niños aprendiendo inglés jugando - metodología Great Little People',
    altEn: 'Children learning English through play - Great Little People methodology',
    category: 'infantil',
    sizes: {
      sm: { webp: '/images/optimized/ninos-aprendiendo-ingles-jugando-sm.webp', jpg: '/images/optimized/ninos-aprendiendo-ingles-jugando-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/ninos-aprendiendo-ingles-jugando-md.webp', jpg: '/images/optimized/ninos-aprendiendo-ingles-jugando-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/ninos-aprendiendo-ingles-jugando-lg.webp', jpg: '/images/optimized/ninos-aprendiendo-ingles-jugando-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/ninos-aprendiendo-ingles-jugando-xl.webp', jpg: '/images/optimized/ninos-aprendiendo-ingles-jugando-xl.jpg', width: 1920 }
    }
  }
} as const;

// ============================================
// STUDENTS - Primary & Secondary
// ============================================

export const studentImages = {
  primarySecondary: {
    name: 'estudiantes-ingles-primaria-secundaria',
    alt: 'Estudiantes de inglés primaria y secundaria - Impulse English Academy',
    altEn: 'Primary and secondary English students - Impulse English Academy',
    category: 'students',
    sizes: {
      sm: { webp: '/images/optimized/estudiantes-ingles-primaria-secundaria-sm.webp', jpg: '/images/optimized/estudiantes-ingles-primaria-secundaria-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/estudiantes-ingles-primaria-secundaria-md.webp', jpg: '/images/optimized/estudiantes-ingles-primaria-secundaria-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/estudiantes-ingles-primaria-secundaria-lg.webp', jpg: '/images/optimized/estudiantes-ingles-primaria-secundaria-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/estudiantes-ingles-primaria-secundaria-xl.webp', jpg: '/images/optimized/estudiantes-ingles-primaria-secundaria-xl.jpg', width: 1920 }
    }
  },

  teenagers: {
    name: 'clases-ingles-jovenes-madrid',
    alt: 'Clases de inglés para jóvenes Madrid - preparación Cambridge',
    altEn: 'English classes for teenagers Madrid - Cambridge preparation',
    category: 'students',
    sizes: {
      sm: { webp: '/images/optimized/clases-ingles-jovenes-madrid-sm.webp', jpg: '/images/optimized/clases-ingles-jovenes-madrid-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/clases-ingles-jovenes-madrid-md.webp', jpg: '/images/optimized/clases-ingles-jovenes-madrid-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/clases-ingles-jovenes-madrid-lg.webp', jpg: '/images/optimized/clases-ingles-jovenes-madrid-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/clases-ingles-jovenes-madrid-xl.webp', jpg: '/images/optimized/clases-ingles-jovenes-madrid-xl.jpg', width: 1920 }
    }
  }
} as const;

// ============================================
// CERTIFICATIONS - Cambridge & Linguaskill
// ============================================

export const certificationImages = {
  cambridgeCertificate: {
    name: 'certificado-oficial-cambridge-impulse',
    alt: 'Certificado oficial centro preparador Cambridge - Impulse English Academy',
    altEn: 'Official Cambridge preparation center certificate - Impulse English Academy',
    category: 'certifications',
    sizes: {
      sm: { webp: '/images/optimized/certificado-oficial-cambridge-impulse-sm.webp', jpg: '/images/optimized/certificado-oficial-cambridge-impulse-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/certificado-oficial-cambridge-impulse-md.webp', jpg: '/images/optimized/certificado-oficial-cambridge-impulse-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/certificado-oficial-cambridge-impulse-lg.webp', jpg: '/images/optimized/certificado-oficial-cambridge-impulse-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/certificado-oficial-cambridge-impulse-xl.webp', jpg: '/images/optimized/certificado-oficial-cambridge-impulse-xl.jpg', width: 1920 }
    }
  },

  cambridgeLogo: {
    name: 'cambridge-logo-centro-oficial',
    alt: 'Logo Cambridge English - centro oficial preparador exámenes',
    altEn: 'Cambridge English logo - official exam preparation center',
    category: 'certifications',
    sizes: {
      sm: { webp: '/images/optimized/cambridge-logo-centro-oficial-sm.webp', jpg: '/images/optimized/cambridge-logo-centro-oficial-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/cambridge-logo-centro-oficial-md.webp', jpg: '/images/optimized/cambridge-logo-centro-oficial-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/cambridge-logo-centro-oficial-lg.webp', jpg: '/images/optimized/cambridge-logo-centro-oficial-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/cambridge-logo-centro-oficial-xl.webp', jpg: '/images/optimized/cambridge-logo-centro-oficial-xl.jpg', width: 1920 }
    }
  },

  studentC1: {
    name: 'alumna-certificado-c1-cambridge',
    alt: 'Alumna con certificado C1 Advanced Cambridge - caso de éxito',
    altEn: 'Student with C1 Advanced Cambridge certificate - success story',
    category: 'certifications',
    sizes: {
      sm: { webp: '/images/optimized/alumna-certificado-c1-cambridge-sm.webp', jpg: '/images/optimized/alumna-certificado-c1-cambridge-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/alumna-certificado-c1-cambridge-md.webp', jpg: '/images/optimized/alumna-certificado-c1-cambridge-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/alumna-certificado-c1-cambridge-lg.webp', jpg: '/images/optimized/alumna-certificado-c1-cambridge-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/alumna-certificado-c1-cambridge-xl.webp', jpg: '/images/optimized/alumna-certificado-c1-cambridge-xl.jpg', width: 1920 }
    }
  },

  linguaskillLogo: {
    name: 'linguaskill-logo-examen-cambridge',
    alt: 'Linguaskill logo - examen Cambridge online rápido',
    altEn: 'Linguaskill logo - fast online Cambridge exam',
    category: 'linguaskill',
    sizes: {
      sm: { webp: '/images/optimized/linguaskill-logo-examen-cambridge-sm.webp', jpg: '/images/optimized/linguaskill-logo-examen-cambridge-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/linguaskill-logo-examen-cambridge-md.webp', jpg: '/images/optimized/linguaskill-logo-examen-cambridge-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/linguaskill-logo-examen-cambridge-lg.webp', jpg: '/images/optimized/linguaskill-logo-examen-cambridge-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/linguaskill-logo-examen-cambridge-xl.webp', jpg: '/images/optimized/linguaskill-logo-examen-cambridge-xl.jpg', width: 1920 }
    }
  },

  linguaskillLogoWhite: {
    name: 'linguaskill-logo-blanco',
    alt: 'Linguaskill logo blanco - certificación inglés online',
    altEn: 'Linguaskill white logo - online English certification',
    category: 'linguaskill',
    sizes: {
      sm: { webp: '/images/optimized/linguaskill-logo-blanco-sm.webp', jpg: '/images/optimized/linguaskill-logo-blanco-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/linguaskill-logo-blanco-md.webp', jpg: '/images/optimized/linguaskill-logo-blanco-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/linguaskill-logo-blanco-lg.webp', jpg: '/images/optimized/linguaskill-logo-blanco-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/linguaskill-logo-blanco-xl.webp', jpg: '/images/optimized/linguaskill-logo-blanco-xl.jpg', width: 1920 }
    }
  }
} as const;

// ============================================
// BRANDING & TEACHERS
// ============================================

export const brandingImages = {
  logo: {
    name: 'impulse-english-academy-logo-oficial',
    alt: 'Logo oficial Impulse English Academy - academia inglés Madrid',
    altEn: 'Official Impulse English Academy logo - English academy Madrid',
    category: 'branding',
    sizes: {
      sm: { webp: '/images/optimized/impulse-english-academy-logo-oficial-sm.webp', jpg: '/images/optimized/impulse-english-academy-logo-oficial-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/impulse-english-academy-logo-oficial-md.webp', jpg: '/images/optimized/impulse-english-academy-logo-oficial-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/impulse-english-academy-logo-oficial-lg.webp', jpg: '/images/optimized/impulse-english-academy-logo-oficial-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/impulse-english-academy-logo-oficial-xl.webp', jpg: '/images/optimized/impulse-english-academy-logo-oficial-xl.jpg', width: 1920 }
    }
  },

  logoS3: {
    name: 'impulse-logo-s3',
    alt: 'Logo oficial Impulse English Academy',
    altEn: 'Official Impulse English Academy logo',
    category: 'branding',
    url: '/images/academy/img-4117.png'
  },

  teacher: {
    name: 'profesor-ingles-nativo-madrid',
    alt: 'Profesor de inglés nativo en Madrid - Impulse English Academy',
    altEn: 'Native English teacher in Madrid - Impulse English Academy',
    category: 'teachers',
    sizes: {
      sm: { webp: '/images/optimized/profesor-ingles-nativo-madrid-sm.webp', jpg: '/images/optimized/profesor-ingles-nativo-madrid-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/profesor-ingles-nativo-madrid-md.webp', jpg: '/images/optimized/profesor-ingles-nativo-madrid-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/profesor-ingles-nativo-madrid-lg.webp', jpg: '/images/optimized/profesor-ingles-nativo-madrid-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/profesor-ingles-nativo-madrid-xl.webp', jpg: '/images/optimized/profesor-ingles-nativo-madrid-xl.jpg', width: 1920 }
    }
  }
} as const;

// ============================================
// ALL IMAGES - Flat export for easy iteration
// ============================================

// ============================================
// S3 REVIEW IMAGES - Student Reviews/Testimonials
// ============================================

export const s3ReviewImages = {
  review1: {
    name: 'student-review-impulse-1',
    alt: 'Alumno satisfecho Impulse English Academy - testimonio real',
    altEn: 'Satisfied student Impulse English Academy - real testimonial',
    category: 'reviews',
    url: '/images/academy/img-8597.jpg'
  },
  review2: {
    name: 'student-review-impulse-2',
    alt: 'Reseña alumno Impulse English Academy - experiencia positiva',
    altEn: 'Student review Impulse English Academy - positive experience',
    category: 'reviews',
    url: '/images/academy/img-8598.jpg'
  },
  review3: {
    name: 'student-review-impulse-3',
    alt: 'Testimonio estudiante inglés Madrid - Impulse Academy',
    altEn: 'English student testimonial Madrid - Impulse Academy',
    category: 'reviews',
    url: '/images/academy/img-8599.jpg'
  },
  review4: {
    name: 'student-review-impulse-4',
    alt: 'Opinión alumno academia inglés Barrio del Pilar',
    altEn: 'Student opinion English academy Barrio del Pilar',
    category: 'reviews',
    url: '/images/academy/img-8600.jpg'
  },
  review5: {
    name: 'student-review-impulse-5',
    alt: 'Familia satisfecha Impulse English Academy',
    altEn: 'Satisfied family Impulse English Academy',
    category: 'reviews',
    url: '/images/academy/img-8602.jpg'
  },
  review6: {
    name: 'student-review-impulse-6',
    alt: 'Estudiante feliz clases inglés La Vaguada',
    altEn: 'Happy student English classes La Vaguada',
    category: 'reviews',
    url: '/images/academy/img-8603.jpg'
  },
  review7: {
    name: 'student-review-impulse-7',
    alt: 'Alumno con certificado inglés Impulse Academy',
    altEn: 'Student with English certificate Impulse Academy',
    category: 'reviews',
    url: '/images/academy/img-8604.jpg'
  },
  review8: {
    name: 'student-review-impulse-8',
    alt: 'Éxito estudiante academia inglés Madrid Norte',
    altEn: 'Student success English academy North Madrid',
    category: 'reviews',
    url: '/images/academy/img-8605.jpg'
  },
  review9: {
    name: 'student-review-impulse-9',
    alt: 'Testimonio real alumno Impulse English',
    altEn: 'Real student testimonial Impulse English',
    category: 'reviews',
    url: '/images/academy/img-8606.jpg'
  },
  review10: {
    name: 'student-review-impulse-10',
    alt: 'Estudiante certificado Cambridge Impulse Academy',
    altEn: 'Cambridge certified student Impulse Academy',
    category: 'reviews',
    url: '/images/academy/img-8607.jpg'
  },
  review11: {
    name: 'student-review-impulse-11',
    alt: 'Reseña positiva academia inglés Madrid',
    altEn: 'Positive review English academy Madrid',
    category: 'reviews',
    url: '/images/academy/img-8608.jpg'
  },
  review12: {
    name: 'student-review-impulse-12',
    alt: 'Alumno feliz aprendiendo inglés Impulse',
    altEn: 'Happy student learning English Impulse',
    category: 'reviews',
    url: '/images/academy/img-8609.jpg'
  },
  review13: {
    name: 'student-review-impulse-13',
    alt: 'Familia recomendando Impulse English Academy',
    altEn: 'Family recommending Impulse English Academy',
    category: 'reviews',
    url: '/images/academy/img-8610.jpg'
  },
  review14: {
    name: 'student-review-impulse-14',
    alt: 'Experiencia alumno Impulse English Academy',
    altEn: 'Student experience Impulse English Academy',
    category: 'reviews',
    url: '/images/academy/img-8611.jpg'
  }
} as const;

// ============================================
// S3 SECONDARY COURSE IMAGES
// ============================================

export const s3SecondaryImages = {
  luciaStudent: {
    name: 'lucia-alumna-secundaria-impulse',
    alt: 'Lucia - alumna de secundaria en Impulse English Academy',
    altEn: 'Lucia - secondary student at Impulse English Academy',
    category: 'secondary',
    url: '/images/academy/lucia-photo-academy.jpeg'
  },
  gonzaloClass1: {
    name: 'clase-secundaria-gonzalo-1',
    alt: 'Clase de inglés secundaria - estudiantes preparando Cambridge',
    altEn: 'Secondary English class - students preparing Cambridge',
    category: 'secondary',
    url: '/images/academy/escuela-gonzalo-18.jpeg'
  },
  gonzaloClass2: {
    name: 'clase-secundaria-gonzalo-2',
    alt: 'Alumnos de secundaria en clase de inglés - Impulse Academy',
    altEn: 'Secondary students in English class - Impulse Academy',
    category: 'secondary',
    url: '/images/academy/escuela-gonzalo-4.jpeg'
  }
} as const;

// ============================================
// S3 GREAT LITTLE PEOPLE (INFANTIL) IMAGES
// ============================================

export const s3InfantilImages = {
  glpClass: {
    name: 'great-little-people-clase-infantil',
    alt: 'Clase de inglés infantil Great Little People - niños aprendiendo jugando',
    altEn: 'Kids English class Great Little People - children learning through play',
    category: 'infantil',
    url: '/images/academy/crazy-people-follow-2.jpeg'
  }
} as const;

// ============================================
// S3 LINGUASKILL IMAGES
// ============================================

export const s3LinguaskillImages = {
  logo: {
    name: 'linguaskill-logo-impulse',
    alt: 'Logo Linguaskill - examen oficial Cambridge en Impulse Academy',
    altEn: 'Linguaskill logo - official Cambridge exam at Impulse Academy',
    category: 'linguaskill',
    url: '/images/academy/linguaskill.png'
  },
  logoWhite: {
    name: 'linguaskill-logo-white-impulse',
    alt: 'Logo Linguaskill blanco - certificación inglés online',
    altEn: 'Linguaskill white logo - online English certification',
    category: 'linguaskill',
    url: '/images/academy/logo-linguaskill-white.png'
  }
} as const;

// ============================================
// S3 ADULTS/EXAMS/CAMBRIDGE IMAGES
// ============================================

export const s3CambridgeImages = {
  laraC1Cert: {
    name: 'lara-c1-certificado-cambridge',
    alt: 'Lara con certificado C1 Cambridge - caso de éxito adultos',
    altEn: 'Lara with C1 Cambridge certificate - adult success story',
    category: 'cambridge',
    url: '/images/academy/lara-c1-cert.jpeg'
  },
  cambridgeLogo: {
    name: 'cambridge-logo-centro-oficial',
    alt: 'Logo Cambridge - centro oficial preparador exámenes',
    altEn: 'Cambridge logo - official exam preparation center',
    category: 'cambridge',
    url: '/images/academy/cambridge-logo-edited.png'
  },
  cambridgeSearch: {
    name: 'cambridge-search-centro-preparador',
    alt: 'Búsqueda centro Cambridge - Impulse English Academy verificado',
    altEn: 'Cambridge center search - Impulse English Academy verified',
    category: 'cambridge',
    url: '/images/academy/cambridge-search.jpeg'
  },
  cambridgeCertificate: {
    name: 'cambridge-certificado-oficial',
    alt: 'Certificado oficial Cambridge - centro preparador autorizado',
    altEn: 'Official Cambridge certificate - authorized preparation center',
    category: 'cambridge',
    url: '/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg'
  }
} as const;

// ============================================
// COURSE CARDS — Used in CoursesSection
// ============================================

export const courseImages = {
  generalInfantil: {
    name: 'curso-ingles-general-infantil',
    alt: 'Curso de inglés general infantil - Impulse English Academy',
    altEn: 'General English course for children - Impulse English Academy',
    category: 'courses',
    sizes: {
      sm: { webp: '/images/optimized/curso-ingles-general-infantil-sm.webp', jpg: '/images/optimized/curso-ingles-general-infantil-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/curso-ingles-general-infantil-md.webp', jpg: '/images/optimized/curso-ingles-general-infantil-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/curso-ingles-general-infantil-lg.webp', jpg: '/images/optimized/curso-ingles-general-infantil-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/curso-ingles-general-infantil-xl.webp', jpg: '/images/optimized/curso-ingles-general-infantil-xl.jpg', width: 1920 }
    }
  },
  preparacionMovers: {
    name: 'curso-preparacion-movers-primaria',
    alt: 'Curso preparación MOVERS primaria - Cambridge Young Learners',
    altEn: 'MOVERS preparation course primary - Cambridge Young Learners',
    category: 'courses',
    sizes: {
      sm: { webp: '/images/optimized/curso-preparacion-movers-primaria-sm.webp', jpg: '/images/optimized/curso-preparacion-movers-primaria-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/curso-preparacion-movers-primaria-md.webp', jpg: '/images/optimized/curso-preparacion-movers-primaria-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/curso-preparacion-movers-primaria-lg.webp', jpg: '/images/optimized/curso-preparacion-movers-primaria-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/curso-preparacion-movers-primaria-xl.webp', jpg: '/images/optimized/curso-preparacion-movers-primaria-xl.jpg', width: 1920 }
    }
  },
  extensivoSecundaria: {
    name: 'curso-extensivo-secundaria',
    alt: 'Cursos extensivos inglés secundaria - Impulse English Academy',
    altEn: 'Extensive English courses secondary - Impulse English Academy',
    category: 'courses',
    sizes: {
      sm: { webp: '/images/optimized/curso-extensivo-secundaria-sm.webp', jpg: '/images/optimized/curso-extensivo-secundaria-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/curso-extensivo-secundaria-md.webp', jpg: '/images/optimized/curso-extensivo-secundaria-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/curso-extensivo-secundaria-lg.webp', jpg: '/images/optimized/curso-extensivo-secundaria-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/curso-extensivo-secundaria-xl.webp', jpg: '/images/optimized/curso-extensivo-secundaria-xl.jpg', width: 1920 }
    }
  },
  preparacionKet: {
    name: 'curso-preparacion-ket',
    alt: 'Curso preparación KET Cambridge - clases de inglés',
    altEn: 'KET Cambridge preparation course - English classes',
    category: 'courses',
    sizes: {
      sm: { webp: '/images/optimized/curso-preparacion-ket-sm.webp', jpg: '/images/optimized/curso-preparacion-ket-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/curso-preparacion-ket-md.webp', jpg: '/images/optimized/curso-preparacion-ket-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/curso-preparacion-ket-lg.webp', jpg: '/images/optimized/curso-preparacion-ket-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/curso-preparacion-ket-xl.webp', jpg: '/images/optimized/curso-preparacion-ket-xl.jpg', width: 1920 }
    }
  }
} as const;

// ============================================
// TEAM / CTA — Used in TeamSection and VideoCTA
// ============================================

export const teamImages = {
  estudiantesSonriendo: {
    name: 'estudiantes-primaria-sonriendo',
    alt: 'Estudiantes de primaria sonriendo en clase de inglés - Impulse English Academy',
    altEn: 'Primary students smiling in English class - Impulse English Academy',
    category: 'students',
    sizes: {
      sm: { webp: '/images/optimized/estudiantes-primaria-sonriendo-sm.webp', jpg: '/images/optimized/estudiantes-primaria-sonriendo-sm.jpg', width: 400 },
      md: { webp: '/images/optimized/estudiantes-primaria-sonriendo-md.webp', jpg: '/images/optimized/estudiantes-primaria-sonriendo-md.jpg', width: 800 },
      lg: { webp: '/images/optimized/estudiantes-primaria-sonriendo-lg.webp', jpg: '/images/optimized/estudiantes-primaria-sonriendo-lg.jpg', width: 1200 },
      xl: { webp: '/images/optimized/estudiantes-primaria-sonriendo-xl.webp', jpg: '/images/optimized/estudiantes-primaria-sonriendo-xl.jpg', width: 1920 }
    }
  }
} as const;

export const allImages = {
  ...facilityImages,
  ...infantilImages,
  ...studentImages,
  ...certificationImages,
  ...brandingImages
} as const;

// S3 Images grouped export
export const allS3Images = {
  ...s3FacilityImages,
  ...s3ReviewImages,
  ...s3SecondaryImages,
  ...s3InfantilImages,
  ...s3LinguaskillImages,
  ...s3CambridgeImages
} as const;

// Type exports
export type FacilityImageKey = keyof typeof facilityImages;
export type InfantilImageKey = keyof typeof infantilImages;
export type StudentImageKey = keyof typeof studentImages;
export type CertificationImageKey = keyof typeof certificationImages;
export type BrandingImageKey = keyof typeof brandingImages;
export type AllImageKey = keyof typeof allImages;
export type S3ImageKey = keyof typeof allS3Images;
