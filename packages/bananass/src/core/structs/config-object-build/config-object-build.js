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
 * @import { ConfigObjectBuild } from '../../types/index.js';
 * @import { Struct } from 'superstruct';
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `ConfigObjectBuild` type struct.
 * @type {Struct<ConfigObjectBuild>}
 */
const ConfigObjectBuild = object({
  clean: optional(boolean()),
  templateType: optional(enums(['fs', 'rl'])),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObjectBuild;
