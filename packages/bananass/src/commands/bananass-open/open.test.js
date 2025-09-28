/**
 * @fileoverview Test for `open.js`.
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

describe('open', () => {
  // ------------------------------------------------------------------------------
  // Mocking
  // ------------------------------------------------------------------------------

  let open;
  const openPkgDefaultExportMock = mock.fn(() => {});

  before(async () => {
    const openPkgNamedExports = await import('open').then(
      ({ default: _, ...rest }) => rest,
    );

    // Mocking `open` package.
    mock.module('open', {
      defaultExport: openPkgDefaultExportMock,
      namedExports: openPkgNamedExports,
    });

    // Mocking `open` function.
    open = await import('./open.js').then(({ default: d }) => d);
  });

  afterEach(() => {
    openPkgDefaultExportMock.mock.resetCalls();
  });

  // ------------------------------------------------------------------------------
  // Test
  // ------------------------------------------------------------------------------

  describe('should use default parameters correctly', () => {
    it('should use default parameters when no arguments are provided', async () => {
      await open(['1000']); // Same with `await doesNotReject(() => open());`.
    });

    it('should use default parameters when empty object (`{}`) is provided', async () => {
      await open(['1000'], {});
    });

    it('should use default parameters when only browser object is provided', async () => {
      await open(['1000'], { browser: {} });
    });

    it('should use default parameters when only console object is provided', async () => {
      await open(['1000'], { console: {} });
    });

    it('should use default parameters when both empty objects are provided', async () => {
      await open(['1000'], { browser: {}, console: {} });
    });

    it('should handle mixed valid and invalid values', async () => {
      await open(['1000'], { browser: { browser: 'chrome' }, console: { quiet: true } });
    });
  });

  describe('should work as expected', () => {
    it('should reject when invalid values are provided', async () => {
      await rejects(() => open(['999']));
      await rejects(() => open(['1000', 1001]));
      await rejects(() => open(['1000'], { invalid: 'invalid' }));
      await rejects(() => open(['999'], { invalid: 'invalid' }));
    });

    it('should open the baekjoon website problem page in a browser', async () => {
      await open(['1000', '1001', '1002']);

      strictEqual(openPkgDefaultExportMock.mock.callCount(), 3); // Should open the browser.
      match(openPkgDefaultExportMock.mock.calls[0].arguments[0], /problem/); // Should open the baekjoon website problem page.
    });

    it('should throw an error when browser opening fails for some reason', async () => {
      openPkgDefaultExportMock.mock.mockImplementationOnce(() => {
        throw new Error();
      });

      await rejects(() => open(['1000']), { name: 'Error' });
      strictEqual(openPkgDefaultExportMock.mock.callCount(), 1); // Check the number of calls (whether `open` was called even if an error occurred)
    });
  });
});
