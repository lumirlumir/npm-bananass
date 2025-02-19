module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
  ],
  ignore: ['**/*.test.js'],
  minified: true,
  comments: false,
};
