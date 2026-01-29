// @ts-check

import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte()],

  vite: { plugins: [tailwindcss()] }
});
