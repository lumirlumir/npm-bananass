/**
 * @fileoverview Test for `input.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import Input from './input.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('input', () => {
  // true
  it('should return true for a single valid input string', () => {
    const input = 'Hello, World!';

    strictEqual(Input.is(input), true);
  });

  it('should return true for a single valid input string with a newline character', () => {
    const input = 'Hello\nBaekjoon\nOnline Judge\n';

    strictEqual(Input.is(input), true);
  });

  it('should return true for a single valid input string with template literals', () => {
    const input = `1
2
3
4
5`;

    strictEqual(Input.is(input), true);
  });

  // false
  it('should return false for other primitive types', () => {
    strictEqual(Input.is(1000), false);
    strictEqual(Input.is(true), false);
    strictEqual(Input.is(null), false);
    strictEqual(Input.is(undefined), false);
    strictEqual(Input.is(Symbol('Hello, World!')), false);
    strictEqual(Input.is(BigInt(1000)), false);
    strictEqual(Input.is({}), false);
    strictEqual(Input.is([]), false);
    strictEqual(
      Input.is(() => {}),
      false,
    );
  });
});
