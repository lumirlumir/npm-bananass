/**
 * @fileoverview This file declares constants used throughout the `bananass` package.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { createRequire } from 'node:module';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Problem } from "./types.js"
 */

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

/** @type {{ description: string, homepage: string, name: 'bananass', version: string }} */
const { description, homepage, name, version } = createRequire(import.meta.url)(
  '../../package.json',
);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Number

/** @satisfies {number} */
export const BAEKJOON_PROBLEM_NUMBER_MIN = 1_000;

// #endregion Number
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region String

/** @satisfies {string} */
export const PKG_DESCRIPTION = description;
/** @satisfies {string} */
export const PKG_NAME = name;
/** @satisfies {string} */
export const PKG_VERSION = version;
/** @satisfies {string} */
export const PKG_AUTHOR = '루밀LuMir';

/** @satisfies {string} */
export const URL_HOMEPAGE = homepage;
/** @satisfies {string} */
export const URL_NPM = 'https://www.npmjs.com';
/** @satisfies {string} */
export const URL_GITHUB_REPO = 'https://github.com/lumirlumir/npm-bananass';
/** @satisfies {string} */
export const URL_GITHUB_ISSUES = `${URL_GITHUB_REPO}/issues`;
/** @satisfies {string} */
export const URL_GITHUB_DISCUSSIONS = `${URL_GITHUB_REPO}/discussions`;
/** @satisfies {string} */
export const URL_BOJ_MAIN = 'https://www.acmicpc.net';
/** @param {Problem} problem */
export const URL_BOJ_PROBLEM = problem => `${URL_BOJ_MAIN}/problem/${problem}`;

/** @satisfies {string} */
export const DEFAULT_ENTRY_DIR_NAME = name;
/** @satisfies {`.${name}`} */
export const DEFAULT_OUT_DIR_NAME = `.${name}`;
/** @satisfies {string} */
export const DEFAULT_OUT_FILE_EXTENSION = '.cjs';

/** @satisfies {string} */
export const NODE_VERSION_BAEKJOON = '16.13.1';
/** @satisfies {string} */
export const NODE_VERSION_CODEFORCES = '15.8.0';

/** @satisfies {string} */
export const WEBPACK_BANNER = `
/**
 * This file was generated using the Baekjoon Framework for JavaScript 'Bananass🍌'
 *
 * Bananass Homepage: ${URL_HOMEPAGE}
 * Bananass GitHub Repository: ${URL_GITHUB_REPO}
 *
 * Released under the MIT License
 * Copyright © 2024-${new Date().getFullYear()} ${PKG_AUTHOR}(lumirlumir)
 *
 * DO NOT DELETE THIS COMMENT
 */
`.trim();

// #endregion String
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Array

export const BANANASS_PKG_NAMES = /** @type {const} */ ([
  'bananass',
  'bananass-utils-console',
  'create-bananass',
  'eslint-config-bananass',
  'prettier-config-bananass',
]);

export const SUPPORTED_SOLUTION_FILE_EXTENSIONS = /** @type {const} */ ([
  '.js',
  '.mjs',
  '.cjs',
  '.ts',
  '.mts',
  '.cts',
]);

export const SUPPORTED_CONFIG_FILE_NAMES = SUPPORTED_SOLUTION_FILE_EXTENSIONS.map(
  ext => /** @type {const} */ (`${PKG_NAME}.config${ext}`),
);

// #endregion Array
// --------------------------------------------------------------------------------
