const eslintLayoutFormatting = require('./rules/eslint-layout-formatting');
const eslintPossibleProblems = require('./rules/eslint-possible-problems');
const eslintSuggestions = require('./rules/eslint-suggestions');

module.exports = [
  {
    // languageOptions: {},
    rules: {
      ...eslintLayoutFormatting,
      ...eslintPossibleProblems,
      ...eslintSuggestions,
    },
  },
];
