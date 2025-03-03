/**
 * @fileoverview Test for `config-object-discussion.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectDiscussion from './config-object-discussion.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-discussion.js', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectDiscussion = {};

    strictEqual(ConfigObjectDiscussion.is(configObjectDiscussion), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectDiscussion = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectDiscussion.is(configObjectDiscussion), false);
  });
});
