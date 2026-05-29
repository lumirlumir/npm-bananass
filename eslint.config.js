import { defineConfig, globalIgnores } from 'eslint/config';
import js from 'eslint-config-bananass/js';
import ts from 'eslint-config-bananass/ts';
import json from 'eslint-config-bananass/json';
import jsonc from 'eslint-config-bananass/jsonc';
import json5 from 'eslint-config-bananass/json5';
import md from 'eslint-markdown';

export default defineConfig([
  globalIgnores(
    [
      '**/build/',
      '**/coverage/',
      '**/.vitepress/.temp/',
      '**/.vitepress/cache/',
      '**/.bananass/',
    ],
    'global/ignores',
  ),

  js,
  ts,
  json,
  jsonc,
  json5,
  md.configs.recommended,
  md.configs.stylistic,

  {
    name: 'js/temp',
    files: ['packages/bananass/src/**/*.js', 'packages/create-bananass/src/**/*.js'],
    rules: {
      'preserve-caught-error': 'off', // TODO: Enable after refactoring
    },
  },

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
      // 'md/heading-id': 'error', // TODO
      'md/no-emoji': 'error',
    },
  },
  {
    name: 'md/websites-vitepress/solutions/ko',
    files: ['websites/vitepress/ko/solutions/**/*.md'],
    rules: {
      /*
      'md/allow-heading': [
        'error',
        {
          h2: ['문제 풀이 {#solutions}', '해설 {#explanation}', '기여자 {#contributors}'],
        },
      ],
      */
      // TODO
    },
  },
  {
    name: 'md/websites-vitepress/solutions/en',
    files: ['websites/vitepress/en/solutions/**/*.md'],
    rules: {
      /*
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
      */
      // TODO
    },
  },
]);
