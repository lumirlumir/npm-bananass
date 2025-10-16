/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed on `eslint-plugin-import`.
 *   - @see https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#rules
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js
 */

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * @import { Linter } from "eslint";
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {Linter.RulesRecord} */
export default {
  // ------------------------------------------------------------------------------
  // #region Helpful Warnings

  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L54 (airbnb-base)
   */
  'import/export': 'error',

  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L66 (airbnb-base)
   */
  'import/no-deprecated': 'off',

  /**
   * Forbid empty named import blocks.
   * @description This rule is not included in `airbnb-base`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md (import)
   */
  'import/no-empty-named-blocks': 'error',

  /**
   * Forbid the use of extraneous packages.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L71-L97 (airbnb-base)
   */
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        'test.{js,mjs,cjs,jsx}', // repos with a single test file
        'test-*.{js,mjs,cjs,jsx}', // repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,mjs,cjs,jsx}', // tests where the extension or filename suffix denotes that it is a test
        '**/jest.config.js', // jest config
        '**/jest.setup.js', // jest setup
        '**/vue.config.js', // vue-cli config
        '**/webpack.config.{js,mjs,cjs}', // webpack config
        '**/webpack.config.*.{js,mjs,cjs}', // webpack config
        '**/rollup.config.js', // rollup config
        '**/rollup.config.*.js', // rollup config
        '**/gulpfile.js', // gulp config
        '**/gulpfile.*.js', // gulp config
        '**/Gruntfile{,.js}', // grunt config
        '**/protractor.conf.js', // protractor config
        '**/protractor.conf.*.js', // protractor config
        '**/karma.conf.js', // karma config
        '**/.eslintrc.js', // eslint config
        '**/eslint.config.{js,mjs,cjs}', // eslint config
        '**/.vitepress/**/*.{js,mjs,cjs}', // vitepress config
      ],
      optionalDependencies: false,
    },
  ],

  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L101 (airbnb-base)
   */
  'import/no-mutable-exports': 'error',

  /**
   * Forbid use of exported name as identifier of default export.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L58 (airbnb-base)
   */
  'import/no-named-as-default': 'error',

  /**
   * Forbid use of exported name as property of default export.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L62 (airbnb-base)
   */
  'import/no-named-as-default-member': 'error',

  /**
   * Forbid modules without exports, or exports without matching import in another module.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L257-L261 (airbnb-base)
   */
  'import/no-unused-modules': 'off',

  // #endregion Helpful Warnings
  // ------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------
  // #region Module Systems

  /**
   * Forbid AMD `require` and `define` calls.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L111 (airbnb-base)
   */
  'import/no-amd': 'error',

  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L107 (airbnb-base)
   */
  'import/no-commonjs': 'off',

  /**
   * Forbid import statements with CommonJS `module.exports`.
   * @description I've removed unnecessary options from `airbnb-base`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L265-L267 (airbnb-base)
   */
  'import/no-import-module-exports': [
    'error',
    {
      exceptions: ['**/*.{ts,cts}'],
    },
  ],

  /**
   * Forbid Node.js builtin modules.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L116 (airbnb-base)
   */
  'import/no-nodejs-modules': 'off',

  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L186 (airbnb-base)
   */
  'import/unambiguous': 'off',

  // #endregion Module Systems
  // ------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------
  // #region Static Analysis

  /**
   * Ensure a default export is present, given a default import.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L45 (airbnb-base)
   */
  'import/default': 'off',

  /**
   * Enforce either using, or omitting, the `node:` protocol when importing Node.js builtin modules.
   * @description This rule is not included in `airbnb-base` and not implemented yet in `v2.31.0`. I've replaced it with `'n/prefer-node-protocol'`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/enforce-node-protocol-usage.md (import)
   */
  'import/enforce-node-protocol-usage': 'off',

  /**
   * Ensure named imports correspond to a named export in the remote file.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L41 (airbnb-base)
   */
  'import/named': 'error',

  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L48 (airbnb-base)
   */
  'import/namespace': 'off',

  /**
   * Forbid import of modules using absolute paths.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L169 (airbnb-base)
   */
  'import/no-absolute-path': 'error',

  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L237 (airbnb-base)
   */
  'import/no-cycle': ['error', { maxDepth: Infinity }],

  /**
   * Forbid `require()` calls with expressions.
   * @description I've disabled this rule.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L173 (airbnb-base)
   */
  'import/no-dynamic-require': 'off',

  /**
   * Forbid importing the submodules of other modules.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L177-L179 (airbnb-base)
   */
  'import/no-internal-modules': 'off',

  /**
   * Forbid importing packages through relative paths.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L271 (airbnb-base)
   */
  'import/no-relative-packages': 'error',

  /**
   * Forbid importing modules from parent directories.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L252 (airbnb-base)
   */
  'import/no-relative-parent-imports': 'off',

  /**
   * Enforce which files can be imported in a given folder.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L161 (airbnb-base)
   */
  'import/no-restricted-paths': 'off',

  /**
   * Forbid a module from importing itself.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L233 (airbnb-base)
   */
  'import/no-self-import': 'error',

  /**
   * Ensure imports point to a file/module that can be resolved.
   * @description This rule doesn't support the `exports` field of `package.json`, which has been the standard since Node.js v12. As it causes false positives, I've disabled it.
   * @see https://github.com/import-js/eslint-plugin-import/issues/1810 (issue)
   * @see https://github.com/import-js/eslint-plugin-import/issues/3088 (issue)
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L37 (airbnb-base)
   */
  'import/no-unresolved': 'off',

  /**
   * Forbid unnecessary path segments in import and require statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L241 (airbnb-base)
   */
  'import/no-useless-path-segments': ['error', { commonjs: true }],

  /**
   * Forbid webpack loader syntax in imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md (import)
   * @see https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L190 (airbnb-base)
   */
  'import/no-webpack-loader-syntax': 'error',

  // #endregion Static Analysis
  // ------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------
  // #region Style Guide

  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   * @description This rule is not included in `airbnb-base`. It's for TypeScript only.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md}
   */
  'import/consistent-type-specifier-style': 'off',

  /**
   * Enforce a leading comment with the `webpackChunkName` for dynamic imports.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L245-L248}
   */
  'import/dynamic-import-chunkname': 'off',

  /**
   * Ensure all exports appear after other statements.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L215}
   */
  'import/exports-last': 'off',

  /**
   * Ensure consistent use of file extension within the import path.
   * @description I've disabled this rule because ESM requires explicit file extensions, but web development with ESM doesn't. This creates conflicts.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L140-L144}
   */
  'import/extensions': 'off',

  /**
   * Ensure all imports appear before other statements.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L122}
   */
  'import/first': 'error',

  /**
   * Prefer named exports to be grouped together in a single export declaration
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L221}
   */
  'import/group-exports': 'off',

  /**
   * Enforce the maximum number of dependencies a module can have.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L165}
   */
  'import/max-dependencies': 'off',

  /**
   * Enforce a newline after import statements.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L153}
   */
  'import/newline-after-import': 'error',

  /**
   * Forbid anonymous values as default exports.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L203-L210}
   */
  'import/no-anonymous-default-export': 'off',

  /**
   * Forbid default exports.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L225}
   */
  'import/no-default-export': 'off',

  /**
   * Forbid repeated import of the same module in multiple places.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L131}
   */
  'import/no-duplicates': 'error',

  /**
   * Forbid named default exports.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L199}
   */
  'import/no-named-default': 'error',

  /**
   * Forbid named exports.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L229}
   */
  'import/no-named-export': 'off',

  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L136}
   */
  'import/no-namespace': 'off',

  /**
   * Forbid unassigned imports
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L195}
   */
  'import/no-unassigned-import': 'off',

  /**
   * Enforce a convention in module import order.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L149}
   */
  'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

  /**
   * Prefer a default export if module exports a single name or multiple names.
   * @description I've set this rule to `'warn'` because I don't want to enforce default exports.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L157}
   */
  'import/prefer-default-export': 'warn',

  // #endregion Style Guide
  // ------------------------------------------------------------------------------
};
