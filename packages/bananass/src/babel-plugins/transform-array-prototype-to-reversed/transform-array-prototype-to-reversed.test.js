/**
 * @fileoverview Test for `transform-array-prototype-to-reversed.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { transformSync } from '@babel/core';

import transformArrayPrototypeToReversed from './transform-array-prototype-to-reversed.js';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const options = {
  plugins: [transformArrayPrototypeToReversed],
};

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('transform-array-prototype-to-reversed.js', () => {
  it('should transform `arr.toReversed()` to `arr.slice().reverse()`', () => {
    const code = '[1, 2, 3].toReversed();';
    const transformedCode = transformSync(code, options).code;
    const expected = '[1, 2, 3].slice().reverse();';

    strictEqual(transformedCode, expected);
  });

  it('should transform chained calls', () => {
    const code = 'getArr().toReversed().map(x => x * 2);';
    const transformedCode = transformSync(code, options).code;
    const expected = 'getArr().slice().reverse().map(x => x * 2);';

    strictEqual(transformedCode, expected);
  });

  it('should transform consecutive calls', () => {
    const code = '[1, 2, 3].toReversed().toReversed();';
    const transformedCode = transformSync(code, options).code;
    const expected = '[1, 2, 3].slice().reverse().slice().reverse();';

    strictEqual(transformedCode, expected);
  });

  it('should not transform when an argument is passed', () => {
    const code = '[1, 2, 3].toReversed(123);';
    const transformedCode = transformSync(code, options).code;

    strictEqual(transformedCode, code);
  });

  it('should not touch non-toReversed methods', () => {
    const code = '[1, 2, 3].reverse();';
    const transformedCode = transformSync(code, options).code;

    strictEqual(transformedCode, code);
  });
});
