/**
 * Generate XML Image Sitemap for SEO
 *
 * This script generates an image sitemap for Google Image Search indexing.
 * Run with: node scripts/generate-image-sitemap.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://impulse-english.es';

// Define all images organized by page (updated URLs for local SEO)
const pageImages = {
  // Infantil Course Page
  '/ingles-la-vaguada/infantil': [
    {
      url: '/images/academy/escuela-gonzalo-21.jpeg',
      title: 'Clases de inglés infantil La Vaguada Madrid',
      caption: 'Niño feliz aprendiendo inglés en academia Impulse English La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/infants-class.jpg',
      title: 'Aula de inglés infantil Impulse English La Vaguada',
      caption: 'Clase de inglés para niños pequeños academia La Vaguada metodología inmersiva',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/01b4eaa4-glp-infantil.jpg',
      title: 'Estudiante infantil Great Little People La Vaguada',
      caption: 'Niño aprendiendo inglés Great Little People academia La Vaguada Barrio del Pilar',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/clase-gratis.png',
      title: 'Clase gratuita inglés infantil Impulse English',
      caption: 'Clase de prueba gratis inglés infantil Great Little People La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/img-8636.jpg',
      title: 'Grupo infantil inglés Impulse English La Vaguada',
      caption: 'Estudiantes de infantil aprendiendo inglés Great Little People La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/infantil-3.jpg',
      title: 'Inmersión inglés infantil Impulse English La Vaguada',
      caption: 'Niños pequeños clase inglés inmersión La Vaguada Barrio del Pilar Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/img-9363.jpg',
      title: 'Patrick Panda Great Little People Impulse English',
      caption: 'Patrick Panda mascota Great Little People Impulse English La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/great-little-people-black.png',
      title: 'Great Little People Centro Oficial Impulse English',
      caption: 'Logo Great Little People metodología inglés infantil centro oficial La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/cambridge-logo-edited.png',
      title: 'Centro Preparador Cambridge Impulse English La Vaguada',
      caption: 'Logo Cambridge Be Prepared centro preparador oficial La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    }
  ],

  // Primaria Course Page
  '/ingles-la-vaguada/primaria': [
    {
      url: '/images/academy/img-8639.jpg',
      title: 'Clase primaria Cambridge Impulse English La Vaguada',
      caption: 'Estudiante de primaria clase inglés Cambridge Young Learners La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/img-8640.jpg',
      title: 'Estudiante primaria Impulse English La Vaguada',
      caption: 'Niño de primaria aprendiendo inglés academia La Vaguada Barrio del Pilar Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/img-8642.jpg',
      title: 'Grupos reducidos primaria Impulse English La Vaguada',
      caption: 'Estudiantes primaria clase inglés grupos reducidos La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/img-8643.jpg',
      title: 'Ambiente positivo inglés primaria Impulse English',
      caption: 'Clase inglés primaria ambiente positivo La Vaguada Barrio del Pilar Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/priamry.jpg',
      title: 'Clases inglés primaria La Vaguada preparación Cambridge',
      caption: 'Estudiante de primaria inglés academia Cambridge La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/jp-with-students.jpg',
      title: 'Éxito estudiantes Cambridge Impulse English La Vaguada',
      caption: 'Profesor JP con estudiantes y certificados Cambridge Impulse English La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/cambridge-logo-edited.png',
      title: 'Centro Preparador Cambridge Impulse English La Vaguada',
      caption: 'Logo Cambridge English centro preparador oficial La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg',
      title: 'Certificado Cambridge oficial Impulse English',
      caption: 'Certificado oficial Cambridge English academia preparación La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/dnny-tour-of-ireland.jpg',
      title: 'Tour de Irlanda Impulse English Academy',
      caption: 'Excursión cultural a Irlanda Impulse English Academy inmersión inglés',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    }
  ],

  // Secundaria Course Page
  '/ingles-la-vaguada/secundaria': [
    {
      url: '/images/academy/secondary-off.jpg',
      title: 'Clases inglés secundaria preparación Cambridge La Vaguada',
      caption: 'Estudiantes secundaria clase inglés Cambridge B2 First La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/escuela-gonzalo-18.jpeg',
      title: 'Profesor Daniel clase secundaria Impulse English',
      caption: 'Profesor Daniel ayudando estudiantes secundaria inglés La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/lucia-secundary.jpeg',
      title: 'Lucía estudiante secundaria Impulse English La Vaguada',
      caption: 'Estudiante Lucía secundaria inglés Cambridge academia La Vaguada Barrio del Pilar',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/escuela-gonzalo-4.jpeg',
      title: 'Estudiante secundaria feliz Impulse English La Vaguada',
      caption: 'Estudiante secundaria trabajando feliz en clase de inglés La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/escuela-gonzalo.jpeg',
      title: 'Estudiante secundaria concentrado Impulse English',
      caption: 'Estudiante secundaria concentrado clase inglés academia La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/escuela-gonzalo-21.jpeg',
      title: 'Estudiante secundaria Impulse English La Vaguada',
      caption: 'Estudiante secundaria aprendiendo inglés academia La Vaguada Barrio del Pilar',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/jp-with-students.jpg',
      title: 'Profesor JP con estudiantes secundaria Impulse English',
      caption: 'Profesor JP con estudiantes secundaria clase inglés La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/cambridge-logo-edited.png',
      title: 'Centro Cambridge preparación secundaria Impulse English',
      caption: 'Centro Preparador Oficial Cambridge English secundaria La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    }
  ],

  // Adultos Course Page
  '/ingles-la-vaguada/adultos': [
    {
      url: '/images/academy/cert-cambridge.png',
      title: 'Certificados Cambridge Impulse English La Vaguada',
      caption: 'Certificados Cambridge B2 First C1 Advanced academia oficial La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/lara-c1-cert.jpeg',
      title: 'Lara certificado C1 Advanced Impulse English',
      caption: 'Lara con certificado Cambridge C1 Advanced academia La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg',
      title: 'Certificado Cambridge oficial Impulse English',
      caption: 'Certificado oficial Cambridge English academia preparación La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/linguaskill-logo-blanco.png',
      title: 'Centro oficial Linguaskill Impulse English La Vaguada',
      caption: 'Examen Linguaskill centro oficial academia La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    }
  ],

  // Barrio del Pilar Location Page
  '/ubicaciones/barrio-del-pilar': [
    {
      url: '/images/academy/class-room-facilities.jpeg',
      title: 'Aula principal Impulse English Academy La Vaguada',
      caption: 'Instalaciones aula academia inglés La Vaguada Barrio del Pilar Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/jp-with-students.jpg',
      title: 'Éxito estudiantes Cambridge Impulse English La Vaguada',
      caption: 'Profesor JP con estudiantes y certificados Cambridge academia La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/nabscabdsc-6785.jpeg',
      title: 'Aula de Stephen Impulse English La Vaguada',
      caption: 'Vista aérea aula Stephen academia inglés La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/escuela-gonzalo-4.jpeg',
      title: 'Estudiante Impulse English Academy La Vaguada',
      caption: 'Estudiante feliz clase de inglés academia La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    }
  ],

  // Home Page
  '/': [
    {
      url: '/images/academy/img-4117-1.png',
      title: 'Logo Impulse English Academy',
      caption: 'Logo oficial Impulse English Academy La Vaguada Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    },
    {
      url: '/images/academy/outside-academy.jpg',
      title: 'Fachada Impulse English Academy La Vaguada Madrid',
      caption: 'Fachada exterior academia inglés Impulse English La Vaguada Barrio del Pilar Madrid',
      geoLocation: 'La Vaguada, Barrio del Pilar, Madrid, Spain'
    }
  ]
};

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateImageSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  for (const [pagePath, images] of Object.entries(pageImages)) {
    xml += `  <url>
    <loc>${SITE_URL}${pagePath}</loc>
`;

    for (const image of images) {
      xml += `    <image:image>
      <image:loc>${escapeXml(image.url.startsWith('/') ? SITE_URL + image.url : image.url)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
      <image:geo_location>${escapeXml(image.geoLocation)}</image:geo_location>
    </image:image>
`;
    }

    xml += `  </url>
`;
  }

  xml += `</urlset>
`;

  return xml;
}

// Generate the sitemap
const sitemap = generateImageSitemap();

// Write to public directory
const outputPath = path.join(__dirname, '..', 'public', 'sitemap-images.xml');
fs.writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`Image sitemap generated successfully at: ${outputPath}`);
console.log(`Total pages: ${Object.keys(pageImages).length}`);
console.log(`Total images: ${Object.values(pageImages).flat().length}`);
