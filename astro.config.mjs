// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com', // replace with your domain once you have one
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
