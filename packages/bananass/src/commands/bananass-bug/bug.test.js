/**
 * @fileoverview Test for `bug.js`.
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

describe('bug', () => {
  // ------------------------------------------------------------------------------
  // Mocking
  // ------------------------------------------------------------------------------

  let bug;
  const openDefaultExportMock = mock.fn(() => {});

  before(async () => {
    const openNamedExports = await import('open').then(({ default: _, ...rest }) => rest);

    // Mocking `open` package.
    mock.module('open', {
      defaultExport: openDefaultExportMock,
      namedExports: openNamedExports,
    });

    // Mocking `bug` function.
    bug = await import('./bug.js').then(({ default: d }) => d);
  });

  afterEach(() => {
    openDefaultExportMock.mock.resetCalls();
  });

  // ------------------------------------------------------------------------------
  // Test
  // ------------------------------------------------------------------------------

  describe('should use default parameters correctly', () => {
    it('should use default parameters when no arguments are provided', async () => {
      await bug(); // Same with `await doesNotReject(() => bug());`.
    });

    it('should use default parameters when empty object (`{}`) is provided', async () => {
      await bug({});
    });

    it('should use default parameters when only browser object is provided', async () => {
      await bug({ browser: {} });
    });

    it('should use default parameters when only console object is provided', async () => {
      await bug({ console: {} });
    });

    it('should use default parameters when both empty objects are provided', async () => {
      await bug({ browser: {}, console: {} });
    });

    it('should handle mixed valid and invalid values', async () => {
      await bug({ browser: { browser: 'chrome' }, console: { quiet: true } });
    });
  });

  describe('should work as expected', () => {
    it('should reject when invalid values are provided', async () => {
      await rejects(() => bug({ invalid: 'invalid' }));
      await rejects(() => bug({ console: { debug: 'true' } }));
    });

    it('should open the github issues in a browser', async () => {
      await bug();

      strictEqual(openDefaultExportMock.mock.callCount(), 1); // Should open the browser.
      match(openDefaultExportMock.mock.calls[0].arguments[0], /issues/); // Should open the github issues.
    });

    it('should throw an error when browser opening fails for some reason', async () => {
      openDefaultExportMock.mock.mockImplementationOnce(() => {
        throw new Error();
      });

      await rejects(() => bug(), { name: 'Error' });
      strictEqual(openDefaultExportMock.mock.callCount(), 1); // Check the number of calls (whether `open` was called even if an error occurred)
    });
  });
});
