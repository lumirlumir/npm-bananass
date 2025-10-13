import eslintLayoutFormatting from './eslint-layout-formatting.js';
import eslintPossibleProblems from './eslint-possible-problems.js';

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  ...eslintLayoutFormatting,
  ...eslintPossibleProblems,
};
