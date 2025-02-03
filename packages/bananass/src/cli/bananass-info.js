/**
 * @fileoverview CLI `info` command.
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
 * Info: `npx bananass info` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function bananassInfo(program) {
  program.command('info').description(warning('TODO: Working in progress...🚧', false));
}
