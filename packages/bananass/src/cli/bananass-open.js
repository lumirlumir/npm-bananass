/**
 * @fileoverview CLI `open` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { open } from '../commands/index.js';
import { configLoader, defaultConfigObject } from '../core/conf/index.js';

import { open as openDesc } from '../core/cli/descriptions.js';
import { problems as problemsArg } from '../core/cli/arguments.js';
import {
  browser as browserOpt,
  secretMode as secretModeOpt,
  debug as debugOpt,
  quiet as quietOpt,
} from '../core/cli/options.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('commander').Command} Command
 * @typedef {import('../core/types.js').ConfigObject} ConfigObject
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Open: `npx bananass open` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function bananassOpen(program) {
  program
    .command('open')
    .description(openDesc)
    .argument(...problemsArg)
    .option(...browserOpt)
    .option(...secretModeOpt)
    .option(...debugOpt)
    .option(...quietOpt)
    .action(async (problems, options, command) => {
      const { browser, secretMode, debug, quiet } = options;

      /** @type {ConfigObject} */
      const cliConfigObject = {
        browser: {
          browser,
          secretMode,
        },
        console: {
          debug,
          quiet,
        },
      };

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

      await open(problems, configObject);
    });
}
