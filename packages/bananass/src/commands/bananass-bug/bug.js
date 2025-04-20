/**
 * @fileoverview Asynchronously open the github issues in a browser.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';
import open, { apps } from 'open';

import { defaultConfigObject as dco } from '../../core/conf/index.js';
import { ConfigObject } from '../../core/structs/index.js';
import { URL_GITHUB_ISSUES } from '../../core/constants.js';

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
 * Asynchronously open the github issues in a browser.
 * @param {ConfigObject} [configObject = dco]
 * @async
 */
export default async function bug(configObject = dco) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

  ConfigObject.assert(configObject);

  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const {
    browser: {
      browser = dco.browser.browser,
      secretMode = dco.browser.secretMode,
    } = dco.browser,
    console: {
      debug = dco.console.debug, // (This comment was used for code formatting.)
      quiet = dco.console.quiet,
    } = dco.console,
  } = configObject;

  const logger = createLogger({ debug, quiet });
  const spinner = createSpinner();

  // ------------------------------------------------------------------------------
  // CLI Animation
  // ------------------------------------------------------------------------------

  logger.log(() => spinner.start(bananass('Opening in a browser...', true)));

  // ------------------------------------------------------------------------------
  // Open
  // ------------------------------------------------------------------------------

  try {
    await open(URL_GITHUB_ISSUES, {
      app: {
        name: apps[browser === 'default' ? 'browser' : browser], // TODO: Reduce redundancy
        arguments: secretMode ? ['--incognito', '--private-window', '--inPrivate'] : [],
      },
    });
  } catch ({ message }) {
    logger.log(() => spinner.error(error('Failed to open homepage')));

    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Exit
  // ------------------------------------------------------------------------------

  logger.log(() => spinner.success(success('Opened in a browser')));
}
