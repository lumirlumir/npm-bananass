/**
 * @fileoverview `ConfigObjectInfo` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { object } from 'superstruct';

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
const ConfigObjectInfo = object({});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectInfo;
