/**
 * @fileoverview ESLint language options.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import globalsModule from 'globals';
import typescriptParser from '@typescript-eslint/parser';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const globals = {
  ...globalsModule.browser,
  ...globalsModule.builtin,
  ...globalsModule.es2025,
  ...globalsModule.node,
  ...globalsModule.jest,
  ...globalsModule.vitest,
  ...globalsModule.mocha,
};

export const parser = typescriptParser;

export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
};
