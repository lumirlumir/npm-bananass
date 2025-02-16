/**
 * @fileoverview Create a wrapper object using the `solution` function and `testcases` for default export.
 */

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../core/types.js').SolutionWithTestcases} SolutionWithTestcases
 * @typedef {import('../../core/types.js').Solution} Solution
 * @typedef {import('../../core/types.js').Testcases} Testcases
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

/**
 * Create a wrapper object using the `solution` function and `testcases` for default export.
 *
 * This code is used for Dead Code Elimination (i.e. Tree Shaking).
 * It will remove the `testcases` object in the final production build.
 *
 * Note that wrapper object created by this function should be default exported. (See the example below.)
 * - ESM: `export default createExportObject(solution, testcases);`
 * - CJS: `module.exports = createExportObject(solution, testcases);`
 *
 * @param {Solution} solution
 * @param {Testcases} testcases
 * @returns {SolutionWithTestcases}
 * @example
 * const testcases = [
 *   // ...
 *   {
 *     input: 'input...',
 *     output: 'output...',
 *   }
 *   // ...
 * ]
 *
 * function solution(input) {
 *   // Solution code...
 * }
 *
 * // ESM
 * export default createExportObject(solution, testcases);
 *
 * // CJS
 * module.exports = createExportObject(solution, testcases);
 */
module.exports = function createExportObject(solution, testcases) {
  return process.env.NODE_ENV === 'production'
    ? { solution }
    : {
        solution,
        testcases,
      };
};
