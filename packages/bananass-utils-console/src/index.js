/**
 * @fileoverview Entry file for the `bananass-utils-console` package.
 * @module bananass-utils-console
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const createLogger = require('./logger');
const createSpinner = require('./spinner');
const theme = require('./theme');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  createLogger,
  createSpinner,
  theme,
};
