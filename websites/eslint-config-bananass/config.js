const bananass = require('eslint-config-bananass');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  bananass.configs.js,
  bananass.configs.jsxReact,
  bananass.configs.jsxNext,
  bananass.configs.ts,
  bananass.configs.tsxReact,
  bananass.configs.tsxNext,
];
