/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the 'Layout & Formatting' section on eslint.org.
 *   - See, {@link https://eslint.org/docs/latest/rules#layout--formatting}.
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - See, {@link https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules}.
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
  /**
   * Require or disallow Unicode byte order mark (BOM).
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/unicode-bom}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L521}
   */
  'unicode-bom': ['error', 'never'],
});
