import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://impulse-english.es',
  output: 'static',
  trailingSlash: 'always',
  server: { port: 3000 },
  integrations: [
    react(),
    tailwind({ configFile: './tailwind.config.ts' }),
    sitemap(),
  ],
  build: { format: 'directory' },
  // Redirects handled exclusively by vercel.json (single source of truth)
  vite: {
    resolve: {
      alias: { '@': __dirname }
    }
  },
  env: {
    schema: {
      PUBLIC_WEBHOOK_URL: envField.string({
        context: 'client',
        access: 'public',
      }),
    }
  },
});
