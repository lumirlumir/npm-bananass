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

/** @type {string} */
export const build = `build and create bundled files using webpack and esbuild from the \`${dco.entryDir}\` directory and outputs them to the \`${dco.outDir}\` directory`;

export const home = 'open the official documentation homepage in a browser';

export const open = 'open the given baekjoon problem numbers in a browser';

export const repo = 'open the github repository in a browser';
