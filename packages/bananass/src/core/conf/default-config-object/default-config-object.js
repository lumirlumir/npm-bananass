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
// Declarations
// --------------------------------------------------------------------------------

/* Global */

/** @type {ConfigObjectBrowser} */
const browser = {
  browser: 'default',
  secretMode: false,
};

/** @type {ConfigObjectConsole} */
const console = {
  debug: false,
  quiet: false,
};

/* Exclusive */

/** @type {ConfigObjectAdd} */
const add = {};

/** @type {ConfigObjectBuild} */
const build = {
  clean: false,
  templateType: 'fs',
};

/** @type {ConfigObjectClean} */
const clean = {};

/** @type {ConfigObjectInfo} */
const info = {};

/** @type {ConfigObjectInit} */
const init = {};

/** @type {ConfigObjectLint} */
const lint = {};

/** @type {ConfigObjectLogin} */
const login = {};

/** @type {ConfigObjectOpen} */
const open = {};

/** @type {ConfigObjectRandom} */
const random = {};

/** @type {ConfigObjectRun} */
const run = {};

/** @type {ConfigObjectSubmit} */
const submit = {};

/** @type {ConfigObjectTestcase} */
const testcase = {};

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {ConfigObject} */
export default {
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
