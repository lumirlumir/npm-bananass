/**
 * @fileoverview Entry file for the `eslint-config-bananass` package.
 * @module eslint-config-bananass
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const js = require('./configs/js');
const jsxReact = require('./configs/jsx-react');
const jsxNext = require('./configs/jsx-next');

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
      react: jsxReact,
      next: jsxNext,
    },
    tsx: {
      react: '...', // TODO
      next: '...', // TODO
    },
  },
};
