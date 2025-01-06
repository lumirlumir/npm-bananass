/**
 * @fileoverview Main package entrypoint.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const recommended = require('./configs/recommended');
const { name, version } = require('../package.json');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  meta: {
    name,
    version,
  },
  configs: {
    recommended,
  },
};
