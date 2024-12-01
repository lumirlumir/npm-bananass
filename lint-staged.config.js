module.exports = {
  '*': [
    'npx prettier --check',
    'npx editorconfig-checker -config .editorconfig-checker.json',
  ],
  '*.js': 'npx eslint',
  '*.md': ['npx markdownlint', 'npx textlint -f pretty-error'],
};
