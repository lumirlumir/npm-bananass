import bananass from 'eslint-config-bananass';

/** @type {import("eslint").Linter.Config[]} */
export default [
  bananass.configs.js,
  bananass.configs.jsxReact,
  bananass.configs.jsxNext,
  bananass.configs.ts,
  bananass.configs.tsxReact,
  bananass.configs.tsxNext,
];
