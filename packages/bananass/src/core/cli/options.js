/**
 * @fileoverview `option`s used in `commander` for `bananass` CLI.
 *
 * DO NOT USE `Default option value` of `commander` package as it overrides the every other options from the config file.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { defaultConfigObject as dco } from '../conf/index.js';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

/** @param {string | boolean} defaultValue */
function formatDefaultValue(defaultValue) {
  return `(default: ${defaultValue})`;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @satisfies {[string, string]} */
export const cwd = /** @type {const} */ ([
  '-c, --cwd <dir>',
  `current working directory ${formatDefaultValue(dco.cwd)}`,
]);
/** @satisfies {[string, string]} */
export const entryDir = /** @type {const} */ ([
  '-e, --entry-dir <dir>',
  `entry directory name ${formatDefaultValue(dco.entryDir)}`,
]);
/** @satisfies {[string, string]} */
export const outDir = /** @type {const} */ ([
  '-o, --out-dir <dir>',
  `output directory name ${formatDefaultValue(dco.outDir)}`,
]);

/* Global */

// browser
/** @satisfies {[string, string]} */
export const browser = /** @type {const} */ ([
  '-b, --browser <browser>',
  `browser name. select from \`chrome\`, \`edge\`, \`firefox\`, \`brave\`, or \`default\` ${formatDefaultValue(dco.browser.browser)}`,
]);
/** @satisfies {[string, string]} */
export const secret = /** @type {const} */ ([
  '-s, --secret',
  `open browser in secret (private or incognito) mode ${formatDefaultValue(dco.browser.secret)}`,
]);

// console
/** @satisfies {[string, string]} */
export const debug = /** @type {const} */ ([
  '-d, --debug',
  `enable debug mode ${formatDefaultValue(dco.console.debug)}`,
]);
/** @satisfies {[string, string]} */
export const quiet = /** @type {const} */ ([
  '-q, --quiet',
  `enable quiet mode ${formatDefaultValue(dco.console.quiet)}`,
]);

/* Exclusive */

// build
/** @satisfies {[string, string]} */
export const clean = /** @type {const} */ ([
  '-C, --clean',
  `clean the output directory before emit ${formatDefaultValue(dco.build.clean)}`,
]);
/** @satisfies {[string, string]} */
export const templateType = /** @type {const} */ ([
  '-t, --template-type <type>',
  `webpack entry file template type. select from \`fs\` (file system) or \`rl\` (read line) ${formatDefaultValue(dco.build.templateType)}`,
]);

// info
/** @satisfies {[string, string]} */
export const all = /** @type {const} */ ([
  '-a, --all',
  `show all information including not found ${formatDefaultValue(dco.info.all)}`,
]);
