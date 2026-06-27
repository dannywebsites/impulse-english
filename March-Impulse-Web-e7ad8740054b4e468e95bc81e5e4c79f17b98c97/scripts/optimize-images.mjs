import sharp from 'sharp';
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');
const ORIGINAL_DIR = path.join(__dirname, '../public/images/original');

// Image catalog with SEO-optimized naming and alt tags
const imagesCatalog = [
  // FACILITIES
  {
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/%40nabscabDSC_6762.JPEG',
    name: 'impulse-english-academy-classroom-la-vaguada',
    alt: 'Aula moderna de Impulse English Academy en La Vaguada Madrid - clases de inglés',
    altEn: 'Modern classroom at Impulse English Academy La Vaguada Madrid - English classes',
    category: 'facilities'
  },
  {
    url: '/images/academy/nabscabdsc-6774.jpeg',
    name: 'academia-ingles-barrio-pilar-interior',
    alt: 'Interior academia de inglés Barrio del Pilar - ambiente de aprendizaje',
    altEn: 'English academy interior Barrio del Pilar - learning environment',
    category: 'facilities'
  },
  {
    url: '/images/academy/nabscabdsc-6785.jpeg',
    name: 'clases-ingles-madrid-norte-instalaciones',
    alt: 'Instalaciones clases de inglés Madrid Norte - Impulse English Academy',
    altEn: 'English class facilities North Madrid - Impulse English Academy',
    category: 'facilities'
  },
  {
    url: '/images/academy/nabscabdsc-6786.jpeg',
    name: 'academia-cambridge-madrid-aula',
    alt: 'Aula preparación exámenes Cambridge Madrid - centro oficial',
    altEn: 'Cambridge exam preparation classroom Madrid - official center',
    category: 'facilities'
  },
  {
    url: '/images/academy/nabscabdsc-6794.jpeg',
    name: 'impulse-academy-recepcion-entrada',
    alt: 'Recepción Impulse English Academy La Vaguada - academia de inglés',
    altEn: 'Reception Impulse English Academy La Vaguada - English academy',
    category: 'facilities'
  },

  // GREAT LITTLE PEOPLE / INFANTIL
  {
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/01b4eaa4-6bd4-425e-b4d7-c500cae1dea4.JPG',
    name: 'ingles-infantil-great-little-people-madrid',
    alt: 'Clases inglés infantil Great Little People Madrid - niños 2-5 años',
    altEn: 'Kids English classes Great Little People Madrid - children 2-5 years',
    category: 'infantil'
  },
  {
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Patrick+the+Panda+logo.JPEG',
    name: 'patrick-panda-mascota-ingles-ninos',
    alt: 'Patrick the Panda mascota inglés para niños - Great Little People',
    altEn: 'Patrick the Panda mascot English for kids - Great Little People',
    category: 'infantil'
  },
  {
    url: '/images/academy/crazy-people-follow-2.jpeg',
    name: 'ninos-aprendiendo-ingles-jugando',
    alt: 'Niños aprendiendo inglés jugando - metodología Great Little People',
    altEn: 'Children learning English through play - Great Little People methodology',
    category: 'infantil'
  },

  // PRIMARY/SECONDARY STUDENTS
  {
    url: '/images/academy/escuela-gonzalo-18.jpeg',
    name: 'estudiantes-ingles-primaria-secundaria',
    alt: 'Estudiantes de inglés primaria y secundaria - Impulse English Academy',
    altEn: 'Primary and secondary English students - Impulse English Academy',
    category: 'students'
  },
  {
    url: '/images/academy/escuela-gonzalo-4.jpeg',
    name: 'clases-ingles-jovenes-madrid',
    alt: 'Clases de inglés para jóvenes Madrid - preparación Cambridge',
    altEn: 'English classes for teenagers Madrid - Cambridge preparation',
    category: 'students'
  },

  // CERTIFICATIONS & CAMBRIDGE
  {
    url: '/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg',
    name: 'certificado-oficial-cambridge-impulse',
    alt: 'Certificado oficial centro preparador Cambridge - Impulse English Academy',
    altEn: 'Official Cambridge preparation center certificate - Impulse English Academy',
    category: 'certifications'
  },
  {
    url: '/images/academy/cambridge-logo.png',
    name: 'cambridge-logo-centro-oficial',
    alt: 'Logo Cambridge English - centro oficial preparador exámenes',
    altEn: 'Cambridge English logo - official exam preparation center',
    category: 'certifications'
  },
  {
    url: '/images/academy/lara-c1-cert.jpeg',
    name: 'alumna-certificado-c1-cambridge',
    alt: 'Alumna con certificado C1 Advanced Cambridge - caso de éxito',
    altEn: 'Student with C1 Advanced Cambridge certificate - success story',
    category: 'certifications'
  },

  // LINGUASKILL
  {
    url: '/images/academy/linguaskill.png',
    name: 'linguaskill-logo-examen-cambridge',
    alt: 'Linguaskill logo - examen Cambridge online rápido',
    altEn: 'Linguaskill logo - fast online Cambridge exam',
    category: 'linguaskill'
  },
  {
    url: '/images/academy/logo-linguaskill-white.png',
    name: 'linguaskill-logo-blanco',
    alt: 'Linguaskill logo blanco - certificación inglés online',
    altEn: 'Linguaskill white logo - online English certification',
    category: 'linguaskill'
  },

  // BRANDING
  {
    url: '/images/academy/img-4117.png',
    name: 'impulse-english-academy-logo-oficial',
    alt: 'Logo oficial Impulse English Academy - academia inglés Madrid',
    altEn: 'Official Impulse English Academy logo - English academy Madrid',
    category: 'branding'
  },

  // TEACHERS
  {
    url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Teachers%2C+too.JPEG',
    name: 'profesor-ingles-nativo-madrid',
    alt: 'Profesor de inglés nativo en Madrid - Impulse English Academy',
    altEn: 'Native English teacher in Madrid - Impulse English Academy',
    category: 'teachers'
  },

  // ACADEMY EXTERIOR
  {
    url: '/images/academy/lucia-photo-academy.jpeg',
    name: 'academia-ingles-la-vaguada-exterior',
    alt: 'Academia de inglés La Vaguada exterior - Impulse English Academy',
    altEn: 'English academy La Vaguada exterior - Impulse English Academy',
    category: 'facilities'
  },

  // COURSE CARDS — used in CoursesSection
  {
    url: '/images/academy/infantil.jpg',
    name: 'curso-ingles-general-infantil',
    alt: 'Curso de inglés general infantil - Impulse English Academy',
    altEn: 'General English course for children - Impulse English Academy',
    category: 'courses'
  },
  {
    url: '/images/academy/priamry.jpg',
    name: 'curso-preparacion-movers-primaria',
    alt: 'Curso preparación MOVERS primaria - Cambridge Young Learners',
    altEn: 'MOVERS preparation course primary - Cambridge Young Learners',
    category: 'courses'
  },
  {
    url: '/images/academy/secondary-off.jpg',
    name: 'curso-extensivo-secundaria',
    alt: 'Cursos extensivos inglés secundaria - Impulse English Academy',
    altEn: 'Extensive English courses secondary - Impulse English Academy',
    category: 'courses'
  },
  {
    url: '/images/academy/jp-with-students.jpg',
    name: 'curso-preparacion-ket',
    alt: 'Curso preparación KET Cambridge - clases de inglés',
    altEn: 'KET Cambridge preparation course - English classes',
    category: 'courses'
  },

  // TEAM / CTA — used in TeamSection and VideoCTA
  {
    url: '/images/academy/primary-classes-students-smiling.jpg',
    name: 'estudiantes-primaria-sonriendo',
    alt: 'Estudiantes de primaria sonriendo en clase de inglés - Impulse English Academy',
    altEn: 'Primary students smiling in English class - Impulse English Academy',
    category: 'students'
  }
];

// Ensure directories exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(ORIGINAL_DIR)) {
  fs.mkdirSync(ORIGINAL_DIR, { recursive: true });
}

// Download file from URL
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(destPath);

    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        downloadFile(response.headers.location, destPath)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(destPath);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {}); // Delete partial file
      reject(err);
    });
  });
}

// Optimize single image
async function optimizeImage(inputPath, outputName) {
  const results = {};

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Generate multiple sizes for responsive images
    const sizes = [
      { width: 400, suffix: '-sm' },
      { width: 800, suffix: '-md' },
      { width: 1200, suffix: '-lg' },
      { width: 1920, suffix: '-xl' }
    ];

    for (const size of sizes) {
      // Only resize if original is larger
      const targetWidth = Math.min(size.width, metadata.width || size.width);

      // WebP version (best compression)
      const webpPath = path.join(OUTPUT_DIR, `${outputName}${size.suffix}.webp`);
      await sharp(inputPath)
        .resize(targetWidth, null, { withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(webpPath);

      // JPEG fallback (for older browsers)
      const jpegPath = path.join(OUTPUT_DIR, `${outputName}${size.suffix}.jpg`);
      await sharp(inputPath)
        .resize(targetWidth, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(jpegPath);

      results[size.suffix] = {
        webp: webpPath,
        jpeg: jpegPath,
        width: targetWidth
      };
    }

    console.log(`✓ Optimized: ${outputName}`);
    return results;
  } catch (error) {
    console.error(`✗ Failed to optimize ${outputName}:`, error.message);
    return null;
  }
}

// Main processing function
async function processImages() {
  console.log('Starting image optimization...\n');

  const manifest = [];

  for (const img of imagesCatalog) {
    console.log(`Processing: ${img.name}`);

    // Determine file extension from URL
    const urlLower = img.url.toLowerCase();
    let ext = '.jpg';
    if (urlLower.includes('.png')) ext = '.png';
    else if (urlLower.includes('.jpeg')) ext = '.jpg';
    else if (urlLower.includes('.jpg')) ext = '.jpg';

    const originalPath = path.join(ORIGINAL_DIR, `${img.name}${ext}`);

    try {
      // Download original
      console.log(`  Downloading...`);
      await downloadFile(img.url, originalPath);

      // Optimize
      console.log(`  Optimizing...`);
      const optimized = await optimizeImage(originalPath, img.name);

      if (optimized) {
        manifest.push({
          name: img.name,
          alt: img.alt,
          altEn: img.altEn,
          category: img.category,
          original: img.url,
          sizes: {
            sm: { webp: `/images/optimized/${img.name}-sm.webp`, jpg: `/images/optimized/${img.name}-sm.jpg`, width: 400 },
            md: { webp: `/images/optimized/${img.name}-md.webp`, jpg: `/images/optimized/${img.name}-md.jpg`, width: 800 },
            lg: { webp: `/images/optimized/${img.name}-lg.webp`, jpg: `/images/optimized/${img.name}-lg.jpg`, width: 1200 },
            xl: { webp: `/images/optimized/${img.name}-xl.webp`, jpg: `/images/optimized/${img.name}-xl.jpg`, width: 1920 }
          }
        });
      }
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
    }

    console.log('');
  }

  // Write manifest file for use in the application
  const manifestPath = path.join(__dirname, '../src/data/imageManifest.json');
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\n✓ Done! Processed ${manifest.length} images.`);
  console.log(`Manifest saved to: ${manifestPath}`);

  return manifest;
}

// Run
processImages().catch(console.error);
