/**
 * @fileoverview Asynchronously add new Baekjoon problems to the workspace
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';

import { defaultConfigObject as dco } from '../../core/conf/index.js';
import { Problems, ConfigObject } from '../../core/structs/index.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../core/types.js').Problem} Problem
 * @typedef {import('../../core/types.js').ConfigObject} ConfigObject
 */

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
    // TODO: Implement problem addition logic here
  } catch ({ message }) {
    logger.log(() => spinner.error(error('Failed to add problems')));

    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Exit
  // ------------------------------------------------------------------------------

  logger.log(() => spinner.success(success('Problems added successfully')));
}
