const eslintLayoutFormatting = require('./eslint-layout-formatting');
const eslintPossibleProblems = require('./eslint-possible-problems');
const eslintSuggestions = require('./eslint-suggestions');

module.exports = {
  ...eslintLayoutFormatting,
  ...eslintPossibleProblems,
  ...eslintSuggestions,
};
