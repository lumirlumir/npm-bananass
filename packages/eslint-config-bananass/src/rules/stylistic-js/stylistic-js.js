/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the JavaScript section on 'ESLint Stylistic'.
 *   - See, {@link https://eslint.style/packages/js#rules}.
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - See, {@link https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules}.
 *
 * - The rules disabled by `eslint-config-prettier@9.1.0`.
 *   - See, {@link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js}.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  /**
   * Enforce consistency of spacing after the start of a comment `//` or `/*`.
   *
   * @link @stylistic/js: {@link https://eslint.style/rules/js/spaced-comment}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L499-L509}
   */
  '@stylistic/js/spaced-comment': [
    'error',
    'always',
    {
      line: { exceptions: ['-', '+'], markers: ['=', '!', '/'] },
      block: { exceptions: ['-', '+'], markers: ['=', '!', ':', '::'], balanced: true },
    },
  ],

  // Rules that are NOT included in `eslint-config-prettier@9.1.0`.

  '@stylistic/js/line-comment-position': 'off',
  '@stylistic/js/lines-between-class-members': 'off',
  '@stylistic/js/multiline-comment-style': 'off',
  '@stylistic/js/padding-line-between-statements': 'off',

  // Rules that are included but disabled by `eslint-config-prettier@9.1.0`.

  '@stylistic/js/array-bracket-newline': 'off',
  '@stylistic/js/array-bracket-spacing': 'off',
  '@stylistic/js/array-element-newline': 'off',
  '@stylistic/js/arrow-parens': 'off',
  '@stylistic/js/arrow-spacing': 'off',
  '@stylistic/js/block-spacing': 'off',
  '@stylistic/js/brace-style': 'off',
  '@stylistic/js/comma-dangle': 'off',
  '@stylistic/js/comma-spacing': 'off',
  '@stylistic/js/comma-style': 'off',
  '@stylistic/js/computed-property-spacing': 'off',
  '@stylistic/js/dot-location': 'off',
  '@stylistic/js/eol-last': 'off',
  '@stylistic/js/func-call-spacing': 'off',
  '@stylistic/js/function-call-argument-newline': 'off',
  '@stylistic/js/function-call-spacing': 'off',
  '@stylistic/js/function-paren-newline': 'off',
  '@stylistic/js/generator-star-spacing': 'off',
  '@stylistic/js/implicit-arrow-linebreak': 'off',
  '@stylistic/js/indent': 'off',
  '@stylistic/js/jsx-quotes': 'off',
  '@stylistic/js/key-spacing': 'off',
  '@stylistic/js/keyword-spacing': 'off',
  '@stylistic/js/linebreak-style': 'off',
  '@stylistic/js/lines-around-comment': 'off',
  '@stylistic/js/max-len': 'off',
  '@stylistic/js/max-statements-per-line': 'off',
  '@stylistic/js/multiline-ternary': 'off',
  '@stylistic/js/new-parens': 'off',
  '@stylistic/js/newline-per-chained-call': 'off',
  '@stylistic/js/no-confusing-arrow': 'off',
  '@stylistic/js/no-extra-parens': 'off',
  '@stylistic/js/no-extra-semi': 'off',
  '@stylistic/js/no-floating-decimal': 'off',
  '@stylistic/js/no-mixed-operators': 'off',
  '@stylistic/js/no-mixed-spaces-and-tabs': 'off',
  '@stylistic/js/no-multi-spaces': 'off',
  '@stylistic/js/no-multiple-empty-lines': 'off',
  '@stylistic/js/no-tabs': 'off',
  '@stylistic/js/no-trailing-spaces': 'off',
  '@stylistic/js/no-whitespace-before-property': 'off',
  '@stylistic/js/nonblock-statement-body-position': 'off',
  '@stylistic/js/object-curly-newline': 'off',
  '@stylistic/js/object-curly-spacing': 'off',
  '@stylistic/js/object-property-newline': 'off',
  '@stylistic/js/one-var-declaration-per-line': 'off',
  '@stylistic/js/operator-linebreak': 'off',
  '@stylistic/js/padded-blocks': 'off',
  '@stylistic/js/quote-props': 'off',
  '@stylistic/js/quotes': 'off',
  '@stylistic/js/rest-spread-spacing': 'off',
  '@stylistic/js/semi': 'off',
  '@stylistic/js/semi-spacing': 'off',
  '@stylistic/js/semi-style': 'off',
  '@stylistic/js/space-before-blocks': 'off',
  '@stylistic/js/space-before-function-paren': 'off',
  '@stylistic/js/space-in-parens': 'off',
  '@stylistic/js/space-infix-ops': 'off',
  '@stylistic/js/space-unary-ops': 'off',
  '@stylistic/js/switch-colon-spacing': 'off',
  '@stylistic/js/template-curly-spacing': 'off',
  '@stylistic/js/template-tag-spacing': 'off',
  '@stylistic/js/wrap-iife': 'off',
  '@stylistic/js/wrap-regex': 'off',
  '@stylistic/js/yield-star-spacing': 'off',
};
