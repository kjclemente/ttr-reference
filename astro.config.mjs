// @ts-check
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kjclemente.github.io',
  base: '/ttr-reference/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [react()],
});
