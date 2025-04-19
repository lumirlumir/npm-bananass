import { defineConfig, globalIgnores } from 'eslint/config';
import bananass from 'eslint-config-bananass';
import type { Linter } from 'eslint';

export default defineConfig([
  // Bananass build directory.
  // Rename it if you change the `outDir` field in `bananass.config.mts`.
  globalIgnores(['**/.bananass/']),

  bananass.configs.js,
  bananass.configs.ts,

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
] satisfies Linter.Config[]);

// Please take a look at https://eslint-config-bananass.lumir.page
// which contains all the available configurations.
