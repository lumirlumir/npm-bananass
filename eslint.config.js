const bananass = require('eslint-config-bananass');

module.exports = [
  {
    ignores: ['**/build/', '**/coverage/', '**/.vitepress/cache/'],
  },
  bananass.configs.recommended,
];
