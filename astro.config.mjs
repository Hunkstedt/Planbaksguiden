import { defineConfig } from 'astro/config';

// SITE_URL och BASE_PATH sätts i deploy-flödet. Byt till riktig domän när den är köpt.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.se',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
});
