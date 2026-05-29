// @ts-nocheck -- TODO: Code was simply copied and pasted. Type annotations will be modified later.

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Forbid named default exports.',
      url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md',
    },
    schema: [],
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        node.specifiers.forEach(im => {
          if (im.importKind === 'type' || im.importKind === 'typeof') {
            return;
          }

          if (
            im.type === 'ImportSpecifier' &&
            (im.imported.name || im.imported.value) === 'default'
          ) {
            context.report({
              node: im.local,
              message: `Use default import syntax to import '${im.local.name}'.`,
            });
          }
        });
      },
    };
  },
};
