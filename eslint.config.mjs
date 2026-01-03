import { defineConfig, globalIgnores } from 'eslint/config';
import bananass from 'eslint-config-bananass';
import md from 'eslint-markdown';

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
  md.configs.recommended,
  md.configs.stylistic,

  {
    name: 'md/global',
    files: ['**/*.md'],
    rules: {
      'md/allow-link-url': [
        'error',
        {
          disallowUrls: [/^\.\//],
        },
      ],
    },
  },
  {
    name: 'md/websites-vitepress/global',
    files: ['websites/vitepress/**/*.md'],
    rules: {
      'md/heading-id': 'error',
      'md/no-emoji': 'error',
    },
  },
  {
    name: 'md/websites-vitepress/solutions/ko',
    files: ['websites/vitepress/ko/solutions/**/*.md'],
    rules: {
      'md/allow-heading': [
        'error',
        {
          h2: ['문제 풀이 {#solutions}', '해설 {#explanation}', '기여자 {#contributors}'],
        },
      ],
    },
  },
  {
    name: 'md/websites-vitepress/solutions/en',
    files: ['websites/vitepress/en/solutions/**/*.md'],
    rules: {
      'md/allow-heading': [
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
