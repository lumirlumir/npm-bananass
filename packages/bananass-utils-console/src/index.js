/**
 * @fileoverview Entry file for the `bananass-utils-console` package.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const createSpinner = require('./spinner');
const console = require('./console');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  createSpinner,
  console,
};
