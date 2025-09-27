import { defineConfig, globalIgnores } from 'eslint/config';
import bananass from 'eslint-config-bananass';
import mark from 'eslint-plugin-mark';

/** @type {import("eslint").Linter.Config[]} */
export default defineConfig([
  globalIgnores(
    ['**/build/', '**/coverage/', '**/.vitepress/cache/', '**/.bananass/'],
    'global/ignores',
  ),

  bananass.configs.js,
  bananass.configs.ts,
  bananass.configs.json,
  bananass.configs.jsonc,
  bananass.configs.json5,
  mark.configs.recommendedGfm,

  {
    name: 'websites-vitepress/global',
    files: ['websites/vitepress/**/*.md'],
    rules: {
      'mark/heading-id': 'error',
      'mark/no-emoji': 'error',
    },
  },
  {
    name: 'websites-vitepress/solutions/ko',
    files: ['websites/vitepress/ko/solutions/**/*.md'],
    rules: {
      'mark/allowed-heading': [
        'error',
        {
          h2: ['문제 풀이 {#solutions}', '해설 {#explanation}', '기여자 {#contributors}'],
        },
      ],
    },
  },
  {
    name: 'websites-vitepress/solutions/en',
    files: ['websites/vitepress/en/solutions/**/*.md'],
    rules: {
      'mark/allowed-heading': [
        'error',
        {
          h2: [
            'Solutions {#solutions}',
            'Explanation {#explanation}',
            'Contributors {#contributors}',
          ],
        },
      ],
    },
  },
]);
