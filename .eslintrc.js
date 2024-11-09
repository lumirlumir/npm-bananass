module.exports = {
  root: true,
  plugins: [
    // plugins has no priority.
    'import',
    'prettier',
  ],
  extends: [
    // extends has priority. Last index has the highest priority.
    'eslint:recommended',
    'plugin:import/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
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
