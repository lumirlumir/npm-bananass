#!/usr/bin/env node

/**
 * @fileoverview Entry file for the `npx bananass` CLI command. See the `bin.bananass` property in `../package.json`.
 */

/* eslint-disable import/extensions, import/no-unresolved */ // TODO: Remove this line after developing `eslint-config-bananass` package.

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { createRequire } from 'node:module';

import logger from 'bananass-utils-console/logger';
import { program } from 'commander';

import { build } from './commands/index.js';
import { ENTRY_DIRECTORY_NAME_ARRAY, OUTPUT_DIRECTORY_NAME } from './constants/index.js';

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const { description, name, version } = createRequire(import.meta.url)('../package.json');

// --------------------------------------------------------------------------------
// Commands and Options
// --------------------------------------------------------------------------------

/**
 * Global.
 *
 * `npx bananass` command.
 */
program.name(name).description(description).version(version, '-v, --version');

/**
 * Build.
 *
 * `npx bananass build` command.
 */
program
  .command('build')
  .description(
    `build and create bundled files using Webpack from the ${ENTRY_DIRECTORY_NAME_ARRAY.map(dirName => `\`${dirName}\``).join(' or ')} directory and outputs them to the \`${OUTPUT_DIRECTORY_NAME}\` directory`,
  )
  .argument('[problems...]', 'baekjoon problem number list', null)
  .option('-c, --clean', 'clean the output directory before emit', false)
  .option('-D, --debug', 'enable debug mode', false)
  .option('-q, --quiet', 'enable quiet mode', false)
  .action(async (problems, options, command) => {
    logger(options)
      .debug('command:', command.name())
      .debug('problems:', problems)
      .debug('options:', options)
      .eol();

    await build(problems, options);
  });

/**
 * Info.
 *
 * `npx bananass info` command.
 * @todo
 */
program.command('info');

/**
 * Run.
 *
 * `npx bananass run` command.
 * @todo
 */
program.command('run');

/**
 * Submit.
 *
 * `npx bananass submit` command.
 * @todo
 */
program.command('submit');

// --------------------------------------------------------------------------------
// Parse `commander`
// --------------------------------------------------------------------------------

program.parse();
