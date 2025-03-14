/**
 * @fileoverview `Input` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { string } from 'superstruct';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').Input} Input
 * @typedef {import('superstruct').Struct<Input>} InputStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `Input` type struct.
 *
 * @type {InputStruct}
 */
const Input = string();

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default Input;
