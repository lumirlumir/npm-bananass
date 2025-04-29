import { defineConfig } from 'eslint/config';
import bananass from 'eslint-config-bananass';
import mark from 'eslint-plugin-mark';

/** @type {import("eslint").Linter.Config[]} */
export default defineConfig([
  {
    name: 'global/ignores',
    ignores: ['**/build/', '**/coverage/', '**/.vitepress/cache/', '**/.bananass/'],
  },
  bananass.configs.js,
  bananass.configs.ts,
  mark.configs.recommendedGfm,
  {
    name: 'websites-vitepress',
    files: ['websites/vitepress/**/*.md'],
    rules: {
      'mark/heading-id': 'error',
      'mark/no-emoji': 'error',
    },
  },
]);
