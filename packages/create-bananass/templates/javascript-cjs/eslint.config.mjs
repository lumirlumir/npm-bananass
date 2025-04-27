import { defineConfig, globalIgnores } from 'eslint/config';
import bananass from 'eslint-config-bananass';

/** @type {import("eslint").Linter.Config[]} */
export default defineConfig([
  // Bananass build directory.
  // Rename it if you change the `outDir` field in `bananass.config.cjs`.
  globalIgnores(['**/.bananass/']),

  bananass.configs.js,

  // Add your custom ESLint configuration here.
  //
  // For example:
  //
  // {
  //   rules: {
  //     'no-console': 'off',
  //   },
  // }
  // ...
]);

// Please take a look at https://eslint-config-bananass.lumir.page
// which contains all the available configurations.
