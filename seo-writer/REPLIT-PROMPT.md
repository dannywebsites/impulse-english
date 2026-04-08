# Replit Setup Prompt

Paste this into the Replit agent after importing the project.

---

This is a fully built application. Do not modify any source code, do not change the file structure, and do not create new files. Do not investigate or change the database setup. This app uses SQLite, not Postgres.

Run these commands exactly, in this order:

1. `npm install --include=dev`
2. `npx prisma generate`
3. `npx prisma db push`
4. `npx vite build`
5. `node server/index.js`

Do not modify any files. Do not install Node.js separately. Do not use Postgres. Do not create any workflows. Do not run dev mode, do not use concurrently, and do not run vite as a dev server. The app runs in production mode — Express serves the built frontend as static files on port 5000. There is only one server process.

Before running, make sure these environment variables are set in the Secrets panel:
- ANTHROPIC_API_KEY
- GEMINI_API_KEY
- SERPAPI_API_KEY
- FIRECRAWL_API_KEY
- FAL_API_KEY

These environment variables are already configured in the .replit file and should not be changed:
- DATABASE_URL = file:./dev.db
- PORT = 5000
- NODE_ENV = production

Do not modify the .replit file. It is already configured correctly.
