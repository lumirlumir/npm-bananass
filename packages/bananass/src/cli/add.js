/**
 * @fileoverview CLI `add` command.
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
 * Add: `npx bananass add` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function add(program) {
  program.command('add').description(warning('TODO: Working in progress...🚧', false));
}
