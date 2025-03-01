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
import { spawn } from 'node:child_process';

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
  .argument('[directory]', 'directory should this project be located in')
  .option('-d, --debug', 'enable debug mode', false)
  .option(
    '-f, --force',
    'force to create a new project even if the directory or files already exist',
    false,
  )
  .option(
    '-s, --skip-install',
    'explicitly tell the cli to skip installing packages',
    false,
  )
  .action(async (directoryCli, options) => {
    // ----------------------------------------------------------------------------
    // Declarations
    // ----------------------------------------------------------------------------

    const { debug, force, skipInstall } = options;

    const logger = createLogger({ debug });
    const spinner = createSpinner();

    // ----------------------------------------------------------------------------

    logger.debug('directory:', directoryCli).debug('cli options:', options);

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

    spinner.start(bananass('Copying files...', true));

    try {
      await cp(
        new URL(`../templates/${language.toLowerCase()}`, import.meta.url),
        directory,
        {
          errorOnExist: true,
          recursive: true,
          force,
          filter: src => isVSC || !src.includes('.vscode'), // Exclude `.vscode` folder if `isVSC` is `false`.
        },
      );
    } catch ({ message }) {
      spinner.error(error('Failed to copy files'));

      throw new Error(error(message, true));
    }

    // ----------------------------------------------------------------------------
    // Install Packages
    // ----------------------------------------------------------------------------

    if (!skipInstall) {
      spinner.start(bananass('Installing packages...', true));

      try {
        await new Promise((res, rej) => {
          const npmInstall = spawn('npm', ['install'], {
            cwd: directory,
            shell: true, // Required for Windows
          });

          npmInstall.on('close', code => {
            if (code === 0) {
              res();
            } else {
              rej(new Error(`npm install failed with exit code ${code}`));
            }
          });

          npmInstall.on('error', err => {
            rej(err);
          });
        });
      } catch ({ message }) {
        spinner.error(error('Failed to install packages'));

        throw new Error(error(message, true));
      }
    }

    // ----------------------------------------------------------------------------
    // Exit
    // ----------------------------------------------------------------------------

    spinner.success(success('Successfully created a new Bananass framework project!'));
  })
  .parse();
