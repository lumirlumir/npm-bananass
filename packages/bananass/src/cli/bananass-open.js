/**
 * @fileoverview CLI `open` command.
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
 * Open: `npx bananass open` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function bananassOpen(program) {
  program.command('open').description(warning('TODO: Working in progress...🚧', false));
}
