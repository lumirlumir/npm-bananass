/**
 * @fileoverview CLI `bug` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { bug as bugCmd } from '../commands/index.js';
import { configLoader, defaultConfigObject } from '../core/conf/index.js';

import { bug as bugDesc } from '../core/cli/descriptions.js';
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
 * Bug: `npx bananass bug` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function bug(program) {
  program
    .command('bug')
    .alias('bugs')
    .alias('issue')
    .alias('issues')
    .description(bugDesc)
    .option(...browserOpt)
    .option(...secretModeOpt)
    .option(...debugOpt)
    .option(...quietOpt)
    .action(async (options, command) => {
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

      logger(configObject.console)
        .debug('command:', command.name())
        .debug('cli options:', options)
        .debug('cli config object:', cliConfigObject)
        .debug('config object:', configObject)
        .eol();

      await bugCmd(configObject);
    });
}
