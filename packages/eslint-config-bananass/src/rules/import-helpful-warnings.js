/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the 'Helpful Warnings' section on `eslint-plugin-import`.
 *   - See, {@link https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#helpful-warnings}.
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - See, {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js}.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L54}
   */
  'import/export': 'error',

  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L66}
   */
  'import/no-deprecated': 'off',

  /**
   * Forbid empty named import blocks.
   *
   * @description This rule is not included in `airbnb-base`.
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md}
   */
  'import/no-empty-named-blocks': 'error',

  /**
   * Forbid the use of extraneous packages.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L71-L97}
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
        '**/webpack.config.js', // webpack config
        '**/webpack.config.*.js', // webpack config
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
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L101}
   */
  'import/no-mutable-exports': 'error',

  /**
   * Forbid use of exported name as identifier of default export.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L58}
   */
  'import/no-named-as-default': 'error',

  /**
   * Forbid use of exported name as property of default export.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L62}
   */
  'import/no-named-as-default-member': 'error',

  /**
   * Forbid modules without exports, or exports without matching import in another module.
   *
   * @link import: {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/imports.js#L257-L261}
   */
  'import/no-unused-modules': 'off',
};
