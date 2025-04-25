/**
 * @fileoverview Test for `transform-object-has-own.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { transformSync } from '@babel/core';

import transformObjectHasOwn from './transform-object-has-own.js';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const options = {
  plugins: [transformObjectHasOwn],
};

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('transform-object-has-own.js', () => {
  it('should transform dot form `Object.hasOwn(obj, prop)`', () => {
    const code = 'Object.hasOwn(obj, prop);';
    const transformedCode = transformSync(code, options).code;
    const expected = 'Object.prototype.hasOwnProperty.call(obj, prop);';

    strictEqual(transformedCode, expected);
  });

  it('should transform bracket form `Object["hasOwn"](obj, prop)`', () => {
    const code = 'Object["hasOwn"](obj, prop);';
    const transformedCode = transformSync(code, options).code;
    const expected = 'Object.prototype.hasOwnProperty.call(obj, prop);';

    strictEqual(transformedCode, expected);
  });

  it('should transform chained calls', () => {
    const code = 'Object.hasOwn(obj, prop).toString();';
    const transformedCode = transformSync(code, options).code;
    const expected = 'Object.prototype.hasOwnProperty.call(obj, prop).toString();';

    strictEqual(transformedCode, expected);
  });

  it('should not transform when argument count is not 2', () => {
    const oneArg = 'Object.hasOwn(obj);';
    strictEqual(transformSync(oneArg, options).code, oneArg);

    const threeArgs = 'Object.hasOwn(a, b, c);';
    strictEqual(transformSync(threeArgs, options).code, threeArgs);
  });

  it('should not touch other Object methods', () => {
    const code = 'Object.keys(obj);';
    const transformedCode = transformSync(code, options).code;

    strictEqual(transformedCode, code);
  });

  it('should not transform non-Object calls named hasOwn', () => {
    const code = 'foo.hasOwn(obj, prop);';
    const transformedCode = transformSync(code, options).code;

    strictEqual(transformedCode, code);
  });
});
