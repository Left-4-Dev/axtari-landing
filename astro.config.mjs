// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://Left-4-Dev.github.io',
  base: '/axtari-landing',
  vite: {
    resolve: {
      alias: {
        '@assets':     path.resolve('./src/assets'),
        '@components': path.resolve('./src/components'),
        '@data':       path.resolve('./src/data'),
        '@layouts':    path.resolve('./src/layouts'),
        '@lib':        path.resolve('./src/lib'),
        '@styles':     path.resolve('./src/styles'),
      }
    }
  }
});

