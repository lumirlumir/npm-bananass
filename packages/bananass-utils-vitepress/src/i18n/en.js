/**
 * @fileoverview Generates the configuration object for English language support in VitePress.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Generates the configuration object for English language support in VitePress.
 *
 * @param {object} options Configuration options.
 * @param {string} [options.themeConfigEditLinkPattern=''] The pattern for edit links. (default: `''`)
 * @returns {object} The configuration object for English language support.
 *
 * @example
 * import { en } from 'bananass-utils-vitepress/i18n';
 *
 * console.log(en({
 *   themeConfigEditLinkPattern: 'https://github.com/org/repo/edit/main/docs/:path'
 * }));
 *
 * // {
 * //   label: 'English',
 * //   lang: 'en-US',
 * //
 * //   themeConfig: {
 * //     editLink: {
 * //       pattern: 'https://github.com/org/repo/edit/main/docs/:path',
 * //     },
 * //
 * //     footer: {
 * //       message: 'Released under the MIT License.',
 * //       copyright: `Copyright © 2024-${new Date().getFullYear()} <a href="https://github.com/lumirlumir">루밀LuMir(lumirlumir)</a>`,
 * //     },
 * //
 * //     outline: {
 * //       level: 'deep',
 * //     },
 * //   },
 * // }
 */
export default function en({ themeConfigEditLinkPattern = '' }) {
  return {
    label: 'English',
    lang: 'en-US',

    themeConfig: {
      editLink: {
        pattern: themeConfigEditLinkPattern,
      },

      footer: {
        message: 'Released under the MIT License.',
        copyright: `Copyright © 2024-${new Date().getFullYear()} <a href="https://github.com/lumirlumir">루밀LuMir(lumirlumir)</a>`,
      },

      outline: {
        level: 'deep',
      },
    },
  };
}
