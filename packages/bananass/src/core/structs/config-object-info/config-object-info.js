/**
 * @fileoverview `ConfigObjectInfo` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { boolean, object, optional } from 'superstruct';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').ConfigObjectInfo} ConfigObjectInfo
 * @typedef {import('superstruct').Struct<ConfigObjectInfo>} ConfigObjectInfoStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `ConfigObjectInfo` type struct.
 *
 * @type {ConfigObjectInfoStruct}
 */
const ConfigObjectInfo = object({
  all: optional(boolean()),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectInfo;
