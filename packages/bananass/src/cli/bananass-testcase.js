/**
 * @fileoverview CLI `testcase` command.
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
 * Case: `npx bananass testcase` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function testcase(program) {
  program
    .command('testcase')
    .description(warning('TODO: Working in progress...🚧', false));
}
