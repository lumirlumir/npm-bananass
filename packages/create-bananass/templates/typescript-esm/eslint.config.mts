import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import parser from '@typescript-eslint/parser';
import globals from 'globals';

export default defineConfig(
  // Bananass build directory.
  // Rename it if you change the `outDir` field in `bananass.config.mts`.
  globalIgnores(['**/.bananass/']),

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: globals.node,
    },

    // Add your custom ESLint configuration here.
    //
    // For example:
    //
    // rules: {
    //   'no-console': 'off',
    // },
    // ...
  },

  {
    files: ['**/*.{ts,mts,cts}'],
    languageOptions: {
      parser,
    },
  },
);

// See https://eslint.org/docs/latest/use/configure/ for more configuration options.
