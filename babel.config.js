module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
  ],
  ignore: ['**/*.test.js', '**/*.spec.js'],
  minified: true,
  comments: false,
};
