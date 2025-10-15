import importRule from './import.js';
import importStaticAnalysis from './import-static-analysis.js';
import importStyleGuide from './import-style-guide.js';

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  ...importRule,
  ...importStaticAnalysis,
  ...importStyleGuide,
};
