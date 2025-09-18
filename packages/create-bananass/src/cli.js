#!/usr/bin/env node

/**
 * @fileoverview Entry file for the `npx create-bananass` CLI command. See the `bin` field in `../package.json`.
 *
 * We receive arguments from both CLI and PROMPT.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { cp, rename } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

import isInteractive from 'bananass-utils-console/is-interactive';
import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';
import { program } from 'commander';
import { consola } from 'consola';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef cliOptions
 * @property {boolean} [debug] Enable debug mode.
 * @property {boolean} [quiet] Enable quiet mode.
 * @property {boolean} [force] Create a project even if the directory is not empty.
 * @property {boolean} [yes] Skip all prompts and accept only CLI options.
 * @property {boolean} [cjs] Initialize as a CommonJS project.
 * @property {boolean} [typescript] Initialize as a typescript project.
 * @property {boolean} [skipVsc] Skip initializing visual studio code.
 * @property {boolean} [skipGit] Skip initializing git.
 * @property {boolean} [skipInstall] Skip installing packages with npm.
 */

// --------------------------------------------------------------------------------
// Declarations
// --------------------------------------------------------------------------------

/** @type {{ description: string, homepage: string, name: string, version: string }} */
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
  .option('-q, --quiet', 'enable quiet mode', false)
  .option('-f, --force', 'create a project even if the directory is not empty', false)
  .option('-y, --yes', 'skip all prompts and accept only cli options', false)
  .option('-c, --cjs', 'initialize as a commonjs project', false)
  .option('-t, --typescript', 'initialize as a typescript project', false)
  .option('--skip-vsc', 'skip initializing visual studio code', false)
  .option('--skip-git', 'skip initializing git', false)
  .option('--skip-install', 'skip installing packages with npm', false)
  .action(
    async (
      /** @type {string} */ cliDirectory,
      /** @type {Required<cliOptions>} */ cliOptions,
    ) => {
      // --------------------------------------------------------------------------
      // CLI
      // --------------------------------------------------------------------------

      const {
        debug: cliDebug,
        quiet: cliQuiet,
        force: cliForce,
        yes: cliYes,
        cjs: cliCjs,
        typescript: cliTypescript,
        skipVsc: cliSkipVsc,
        skipGit: cliSkipGit,
        skipInstall: cliSkipInstall,
      } = cliOptions;

      // --------------------------------------------------------------------------
      // PROMPT
      // --------------------------------------------------------------------------

      let promptDirectory;
      let promptCjs;
      let promptTypescript;
      let promptSkipVsc;
      let promptSkipGit;
      let promptSkipInstall;

      if (isInteractive() && !cliYes) {
        promptDirectory = await consola.prompt(
          'Which directory should this project be located in?',
          {
            placeholder: cliDirectory,
            type: 'text',
            cancel: 'reject',
          },
        );

        promptCjs = await consola.prompt(
          'Would you like to use CommonJS module system?',
          {
            initial: false,
            type: 'confirm',
            cancel: 'reject',
          },
        );

        promptTypescript = await consola.prompt('Would you like to use TypeScript?', {
          initial: false,
          type: 'confirm',
          cancel: 'reject',
        });

        promptSkipVsc = await consola.prompt(
          'Would you like to skip initializing Visual Studio Code configurations?',
          {
            initial: false,
            type: 'confirm',
            cancel: 'reject',
          },
        );

        promptSkipGit = await consola.prompt('Would you like to skip initializing Git?', {
          initial: false,
          type: 'confirm',
          cancel: 'reject',
        });

        promptSkipInstall = await consola.prompt(
          'Would you like to skip installing packages with npm?',
          {
            initial: false,
            type: 'confirm',
            cancel: 'reject',
          },
        );

        console.log(); // eslint-disable-line no-console -- Add a new line.
      }

      // --------------------------------------------------------------------------
      // Merge CLI and PROMPT values (PROMPT values override CLI values)
      // --------------------------------------------------------------------------

      const directory = promptDirectory ?? cliDirectory;
      const debug = cliDebug;
      const quiet = cliQuiet;
      const force = cliForce;
      const yes = cliYes;
      const cjs = promptCjs ?? cliCjs;
      const typescript = promptTypescript ?? cliTypescript;
      const skipVsc = promptSkipVsc ?? cliSkipVsc;
      const skipGit = promptSkipGit ?? cliSkipGit;
      const skipInstall = promptSkipInstall ?? cliSkipInstall;

      // --------------------------------------------------------------------------
      // Declarations
      // --------------------------------------------------------------------------

      const logger = createLogger({ debug, quiet });
      const spinner = createSpinner();

      // --------------------------------------------------------------------------
      // Debug
      // --------------------------------------------------------------------------

      logger
        .debug('cli directory:', cliDirectory)
        .debug('cli options:', cliOptions)
        .eol()
        .debug('prompt directory:', promptDirectory)
        .debug('prompt cjs:', promptCjs)
        .debug('prompt typescript:', promptTypescript)
        .debug('prompt skip vsc:', promptSkipVsc)
        .debug('prompt skip git:', promptSkipGit)
        .debug('prompt skip install:', promptSkipInstall)
        .eol()
        .debug('merged directory:', directory)
        .debug('merged debug:', debug)
        .debug('merged quiet:', quiet)
        .debug('merged force:', force)
        .debug('merged yes:', yes)
        .debug('merged cjs:', cjs)
        .debug('merged typescript:', typescript)
        .debug('merged skip vsc:', skipVsc)
        .debug('merged skip git:', skipGit)
        .debug('merged skip install:', skipInstall)
        .eol();

      // --------------------------------------------------------------------------
      // CLI Animation
      // --------------------------------------------------------------------------

      logger.log(() =>
        spinner.start(bananass('Creating a new Bananass framework project...', true)),
      );

      // --------------------------------------------------------------------------
      // Copy Files: Required
      // --------------------------------------------------------------------------

      logger.log(() => spinner.start(bananass('Copying files...', true)));

      try {
        await cp(
          new URL(
            `../templates/${typescript ? 'typescript' : 'javascript'}-${
              cjs ? 'cjs' : 'esm'
            }`,
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

        await rename(resolve(directory, 'gitignore'), resolve(directory, '.gitignore'));
      } catch (err) {
        logger.log(() => spinner.error(error('Failed to copy files')));

        const message = err instanceof Error ? err.message : String(err);
        throw new Error(error(message, true));
      }

      // --------------------------------------------------------------------------
      // Install Visual Studio Code Extensions: Optional
      // --------------------------------------------------------------------------

      if (!skipVsc) {
        logger.log(() =>
          spinner.start(bananass('Installing Visual Studio Code extensions...', true)),
        );

        try {
          const extensions = ['dbaeumer.vscode-eslint', 'esbenp.prettier-vscode'];

          await Promise.all(
            extensions.map(
              extension =>
                new Promise((res, rej) => {
                  const installExtension = spawn(
                    'code',
                    ['--install-extension', extension],
                    {
                      cwd: directory,
                      shell: true, // Required for Windows
                    },
                  );

                  installExtension.on('close', code => {
                    if (code === 0) {
                      res(undefined);
                    } else {
                      rej(
                        new Error(
                          `code --install-extension ${extension} failed with exit code ${code}`,
                        ),
                      );
                    }
                  });

                  installExtension.on('error', err => {
                    rej(err);
                  });
                }),
            ),
          );
        } catch (err) {
          logger.log(() =>
            spinner.error(error('Failed to install Visual Studio Code extensions')),
          );

          const message = err instanceof Error ? err.message : String(err);
          throw new Error(error(message, true));
        }
      }

      // --------------------------------------------------------------------------
      // Initialize Git: Optional
      // --------------------------------------------------------------------------

      if (!skipGit) {
        logger.log(() => spinner.start(bananass('Initializing git...', true)));

        try {
          await new Promise((res, rej) => {
            const gitInit = spawn('git', ['init'], {
              cwd: directory,
              shell: true, // Required for Windows
            });

            gitInit.on('close', code => {
              if (code === 0) {
                res(undefined);
              } else {
                rej(new Error(`git init failed with exit code ${code}`));
              }
            });

            gitInit.on('error', err => {
              rej(err);
            });
          });
        } catch (err) {
          logger.log(() => spinner.error(error('Failed to initialize git')));

          const message = err instanceof Error ? err.message : String(err);
          throw new Error(error(message, true));
        }
      }

      // --------------------------------------------------------------------------
      // Install Packages: Optional
      // --------------------------------------------------------------------------

      if (!skipInstall) {
        logger.log(() => spinner.start(bananass('Installing packages...', true)));

        try {
          await new Promise((res, rej) => {
            const npmInstall = spawn('npm', ['install'], {
              cwd: directory,
              shell: true, // Required for Windows
            });

            npmInstall.on('close', code => {
              if (code === 0) {
                res(undefined);
              } else {
                rej(new Error(`npm install failed with exit code ${code}`));
              }
            });

            npmInstall.on('error', err => {
              rej(err);
            });
          });
        } catch (err) {
          logger.log(() => spinner.error(error('Failed to install packages')));

          const message = err instanceof Error ? err.message : String(err);
          throw new Error(error(message, true));
        }
      }

      // --------------------------------------------------------------------------
      // Exit
      // --------------------------------------------------------------------------

      logger.log(() =>
        spinner.success(
          success('Successfully created a new Bananass framework project!'),
        ),
      );
    },
  )
  .parse();
