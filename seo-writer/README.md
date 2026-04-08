# SEO Content Writer & Researcher

An AI-powered SEO content research and writing platform that automates the entire content creation process from SERP research to final article generation with images.

## Features

- **Automated Research**: Uses Gemini AI with function calling to research topics via SerpAPI and Firecrawl
- **AI Content Writing**: Generates comprehensive, SEO-optimized articles
- **Image Generation**: Creates thumbnails and in-blog images using FAL AI (Nano Banana Pro)
- **SEO Metadata**: Automatically generates meta titles, descriptions, and slugs
- **Real-time Updates**: Server-Sent Events (SSE) provide live pipeline progress
- **Clean UI**: Modern interface built with React, shadcn/ui, and Tailwind CSS

## Tech Stack

### Frontend
- React 18 + Vite
- shadcn/ui component library
- TailwindCSS
- React Router
- TanStack Query (React Query)
- React Markdown

### Backend
- Node.js + Express
- Prisma ORM
- SQLite (file-based database)
- Server-Sent Events (SSE)

### AI & APIs
- **Gemini API** - All LLM operations (research, writing, metadata)
- **SerpAPI** - Google SERP data
- **Firecrawl** - Web scraping
- **FAL AI** - Image generation (Nano Banana Pro model)

## Getting Started

### Prerequisites

- Node.js v20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd SEO-BLOG-WRITER
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

4. Configure environment variables:

Create a `.env` file in the root directory with your API keys:

```env
# Database
DATABASE_URL="file:./dev.db"

# API Keys (REQUIRED)
GEMINI_API_KEY=your_gemini_api_key_here
SERPAPI_API_KEY=your_serpapi_key_here
FIRECRAWL_API_KEY=your_firecrawl_key_here
FAL_API_KEY=your_fal_ai_key_here

# App Config
PORT=3000
NODE_ENV=development

# Gemini Config
GEMINI_MODEL=gemini-3-flash-preview
```

### Getting API Keys

1. **Gemini API**: Get from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. **SerpAPI**: Sign up at [SerpAPI](https://serpapi.com/)
3. **Firecrawl**: Get key from [Firecrawl](https://firecrawl.dev/)
4. **FAL AI**: Sign up at [FAL AI](https://fal.ai/)

### Running Locally

Start both the development server and client:

```bash
npm run dev
```

This will start:
- **Express API server** at http://localhost:3000
- **Vite development server** at http://localhost:5173

### Available Scripts

- `npm run dev` - Start both server and client in development mode
- `npm run dev:server` - Start only the Express server
- `npm run dev:client` - Start only the Vite client
- `npx prisma studio` - Open Prisma Studio to view/edit database

## Usage

1. **Create a New Job**:
   - Click "New Job" on the dashboard
   - Enter your topic and keywords
   - Configure image generation options
   - Choose to create or create & generate immediately

2. **Monitor Progress**:
   - Jobs display real-time status updates via SSE
   - View current pipeline step and progress messages

3. **View Results**:
   - Click on a completed job to view all outputs
   - Tabs: Overview, Research, Content, SEO Metadata, Images
   - Copy content or export as HTML

## Pipeline Workflow

The content generation pipeline runs 5 sequential steps:

1. **Research Agent** - Uses Gemini function calling to:
   - Search Google SERPs via SerpAPI
   - Scrape competitor pages via Firecrawl
   - Compile comprehensive research brief

2. **In-Blog Image Generation** (optional):
   - Gemini generates 3-4 image specifications
   - FAL AI creates images based on specs

3. **Content Writing**:
   - Gemini writes full article using research
   - Embeds in-blog images if generated

4. **Meta Generation**:
   - Gemini creates meta title, description, and slug
   - Uses structured JSON output with schema validation

5. **Thumbnail Generation** (optional):
   - Gemini creates thumbnail prompt
   - FAL AI generates featured image

## Project Structure

```
/
├── server/
│   ├── index.js                 # Express entry point
│   ├── db.js                    # Prisma client
│   ├── routes/
│   │   ├── jobs.js              # CRUD API endpoints
│   │   └── stream.js            # SSE streaming
│   ├── services/
│   │   ├── gemini.js            # Gemini API client
│   │   ├── serpapi.js           # SerpAPI client
│   │   ├── firecrawl.js         # Firecrawl client
│   │   └── fal.js               # FAL AI client
│   ├── pipeline/
│   │   ├── orchestrator.js      # Main pipeline
│   │   ├── research.js          # Research agent
│   │   ├── imageGen.js          # In-blog images
│   │   ├── writer.js            # Content writer
│   │   ├── metaGen.js           # Meta generator
│   │   └── thumbnail.js         # Thumbnail generator
│   └── utils/
│       └── events.js            # SSE EventEmitter
│
├── src/
│   ├── pages/
│   │   ├── Dashboard.jsx        # Job list view
│   │   ├── JobDetail.jsx        # Job detail with tabs
│   │   └── NewJob.jsx           # Job creation form
│   ├── hooks/
│   │   ├── useJobs.js           # React Query hooks
│   │   └── useSSE.js            # SSE subscription hook
│   ├── components/ui/           # shadcn/ui components
│   ├── App.jsx                  # Main app with routing
│   └── main.jsx                 # Entry point
│
├── prisma/
│   └── schema.prisma            # Database schema
│
└── package.json
```

## Database Schema

The ContentJob model tracks all job data:

- Job configuration (topic, keywords, language, location)
- Research output (markdown research brief)
- Content output (full article, meta title/description/slug)
- Images (thumbnail URL, in-blog images JSON array)
- Pipeline state (current step, action status, error messages)

## Deployment to Replit

1. Fork this repository on Replit
2. Add environment variables in Replit Secrets:
   - `GEMINI_API_KEY`
   - `SERPAPI_API_KEY`
   - `FIRECRAWL_API_KEY`
   - `FAL_API_KEY`
3. Run setup command:
   ```bash
   npm install && npx prisma generate && npx prisma db push
   ```
4. Start the application:
   ```bash
   npm run dev
   ```

The SQLite database file (dev.db) will be created automatically and persists in your Replit environment.

## API Endpoints

### Jobs
- `GET /api/jobs` - List all jobs (optional `?status=` filter)
- `POST /api/jobs` - Create new job
- `GET /api/jobs/:id` - Get single job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job
- `POST /api/jobs/:id/generate` - Trigger content generation

### Streaming
- `GET /api/jobs/:id/stream` - SSE stream for real-time updates

### Health
- `GET /api/health` - Server health check

## Error Handling

All API services (Gemini, SerpAPI, Firecrawl, FAL AI) use lazy initialization. If API keys are missing, errors occur only when the API is actually used, not on server startup. This allows the app to run for testing the UI without all keys configured.

## License

MIT

## Support

For issues or questions, refer to BUILD_LOG.md for implementation details and progress tracking.
