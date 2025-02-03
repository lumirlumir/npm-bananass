/**
 * @fileoverview Default config object.
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').ConfigObject} ConfigObject
 * @typedef {import('../../types.js').ConfigObjectAddOptions} ConfigObjectAddOptions
 * @typedef {import('../../types.js').ConfigObjectBuildOptions} ConfigObjectBuildOptions
 * @typedef {import('../../types.js').ConfigObjectCleanOptions} ConfigObjectCleanOptions
 * @typedef {import('../../types.js').ConfigObjectInfoOptions} ConfigObjectInfoOptions
 * @typedef {import('../../types.js').ConfigObjectInitOptions} ConfigObjectInitOptions
 * @typedef {import('../../types.js').ConfigObjectLintOptions} ConfigObjectLintOptions
 * @typedef {import('../../types.js').ConfigObjectLoginOptions} ConfigObjectLoginOptions
 * @typedef {import('../../types.js').ConfigObjectOpenOptions} ConfigObjectOpenOptions
 * @typedef {import('../../types.js').ConfigObjectRandomOptions} ConfigObjectRandomOptions
 * @typedef {import('../../types.js').ConfigObjectRunOptions} ConfigObjectRunOptions
 * @typedef {import('../../types.js').ConfigObjectSubmitOptions} ConfigObjectSubmitOptions
 * @typedef {import('../../types.js').ConfigObjectTestcaseOptions} ConfigObjectTestcaseOptions
 */

// --------------------------------------------------------------------------------
// Config Object Default Options
// --------------------------------------------------------------------------------

/** @type {ConfigObjectAddOptions} */
const add = {};

/** @type {ConfigObjectBuildOptions} */
const build = {
  clean: false,
  debug: false,
  quiet: false,
};

/** @type {ConfigObjectCleanOptions} */
const clean = {};

/** @type {ConfigObjectInfoOptions} */
const info = {};

/** @type {ConfigObjectInitOptions} */
const init = {};

/** @type {ConfigObjectLintOptions} */
const lint = {};

/** @type {ConfigObjectLoginOptions} */
const login = {};

/** @type {ConfigObjectOpenOptions} */
const open = {};

/** @type {ConfigObjectRandomOptions} */
const random = {};

/** @type {ConfigObjectRunOptions} */
const run = {};

/** @type {ConfigObjectSubmitOptions} */
const submit = {};

/** @type {ConfigObjectTestcaseOptions} */
const testcase = {};

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {ConfigObject} */
export default {
  add,
  build,
  clean,
  info,
  init,
  lint,
  login,
  open,
  random,
  run,
  submit,
  testcase,
};
