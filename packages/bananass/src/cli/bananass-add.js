/**
 * @fileoverview CLI `add` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { add as addCmd } from '../commands/index.js';
import { add as addDesc } from '../core/cli/descriptions.js';
import { problems as problemsArg } from '../core/cli/arguments.js';
import {
  cwd as cwdOpt,
  entryDir as entryDirOpt,
  debug as debugOpt,
  quiet as quietOpt,
} from '../core/cli/options.js';
import { configLoader } from '../core/conf/index.js';

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
 * Add: `npx bananass add` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function add(program) {
  program
    .command('add')
    .alias('create')
    .description(addDesc)
    .argument(...problemsArg)
    .option(...cwdOpt)
    .option(...entryDirOpt)
    .option(...debugOpt)
    .option(...quietOpt)
    .action(async (problems, options, command) => {
      const { cwd, entryDir, debug, quiet } = options;

      const configObject = await configLoader({
        cliConfigObject: {
          cwd,
          entryDir,
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

      await addCmd(problems, configObject);
    });
}
