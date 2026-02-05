import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Custom domain configuration
  site: 'https://jakemaisel.com/',
  base: '/',

  // Static output for GitHub Pages
  output: 'static',

  // Markdown configuration
  markdown: {
    // Enable heading extraction for table of contents
    gfm: true,
  },

  // Other settings
  integrations: [],
});
