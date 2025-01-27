/**
 * @fileoverview Korean configuration for VitePress.
 *
 * @see https://vitepress.dev/reference/site-config#site-config
 */

/* eslint-disable import/no-extraneous-dependencies -- TODO: Delete it after this rule is updated in `eslint-config-bananass` */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { defineConfig } from 'vitepress';

// --------------------------------------------------------------------------------
// Constants
// --------------------------------------------------------------------------------

const AUTHOR = '루밀LuMir';
const TITLE = '바나나';
const DESCRIPTION = '백준 자바스크립트 프레임워크.🍌';
const SITE_URL = 'https://bananass.lumir.page';
const GITHUB_URL = 'https://github.com/lumirlumir/npm-bananass';
const NPM_URL = 'https://www.npmjs.com';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default defineConfig({
  title: TITLE,
  description: DESCRIPTION,
  lang: 'ko-KR',

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

    docFooter: {
      prev: '이전',
      next: '다음',
    },

    outline: {
      label: '이 페이지 목차',
    },

    lastUpdated: {
      text: '업데이트 날짜',
    },

    langMenuLabel: '언어 변경',
    returnToTopLabel: '맨 위로 돌아가기',
    sidebarMenuLabel: '사이드바 메뉴',
    darkModeSwitchLabel: '다크 모드',
    lightModeSwitchTitle: '라이트 모드로 변경',
    darkModeSwitchTitle: '다크 모드로 변경',
    skipToContentLabel: '본문으로 건너뛰기',

    editLink: {
      pattern: `${GITHUB_URL}/edit/main/website/:path`,
      text: '이 페이지 편집 제안하기',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2024-present <a href="https://github.com/lumirlumir">${AUTHOR}(lumirlumir)</a>`,
    },
  },
});
