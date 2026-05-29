// @ts-nocheck -- TODO: Code was simply copied and pasted. Type annotations will be modified later.

import resolve from 'eslint-module-utils/resolve';
import moduleVisitor from 'eslint-module-utils/moduleVisitor';

function isImportingSelf(context, node, requireName, moduleSystem) {
  const filePath = context.physicalFilename;

  // If the input is from stdin, this test can't fail
  if (filePath !== '<text>' && filePath === resolve(requireName, context, moduleSystem)) {
    context.report({
      node,
      message: 'Module imports itself.',
    });
  }
}

export default {
  meta: {
    type: 'problem',
    docs: {
      category: 'Static analysis',
      description: 'Forbid a module from importing itself.',
      recommended: true,
      url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md',
    },

    schema: [],
  },
  create(context) {
    return moduleVisitor(
      (source, node, moduleSystem) => {
        isImportingSelf(context, node, source.value, moduleSystem);
      },
      { commonjs: true },
    );
  },
};
