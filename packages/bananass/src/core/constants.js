/**
 * @fileoverview This file declares constants used throughout the `bananass` package.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { createRequire } from 'node:module';
import { join } from 'node:path';

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const { description, homepage, name, version } = createRequire(import.meta.url)(
  '../../package.json',
);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/* Number */
export const BAEKJOON_PROBLEM_NUMBER_MIN = 1_000;

/* String */
/** @type string */
export const PKG_DESCRIPTION = description;
/** @type string */
export const PKG_HOMEPAGE = homepage;
/** @type string */
export const PKG_NAME = name;
/** @type string */
export const PKG_VERSION = version;

export const DEFAULT_OUT_DIR_NAME = `.${name}`;

/* Array */
// Array constants with `NAME` in their name must not include the extension.
// Array constants with `BASE` in their name must include the extension.
export const JS_EXT_ARRAY = Object.freeze(['.js', '.cjs', '.mjs']);
export const PACKAGE_JSON_FILE_BASE_ARRAY = Object.freeze(['package.json']);
export const ENTRY_DIR_NAME_ARRAY = Object.freeze([name, join('src', name)]);
