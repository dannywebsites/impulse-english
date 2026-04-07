import prisma from '../db.js';
import { emitJobStatus } from '../utils/events.js';
import runResearchAgent from './research.js';
import runImageGeneration from './imageGen.js';
import runWriter from './writer.js';
import runMetaGenerator from './metaGen.js';
import runThumbnailGenerator from './thumbnail.js';

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
 * Main pipeline orchestrator
 * Runs all steps in sequence and updates job in database
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
      data: { action: 'Running' },
    });

    emitJobStatus(jobId, 'pipeline', 'running', 'Pipeline started');

    // Step 1: Research
    const researchData = await runResearchAgent(job, settings);

    await prisma.contentJob.update({
      where: { id: jobId },
      data: {
        researchData,
        currentStep: 'research_complete',
      },
    });

    // Step 2: In-blog images (conditional)
    let inBlogImages = [];

    if (job.generateInblogImages) {
      inBlogImages = await runImageGeneration(job, researchData, settings);

      await prisma.contentJob.update({
        where: { id: jobId },
        data: {
          inBlogImages: JSON.stringify(inBlogImages),
          currentStep: 'images_complete',
        },
      });
    }

    // Step 3: Content writing
    const content = await runWriter(job, researchData, inBlogImages, settings, sitemapPages);

    await prisma.contentJob.update({
      where: { id: jobId },
      data: {
        content,
        currentStep: 'writing_complete',
      },
    });

    // Step 4: Meta generation
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

    // Step 5: Thumbnail (conditional)
    if (job.generateImage) {
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
    console.error(`Pipeline error for job ${jobId}:`, error);

    // Update job with error
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
