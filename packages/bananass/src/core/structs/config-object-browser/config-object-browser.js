/**
 * @fileoverview `ConfigObjectBrowser` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { boolean, enums, object, optional } from 'superstruct';

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
  browser: optional(enums(['chrome', 'edge', 'firefox', 'default'])),
  secret: optional(boolean()),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectBrowser;
