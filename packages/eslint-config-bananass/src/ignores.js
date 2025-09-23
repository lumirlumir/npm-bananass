/**
 * @fileoverview ESLint ignores.
 */

/* eslint-disable import/prefer-default-export */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const json = /** @type {const} */ ([
  'package-lock.json',
  '**/.vscode/*.json',
  '**/jsconfig.json',
  '**/tsconfig.json',
]);
