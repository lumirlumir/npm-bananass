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
 * @import {
 *   ConfigObject,
 *   ConfigObjectBrowser,
 *   ConfigObjectConsole,
 *   ConfigObjectAdd,
 *   ConfigObjectBug,
 *   ConfigObjectBuild,
 *   ConfigObjectDiscussion,
 *   ConfigObjectHome,
 *   ConfigObjectInfo,
 *   ConfigObjectOpen,
 *   ConfigObjectRepo,
 *   ConfigObjectRun
 * } from '../../types.js';
 */

// --------------------------------------------------------------------------------
// Declarations
// --------------------------------------------------------------------------------

// #region Global

/** @type {ConfigObjectBrowser} */
const browser = {
  browser: 'default',
  secret: false,
};

/** @type {ConfigObjectConsole} */
const console = {
  debug: false,
  quiet: false,
};

// #endregion Global

// #region Exclusive

/** @type {ConfigObjectAdd} */
const add = {};

/** @type {ConfigObjectBug} */
const bug = {};

/** @type {ConfigObjectBuild} */
const build = {
  clean: false,
  templateType: 'fs',
};

/** @type {ConfigObjectDiscussion} */
const discussion = {};

/** @type {ConfigObjectHome} */
const home = {};

/** @type {ConfigObjectInfo} */
const info = {
  all: false,
};

/** @type {ConfigObjectOpen} */
const open = {};

/** @type {ConfigObjectRepo} */
const repo = {};

/** @type {ConfigObjectRun} */
const run = {};

// #endregion Exclusive

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
  discussion,
  home,
  info,
  open,
  repo,
  run,
};
