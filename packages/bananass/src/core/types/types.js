/**
 * @fileoverview Define common types.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import * as z from 'zod';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {z.infer<typeof configObject>} ConfigObject
 * Bananass configuration object.
 * @typedef {z.infer<typeof configObjectBrowser>} ConfigObjectBrowser
 * Global browser options.
 * @typedef {z.infer<typeof configObjectConsole>} ConfigObjectConsole
 * Global console options.
 * @typedef {z.infer<typeof configObjectAdd>} ConfigObjectAdd
 * Options exclusive to the `bananass add` command.
 * @typedef {z.infer<typeof configObjectBug>} ConfigObjectBug
 * Options exclusive to the `bananass bug` command.
 * @typedef {z.infer<typeof configObjectBuild>} ConfigObjectBuild
 * Options exclusive to the `bananass build` command.
 * @typedef {z.infer<typeof configObjectDiscussion>} ConfigObjectDiscussion
 * Options exclusive to the `bananass discussion` command.
 * @typedef {z.infer<typeof configObjectHome>} ConfigObjectHome
 * Options exclusive to the `bananass home` command.
 * @typedef {z.infer<typeof configObjectInfo>} ConfigObjectInfo
 * Options exclusive to the `bananass info` command.
 * @typedef {z.infer<typeof configObjectOpen>} ConfigObjectOpen
 * Options exclusive to the `bananass open` command.
 * @typedef {z.infer<typeof configObjectRepo>} ConfigObjectRepo
 * Options exclusive to the `bananass repo` command.
 * @typedef {z.infer<typeof configObjectRun>} ConfigObjectRun
 * Options exclusive to the `bananass run` command.
 *
 * @typedef {z.infer<typeof problem>} Problem
 * Baekjoon problem number as a string.
 * Problem number must be greater than or equal to `1000`(`BAEKJOON_PROBLEM_NUMBER_MIN`).
 * @typedef {z.infer<typeof problems>} Problems
 * Baekjoon problem numbers as a nonempty string array.
 * Each problem number must be greater than or equal to `1000`(`BAEKJOON_PROBLEM_NUMBER_MIN`).
 *
 * @typedef {z.infer<typeof input>} Input
 * Input value. Must be a `string` or `undefined`.
 * @typedef {z.infer<typeof output>} Output
 * Output value. Must be a `string`, `number`, or `boolean`.
 * (It can be a primitive type except for `bigint`, `symbol`, `undefined`, and `null`).
 *
 * Output values will be **coerced to a `string` and any trailing whitespace
 * will be removed using `trimEnd()`** when running the `bananass run` command.
 * (This behavior mimics how `console.log` converts values to a `string` before displaying them.)
 *
 * Note that `bigint` is not allowed, as `console.log(BigInt(1))` outputs `1n`,
 * whereas `console.log(String(BigInt(1)))` outputs `1`, which have different representations.
 * @typedef {z.infer<typeof testcase>} Testcase
 * Testcase object.
 * @typedef {z.infer<typeof testcases>} Testcases
 * Testcases array.
 * @typedef {ReturnType<typeof solution.implement>} Solution
 * Solution function.
 */

// TODO: Remove
/**
 * @typedef {object} SolutionWithTestcases Wrapper object containing `solution` function and `testcases`.
 * @property {Solution} solution Solution function.
 * @property {Testcases} [testcases] Testcases array.
 */

// --------------------------------------------------------------------------------
// Export: Config Object
// --------------------------------------------------------------------------------

/**
 * Global browser options.
 */
export const configObjectBrowser = z.strictObject({
  /**
   * Browser name. Select from `'chrome'`, `'edge'`, `'firefox'`, `'brave'`, or `'default'`.
   * @default 'default'
   */
  browser: z.enum(['chrome', 'edge', 'firefox', 'brave', 'default']).optional(),

  /**
   * Open browser in secret (private or incognito) mode.
   * @default false
   */
  secret: z.boolean().optional(),
});

/**
 * Global console options.
 */
export const configObjectConsole = z.strictObject({
  /**
   * Enable debug mode.
   * @default false
   */
  debug: z.boolean().optional(),

  /**
   * Enable quiet mode.
   * @default false
   */
  quiet: z.boolean().optional(),
});

/**
 * Options exclusive to the `bananass add` command.
 */
export const configObjectAdd = z.strictObject({});

/**
 * Options exclusive to the `bananass bug` command.
 */
export const configObjectBug = z.strictObject({});

/**
 * Options exclusive to the `bananass build` command.
 */
export const configObjectBuild = z.strictObject({
  /**
   * Clean the output directory before emit.
   * @default false
   */
  clean: z.boolean().optional(),

  /**
   * Webpack entry file template type. Select from `'fs'` (File System) or `'rl'` (Read Line).
   * @default 'fs'
   */
  templateType: z.enum(['fs', 'rl']).optional(),
});

/**
 * Options exclusive to the `bananass discussion` command.
 */
export const configObjectDiscussion = z.strictObject({});

/**
 * Options exclusive to the `bananass home` command.
 */
export const configObjectHome = z.strictObject({});

/**
 * Options exclusive to the `bananass info` command.
 */
export const configObjectInfo = z.strictObject({
  /**
   * Show all information including Not Found.
   * @default false
   */
  all: z.boolean().optional(),
});

/**
 * Options exclusive to the `bananass open` command.
 */
export const configObjectOpen = z.strictObject({});

/**
 * Options exclusive to the `bananass repo` command.
 */
export const configObjectRepo = z.strictObject({});

/**
 * Options exclusive to the `bananass run` command.
 */
export const configObjectRun = z.strictObject({});

/**
 * Bananass configuration object.
 */
export const configObject = z.strictObject({
  /**
   * Current working directory.
   * @default findRootDir()
   */
  cwd: z.string().optional(),

  /**
   * Entry directory name.
   * @default 'bananass'
   */
  entryDir: z.string().optional(),

  /**
   * Output directory name.
   * @default '.bananass'
   */
  outDir: z.string().optional(),

  /**
   * Global browser options.
   */
  browser: configObjectBrowser.optional(),

  /**
   * Global console options.
   */
  console: configObjectConsole.optional(),

  /**
   * Options exclusive to the `bananass add` command.
   */
  add: configObjectAdd.optional(),

  /**
   * Options exclusive to the `bananass bug` command.
   */
  bug: configObjectBug.optional(),

  /**
   * Options exclusive to the `bananass build` command.
   */
  build: configObjectBuild.optional(),

  /**
   * Options exclusive to the `bananass discussion` command.
   */
  discussion: configObjectDiscussion.optional(),

  /**
   * Options exclusive to the `bananass home` command.
   */
  home: configObjectHome.optional(),

  /**
   * Options exclusive to the `bananass info` command.
   */
  info: configObjectInfo.optional(),

  /**
   * Options exclusive to the `bananass open` command.
   */
  open: configObjectOpen.optional(),

  /**
   * Options exclusive to the `bananass repo` command.
   */
  repo: configObjectRepo.optional(),

  /**
   * Options exclusive to the `bananass run` command.
   */
  run: configObjectRun.optional(),
});

// --------------------------------------------------------------------------------
// Export: Problem
// --------------------------------------------------------------------------------

/**
 * Baekjoon problem number as a string.
 * Problem number must be greater than or equal to `1000`(`BAEKJOON_PROBLEM_NUMBER_MIN`).
 */
export const problem = z.string();

/**
 * Baekjoon problem numbers as a nonempty string array.
 * Each problem number must be greater than or equal to `1000`(`BAEKJOON_PROBLEM_NUMBER_MIN`).
 */
export const problems = z.array(problem).nonempty();

// --------------------------------------------------------------------------------
// Export: Solution
// --------------------------------------------------------------------------------

/**
 * Input value. Must be a `string` or `undefined`.
 */
export const input = z.union([z.string(), z.undefined()]);

/**
 * Output value. Must be a `string`, `number`, or `boolean`.
 * (It can be a primitive type except for `bigint`, `symbol`, `undefined`, and `null`).
 *
 * Output values will be **coerced to a `string` and any trailing whitespace
 * will be removed using `trimEnd()`** when running the `bananass run` command.
 * (This behavior mimics how `console.log` converts values to a `string` before displaying them.)
 *
 * Note that `bigint` is not allowed, as `console.log(BigInt(1))` outputs `1n`,
 * whereas `console.log(String(BigInt(1)))` outputs `1`, which have different representations.
 */
export const output = z.union([z.string(), z.number(), z.boolean()]);

/**
 * Testcase object.
 */
export const testcase = z.strictObject({
  /**
   * Input value. Must be a `string` or `undefined`.
   */
  input: input.optional(),

  /**
   * Output value. Must be a `string`, `number`, or `boolean`.
   * (It can be a primitive type except for `bigint`, `symbol`, `undefined`, and `null`).
   *
   * Output values will be **coerced to a `string` and any trailing whitespace
   * will be removed using `trimEnd()`** when running the `bananass run` command.
   * (This behavior mimics how `console.log` converts values to a `string` before displaying them.)
   *
   * Note that `bigint` is not allowed, as `console.log(BigInt(1))` outputs `1n`,
   * whereas `console.log(String(BigInt(1)))` outputs `1`, which have different representations.
   */
  output,
});

/**
 * Testcases array.
 */
export const testcases = z.array(testcase);

/**
 * Solution function.
 */
export const solution = z.function({
  input: [input.optional()],
  output,
});
