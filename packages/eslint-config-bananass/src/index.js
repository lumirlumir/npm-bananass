/**
 * @fileoverview Entry file for the `eslint-config-bananass` package.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { createRequire } from 'node:module';

import js from './configs/js.js';
import jsxReact from './configs/jsx-react.js';
import jsxNext from './configs/jsx-next.js';
import ts from './configs/ts.js';
import tsxReact from './configs/tsx-react.js';
import tsxNext from './configs/tsx-next.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {object} PackageJson
 * @property {string} name
 * @property {string} version
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

/** @type {PackageJson} */
const { name, version } = createRequire(import.meta.url)('../package.json');

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").ESLint.Plugin} */
export default {
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
