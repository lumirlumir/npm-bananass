/**
 * @fileoverview `ConfigObjectInfo` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { boolean, object } from 'superstruct';

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
  all: boolean(),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectInfo;
