/**
 * @fileoverview Generates the configuration object for Korean language support in VitePress.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Generates the configuration object for Korean language support in VitePress.
 *
 * @param {object} options Configuration options.
 * @param {string} [options.searchOptionsLocalesKey='root'] The locale key for search options. (default: `'root'`)
 * @param {string} [options.themeConfigEditLinkPattern=''] The pattern for edit links. (default: `''`)
 * @returns The configuration object for Korean language support.
 *
 * @example
 * import { ko } from 'bananass-utils-vitepress/i18n';
 *
 * console.log(ko({
 *   searchOptionsLocalesKey: 'root',
 *   themeConfigEditLinkPattern: 'https://github.com/org/repo/edit/main/docs/:path'
 * }));
 *
 * // {
 * //   label: '한국어',
 * //   lang: 'ko-KR',
 * //
 * //   themeConfig: {
 * //     darkModeSwitchLabel: '다크 모드',
 * //     darkModeSwitchTitle: '다크 모드로 변경',
 * //     langMenuLabel: '언어 변경',
 * //     lightModeSwitchTitle: '라이트 모드로 변경',
 * //     returnToTopLabel: '맨 위로 돌아가기',
 * //     sidebarMenuLabel: '사이드바 메뉴',
 * //     skipToContentLabel: '본문으로 건너뛰기',
 * //
 * //     docFooter: {
 * //       prev: '이전 페이지',
 * //       next: '다음 페이지',
 * //     },
 * //
 * //     editLink: {
 * //       pattern: 'https://github.com/org/repo/edit/main/docs/:path',
 * //       text: '깃허브에서 페이지 편집 제안하기',
 * //     },
 * //
 * //     footer: {
 * //       message: 'MIT 라이선스에 따라 배포합니다.',
 * //       copyright: `저작권 © 2024-${new Date().getFullYear()} <a href="https://github.com/lumirlumir">루밀LuMir(lumirlumir)</a>`,
 * //     },
 * //
 * //     lastUpdated: {
 * //       text: '최종 수정 날짜',
 * //     },
 * //
 * //     outline: {
 * //       level: 'deep',
 * //       label: '현재 페이지 목차',
 * //     },
 * //
 * //     search: {
 * //       options: {
 * //         locales: {
 * //           root: {
 * //             translations: {
 * //               button: {
 * //                 buttonText: '검색',
 * //                 buttonAriaLabel: '검색',
 * //               },
 * //               modal: {
 * //                 displayDetails: '자세히 보기',
 * //                 resetButtonTitle: '검색 초기화',
 * //                 backButtonTitle: '뒤로 가기',
 * //                 noResultsText: '검색 결과가 없습니다.',
 * //                 footer: {
 * //                   selectText: '선택',
 * //                   selectKeyAriaLabel: '선택',
 * //                   navigateText: '이동',
 * //                   navigateUpKeyAriaLabel: '위쪽 화살표',
 * //                   navigateDownKeyAriaLabel: '아래쪽 화살표',
 * //                   closeText: '닫기',
 * //                   closeKeyAriaLabel: '닫기',
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // }
 */
export default function ko({
  searchOptionsLocalesKey = 'root',
  themeConfigEditLinkPattern = '',
} = {}) {
  return {
    label: '한국어',
    lang: 'ko-KR',

    themeConfig: {
      darkModeSwitchLabel: '다크 모드',
      darkModeSwitchTitle: '다크 모드로 변경',
      langMenuLabel: '언어 변경',
      lightModeSwitchTitle: '라이트 모드로 변경',
      returnToTopLabel: '맨 위로 돌아가기',
      sidebarMenuLabel: '사이드바 메뉴',
      skipToContentLabel: '본문으로 건너뛰기',

      docFooter: {
        prev: '이전 페이지',
        next: '다음 페이지',
      },

      editLink: {
        pattern: themeConfigEditLinkPattern,
        text: '깃허브에서 페이지 편집 제안하기',
      },

      footer: {
        message: 'MIT 라이선스에 따라 배포합니다.',
        copyright: `저작권 © 2024-${new Date().getFullYear()} <a href="https://github.com/lumirlumir">루밀LuMir(lumirlumir)</a>`,
      },

      lastUpdated: {
        text: '최종 수정 날짜',
      },

      outline: {
        level: 'deep',
        label: '현재 페이지 목차',
      },

      search: {
        options: {
          locales: {
            [searchOptionsLocalesKey]: {
              translations: {
                button: {
                  buttonText: '검색',
                  buttonAriaLabel: '검색',
                },
                modal: {
                  displayDetails: '자세히 보기',
                  resetButtonTitle: '검색 초기화',
                  backButtonTitle: '뒤로 가기',
                  noResultsText: '검색 결과가 없습니다.',
                  footer: {
                    selectText: '선택',
                    selectKeyAriaLabel: '선택',
                    navigateText: '이동',
                    navigateUpKeyAriaLabel: '위쪽 화살표',
                    navigateDownKeyAriaLabel: '아래쪽 화살표',
                    closeText: '닫기',
                    closeKeyAriaLabel: '닫기',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
}
