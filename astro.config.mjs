import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Custom domain configuration
  site: 'https://jakemaisel.com/',
  base: '/',

  // Static output for GitHub Pages
  output: 'static',

  // Other settings
  integrations: [],
});
