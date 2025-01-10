const bananass = require('eslint-config-bananass');

module.exports = [
  {
    ignores: ['**/build/', '**/.next/'],
  },
  bananass.configs.recommended,
];
