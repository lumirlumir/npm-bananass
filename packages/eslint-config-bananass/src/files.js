/**
 * @fileoverview ESLint files.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const js = /** @type {const} */ (['**/*.js', '**/*.cjs', '**/*.mjs']);

export const jsx = /** @type {const} */ (['**/*.jsx']);

export const ts = /** @type {const} */ (['**/*.ts', '**/*.cts', '**/*.mts']);

export const tsx = /** @type {const} */ (['**/*.tsx']);

export const json = /** @type {const} */ (['**/*.json']);

export const jsonc = /** @type {const} */ ([
  '**/*.jsonc',
  '**/.vscode/*.json',
  '**/jsconfig.json',
  '**/tsconfig.json',
]);

export const json5 = /** @type {const} */ (['**/*.json5']);
