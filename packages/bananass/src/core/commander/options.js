/**
 * @fileoverview `option`s used in `commander` for `bananass` CLI.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { defaultConfigObject as dco } from '../conf/index.js';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

function formatDefaultValue(defaultValue) {
  return `(default: ${defaultValue})`;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const cwd = [
  '-c, --cwd <dir>',
  `current working directory ${formatDefaultValue(dco.cwd)}`,
];
export const entryDir = [
  '-e, --entry-dir <dir>',
  `entry directory name ${formatDefaultValue(dco.entryDir)}`,
];
export const outDir = [
  '-o, --out-dir <dir>',
  `output directory name ${formatDefaultValue(dco.outDir)}`,
];

/* Global */

// browser
export const browser = [
  '-b, --browser <browser>',
  `browser name. select from \`chrome\`, \`edge\`, \`firefox\`, or \`default\` ${formatDefaultValue(dco.browser.browser)}`,
];
export const secretMode = [
  '-s, --secret-mode',
  `open browser in secret (private or incognito) mode ${formatDefaultValue(dco.browser.secretMode)}`,
];

// console
export const debug = [
  '-d, --debug',
  `enable debug mode ${formatDefaultValue(dco.console.debug)}`,
];
export const quiet = [
  '-q, --quiet',
  `enable quiet mode ${formatDefaultValue(dco.console.quiet)}`,
];

/* Exclusive */

// build
export const clean = [
  '-C, --clean',
  `clean the output directory before emit ${formatDefaultValue(dco.build.clean)}`,
];
export const templateType = [
  '-T, --template-type <type>',
  `webpack entry file template type. select from \`fs\` (file system) or \`rl\` (read line) ${formatDefaultValue(dco.build.templateType)}`,
];
