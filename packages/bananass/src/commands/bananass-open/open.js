/**
 * @fileoverview Asynchronously open the given baekjoon problem numbers in a browser
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';
import open, { apps } from 'open';

import { Problems, ConfigObject } from '../../core/structs/index.js';
import { URL_BOJ_PROBLEM } from '../../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../core/types.js').Problems} Problems
 * @typedef {import('../../core/types.js').ConfigObject} ConfigObject
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously open the given baekjoon problem numbers in a browser
 *
 * @param {Problems} problems
 * @param {ConfigObject} configObject
 * @async
 */
export default async function home(problems, configObject) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

  Problems.assert(problems);
  ConfigObject.assert(configObject);

  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const {
    browser: { browser, secretMode },
    console,
  } = configObject;

  const logger = createLogger(console);
  const spinner = createSpinner();

  // ------------------------------------------------------------------------------
  // CLI Animation
  // ------------------------------------------------------------------------------

  logger.log(() => spinner.start(bananass('Opening in a browser...', true)));

  // ------------------------------------------------------------------------------
  // Open
  // ------------------------------------------------------------------------------

  try {
    await Promise.all(
      problems.map(problem =>
        open(URL_BOJ_PROBLEM(problem), {
          app: {
            name: apps[browser === 'default' ? 'browser' : browser], // TODO: Reduce redundancy
            arguments: secretMode
              ? ['--incognito', '--private-window', '--inPrivate']
              : [],
          },
        }),
      ),
    );
  } catch ({ message }) {
    logger.log(() => spinner.error(error('Failed to open homepage')));

    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Exit
  // ------------------------------------------------------------------------------

  logger.log(() => spinner.success(success('Opened in a browser')));
}
