/**
 * @fileoverview Test for `run.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { rejects } from 'node:assert';
import { describe, it } from 'node:test';

import run from './run.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('run', () => {
  describe('should work as expected', () => {
    it('should reject when invalid values are provided', async () => {
      await rejects(() => run(['999']));
      await rejects(() => run(['1000', 1001]));
      await rejects(() => run(['1000'], { invalid: 'invalid' }));
      await rejects(() => run(['999'], { invalid: 'invalid' }));
      await rejects(() => run(['1000'], { build: { clean: 'true' } }));
    });
  });
});
