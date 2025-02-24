const eslintRules = require('./eslint');
const importRules = require('./import');
const nodeRules = require('./node');
const stylisticJsRules = require('./stylistic-js');
const jsxA11yRules = require('./jsx-a11y');
const reactRules = require('./react');
const reactCompilerRules = require('./react-compiler');
const reactHooksRules = require('./react-hooks');
const nextRules = require('./next');
const typescriptRules = require('./typescript');

module.exports = {
  eslintRules,
  importRules,
  nodeRules,
  stylisticJsRules,
  jsxA11yRules,
  reactRules,
  reactCompilerRules,
  reactHooksRules,
  nextRules,
  typescriptRules,
};
