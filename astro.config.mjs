import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andproducers.com',
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
