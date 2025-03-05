/**
 * @fileoverview CLI `open` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { open as openCmd } from '../commands/index.js';
import { configLoader } from '../core/conf/index.js';

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
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Open: `npx bananass open` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function open(program) {
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

      const { config: configObject } = await configLoader({
        cliConfigObject: {
          browser: {
            browser,
            secretMode,
          },
          console: {
            debug,
            quiet,
          },
        },
      });

      logger(configObject.console)
        .debug('command:', command.name())
        .debug('problems:', problems)
        .debug('cli options:', options)
        .debug('config object:', configObject)
        .eol();

      await openCmd(problems, configObject);
    });
}
