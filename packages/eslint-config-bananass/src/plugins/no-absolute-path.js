// @ts-nocheck -- TODO: Code was simply copied and pasted. Type annotations will be modified later.

import path, { isAbsolute as nodeIsAbsolute } from 'node:path';

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

function moduleVisitor(visitor, options) {
  const ignore = options && options.ignore;
  const amd = !!(options && options.amd);
  const commonjs = !!(options && options.commonjs);
  // if esmodule is not explicitly disabled, it is assumed to be enabled
  const esmodule = !!{ esmodule: true, ...options }.esmodule;

  const ignoreRegExps = ignore == null ? [] : ignore.map(p => new RegExp(p));

  /** @type {(source: undefined | null | import('estree').Literal, importer: Parameters<typeof visitor>[1], moduleSystem?: 'import' | 'require') => void} */
  function checkSourceValue(source, importer, moduleSystem) {
    if (source == null) {
      return;
    }

    // handle ignore
    if (ignoreRegExps.some(re => re.test(String(source.value)))) {
      return;
    }

    // fire visitor
    visitor(source, importer, moduleSystem);
  }

  // for import-y declarations
  /** @type {(node: Declaration) => void} */
  function checkSource(node) {
    checkSourceValue(node.source, node, 'import');
  }

  // for esmodule dynamic `import()` calls
  /** @type {(node: import('estree').ImportExpression | import('estree').CallExpression) => void} */
  function checkImportCall(node) {
    /** @type {import('estree').Expression | import('estree').Literal | import('estree').CallExpression['arguments'][0]} */
    let modulePath;
    // refs https://github.com/estree/estree/blob/HEAD/es2020.md#importexpression
    if (node.type === 'ImportExpression') {
      modulePath = node.source;
    } else if (node.type === 'CallExpression') {
      // @ts-expect-error this structure is from an older version of eslint
      if (node.callee.type !== 'Import') {
        return;
      }
      if (node.arguments.length !== 1) {
        return;
      }

      [modulePath] = node.arguments;
    } else {
      throw new TypeError('this should be unreachable');
    }

    if (modulePath.type !== 'Literal') {
      return;
    }
    if (typeof modulePath.value !== 'string') {
      return;
    }

    checkSourceValue(modulePath, node, 'import');
  }

  // for CommonJS `require` calls
  // adapted from @mctep: https://git.io/v4rAu
  /** @type {(call: Call) => void} */
  function checkCommon(call) {
    if (call.callee.type !== 'Identifier') {
      return;
    }
    if (call.callee.name !== 'require') {
      return;
    }
    if (call.arguments.length !== 1) {
      return;
    }

    const modulePath = call.arguments[0];
    if (modulePath.type !== 'Literal') {
      return;
    }
    if (typeof modulePath.value !== 'string') {
      return;
    }

    checkSourceValue(modulePath, call, 'require');
  }

  /** @type {(call: Call) => void} */
  function checkAMD(call) {
    if (call.callee.type !== 'Identifier') {
      return;
    }
    if (call.callee.name !== 'require' && call.callee.name !== 'define') {
      return;
    }
    if (call.arguments.length !== 2) {
      return;
    }

    const modules = call.arguments[0];
    if (modules.type !== 'ArrayExpression') {
      return;
    }

    for (const element of modules.elements) {
      if (!element) {
        continue;
      }
      if (element.type !== 'Literal') {
        continue;
      }
      if (typeof element.value !== 'string') {
        continue;
      }

      if (element.value === 'require' || element.value === 'exports') {
        continue; // magic modules: https://github.com/requirejs/requirejs/wiki/Differences-between-the-simplified-CommonJS-wrapper-and-standard-AMD-define#magic-modules
      }

      checkSourceValue(element, element, 'require');
    }
  }

  const visitors = {};
  if (esmodule) {
    Object.assign(visitors, {
      ImportDeclaration: checkSource,
      ExportNamedDeclaration: checkSource,
      ExportAllDeclaration: checkSource,
      CallExpression: checkImportCall,
      ImportExpression: checkImportCall,
    });
  }

  if (commonjs || amd) {
    const currentCallExpression = visitors.CallExpression;
    visitors.CallExpression = /** @type {(call: Call) => void} */ function (call) {
      if (currentCallExpression) {
        currentCallExpression(call);
      }
      if (commonjs) {
        checkCommon(call);
      }
      if (amd) {
        checkAMD(call);
      }
    };
  }

  return visitors;
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
