import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

export default defineConfig(
  // Bananass build directory.
  // Rename it if you change the `outDir` field in `bananass.config.cjs`.
  globalIgnores(['**/.bananass/']),

  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: globals.node,
    },

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
  },
);

// See https://eslint.org/docs/latest/use/configure/ for more configuration options.
