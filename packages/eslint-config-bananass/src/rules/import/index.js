import importHelpfulWarnings from './import-helpful-warnings.js';
import importStaticAnalysis from './import-static-analysis.js';
import importStyleGuide from './import-style-guide.js';

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  ...importHelpfulWarnings,
  ...importStaticAnalysis,
  ...importStyleGuide,
};
