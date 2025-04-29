/**
 * @fileoverview Korean configuration for VitePress.
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
import { ko } from 'bananass-utils-vitepress/i18n';
import { defineConfig } from 'vitepress';

// --------------------------------------------------------------------------------
// Declarations
// --------------------------------------------------------------------------------

const TITLE = '바나나';
const DESCRIPTION = '백준 자바스크립트 프레임워크.🍌';

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
    ['meta', { property: 'og:image', content: `${URL_HOMEPAGE}/logo-og-ko.png` }],
    ['meta', { property: 'og:site_name', content: TITLE }],
    ['meta', { property: 'og:locale', content: 'ko' }],

    // Twitter
    ['meta', { name: 'twitter:url', content: URL_HOMEPAGE }],
    ['meta', { name: 'twitter:title', content: TITLE }],
    ['meta', { name: 'twitter:description', content: DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: `${URL_HOMEPAGE}/logo-og-ko.png` }],
  ],

  themeConfig: {
    ...themeConfig,

    nav: [
      {
        text: '시작하기',
        link: '/get-started/quick-start',
        activeMatch: '/get-started/',
      },
      {
        text: '학습하기',
        link: '/learn',
        activeMatch: '/learn/',
      },
      {
        text: 'ESLint',
        link: 'https://eslint-config-bananass.lumir.page',
      },
      {
        text: '패키지',
        items: BANANASS_PKG_NAMES.map(pkgName => ({
          text: pkgName,
          link: `${URL_NPM}/package/${pkgName}`,
        })),
      },
    ],

    sidebar: {
      '/': [
        {
          base: '/get-started',
          text: '시작하기',
          link: '/quick-start',
          collapsed: false, // Set it `false` to show `>` icon.
          items: [
            {
              text: '시작하기 전에',
              link: '/before-getting-started',
            },
            {
              text: '빠르게 시작하기',
              link: '/quick-start',
            },
            {
              text: '설치하기',
              link: '/installation',
            },
          ],
        },
        {
          base: '/learn',
          text: '학습하기',
          link: '/',
          collapsed: false,
          items: [
            {
              text: '프로젝트 구조',
              link: '/project-structure',
            },
            {
              text: '문제 풀이를 하는 방법',
              // link: '',
              collapsed: false,
              items: [
                {
                  text: '입력값 분해하기',
                  link: '/how-to-parse-input-value',
                },
              ],
            },
            {
              text: '문제 풀이 파일을 실행하는 방법',
              link: '/how-to-run-solution-files',
            },
            {
              text: '바나나 없이 문제 풀기',
              link: '/solving-problems-without-bananass-framework',
            },
            {
              text: '질문과 답변',
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
