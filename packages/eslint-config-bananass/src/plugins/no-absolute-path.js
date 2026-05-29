// @ts-nocheck -- TODO: Code was simply copied and pasted. Type annotations will be modified later.

import path, { isAbsolute as nodeIsAbsolute } from 'node:path';
import moduleVisitorModule from 'eslint-module-utils/moduleVisitor';

const moduleVisitor = moduleVisitorModule.default ?? moduleVisitorModule;

function getPhysicalFilename(context) {
  return context.physicalFilename;
}

function isAbsolute(name) {
  return typeof name === 'string' && nodeIsAbsolute(name);
}

function makeOptionsSchema() {
  const base = {
    type: 'object',
    properties: {
      commonjs: { type: 'boolean' },
      amd: { type: 'boolean' },
      esmodule: { type: 'boolean' },
      ignore: {
        type: 'array',
        minItems: 1,
        items: { type: 'string' },
        uniqueItems: true,
      },
    },
    additionalProperties: false,
  };

  return base;
}

export default {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Static analysis',
      description: 'Forbid import of modules using absolute paths.',
      url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md',
    },
    fixable: 'code',
    schema: [makeOptionsSchema()],
  },

  create(context) {
    function reportIfAbsolute(source) {
      if (isAbsolute(source.value)) {
        context.report({
          node: source,
          message: 'Do not import modules using an absolute path',
          fix(fixer) {
            // node.js and web imports work with posix style paths ("/")
            let relativePath = path.posix.relative(
              path.dirname(getPhysicalFilename(context)),
              source.value,
            );
            if (!relativePath.startsWith('.')) {
              relativePath = `./${relativePath}`;
            }
            return fixer.replaceText(source, JSON.stringify(relativePath));
          },
        });
      }
    }

    const options = { esmodule: true, commonjs: true, ...context.options[0] };
    return moduleVisitor(reportIfAbsolute, options);
  },
};
