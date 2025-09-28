/**
 * @fileoverview Asynchronously run generated testcases and compare them with the expected outputs.
 * Note that `Array.prototype.map` is stable, meaning that the order of the elements in the original array is preserved.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { resolve } from 'node:path';
import { styleText } from 'node:util';

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';
import {
  bulletIcon as BIcon,
  boxDrawingsLightHorizontalIcon as BDLHIcon,
} from 'bananass-utils-console/icons';
import { createJiti } from 'jiti';

import { defaultConfigObject as dco } from '../../core/conf/index.js';
import { webpackResolve } from '../../core/fs/index.js';
import {
  problems as problemsSchema,
  configObject as configObjectSchema,
} from '../../core/types/index.js';

import testRunner from './test-runner.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Problems, ConfigObject, SolutionWithTestcases } from '../../core/types/index.js';
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
  // Declarations
  // ------------------------------------------------------------------------------

  const sanitizedProblems = problemsSchema.parse(problems);
  const sanitizedConfigObject = configObjectSchema.parse(configObject);

  const jiti = createJiti(import.meta.url);

  const {
    cwd = dco.cwd,
    entryDir = dco.entryDir,
    console: {
      debug = dco.console.debug, // (This comment was used for code formatting.)
      quiet = dco.console.quiet,
    } = dco.console,
  } = sanitizedConfigObject;
  const { columns } = process.stdout;

  const resolvedEntryDir = resolve(cwd, entryDir);
  let /** @type {string[]} */ resolvedEntryFiles;
  let /** @type {SolutionWithTestcases[]} */ importedModules;
  let /** @type {ReturnType<testRunner>[]} */ testResults;

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
      sanitizedProblems.map(
        problem =>
          new Promise((res, rej) => {
            webpackResolve(resolvedEntryDir, `./${problem}`, (err, result) =>
              err ? rej(err) : res(result),
            );
          }),
      ),
    );
  } catch (err) {
    logger.log(() => spinner.error(error('Failed to resolve entry files')));

    const message = err instanceof Error ? err.message : String(err);
    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Import Modules
  // ------------------------------------------------------------------------------

  try {
    // @ts-expect-error Types cannot be matched in JavaScript.
    importedModules = await Promise.all(
      resolvedEntryFiles.map(resolvedEntryFile =>
        jiti.import(resolvedEntryFile, { default: true }),
      ),
    );
  } catch (err) {
    logger.log(() => spinner.error(error('Failed to import modules')));

    const message = err instanceof Error ? err.message : String(err);
    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Run Tests
  // ------------------------------------------------------------------------------

  try {
    testResults = importedModules.map(importedModule => testRunner(importedModule));
  } catch (err) {
    logger.log(() => spinner.error(error('Failed to run tests')));

    const message = err instanceof Error ? err.message : String(err);
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
    logger.log(
      styleText(['cyan', 'bold'], `PROBLEM:`),
      styleText(['green', 'bold'], sanitizedProblems[idx]),
    );

    results.forEach(({ input, outputExpected, outputActual }, index, thisArg) => {
      logger
        .log(BDLHIcon.repeat(columns))
        .log(
          BIcon,
          styleText(['cyan', 'bold'], `TESTCASE`),
          styleText(['cyan', 'bold', 'underline'], `#${index + 1}`),
          styleText(['green', 'bold'], 'INPUT'),
        )
        .log(styleText(['gray', 'dim'], '-'.repeat(columns)))
        .log(styleText(['magenta', 'bold'], 'Your Input:'))
        .log(input)
        .log(styleText(['gray', 'dim'], BDLHIcon.repeat(columns)))
        .log(
          BIcon,
          styleText(['cyan', 'bold'], `TESTCASE`),
          styleText(['cyan', 'bold', 'underline'], `#${index + 1}`),
          styleText(['green', 'bold'], 'OUTPUT'),
        )
        .log(styleText(['gray', 'dim'], '-'.repeat(columns)))
        .log(styleText(['magenta', 'bold'], 'Expected Output:'))
        .log(outputExpected)
        .log(styleText(['magenta', 'bold'], 'Your Output:'))
        .log(outputActual);

      if (thisArg.length === index + 1) {
        logger.log(BDLHIcon.repeat(columns));
      }
    });

    results.forEach(({ isTestPassed }, index) => {
      logger.log(
        BIcon,
        styleText(['cyan', 'bold'], `TESTCASE`),
        styleText(['cyan', 'bold', 'underline'], `#${index + 1}`),
        isTestPassed
          ? styleText(['green', 'bold'], 'PASSED')
          : styleText(['red', 'bold'], 'FAILED'),
      );
    });
  });

  // ------------------------------------------------------------------------------
  // Exit with Code
  // ------------------------------------------------------------------------------

  if (hasFailedTests) process.exit(1);
}
