/**
 * @fileoverview Korean configuration for VitePress.
 *
 * @see https://vitepress.dev/reference/site-config#site-config
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import {
  URL_HOMEPAGE,
  URL_GITHUB_REPO,
  // BANANASS_PKG_NAMES,
} from 'bananass/core/constants';
import { ko } from 'bananass-utils-vitepress/i18n';
import { defineConfig } from 'vitepress';

// --------------------------------------------------------------------------------
// Declarations
// --------------------------------------------------------------------------------

const TITLE = '바나나';
const DESCRIPTION = '백준 자바스크립트 프레임워크.🍌';
const NPM_URL = 'https://www.npmjs.com';

const { themeConfig, ...restConfig } = ko({
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
        content: '바나나, Bananass, 백준, 자바스크립트, 프레임워크',
      },
    ],

    // Open Graph
    ['meta', { property: 'og:url', content: URL_HOMEPAGE }],
    ['meta', { property: 'og:title', content: TITLE }],
    ['meta', { property: 'og:description', content: DESCRIPTION }],
    ['meta', { property: 'og:image', content: `${URL_HOMEPAGE}/logo-og.png` }],
    ['meta', { property: 'og:site_name', content: TITLE }],
    ['meta', { property: 'og:locale', content: 'ko' }],

    // Twitter
    ['meta', { name: 'twitter:url', content: URL_HOMEPAGE }],
    ['meta', { name: 'twitter:title', content: TITLE }],
    ['meta', { name: 'twitter:description', content: DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: `${URL_HOMEPAGE}/logo-og.png` }],
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
        ],
      },
      {
        text: '패키지',
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
        ariaLabel: '루밀LuMir의 npm 프로필 링크',
      },
      {
        icon: 'github',
        link: URL_GITHUB_REPO,
        ariaLabel: '바나나 프레임워크 깃허브 레포지토리 링크',
      },
    ],
  },
});
