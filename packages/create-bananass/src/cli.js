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
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';
import { parseArgs } from 'node:util';

import isInteractive from 'bananass-utils-console/is-interactive';
import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';
import { consola } from 'consola';

import { directoryDefault, options, version, help } from './configs.js';

// --------------------------------------------------------------------------------
// Parse Arguments
// --------------------------------------------------------------------------------

const { values, positionals } = parseArgs({
  args: process.argv.slice(2),
  options,
  strict: true,
  allowPositionals: true,
  allowNegative: false,
  tokens: false,
});

const cliDirectory = positionals[0] ?? directoryDefault;
const cliOptions = values;

// --------------------------------------------------------------------------
// CLI
// --------------------------------------------------------------------------

const {
  force: cliForce,
  yes: cliYes,
  cjs: cliCjs,
  typescript: cliTypescript,
  'skip-vsc': cliSkipVsc,
  'skip-git': cliSkipGit,
  'skip-install': cliSkipInstall,
  debug: cliDebug,
  quiet: cliQuiet,
  version: cliVersion,
  help: cliHelp,
} = cliOptions;

// --------------------------------------------------------------------------
// Version and Help
// --------------------------------------------------------------------------

if (cliVersion) {
  console.log(version); // eslint-disable-line no-console -- Version output
  process.exit(0);
}

if (cliHelp) {
  console.log(help); // eslint-disable-line no-console -- Help message
  process.exit(0);
}

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

  promptCjs = await consola.prompt('Would you like to use CommonJS module system?', {
    initial: false,
    type: 'confirm',
    cancel: 'reject',
  });

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
const force = cliForce;
const yes = cliYes;
const cjs = promptCjs ?? cliCjs;
const typescript = promptTypescript ?? cliTypescript;
const skipVsc = promptSkipVsc ?? cliSkipVsc;
const skipGit = promptSkipGit ?? cliSkipGit;
const skipInstall = promptSkipInstall ?? cliSkipInstall;
const debug = cliDebug;
const quiet = cliQuiet;

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
  .debug('merged force:', force)
  .debug('merged yes:', yes)
  .debug('merged cjs:', cjs)
  .debug('merged typescript:', typescript)
  .debug('merged skip vsc:', skipVsc)
  .debug('merged skip git:', skipGit)
  .debug('merged skip install:', skipInstall)
  .debug('merged debug:', debug)
  .debug('merged quiet:', quiet)
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
      `../templates/${typescript ? 'typescript' : 'javascript'}-${cjs ? 'cjs' : 'esm'}`,
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
            const installExtension = spawn('code', ['--install-extension', extension], {
              cwd: directory,
              shell: true, // Required for Windows
            });

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
  spinner.success(success('Successfully created a new Bananass framework project!')),
);
