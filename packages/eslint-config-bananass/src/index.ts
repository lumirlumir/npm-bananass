/**
 * @fileoverview Entry file for the `eslint-config-bananass` package.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import type { ESLint } from 'eslint';
import js from './configs/js.ts';
import jsxReact from './configs/jsx-react.ts';
import jsxNext from './configs/jsx-next.ts';
import ts from './configs/ts.ts';
import tsxReact from './configs/tsx-react.ts';
import tsxNext from './configs/tsx-next.ts';
import json from './configs/json.ts';
import jsonc from './configs/jsonc.ts';
import json5 from './configs/json5.ts';
import pkg from '../package.json' with { type: 'json' };

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

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
} as const satisfies ESLint.Plugin;
