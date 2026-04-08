import express from 'express';
import prisma from '../db.js';
import { syncSitemap } from '../utils/sitemap.js';

const router = express.Router();

// GET /api/brands - List all brands with job counts
router.get('/', async (req, res) => {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: { select: { jobs: true, optimizationJobs: true } },
      },
    });

    res.json(brands);
  } catch (error) {
    console.error('Error fetching brands:', error);
    res.status(500).json({ error: 'Failed to fetch brands' });
  }
});

// GET /api/brands/:id - Get single brand
router.get('/:id', async (req, res) => {
  try {
    const brand = await prisma.brand.findUnique({
      where: { id: req.params.id },
      include: {
        _count: { select: { jobs: true } },
      },
    });

    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    res.json(brand);
  } catch (error) {
    console.error('Error fetching brand:', error);
    res.status(500).json({ error: 'Failed to fetch brand' });
  }
});

// POST /api/brands - Create new brand
router.post('/', async (req, res) => {
  try {
    const { name, ...fields } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Brand name is required' });
    }

    // Remove fields that shouldn't be directly set
    delete fields.id;
    delete fields.createdAt;
    delete fields.updatedAt;

    const brand = await prisma.brand.create({
      data: { name: name.trim(), ...fields },
    });

    res.status(201).json(brand);
  } catch (error) {
    console.error('Error creating brand:', error);
    res.status(500).json({ error: 'Failed to create brand' });
  }
});

// PUT /api/brands/:id - Update brand
router.put('/:id', async (req, res) => {
  try {
    const updates = { ...req.body };

    // Remove fields that shouldn't be directly set
    delete updates.id;
    delete updates.createdAt;
    delete updates.updatedAt;

    const brand = await prisma.brand.update({
      where: { id: req.params.id },
      data: updates,
    });

    res.json(brand);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Brand not found' });
    }
    console.error('Error updating brand:', error);
    res.status(500).json({ error: 'Failed to update brand' });
  }
});

// DELETE /api/brands/:id - Delete brand and all associated data
router.delete('/:id', async (req, res) => {
  try {
    const brand = await prisma.brand.findUnique({
      where: { id: req.params.id },
    });

    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    // Cascade-delete all related records, then the brand
    await prisma.optimizationJob.deleteMany({ where: { brandId: brand.id } });
    await prisma.contentJob.deleteMany({ where: { brandId: brand.id } });
    await prisma.writingSample.deleteMany({ where: { brandId: brand.id } });
    await prisma.sitemapPage.deleteMany({ where: { brandId: brand.id } });
    await prisma.brand.delete({ where: { id: brand.id } });

    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting brand:', error);
    res.status(500).json({ error: 'Failed to delete brand' });
  }
});

// POST /api/brands/:id/sitemap/connect - Connect and sync a sitemap for this brand
router.post('/:id/sitemap/connect', async (req, res) => {
  try {
    const { sitemapUrl } = req.body;

    if (!sitemapUrl) {
      return res.status(400).json({ error: 'Sitemap URL is required' });
    }

    const brand = await prisma.brand.findUnique({ where: { id: req.params.id } });
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    const result = await syncSitemap(sitemapUrl, brand.id);
    res.json(result);
  } catch (error) {
    console.error('Error connecting sitemap:', error);
    res.status(500).json({ error: error.message || 'Failed to connect sitemap' });
  }
});

// POST /api/brands/:id/sitemap/refresh - Re-sync existing sitemap
router.post('/:id/sitemap/refresh', async (req, res) => {
  try {
    const brand = await prisma.brand.findUnique({ where: { id: req.params.id } });

    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    if (!brand.sitemapUrl) {
      return res.status(400).json({ error: 'No sitemap URL configured for this brand' });
    }

    const result = await syncSitemap(brand.sitemapUrl, brand.id);
    res.json(result);
  } catch (error) {
    console.error('Error refreshing sitemap:', error);
    res.status(500).json({ error: error.message || 'Failed to refresh sitemap' });
  }
});

// POST /api/brands/:id/sitemap/disconnect - Remove sitemap and all indexed pages
router.post('/:id/sitemap/disconnect', async (req, res) => {
  try {
    const brand = await prisma.brand.findUnique({ where: { id: req.params.id } });

    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    await prisma.sitemapPage.deleteMany({ where: { brandId: brand.id } });

    await prisma.brand.update({
      where: { id: brand.id },
      data: {
        sitemapUrl: '',
        sitemapLastSync: null,
        sitemapPageCount: 0,
      },
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error disconnecting sitemap:', error);
    res.status(500).json({ error: 'Failed to disconnect sitemap' });
  }
});

// GET /api/brands/:id/sitemap/pages - List indexed pages for this brand
router.get('/:id/sitemap/pages', async (req, res) => {
  try {
    const pages = await prisma.sitemapPage.findMany({
      where: { brandId: req.params.id },
      orderBy: { title: 'asc' },
    });
    res.json(pages);
  } catch (error) {
    console.error('Error fetching sitemap pages:', error);
    res.status(500).json({ error: 'Failed to fetch pages' });
  }
});

// ─── Writing Samples CRUD ───

// GET /api/brands/:id/writing-samples - List writing samples for this brand
router.get('/:id/writing-samples', async (req, res) => {
  try {
    const samples = await prisma.writingSample.findMany({
      where: { brandId: req.params.id },
      orderBy: { createdAt: 'desc' },
    });
    res.json(samples);
  } catch (error) {
    console.error('Error fetching writing samples:', error);
    res.status(500).json({ error: 'Failed to fetch writing samples' });
  }
});

// POST /api/brands/:id/writing-samples - Create a new writing sample
router.post('/:id/writing-samples', async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title?.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }
    if (!content?.trim()) {
      return res.status(400).json({ error: 'Content is required' });
    }

    const brand = await prisma.brand.findUnique({ where: { id: req.params.id } });
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    const sample = await prisma.writingSample.create({
      data: {
        brandId: brand.id,
        title: title.trim(),
        content: content.trim(),
      },
    });

    res.status(201).json(sample);
  } catch (error) {
    console.error('Error creating writing sample:', error);
    res.status(500).json({ error: 'Failed to create writing sample' });
  }
});

// PUT /api/brands/:brandId/writing-samples/:sampleId - Update a writing sample
router.put('/:brandId/writing-samples/:sampleId', async (req, res) => {
  try {
    const { title, content } = req.body;

    const sample = await prisma.writingSample.findFirst({
      where: { id: req.params.sampleId, brandId: req.params.brandId },
    });

    if (!sample) {
      return res.status(404).json({ error: 'Writing sample not found' });
    }

    const updates = {};
    if (title !== undefined) updates.title = title.trim();
    if (content !== undefined) updates.content = content.trim();

    const updated = await prisma.writingSample.update({
      where: { id: sample.id },
      data: updates,
    });

    res.json(updated);
  } catch (error) {
    console.error('Error updating writing sample:', error);
    res.status(500).json({ error: 'Failed to update writing sample' });
  }
});

// DELETE /api/brands/:brandId/writing-samples/:sampleId - Delete a writing sample
router.delete('/:brandId/writing-samples/:sampleId', async (req, res) => {
  try {
    const sample = await prisma.writingSample.findFirst({
      where: { id: req.params.sampleId, brandId: req.params.brandId },
    });

    if (!sample) {
      return res.status(404).json({ error: 'Writing sample not found' });
    }

    await prisma.writingSample.delete({ where: { id: sample.id } });

    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting writing sample:', error);
    res.status(500).json({ error: 'Failed to delete writing sample' });
  }
});

export default router;
