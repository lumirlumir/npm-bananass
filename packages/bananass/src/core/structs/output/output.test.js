/**
 * @fileoverview Test for `output.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import Output from './output.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('output.js', () => {
  // true
  it('should return true for string', () => {
    const output = 'Hello, World!';

    strictEqual(Output.is(output), true);
  });

  it('should return true for number', () => {
    const output = 1000;

    strictEqual(Output.is(output), true);
  });

  it('should return true for boolean', () => {
    const output = true;

    strictEqual(Output.is(output), true);
  });

  // false
  it('should return false for other primitive types', () => {
    strictEqual(Output.is(null), false);
    strictEqual(Output.is(undefined), false);
    strictEqual(Output.is(Symbol('Hello, World!')), false);
    strictEqual(Output.is(BigInt(1000)), false);
    strictEqual(Output.is({}), false);
    strictEqual(Output.is([]), false);
    strictEqual(
      Output.is(() => {}),
      false,
    );
  });
});
