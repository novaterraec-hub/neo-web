import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://novaterraec-hub.github.io',
  base: 'neo-web',
  output: 'static',
  integrations: [react()],
});
