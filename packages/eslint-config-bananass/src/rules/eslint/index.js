import eslintLayoutFormatting from './eslint-layout-formatting.js';
import eslintPossibleProblems from './eslint-possible-problems.js';
import eslintSuggestions from './eslint-suggestions.js';

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  ...eslintLayoutFormatting,
  ...eslintPossibleProblems,
  ...eslintSuggestions,
};
