/**
 * Download S3 images to local public/images/academy/
 *
 * Categorizes images into subdirectories:
 *   facilities/ - Academy interior photos
 *   logos/      - Cambridge, Linguaskill, GLP, ESIC logos
 *   team/       - Staff photos (Danny, Lucia, JP)
 *   students/   - Student review/testimonial photos
 *   locations/  - Exterior/building photos
 *   general/    - Anything not clearly categorised
 *
 * Run: node scripts/download-s3-images.cjs
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// All unique S3 URLs from the codebase (72 image URLs, excluding bare domain)
const S3_URLS = [
  // Root-level review images
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8597.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8598.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8599.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8600.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8602.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8603.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8604.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8605.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8606.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8607.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8608.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8609.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8610.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/IMG_8611.jpg',
  // Root-level facility/facility images
  'https://impulseenglish.s3.us-east-1.amazonaws.com/CLASS+ROOM+FACILITIES.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/LARA+C1+CERT.JPEG',
  // Root-level branding/logos
  'https://impulseenglish.s3.us-east-1.amazonaws.com/GREAT+LITTLE+PEOPLE+BLACK.png',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/GREAT+LITTLE+PEOPLE+WHITE.png',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/ESIC+IDIOMAS.jpg',
  // NEW/ subfolder
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/DNNY+TOUR+OF+IRELAND.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/IMG_8636.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/IMG_8639.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/IMG_8640.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/IMG_8642.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/IMG_8643.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/INFANTIL+3.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/linguaskill-logo-blanco.png',
  // NEW/JPEG+UPLOADS/ subfolder
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/GREAT+LIYYLE+PEOPEL+LOGO.png',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/INFANTIL.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/INFANTS+CLASS.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/LUCIA+SECUNDARY.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/PRIAMRY.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/SECONDARY+OFF.jpg',
  // impulsephotos/ subfolder
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/%40nabscabDSC_6774.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/%40nabscabDSC_6785.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/%40nabscabDSC_6786.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/%40nabscabDSC_6794.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Cambridge+logo.PNG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Cambridge+search.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-18.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-21.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-4.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117+(1).PNG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117.PNG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/LARA+C1+CERT.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/LINGUASKILL.png',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Logo-Linguaskill_white.png',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Lucia+Photo+Academy.JPEG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/OUTSIDE+ACADEMY.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/crazy+people+follow+2.JPEG',
  // impulsephotos/NACHOS+photos.+/ subfolder
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Academy+Exterior.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Daniel+helping+secondary+school+students.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantile+classes.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/LOGO+WHITE+BACKGROUND.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Photos+of+facilities.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Productive+secondary+school+students.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+classes+student+happy.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+classes+students+answering+questions.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+students+-+Danny+helping+student.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Stairs.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Toilet+facilities.JPG',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Productive+secondary+school+students.JPG',
  // impulsephotos/ - additional team/cert images
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg',
  'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG',
];

// De-duplicate
const UNIQUE_URLS = [...new Set(S3_URLS)];

/**
 * Convert URL to a local filename:
 * 1. Decode URL encoding (+, %xx)
 * 2. Take just the basename
 * 3. Convert to kebab-case lowercase
 * 4. Preserve extension (lowercased)
 */
function urlToFilename(url) {
  // Decode URL encoding
  let decoded = decodeURIComponent(url.replace(/\+/g, ' '));
  // Get the basename
  let basename = decoded.split('/').pop() || 'image';
  // Split into name and extension
  const lastDot = basename.lastIndexOf('.');
  let name = lastDot > 0 ? basename.slice(0, lastDot) : basename;
  let ext = lastDot > 0 ? basename.slice(lastDot).toLowerCase() : '.jpg';
  // Normalize .jpeg -> .jpeg (keep as-is, acceptable)
  // Convert name to kebab-case: lowercase, replace non-alphanumeric with hyphens
  name = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  // Handle empty name edge case
  if (!name) name = 'image';
  return name + ext;
}

/**
 * Determine category subdirectory based on URL patterns and filename
 */
function categorize(url) {
  const lower = url.toLowerCase();
  const decoded = decodeURIComponent(url.replace(/\+/g, ' ')).toLowerCase();

  // Logos — Cambridge, Linguaskill, GLP, ESIC
  if (
    lower.includes('cambridge+logo') || lower.includes('cambridge logo') ||
    decoded.includes('cambridge logo') ||
    lower.includes('linguaskill') ||
    lower.includes('great+little+people') || lower.includes('great little people') ||
    lower.includes('great+liyyle+peopel') || lower.includes('great liyyle peopel') ||
    lower.includes('esic') ||
    lower.includes('logo-linguaskill') ||
    lower.includes('logo+white+background') || lower.includes('logo white background') ||
    lower.includes('img_4117') // Impulse logo
  ) {
    return 'logos';
  }

  // Team — Staff photos (Danny, Lucia, JP, Nachos)
  if (
    lower.includes('lucia+photo') || lower.includes('lucia photo') ||
    lower.includes('jp+with') || lower.includes('jp with') ||
    lower.includes('dnny+tour') || lower.includes('dnny tour') ||
    lower.includes('danny+helping') || lower.includes('danny helping') ||
    lower.includes('daniel+helping') || lower.includes('daniel helping')
  ) {
    return 'team';
  }

  // Students — review photos (IMG_85xx, IMG_86xx numbered)
  if (
    /img_85\d{2}/i.test(decoded) ||
    /img_86(3[6-9]|[4-9]\d)/i.test(decoded) ||
    lower.includes('review') ||
    lower.includes('lara+c1') || lower.includes('lara c1') ||
    lower.includes('lucia+secund') || lower.includes('lucia secondary')
  ) {
    return 'students';
  }

  // Locations — exterior/outside
  if (
    lower.includes('outside+academy') || lower.includes('outside academy') ||
    lower.includes('academy+exterior') || lower.includes('academy exterior') ||
    lower.includes('tour+of+ireland') || lower.includes('tour of ireland')
  ) {
    return 'locations';
  }

  // Default: facilities (classroom photos, school photos, nabscab shots, escuela gonzalo)
  return 'facilities';
}

/**
 * Download a single file with one retry
 */
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const attempt = (retryCount) => {
      const protocol = url.startsWith('https') ? https : http;
      const req = protocol.get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          // Follow redirect
          const redirectUrl = res.headers.location;
          console.log(`  Redirect -> ${redirectUrl}`);
          attempt_url(redirectUrl, retryCount);
          return;
        }
        if (res.statusCode !== 200) {
          if (retryCount < 1) {
            console.log(`  HTTP ${res.statusCode} — retrying...`);
            setTimeout(() => attempt(retryCount + 1), 1000);
          } else {
            reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          }
          return;
        }
        const file = fs.createWriteStream(destPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => resolve(destPath));
        });
        file.on('error', (err) => {
          fs.unlink(destPath, () => {});
          reject(err);
        });
      });
      req.on('error', (err) => {
        if (retryCount < 1) {
          console.log(`  Network error — retrying... (${err.message})`);
          setTimeout(() => attempt(retryCount + 1), 1000);
        } else {
          reject(err);
        }
      });
      req.setTimeout(30000, () => {
        req.destroy();
        if (retryCount < 1) {
          console.log(`  Timeout — retrying...`);
          setTimeout(() => attempt(retryCount + 1), 1000);
        } else {
          reject(new Error(`Timeout for ${url}`));
        }
      });
    };

    const attempt_url = (targetUrl, retryCount) => {
      const protocol = targetUrl.startsWith('https') ? https : http;
      const req = protocol.get(targetUrl, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for redirect ${targetUrl}`));
          return;
        }
        const file = fs.createWriteStream(destPath);
        res.pipe(file);
        file.on('finish', () => file.close(() => resolve(destPath)));
        file.on('error', (err) => { fs.unlink(destPath, () => {}); reject(err); });
      });
      req.on('error', reject);
    };

    attempt(0);
  });
}

async function main() {
  const scriptDir = __dirname;
  const projectRoot = path.join(scriptDir, '..');
  const publicImagesAcademy = path.join(projectRoot, 'public', 'images', 'academy');
  const manifestPath = path.join(scriptDir, 's3-to-local-manifest.json');

  const categories = ['facilities', 'logos', 'team', 'students', 'locations', 'general'];
  for (const cat of categories) {
    fs.mkdirSync(path.join(publicImagesAcademy, cat), { recursive: true });
  }

  const manifest = {};
  const failed = [];

  console.log(`Downloading ${UNIQUE_URLS.length} unique S3 images...\n`);

  for (let i = 0; i < UNIQUE_URLS.length; i++) {
    const url = UNIQUE_URLS[i];
    const category = categorize(url);
    const filename = urlToFilename(url);
    const localPath = path.join(publicImagesAcademy, category, filename);
    const publicPath = `/images/academy/${category}/${filename}`;

    console.log(`[${i + 1}/${UNIQUE_URLS.length}] ${category}/${filename}`);
    console.log(`  <- ${url}`);

    try {
      await downloadFile(url, localPath);
      manifest[url] = publicPath;
      console.log(`  OK`);
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
      failed.push({ url, error: err.message });
      manifest[url] = null;
    }
  }

  // Write manifest
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to: ${manifestPath}`);

  // Summary
  const successCount = Object.values(manifest).filter(v => v !== null).length;
  console.log(`\nDone: ${successCount}/${UNIQUE_URLS.length} downloaded successfully`);

  if (failed.length > 0) {
    console.log('\nFailed downloads:');
    for (const f of failed) {
      console.log(`  ${f.url}: ${f.error}`);
    }
  }

  // File count by category
  console.log('\nFiles per category:');
  for (const cat of categories) {
    const catDir = path.join(publicImagesAcademy, cat);
    const files = fs.readdirSync(catDir);
    console.log(`  ${cat}/: ${files.length} files`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
