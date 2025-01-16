const bananass = require('eslint-config-bananass');

module.exports = [
  {
    ignores: ['**/build/', '**/coverage/'],
  },
  bananass.configs.recommended,
];
