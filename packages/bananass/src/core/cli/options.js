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

/** @type {[string, string]} */
export const cwd = [
  '-c, --cwd <dir>',
  `current working directory ${formatDefaultValue(dco.cwd)}`,
];
/** @type {[string, string]} */
export const entryDir = [
  '-e, --entry-dir <dir>',
  `entry directory name ${formatDefaultValue(dco.entryDir)}`,
];
/** @type {[string, string]} */
export const outDir = [
  '-o, --out-dir <dir>',
  `output directory name ${formatDefaultValue(dco.outDir)}`,
];

/* Global */

// browser
/** @type {[string, string]} */
export const browser = [
  '-b, --browser <browser>',
  `browser name. select from \`chrome\`, \`edge\`, \`firefox\`, or \`default\` ${formatDefaultValue(dco.browser.browser)}`,
];
/** @type {[string, string]} */
export const secretMode = [
  '-s, --secret-mode',
  `open browser in secret (private or incognito) mode ${formatDefaultValue(dco.browser.secretMode)}`,
];

// console
/** @type {[string, string]} */
export const debug = [
  '-d, --debug',
  `enable debug mode ${formatDefaultValue(dco.console.debug)}`,
];
/** @type {[string, string]} */
export const quiet = [
  '-q, --quiet',
  `enable quiet mode ${formatDefaultValue(dco.console.quiet)}`,
];

/* Exclusive */

// build
/** @type {[string, string]} */
export const clean = [
  '-C, --clean',
  `clean the output directory before emit ${formatDefaultValue(dco.build.clean)}`,
];
/** @type {[string, string]} */
export const templateType = [
  '-t, --template-type <type>',
  `webpack entry file template type. select from \`fs\` (file system) or \`rl\` (read line) ${formatDefaultValue(dco.build.templateType)}`,
];

// info
/** @type {[string, string]} */
export const all = [
  '-a, --all',
  `show all information including not found ${formatDefaultValue(dco.info.all)}`,
];
