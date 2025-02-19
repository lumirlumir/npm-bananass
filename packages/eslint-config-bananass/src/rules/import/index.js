const importHelpfulWarnings = require('./import-helpful-warnings');
const importModuleSystems = require('./import-module-systems');
const importStaticAnalysis = require('./import-static-analysis');
const importStyleGuide = require('./import-style-guide');

module.exports = {
  ...importHelpfulWarnings,
  ...importModuleSystems,
  ...importStaticAnalysis,
  ...importStyleGuide,
};
