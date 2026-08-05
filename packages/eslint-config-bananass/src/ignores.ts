/**
 * @fileoverview ESLint ignores.
 */

/* eslint-disable import/prefer-default-export */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const json = [
  'package-lock.json',
  '**/.vscode/*.json',
  '**/jsconfig.json',
  '**/jsconfig.*.json',
  '**/tsconfig.json',
  '**/tsconfig.*.json',
] as const;
