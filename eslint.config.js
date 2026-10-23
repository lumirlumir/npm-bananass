import { defineConfig, globalIgnores } from 'eslint/config';
import js from 'eslint-lumir/js';
import ts from 'eslint-lumir/ts';
import json from 'eslint-lumir/json';
import jsonc from 'eslint-lumir/jsonc';
import json5 from 'eslint-lumir/json5';
import md from 'eslint-lumir/md';

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
  md,

  // js
  {
    name: 'js/temp/global',
    files: ['**/*.test.js'],
    rules: {
      'node/prefer-import/assert-strict': 'off', // TODO: Enable after refactoring
    },
  },
  {
    name: 'js/temp/preserve-caught-error',
    files: ['packages/bananass/src/**/*.js', 'packages/create-bananass/src/**/*.js'],
    rules: {
      'preserve-caught-error': 'off', // TODO: Enable after refactoring
    },
  },
  {
    name: 'js/examples',
    files: ['examples/**/*.{js,mjs,cjs}'],
    rules: {
      'node/prefer-global/console': 'off', // TODO: Enable after refactoring
    },
  },

  // md
  {
    name: 'md/websites-vitepress/global',
    files: ['websites/vitepress/**/*.md'],
    rules: {
      'md/require-heading-id': 'error',
      'md/no-emoji': 'error',
    },
  },
  {
    name: 'md/websites-vitepress/solutions',
    files: ['websites/vitepress/*/solutions/**/*.md'],
    rules: {
      'markdown/no-missing-label-refs': 'off',
      'md/no-double-punctuation': 'off',
    },
  },
  {
    name: 'md/websites-vitepress/solutions/ko',
    files: ['websites/vitepress/ko/solutions/**/*.md'],
    rules: {
      'md/allow-heading': [
        'error',
        {
          h2: {
            allow: [
              /## 문제 풀이 {#solutions}/,
              /## 해설 {#explanation}/,
              /## 기여자 {#contributors}/,
            ],
          },
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
          h2: {
            allow: [
              /## Solutions {#solutions}/,
              /## Explanation {#explanation}/,
              /## Contributors {#contributors}/,
            ],
          },
        },
      ],
    },
  },
]);
