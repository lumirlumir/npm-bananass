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

  // md
  {
    name: 'md/global',
    files: ['**/*.md'],
    rules: {
      'md/allow-image-url': ['error', { disallowUrls: [/^\.\//, /^http:\/\//i] }],
      'md/allow-link-url': ['error', { disallowUrls: [/^\.\//, /^http:\/\//i] }],
      'md/code-lang-shorthand': 'error',
      'md/consistent-code-style': [
        'error',
        { style: 'fence-backtick', blankLineAbove: 1, blankLineBelow: 1 },
      ],
      'md/consistent-delete-style': ['error', { style: '~' }],
      'md/consistent-emphasis-style': ['error', { style: '*' }],
      'md/consistent-inline-code-style': 'error',
      'md/consistent-strong-style': ['error', { style: '*' }],
      'md/consistent-thematic-break-style': ['error', { style: '---' }],
      'md/consistent-unordered-list-style': ['error', { style: '-' }],
      'md/no-control-character': 'error',
      'md/no-curly-quote': 'error',
      'md/no-double-punctuation': 'off', // Too tight.
      'md/no-double-space': 'error',
      'md/no-emoji': 'off',
      'md/no-git-conflict-marker': 'error',
      'md/no-irregular-dash': 'error',
      'md/no-irregular-whitespace': 'error',
      'md/no-tab': 'error',
      'md/no-url-trailing-slash': 'off', // Too tight.
      'md/require-heading-id': 'off',
      'md/require-image-title': 'off', // Too tight.
      'md/require-link-title': 'off', // Too tight.
    },
  },
  {
    name: 'md/websites-vitepress/global',
    files: ['websites/vitepress/**/*.md'],
    rules: {
      'md/require-heading-id': 'error',
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
