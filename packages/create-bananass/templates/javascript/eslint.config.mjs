import bananass from 'eslint-config-bananass';

export default [
  {
    // Bananass build directory (Rename it if you change the `outDir` field in `bananass.config.mjs`)
    ignores: ['**/.bananass/'],
  },
  bananass.configs.js,

  // Add your custom ESLint configuration here.
  //
  // For example:
  //
  // {
  //   rules: {
  //     'no-console': 'off',
  //   },
  // }
  // ...
];

// Take a look at https://eslint-config-bananass.lumir.page
// which lists all the available configurations.
