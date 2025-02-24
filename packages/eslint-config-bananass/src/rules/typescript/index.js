const typescriptExtension = require('./typescript-extension');
const typescriptRecommended = require('./typescript-recommended');
const typescriptStylistic = require('./typescript-stylistic');

module.exports = {
  ...typescriptExtension,
  ...typescriptRecommended,
  ...typescriptStylistic,
};
