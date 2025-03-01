#!/usr/bin/env node

/**
 * @fileoverview Entry file for the `npx create-bananass` CLI command. See the `bin` field in `../package.json`.
 */

/* eslint-disable no-console -- CLI script */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { cp } from 'node:fs/promises';
import { createRequire } from 'node:module';

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';
import { program } from 'commander';
import { consola } from 'consola';

// --------------------------------------------------------------------------------
// Declarations
// --------------------------------------------------------------------------------

const {
  description: pkgDescription,
  homepage: pkgHomepage,
  name: pkgName,
  version: pkgVersion,
} = createRequire(import.meta.url)('../package.json');

// --------------------------------------------------------------------------------
// Commander
// --------------------------------------------------------------------------------

program
  .name(pkgName)
  .description(`${pkgDescription} (${pkgHomepage})`)
  .version(pkgVersion, '-v, --version')
  .option('-d, --debug', 'enable debug mode', false)
  .option(
    '-f, --force',
    'force to create a new project even if the directory or files already exist',
    false,
  )
  .action(async options => {
    // ----------------------------------------------------------------------------
    // Declarations
    // ----------------------------------------------------------------------------

    const { debug, force } = options;

    const logger = createLogger({ debug });
    const spinner = createSpinner();

    // ----------------------------------------------------------------------------

    logger.debug('cli options:', options);

    // ----------------------------------------------------------------------------
    // Inquirer
    // ----------------------------------------------------------------------------

    /** @type {string} */
    const directory = await consola.prompt(
      'Which directory should this project be located in?',
      {
        type: 'text',
      },
    );

    /** @type {string} */
    const language = await consola.prompt('Which language do you want to use?', {
      type: 'select',
      options: ['JavaScript', 'TypeScript'],
    });

    /** @type {boolean} */
    const isVSC = await consola.prompt('Do you use Visual Studio Code?', {
      type: 'confirm',
    });

    console.log(); // Add a new line

    // ----------------------------------------------------------------------------

    logger
      .debug('directory:', directory)
      .debug('language:', language)
      .debug('isVSC:', isVSC)
      .eol();

    // ----------------------------------------------------------------------------
    // CLI Animation
    // ----------------------------------------------------------------------------

    spinner.start(bananass('Creating a new Bananass framework project...', true));

    // ----------------------------------------------------------------------------
    // Copy Files
    // ----------------------------------------------------------------------------

    try {
      await cp(new URL(`../templates/${language}`, import.meta.url), directory, {
        errorOnExist: true,
        recursive: true,
        force,
        filter: src => isVSC || !src.includes('.vscode'), // Exclude `.vscode` folder if `isVSC` is `false`.
      });
    } catch ({ message }) {
      spinner.error(error('Failed to copy files'));

      throw new Error(error(message, true));
    }

    // ----------------------------------------------------------------------------
    // Exit
    // ----------------------------------------------------------------------------

    spinner.success(success('Successfully created a new Bananass framework project!'));
  })
  .parse();
