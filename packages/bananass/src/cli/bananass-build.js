/**
 * @fileoverview CLI `build` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { build } from '../commands/index.js';
import { configLoader, defaultConfigObject } from '../core/conf/index.js';
import { ENTRY_DIR_NAME_ARRAY, OUTPUT_DIR_NAME_ARRAY } from '../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('commander').Command} Command
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

function toInlineCodeString(arr) {
  return arr.map(elem => `\`${elem}\``).join(', ');
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Build. `npx bananass build` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function bananassBuild(program) {
  program
    .command('build')
    .description(
      `build and create bundled files using Webpack from the ${toInlineCodeString(ENTRY_DIR_NAME_ARRAY)} directory and outputs them to the ${toInlineCodeString(OUTPUT_DIR_NAME_ARRAY)} directory`,
    )
    .argument('[problems...]', 'baekjoon problem number list', null)
    .option(
      '-c, --clean',
      `clean the output directory before emit (default: ${defaultConfigObject.build.clean})`,
    ) // DO NOT USE `Default option value` of `commander` package as it overrides the every other options from the config file. Same goes for the other options.
    .option(
      '-D, --debug',
      `enable debug mode (default: ${defaultConfigObject.build.debug})`,
    )
    .option(
      '-q, --quiet',
      `enable quiet mode (default: ${defaultConfigObject.build.quiet})`,
    )
    .option(
      '-t, --template-type <type>',
      `Webpack entry file template type. Select from 'fs' (File System) or 'rl' (Read Line) (default: ${defaultConfigObject.build.templateType})`,
    )
    .action(async (problems, options, command) => {
      const cliConfigObject = { build: options };
      const { config: configObject } = await configLoader({
        cliConfigObject,
        defaultConfigObject,
      });

      logger(options)
        .debug('command:', command.name())
        .debug('problems:', problems)
        .debug('cli options:', options)
        .debug('cli config object:', cliConfigObject)
        .debug('config object:', configObject)
        .eol();

      await build(problems, configObject);
    });
}
