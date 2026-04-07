import express from 'express';
import prisma from '../db.js';
import { DEFAULT_SETTINGS } from '../pipeline/orchestrator.js';
import { enqueuePipeline, getQueueStatus } from '../pipeline/queue.js';
import { generateLinkedInPost, generateYouTubeScript } from '../pipeline/repurpose.js';
import { emitJobStatus } from '../utils/events.js';

const router = express.Router();

// GET /api/jobs - List all jobs (with optional status and brand filters)
router.get('/', async (req, res) => {
  try {
    const { status, brandId } = req.query;

    const where = {};
    if (status) where.action = status;
    if (brandId) where.brandId = brandId;

    const jobs = await prisma.contentJob.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        brand: { select: { id: true, name: true, companyName: true } },
      },
    });

    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

// GET /api/jobs/queue - Get pipeline queue status
router.get('/queue', async (req, res) => {
  try {
    res.json(getQueueStatus());
  } catch (error) {
    console.error('Error fetching queue status:', error);
    res.status(500).json({ error: 'Failed to fetch queue status' });
  }
});

// POST /api/jobs/batch - Create multiple jobs at once
router.post('/batch', async (req, res) => {
  try {
    const {
      brandId,
      topics,
      language = 'English',
      locationCode = 'us',
      generateImage = true,
      generateInblogImages = true,
      imageQuality = '1K',
      imageDimensions = '3:2',
    } = req.body;

    if (!brandId) {
      return res.status(400).json({ error: 'Brand is required' });
    }
    if (!Array.isArray(topics) || topics.length === 0) {
      return res.status(400).json({ error: 'At least one topic is required' });
    }
    if (topics.length > 20) {
      return res.status(400).json({ error: 'Maximum 20 topics per batch' });
    }

    // Validate each topic has a non-empty topic field
    for (const t of topics) {
      if (!t.topic || !t.topic.trim()) {
        return res.status(400).json({ error: 'Each topic must have a non-empty topic field' });
      }
    }

    // Verify brand exists
    const brand = await prisma.brand.findUnique({ where: { id: brandId } });
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    // Generate shared batchId
    const batchId = crypto.randomUUID();

    // Create all jobs in a transaction
    const jobs = await prisma.$transaction(
      topics.map((t) =>
        prisma.contentJob.create({
          data: {
            brandId,
            batchId,
            topic: t.topic.trim(),
            keywords: t.keywords?.trim() || t.topic.trim(),
            language,
            locationCode,
            generateImage,
            generateInblogImages,
            imageQuality,
            imageDimensions,
          },
        })
      )
    );

    res.status(201).json({ batchId, jobs });
  } catch (error) {
    console.error('Error creating batch:', error);
    res.status(500).json({ error: 'Failed to create batch' });
  }
});

// POST /api/jobs/batch/:batchId/generate - Generate all idle jobs in a batch
router.post('/batch/:batchId/generate', async (req, res) => {
  try {
    const { batchId } = req.params;

    const idleJobs = await prisma.contentJob.findMany({
      where: { batchId, action: 'Idle' },
      select: { id: true },
    });

    if (idleJobs.length === 0) {
      return res.status(404).json({ error: 'No idle jobs found for this batch' });
    }

    for (const job of idleJobs) {
      enqueuePipeline(job.id);
    }

    res.status(202).json({ queued: idleJobs.length, batchId });
  } catch (error) {
    console.error('Error generating batch:', error);
    res.status(500).json({ error: 'Failed to generate batch' });
  }
});

// GET /api/jobs/:id - Get single job
router.get('/:id', async (req, res) => {
  try {
    const job = await prisma.contentJob.findUnique({
      where: { id: req.params.id },
      include: {
        brand: { select: { id: true, name: true, companyName: true } },
      },
    });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ error: 'Failed to fetch job' });
  }
});

// POST /api/jobs - Create new job
router.post('/', async (req, res) => {
  try {
    const {
      brandId,
      topic,
      keywords,
      language = 'English',
      locationCode = 'us',
      generateImage = true,
      generateInblogImages = true,
      imageQuality = '1K',
      imageDimensions = '3:2',
    } = req.body;

    if (!brandId) {
      return res.status(400).json({ error: 'Brand is required' });
    }
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    // Verify brand exists
    const brand = await prisma.brand.findUnique({ where: { id: brandId } });
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    const job = await prisma.contentJob.create({
      data: {
        brandId,
        topic,
        keywords: keywords || topic,
        language,
        locationCode,
        generateImage,
        generateInblogImages,
        imageQuality,
        imageDimensions,
      },
    });

    res.status(201).json(job);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ error: 'Failed to create job' });
  }
});

// PUT /api/jobs/:id - Update job
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Remove fields that shouldn't be directly updated
    delete updateData.id;
    delete updateData.createdAt;

    const job = await prisma.contentJob.update({
      where: { id },
      data: updateData,
    });

    res.json(job);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Job not found' });
    }
    console.error('Error updating job:', error);
    res.status(500).json({ error: 'Failed to update job' });
  }
});

// DELETE /api/jobs/:id - Delete job
router.delete('/:id', async (req, res) => {
  try {
    await prisma.contentJob.delete({
      where: { id: req.params.id },
    });

    res.json({ success: true });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Job not found' });
    }
    console.error('Error deleting job:', error);
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

// POST /api/jobs/:id/generate - Trigger pipeline
router.post('/:id/generate', async (req, res) => {
  try {
    const { id } = req.params;

    // Verify job exists
    const job = await prisma.contentJob.findUnique({
      where: { id },
    });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    // Enqueue pipeline for sequential execution
    enqueuePipeline(id);

    // Return immediately (202 Accepted)
    res.status(202).json({ success: true, message: 'Pipeline started', jobId: id });
  } catch (error) {
    console.error('Error triggering generation:', error);
    res.status(500).json({ error: 'Failed to trigger generation' });
  }
});

// POST /api/jobs/:id/repurpose/linkedin - Generate LinkedIn post from completed article
router.post('/:id/repurpose/linkedin', async (req, res) => {
  try {
    const { id } = req.params;
    const job = await prisma.contentJob.findUnique({
      where: { id },
      include: { brand: true },
    });

    if (!job) return res.status(404).json({ error: 'Job not found' });
    if (job.action !== 'Done') {
      return res.status(400).json({ error: 'Article must be completed first' });
    }
    if (!job.researchData || !job.content) {
      return res.status(400).json({ error: 'Job is missing research data or content' });
    }

    // Load settings from job's brand
    const settings = { ...DEFAULT_SETTINGS, ...job.brand };

    // Fire and forget
    generateLinkedInPost(job, settings)
      .then(async (linkedinPost) => {
        await prisma.contentJob.update({
          where: { id },
          data: { linkedinPost },
        });
        emitJobStatus(id, 'linkedin_post', 'completed', 'LinkedIn post saved');
      })
      .catch((error) => {
        console.error(`LinkedIn generation error for job ${id}:`, error);
        emitJobStatus(id, 'linkedin_post', 'error', `Failed: ${error.message}`);
      });

    res.status(202).json({ success: true, message: 'LinkedIn post generation started' });
  } catch (error) {
    console.error('Error triggering LinkedIn generation:', error);
    res.status(500).json({ error: 'Failed to trigger LinkedIn generation' });
  }
});

// POST /api/jobs/:id/repurpose/youtube - Generate YouTube script from completed article
router.post('/:id/repurpose/youtube', async (req, res) => {
  try {
    const { id } = req.params;
    const job = await prisma.contentJob.findUnique({
      where: { id },
      include: { brand: true },
    });

    if (!job) return res.status(404).json({ error: 'Job not found' });
    if (job.action !== 'Done') {
      return res.status(400).json({ error: 'Article must be completed first' });
    }
    if (!job.researchData || !job.content) {
      return res.status(400).json({ error: 'Job is missing research data or content' });
    }

    // Load settings from job's brand
    const settings = { ...DEFAULT_SETTINGS, ...job.brand };

    // Fire and forget
    generateYouTubeScript(job, settings)
      .then(async (youtubeScript) => {
        await prisma.contentJob.update({
          where: { id },
          data: { youtubeScript },
        });
        emitJobStatus(id, 'youtube_script', 'completed', 'YouTube script saved');
      })
      .catch((error) => {
        console.error(`YouTube script generation error for job ${id}:`, error);
        emitJobStatus(id, 'youtube_script', 'error', `Failed: ${error.message}`);
      });

    res.status(202).json({ success: true, message: 'YouTube script generation started' });
  } catch (error) {
    console.error('Error triggering YouTube script generation:', error);
    res.status(500).json({ error: 'Failed to trigger YouTube script generation' });
  }
});

export default router;
