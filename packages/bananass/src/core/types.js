/**
 * @fileoverview Define common types.
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

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
 * @property {ConfigObjectClean} [clean] Options exclusive to the `bananass clean` command.
 * @property {ConfigObjectDiscussion} [discussion] Options exclusive to the `bananass discussion` command.
 * @property {ConfigObjectHome} [home] Options exclusive to the `bananass home` command.
 * @property {ConfigObjectInfo} [info] Options exclusive to the `bananass info` command.
 * @property {ConfigObjectLint} [lint] Options exclusive to the `bananass lint` command.
 * @property {ConfigObjectLogin} [login] Options exclusive to the `bananass login` command.
 * @property {ConfigObjectOpen} [open] Options exclusive to the `bananass open` command.
 * @property {ConfigObjectRandom} [random] Options exclusive to the `bananass random` command.
 * @property {ConfigObjectRepo} [repo] Options exclusive to the `bananass repo` command.
 * @property {ConfigObjectRun} [run] Options exclusive to the `bananass run` command.
 * @property {ConfigObjectSubmit} [submit] Options exclusive to the `bananass submit` command.
 * @property {ConfigObjectTestcase} [testcase] Options exclusive to the `bananass testcase` command.
 */

/* Global */

/**
 * @typedef {object} ConfigObjectBrowser Global browser options.
 * @property {'chrome' | 'edge' | 'firefox' | 'default'} [browser] Browser name. Select from `chrome`, `edge`, `firefox`, or `default`.
 * @property {boolean} [secretMode] Open browser in secret (private or incognito) mode.
 */

/**
 * @typedef {object} ConfigObjectConsole Global console options.
 * @property {boolean} [debug] Enable debug mode.
 * @property {boolean} [quiet] Enable quiet mode.
 */

/* Exclusive */

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
 * @typedef {object} ConfigObjectClean Options exclusive to the `bananass clean` command.
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
 * @typedef {object} ConfigObjectRepo Options exclusive to the `bananass repo` command.
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
 * @typedef {string} Problem Baekjoon problem number as a string. Problem number must be greater than or equal to `1000`(`BAEKJOON_PROBLEM_NUMBER_MIN`).
 */

/**
 * @typedef {Problem[]} Problems Baekjoon problem numbers as a nonempty string array. Each problem number must be greater than or equal to `1000`(`BAEKJOON_PROBLEM_NUMBER_MIN`).
 */

// --------------------------------------------------------------------------------

/**
 * @typedef {string} Input Input string.
 */

/**
 * @typedef {string | number | boolean} Output
 * Output value. It can be a primitive type except for `bigint`, `symbol`, `undefined`, and `null`.
 *
 * Output values will be **coerced to a `string`** when running the `bananass run` command.
 * (This behavior mimics how `console.log` converts values to a `string` before displaying them.)
 *
 * Note that `bigint` is not allowed, as `console.log(BigInt(1))` outputs `1n`, whereas `console.log(String(BigInt(1)))` outputs `1`, which have different representations.
 */

/**
 * @callback Solution Solution function.
 * @param {Input} [input] Input string.
 * @return {Output}
 */

/**
 * @typedef {object} Testcase Testcase object.
 * @property {Input} [input] Input string.
 * @property {Output} output
 */

/**
 * @typedef {Testcase[]} Testcases Testcases array.
 */

/**
 * @typedef {object} SolutionWithTestcases Wrapper object containing `solution` function and `testcases`.
 * @property {Solution} solution Solution function.
 * @property {Testcases} [testcases] Testcases array.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {any} */
export default {};
