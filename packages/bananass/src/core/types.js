/**
 * @fileoverview Define common types for input completion.
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {object} ConfigObject
 * @property {ConfigObjectAddOptions} add Add options.
 * @property {ConfigObjectBuildOptions} build Build options.
 * @property {ConfigObjectCleanOptions} clean Clean options.
 * @property {ConfigObjectInfoOptions} info Info options.
 * @property {ConfigObjectInitOptions} init Init options.
 * @property {ConfigObjectLintOptions} lint Lint options.
 * @property {ConfigObjectLoginOptions} login Login options.
 * @property {ConfigObjectOpenOptions} open Open options.
 * @property {ConfigObjectRandomOptions} random Random options.
 * @property {ConfigObjectRunOptions} run Run options.
 * @property {ConfigObjectSubmitOptions} submit Submit options.
 * @property {ConfigObjectTestcaseOptions} testcase Testcase options.
 */

/**
 * @typedef {object} ConfigObjectAddOptions
 */

/**
 * @typedef {object} ConfigObjectBuildOptions
 * @property {boolean} clean Clean the output directory before emit.
 * @property {boolean} debug Enable debug mode.
 * @property {string} entryDir Entry directory name.
 * @property {string} outDir Output directory name.
 * @property {boolean} quiet Enable quiet mode.
 * @property {'fs' | 'rl'} templateType Webpack entry file template type. Select from `fs` (File System) or `rl` (Read Line).
 */

/**
 * @typedef {object} ConfigObjectCleanOptions
 */

/**
 * @typedef {object} ConfigObjectInfoOptions
 */

/**
 * @typedef {object} ConfigObjectInitOptions
 */

/**
 * @typedef {object} ConfigObjectLintOptions
 */

/**
 * @typedef {object} ConfigObjectLoginOptions
 */

/**
 * @typedef {object} ConfigObjectOpenOptions
 */

/**
 * @typedef {object} ConfigObjectRandomOptions
 */

/**
 * @typedef {object} ConfigObjectRunOptions
 */

/**
 * @typedef {object} ConfigObjectSubmitOptions
 */

/**
 * @typedef {object} ConfigObjectTestcaseOptions
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {any} */
export default {};
