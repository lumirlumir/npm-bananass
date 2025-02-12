/**
 * @fileoverview `ConfigObjectLint` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { object } from 'superstruct';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').ConfigObjectLint} ConfigObjectLint
 * @typedef {import('superstruct').Struct<ConfigObjectLint>} ConfigObjectLintStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `ConfigObjectLint` type struct.
 *
 * @type {ConfigObjectLintStruct}
 */
const ConfigObjectLint = object({});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectLint;
