/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the JavaScript section on 'ESLint Stylistic'.
 *   - @see https://eslint.style/packages/js#rules
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - @see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules
 *
 * - The rules disabled by `eslint-config-prettier@9.1.0`.
 *   - @see https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js
 */

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * @import { Linter } from "eslint";
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {Linter.RulesRecord} */
export default {
  /**
   * Enforce consistency of spacing after the start of a comment `//` or `/*`.
   * @see https://eslint.style/rules/js/spaced-comment (@stylistic/js)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L499-L509 (airbnb-base)
   */
  '@stylistic/js/spaced-comment': [
    'error',
    'always',
    {
      line: { exceptions: ['-', '+'], markers: ['=', '!', '/'] },
      block: { exceptions: ['-', '+'], markers: ['=', '!', ':', '::'], balanced: true },
    },
  ],
};
