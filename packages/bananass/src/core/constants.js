/**
 * @fileoverview This file declares constants used throughout the `bananass` package.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { createRequire } from 'node:module';

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const { description, homepage, name, version } = createRequire(import.meta.url)(
  '../../package.json',
);

// --------------------------------------------------------------------------------
// Export `number`
// --------------------------------------------------------------------------------

export const BAEKJOON_PROBLEM_NUMBER_MIN = 1_000;

// --------------------------------------------------------------------------------
// Export `string`
// --------------------------------------------------------------------------------

/** @type {string} */
export const PKG_DESCRIPTION = description;
/** @type {string} */
export const PKG_HOMEPAGE = homepage;
/** @type {string} */
export const PKG_NAME = name;
/** @type {string} */
export const PKG_VERSION = version;
/** @type {string} */
export const PKG_GITHUB_REPOSITORY = 'https://github.com/lumirlumir/npm-bananass';

/** @type {string} */
export const DEFAULT_ENTRY_DIR_NAME = name;
/** @type {string} */
export const DEFAULT_OUT_DIR_NAME = `.${name}`;

/** @type {string} */
export const WEBPACK_BANNER = `
/**
 * This file was generated using the Baekjoon Framework for JavaScript 'Bananass🍌'
 *
 * Bananass Homepage: ${PKG_HOMEPAGE}
 * Bananass GitHub Repository: ${PKG_GITHUB_REPOSITORY}
 *
 * Released under the MIT License
 * Copyright © 2024-${new Date().getFullYear()} 루밀LuMir(lumirlumir)
 *
 * DO NOT DELETE THIS COMMENT
 */
`.trim();

// --------------------------------------------------------------------------------
// Export `string[]`
// --------------------------------------------------------------------------------

export const SUPPORTED_SOLUTION_FILE_EXTENSIONS = [
  '.js',
  '.mjs',
  '.cjs',
  '.ts',
  '.mts',
  '.cts',
];

export const SUPPORTED_CONFIG_FILE_EXTENSIONS = [
  ...SUPPORTED_SOLUTION_FILE_EXTENSIONS,
  '.json',
  '.jsonc',
  '.json5',
  '.yaml',
  '.yml',
  '.toml',
];
