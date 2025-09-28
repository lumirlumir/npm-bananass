/**
 * @fileoverview `description`s used in `commander` for `bananass` CLI.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { defaultConfigObject as dco } from '../conf/index.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @satisfies {string} */
export const bug = 'open the github issues in a browser';
/** @satisfies {string} */
export const build = `build and create bundled files using webpack and babel from the \`${dco.entryDir}\` directory and outputs them to the \`${dco.outDir}\` directory`;
/** @satisfies {string} */
export const discussion = 'open the github discussions in a browser';
/** @satisfies {string} */
export const home = 'open the official documentation homepage in a browser';
/** @satisfies {string} */
export const info =
  'print relevant details about the current system which can be used to report bugs';
/** @satisfies {string} */
export const open = 'open the given baekjoon problem numbers in a browser';
/** @satisfies {string} */
export const repo = 'open the github repository in a browser';
/** @satisfies {string} */
export const run = 'run generated testcases and compare them with the expected outputs';
