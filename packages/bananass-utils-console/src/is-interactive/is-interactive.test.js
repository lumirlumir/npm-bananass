/**
 * @fileoverview Test for `is-interactive.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok } from 'node:assert';
import { describe, it } from 'node:test';
import { PassThrough } from 'node:stream';

import isInteractive from './is-interactive.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('is-interactive', () => {
  it('tty', () => {
    const ci = process.env.CI;
    delete process.env.CI;
    const stream = new PassThrough();
    stream.isTTY = true;

    ok(isInteractive(stream));

    process.env.CI = ci;
  });

  it('non-tty', () => {
    const stream = new PassThrough();
    stream.isTTY = false;

    ok(!isInteractive(stream));
  });

  it('dumb', () => {
    const term = process.env.TERM;
    process.env.TERM = 'dumb';

    ok(!isInteractive());

    process.env.TERM = term;
  });
});
