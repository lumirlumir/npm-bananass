/**
 * @fileoverview Default config object.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { DEFAULT_ENTRY_DIR_NAME, DEFAULT_OUT_DIR_NAME } from '../../constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').ConfigObjectAddOptions} ConfigObjectAddOptions
 * @typedef {import('../../types.js').ConfigObjectBuildOptions} ConfigObjectBuildOptions
 * @typedef {import('../../types.js').ConfigObjectCleanOptions} ConfigObjectCleanOptions
 * @typedef {import('../../types.js').ConfigObjectInfoOptions} ConfigObjectInfoOptions
 * @typedef {import('../../types.js').ConfigObjectInitOptions} ConfigObjectInitOptions
 * @typedef {import('../../types.js').ConfigObjectLintOptions} ConfigObjectLintOptions
 * @typedef {import('../../types.js').ConfigObjectLoginOptions} ConfigObjectLoginOptions
 * @typedef {import('../../types.js').ConfigObjectOpenOptions} ConfigObjectOpenOptions
 * @typedef {import('../../types.js').ConfigObjectRandomOptions} ConfigObjectRandomOptions
 * @typedef {import('../../types.js').ConfigObjectRunOptions} ConfigObjectRunOptions
 * @typedef {import('../../types.js').ConfigObjectSubmitOptions} ConfigObjectSubmitOptions
 * @typedef {import('../../types.js').ConfigObjectTestcaseOptions} ConfigObjectTestcaseOptions
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {ConfigObjectAddOptions} */
export const add = {};

/** @type {ConfigObjectBuildOptions} */
export const build = {
  clean: false,
  debug: false,
  entryDir: DEFAULT_ENTRY_DIR_NAME,
  outDir: DEFAULT_OUT_DIR_NAME,
  quiet: false,
  templateType: 'fs',
};

/** @type {ConfigObjectCleanOptions} */
export const clean = {};

/** @type {ConfigObjectInfoOptions} */
export const info = {};

/** @type {ConfigObjectInitOptions} */
export const init = {};

/** @type {ConfigObjectLintOptions} */
export const lint = {};

/** @type {ConfigObjectLoginOptions} */
export const login = {};

/** @type {ConfigObjectOpenOptions} */
export const open = {};

/** @type {ConfigObjectRandomOptions} */
export const random = {};

/** @type {ConfigObjectRunOptions} */
export const run = {};

/** @type {ConfigObjectSubmitOptions} */
export const submit = {};

/** @type {ConfigObjectTestcaseOptions} */
export const testcase = {};
