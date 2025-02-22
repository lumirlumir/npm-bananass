/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the `typescript-eslint`.
 *   - See, {@link https://typescript-eslint.io/rules/?=xextension-recommended-xtypeInformation}.
 *   - See, {@link https://github.com/typescript-eslint/typescript-eslint/blob/v8.24.1/packages/eslint-plugin/src/configs/recommended.ts}.
 *
 * - This file doesn't include `extesion` rules. See `typescript-extensions.js` for those.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  /**
   * @link https://typescript-eslint.io/rules/ban-ts-comment
   */
  '@typescript-eslint/ban-ts-comment': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-duplicate-enum-values
   */
  '@typescript-eslint/no-duplicate-enum-values': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-empty-object-type
   */
  '@typescript-eslint/no-empty-object-type': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-explicit-any
   */
  '@typescript-eslint/no-explicit-any': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-extra-non-null-assertion
   */
  '@typescript-eslint/no-extra-non-null-assertion': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-misused-new
   */
  '@typescript-eslint/no-misused-new': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-namespace
   */
  '@typescript-eslint/no-namespace': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-require-imports
   */
  '@typescript-eslint/no-require-imports': 'warn',

  /**
   * @link https://typescript-eslint.io/rules/no-this-alias
   */
  '@typescript-eslint/no-this-alias': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-unnecessary-type-constraint
   */
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-unsafe-declaration-merging
   */
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-unsafe-function-type
   */
  '@typescript-eslint/no-unsafe-function-type': 'warn',

  /**
   * @link https://typescript-eslint.io/rules/no-wrapper-object-types
   */
  '@typescript-eslint/no-wrapper-object-types': 'error',

  /**
   * @link https://typescript-eslint.io/rules/prefer-as-const
   */
  '@typescript-eslint/prefer-as-const': 'error',

  /**
   * @link https://typescript-eslint.io/rules/prefer-namespace-keyword
   */
  '@typescript-eslint/prefer-namespace-keyword': 'error',

  /**
   * @link https://typescript-eslint.io/rules/triple-slash-reference
   */
  '@typescript-eslint/triple-slash-reference': 'error',
};
