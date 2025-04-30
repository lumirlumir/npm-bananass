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
        text: 'API',
        link: '/apis',
        activeMatch: '/apis/',
      },
      {
        text: '문제 풀이',
        link: '/solutions',
        activeMatch: '/solutions/',
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
      '/solutions': [
        {
          base: '/solutions',
          text: '문제 풀이 해답',
          link: '',
          collapsed: false,
          items: [
            {
              base: '/solutions/baekjoon',
              text: '백준',
              collapsed: true,
            },
            {
              base: '/solutions/codeforces',
              text: '코드포스',
              collapsed: true,
            },
          ],
        },
      ],

      '/apis': [
        {
          base: '/apis',
          text: 'API 참고서',
          link: '/',
          collapsed: false,
          items: [
            {
              base: '/apis/bananass',
              text: 'bananass',
            },
            {
              base: '/apis/bananass-utils-console',
              text: 'bananass-utils-console',
            },
            {
              base: '/apis/bananass-utils-vitepress',
              text: 'bananass-utils-vitepress',
            },
            {
              base: '/apis/create-bananass',
              text: 'create-bananass',
            },
            {
              base: '/apis/eslint-config-bananass',
              text: 'eslint-config-bananass',
              link: '/',
              collapsed: false,
              items: [
                {
                  text: '참고 문서',
                  link: '/references',
                },
              ],
            },
            {
              base: '/apis/prettier-config-bananass',
              text: 'prettier-config-bananass',
            },
          ],
        },
      ],

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
            {
              text: '에디터 설정하기',
              link: '/editor-setup',
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
              text: '문제 풀이 파일 작성하기',
              collapsed: true,
              items: [
                {
                  text: '테스트 케이스 작성하기',
                  link: '/writing-test-cases',
                },
                {
                  text: '문제 풀이 함수 작성하기',
                  link: '/writing-a-solution-function',
                },
                {
                  text: '테스트 케이스 및 문제 풀이 함수 내보내기',
                  link: '',
                },
                {
                  text: '하나의 파일에 모든 로직 작성하기',
                  link: '',
                },
                {
                  text: '하나의 폴더에 모듈을 분리하여 로직 작성하기',
                  link: '',
                },
                {
                  text: '외부 라이브러리 불러오기',
                  link: '',
                },
                {
                  text: '최종 빌드 파일에서 특정 코드 제외하기',
                  link: '',
                },
              ],
            },
            {
              text: '문제 풀기',
              collapsed: true,
              items: [
                {
                  text: '입력값 분해하기',
                  link: '/parsing-input-value',
                },
                {
                  text: '입력값이 없는 경우',
                  link: '',
                },
                {
                  text: '출력값 조립하기',
                  link: '',
                },
              ],
            },
            {
              text: '문제 풀이 파일 실행하기',
              link: '/running-a-solution-file',
            },
            {
              text: '문제 풀이 파일 빌드하기',
              link: '',
            },
            {
              text: '문제 풀이 파일 제출하기',
              collapsed: true,
              items: [
                {
                  text: '홈페이지에 직접 제출하기',
                  link: '',
                },
                {
                  text: 'CLI 명령어를 통해 제출하기',
                  link: '',
                },
              ],
            },
            {
              text: '이외의 유용한 CLI 명령어들',
              link: '',
            },
            {
              text: '<code>bananass.config</code> 파일 작성하기',
            },
            {
              text: '바나나 없이 문제 풀기',
              link: '/solving-a-problem-without-bananass',
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
