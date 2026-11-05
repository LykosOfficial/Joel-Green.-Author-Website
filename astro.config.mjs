// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Fixed dev port so `pnpm dev` (all apps at once) never shuffles ports.
  // blog 4321 · author 4322 · admin 4323 · api 8787
  server: { port: 4322 },

  site: 'https://joelgreenauthor.com', // used for sitemap, canonical + OG URLs
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});