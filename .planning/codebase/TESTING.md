# Testing Patterns

**Analysis Date:** 2026-04-09

## Test Framework

**Runner:**
- Not configured. No test runner detected in `package.json` (main website project)
- Viable options: Jest, Vitest, or Playwright (for Astro)

**Test Structure in seo-writer:**
- seo-writer has no test suite (dev dependencies include `nodemon`, `vite`, `prisma` — no jest/vitest)
- Testing relies on manual integration testing via API endpoints

**Run Commands:**
```bash
# Main website (March-Impulse-Web-...)
# No test scripts present

# seo-writer
npm run dev           # Runs both servers for manual testing
npm run dev:server    # Backend (Express) for testing API endpoints
npm run db:studio     # Visual database browser for data inspection
```

## Test File Organization

**Location:**
- **Not implemented in main codebase**. No `.test.ts`, `.spec.ts`, or test directories found
- Convention would place: co-located with source files (`Component.tsx` → `Component.test.tsx`)

**Naming Convention (if implemented):**
- `.test.ts` or `.spec.ts` suffix
- Example: `LeadForm.test.tsx`, `Navbar.test.tsx`, `useJobs.test.ts`

**Coverage:**
- Not enforced. No coverage configuration detected
- Would use: `--coverage` flag in test runner config

## Testing Approach (Current)

The codebase relies on **manual testing and integration testing** rather than automated unit tests:

### 1. Manual Component Testing (Client)
Components are tested via:
- Astro dev server: `npm run dev` starts local preview
- Browser inspection: Visual verification of Tailwind styles, state changes
- React DevTools: Component props and state inspection

Example testable components:
- `March-Impulse-Web-.../components/LeadForm.tsx` — form submission, validation, webhook payload
- `March-Impulse-Web-.../components/Navbar.tsx` — mobile menu toggle, dropdown interactions, scroll behavior
- `March-Impulse-Web-.../components/FAQSection.tsx` — accordion expand/collapse behavior

### 2. API Integration Testing (Server)
seo-writer endpoints tested via:
- Postman/curl: Manual HTTP requests to Express endpoints
- Frontend UI: Dashboard/job creation pages trigger API calls with real data
- Prisma Studio: `npm run db:studio` for data verification

Example testable endpoints:
```javascript
// seo-writer/server/routes/jobs.js
GET /api/jobs              — List jobs with filters
POST /api/jobs             — Create single job
POST /api/jobs/batch       — Create batch jobs
GET /api/jobs/:id          — Get job detail
POST /api/jobs/:id/generate — Enqueue pipeline
```

### 3. Pipeline Testing (seo-writer)
Sequential pipeline steps are tested by:
- Creating a job via UI/API
- Monitoring progress via SSE connection (`/api/stream/:jobId`)
- Checking database state after each step

Pipeline steps:
1. **Research** (`server/pipeline/research.js`) — SERP analysis via SerpAPI
2. **Image Generation** (`server/pipeline/imageGen.js`) — FAL AI image generation
3. **Writer** (`server/pipeline/writer.js`) — Claude API content generation
4. **Meta Gen** (`server/pipeline/metaGen.js`) — Gemini API meta tag generation
5. **Thumbnail** (`server/pipeline/thumbnail.js`) — Claude + FAL AI thumbnail

Testing approach:
```javascript
// Create job via API
POST /api/jobs
{ topic: "Test Article", keywords: "test, keyword", brandId: "..." }

// Monitor progress via SSE
GET /api/stream/{jobId}
// Expected events: 'research', 'running', 'image-gen', 'running', 'writing', 'running', ...

// Verify outputs
GET /api/jobs/{jobId}
// Check: researchData, inBlogImages[], articleContent, metaTitle, metaDescription
```

## Error Handling Patterns

**Try-Catch (Server):**
```javascript
// seo-writer/server/routes/jobs.js
router.get('/', async (req, res) => {
  try {
    const jobs = await prisma.contentJob.findMany({ where, orderBy: { createdAt: 'desc' } });
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});
```

**Validation (Server):**
```javascript
// seo-writer/server/routes/jobs.js
if (!brandId) {
  return res.status(400).json({ error: 'Brand is required' });
}
if (!Array.isArray(topics) || topics.length === 0) {
  return res.status(400).json({ error: 'At least one topic is required' });
}
if (topics.length > 20) {
  return res.status(400).json({ error: 'Maximum 20 topics per batch' });
}

// Verify brand exists
const brand = await prisma.brand.findUnique({ where: { id: brandId } });
if (!brand) {
  return res.status(404).json({ error: 'Brand not found' });
}
```

**Streaming Error Recovery:**
```javascript
// seo-writer/server/services/claude.js
try {
  const stream = getClient().messages.stream(params);
  stream.on('text', (text) => { accumulated += text; });
  const response = await stream.finalMessage();
  return response.content[0].text;
} catch (error) {
  // Graceful degradation: return partial content if substantial
  if (accumulated.length > 500) {
    console.warn(`[Claude] Recovered ${accumulated.length} chars from failed stream`);
    return accumulated;
  }
  throw new Error(`Claude API error: ${error.message}`);
}
```

**Client-Side Error Handling:**
```typescript
// March-Impulse-Web-.../components/LeadForm.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');
  
  try {
    const payload = { ...formData, source, timestamp: new Date().toISOString() };
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', level: '' });
    window.location.href = '/gracias';
  } catch (error) {
    setStatus('error');
  }
};
```

## Mocking (seo-writer Pattern)

**Services are mockable via environment configuration:**

```javascript
// seo-writer/server/services/claude.js
const model = process.env.CLAUDE_MODEL || 'claude-sonnet-4-5-20250929';
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY, ... });

// For testing: override ANTHROPIC_API_KEY or CLAUDE_MODEL in .env.test
```

**External APIs are wrapped in services:**
- `server/services/claude.js` — Claude API
- `server/services/gemini.js` — Gemini API
- `server/services/serpapi.js` — SerpAPI
- `server/services/fal.js` — FAL AI image generation
- `server/services/firecrawl.js` — Page scraping

**Mock approach (not currently implemented):**
```javascript
// If testing, could mock:
jest.mock('../services/claude.js', () => ({
  chat: jest.fn().mockResolvedValue('Mock article content...')
}));

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn(() => ({
    contentJob: {
      create: jest.fn().mockResolvedValue({ id: 'job-123', ... }),
      findUnique: jest.fn().mockResolvedValue({ id: 'job-123', ... }),
    }
  }))
}));
```

## Fixtures and Factories

**Not implemented. Manual test data approach used:**

**Creating test data manually:**
1. Via UI: Create brand → Create job → Monitor pipeline
2. Via direct API: POST to `/api/jobs/batch` with test topics
3. Via Prisma Studio: Directly insert/modify records in SQLite

**Recommended factory pattern (if implementing tests):**
```javascript
// test/factories/job.factory.js
export function createJobFixture(overrides = {}) {
  return {
    id: 'job-123',
    topic: 'Test Article',
    keywords: 'test, keyword',
    brandId: 'brand-1',
    action: 'Idle',
    researchData: null,
    articleContent: null,
    metaTitle: null,
    metaDescription: null,
    ...overrides
  };
}

// Usage in tests
const testJob = createJobFixture({ topic: 'Custom Topic' });
```

## Data Validation Patterns

**Zod schema usage (optional, not present):**
`package.json` includes `zod` as transitive dependency (via other packages), but not directly used in this codebase.

**Manual validation (current approach):**
```javascript
// seo-writer/server/routes/jobs.js
if (!brandId || typeof brandId !== 'string') {
  return res.status(400).json({ error: 'Invalid brand ID' });
}

if (!Array.isArray(topics)) {
  return res.status(400).json({ error: 'Topics must be an array' });
}

for (const t of topics) {
  if (!t.topic || !t.topic.trim()) {
    return res.status(400).json({ error: 'Topic cannot be empty' });
  }
}
```

**Type validation via TypeScript (client-side):**
```typescript
// March-Impulse-Web-.../components/LeadForm.tsx
interface LeadFormProps {
  title?: string;
  subtitle?: string;
  webhookUrl?: string;
  compact?: boolean;
  showPhone?: boolean;
  showLevel?: boolean;
}

// Props are type-checked at compile time
export default function LeadForm({ title = "...", compact = false }: LeadFormProps) { ... }
```

## State Management Testing

**React Testing Approach (if implementing):**

```typescript
// Example test for LeadForm state management
describe('LeadForm', () => {
  it('should update form state on input change', () => {
    // Test form.useState('idle' | 'loading' | 'success' | 'error')
  });
  
  it('should call webhook on submit', async () => {
    // Test handleSubmit fetch call
  });
  
  it('should redirect to /gracias on success', () => {
    // Test window.location.href = '/gracias'
  });
  
  it('should show success message', () => {
    // Test status === 'success' renders CheckCircle
  });
});
```

**Query/Fetch state testing (seo-writer):**
```javascript
// Example test for useJobs hook
describe('useJobs', () => {
  it('should fetch jobs on mount', () => {
    // Mock fetch, render hook, verify queryKey invalidation
  });
  
  it('should invalidate cache on mutation', () => {
    // Test queryClient.invalidateQueries calls
  });
});
```

## Coverage Gaps

**No automated tests** — all verification is manual:
- React component rendering and interactivity
- Form validation and submission
- API endpoint response formats and status codes
- Pipeline orchestration and error recovery
- Database state mutations
- Third-party API integration (Claude, Gemini, SerpAPI, FAL)

**Recommended starting points for testing:**
1. **Unit tests for utilities:** `server/utils/sitemap.js`, `server/utils/helpers.js`
2. **Integration tests for API routes:** `server/routes/jobs.js`, `server/routes/brands.js`
3. **Component tests for forms:** `LeadForm.tsx`, UI components
4. **Pipeline step tests:** Mock each pipeline stage (research, writer, metaGen, imageGen, thumbnail)

## CI/CD Testing

**Deployment pipeline (Vercel):**
- No explicit test step in deploy (no `npm run test` in `package.json`)
- Build only: `npm run build` → Astro static generation
- Manual testing before deployment

**SEO Writer local testing:**
```bash
npm run dev            # Start dev servers (Express + Vite)
# Manually:
# 1. Create test brand
# 2. Create test job with topic
# 3. Monitor pipeline progress in UI
# 4. Verify outputs in database (Prisma Studio)
# 5. Check webhook delivery (if configured)
```

---

*Testing analysis: 2026-04-09*
