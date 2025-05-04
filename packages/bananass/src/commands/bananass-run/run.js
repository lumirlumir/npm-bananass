/**
 * @fileoverview Asynchronously run generated testcases and compare them with the expected outputs.
 *
 * Note that `Array.prototype.map` is stable, meaning that the order of the elements in the original array is preserved.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { resolve } from 'node:path';

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';

import chalk from 'chalk';
import enhancedResolve from 'enhanced-resolve';
import { createJiti } from 'jiti';

import { defaultConfigObject as dco } from '../../core/conf/index.js';
import { Problems, ConfigObject } from '../../core/structs/index.js';
import { SUPPORTED_SOLUTION_FILE_EXTENSIONS } from '../../core/constants.js';

import testRunner from './test-runner.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../core/types.js').Problems} Problems
 * @typedef {import('../../core/types.js').ConfigObject} ConfigObject
 * @typedef {import('../../core/types.js').SolutionWithTestcases} SolutionWithTestcases
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously run generated testcases and compare them with the expected outputs.
 * @param {Problems} problems
 * @param {ConfigObject} [configObject = dco]
 * @async
 */
export default async function run(problems, configObject = dco) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

  Problems.assert(problems);
  ConfigObject.assert(configObject);

  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const webpackResolve = enhancedResolve.create({
    extensions: SUPPORTED_SOLUTION_FILE_EXTENSIONS,
  });
  const jiti = createJiti(import.meta.url);

  const {
    cwd = dco.cwd,
    entryDir = dco.entryDir,
    console: {
      debug = dco.console.debug, // (This comment was used for code formatting.)
      quiet = dco.console.quiet,
    } = dco.console,
  } = configObject;

  const resolvedEntryDir = resolve(cwd, entryDir);
  let /** @type {string[]} */ resolvedEntryFiles;
  let /** @type {SolutionWithTestcases[]} */ importedModules;
  let testResults;

  const logger = createLogger({ debug, quiet, textPrefix: false });
  const spinner = createSpinner();

  // ------------------------------------------------------------------------------
  // CLI Animation
  // ------------------------------------------------------------------------------

  logger.log(() => spinner.start(bananass('Bananass run is running...', true)));

  // ------------------------------------------------------------------------------
  // Resolve Entry Files
  // ------------------------------------------------------------------------------

  try {
    resolvedEntryFiles = await Promise.all(
      problems.map(
        problem =>
          new Promise((res, rej) => {
            webpackResolve(resolvedEntryDir, `./${problem}`, (err, result) =>
              err ? rej(err) : res(result),
            );
          }),
      ),
    );
  } catch ({ message }) {
    logger.log(() => spinner.error(error('Failed to resolve entry files')));

    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Import Modules
  // ------------------------------------------------------------------------------

  try {
    // @ts-expect-error -- TODO: Delete it.
    importedModules = await Promise.all(
      resolvedEntryFiles.map(resolvedEntryFile =>
        jiti.import(resolvedEntryFile, { default: true }),
      ),
    );
  } catch ({ message }) {
    logger.log(() => spinner.error(error('Failed to import modules')));

    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Run Tests
  // ------------------------------------------------------------------------------

  try {
    testResults = importedModules.map(importedModule => testRunner(importedModule));
  } catch ({ message }) {
    logger.log(() => spinner.error(error('Failed to run tests')));

    throw new Error(error(message, true));
  }

  const hasFailedTests = testResults.some(({ isAllTestsPassed }) => !isAllTestsPassed);

  // ------------------------------------------------------------------------------
  // Log Results
  // ------------------------------------------------------------------------------

  logger
    .log(() =>
      hasFailedTests
        ? spinner.error(error('Bananass run completed with errors due to failed tests'))
        : spinner.success(success('Bananass run completed successfully')),
    )
    .eol();

  testResults.forEach(({ results }, idx) => {
    logger.log(chalk.cyan.bold(`PROBLEM:`, chalk.green.bold(problems[idx])));

    results.forEach(({ input, outputExpected, outputActual }, index, thisArg) => {
      logger
        .log('\u2500'.repeat(process.stdout.columns))
        .log(
          '\u2022',
          chalk.cyan.bold(`TESTCASE`, chalk.underline(`#${index + 1}`)),
          chalk.green.bold('INPUT'),
        )
        .log(chalk.gray.dim('-'.repeat(process.stdout.columns)))
        .log(chalk.magenta.bold('Your Input:'))
        .log(input)
        .log(chalk.gray.dim('\u2500'.repeat(process.stdout.columns)))
        .log(
          '\u2022',
          chalk.cyan.bold(`TESTCASE`, chalk.underline(`#${index + 1}`)),
          chalk.greenBright.bold('OUTPUT'),
        )
        .log(chalk.gray.dim('-'.repeat(process.stdout.columns)))
        .log(chalk.magenta.bold('Expected Output:'))
        .log(outputExpected)
        .log(chalk.magenta.bold('Your Output:'))
        .log(outputActual);

      if (thisArg.length === index + 1) {
        logger.log('\u2500'.repeat(process.stdout.columns));
      }
    });

    results.forEach(({ isTestPassed }, index) => {
      logger.log(
        '\u2022',
        chalk.cyan.bold(`TESTCASE`, chalk.underline(`#${index + 1}`)),
        isTestPassed ? chalk.green.bold('PASSED') : chalk.red.bold('FAILED'),
      );
    });
  });

  // U+2015: "Figure Dash" (―)
  // U+2022: "Bullet" (•)
  // U+2500: "Box Drawings Light Horizontal" (━)
  // U+2501: "Box Drawings Heavy Horizontal" (━)

  // ------------------------------------------------------------------------------
  // Exit with Code
  // ------------------------------------------------------------------------------

  if (hasFailedTests) process.exit(1);
}
