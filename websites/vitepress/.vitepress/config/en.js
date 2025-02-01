/**
 * @fileoverview English configuration for VitePress.
 *
 * @see https://vitepress.dev/reference/site-config#site-config
 */

/* eslint-disable import/no-extraneous-dependencies -- TODO: Delete it after this rule is updated in `eslint-config-bananass` */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import englishConfig from 'bananass-utils-vitepress/i18n/en';
import { defineConfig } from 'vitepress';

// --------------------------------------------------------------------------------
// Declarations
// --------------------------------------------------------------------------------

const TITLE = 'Bananass';
const DESCRIPTION = 'Baekjoon Framework for JavaScript.🍌';
const SITE_URL = 'https://bananass.lumir.page';
const GITHUB_URL = 'https://github.com/lumirlumir/npm-bananass';
const NPM_URL = 'https://www.npmjs.com';

const { themeConfig, ...restConfig } = englishConfig({
  themeConfigEditLinkPattern: `${GITHUB_URL}/edit/main/websites/vitepress/:path`,
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default defineConfig({
  ...restConfig,

  title: TITLE,
  description: DESCRIPTION,

  head: [
    // Basic
    ['meta', { name: 'title', content: TITLE }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'Bananass, Baekjoon, JavaScript, Framework',
      },
    ],

    // Open Graph
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['meta', { property: 'og:title', content: TITLE }],
    ['meta', { property: 'og:description', content: DESCRIPTION }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/logo-og.png` }],
    ['meta', { property: 'og:site_name', content: TITLE }],
    ['meta', { property: 'og:locale', content: 'en' }],

    // Twitter
    ['meta', { name: 'twitter:url', content: SITE_URL }],
    ['meta', { name: 'twitter:title', content: TITLE }],
    ['meta', { name: 'twitter:description', content: DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/logo-og.png` }],
  ],

  themeConfig: {
    ...themeConfig,

    nav: [
      {
        text: 'ESLint',
        items: [
          {
            text: 'eslint-config-bananass',
            link: 'https://eslint-config-bananass.lumir.page',
          },
          {
            text: 'eslint-config-bananass-react',
            link: 'https://eslint-config-bananass-react.lumir.page',
          },
        ],
      },
      {
        text: 'Packages',
        items: [
          {
            text: 'bananass',
            link: `${NPM_URL}/package/bananass`,
          },
          {
            text: 'bananass-dataset',
            link: `${NPM_URL}/package/bananass-dataset`,
          },
          {
            text: 'bananass-utils-console',
            link: `${NPM_URL}/package/bananass-utils-console`,
          },
          {
            text: 'bananass-utils-vitepress',
            link: `${NPM_URL}/package/bananass-utils-vitepress`,
          },
          {
            text: 'create-bananass',
            link: `${NPM_URL}/package/create-bananass`,
          },
          {
            text: 'eslint-config-bananass',
            link: `${NPM_URL}/package/eslint-config-bananass`,
          },
          {
            text: 'eslint-config-bananass-react',
            link: `${NPM_URL}/package/eslint-config-bananass-react`,
          },
          {
            text: 'prettier-config-bananass',
            link: `${NPM_URL}/package/prettier-config-bananass`,
          },
        ],
      },
    ],

    sidebar: {},

    socialLinks: [
      {
        icon: 'npm',
        link: `${NPM_URL}/~lumir`,
        ariaLabel: 'npm profile link for LuMir',
      },
      {
        icon: 'github',
        link: GITHUB_URL,
        ariaLabel: 'GitHub repository link for Bananass framework',
      },
    ],
  },
});
