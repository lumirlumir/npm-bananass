/**
 * @fileoverview Transform ES2023 `Array.prototype.toSorted(compareFn)` to `Array.prototype.slice().sort(compareFn)`.
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
 * Transform ES2023 `Array.prototype.toSorted(compareFn)` to `Array.prototype.slice().sort(compareFn)`.
 *
 * Compatibility: ES3
 * - `slice()`: ES3
 * - `sort()`: ES1
 *
 * @return {PluginObj}
 */
export default function transformArrayPrototypeToSorted() {
  return {
    name: 'transform-array-prototype-to-sorted',

    visitor: {
      CallExpression(path) {
        const { node } = path;

        if (
          t.isMemberExpression(node.callee) &&
          (node.callee.computed
            ? // bracket form: `arr['toSorted']`
              t.isStringLiteral(node.callee.property, { value: 'toSorted' })
            : // dot form: `arr.toSorted`
              t.isIdentifier(node.callee.property, { name: 'toSorted' })) &&
          node.arguments.length <= 1
        ) {
          const arr = node.callee.object;
          const sliceCall = t.callExpression(
            t.memberExpression(arr, t.identifier('slice')),
            [],
          );
          const sortCall = t.callExpression(
            t.memberExpression(sliceCall, t.identifier('sort')),
            node.arguments,
          );

          path.replaceWith(sortCall);
        }
      },
    },
  };
}
