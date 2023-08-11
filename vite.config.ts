import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { FontaineTransform } from "fontaine";

export default defineConfig({
	plugins: [
    sveltekit(),
    FontaineTransform.vite({
      fallbacks: ['Arial'],
      // resolve absolute URL -> file
      resolvePath: id => new URL('.' + id, import.meta.url),
    }),
  ]
});
