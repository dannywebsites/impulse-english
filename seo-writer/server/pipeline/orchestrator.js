import prisma from '../db.js';
import { emitJobStatus } from '../utils/events.js';
import { sleep } from '../utils/helpers.js';
import runResearchAgent from './research.js';
import runImageGeneration from './imageGen.js';
import runWriter from './writer.js';
import runMetaGenerator from './metaGen.js';
import runThumbnailGenerator from './thumbnail.js';

// Cooldown between pipeline steps to avoid rate limits
const STEP_DELAY_MS = 5000;

// Default settings used when no settings row exists
export const DEFAULT_SETTINGS = {
  articleLength: 'auto',
  customWordCount: null,
  language: 'Spanish',
  companyName: '',
  companyDescription: '',
  uniqueValue: '',
  targetAudience: '',
  brandMentionLevel: 'subtle',
  productsServices: '',
  socialProof: '',
  bannedWords: '',
  sitemapUrl: '',
  defaultImageQuality: '1K',
  defaultImageDimensions: '3:2',
  researchDepth: 'standard',
  metaTitleMaxLength: 60,
  metaDescMaxLength: 160,
  includeTableOfContents: false,
  includeFAQSection: false,
  linkedinStyleSample: '',
  youtubeStyleSample: '',
};

/**
 * Determine which steps to skip based on currentStep saved in DB.
 * Returns a set of step names that are already completed.
 */
function getCompletedSteps(currentStep) {
  const stepOrder = [
    'research_complete',
    'images_complete',
    'writing_complete',
    'meta_complete',
    'thumbnail_complete',
    'done',
  ];

  const completedIndex = stepOrder.indexOf(currentStep);
  if (completedIndex === -1) return new Set();

  return new Set(stepOrder.slice(0, completedIndex + 1));
}

/**
 * Main pipeline orchestrator
 * Runs all steps in sequence, saves after each step, and can resume from where it left off.
 */
export async function runPipeline(jobId) {
  let job = null;

  try {
    // Get job with brand settings
    job = await prisma.contentJob.findUnique({
      where: { id: jobId },
      include: { brand: true },
    });

    if (!job) {
      throw new Error('Job not found');
    }
    if (!job.brand) {
      throw new Error('Job has no associated brand');
    }

    // Check if we can resume from a previous step
    const completed = getCompletedSteps(job.currentStep);
    const isResuming = completed.size > 0;

    if (isResuming) {
      console.log(`[Pipeline] Resuming job ${jobId} from step "${job.currentStep}" — skipping ${completed.size} completed step(s)`);
    }

    // Merge brand settings with defaults
    const settings = { ...DEFAULT_SETTINGS, ...job.brand };

    // Load indexed sitemap pages for this brand
    let sitemapPages = [];
    if (settings.sitemapUrl) {
      sitemapPages = await prisma.sitemapPage.findMany({
        where: { brandId: job.brandId },
        select: { url: true, title: true, description: true },
      });
    }

    // Load writing samples for voice/style reference
    const writingSamples = await prisma.writingSample.findMany({
      where: { brandId: job.brandId },
      select: { title: true, content: true },
      orderBy: { createdAt: 'desc' },
    });
    settings.writingSamples = writingSamples;

    // Update status to Running
    await prisma.contentJob.update({
      where: { id: jobId },
      data: { action: 'Running', errorMessage: null },
    });

    emitJobStatus(jobId, 'pipeline', 'running', isResuming ? 'Pipeline resuming...' : 'Pipeline started');

    // ── Step 1: Research ──
    let researchData;

    if (completed.has('research_complete')) {
      console.log(`[Pipeline] Skipping research — already completed`);
      researchData = job.researchData;
    } else {
      researchData = await runResearchAgent(job, settings);

      await prisma.contentJob.update({
        where: { id: jobId },
        data: {
          researchData,
          currentStep: 'research_complete',
        },
      });

      console.log(`[Pipeline] Research saved. Cooling down ${STEP_DELAY_MS / 1000}s...`);
      await sleep(STEP_DELAY_MS);
    }

    // ── Step 2: In-blog images (conditional) ──
    let inBlogImages = [];

    if (job.generateInblogImages) {
      if (completed.has('images_complete')) {
        console.log(`[Pipeline] Skipping image generation — already completed`);
        inBlogImages = job.inBlogImages ? JSON.parse(job.inBlogImages) : [];
      } else {
        inBlogImages = await runImageGeneration(job, researchData, settings);

        await prisma.contentJob.update({
          where: { id: jobId },
          data: {
            inBlogImages: JSON.stringify(inBlogImages),
            currentStep: 'images_complete',
          },
        });

        console.log(`[Pipeline] Images saved. Cooling down ${STEP_DELAY_MS / 1000}s...`);
        await sleep(STEP_DELAY_MS);
      }
    }

    // ── Step 3: Content writing ──
    let content;

    if (completed.has('writing_complete')) {
      console.log(`[Pipeline] Skipping writing — already completed`);
      content = job.content;
    } else {
      content = await runWriter(job, researchData, inBlogImages, settings, sitemapPages);

      await prisma.contentJob.update({
        where: { id: jobId },
        data: {
          content,
          currentStep: 'writing_complete',
        },
      });

      console.log(`[Pipeline] Content saved. Cooling down ${STEP_DELAY_MS / 1000}s...`);
      await sleep(STEP_DELAY_MS);
    }

    // ── Step 4: Meta generation ──
    if (completed.has('meta_complete')) {
      console.log(`[Pipeline] Skipping meta generation — already completed`);
    } else {
      const metadata = await runMetaGenerator(job, content, settings);

      await prisma.contentJob.update({
        where: { id: jobId },
        data: {
          metatitle: metadata.metatitle,
          metadescription: metadata.metadescription,
          slug: metadata.slug,
          currentStep: 'meta_complete',
        },
      });

      console.log(`[Pipeline] Meta saved. Cooling down ${STEP_DELAY_MS / 1000}s...`);
      await sleep(STEP_DELAY_MS);
    }

    // ── Step 5: Thumbnail (conditional) ──
    if (job.generateImage) {
      if (completed.has('thumbnail_complete')) {
        console.log(`[Pipeline] Skipping thumbnail — already completed`);
      } else {
        const thumbnail = await runThumbnailGenerator(job, content, settings);

        await prisma.contentJob.update({
          where: { id: jobId },
          data: {
            thumbnailUrl: thumbnail.url,
            thumbnailPrompt: thumbnail.prompt,
            currentStep: 'thumbnail_complete',
          },
        });
      }
    }

    // Mark as Done
    await prisma.contentJob.update({
      where: { id: jobId },
      data: {
        action: 'Done',
        currentStep: 'done',
      },
    });

    emitJobStatus(jobId, 'done', 'completed', 'All steps complete!');
  } catch (error) {
    console.error(`[Pipeline] Error for job ${jobId} at step "${job?.currentStep || 'init'}":`, error);

    // Update job with error — currentStep is preserved so we can resume
    if (job) {
      await prisma.contentJob.update({
        where: { id: jobId },
        data: {
          action: 'Error',
          errorMessage: error.message,
        },
      });
    }

    emitJobStatus(jobId, 'error', 'failed', `Pipeline failed: ${error.message}`);
    throw error;
  }
}

export default runPipeline;
