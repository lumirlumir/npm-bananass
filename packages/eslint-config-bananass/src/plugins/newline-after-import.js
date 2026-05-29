// @ts-nocheck -- TODO: Code was simply copied and pasted. Type annotations will be modified later.
/* eslint-disable -- TODO: Code was simply copied and pasted. Type annotations will be modified later. */

/**
 * @fileoverview Rule to enforce new line after import not followed by another import.
 * @author Radek Benkel
 */

function isStaticRequire(node) {
  return (
    node &&
    node.callee &&
    node.callee.type === 'Identifier' &&
    node.callee.name === 'require' &&
    node.arguments.length === 1 &&
    node.arguments[0].type === 'Literal' &&
    typeof node.arguments[0].value === 'string'
  );
}

function getScope(context, node) {
  const { sourceCode } = context;
  if (sourceCode && sourceCode.getScope) {
    return sourceCode.getScope(node);
  }
  return context.getScope();
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function containsNodeOrEqual(outerNode, innerNode) {
  return (
    outerNode.range[0] <= innerNode.range[0] && outerNode.range[1] >= innerNode.range[1]
  );
}

function getScopeBody(scope) {
  if (scope.block.type === 'SwitchStatement') {
    return null;
  }

  const { body } = scope.block;
  if (body && body.type === 'BlockStatement') {
    return body.body;
  }

  return body;
}

function findNodeIndexInScopeBody(body, nodeToFind) {
  return body.findIndex(node => containsNodeOrEqual(node, nodeToFind));
}

function getLineDifference(node, nextNode) {
  return nextNode.loc.start.line - node.loc.end.line;
}

function isClassWithDecorator(node) {
  return node.type === 'ClassDeclaration' && node.decorators && node.decorators.length;
}

function isExportDefaultClass(node) {
  return (
    node.type === 'ExportDefaultDeclaration' &&
    node.declaration.type === 'ClassDeclaration'
  );
}

function isExportNameClass(node) {
  return (
    node.type === 'ExportNamedDeclaration' &&
    node.declaration &&
    node.declaration.type === 'ClassDeclaration'
  );
}

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      category: 'Style guide',
      description: 'Enforce a newline after import statements.',
      url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md',
    },
    fixable: 'whitespace',
    schema: [
      {
        type: 'object',
        properties: {
          count: {
            type: 'integer',
            minimum: 1,
          },
          exactCount: { type: 'boolean' },
          considerComments: { type: 'boolean' },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    let level = 0;
    const requireCalls = [];
    const options = {
      count: 1,
      exactCount: false,
      considerComments: false,
      ...context.options[0],
    };

    function checkForNewLine(node, nextNode, type) {
      if (isExportDefaultClass(nextNode) || isExportNameClass(nextNode)) {
        const classNode = nextNode.declaration;

        if (isClassWithDecorator(classNode)) {
          nextNode = classNode.decorators[0];
        }
      } else if (isClassWithDecorator(nextNode)) {
        nextNode = nextNode.decorators[0];
      }

      const lineDifference = getLineDifference(node, nextNode);
      const EXPECTED_LINE_DIFFERENCE = options.count + 1;

      if (
        lineDifference < EXPECTED_LINE_DIFFERENCE ||
        (options.exactCount && lineDifference !== EXPECTED_LINE_DIFFERENCE)
      ) {
        let column = node.loc.start.column;

        if (node.loc.start.line !== node.loc.end.line) {
          column = 0;
        }

        context.report({
          loc: {
            line: node.loc.end.line,
            column,
          },
          message: `Expected ${options.count} empty line${options.count > 1 ? 's' : ''} after ${type} statement not followed by another ${type}.`,
          fix:
            options.exactCount && EXPECTED_LINE_DIFFERENCE < lineDifference
              ? undefined
              : fixer =>
                  fixer.insertTextAfter(
                    node,
                    '\n'.repeat(EXPECTED_LINE_DIFFERENCE - lineDifference),
                  ),
        });
      }
    }

    function commentAfterImport(node, nextComment, type) {
      const lineDifference = getLineDifference(node, nextComment);
      const EXPECTED_LINE_DIFFERENCE = options.count + 1;

      if (lineDifference < EXPECTED_LINE_DIFFERENCE) {
        let column = node.loc.start.column;

        if (node.loc.start.line !== node.loc.end.line) {
          column = 0;
        }

        context.report({
          loc: {
            line: node.loc.end.line,
            column,
          },
          message: `Expected ${options.count} empty line${options.count > 1 ? 's' : ''} after ${type} statement not followed by another ${type}.`,
          fix:
            options.exactCount && EXPECTED_LINE_DIFFERENCE < lineDifference
              ? undefined
              : fixer =>
                  fixer.insertTextAfter(
                    node,
                    '\n'.repeat(EXPECTED_LINE_DIFFERENCE - lineDifference),
                  ),
        });
      }
    }

    function incrementLevel() {
      level++;
    }
    function decrementLevel() {
      level--;
    }

    function checkImport(node) {
      const { parent } = node;

      if (!parent || !parent.body) {
        return;
      }

      const nodePosition = parent.body.indexOf(node);
      const nextNode = parent.body[nodePosition + 1];
      const endLine = node.loc.end.line;
      let nextComment;

      if (typeof parent.comments !== 'undefined' && options.considerComments) {
        nextComment = parent.comments.find(
          o =>
            o.loc.start.line >= endLine &&
            o.loc.start.line <= endLine + options.count + 1,
        );
      }

      // skip "export import"s
      if (node.type === 'TSImportEqualsDeclaration' && node.isExport) {
        return;
      }

      if (nextComment && typeof nextComment !== 'undefined') {
        commentAfterImport(node, nextComment, 'import');
      } else if (
        nextNode &&
        nextNode.type !== 'ImportDeclaration' &&
        (nextNode.type !== 'TSImportEqualsDeclaration' || nextNode.isExport)
      ) {
        checkForNewLine(node, nextNode, 'import');
      }
    }

    return {
      ImportDeclaration: checkImport,
      TSImportEqualsDeclaration: checkImport,
      CallExpression(node) {
        if (isStaticRequire(node) && level === 0) {
          requireCalls.push(node);
        }
      },
      'Program:exit'(node) {
        const scopeBody = getScopeBody(getScope(context, node));

        requireCalls.forEach((node, index) => {
          const nodePosition = findNodeIndexInScopeBody(scopeBody, node);
          const statementWithRequireCall = scopeBody[nodePosition];
          const nextStatement = scopeBody[nodePosition + 1];
          const nextRequireCall = requireCalls[index + 1];

          if (
            nextRequireCall &&
            containsNodeOrEqual(statementWithRequireCall, nextRequireCall)
          ) {
            return;
          }

          if (
            nextStatement &&
            (!nextRequireCall || !containsNodeOrEqual(nextStatement, nextRequireCall))
          ) {
            let nextComment;
            if (
              typeof statementWithRequireCall.parent.comments !== 'undefined' &&
              options.considerComments
            ) {
              const endLine = node.loc.end.line;
              nextComment = statementWithRequireCall.parent.comments.find(
                o =>
                  o.loc.start.line >= endLine &&
                  o.loc.start.line <= endLine + options.count + 1,
              );
            }

            if (nextComment && typeof nextComment !== 'undefined') {
              commentAfterImport(statementWithRequireCall, nextComment, 'require');
            } else {
              checkForNewLine(statementWithRequireCall, nextStatement, 'require');
            }
          }
        });
      },
      FunctionDeclaration: incrementLevel,
      FunctionExpression: incrementLevel,
      ArrowFunctionExpression: incrementLevel,
      BlockStatement: incrementLevel,
      ObjectExpression: incrementLevel,
      Decorator: incrementLevel,
      'FunctionDeclaration:exit': decrementLevel,
      'FunctionExpression:exit': decrementLevel,
      'ArrowFunctionExpression:exit': decrementLevel,
      'BlockStatement:exit': decrementLevel,
      'ObjectExpression:exit': decrementLevel,
      'Decorator:exit': decrementLevel,
    };
  },
};
