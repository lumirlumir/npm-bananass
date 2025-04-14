/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the 'Module Systems' section on `eslint-plugin-import`.
 *   - See, {@link https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#module-systems}.
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - See, {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js}.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  /**
   * Forbid AMD `require` and `define` calls.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L111}
   */
  'import/no-amd': 'error',

  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L107}
   */
  'import/no-commonjs': 'off',

  /**
   * Forbid import statements with CommonJS `module.exports`.
   *
   * @description I've deleted unnecessary options from `airbnb-base`.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L265-L267}
   */
  'import/no-import-module-exports': [
    'error',
    {
      exceptions: ['**/*.{ts,cts}'],
    },
  ],

  /**
   * Forbid Node.js builtin modules.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L116}
   */
  'import/no-nodejs-modules': 'off',

  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L186}
   */
  'import/unambiguous': 'off',
};
