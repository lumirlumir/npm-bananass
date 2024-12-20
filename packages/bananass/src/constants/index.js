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

const { name } = createRequire(import.meta.url)('../../package.json');

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const ENTRY_DIRECTORY_NAME_ARRAY = Object.freeze([name, join('src', name)]);
export const OUTPUT_DIRECTORY_NAME = `.${name}`;
export const BAEKJOON_PROBLEM_NUMBER_MIN = 1_000;
export const BAEKJOON_PROBLEM_NUMBER_MAX = 100_000; // This value can be updated later.
