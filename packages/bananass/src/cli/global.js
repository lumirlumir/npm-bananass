/**
 * @fileoverview CLI `global` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import {
  PKG_DESCRIPTION,
  PKG_NAME,
  PKG_VERSION,
  URL_HOMEPAGE,
} from '../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('commander').Command} Command
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Global: `npx bananass` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function global(program) {
  program
    .name(PKG_NAME)
    .description(`${PKG_DESCRIPTION} (${URL_HOMEPAGE})`)
    .version(PKG_VERSION, '-v, --version');
}
