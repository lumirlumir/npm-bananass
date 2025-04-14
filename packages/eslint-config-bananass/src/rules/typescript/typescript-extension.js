/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the `typescript-eslint`.
 *   - See, {@link https://typescript-eslint.io/rules/?=xdeprecated-extension-xtypeInformation}.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  /**
   * @link https://typescript-eslint.io/rules/class-methods-use-this
   */
  'class-methods-use-this': 'off',
  '@typescript-eslint/class-methods-use-this': 'error',

  /**
   * @link https://typescript-eslint.io/rules/default-param-last
   */
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 'error',

  /**
   * @link https://typescript-eslint.io/rules/init-declarations
   */
  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': 'off',

  /**
   * @link https://typescript-eslint.io/rules/max-params
   */
  'max-params': 'off',
  '@typescript-eslint/max-params': 'off',

  /**
   * @link https://typescript-eslint.io/rules/no-array-constructor
   */
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-dupe-class-members
   */
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-empty-function
   */
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': [
    'error',
    { allow: ['arrowFunctions', 'functions', 'methods', 'overrideMethods'] },
  ],

  /**
   * @link https://typescript-eslint.io/rules/no-invalid-this
   */
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'off',

  /**
   * @link https://typescript-eslint.io/rules/no-loop-func
   */
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-magic-numbers
   */
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': 'off',

  /**
   * @link https://typescript-eslint.io/rules/no-redeclare
   */
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-restricted-imports
   */
  'no-restricted-imports': 'off',
  '@typescript-eslint/no-restricted-imports': 'off',

  /**
   * @link https://typescript-eslint.io/rules/no-shadow
   */
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'warn',

  /**
   * @link https://typescript-eslint.io/rules/no-unused-expressions
   */
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': ['error', { enforceForJSX: true }],

  /**
   * @link https://typescript-eslint.io/rules/no-unused-vars
   */
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  ],

  /**
   * @link https://typescript-eslint.io/rules/no-use-before-define
   */
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: false, classes: true, variables: true, allowNamedExports: false },
  ],

  /**
   * @link https://typescript-eslint.io/rules/no-useless-constructor
   */
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
};
