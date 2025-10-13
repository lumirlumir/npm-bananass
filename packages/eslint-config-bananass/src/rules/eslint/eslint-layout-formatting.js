/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed on eslint.org.
 *   - @See https://eslint.org/docs/latest/rules
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - @See https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules
 */

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * @import { Linter } from "eslint"
 * @import { ESLintRules } from "eslint/rules"
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {Linter.RulesRecord} */
export default /** @satisfies {Partial<ESLintRules>} */ ({
  // ------------------------------------------------------------------------------
  // #region Layout & Formatting

  /**
   * Require or disallow Unicode byte order mark (BOM).
   * @see https://eslint.org/docs/latest/rules/unicode-bom
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L521
   */
  'unicode-bom': ['error', 'never'],

  // #endregion Layout & Formatting
  // ------------------------------------------------------------------------------
});
