// @ts-check

import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  outDir: './build',
  integrations: [svelte()],
  server: { host: true, allowedHosts: ['kathund.dev'], port: 44461 },
  vite: { plugins: [tailwindcss()] }
});
