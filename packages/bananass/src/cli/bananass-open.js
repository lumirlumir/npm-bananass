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
import { browser as browserGroup, console as consoleGroup } from '../core/cli/groups.js';
import { problems as problemsArg } from '../core/cli/arguments.js';
import {
  browser as browserOpt,
  secret as secretOpt,
  debug as debugOpt,
  quiet as quietOpt,
} from '../core/cli/options.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Command } from 'commander';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Open: `npx bananass open` command.
 * @param {Command} program The `commander` package's `program`.
 */
export default function open(program) {
  program
    .command('open')
    .description(openDesc)
    .argument(...problemsArg)
    .optionsGroup(browserGroup)
    .option(...browserOpt)
    .option(...secretOpt)
    .optionsGroup(consoleGroup)
    .option(...debugOpt)
    .option(...quietOpt)
    .action(async (problems, options, command) => {
      const { browser, secret, debug, quiet } = options;

      const configObject = await configLoader({
        cliConfigObject: {
          browser: {
            browser,
            secret,
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
