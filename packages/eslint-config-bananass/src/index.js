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
const ts = require('./configs/ts');
const tsxReact = require('./configs/tsx-react');
const tsxNext = require('./configs/tsx-next');

const { name, version } = require('../package.json');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

/** @type {import("eslint").ESLint.Plugin} */
module.exports = {
  meta: {
    name,
    version,
  },

  configs: {
    js,
    ts,
    jsxReact,
    jsxNext,
    tsxReact,
    tsxNext,
  },
};
