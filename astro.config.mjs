// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // lo cambiás cuando tengas el dominio real del cliente
  site: 'https://github.com/roedwin-afk',
  base: '/clinica-dental-landing/',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});