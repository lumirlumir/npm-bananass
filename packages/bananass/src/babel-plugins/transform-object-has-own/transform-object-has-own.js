/**
 * @fileoverview Transform ES2022 `Object.hasOwn(obj, prop)` to `Object.prototype.hasOwnProperty.call(obj, prop)`.
 * AST: https://astexplorer.net/
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { types as t } from '@babel/core';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { PluginObj } from '@babel/core';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Transform ES2022 `Object.hasOwn(obj, prop)` to `Object.prototype.hasOwnProperty.call(obj, prop)`.
 *
 * Compatibility: ES1
 *
 * @return {PluginObj}
 */
export default function transformObjectHasOwn() {
  return {
    name: 'transform-object-has-own',

    visitor: {
      CallExpression(path) {
        const { node } = path;

        if (
          t.isMemberExpression(node.callee) &&
          t.isIdentifier(node.callee.object, { name: 'Object' }) &&
          (node.callee.computed
            ? // bracket form: `Object['hasOwn']`
              t.isStringLiteral(node.callee.property, { value: 'hasOwn' })
            : // dot form: `Object.hasOwn`
              t.isIdentifier(node.callee.property, { name: 'hasOwn' })) &&
          node.arguments.length === 2
        ) {
          const [objArg, propArg] = node.arguments;

          const replacement = t.callExpression(
            t.memberExpression(
              t.memberExpression(
                t.memberExpression(t.identifier('Object'), t.identifier('prototype')),
                t.identifier('hasOwnProperty'),
              ),
              t.identifier('call'),
            ),
            [objArg, propArg],
          );

          path.replaceWith(replacement);
        }
      },
    },
  };
}
