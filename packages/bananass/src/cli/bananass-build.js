/**
 * @fileoverview CLI `build` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import logger from 'bananass-utils-console/logger';

import { build as buildCmd } from '../commands/index.js';
import { configLoader, defaultConfigObject } from '../core/conf/index.js';

import { build as buildDesc } from '../core/cli/descriptions.js';
import { problems as problemsArg } from '../core/cli/arguments.js';
import {
  cwd as cwdOpt,
  entryDir as entryDirOpt,
  outDir as outDirOpt,
  debug as debugOpt,
  quiet as quietOpt,
  clean as cleanOpt,
  templateType as templateTypeOpt,
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
 * Build. `npx bananass build` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function build(program) {
  program
    .command('build')
    .description(buildDesc)
    .argument(...problemsArg)
    .option(...cwdOpt)
    .option(...entryDirOpt)
    .option(...outDirOpt)
    .option(...debugOpt)
    .option(...quietOpt)
    .option(...cleanOpt)
    .option(...templateTypeOpt)
    .action(async (problems, options, command) => {
      const { cwd, entryDir, outDir, debug, quiet, clean, templateType } = options;

      /** @type {ConfigObject} */
      const cliConfigObject = {
        cwd,
        entryDir,
        outDir,
        console: {
          debug,
          quiet,
        },
        build: {
          clean,
          templateType,
        },
      };

      const { config: configObject } = await configLoader({
        cliConfigObject,
        defaultConfigObject,
      });

      logger(options)
        .debug('command:', command.name())
        .debug('problems:', problems)
        .debug('cli options:', options)
        .debug('cli config object:', cliConfigObject)
        .debug('config object:', configObject)
        .eol();

      await buildCmd(problems, configObject);
    });
}
