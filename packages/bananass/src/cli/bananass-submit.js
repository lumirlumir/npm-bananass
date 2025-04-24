/**
 * @fileoverview CLI `submit` command.
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
 * Submit: `npx bananass submit` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function submit(program) {
  program.command('submit').description(warning('working in progress...🚧', false)); // TODO
}
