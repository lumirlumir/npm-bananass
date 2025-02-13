/**
 * @fileoverview Asynchronously open the official documentation homepage.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';
import open, { apps } from 'open';

import { ConfigObject } from '../../core/structs/index.js';
import { URL_HOMEPAGE } from '../../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../core/types.js').ConfigObject} ConfigObject
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously open the official documentation homepage.
 *
 * @param {ConfigObject} configObject
 * @async
 */
export default async function home(configObject) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

  ConfigObject.assert(configObject);

  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const {
    browser: { browser, secretMode },
    console,
  } = configObject;

  const logger = createLogger(console);
  const spinner = createSpinner({ color: 'yellow' });

  // ------------------------------------------------------------------------------
  // CLI Animation
  // ------------------------------------------------------------------------------

  logger.log(() => spinner.start(bananass('Opening homepage...')));

  // ------------------------------------------------------------------------------
  // Open
  // ------------------------------------------------------------------------------

  try {
    await open(URL_HOMEPAGE, {
      app: {
        name: apps[browser === 'default' ? 'browser' : browser], // TODO: Reduce redundancy
        arguments: secretMode ? ['--incognito', '--private-window', '--inPrivate'] : [],
      },
    });

    logger.log(() => spinner.success(success('Opened homepage.', false)));
  } catch ({ message }) {
    logger.log(() => spinner.error());

    throw new Error(error(`Failed to open homepage - ${message}`));
  }
}
