/**
 * @fileoverview CLI `home` command.
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
 * Home: `npx bananass home` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function bananassHome(program) {
  program.command('home').description(warning('TODO: Working in progress...🚧', false));
}
