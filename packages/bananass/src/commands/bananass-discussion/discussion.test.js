/**
 * @fileoverview Test for `discussion.js`.
 * @see https://nodejs.org/en/learn/test-runner/mocking#modules--units
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { match, strictEqual, rejects } from 'node:assert';
import { describe, it, before, afterEach, mock } from 'node:test';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('discussion', () => {
  // ------------------------------------------------------------------------------
  // Mocking
  // ------------------------------------------------------------------------------

  let discussion;
  const openDefaultExportMock = mock.fn(() => {});

  before(async () => {
    const openNamedExports = await import('open').then(({ default: _, ...rest }) => rest);

    // Mocking `open` package.
    mock.module('open', {
      defaultExport: openDefaultExportMock,
      namedExports: openNamedExports,
    });

    // Mocking `discussion` function.
    discussion = await import('./discussion.js').then(({ default: d }) => d);
  });

  afterEach(() => {
    openDefaultExportMock.mock.resetCalls();
  });

  // ------------------------------------------------------------------------------
  // Test
  // ------------------------------------------------------------------------------

  describe('should use default parameters correctly', () => {
    it('should use default parameters when no arguments are provided', async () => {
      await discussion(); // Same with `await doesNotReject(() => discussion());`.
    });

    it('should use default parameters when empty object (`{}`) is provided', async () => {
      await discussion({});
    });

    it('should use default parameters when only browser object is provided', async () => {
      await discussion({ browser: {} });
    });

    it('should use default parameters when only console object is provided', async () => {
      await discussion({ console: {} });
    });

    it('should use default parameters when both empty objects are provided', async () => {
      await discussion({ browser: {}, console: {} });
    });

    it('should handle mixed valid and invalid values', async () => {
      await discussion({ browser: { browser: 'chrome' }, console: { quiet: true } });
    });
  });

  describe('should work as expected', () => {
    it('should reject when invalid values are provided', async () => {
      await rejects(() => discussion({ invalid: 'invalid' }));
      await rejects(() => discussion({ console: { debug: 'true' } }));
    });

    it('should open the github discussions in a browser', async () => {
      await discussion();

      strictEqual(openDefaultExportMock.mock.callCount(), 1); // Should open the browser.
      match(openDefaultExportMock.mock.calls[0].arguments[0], /discussions/); // Should open the github discussions.
    });

    it('should throw an error when browser opening fails for some reason', async () => {
      openDefaultExportMock.mock.mockImplementationOnce(() => {
        throw new Error();
      });

      await rejects(() => discussion(), { name: 'Error' });
      strictEqual(openDefaultExportMock.mock.callCount(), 1); // Check the number of calls (whether `open` was called even if an error occurred)
    });
  });
});
