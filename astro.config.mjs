// @ts-check

import svelte from '@astrojs/svelte';
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  outDir: './build',
  output: 'server',
  adapter: cloudflare(),
  integrations: [svelte()],
  server: { host: true, allowedHosts: ['beta.kathund.dev', 'kathund.dev'], port: 44461 },
  vite: { plugins: [tailwindcss()] },
  redirects: {
    '/button/people/kath.png': '/button/people/Amber_dark.png',
    '/kathund-pgp-public.pgp': '/amber-pgp-public.pgp'
  },
  site: 'https://kathund.dev'
});
