import importRule from './import.js';
import importStyleGuide from './import-style-guide.js';

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  ...importRule,
  ...importStyleGuide,
};
