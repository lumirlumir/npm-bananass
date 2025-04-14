/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the 'Style Guide' section on `eslint-plugin-import`.
 *   - See, {@link https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#style-guide}.
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
   * Enforce or ban the use of inline type-only markers for named imports.
   *
   * @description This rule is not included in `airbnb-base`. It's for TypeScript only.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md}
   */
  'import/consistent-type-specifier-style': 'off',

  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L245-L248}
   */
  'import/dynamic-import-chunkname': 'off',

  /**
   * Ensure all exports appear after other statements.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L215}
   */
  'import/exports-last': 'off',

  /**
   * Ensure consistent use of file extension within the import path.
   *
   * @description I've disabled this rule because ESM requires explicit file extensions, but web development with ESM doesn't. This creates conflicts.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L140-L144}
   */
  'import/extensions': 'off',

  /**
   * Ensure all imports appear before other statements.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L122}
   */
  'import/first': 'error',

  /**
   * Prefer named exports to be grouped together in a single export declaration
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L221}
   */
  'import/group-exports': 'off',

  /**
   * Enforce the maximum number of dependencies a module can have.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L165}
   */
  'import/max-dependencies': 'off',

  /**
   * Enforce a newline after import statements.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L153}
   */
  'import/newline-after-import': 'error',

  /**
   * Forbid anonymous values as default exports.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L203-L210}
   */
  'import/no-anonymous-default-export': 'off',

  /**
   * Forbid default exports.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L225}
   */
  'import/no-default-export': 'off',

  /**
   * Forbid repeated import of the same module in multiple places.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L131}
   */
  'import/no-duplicates': 'error',

  /**
   * Forbid named default exports.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L199}
   */
  'import/no-named-default': 'error',

  /**
   * Forbid named exports.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L229}
   */
  'import/no-named-export': 'off',

  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L136}
   */
  'import/no-namespace': 'off',

  /**
   * Forbid unassigned imports
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L195}
   */
  'import/no-unassigned-import': 'off',

  /**
   * Enforce a convention in module import order.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L149}
   */
  'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

  /**
   * Prefer a default export if module exports a single name or multiple names.
   *
   * @description I've set this rule to `'warn'` because I don't want to enforce default exports.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L157}
   */
  'import/prefer-default-export': 'warn',
};
