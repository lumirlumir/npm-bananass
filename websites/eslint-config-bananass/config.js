const bananass = require('eslint-config-bananass');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  bananass.configs.js,
  bananass.configs.jsx.react,
  bananass.configs.jsx.next,
  bananass.configs.ts,
  bananass.configs.tsx.react,
  bananass.configs.tsx.next,
];
