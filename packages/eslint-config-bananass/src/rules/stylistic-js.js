/**
 * @fileoverview This file follows:
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - @see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules
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
   * @see https://eslint.style/rules/spaced-comment (@stylistic)
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
