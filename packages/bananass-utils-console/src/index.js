/**
 * @fileoverview Entry file for the `bananass-utils-console` package.
 * @module bananass-utils-console
 */

/* eslint-disable import/extensions */ // TODO: Remove this line after developing `eslint-config-bananass` package.

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import createLogger from './logger.js';
import createSpinner from './spinner.js';
import theme from './theme.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export { createLogger, createSpinner, theme };
