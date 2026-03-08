/**
 * @fileoverview Entry file for the `eslint-config-bananass` package.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import js from './configs/js.js';
import jsxReact from './configs/jsx-react.js';
import jsxNext from './configs/jsx-next.js';
import ts from './configs/ts.js';
import tsxReact from './configs/tsx-react.js';
import tsxNext from './configs/tsx-next.js';
import json from './configs/json.js';
import jsonc from './configs/jsonc.js';
import json5 from './configs/json5.js';
import pkg from '../package.json' with { type: 'json' };

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * @import { ESLint } from 'eslint'
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {ESLint.Plugin} */
export default {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },

  configs: {
    js,
    ts,
    jsxReact,
    jsxNext,
    tsxReact,
    tsxNext,
    json,
    jsonc,
    json5,
  },
};
