/**
 * @fileoverview Type test for `index.ts`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import config from './index.ts';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region config

config.configs.js.name satisfies 'bananass/js';
config.configs.ts.name satisfies 'bananass/ts';
config.configs.jsxReact.name satisfies 'bananass/jsx-react';
config.configs.jsxNext.name satisfies 'bananass/jsx-next';
config.configs.tsxReact.name satisfies 'bananass/tsx-react';
config.configs.tsxNext.name satisfies 'bananass/tsx-next';
config.configs.json.name satisfies 'bananass/json';
config.configs.jsonc.name satisfies 'bananass/jsonc';
config.configs.json5.name satisfies 'bananass/json5';

// #endregion config
// --------------------------------------------------------------------------------
