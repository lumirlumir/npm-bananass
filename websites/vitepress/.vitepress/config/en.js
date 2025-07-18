/**
 * @fileoverview English configuration for VitePress.
 * @see https://vitepress.dev/reference/site-config#site-config
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { readdirSync } from 'node:fs';
import { parse } from 'node:path';

import {
  URL_NPM,
  URL_HOMEPAGE,
  URL_GITHUB_REPO,
  BANANASS_PKG_NAMES,
} from 'bananass/core/constants';
import { defineConfig } from 'vitepress';
import en from '../i18n/en.js';

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
    ['meta', { property: 'og:site_name', content: TITLE }],
    ['meta', { property: 'og:locale', content: 'en' }],

    // Twitter
    ['meta', { name: 'twitter:url', content: `${URL_HOMEPAGE}/en` }],
    ['meta', { name: 'twitter:title', content: TITLE }],
    ['meta', { name: 'twitter:description', content: DESCRIPTION }],
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
        link: '/en/learn',
        activeMatch: '/en/learn/',
      },
      {
        text: 'APIs',
        link: '/en/apis',
        activeMatch: '/en/apis/',
      },
      {
        text: 'Solutions',
        link: '/en/solutions',
        activeMatch: '/en/solutions/',
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
      '/en/solutions': [
        {
          base: '/en/solutions',
          text: 'Solutions',
          link: '/',
          collapsed: false,
          items: [
            {
              base: '/en/solutions/baekjoon',
              text: 'Baekjoon',
              collapsed: true,
              items: readdirSync(new URL('../../en/solutions/baekjoon', import.meta.url))
                .sort((a, b) => parse(a).name - parse(b).name)
                .map(fileName => ({
                  text: parse(fileName).name,
                  link: `/${parse(fileName).name}`,
                })),
            },
            {
              base: '/en/solutions/codeforces',
              text: 'Codeforces',
              collapsed: true,
              items: readdirSync(
                new URL('../../en/solutions/codeforces', import.meta.url),
              ).map(fileName => ({
                text: parse(fileName).name,
                link: `/${parse(fileName).name}`,
              })),
            },
          ],
        },
      ],

      '/en/apis': [
        {
          base: '/en/apis',
          text: 'APIs',
          link: '/',
          collapsed: false,
          items: [
            {
              text: 'bananass',
              link: '/bananass',
            },
            {
              text: 'bananass-utils-console',
              link: '/bananass-utils-console',
            },
            {
              text: 'create-bananass',
              link: '/create-bananass',
            },
            {
              text: 'eslint-config-bananass',
              link: '/eslint-config-bananass',
            },
            {
              text: 'prettier-config-bananass',
              link: '/prettier-config-bananass',
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
              text: 'Writing a Solution File',
              collapsed: true,
              items: [
                {
                  text: 'Writing Test Cases',
                  link: '/writing-test-cases',
                },
                {
                  text: 'Writing a Solution Function',
                  link: '/writing-a-solution-function',
                },
                {
                  text: 'Exporting Test Cases and Solution Function',
                  link: '/exporting-test-cases-and-solution-function',
                },
                {
                  text: 'Writing All Logic in a Single File',
                  link: '/writing-all-logic-in-a-single-file',
                },
                {
                  text: 'Writing Modular Logic in a Single Folder',
                  link: '/writing-modular-logic-in-a-single-folder',
                },
                {
                  text: 'Importing External Libraries',
                  link: '/importing-external-libraries',
                },
                {
                  text: 'Excluding Specific Code from the Final Build File',
                  link: '/excluding-specific-code-from-the-final-build-file',
                },
              ],
            },
            {
              text: 'Solving a Problem',
              collapsed: true,
              items: [
                {
                  text: 'Parsing Input Value',
                  link: '/parsing-input-value',
                },
                {
                  text: 'If No Input Value',
                  link: '/if-no-input-value',
                },
                {
                  text: 'Stringifying Output Value',
                  link: '/stringifying-output-value',
                },
              ],
            },
            {
              text: 'Running a Solution File',
              link: '/running-a-solution-file',
            },
            {
              text: 'Building a Solution File',
              link: '/building-a-solution-file',
            },
            {
              text: 'Submitting a Solution File',
              link: '/submitting-a-solution-file',
            },
            {
              text: 'Other Useful CLI Commands',
              link: '/other-useful-cli-commands',
            },
            {
              text: 'Writing a <code>bananass.config</code> File',
              link: '/writing-bananass-config-file',
            },
            {
              text: 'Solving a Problem without Bananass',
              link: '/solving-a-problem-without-bananass',
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
