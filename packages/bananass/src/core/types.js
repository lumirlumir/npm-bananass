/**
 * @fileoverview Define common types.
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {object} ConfigObject Bananass configuration object.
 *
 * @property {string} cwd Current working directory.
 * @property {string} entryDir Entry directory name.
 * @property {string} outDir Output directory name.
 *
 * @property {ConfigObjectBrowser} browser
 * @property {ConfigObjectConsole} console
 *
 * @property {ConfigObjectAdd} [add] TODO: Remove optional types.
 * @property {ConfigObjectBuild} build
 * @property {ConfigObjectClean} [clean] TODO: Remove optional types.
 * @property {ConfigObjectInfo} [info] TODO: Remove optional types.
 * @property {ConfigObjectInit} [init] TODO: Remove optional types.
 * @property {ConfigObjectLint} [lint] TODO: Remove optional types.
 * @property {ConfigObjectLogin} [login] TODO: Remove optional types.
 * @property {ConfigObjectOpen} [open] TODO: Remove optional types.
 * @property {ConfigObjectRandom} [random] TODO: Remove optional types.
 * @property {ConfigObjectRun} [run] TODO: Remove optional types.
 * @property {ConfigObjectSubmit} [submit] TODO: Remove optional types.
 * @property {ConfigObjectTestcase} [testcase] TODO: Remove optional types.
 */

/* Global */

/**
 * @typedef {object} ConfigObjectBrowser Global browser options.
 * @property {'chrome' | 'edge' | 'firefox' | 'default'} browser Browser name. Select from `chrome`, `edge`, `firefox`, or `default`.
 * @property {boolean} private Open browser in private(secret or incognito) mode.
 */

/**
 * @typedef {object} ConfigObjectConsole Global console options.
 * @property {boolean} debug Enable debug mode.
 * @property {boolean} quiet Enable quiet mode.
 */

/* Exclusive */

/**
 * @typedef {object} ConfigObjectAdd Options exclusive to the `bananass add` command.
 */

/**
 * @typedef {object} ConfigObjectBuild Options exclusive to the `bananass build` command.
 * @property {boolean} clean Clean the output directory before emit.
 * @property {'fs' | 'rl'} templateType Webpack entry file template type. Select from `fs` (File System) or `rl` (Read Line).
 */

/**
 * @typedef {object} ConfigObjectClean Options exclusive to the `bananass clean` command.
 */

/**
 * @typedef {object} ConfigObjectInfo Options exclusive to the `bananass info` command.
 */

/**
 * @typedef {object} ConfigObjectInit Options exclusive to the `bananass init` command.
 */

/**
 * @typedef {object} ConfigObjectLint Options exclusive to the `bananass lint` command.
 */

/**
 * @typedef {object} ConfigObjectLogin Options exclusive to the `bananass login` command.
 */

/**
 * @typedef {object} ConfigObjectOpen Options exclusive to the `bananass open` command.
 */

/**
 * @typedef {object} ConfigObjectRandom Options exclusive to the `bananass random` command.
 */

/**
 * @typedef {object} ConfigObjectRun Options exclusive to the `bananass run` command.
 */

/**
 * @typedef {object} ConfigObjectSubmit Options exclusive to the `bananass submit` command.
 */

/**
 * @typedef {object} ConfigObjectTestcase Options exclusive to the `bananass testcase` command.
 */

// --------------------------------------------------------------------------------

/**
 * @typedef {string[]} Problems Nonempty string array of problem numbers. Each problem number must be greater than or equal to `1000`(`BAEKJOON_PROBLEM_NUMBER_MIN`).
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {any} */
export default {};
