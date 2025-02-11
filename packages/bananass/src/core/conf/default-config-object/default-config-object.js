/**
 * @fileoverview Default config object.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { findRootDir } from '../../fs/index.js';
import { DEFAULT_ENTRY_DIR_NAME, DEFAULT_OUT_DIR_NAME } from '../../constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').ConfigObject} ConfigObject
 *
 * @typedef {import('../../types.js').ConfigObjectBrowser} ConfigObjectBrowser
 * @typedef {import('../../types.js').ConfigObjectConsole} ConfigObjectConsole
 *
 * @typedef {import('../../types.js').ConfigObjectAdd} ConfigObjectAdd
 * @typedef {import('../../types.js').ConfigObjectBuild} ConfigObjectBuild
 * @typedef {import('../../types.js').ConfigObjectClean} ConfigObjectClean
 * @typedef {import('../../types.js').ConfigObjectInfo} ConfigObjectInfo
 * @typedef {import('../../types.js').ConfigObjectInit} ConfigObjectInit
 * @typedef {import('../../types.js').ConfigObjectLint} ConfigObjectLint
 * @typedef {import('../../types.js').ConfigObjectLogin} ConfigObjectLogin
 * @typedef {import('../../types.js').ConfigObjectOpen} ConfigObjectOpen
 * @typedef {import('../../types.js').ConfigObjectRandom} ConfigObjectRandom
 * @typedef {import('../../types.js').ConfigObjectRun} ConfigObjectRun
 * @typedef {import('../../types.js').ConfigObjectSubmit} ConfigObjectSubmit
 * @typedef {import('../../types.js').ConfigObjectTestcase} ConfigObjectTestcase
 */

// --------------------------------------------------------------------------------
// Named Export
// --------------------------------------------------------------------------------

/* Global */

/** @type {ConfigObjectBrowser} */
export const browser = {
  browser: 'default',
  private: false,
};

/** @type {ConfigObjectConsole} */
export const console = {
  debug: false,
  quiet: false,
};

/* Exclusive */

/** @type {ConfigObjectAdd} */
export const add = {};

/** @type {ConfigObjectBuild} */
export const build = {
  clean: false,
  templateType: 'fs',
};

/** @type {ConfigObjectClean} */
export const clean = {};

/** @type {ConfigObjectInfo} */
export const info = {};

/** @type {ConfigObjectInit} */
export const init = {};

/** @type {ConfigObjectLint} */
export const lint = {};

/** @type {ConfigObjectLogin} */
export const login = {};

/** @type {ConfigObjectOpen} */
export const open = {};

/** @type {ConfigObjectRandom} */
export const random = {};

/** @type {ConfigObjectRun} */
export const run = {};

/** @type {ConfigObjectSubmit} */
export const submit = {};

/** @type {ConfigObjectTestcase} */
export const testcase = {};

// --------------------------------------------------------------------------------
// Default Export
// --------------------------------------------------------------------------------

/** @type {ConfigObject} */
export const defaultConfigObject = {
  cwd: findRootDir(),
  entryDir: DEFAULT_ENTRY_DIR_NAME,
  outDir: DEFAULT_OUT_DIR_NAME,

  browser,
  console,

  add,
  build,
  clean,
  info,
  init,
  lint,
  login,
  open,
  random,
  run,
  submit,
  testcase,
};
