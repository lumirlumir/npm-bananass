/**
 * @fileoverview CLI `clean` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { warning } from 'bananass-utils-console/theme';

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
 * Clean: `npx bananass clean` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function clean(program) {
  program.command('clean').description(warning('TODO: Working in progress...🚧', false));
}
