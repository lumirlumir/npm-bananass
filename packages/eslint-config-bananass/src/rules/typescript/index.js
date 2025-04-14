import typescriptExtension from './typescript-extension.js';
import typescriptRecommended from './typescript-recommended.js';
import typescriptStylistic from './typescript-stylistic.js';

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  ...typescriptExtension,
  ...typescriptRecommended,
  ...typescriptStylistic,
};
