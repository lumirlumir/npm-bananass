import importHelpfulWarnings from './import-helpful-warnings.js';
import importModuleSystems from './import-module-systems.js';
import importStaticAnalysis from './import-static-analysis.js';
import importStyleGuide from './import-style-guide.js';

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  ...importHelpfulWarnings,
  ...importModuleSystems,
  ...importStaticAnalysis,
  ...importStyleGuide,
};
