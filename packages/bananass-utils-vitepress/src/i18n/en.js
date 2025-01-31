/**
 * @fileoverview Generates the configuration object for English language support in VitePress.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Generates the configuration object for English language support in VitePress.
 *
 * @returns {object} The configuration object for English language support.
 *
 * @example
 * import englishConfig from 'bananass-utils-vitepress/i18n/en';
 *
 * console.log(englishConfig());
 *
 * // {
 * //   label: 'English',
 * //   lang: 'en-US',
 * // }
 */
export default function englishConfig() {
  return {
    label: 'English',
    lang: 'en-US',
  };
}
