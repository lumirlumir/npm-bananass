/**
 * @fileoverview Entry file for the `eslint-config-bananass` package.
 * @module eslint-config-bananass
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const js = require('./configs/js');
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
    js,
    ts: '...', // TODO
    jsx: {
      react: '...', // TODO
      next: '...', // TODO
    },
    tsx: {
      react: '...', // TODO
      next: '...', // TODO
    },
  },
};
