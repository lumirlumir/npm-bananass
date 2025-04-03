/**
 * @fileoverview ESLint settings.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports.node = {
  resolverConfig: {
    // `eslint-plugin-n` uses webpack's `enhanced-resolve` under the hood.
    extensions: [
      '.js',
      '.mjs',
      '.cjs',
      '.jsx',
      '.ts',
      '.mts',
      '.cts',
      '.tsx',
      '.d.ts',
      '.d.mts',
      '.d.cts',
      '.json',
    ],
    mainFiles: ['index'],
  },
};

module.exports.react = {
  version: 'detect',
};
