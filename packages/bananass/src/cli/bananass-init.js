/**
 * @fileoverview CLI `init` command.
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
 * Init: `npx bananass init` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function bananassInit(program) {
  program.command('init').description(warning('TODO: Working in progress...🚧', false));
}
