import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages configuration
  site: 'https://jmaisel.github.io/JM-CaseStudies/',
  base: '/JM-CaseStudies/',

  // Static output for GitHub Pages
  output: 'static',

  // Other settings
  integrations: [],
});
