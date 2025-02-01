/**
 * @fileoverview Generate Google Analytics script.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Generate Google Analytics script.
 *
 * @param {string} googleAnalyticsID Google Analytics ID.
 * @returns Array of Google Analytics script elements.
 *
 * @example
 * import { generateGoogleAnalyticsScript } from 'bananass-utils-vitepress/head';
 *
 * console.log(generateGoogleAnalyticsScript('G-XXXXXXXXXX'));
 *
 * // [
 * //   ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }],
 * //   [
 * //     'script',
 * //     {},
 * //     `window.dataLayer = window.dataLayer || [];
 * //     function gtag(){dataLayer.push(arguments);}
 * //     gtag('js', new Date());
 * //     gtag('config', 'G-XXXXXXXXXX');`
 * //   ],
 * // ]
 */
export default function generateGoogleAnalyticsScript(googleAnalyticsID) {
  return [
    [
      'script',
      {
        async: '',
        src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsID}`,
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleAnalyticsID}');`,
    ],
  ];
}
