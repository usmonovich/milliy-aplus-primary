/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
const VERSION = `${pkg.version}-${new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '')}`;

/** Emits sw.js with a precache list of every built file, so the app works offline after the first visit. */
function serviceWorker(): Plugin {
  return {
    name: 'milliy-sw',
    apply: 'build',
    generateBundle(_, bundle) {
      const files = Object.keys(bundle).filter((f) => !f.endsWith('.map'));
      const statics = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];
      const list = [...new Set([...statics, ...files.map((f) => './' + f)])];
      const tpl = readFileSync(new URL('./sw.template.js', import.meta.url), 'utf8');
      this.emitFile({ type: 'asset', fileName: 'sw.js', source: tpl.replace('__VERSION__', VERSION).replace('"__PRECACHE__"', JSON.stringify(list)) });
    },
  };
}

// Relative base so the build works on the GitHub Pages sub-path.
export default defineConfig({
  base: './',
  plugins: [react(), serviceWorker()],
  define: { __APP_VERSION__: JSON.stringify(VERSION) },
  test: { environment: 'node', include: ['src/**/*.test.ts'] },
});
