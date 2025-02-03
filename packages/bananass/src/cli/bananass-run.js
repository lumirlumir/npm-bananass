/**
 * @fileoverview CLI `run` command.
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
 * Run: `npx bananass run` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function bananassRun(program) {
  program.command('run').description(warning('TODO: Working in progress...🚧', false));
}
