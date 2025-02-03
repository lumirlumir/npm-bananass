/**
 * @fileoverview CLI `build` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { build } from '../commands/index.js';
import { configLoader, defaultConfigObject } from '../core/conf/index.js';
import { ENTRY_DIR_NAME_ARRAY } from '../core/constants.js';

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
  const { clean, debug, outDir, quiet, templateType } = defaultConfigObject.build;

  program
    .command('build')
    .description(
      `build and create bundled files using webpack and babel from the ${toInlineCodeString(ENTRY_DIR_NAME_ARRAY)} directory and outputs them to the \`${outDir}\` directory`,
    )
    .argument('[problems...]', 'baekjoon problem number list', null)
    .option('-c, --clean', `clean the output directory before emit (default: ${clean})`) // DO NOT USE `Default option value` of `commander` package as it overrides the every other options from the config file. Same goes for the other options.
    .option('-D, --debug', `enable debug mode (default: ${debug})`)
    .option('-o, --out-dir <dir>', `output directory name (default: ${outDir})`)
    .option('-q, --quiet', `enable quiet mode (default: ${quiet})`)
    .option(
      '-t, --template-type <type>',
      `webpack entry file template type. select from \`fs\` (file system) or \`rl\` (read line) (default: ${templateType})`,
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
