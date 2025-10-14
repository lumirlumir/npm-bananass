# JSDoc Template

Every file under `eslint-config-bananass/src/rules` directory should follow the format below.

```js
/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed on XXX.
 *   - @see link-to-the-website
 *
 * - The best practices outlined in `XXX`.
 *   - @see link-to-the-website
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  /**
   * Descriptions from the official documentation.
   * @description Additional descriptions provided by the maintainers if needed.
   * @see link-to-the-website (other references, e.g., airbnb, prettier, etc.)
   * @see link-to-the-website (other references, e.g., airbnb, prettier, etc.)
   */
  'rule-name': 'value',
};
```
