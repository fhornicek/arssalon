// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://filiphornicek.github.io',
  base: '/ars-salon', // změňte na název vašeho GitHub repozitáře
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});