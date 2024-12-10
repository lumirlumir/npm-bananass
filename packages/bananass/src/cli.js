#!/usr/bin/env node

/**
 * @fileoverview Entry file for the `npx bananass` CLI command. See the `bin.bananass` property in `../package.json`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { program } = require('commander');

const { build } = require('./commands');
const { ENTRY_DIRECTORY_NAME_ARRAY, OUTPUT_DIRECTORY_NAME } = require('./constants');
const { description, name, version } = require('../package.json');

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
  .action(problems => {
    build(problems);
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
