/**
 * @fileoverview Test for `home.js`.
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

describe('home', () => {
  // ------------------------------------------------------------------------------
  // Mocking
  // ------------------------------------------------------------------------------

  let home;
  const openDefaultExportMock = mock.fn(() => {});

  before(async () => {
    const openNamedExports = await import('open').then(({ default: _, ...rest }) => rest);

    // Mocking `open` package.
    mock.module('open', {
      defaultExport: openDefaultExportMock,
      namedExports: openNamedExports,
    });

    // Mocking `home` function.
    home = await import('./home.js').then(({ default: d }) => d);
  });

  afterEach(() => {
    openDefaultExportMock.mock.resetCalls();
  });

  // ------------------------------------------------------------------------------
  // Test
  // ------------------------------------------------------------------------------

  describe('should use default parameters correctly', () => {
    it('should use default parameters when no arguments are provided', async () => {
      await home(); // Same with `await doesNotReject(() => home());`.
    });

    it('should use default parameters when empty object (`{}`) is provided', async () => {
      await home({});
    });

    it('should use default parameters when only browser object is provided', async () => {
      await home({ browser: {} });
    });

    it('should use default parameters when only console object is provided', async () => {
      await home({ console: {} });
    });

    it('should use default parameters when both empty objects are provided', async () => {
      await home({ browser: {}, console: {} });
    });

    it('should handle mixed valid and invalid values', async () => {
      await home({ browser: { browser: 'chrome' }, console: { quiet: true } });
    });
  });

  describe('should work as expected', () => {
    it('should reject when invalid values are provided', async () => {
      await rejects(() => home({ invalid: 'invalid' }));
    });

    it('should open the homepage in a browser', async () => {
      await home();

      strictEqual(openDefaultExportMock.mock.callCount(), 1); // Should open the browser.
      match(openDefaultExportMock.mock.calls[0].arguments[0], /bananass/); // Should open the homepage.
    });

    it('should throw an error when browser opening fails for some reason', async () => {
      openDefaultExportMock.mock.mockImplementationOnce(() => {
        throw new Error();
      });

      await rejects(() => home(), { name: 'Error' });
      strictEqual(openDefaultExportMock.mock.callCount(), 1); // Check the number of calls (whether `open` was called even if an error occurred)
    });
  });
});
