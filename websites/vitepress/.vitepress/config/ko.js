/**
 * @fileoverview Korean configuration for VitePress.
 *
 * @see https://vitepress.dev/reference/site-config#site-config
 */

/* eslint-disable import/no-extraneous-dependencies -- TODO: Delete it after this rule is updated in `eslint-config-bananass` */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import koreanConfig from 'bananass-utils-vitepress/i18n/ko';
import { defineConfig } from 'vitepress';

// --------------------------------------------------------------------------------
// Declarations
// --------------------------------------------------------------------------------

const TITLE = '바나나';
const DESCRIPTION = '백준 자바스크립트 프레임워크.🍌';
const SITE_URL = 'https://bananass.lumir.page';
const GITHUB_URL = 'https://github.com/lumirlumir/npm-bananass';
const NPM_URL = 'https://www.npmjs.com';

const { themeConfig, ...restConfig } = koreanConfig({
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
        content: '바나나, Bananass, 백준, 자바스크립트, 프레임워크',
      },
    ],

    // Open Graph
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['meta', { property: 'og:title', content: TITLE }],
    ['meta', { property: 'og:description', content: DESCRIPTION }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/logo-og.png` }],
    ['meta', { property: 'og:site_name', content: TITLE }],
    ['meta', { property: 'og:locale', content: 'ko' }],

    // Twitter
    ['meta', { name: 'twitter:url', content: SITE_URL }],
    ['meta', { name: 'twitter:title', content: TITLE }],
    ['meta', { name: 'twitter:description', content: DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/logo-og.png` }],
  ],

  themeConfig: {
    ...themeConfig,

    nav: [],

    sidebar: {},

    socialLinks: [
      {
        icon: 'npm',
        link: `${NPM_URL}/~lumir`,
        ariaLabel: '루밀LuMir의 npm 프로필 링크',
      },
      {
        icon: 'github',
        link: GITHUB_URL,
        ariaLabel: '바나나 프레임워크 레포지토리 깃허브 링크',
      },
    ],
  },
});
