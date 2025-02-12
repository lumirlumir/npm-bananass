/**
 * @fileoverview `ConfigObjectConsole` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { boolean, object } from 'superstruct';

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
  debug: boolean(),
  quiet: boolean(),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectConsole;
