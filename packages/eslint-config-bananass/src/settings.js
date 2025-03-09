/**
 * @fileoverview ESLint settings.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports.node = {
  resolverConfig: {
    // `eslint-plugin-n` uses webpack's `enhanced-resolve` under the hood.
    extensions: ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx', '.json'],
    mainFiles: ['index'],
  },
};

module.exports.react = {
  version: 'detect',
};
