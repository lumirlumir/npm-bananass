/**
 * @fileoverview CLI `login` command.
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
 * Login: `npx bananass login` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function bananassLogin(program) {
  program.command('login').description(warning('TODO: Working in progress...🚧', false));
}
