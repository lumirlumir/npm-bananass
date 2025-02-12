/**
 * @fileoverview `ConfigObjectBrowser` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { boolean, enums, object } from 'superstruct';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').ConfigObjectBrowser} ConfigObjectBrowser
 * @typedef {import('superstruct').Struct<ConfigObjectBrowser>} ConfigObjectBrowserStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `ConfigObjectBrowser` type struct.
 *
 * @type {ConfigObjectBrowserStruct}
 */
const ConfigObjectBrowser = object({
  browser: enums(['chrome', 'edge', 'firefox', 'default']),
  private: boolean(),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectBrowser;
