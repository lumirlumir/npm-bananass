/**
 * @fileoverview This file declares constants used throughout the `bananass` package.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { createRequire } from 'node:module';
import { format, join } from 'node:path';

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const { name: packageName } = createRequire(import.meta.url)('../../package.json');

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/* Number */
export const BAEKJOON_PROBLEM_NUMBER_MIN = 1_000;

/* String */
export const PACKAGE_NAME = packageName;

/* Array */
// Array constants with `NAME` in their name must not include the extension.
// Array constants with `BASE` in their name must include the extension.
export const JS_EXT_ARRAY = Object.freeze(['.js', '.cjs', '.mjs']);
export const ENTRY_DIR_NAME_ARRAY = Object.freeze([
  packageName,
  join('src', packageName),
]);
export const OUTPUT_DIR_NAME_ARRAY = Object.freeze([`.${packageName}`]);
export const BANANASS_CONFIG_FILE_NAME_ARRAY = Object.freeze([
  `${packageName}.config`,
  `.${packageName}rc`,
]);
export const BANANASS_CONFIG_FILE_BASE_ARRAY = Object.freeze(
  BANANASS_CONFIG_FILE_NAME_ARRAY.flatMap(name =>
    JS_EXT_ARRAY.map(ext => format({ name, ext })),
  ),
);
export const WEBPACK_ENTRY_FILE_TEMPLATE_TYPE_ARRAY = Object.freeze([
  'fs', // File System
  'rl', // Read Line
]);
