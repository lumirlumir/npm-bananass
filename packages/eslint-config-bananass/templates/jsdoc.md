# JSDoc Template

Every file under `eslint-config-bananass/src/rules` directory should follow the format below.

```js
/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the 'XXX' section on XXX.
 *   - See, {@link link-to-the-website}.
 *
 * - The best practices outlined in `XXX`.
 *   - See, {@link link-to-the-website}.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  /**
   * Descriptions from the official documentation.
   * @description Additional descriptions provided by the maintainers if needed.
   * @see link-to-the-eslint-website (eslint)
   * @see link-to-the-airbnb-base-website (eslint-config-airbnb-base)
   */
  'rule-name': 'value',
};
```
