/**
 * @fileoverview CLI `info` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { info as infoCmd } from '../commands/index.js';
import { configLoader } from '../core/conf/index.js';

import { info as infoDesc } from '../core/cli/descriptions.js';
import { console as consoleGroup, info as infoGroup } from '../core/cli/groups.js';
import {
  debug as debugOpt,
  quiet as quietOpt,
  all as allOpt,
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
 * Info: `npx bananass info` command.
 * @param {Command} program The `commander` package's `program`.
 */
export default function info(program) {
  program
    .command('info')
    .description(infoDesc)
    .optionsGroup(consoleGroup)
    .option(...debugOpt)
    .option(...quietOpt)
    .optionsGroup(infoGroup)
    .option(...allOpt)
    .action(async (options, command) => {
      const { debug, quiet, all } = options;

      const configObject = await configLoader({
        cliConfigObject: {
          console: {
            debug,
            quiet,
          },
          info: {
            all,
          },
        },
      });

      logger(configObject.console)
        .debug('command:', command.name())
        .debug('cli options:', options)
        .debug('config object:', configObject)
        .eol();

      await infoCmd(configObject);
    });
}
