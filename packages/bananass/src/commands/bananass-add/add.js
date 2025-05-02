/**
 * @fileoverview Asynchronously add new Baekjoon problems to the workspace
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';

import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defaultConfigObject as dco } from '../../core/conf/index.js';
import { Problems, ConfigObject } from '../../core/structs/index.js';
import parsers from './parsers.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../core/types.js').Problem} Problem
 * @typedef {import('../../core/types.js').Testcases} Testcases
 * @typedef {import('../../core/types.js').ConfigObject} ConfigObject
 *
 * @typedef {'cjs' | 'mjs' | 'cts' | 'mts'} ModuleFormat
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Resolves the module format of a bananass config file in the given directory.
 *
 * This function looks for a `bananass.config.{cjs|mjs|cts|mts}` file in the specified
 * current working directory and returns the corresponding module format based on the file extension.
 *
 * Search order: `cjs`, `mjs`, `cts`, `mts`. The first match will be returned.
 *
 * Throws an error if none of the expected config files are found.
 *
 * @param {string} cwd - The absolute path to the directory where the config file is expected to exist.
 * @returns {ModuleFormat} The detected module format based on the config file extension.
 * @throws {Error} If no config file is found in the given directory.
 */
function resolveModuleFormat(cwd) {
  /** @type {Array<ModuleFormat>} */
  const extensions = ['cjs', 'mjs', 'cts', 'mts'];

  for (const ext of extensions) {
    const configPath = resolve(cwd, `bananass.config.${ext}`);
    if (existsSync(configPath)) {
      return ext;
    }
  }

  throw new Error(
    `Cannot determine module format: no 'bananass.config.{cjs|mjs|cts|mts}' file found in ${cwd}`,
  );
}

/**
 * Creates a file for a given problem with the resolved module format and test cases.
 * If the entry directory do not exist, they will be created.
 *
 * @param {Problem} problem - The ID of the problem.
 * @param {Testcases} testcases - The list of test cases for the problem.
 * @param {string} cwd - Current working directory.
 * @param {string} entryDir - Entry directory name.
 * @param {ModuleFormat} moduleFormat - The module format ('cjs', 'mjs', 'cts', or 'mts').
 * @throws {Error} If the file creation fails.
 */
async function createProblemFile(problem, testcases, cwd, entryDir, moduleFormat) {
  const dirPath = join(cwd, entryDir);
  await mkdir(dirPath, { recursive: true });

  const filePath = join(dirPath, `${problem}.${moduleFormat}`);

  const template = await readFile(
    resolve(__dirname, `./templates/solution.${moduleFormat}.txt`),
    'utf-8',
  );
  const testcaseFilledTemplate = template.replace(
    /\/\* TESTCASE_PLACEHOLDER \*\//,
    testcases
      .map(tc => {
        const input = JSON.stringify(tc.input);
        const output = JSON.stringify(tc.output);
        return `\t{\n\t\tinput: ${input},\n\t\toutput: ${output},\n\t}`;
      })
      .join(',\n'),
  );

  try {
    await writeFile(filePath, testcaseFilledTemplate);
  } catch (err) {
    throw new Error(`Failed to create file for problem ${problem}: ${err.message}`);
  }
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously add new problems to the workspace
 * @param {Problems} problems
 * @param {ConfigObject} [configObject = dco]
 * @async
 */
export default async function add(problems, configObject = dco) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

  Problems.assert(problems);
  ConfigObject.assert(configObject);

  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const {
    cwd = dco.cwd,
    entryDir = dco.entryDir,
    console: { debug = dco.console.debug, quiet = dco.console.quiet } = dco.console,
  } = configObject;

  const logger = createLogger({ debug, quiet });
  const spinner = createSpinner();

  // ------------------------------------------------------------------------------
  // CLI Animation
  // ------------------------------------------------------------------------------

  logger.log(() => spinner.start(bananass('Adding problems...', true)));

  // ------------------------------------------------------------------------------
  // Add Problems
  // ------------------------------------------------------------------------------

  try {
    const moduleFormat = resolveModuleFormat(configObject.cwd);
    await Promise.all(
      problems.map(async problem => {
        const testcases = await parsers.baekjoon(problem);
        await createProblemFile(problem, testcases, cwd, entryDir, moduleFormat);
      }),
    );
  } catch (err) {
    logger.log(() => spinner.error(error('Failed to add problems')));

    const message = err.message || String(err);
    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Exit
  // ------------------------------------------------------------------------------

  logger.log(() => spinner.success(success('Problems added successfully')));
}
