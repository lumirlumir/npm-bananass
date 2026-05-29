/**
 * @fileoverview ESLint ignores.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const json = /** @type {const} */ ([
  'package-lock.json',
  '**/.vscode/*.json',
  '**/jsconfig.json',
  '**/jsconfig.*.json',
  '**/tsconfig.json',
  '**/tsconfig.*.json',
]);
