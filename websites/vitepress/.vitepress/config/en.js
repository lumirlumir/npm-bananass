/**
 * @fileoverview English configuration for VitePress.
 *
 * @see https://vitepress.dev/reference/site-config#site-config
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import {
  URL_HOMEPAGE,
  URL_GITHUB_REPO,
  BANANASS_PKG_NAMES,
} from 'bananass/core/constants';
import { en } from 'bananass-utils-vitepress/i18n';
import { defineConfig } from 'vitepress';

// --------------------------------------------------------------------------------
// Declarations
// --------------------------------------------------------------------------------

const TITLE = 'Bananass';
const DESCRIPTION = 'Baekjoon Framework for JavaScript.🍌';
const NPM_URL = 'https://www.npmjs.com';

const { themeConfig, ...restConfig } = en({
  themeConfigEditLinkPattern: `${URL_GITHUB_REPO}/edit/main/websites/vitepress/:path`,
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
    ['meta', { property: 'og:url', content: `${URL_HOMEPAGE}/en` }],
    ['meta', { property: 'og:title', content: TITLE }],
    ['meta', { property: 'og:description', content: DESCRIPTION }],
    ['meta', { property: 'og:image', content: `${URL_HOMEPAGE}/logo-og-en.png` }],
    ['meta', { property: 'og:site_name', content: TITLE }],
    ['meta', { property: 'og:locale', content: 'en' }],

    // Twitter
    ['meta', { name: 'twitter:url', content: `${URL_HOMEPAGE}/en` }],
    ['meta', { name: 'twitter:title', content: TITLE }],
    ['meta', { name: 'twitter:description', content: DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: `${URL_HOMEPAGE}/logo-og-en.png` }],
  ],

  themeConfig: {
    ...themeConfig,

    nav: [
      {
        text: 'Get Started',
        link: '/en/get-started/installation',
        activeMatch: '/en/get-started/installation/',
      },
      {
        text: 'ESLint',
        link: 'https://eslint-config-bananass.lumir.page',
      },
      {
        text: 'Packages',
        items: BANANASS_PKG_NAMES.map(pkgName => ({
          text: pkgName,
          link: `${NPM_URL}/package/${pkgName}`,
        })),
      },
    ],

    sidebar: {
      '/en/': [
        {
          base: '/en/get-started/',
          text: 'Get Started',
          link: 'installation',
          collapsed: false, // Set it `false` to show `>` icon.
          items: [
            {
              text: 'Installation',
              link: 'installation',
            },
          ],
        },
        {
          base: '/en/learn/',
          text: 'Learn',
          // link: '',
          collapsed: false,
          items: [
            {
              text: 'How to Solve Problems',
              // link: '',
              collapsed: false,
              items: [
                {
                  text: 'How to Parse Input Value',
                  link: 'how-to-parse-input-value',
                },
              ],
            },
            {
              text: 'Solving Problems without Bananass',
              link: 'solving-problems-without-bananass-framework',
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: 'npm',
        link: `${NPM_URL}/~lumir`,
        ariaLabel: 'npm profile link for LuMir',
      },
      {
        icon: 'github',
        link: URL_GITHUB_REPO,
        ariaLabel: 'GitHub repository link for Bananass framework',
      },
    ],
  },
});
