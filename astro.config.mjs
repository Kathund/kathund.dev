// @ts-check

import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  outDir: './build',
  integrations: [svelte()],
  server: { host: true, allowedHosts: ['beta.kath.lol'], port: 44461 },
  vite: { plugins: [tailwindcss()] }
});
