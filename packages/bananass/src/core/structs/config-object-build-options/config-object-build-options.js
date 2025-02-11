/**
 * @fileoverview `ConfigObjectBuildOptions` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { boolean, enums, object, string } from 'superstruct';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').ConfigObjectBuildOptions} ConfigObjectBuildOptions
 * @typedef {import('superstruct').Struct<ConfigObjectBuildOptions>} ConfigObjectBuildOptionsStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `ConfigObjectBuildOptions` type struct.
 *
 * @type {ConfigObjectBuildOptionsStruct}
 */
const ConfigObjectBuildOptions = object({
  clean: boolean(),
  debug: boolean(),
  entryDir: string(),
  outDir: string(),
  quiet: boolean(),
  templateType: enums(['fs', 'rl']),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectBuildOptions;
