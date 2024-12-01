module.exports = {
  root: true,
  extends: [
    // extends has priority. Last index has the highest priority.
    'eslint:recommended',
    'plugin:import/recommended',
    'airbnb-base',
    'prettier',
  ],
  env: {
    commonjs: true,
    es2024: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 15,
  },
};
