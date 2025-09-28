/**
 * @fileoverview Test for `info.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { rejects } from 'node:assert';
import { describe, it, mock } from 'node:test';

import envinfo from 'envinfo';

import info from './info.js';

// ------------------------------------------------------------------------------
// Mocking
// ------------------------------------------------------------------------------

mock.method(envinfo, 'run', () => {}); // Mocking `envinfo.run` method.
mock.method(console, 'log', () => {}); // Suppress console output.

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('info', () => {
  describe('should use default parameters correctly', () => {
    it('should use default parameters when no arguments are provided', async () => {
      await info(); // Same with `await doesNotReject(() => info());`.
    });

    it('should use default parameters when empty object (`{}`) is provided', async () => {
      await info({});
    });

    it('should use default parameters when only console object is provided', async () => {
      await info({ console: {} });
    });

    it('should use default parameters when only info object is provided', async () => {
      await info({ info: {} });
    });
  });

  describe('should work as expected', () => {
    it('should reject when invalid values are provided', async () => {
      await rejects(() => info({ invalid: 'invalid' }));
      await rejects(() => info({ console: { debug: 'true' } }));
    });

    it('should run correctly', async () => {
      await info();
    });
  });
});
