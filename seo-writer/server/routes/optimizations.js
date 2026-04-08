import express from 'express';
import prisma from '../db.js';
import { enqueueOptimization, enqueueRewrite } from '../pipeline/queue.js';
import { subscribeToJob, unsubscribeFromJob } from '../utils/events.js';

const router = express.Router();

// GET /api/optimizations - List all optimization jobs
router.get('/', async (req, res) => {
  try {
    const { status, brandId } = req.query;

    const where = {};
    if (status) where.action = status;
    if (brandId) where.brandId = brandId;

    const jobs = await prisma.optimizationJob.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        brand: { select: { id: true, name: true, companyName: true } },
      },
    });

    res.json(jobs);
  } catch (error) {
    console.error('Error fetching optimization jobs:', error);
    res.status(500).json({ error: 'Failed to fetch optimization jobs' });
  }
});

// GET /api/optimizations/:id/stream - SSE stream for real-time updates
router.get('/:id/stream', (req, res) => {
  const { id } = req.params;

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  res.write(`data: ${JSON.stringify({ type: 'connected', jobId: id })}\n\n`);

  const listener = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  subscribeToJob(id, listener);

  req.on('close', () => {
    unsubscribeFromJob(id, listener);
  });
});

// GET /api/optimizations/:id - Get single optimization job
router.get('/:id', async (req, res) => {
  try {
    const job = await prisma.optimizationJob.findUnique({
      where: { id: req.params.id },
      include: {
        brand: { select: { id: true, name: true, companyName: true } },
      },
    });

    if (!job) {
      return res.status(404).json({ error: 'Optimization job not found' });
    }

    res.json(job);
  } catch (error) {
    console.error('Error fetching optimization job:', error);
    res.status(500).json({ error: 'Failed to fetch optimization job' });
  }
});

// POST /api/optimizations - Create new optimization job
router.post('/', async (req, res) => {
  try {
    const { brandId, sourceUrl, targetKeyword } = req.body;

    if (!brandId) {
      return res.status(400).json({ error: 'Brand is required' });
    }
    if (!sourceUrl) {
      return res.status(400).json({ error: 'Source URL is required' });
    }

    // Basic URL validation
    try {
      new URL(sourceUrl);
    } catch {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    // Verify brand exists
    const brand = await prisma.brand.findUnique({ where: { id: brandId } });
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    const job = await prisma.optimizationJob.create({
      data: {
        brandId,
        sourceUrl: sourceUrl.trim(),
        targetKeyword: targetKeyword?.trim() || null,
      },
    });

    res.status(201).json(job);
  } catch (error) {
    console.error('Error creating optimization job:', error);
    res.status(500).json({ error: 'Failed to create optimization job' });
  }
});

// DELETE /api/optimizations/:id - Delete optimization job
router.delete('/:id', async (req, res) => {
  try {
    await prisma.optimizationJob.delete({
      where: { id: req.params.id },
    });

    res.json({ success: true });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Job not found' });
    }
    console.error('Error deleting optimization job:', error);
    res.status(500).json({ error: 'Failed to delete optimization job' });
  }
});

// POST /api/optimizations/:id/analyze - Trigger analysis pipeline
router.post('/:id/analyze', async (req, res) => {
  try {
    const { id } = req.params;

    const job = await prisma.optimizationJob.findUnique({
      where: { id },
    });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    enqueueOptimization(id);
    res.status(202).json({ success: true, message: 'Analysis pipeline started', jobId: id });
  } catch (error) {
    console.error('Error triggering analysis:', error);
    res.status(500).json({ error: 'Failed to trigger analysis' });
  }
});

// POST /api/optimizations/:id/rewrite - Trigger rewrite pipeline
router.post('/:id/rewrite', async (req, res) => {
  try {
    const { id } = req.params;
    const { userInstructions } = req.body;

    const job = await prisma.optimizationJob.findUnique({
      where: { id },
    });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    if (!job.analysisReport) {
      return res.status(400).json({ error: 'Analysis must complete before rewriting' });
    }

    enqueueRewrite(id, { userInstructions: userInstructions || null });
    res.status(202).json({ success: true, message: 'Rewrite pipeline started', jobId: id });
  } catch (error) {
    console.error('Error triggering rewrite:', error);
    res.status(500).json({ error: 'Failed to trigger rewrite' });
  }
});

export default router;
