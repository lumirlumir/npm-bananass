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
 * @typedef {import('../../types.js').ConfigObjectBug} ConfigObjectBug
 * @typedef {import('../../types.js').ConfigObjectBuild} ConfigObjectBuild
 * @typedef {import('../../types.js').ConfigObjectClean} ConfigObjectClean
 * @typedef {import('../../types.js').ConfigObjectDiscussion} ConfigObjectDiscussion
 * @typedef {import('../../types.js').ConfigObjectHome} ConfigObjectHome
 * @typedef {import('../../types.js').ConfigObjectInfo} ConfigObjectInfo
 * @typedef {import('../../types.js').ConfigObjectLint} ConfigObjectLint
 * @typedef {import('../../types.js').ConfigObjectLogin} ConfigObjectLogin
 * @typedef {import('../../types.js').ConfigObjectOpen} ConfigObjectOpen
 * @typedef {import('../../types.js').ConfigObjectRandom} ConfigObjectRandom
 * @typedef {import('../../types.js').ConfigObjectRepo} ConfigObjectRepo
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

/** @type {ConfigObjectBug} */
const bug = {};

/** @type {ConfigObjectBuild} */
const build = {
  clean: false,
  templateType: 'fs',
};

/** @type {ConfigObjectClean} */
const clean = {};

/** @type {ConfigObjectDiscussion} */
const discussion = {};

/** @type {ConfigObjectHome} */
const home = {};

/** @type {ConfigObjectInfo} */
const info = {
  all: false,
};

/** @type {ConfigObjectLint} */
const lint = {};

/** @type {ConfigObjectLogin} */
const login = {};

/** @type {ConfigObjectOpen} */
const open = {};

/** @type {ConfigObjectRandom} */
const random = {};

/** @type {ConfigObjectRepo} */
const repo = {};

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
  bug,
  build,
  clean,
  discussion,
  home,
  info,
  lint,
  login,
  open,
  random,
  repo,
  run,
  submit,
  testcase,
};
