/**
 * @fileoverview Define common types.
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

// #region ConfigObject

/**
 * @typedef {object} ConfigObject Bananass configuration object.
 *
 * @property {string} [cwd] Current working directory.
 * @property {string} [entryDir] Entry directory name.
 * @property {string} [outDir] Output directory name.
 *
 * @property {ConfigObjectBrowser} [browser] Global browser options.
 * @property {ConfigObjectConsole} [console] Global console options.
 *
 * @property {ConfigObjectAdd} [add] Options exclusive to the `bananass add` command.
 * @property {ConfigObjectBug} [bug] Options exclusive to the `bananass bug` command.
 * @property {ConfigObjectBuild} [build] Options exclusive to the `bananass build` command.
 * @property {ConfigObjectDiscussion} [discussion] Options exclusive to the `bananass discussion` command.
 * @property {ConfigObjectHome} [home] Options exclusive to the `bananass home` command.
 * @property {ConfigObjectInfo} [info] Options exclusive to the `bananass info` command.
 * @property {ConfigObjectOpen} [open] Options exclusive to the `bananass open` command.
 * @property {ConfigObjectRepo} [repo] Options exclusive to the `bananass repo` command.
 * @property {ConfigObjectRun} [run] Options exclusive to the `bananass run` command.
 */

// #region ConfigObject/Global

/**
 * @typedef {object} ConfigObjectBrowser Global browser options.
 * @property {'chrome' | 'edge' | 'firefox' | 'default'} [browser] Browser name. Select from `chrome`, `edge`, `firefox`, or `default`.
 * @property {boolean} [secret] Open browser in secret (private or incognito) mode.
 */

/**
 * @typedef {object} ConfigObjectConsole Global console options.
 * @property {boolean} [debug] Enable debug mode.
 * @property {boolean} [quiet] Enable quiet mode.
 */

// #endregion ConfigObject/Global

// #region ConfigObject/Exclusive

/**
 * @typedef {object} ConfigObjectAdd Options exclusive to the `bananass add` command.
 */

/**
 * @typedef {object} ConfigObjectBug Options exclusive to the `bananass bug` command.
 */

/**
 * @typedef {object} ConfigObjectBuild Options exclusive to the `bananass build` command.
 * @property {boolean} [clean] Clean the output directory before emit.
 * @property {'fs' | 'rl'} [templateType] Webpack entry file template type. Select from `fs` (File System) or `rl` (Read Line).
 */

/**
 * @typedef {object} ConfigObjectDiscussion Options exclusive to the `bananass discussion` command.
 */

/**
 * @typedef {object} ConfigObjectHome Options exclusive to the `bananass home` command.
 */

/**
 * @typedef {object} ConfigObjectInfo Options exclusive to the `bananass info` command.
 * @property {boolean} [all] Show all information including Not Found.
 */

/**
 * @typedef {object} ConfigObjectOpen Options exclusive to the `bananass open` command.
 */

/**
 * @typedef {object} ConfigObjectRepo Options exclusive to the `bananass repo` command.
 */

/**
 * @typedef {object} ConfigObjectRun Options exclusive to the `bananass run` command.
 */

// #endregion ConfigObject/Exclusive

// #endregion ConfigObject

// --------------------------------------------------------------------------------

// #region Problem

/**
 * @typedef {string} Problem Baekjoon problem number as a string. Problem number must be greater than or equal to `1000`(`BAEKJOON_PROBLEM_NUMBER_MIN`).
 */

/**
 * @typedef {Problem[]} Problems Baekjoon problem numbers as a nonempty string array. Each problem number must be greater than or equal to `1000`(`BAEKJOON_PROBLEM_NUMBER_MIN`).
 */

// #endregion Problem

// --------------------------------------------------------------------------------

// #region Solution

/**
 * @typedef {string} Input Input value. Must be a `string`.
 */

/**
 * @typedef {string | number | boolean} Output
 * Output value. Must be a `string`, `number`, or `boolean`. (It can be a primitive type except for `bigint`, `symbol`, `undefined`, and `null`).
 *
 * Output values will be **coerced to a `string` and any trailing whitespace will be removed using `trimEnd()`** when running the `bananass run` command.
 * (This behavior mimics how `console.log` converts values to a `string` before displaying them.)
 *
 * Note that `bigint` is not allowed, as `console.log(BigInt(1))` outputs `1n`, whereas `console.log(String(BigInt(1)))` outputs `1`, which have different representations.
 */

/**
 * @typedef {object} Testcase Testcase object.
 * @property {Input} [input] Input value. Must be a `string`.
 * @property {Output} output
 * Output value. Must be a `string`, `number`, or `boolean`. (It can be a primitive type except for `bigint`, `symbol`, `undefined`, and `null`).
 *
 * Output values will be **coerced to a `string` and any trailing whitespace will be removed using `trimEnd()`** when running the `bananass run` command.
 * (This behavior mimics how `console.log` converts values to a `string` before displaying them.)
 *
 * Note that `bigint` is not allowed, as `console.log(BigInt(1))` outputs `1n`, whereas `console.log(String(BigInt(1)))` outputs `1`, which have different representations.
 */

/**
 * @typedef {Testcase[]} Testcases Testcases array.
 */

/**
 * @callback Solution Solution function.
 * @param {Input} [input] Input string.
 * @return {Output}
 */

/**
 * @typedef {object} SolutionWithTestcases Wrapper object containing `solution` function and `testcases`.
 * @property {Solution} solution Solution function.
 * @property {Testcases} [testcases] Testcases array.
 */

// #endregion Solution

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {any} */
export default {};
