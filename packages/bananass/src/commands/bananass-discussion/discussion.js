/**
 * @fileoverview Asynchronously open the github discussions in a browser.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, error, success } from 'bananass-utils-console/theme';
import open, { apps } from 'open';

import { defaultConfigObject as dco } from '../../core/conf/index.js';
import { configObject as configObjectSchema } from '../../core/types/index.js';
import { URL_GITHUB_DISCUSSIONS } from '../../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { ConfigObject } from '../../core/types/index.js';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously open the github discussions in a browser.
 * @param {ConfigObject} [configObject = dco]
 * @async
 */
export default async function discussion(configObject = dco) {
  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const sanitizedConfigObject = configObjectSchema.parse(configObject);

  const {
    browser: { browser = dco.browser.browser, secret = dco.browser.secret } = dco.browser,
    console: { debug = dco.console.debug, quiet = dco.console.quiet } = dco.console,
  } = sanitizedConfigObject;

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
    await open(URL_GITHUB_DISCUSSIONS, {
      app: {
        name: apps[browser === 'default' ? 'browser' : browser], // TODO: Reduce redundancy
        arguments: secret ? ['--incognito', '--private-window', '--inPrivate'] : [],
      },
    });
  } catch (err) {
    logger.log(() => spinner.error(error('Failed to open homepage')));

    const message = err instanceof Error ? err.message : String(err);
    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Exit
  // ------------------------------------------------------------------------------

  logger.log(() => spinner.success(success('Opened in a browser')));
}
