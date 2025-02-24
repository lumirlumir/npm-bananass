import bananass from 'eslint-config-bananass';

export default [
  {
    ignores: ['**/build/', '**/coverage/', '**/.vitepress/cache/'],
  },
  bananass.configs.js,
  bananass.configs.ts,
];
