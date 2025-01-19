const bananass = require('eslint-config-bananass-react');

module.exports = [
  {
    ignores: ['**/build/', '**/.next/', '**/.docusaurus/', '**/coverage/'],
  },
  bananass.configs.recommended,
];
