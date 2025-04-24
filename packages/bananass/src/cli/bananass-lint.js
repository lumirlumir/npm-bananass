/**
 * @fileoverview CLI `lint` command.
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
 * Lint: `npx bananass lint` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function lint(program) {
  program.command('lint').description(warning('working in progress...🚧', false)); // TODO
}
