/**
 * @fileoverview Transform `array.prototype.toReversed()` to `array.prototype.slice().reverse()`.
 * AST: https://astexplorer.net/
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { types as t } from '@babel/core';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Transform `array.prototype.toReversed()` to `array.prototype.slice().reverse()`.
 *
 * Compatibility: ES3
 * - `slice()`: ES3
 * - `reverse()`: ES1
 *
 * @return {import("@babel/core").PluginObj}
 */
export default function transformArrayPrototypeToReversed() {
  return {
    name: 'transform-array-prototype-to-reversed',

    visitor: {
      CallExpression(path) {
        const { node } = path;

        if (
          t.isMemberExpression(node.callee) &&
          t.isIdentifier(node.callee.property, { name: 'toReversed' }) &&
          node.arguments.length === 0
        ) {
          const arr = node.callee.object;
          const sliceCall = t.callExpression(
            t.memberExpression(arr, t.identifier('slice')),
            [],
          );
          const reverseCall = t.callExpression(
            t.memberExpression(sliceCall, t.identifier('reverse')),
            [],
          );

          path.replaceWith(reverseCall);
        }
      },
    },
  };
}
