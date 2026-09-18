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

  // js
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
      'markdown/fenced-code-language': 'error',
      'markdown/fenced-code-meta': 'off',
      'markdown/heading-increment': 'error',
      'markdown/no-bare-urls': 'error',
      'markdown/no-duplicate-definitions': ['error', { checkFootnoteDefinitions: true }],
      'markdown/no-duplicate-headings': ['error', { checkSiblingsOnly: true }],
      'markdown/no-empty-definitions': ['error', { checkFootnoteDefinitions: true }],
      'markdown/no-empty-images': 'error',
      'markdown/no-empty-links': 'error',
      'markdown/no-html': [
        'error',
        {
          allowed: [
            'strong',
            'em',
            'small',
            'sub',
            'sup',
            'u',
            'br',
            'details',
            'summary',
            'image',
            'code',
            'kbd',
            'mark',
          ],
        },
      ],
      'markdown/no-invalid-label-refs': 'error',
      'markdown/no-missing-atx-heading-space': ['error', { checkClosedHeadings: true }],
      'markdown/no-missing-label-refs': [
        'error',
        { allowLabels: ['!NOTE', '!TIP', '!IMPORTANT', '!WARNING', '!CAUTION', 'TOC'] },
      ],
      'markdown/no-missing-link-fragments': ['error', { ignoreCase: false }],
      'markdown/no-multiple-h1': 'error',
      'markdown/no-reference-like-urls': 'error',
      'markdown/no-reversed-media-syntax': 'error',
      'markdown/no-space-in-emphasis': ['error', { checkStrikethrough: true }],
      'markdown/no-unused-definitions': ['error', { checkFootnoteDefinitions: true }],
      'markdown/require-alt-text': 'error',
      'markdown/table-column-count': ['error', { checkMissingCells: true }],
      'md/allow-heading': 'off',
      'md/allow-image-url': ['error', { disallowUrls: [/^\.\//, /^http:\/\//i] }],
      'md/allow-link-url': ['error', { disallowUrls: [/^\.\//, /^http:\/\//i] }],
      'md/code-lang-shorthand': 'error',
      'md/consistent-code-style': [
        'error',
        { style: 'fence-backtick', blankLineAbove: 1, blankLineBelow: 1 },
      ],
      'md/consistent-delete-style': ['error', { style: '~' }],
      'md/consistent-emphasis-style': ['error', { style: '*' }],
      'md/consistent-heading-style': ['error', { style: 'atx' }],
      'md/consistent-inline-code-style': 'error',
      'md/consistent-strong-style': ['error', { style: '*' }],
      'md/consistent-thematic-break-style': ['error', { style: '---' }],
      'md/consistent-unordered-list-style': ['error', { style: '-' }],
      'md/no-consecutive-blank-line': ['error', { max: 1, skipCode: false }],
      'md/no-control-character': ['error', { skipCode: false, skipInlineCode: false }],
      'md/no-curly-quote': 'error',
      'md/no-double-punctuation': 'off', // TODO: Currently have bug when gemoji is used.
      'md/no-double-space': 'error',
      'md/no-emoji': 'off',
      'md/no-git-conflict-marker': ['error', { skipCode: false, skipMath: false }],
      'md/no-irregular-dash': [
        'error',
        {
          skipCode: false,
          skipInlineCode: false,
          skipMath: false,
          skipInlineMath: false,
        },
      ],
      'md/no-irregular-whitespace': [
        'error',
        {
          skipCode: false,
          skipInlineCode: false,
          skipMath: false,
          skipInlineMath: false,
        },
      ],
      'md/no-shell-dollar': 'off',
      'md/no-tab': ['error', { skipCode: false, skipInlineCode: false }],
      'md/no-trailing-heading-punctuation': 'error',
      'md/no-url-trailing-slash': 'off', // Too tight.
      'md/require-heading-id': 'off',
      'md/require-image-title': 'off', // Too tight.
      'md/require-link-title': 'off', // Too tight.
    },
    languageOptions: {
      math: true,
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
    name: 'md/websites-vitepress/solutions',
    files: ['websites/vitepress/*/solutions/**/*.md'],
    rules: {
      'markdown/no-missing-label-refs': 'off',
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
