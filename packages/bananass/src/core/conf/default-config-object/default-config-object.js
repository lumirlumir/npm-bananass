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
 * } from '../../types/index.js';
 */

// --------------------------------------------------------------------------------
// Declarations
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Global

/** @satisfies {ConfigObjectBrowser} */
const browser = /** @type {const} */ ({
  browser: 'default',
  secret: false,
});

/** @satisfies {ConfigObjectConsole} */
const console = /** @type {const} */ ({
  debug: false,
  quiet: false,
});

// #endregion Global
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Exclusive

/** @satisfies {ConfigObjectAdd} */
const add = /** @type {const} */ ({});

/** @satisfies {ConfigObjectBug} */
const bug = /** @type {const} */ ({});

/** @satisfies {ConfigObjectBuild} */
const build = /** @type {const} */ ({
  clean: false,
  templateType: 'fs',
});

/** @satisfies {ConfigObjectDiscussion} */
const discussion = /** @type {const} */ ({});

/** @satisfies {ConfigObjectHome} */
const home = /** @type {const} */ ({});

/** @satisfies {ConfigObjectInfo} */
const info = /** @type {const} */ ({
  all: false,
});

/** @satisfies {ConfigObjectOpen} */
const open = /** @type {const} */ ({});

/** @satisfies {ConfigObjectRepo} */
const repo = /** @type {const} */ ({});

/** @satisfies {ConfigObjectRun} */
const run = /** @type {const} */ ({});

// #endregion Exclusive
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @satisfies {ConfigObject} */
export default /** @type {const} */ ({
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
});
