#!/usr/bin/env node

/**
 * @fileoverview Entry file for the `npx create-bananass` CLI command. See the `bin` field in `../package.json`.
 */

/* eslint-disable no-console -- CLI script */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { cp } from 'node:fs/promises';

import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';
// import { program } from 'commander';
import { consola } from 'consola';

// --------------------------------------------------------------------------------
// Inquirer
// --------------------------------------------------------------------------------

/** @type {string} */
const language = await consola.prompt('which language do you want to use?', {
  type: 'select',
  options: ['JavaScript', 'TypeScript'],
});

/** @type {boolean} */
const isVSC = await consola.prompt('Do you use Visual Studio Code?', {
  type: 'confirm',
});

console.log(); // Add a new line

// --------------------------------------------------------------------------------
// CLI Animation
// --------------------------------------------------------------------------------

const spinner = createSpinner().start(
  bananass('Creating a new Bananass framework project...', true),
);

// --------------------------------------------------------------------------------
// Copy Files
// --------------------------------------------------------------------------------

try {
  await cp(new URL(`../templates/${language}`, import.meta.url), 'dest', {
    // TODO: Change the destination path
    errorOnExist: true,
    recursive: true,
    force: false, // TODO: Get a option from CLI.

    filter: src => isVSC || !src.includes('.vscode'), // Exclude `.vscode` folder if `isVSC` is `false`.
  });
} catch ({ message }) {
  spinner.error(error('Failed to copy files'));

  throw new Error(error(message, true));
}

// --------------------------------------------------------------------------------
// Exit
// --------------------------------------------------------------------------------

spinner.success(success('Successfully created a new Bananass framework project!'));
