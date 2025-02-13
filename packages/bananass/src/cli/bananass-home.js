/**
 * @fileoverview CLI `home` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { home as homeCmd } from '../commands/index.js';
import { configLoader, defaultConfigObject } from '../core/conf/index.js';

import { home as homeDesc } from '../core/cli/descriptions.js';
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
 * Home: `npx bananass home` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function home(program) {
  program
    .command('home')
    .description(homeDesc)
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

      logger(options)
        .debug('command:', command.name())
        .debug('cli options:', options)
        .debug('cli config object:', cliConfigObject)
        .debug('config object:', configObject)
        .eol();

      await homeCmd(configObject);
    });
}
