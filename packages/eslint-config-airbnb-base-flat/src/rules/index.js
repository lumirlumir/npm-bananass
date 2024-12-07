const eslintLayoutFormatting = require('./eslint-layout-formatting');
const eslintPossibleProblems = require('./eslint-possible-problems');

module.exports = {
  ...eslintLayoutFormatting,
  ...eslintPossibleProblems,
};
