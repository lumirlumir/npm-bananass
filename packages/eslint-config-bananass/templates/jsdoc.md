# JSDoc Template

Every file under `eslint-config-bananass/src/rules` directory should follow the format below.

```js
/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed on eslint.org.
 *   - @see https://eslint.org/docs/latest/rules
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
 * @import { Linter } from "eslint"
 * @import { ESLintRules } from "eslint/rules"
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {Linter.RulesRecord} */
export default /** @satisfies {Partial<ESLintRules>} */ ({
  /**
   * Descriptions from the official documentation.
   * @description Additional descriptions provided by the maintainers if needed.
   * @see link-to-the-eslint-website (eslint)
   * @see link-to-the-airbnb-base-website (airbnb-base)
   */
  'rule-name': 'value',
});
```
