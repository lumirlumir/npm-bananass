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

const { description, homepage, name, version } = createRequire(import.meta.url)(
  '../../package.json',
);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

// #region Number

export const BAEKJOON_PROBLEM_NUMBER_MIN = 1_000;

// #endregion Number

// --------------------------------------------------------------------------------

// #region String

/** @type {string} */
export const PKG_DESCRIPTION = description;
/** @type {string} */
export const PKG_NAME = name;
/** @type {string} */
export const PKG_VERSION = version;
/** @type {string} */
export const PKG_AUTHOR = '루밀LuMir';

/** @type {string} */
export const URL_HOMEPAGE = homepage;
/** @type {string} */
export const URL_NPM = 'https://www.npmjs.com';
/** @type {string} */
export const URL_GITHUB_REPO = 'https://github.com/lumirlumir/npm-bananass';
/** @type {string} */
export const URL_GITHUB_ISSUES = `${URL_GITHUB_REPO}/issues`;
/** @type {string} */
export const URL_GITHUB_DISCUSSIONS = `${URL_GITHUB_REPO}/discussions`;
/** @type {string} */
export const URL_BOJ_MAIN = 'https://www.acmicpc.net';
/** @param {Problem} problem */
export const URL_BOJ_PROBLEM = problem => `${URL_BOJ_MAIN}/problem/${problem}`;

/** @type {string} */
export const DEFAULT_ENTRY_DIR_NAME = name;
/** @type {string} */
export const DEFAULT_OUT_DIR_NAME = `.${name}`;
/** @type {string} */
export const DEFAULT_OUT_FILE_EXTENSION = '.cjs';

/** @satisfies {string} */
export const NODE_VERSION_BAEKJOON = '16.13.1';
/** @satisfies {string} */
export const NODE_VERSION_CODEFORCES = '15.8.0';

/** @type {string} */
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

// #region Array

export const BANANASS_PKG_NAMES = [
  'bananass',
  'bananass-utils-console',
  'create-bananass',
  'eslint-config-bananass',
  'prettier-config-bananass',
];

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
  '.config',
];

// #endregion Array
