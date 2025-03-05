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
 * @typedef {import('../core/types.js').ConfigObject} ConfigObject
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Info: `npx bananass info` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function info(program) {
  program
    .command('info')
    .description(infoDesc)
    .option(...debugOpt)
    .option(...quietOpt)
    .option(...allOpt)
    .action(async (options, command) => {
      const { debug, quiet, all } = options;

      /** @type {ConfigObject} */
      const cliConfigObject = {
        console: {
          debug,
          quiet,
        },
        info: {
          all,
        },
      };

      const { config: configObject } = await configLoader({ cliConfigObject });

      logger(configObject.console)
        .debug('command:', command.name())
        .debug('cli options:', options)
        .debug('cli config object:', cliConfigObject)
        .debug('config object:', configObject)
        .eol();

      await infoCmd(configObject);
    });
}
