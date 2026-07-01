/**
 * @fileoverview CLI `build` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { build as buildCmd } from '../commands/index.js';
import { configLoader } from '../core/conf/index.js';

import { build as buildDesc } from '../core/cli/descriptions.js';
import { problems as problemsArg } from '../core/cli/arguments.js';
import {
  global as globalGroup,
  console as consoleGroup,
  build as buildGroup,
} from '../core/cli/groups.js';
import {
  cwd as cwdOpt,
  entryDir as entryDirOpt,
  outDir as outDirOpt,
  debug as debugOpt,
  quiet as quietOpt,
  clean as cleanOpt,
  minimize as minimizeOpt,
  templateType as templateTypeOpt,
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
 * Build: `npx bananass build` command.
 * @param {Command} program The `commander` package's `program`.
 */
export default function build(program) {
  program
    .command('build')
    .description(buildDesc)
    .argument(...problemsArg)
    .optionsGroup(globalGroup)
    .option(...cwdOpt)
    .option(...entryDirOpt)
    .option(...outDirOpt)
    .optionsGroup(consoleGroup)
    .option(...debugOpt)
    .option(...quietOpt)
    .optionsGroup(buildGroup)
    .option(...cleanOpt)
    .option(...minimizeOpt)
    .option(...templateTypeOpt)
    .action(async (problems, options, command) => {
      const { cwd, entryDir, outDir, debug, quiet, clean, minimize, templateType } =
        options;

      const configObject = await configLoader({
        cliConfigObject: {
          cwd,
          entryDir,
          outDir,
          console: {
            debug,
            quiet,
          },
          build: {
            clean,
            minimize,
            templateType,
          },
        },
      });

      logger(configObject.console)
        .debug('command:', command.name())
        .debug('problems:', problems)
        .debug('cli options:', options)
        .debug('config object:', configObject)
        .eol();

      await buildCmd(problems, configObject);
    });
}
