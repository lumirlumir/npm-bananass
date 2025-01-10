/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed `eslint-plugin-n`.
 *   - See, {@link https://github.com/eslint-community/eslint-plugin-n?tab=readme-ov-file#-rules}.
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - See, {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules}.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  /**
   * Require `return` statements after callbacks.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/node.js#L8}
   */
  'n/callback-return': 'off',

  /**
   * Enforce either `module.exports` or `exports`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/exports-style': '',

  /**
   * Enforce the style of file extensions in import declarations.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/file-extension-in-import': '',

  /**
   * Require `require()` calls to be placed at top-level module scope.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/node.js#L12}
   */
  'n/global-require': 'error',

  /**
   * Require error handling in callbacks.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/node.js#L15}
   */
  'n/handle-callback-err': 'off',

  /**
   * Require correct usage of hashbang.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/hashbang': '',

  /**
   * Enforce Node.js-style error-first callback pattern is followed.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-callback-literal': '',

  /**
   * Disallow deprecated APIs.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-deprecated-api': '',

  /**
   * Disallow the assignment to `exports`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-exports-assign': '',

  /**
   * Disallow `import` declarations which import extraneous modules.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-extraneous-import': '',

  /**
   * Disallow `require()` expressions which import extraneous modules.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-extraneous-require': '',

  /**
   * Disallow `import` declarations which import non-existence modules.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-missing-import': '',

  /**
   * Disallow require() expressions which import non-existence modules.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-missing-require': '',

  /**
   * Disallow `require` calls to be mixed with regular variable declarations.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/node.js#L22}
   */
  'n/no-mixed-requires': 'off',

  /**
   * Disallow `new` operators with calls to `require`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/node.js#L25}
   */
  'n/no-new-require': 'error',

  /**
   * Disallow string concatenation with `__dirname` and `__filename`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/node.js#L29}
   */
  'n/no-path-concat': 'error',

  /**
   * Disallow the use of `process.env`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/node.js#L32}
   */
  'n/no-process-env': 'off',

  /**
   * Disallow the use of `process.exit()`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/node.js#L35}
   */
  'n/no-process-exit': 'off',

  /**
   * Disallow specified modules when loaded by `import` declarations.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-restricted-import': '',

  /**
   * Disallow specified modules when loaded by `require`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-restricted-require': '',

  /**
   * Disallow synchronous methods.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/node.js#L41}
   */
  'n/no-sync': 'off',

  /**
   * Disallow `bin` files that npm ignores.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-unpublished-bin': '',

  /**
   * Disallow `import` declarations which import private modules.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-unpublished-import': '',

  /**
   * Disallow `require()` expressions which import private modules.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-unpublished-require': '',

  /**
   * Disallow unsupported ECMAScript built-ins on the specified version.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-unsupported-features/es-builtins': '',

  /**
   * Disallow unsupported ECMAScript syntax on the specified version.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-unsupported-features/es-syntax': '',

  /**
   * Disallow unsupported Node.js built-in APIs on the specified version.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/no-unsupported-features/node-builtins': '',

  /**
   * Enforce either `Buffer` or `require("buffer").Buffer`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/prefer-global/buffer': '',

  /**
   * Enforce either `console` or `require("console")`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/prefer-global/console': '',

  /**
   * Enforce either `process` or `require("process")`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/prefer-global/process': '',

  /**
   * Enforce either `TextDecoder` or `require("util").TextDecoder`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/prefer-global/text-decoder': '',

  /**
   * Enforce either `TextEncoder` or `require("util").TextEncoder`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/prefer-global/text-encoder': '',

  /**
   * Enforce either `URL` or `require("url").URL`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/prefer-global/url': '',

  /**
   * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/prefer-global/url-search-params': '',

  /**
   * Enforce using the `node:` protocol when importing Node.js builtin modules.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'prefer-node-protocol': '',

  /**
   * Enforce `require("dns").promises`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/prefer-promises/dns': '',

  /**
   * Enforce `require("fs").promises`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/prefer-promises/fs': '',

  /**
   * Require that `process.exit()` expressions use the same code path as `throw`.
   *
   * @link n: {@link }
   * @link airbnb-base: {@link }
   */
  // 'n/process-exit-as-throw': '',
};
