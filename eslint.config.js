const bananass = require('eslint-config-bananass-react');

module.exports = [
  {
    ignores: ['**/build/', '**/.next/', '**/coverage/'],
  },
  bananass.configs.recommended,
];
