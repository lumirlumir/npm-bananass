/**
 * @fileoverview CLI `case` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { warning } from 'bananass-utils-console/theme';

// --------------------------------------------------------------------------------
// Types
// --------------------------------------------------------------------------------

/**
 * @typedef {import('commander').Command} Command
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Case: `npx bananass case` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function bananassCase(program) {
  program.command('case').description(warning('TODO: Working in progress...🚧', false));
}
