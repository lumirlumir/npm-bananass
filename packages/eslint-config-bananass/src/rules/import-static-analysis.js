/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the 'Static Analysis' section on eslint-plugin-import.
 *   - See, {@link https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#static-analysis}.
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - See, {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js}.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  /**
   * Ensure a default export is present, given a default import.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L45}
   */
  'import/default': 'off',

  /**
   * Enforce either using, or omitting, the `node:` protocol when importing Node.js builtin modules.
   *
   * @description This rule is not included in `airbnb-base`.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/enforce-node-protocol-usage.md}
   */
  'import/enforce-node-protocol-usage': ['warn', 'always'],

  /**
   * Ensure named imports correspond to a named export in the remote file.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L41}
   */
  'import/named': 'error',

  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L48}
   */
  'import/namespace': 'off',

  /**
   * Forbid import of modules using absolute paths.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L169}
   */
  'import/no-absolute-path': 'error',

  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L237}
   */
  'import/no-cycle': ['error', { maxDepth: Infinity }],

  /**
   * Forbid `require()` calls with expressions.
   *
   * @description I've disabled this rule.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L173}
   */
  'import/no-dynamic-require': 'off',

  /**
   * Forbid importing the submodules of other modules.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L177-L179}
   */
  'import/no-internal-modules': 'off',

  /**
   * Forbid importing packages through relative paths.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L271}
   */
  'import/no-relative-packages': 'error',

  /**
   * Forbid importing modules from parent directories.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L252}
   */
  'import/no-relative-parent-imports': 'off',

  /**
   * Enforce which files can be imported in a given folder.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L161}
   */
  'import/no-restricted-paths': 'off',

  /**
   * Forbid a module from importing itself.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L233}
   */
  'import/no-self-import': 'error',

  /**
   * Ensure imports point to a file/module that can be resolved.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L37}
   */
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

  /**
   * Forbid unnecessary path segments in import and require statements.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L241}
   */
  'import/no-useless-path-segments': ['error', { commonjs: true }],

  /**
   * Forbid webpack loader syntax in imports.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L190}
   */
  'import/no-webpack-loader-syntax': 'error',
};
