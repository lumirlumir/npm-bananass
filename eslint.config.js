const bananass = require('eslint-config-bananass-react');

module.exports = [
  {
    ignores: ['**/build/', '**/.next/'],
  },
  bananass.configs.recommended,
];
