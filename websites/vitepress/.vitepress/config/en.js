/**
 * @fileoverview English configuration for VitePress.
 *
 * @see https://vitepress.dev/reference/site-config#site-config
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import {
  URL_NPM,
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
        link: '/en/get-started/quick-start',
        activeMatch: '/en/get-started/',
      },
      {
        text: 'Learn',
        link: 'en/learn',
        activeMatch: 'en/learn/',
      },
      {
        text: 'APIs',
        link: 'en/apis',
        activeMatch: 'en/apis/',
      },
      {
        text: 'ESLint',
        link: 'https://eslint-config-bananass.lumir.page',
      },
      {
        text: 'Packages',
        items: BANANASS_PKG_NAMES.map(pkgName => ({
          text: pkgName,
          link: `${URL_NPM}/package/${pkgName}`,
        })),
      },
    ],

    sidebar: {
      '/en/apis': [
        {
          base: '/en/apis',
          text: 'APIs',
          link: '/',
          items: [
            {
              base: '/en/apis/eslint-config-bananass',
              text: 'eslint-config-bananass',
              link: '/',
              collapsed: false,
              items: [
                {
                  text: 'References',
                  link: '/references',
                },
              ],
            },
          ],
        },
      ],

      '/en/': [
        {
          base: '/en/get-started',
          text: 'Get Started',
          link: '/quick-start',
          collapsed: false, // Set it `false` to show `>` icon.
          items: [
            {
              text: 'Before Getting Started',
              link: '/before-getting-started',
            },
            {
              text: 'Quick Start',
              link: '/quick-start',
            },
            {
              text: 'Installation',
              link: '/installation',
            },
            {
              text: 'Editor Setup',
              link: '/editor-setup',
            },
          ],
        },
        {
          base: '/en/learn',
          text: 'Learn',
          link: '/',
          collapsed: false,
          items: [
            {
              text: 'Project Structure',
              link: '/project-structure',
            },
            {
              text: 'How to Create Solution Files',
              collapsed: false,
              items: [
                {
                  text: 'testcases, solution, export',
                  link: '',
                },
                {
                  text: '',
                  link: '',
                },
                {
                  text: '',
                  link: '',
                },
                {
                  text: '',
                  link: '',
                },
                {
                  text: '',
                  link: '',
                },
                {
                  text: '',
                  link: '',
                },
                {
                  text: '',
                  link: '',
                },
              ],
            },
            {
              text: 'How to Solve Problems',
              collapsed: false,
              items: [
                {
                  text: 'How to Parse Input Value',
                  link: '/how-to-parse-input-value',
                },
                {
                  text: '',
                  link: '',
                },
                {
                  text: '',
                  link: '',
                },
              ],
            },
            {
              text: 'How to Run Solution Files',
              link: '/how-to-run-solution-files',
            },
            {
              text: 'How to Build Solution Files',
              link: '',
            },
            {
              text: 'Solving Problems without Bananass',
              link: '/solving-problems-without-bananass-framework',
            },
            {
              text: 'Q & A',
              link: '/q-and-a',
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: 'npm',
        link: `${URL_NPM}/~lumir`,
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
