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
 * @import { ConfigObjectBrowser } from '../../types.js';
 * @import { Struct } from 'superstruct';
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `ConfigObjectBrowser` type struct.
 * @type {Struct<ConfigObjectBrowser>}
 */
const ConfigObjectBrowser = object({
  browser: optional(enums(['chrome', 'edge', 'firefox', 'brave', 'default'])),
  secret: optional(boolean()),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectBrowser;
