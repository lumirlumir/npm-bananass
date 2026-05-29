import { defineConfig, globalIgnores } from 'eslint/config';
import js from 'eslint-config-bananass/js';
import ts from 'eslint-config-bananass/ts';

export default defineConfig([
  // Bananass build directory.
  // Rename it if you change the `outDir` field in `bananass.config.mts`.
  globalIgnores(['**/.bananass/']),

  js,
  ts,

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
