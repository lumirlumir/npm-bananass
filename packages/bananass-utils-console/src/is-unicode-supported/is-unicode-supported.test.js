/**
 * @fileoverview Test for `is-unicode-supported.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import process from 'node:process';
import { describe, it } from 'node:test';
import { ok } from 'node:assert';

import isUnicodeSupported from './is-unicode-supported.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('is-unicode-supported', () => {
  it('main', () => {
    if (process.platform !== 'win32') {
      ok(isUnicodeSupported());
    }
  });

  it('windows', () => {
    delete process.env.CI;
    delete process.env.TERM;
    delete process.env.TERM_PROGRAM;
    delete process.env.WT_SESSION;
    delete process.env.TERMINUS_SUBLIME;

    const originalPlatform = process.platform;

    Object.defineProperty(process, 'platform', { value: 'win32' });
    ok(!isUnicodeSupported());
    process.env.WT_SESSION = '1';
    ok(isUnicodeSupported());

    Object.defineProperty(process, 'platform', { value: originalPlatform });
  });
});
