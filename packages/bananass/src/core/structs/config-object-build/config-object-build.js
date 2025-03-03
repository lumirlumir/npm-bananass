/**
 * @fileoverview `ConfigObjectBuild` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { boolean, enums, object, optional } from 'superstruct';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').ConfigObjectBuild} ConfigObjectBuild
 * @typedef {import('superstruct').Struct<ConfigObjectBuild>} ConfigObjectBuildStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `ConfigObjectBuild` type struct.
 *
 * @type {ConfigObjectBuildStruct}
 */
const ConfigObjectBuild = object({
  clean: optional(boolean()),
  templateType: optional(enums(['fs', 'rl'])),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectBuild;
