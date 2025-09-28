/**
 * @fileoverview `ConfigObjectConsole` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { boolean, object, optional } from 'superstruct';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { ConfigObjectConsole } from '../../types/index.js';
 * @import { Struct } from 'superstruct';
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `ConfigObjectConsole` type struct.
 * @type {Struct<ConfigObjectConsole>}
 */
const ConfigObjectConsole = object({
  debug: optional(boolean()),
  quiet: optional(boolean()),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectConsole;
