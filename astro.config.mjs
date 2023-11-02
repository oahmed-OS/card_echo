import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: `https://oahmed-os.github.io`,
  base: '/card_echo',
  integrations: [react()]
});