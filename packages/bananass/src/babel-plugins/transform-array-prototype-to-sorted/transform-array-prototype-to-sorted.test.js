/**
 * @fileoverview Test for `transform-array-prototype-to-sorted.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { transformSync } from '@babel/core';

import transformArrayPrototypeToSorted from './transform-array-prototype-to-sorted.js';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const options = {
  plugins: [transformArrayPrototypeToSorted],
};

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('transform-array-prototype-to-sorted', () => {
  it('should transform dot form `arr.toSorted()` to `arr.slice().sort()`', () => {
    const code = '[1, 2, 3].toSorted();';
    const transformedCode = transformSync(code, options).code;
    const expected = '[1, 2, 3].slice().sort();';

    strictEqual(transformedCode, expected);
  });

  it('should transform bracket form `arr["toSorted"]()` to `arr.slice().sort()`', () => {
    const code = '[1, 2, 3]["toSorted"]();';
    const transformedCode = transformSync(code, options).code;
    const expected = '[1, 2, 3].slice().sort();';

    strictEqual(transformedCode, expected);
  });

  it('should transform with a compare function', () => {
    const code = '[3, 1, 2].toSorted((a, b) => b - a);';
    const transformedCode = transformSync(code, options).code;
    const expected = '[3, 1, 2].slice().sort((a, b) => b - a);';

    strictEqual(transformedCode, expected);
  });

  it('should transform chained calls', () => {
    const code = 'getArr().toSorted().map(x => x * 2);';
    const transformedCode = transformSync(code, options).code;
    const expected = 'getArr().slice().sort().map(x => x * 2);';

    strictEqual(transformedCode, expected);
  });

  it('should transform consecutive calls', () => {
    const code = '[1, 2, 3].toSorted().toSorted();';
    const transformedCode = transformSync(code, options).code;
    const expected = '[1, 2, 3].slice().sort().slice().sort();';

    strictEqual(transformedCode, expected);
  });

  it('should not transform when more than one argument is passed', () => {
    const code = '[1, 2].toSorted(compareFn, extra);';
    const transformedCode = transformSync(code, options).code;

    strictEqual(transformedCode, code);
  });

  it('should not touch non-toSorted methods', () => {
    const code = '[1, 2, 3].slice();';
    const transformedCode = transformSync(code, options).code;

    strictEqual(transformedCode, code);
  });
});
