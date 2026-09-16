import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thunderous-kitsune-b09a4f.netlify.app',
  integrations: [sitemap()],
  output: 'static',
  build: { format: 'directory' }
});
