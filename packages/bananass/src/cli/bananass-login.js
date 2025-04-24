/**
 * @fileoverview CLI `login` command.
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
 * Login: `npx bananass login` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function login(program) {
  program.command('login').description(warning('working in progress...🚧', false)); // TODO
}
