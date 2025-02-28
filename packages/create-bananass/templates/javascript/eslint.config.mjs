import bananass from 'eslint-config-bananass';

export default [
  {
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
