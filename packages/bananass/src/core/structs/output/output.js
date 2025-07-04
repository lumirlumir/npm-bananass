/**
 * @fileoverview `Output` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { boolean, number, string, union } from 'superstruct';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Output } from '../../types.js';
 * @import { Struct } from 'superstruct';
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `Output` type struct.
 * @type {Struct<Output>}
 */
const Output = union([string(), number(), boolean()]);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default Output;
