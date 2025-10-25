// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.filiphornicek.cz/arssalon/',
  base: '/ars-salon', // změňte na název vašeho GitHub repozitáře
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});