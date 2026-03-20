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
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-classroom-la-vaguada-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-classroom-la-vaguada-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-classroom-la-vaguada-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-classroom-la-vaguada-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-classroom-la-vaguada-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-classroom-la-vaguada-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-classroom-la-vaguada-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-classroom-la-vaguada-xl.jpg', width: 1920 }
    }
  },

  interiorBarrioPilar: {
    name: 'academia-ingles-barrio-pilar-interior',
    alt: 'Interior academia de inglés Barrio del Pilar - ambiente de aprendizaje',
    altEn: 'English academy interior Barrio del Pilar - learning environment',
    category: 'facilities',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-barrio-pilar-interior-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-barrio-pilar-interior-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-barrio-pilar-interior-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-barrio-pilar-interior-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-barrio-pilar-interior-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-barrio-pilar-interior-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-barrio-pilar-interior-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-barrio-pilar-interior-xl.jpg', width: 1920 }
    }
  },

  madridNorte: {
    name: 'clases-ingles-madrid-norte-instalaciones',
    alt: 'Instalaciones clases de inglés Madrid Norte - Impulse English Academy',
    altEn: 'English class facilities North Madrid - Impulse English Academy',
    category: 'facilities',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-madrid-norte-instalaciones-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-madrid-norte-instalaciones-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-madrid-norte-instalaciones-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-madrid-norte-instalaciones-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-madrid-norte-instalaciones-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-madrid-norte-instalaciones-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-madrid-norte-instalaciones-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-madrid-norte-instalaciones-xl.jpg', width: 1920 }
    }
  },

  cambridgeClassroom: {
    name: 'academia-cambridge-madrid-aula',
    alt: 'Aula preparación exámenes Cambridge Madrid - centro oficial',
    altEn: 'Cambridge exam preparation classroom Madrid - official center',
    category: 'facilities',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-cambridge-madrid-aula-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-cambridge-madrid-aula-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-cambridge-madrid-aula-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-cambridge-madrid-aula-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-cambridge-madrid-aula-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-cambridge-madrid-aula-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-cambridge-madrid-aula-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-cambridge-madrid-aula-xl.jpg', width: 1920 }
    }
  },

  exterior: {
    name: 'academia-ingles-la-vaguada-exterior',
    alt: 'Academia de inglés La Vaguada exterior - Impulse English Academy',
    altEn: 'English academy La Vaguada exterior - Impulse English Academy',
    category: 'facilities',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-la-vaguada-exterior-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-la-vaguada-exterior-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-la-vaguada-exterior-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-la-vaguada-exterior-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-la-vaguada-exterior-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-la-vaguada-exterior-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-la-vaguada-exterior-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/academia-ingles-la-vaguada-exterior-xl.jpg', width: 1920 }
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
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG'
  },
  classroom2: {
    name: 'impulse-academy-facility-2',
    alt: 'Aula de inglés Impulse English Academy - ambiente de aprendizaje',
    altEn: 'English classroom Impulse English Academy - learning environment',
    category: 'facilities',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/%40nabscabDSC_6774.JPEG'
  },
  classroom3: {
    name: 'impulse-academy-facility-3',
    alt: 'Instalaciones Impulse English Academy - espacio educativo',
    altEn: 'Impulse English Academy facilities - educational space',
    category: 'facilities',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/%40nabscabDSC_6785.JPEG'
  },
  classroom4: {
    name: 'impulse-academy-facility-4',
    alt: 'Academia de inglés Barrio del Pilar - vista interior',
    altEn: 'English academy Barrio del Pilar - interior view',
    category: 'facilities',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/%40nabscabDSC_6786.JPEG'
  },
  classroom5: {
    name: 'impulse-academy-facility-5',
    alt: 'Centro de inglés La Vaguada - sala de clases',
    altEn: 'English center La Vaguada - classroom',
    category: 'facilities',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/%40nabscabDSC_6794.JPEG'
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
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/ingles-infantil-great-little-people-madrid-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/ingles-infantil-great-little-people-madrid-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/ingles-infantil-great-little-people-madrid-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/ingles-infantil-great-little-people-madrid-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/ingles-infantil-great-little-people-madrid-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/ingles-infantil-great-little-people-madrid-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/ingles-infantil-great-little-people-madrid-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/ingles-infantil-great-little-people-madrid-xl.jpg', width: 1920 }
    }
  },

  patrickPanda: {
    name: 'patrick-panda-mascota-ingles-ninos',
    alt: 'Patrick the Panda mascota inglés para niños - Great Little People',
    altEn: 'Patrick the Panda mascot English for kids - Great Little People',
    category: 'infantil',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/patrick-panda-mascota-ingles-ninos-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/patrick-panda-mascota-ingles-ninos-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/patrick-panda-mascota-ingles-ninos-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/patrick-panda-mascota-ingles-ninos-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/patrick-panda-mascota-ingles-ninos-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/patrick-panda-mascota-ingles-ninos-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/patrick-panda-mascota-ingles-ninos-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/patrick-panda-mascota-ingles-ninos-xl.jpg', width: 1920 }
    }
  },

  kidsLearning: {
    name: 'ninos-aprendiendo-ingles-jugando',
    alt: 'Niños aprendiendo inglés jugando - metodología Great Little People',
    altEn: 'Children learning English through play - Great Little People methodology',
    category: 'infantil',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/ninos-aprendiendo-ingles-jugando-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/ninos-aprendiendo-ingles-jugando-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/ninos-aprendiendo-ingles-jugando-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/ninos-aprendiendo-ingles-jugando-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/ninos-aprendiendo-ingles-jugando-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/ninos-aprendiendo-ingles-jugando-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/ninos-aprendiendo-ingles-jugando-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/ninos-aprendiendo-ingles-jugando-xl.jpg', width: 1920 }
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
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/estudiantes-ingles-primaria-secundaria-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/estudiantes-ingles-primaria-secundaria-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/estudiantes-ingles-primaria-secundaria-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/estudiantes-ingles-primaria-secundaria-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/estudiantes-ingles-primaria-secundaria-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/estudiantes-ingles-primaria-secundaria-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/estudiantes-ingles-primaria-secundaria-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/estudiantes-ingles-primaria-secundaria-xl.jpg', width: 1920 }
    }
  },

  teenagers: {
    name: 'clases-ingles-jovenes-madrid',
    alt: 'Clases de inglés para jóvenes Madrid - preparación Cambridge',
    altEn: 'English classes for teenagers Madrid - Cambridge preparation',
    category: 'students',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-jovenes-madrid-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-jovenes-madrid-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-jovenes-madrid-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-jovenes-madrid-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-jovenes-madrid-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-jovenes-madrid-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-jovenes-madrid-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/clases-ingles-jovenes-madrid-xl.jpg', width: 1920 }
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
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/certificado-oficial-cambridge-impulse-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/certificado-oficial-cambridge-impulse-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/certificado-oficial-cambridge-impulse-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/certificado-oficial-cambridge-impulse-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/certificado-oficial-cambridge-impulse-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/certificado-oficial-cambridge-impulse-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/certificado-oficial-cambridge-impulse-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/certificado-oficial-cambridge-impulse-xl.jpg', width: 1920 }
    }
  },

  cambridgeLogo: {
    name: 'cambridge-logo-centro-oficial',
    alt: 'Logo Cambridge English - centro oficial preparador exámenes',
    altEn: 'Cambridge English logo - official exam preparation center',
    category: 'certifications',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/cambridge-logo-centro-oficial-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/cambridge-logo-centro-oficial-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/cambridge-logo-centro-oficial-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/cambridge-logo-centro-oficial-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/cambridge-logo-centro-oficial-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/cambridge-logo-centro-oficial-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/cambridge-logo-centro-oficial-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/cambridge-logo-centro-oficial-xl.jpg', width: 1920 }
    }
  },

  studentC1: {
    name: 'alumna-certificado-c1-cambridge',
    alt: 'Alumna con certificado C1 Advanced Cambridge - caso de éxito',
    altEn: 'Student with C1 Advanced Cambridge certificate - success story',
    category: 'certifications',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/alumna-certificado-c1-cambridge-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/alumna-certificado-c1-cambridge-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/alumna-certificado-c1-cambridge-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/alumna-certificado-c1-cambridge-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/alumna-certificado-c1-cambridge-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/alumna-certificado-c1-cambridge-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/alumna-certificado-c1-cambridge-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/alumna-certificado-c1-cambridge-xl.jpg', width: 1920 }
    }
  },

  linguaskillLogo: {
    name: 'linguaskill-logo-examen-cambridge',
    alt: 'Linguaskill logo - examen Cambridge online rápido',
    altEn: 'Linguaskill logo - fast online Cambridge exam',
    category: 'linguaskill',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-examen-cambridge-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-examen-cambridge-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-examen-cambridge-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-examen-cambridge-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-examen-cambridge-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-examen-cambridge-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-examen-cambridge-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-examen-cambridge-xl.jpg', width: 1920 }
    }
  },

  linguaskillLogoWhite: {
    name: 'linguaskill-logo-blanco',
    alt: 'Linguaskill logo blanco - certificación inglés online',
    altEn: 'Linguaskill white logo - online English certification',
    category: 'linguaskill',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-blanco-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-blanco-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-blanco-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-blanco-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-blanco-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-blanco-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-blanco-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/linguaskill-logo-blanco-xl.jpg', width: 1920 }
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
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-logo-oficial-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-logo-oficial-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-logo-oficial-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-logo-oficial-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-logo-oficial-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-logo-oficial-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-logo-oficial-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/impulse-english-academy-logo-oficial-xl.jpg', width: 1920 }
    }
  },

  logoS3: {
    name: 'impulse-logo-s3',
    alt: 'Logo oficial Impulse English Academy',
    altEn: 'Official Impulse English Academy logo',
    category: 'branding',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117.PNG'
  },

  teacher: {
    name: 'profesor-ingles-nativo-madrid',
    alt: 'Profesor de inglés nativo en Madrid - Impulse English Academy',
    altEn: 'Native English teacher in Madrid - Impulse English Academy',
    category: 'teachers',
    sizes: {
      sm: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/profesor-ingles-nativo-madrid-sm.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/profesor-ingles-nativo-madrid-sm.jpg', width: 400 },
      md: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/profesor-ingles-nativo-madrid-md.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/profesor-ingles-nativo-madrid-md.jpg', width: 800 },
      lg: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/profesor-ingles-nativo-madrid-lg.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/profesor-ingles-nativo-madrid-lg.jpg', width: 1200 },
      xl: { webp: '/wp-content/themes/impulse-english/assets/images/optimized/profesor-ingles-nativo-madrid-xl.webp', jpg: '/wp-content/themes/impulse-english/assets/images/optimized/profesor-ingles-nativo-madrid-xl.jpg', width: 1920 }
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
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8597.jpg'
  },
  review2: {
    name: 'student-review-impulse-2',
    alt: 'Reseña alumno Impulse English Academy - experiencia positiva',
    altEn: 'Student review Impulse English Academy - positive experience',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8598.jpg'
  },
  review3: {
    name: 'student-review-impulse-3',
    alt: 'Testimonio estudiante inglés Madrid - Impulse Academy',
    altEn: 'English student testimonial Madrid - Impulse Academy',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8599.jpg'
  },
  review4: {
    name: 'student-review-impulse-4',
    alt: 'Opinión alumno academia inglés Barrio del Pilar',
    altEn: 'Student opinion English academy Barrio del Pilar',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8600.jpg'
  },
  review5: {
    name: 'student-review-impulse-5',
    alt: 'Familia satisfecha Impulse English Academy',
    altEn: 'Satisfied family Impulse English Academy',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8602.jpg'
  },
  review6: {
    name: 'student-review-impulse-6',
    alt: 'Estudiante feliz clases inglés La Vaguada',
    altEn: 'Happy student English classes La Vaguada',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8603.jpg'
  },
  review7: {
    name: 'student-review-impulse-7',
    alt: 'Alumno con certificado inglés Impulse Academy',
    altEn: 'Student with English certificate Impulse Academy',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8604.jpg'
  },
  review8: {
    name: 'student-review-impulse-8',
    alt: 'Éxito estudiante academia inglés Madrid Norte',
    altEn: 'Student success English academy North Madrid',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8605.jpg'
  },
  review9: {
    name: 'student-review-impulse-9',
    alt: 'Testimonio real alumno Impulse English',
    altEn: 'Real student testimonial Impulse English',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8606.jpg'
  },
  review10: {
    name: 'student-review-impulse-10',
    alt: 'Estudiante certificado Cambridge Impulse Academy',
    altEn: 'Cambridge certified student Impulse Academy',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8607.jpg'
  },
  review11: {
    name: 'student-review-impulse-11',
    alt: 'Reseña positiva academia inglés Madrid',
    altEn: 'Positive review English academy Madrid',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8608.jpg'
  },
  review12: {
    name: 'student-review-impulse-12',
    alt: 'Alumno feliz aprendiendo inglés Impulse',
    altEn: 'Happy student learning English Impulse',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8609.jpg'
  },
  review13: {
    name: 'student-review-impulse-13',
    alt: 'Familia recomendando Impulse English Academy',
    altEn: 'Family recommending Impulse English Academy',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8610.jpg'
  },
  review14: {
    name: 'student-review-impulse-14',
    alt: 'Experiencia alumno Impulse English Academy',
    altEn: 'Student experience Impulse English Academy',
    category: 'reviews',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8611.jpg'
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
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Lucia+Photo+Academy.JPEG'
  },
  gonzaloClass1: {
    name: 'clase-secundaria-gonzalo-1',
    alt: 'Clase de inglés secundaria - estudiantes preparando Cambridge',
    altEn: 'Secondary English class - students preparing Cambridge',
    category: 'secondary',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-18.JPEG'
  },
  gonzaloClass2: {
    name: 'clase-secundaria-gonzalo-2',
    alt: 'Alumnos de secundaria en clase de inglés - Impulse Academy',
    altEn: 'Secondary students in English class - Impulse Academy',
    category: 'secondary',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-4.JPEG'
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
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/crazy+people+follow+2.JPEG'
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
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/LINGUASKILL.png'
  },
  logoWhite: {
    name: 'linguaskill-logo-white-impulse',
    alt: 'Logo Linguaskill blanco - certificación inglés online',
    altEn: 'Linguaskill white logo - online English certification',
    category: 'linguaskill',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Logo-Linguaskill_white.png'
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
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/LARA+C1+CERT.JPEG'
  },
  cambridgeLogo: {
    name: 'cambridge-logo-centro-oficial',
    alt: 'Logo Cambridge - centro oficial preparador exámenes',
    altEn: 'Cambridge logo - official exam preparation center',
    category: 'cambridge',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png'
  },
  cambridgeSearch: {
    name: 'cambridge-search-centro-preparador',
    alt: 'Búsqueda centro Cambridge - Impulse English Academy verificado',
    altEn: 'Cambridge center search - Impulse English Academy verified',
    category: 'cambridge',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Cambridge+search.JPEG'
  },
  cambridgeCertificate: {
    name: 'cambridge-certificado-oficial',
    alt: 'Certificado oficial Cambridge - centro preparador autorizado',
    altEn: 'Official Cambridge certificate - authorized preparation center',
    category: 'cambridge',
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG'
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
