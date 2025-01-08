/**
 * @fileoverview Entry file for the `eslint-config-bananass` package.
 * @module eslint-config-bananass
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
