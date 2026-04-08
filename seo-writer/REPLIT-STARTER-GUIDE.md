# Replit Starter App: Best Practices Guide

A comprehensive guide for building Node.js/Express applications ready for Replit deployment.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Server Configuration](#server-configuration)
3. [Port Requirements](#port-requirements)
4. [Environment Variables & Secrets](#environment-variables--secrets)
5. [Frontend Setup](#frontend-setup)
6. [Static Files](#static-files)
7. [Database Considerations](#database-considerations)
8. [External Assets](#external-assets)
9. [Replit Configuration Files](#replit-configuration-files)
10. [Building & Deploying](#building--deploying)
11. [Common Pitfalls](#common-pitfalls)

---

## Project Structure

Keep your project structure minimal and organized:

```
your-app/
├── server.js           # All backend logic (entry point)
├── package.json        # Dependencies & scripts
├── .env.example        # Template for environment variables
├── .gitignore          # Exclude node_modules, .env
├── .replit             # Replit run configuration
├── replit.nix          # Nix environment (Node version)
├── views/
│   └── index.html      # Frontend (single file preferred)
└── public/             # Static assets (images, CSS, JS)
```

**Best Practices:**
- Start with a single `server.js` file—split into modules only when complexity demands it
- Use a `views/` folder for HTML templates
- Use a `public/` folder for static assets served directly
- Keep dependencies minimal to reduce attack surface and startup time

---

## Server Configuration

### Basic Express Setup

```javascript
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

**Best Practices:**
- Load `dotenv` first before any other code
- Always include a health check endpoint (`/api/health`)
- Use `path.join()` for cross-platform file paths
- Log the startup URL for easy access during development

---

## Port Requirements

**Critical:** Replit's dev preview only works on port 5000.

```javascript
const PORT = process.env.PORT || 5000;
```

**Why 5000?**
- Replit's internal proxy maps port 5000 to the preview URL
- Using any other port will result in a blank preview window
- In production deployments, Replit maps port 5000 → external port 80

**Never do this:**
```javascript
// BAD - hardcoded port that isn't 5000
const PORT = 3000;

// BAD - no fallback
const PORT = process.env.PORT;
```

---

## Environment Variables & Secrets

### Local Development

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```

2. Add your secrets to `.env`:
   ```
   DATABASE_URL=your_database_url
   API_KEY=your_api_key
   ```

3. Access in code:
   ```javascript
   const apiKey = process.env.API_KEY;
   ```

### On Replit

1. Click the **lock icon** in the sidebar (Secrets panel)
2. Add each variable as a key-value pair
3. Replit automatically injects these at runtime—no `.env` file needed

**Best Practices:**
- Never commit `.env` to git (ensure it's in `.gitignore`)
- Always provide `.env.example` with placeholder values
- Document what each variable is used for in `.env.example`
- Use meaningful variable names: `STRIPE_SECRET_KEY` not `KEY1`

---

## Frontend Setup

### Single-File Approach (Recommended for Starters)

Keep everything in one HTML file with inline CSS/JS:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
  <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-3xl font-bold">Hello World</h1>
  </div>

  <script>
    // Your JavaScript here
  </script>
</body>
</html>
```

**Why Tailwind CSS via CDN?**
- Zero build step required
- Instant prototyping
- Full utility class library available
- Perfect for single-page apps and MVPs

**When to Split Files:**
- JavaScript exceeds ~200 lines
- Multiple pages share styles
- You need build-time optimizations

---

## Static Files

### Directory Structure

```
public/
├── images/
│   └── logo.png
├── css/
│   └── custom.css
└── js/
    └── app.js
```

### Serving Static Files

```javascript
app.use(express.static('public'));
```

### Accessing in HTML

```html
<!-- Correct: relative to public/ -->
<img src="/images/logo.png" alt="Logo">
<link rel="stylesheet" href="/css/custom.css">
<script src="/js/app.js"></script>
```

**Best Practices:**
- Use leading slash for absolute paths from public root
- Organize by file type (images/, css/, js/)
- Add user-generated directories to `.gitignore`

---

## Database Considerations

### SQLite with better-sqlite3

If using SQLite on Replit, you **must** disable foreign keys:

```javascript
const Database = require('better-sqlite3');
const db = new Database('app.db');

// CRITICAL: Disable foreign keys on Replit
db.pragma('foreign_keys = OFF');
```

**Why?**
- Replit enforces foreign keys by default (unlike most local setups)
- `INSERT OR REPLACE` triggers delete + reinsert
- This breaks foreign key constraints unexpectedly

### Alternative: External Databases

For production apps, consider:
- **Replit Database** (built-in key-value store)
- **Supabase** (PostgreSQL)
- **PlanetScale** (MySQL)
- **MongoDB Atlas** (NoSQL)

Store connection strings in Secrets, not code.

---

## External Assets

### The Problem with CDN URLs

External image URLs (Facebook CDN, temporary URLs) expire:

```javascript
// BAD - URL will break after hours/days
const imageUrl = 'https://scontent.xx.fbcdn.net/v/t1.0-9/...';
```

### The Solution: Download Locally

```javascript
const fs = require('fs');
const https = require('https');
const path = require('path');

async function downloadAsset(url, filename) {
  const filepath = path.join(__dirname, 'public', 'assets', filename);
  const file = fs.createWriteStream(filepath);

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
    }).on('error', reject);
  });
}
```

**Best Practices:**
- Download external assets during processing/import
- Store in `public/assets/` or similar
- Reference local copies in your database
- Add asset directories to `.gitignore` if user-generated

---

## Replit Configuration Files

### .replit

Controls how Replit runs your app:

```toml
run = "npm install && npm start"
entrypoint = "server.js"

[nix]
channel = "stable-24_05"

[deployment]
run = ["sh", "-c", "npm start"]
build = ["sh", "-c", "npm install"]

[[ports]]
localPort = 5000
externalPort = 80
```

**Key Settings:**
- `run`: Command executed when you click "Run"
- `entrypoint`: File Replit opens by default
- `deployment`: Production build/run commands
- `ports`: Maps internal 5000 → external 80

### replit.nix

Declares system dependencies:

```nix
{ pkgs }: {
  deps = [
    pkgs.nodejs_20
    pkgs.nodePackages.npm
  ];
}
```

**Extend as needed:**
```nix
{ pkgs }: {
  deps = [
    pkgs.nodejs_20
    pkgs.nodePackages.npm
    pkgs.sqlite        # If using SQLite
    pkgs.imagemagick   # If processing images
  ];
}
```

---

## Building & Deploying

### Creating a Replit-Ready ZIP

Use the build script to create a clean ZIP:

```bash
./build-replit-zip.sh my-app
```

**What gets excluded:**
- `node_modules/` (Replit runs `npm install`)
- `.env` (secrets go in Secrets panel)
- `.git/` (not needed for deployment)
- User-generated files

**Critical:** Files must be at the ZIP root level, not nested in a folder.

### Importing to Replit

1. Go to [replit.com](https://replit.com)
2. Click **Create Repl**
3. Select **Import from ZIP**
4. Upload your ZIP file
5. Add secrets via the lock icon
6. Click **Run**

### package.json Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  }
}
```

Keep scripts simple—Replit expects `npm start` to work.

---

## Common Pitfalls

### 1. Wrong Port
**Symptom:** Blank preview window
**Fix:** Use port 5000

### 2. Missing Dependencies
**Symptom:** `Module not found` errors
**Fix:** Run `npm install` and commit `package.json`

### 3. Hardcoded Secrets
**Symptom:** Exposed API keys in code
**Fix:** Use environment variables

### 4. SQLite Foreign Key Errors
**Symptom:** `FOREIGN KEY constraint failed`
**Fix:** Add `db.pragma('foreign_keys = OFF')`

### 5. Expired CDN Images
**Symptom:** Broken images after hours/days
**Fix:** Download and serve locally

### 6. ZIP with Nested Folder
**Symptom:** Replit shows wrong directory structure
**Fix:** Ensure files are at ZIP root (use build script)

### 7. .env Committed to Git
**Symptom:** Secrets visible in repository
**Fix:** Add `.env` to `.gitignore`, use `.env.example`

---

## Quick Start Checklist

- [ ] Clone/copy the template
- [ ] Update `package.json` name and description
- [ ] Copy `.env.example` to `.env` for local development
- [ ] Keep port as 5000
- [ ] Edit `views/index.html` for your frontend
- [ ] Add API routes to `server.js`
- [ ] Test locally with `npm start`
- [ ] Run `./build-replit-zip.sh` to create deployment package
- [ ] Import to Replit and add secrets
- [ ] Deploy!

---

## Resources

- [Replit Docs](https://docs.replit.com)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

*This guide accompanies the Replit Starter Template. Keep it updated as you discover new patterns and pitfalls.*
