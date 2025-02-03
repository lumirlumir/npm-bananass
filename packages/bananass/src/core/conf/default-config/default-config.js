/**
 * @fileoverview Default config.
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

/**
 * Merge 2 objects with 1 depth.
 *
 * @param {object} globalConfig 1 depth object.
 * @param {object} config 1 depth object.
 * @returns {object} Merged object.
 */
function mergeGlobalConfig(globalConfig, config) {
  return {
    ...globalConfig,
    ...config,
  };
}

// --------------------------------------------------------------------------------
// Config Objects
// --------------------------------------------------------------------------------

const global = {
  debug: false,
  quiet: false,
};

const add = mergeGlobalConfig(global, {});

const build = mergeGlobalConfig(global, {
  clean: true,
});

const clean = mergeGlobalConfig(global, {});

const info = mergeGlobalConfig(global, {});

const init = mergeGlobalConfig(global, {});

const lint = mergeGlobalConfig(global, {});

const login = mergeGlobalConfig(global, {});

const open = mergeGlobalConfig(global, {});

const random = mergeGlobalConfig(global, {});

const run = mergeGlobalConfig(global, {});

const submit = mergeGlobalConfig(global, {});

const testcase = mergeGlobalConfig(global, {});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

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
