/**
 * @fileoverview CLI `home` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { home as homeCmd } from '../commands/index.js';
import { configLoader } from '../core/conf/index.js';

import { home as homeDesc } from '../core/cli/descriptions.js';
import { browser as browserGroup, console as consoleGroup } from '../core/cli/groups.js';
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
 * Home: `npx bananass home` command.
 * @param {Command} program The `commander` package's `program`.
 */
export default function home(program) {
  program
    .command('home')
    .description(homeDesc)
    .optionsGroup(browserGroup)
    .option(...browserOpt)
    .option(...secretOpt)
    .optionsGroup(consoleGroup)
    .option(...debugOpt)
    .option(...quietOpt)
    .action(async (options, command) => {
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
        .debug('cli options:', options)
        .debug('config object:', configObject)
        .eol();

      await homeCmd(configObject);
    });
}
