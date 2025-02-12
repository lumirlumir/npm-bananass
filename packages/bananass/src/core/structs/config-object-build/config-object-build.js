/**
 * @fileoverview `ConfigObjectBuild` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { boolean, enums, object } from 'superstruct';

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
  clean: boolean(),
  templateType: enums(['fs', 'rl']),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectBuild;
