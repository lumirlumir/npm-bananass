/**
 * @fileoverview CLI `run` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { run as runCmd } from '../commands/index.js';
import { configLoader } from '../core/conf/index.js';

import { run as runDesc } from '../core/cli/descriptions.js';
import { problems as problemsArg } from '../core/cli/arguments.js';
import {
  cwd as cwdOpt,
  entryDir as entryDirOpt,
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
 * Run: `npx bananass run` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function run(program) {
  program
    .command('run')
    .description(runDesc)
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

      await runCmd(problems, configObject);
    });
}
