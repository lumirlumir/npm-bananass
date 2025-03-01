#!/usr/bin/env node

/**
 * @fileoverview Entry file for the `npx create-bananass` CLI command. See the `bin` field in `../package.json`.
 *
 * We receive arguments from both CLI and PROMPT.
 */

/* eslint-disable no-console */

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

/**
 * @typedef cliOptions
 * @property {boolean} [debug] Enable debug mode.
 * @property {boolean} [force] Force to create a new project even if the path already exist.
 * @property {boolean} [typescript] Initialize as a typescript project.
 * @property {boolean} [yes] Skip all prompts and use the default values.
 * @property {boolean} [skipVsc] Skip configuring visual studio code environment.
 * @property {boolean} [skipGit] Skip initializing a git repository.
 * @property {boolean} [skipInstall] Skip installing packages with npm.
 */

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
  .argument('[directory]', 'the directory in which this project should be located', '.')
  .usage('[directory] [options]')
  .option('-d, --debug', 'enable debug mode', false)
  .option(
    '-f, --force',
    'force to create a new project even if the path already exist',
    false,
  )
  .option('-t, --typescript', 'initialize as a typescript project', false)
  .option('-y, --yes', 'skip all prompts and use the default values', false)
  .option('--skip-vsc', 'skip configuring visual studio code environment', false)
  .option('--skip-git', 'skip initializing a git repository', false)
  .option('--skip-install', 'skip installing packages with npm', false)
  .action(
    async (/** @type {string} */ cliDirectory, /** @type {cliOptions} */ cliOptions) => {
      // --------------------------------------------------------------------------
      // CLI
      // --------------------------------------------------------------------------

      const {
        debug: cliDebug,
        force: cliForce,
        typescript: cliTypescript,
        yes: cliYes,
        skipVsc: cliSkipVsc,
        skipGit: cliSkipGit,
        skipInstall: cliSkipInstall,
      } = cliOptions;

      // --------------------------------------------------------------------------
      // PROMPT
      // --------------------------------------------------------------------------

      let promptDirectory;
      let promptTypescript;
      let promptSkipVsc;

      if (!cliYes) {
        promptDirectory = await consola.prompt(
          'Which directory should this project be located in?',
          {
            placeholder: cliDirectory,
            type: 'text',
            cancel: 'reject',
          },
        );

        promptTypescript = await consola.prompt('Would you like to use TypeScript?', {
          initial: false,
          type: 'confirm',
          cancel: 'reject',
        });

        promptSkipVsc = !(await consola.prompt('Do you use Visual Studio Code?', {
          initial: true,
          type: 'confirm',
          cancel: 'reject',
        }));

        console.log(); // Add a new line
      }

      // --------------------------------------------------------------------------
      // Merge CLI and PROMPT values (PROMPT values Override CLI values)
      // --------------------------------------------------------------------------

      const directory = promptDirectory ?? cliDirectory;
      const debug = cliDebug;
      const force = cliForce;
      const typescript = promptTypescript ?? cliTypescript;
      const yes = cliYes;
      const skipVsc = promptSkipVsc ?? cliSkipVsc;
      const skipGit = cliSkipGit;
      const skipInstall = cliSkipInstall;

      // --------------------------------------------------------------------------
      // Declarations
      // --------------------------------------------------------------------------

      const logger = createLogger({ debug });
      const spinner = createSpinner();

      // --------------------------------------------------------------------------
      // Debug
      // --------------------------------------------------------------------------

      logger
        .debug('cli directory:', cliDirectory)
        .debug('cli options:', cliOptions)
        .eol()
        .debug('prompt directory:', promptDirectory)
        .debug('prompt typescript:', promptTypescript)
        .debug('prompt skip vsc:', promptSkipVsc)
        .eol()
        .debug('merged directory:', directory)
        .debug('merged debug:', debug)
        .debug('merged force:', force)
        .debug('merged typescript:', typescript)
        .debug('merged yes:', yes)
        .debug('merged skip vsc:', skipVsc)
        .debug('merged skip git:', skipGit)
        .debug('merged skip install:', skipInstall)
        .eol();

      // --------------------------------------------------------------------------
      // CLI Animation
      // --------------------------------------------------------------------------

      spinner.start(bananass('Creating a new Bananass framework project...', true));

      // --------------------------------------------------------------------------
      // Copy Files
      // --------------------------------------------------------------------------

      spinner.start(bananass('Copying files...', true));

      try {
        await cp(
          new URL(
            `../templates/${typescript ? 'typescript' : 'javascript'}`,
            import.meta.url,
          ),
          directory,
          {
            errorOnExist: true,
            recursive: true,
            force,
            filter: src => !(skipVsc && src.includes('.vscode')), // Exclude `.vscode` folder if `skipVsc` is `true`.
          },
        );
      } catch ({ message }) {
        spinner.error(error('Failed to copy files'));

        throw new Error(error(message, true));
      }

      // --------------------------------------------------------------------------
      // Initialize Git Repository
      // --------------------------------------------------------------------------

      if (!skipGit) {
        spinner.start(bananass('Initializing git repository...', true));

        try {
          await new Promise((res, rej) => {
            const gitInit = spawn('git', ['init'], {
              cwd: directory,
              shell: true, // Required for Windows
            });

            gitInit.on('close', code => {
              if (code === 0) {
                res();
              } else {
                rej(new Error(`git init failed with exit code ${code}`));
              }
            });

            gitInit.on('error', err => {
              rej(err);
            });
          });
        } catch ({ message }) {
          spinner.error(error('Failed to initialize git repository'));

          throw new Error(error(message, true));
        }
      }

      // --------------------------------------------------------------------------
      // Install Packages
      // --------------------------------------------------------------------------

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

      // --------------------------------------------------------------------------
      // Install VS Code Extensions
      // --------------------------------------------------------------------------

      // TODO

      // --------------------------------------------------------------------------
      // Exit
      // --------------------------------------------------------------------------

      spinner.success(success('Successfully created a new Bananass framework project!'));
    },
  )
  .parse();

// const handleSigTerm = () => process.exit(0)

// process.on('SIGINT', handleSigTerm)
// process.on('SIGTERM', handleSigTerm)
