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
 * @typedef {import('../../types.js').ConfigObjectConsole} ConfigObjectConsole
 * @typedef {import('superstruct').Struct<ConfigObjectConsole>} ConfigObjectConsoleStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `ConfigObjectConsole` type struct.
 *
 * @type {ConfigObjectConsoleStruct}
 */
const ConfigObjectConsole = object({
  debug: optional(boolean()),
  quiet: optional(boolean()),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectConsole;
