/**
 * @fileoverview Korean configuration for VitePress.
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
import ko from '../i18n/ko.js';

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
    ['meta', { property: 'og:site_name', content: TITLE }],
    ['meta', { property: 'og:locale', content: 'ko' }],

    // Twitter
    ['meta', { name: 'twitter:url', content: URL_HOMEPAGE }],
    ['meta', { name: 'twitter:title', content: TITLE }],
    ['meta', { name: 'twitter:description', content: DESCRIPTION }],
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
          link: '/',
          collapsed: false,
          items: [
            {
              base: '/solutions/baekjoon',
              text: '백준',
              collapsed: true,
              items: readdirSync(new URL('../../ko/solutions/baekjoon', import.meta.url))
                .sort((a, b) => parse(a).name - parse(b).name)
                .map(fileName => ({
                  text: parse(fileName).name,
                  link: `/${parse(fileName).name}`,
                })),
            },
            {
              base: '/solutions/codeforces',
              text: '코드포스',
              collapsed: true,
              items: readdirSync(
                new URL('../../ko/solutions/codeforces', import.meta.url),
              ).map(fileName => ({
                text: parse(fileName).name,
                link: `/${parse(fileName).name}`,
              })),
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
                  link: '/exporting-test-cases-and-solution-function',
                },
                {
                  text: '하나의 파일에 모든 로직 작성하기',
                  link: '/writing-all-logic-in-a-single-file',
                },
                {
                  text: '하나의 폴더에 모듈을 분리하여 로직 작성하기',
                  link: '/writing-modular-logic-in-a-single-folder',
                },
                {
                  text: '외부 라이브러리 불러오기',
                  link: '/importing-external-libraries',
                },
                {
                  text: '최종 빌드 파일에서 특정 코드 제외하기',
                  link: '/excluding-specific-code-from-the-final-build-file',
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
                  link: '/if-no-input-value',
                },
                {
                  text: '출력값 조립하기',
                  link: '/stringifying-output-value',
                },
              ],
            },
            {
              text: '문제 풀이 파일 실행하기',
              link: '/running-a-solution-file',
            },
            {
              text: '문제 풀이 파일 빌드하기',
              link: '/building-a-solution-file',
            },
            {
              text: '문제 풀이 파일 제출하기',
              link: '/submitting-a-solution-file',
            },
            {
              text: '이외의 유용한 CLI 명령어들',
              link: '/other-useful-cli-commands',
            },
            {
              text: '<code>bananass.config</code> 파일 작성하기',
              link: '/writing-bananass-config-file',
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
        {
          base: '/community',
          text: '커뮤니티',
          collapsed: true,
          items: [
            {
              text: '기여자 행동 강령 규약',
              link: '/code-of-conduct',
            },
            {
              text: '기여하기',
              link: '/contributing',
            },
            {
              text: '변경 사항',
              link: '/change-log',
            },
            {
              text: '버전 정책',
              link: '/versioning',
            },
            {
              text: '보안',
              link: '/security',
            },
            {
              text: '라이선스',
              link: '/license',
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: 'npm',
        link: `${URL_NPM}/~lumir`,
        ariaLabel: 'lumir의 npm 프로필 링크',
      },
      {
        icon: 'github',
        link: URL_GITHUB_REPO,
        ariaLabel: '바나나 프레임워크 깃허브 레포지토리 링크',
      },
    ],
  },
});
