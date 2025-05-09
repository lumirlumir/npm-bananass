/**
 * @fileoverview Test for `repo.js`.
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

describe('repo', () => {
  // ------------------------------------------------------------------------------
  // Mocking
  // ------------------------------------------------------------------------------

  let repo;
  const openDefaultExportMock = mock.fn(() => {});

  before(async () => {
    const openNamedExports = await import('open').then(({ default: _, ...rest }) => rest);

    // Mocking `open` package.
    mock.module('open', {
      defaultExport: openDefaultExportMock,
      namedExports: openNamedExports,
    });

    // Mocking `repo` function.
    repo = await import('./repo.js').then(({ default: d }) => d);
  });

  afterEach(() => {
    openDefaultExportMock.mock.resetCalls();
  });

  // ------------------------------------------------------------------------------
  // Test
  // ------------------------------------------------------------------------------

  describe('should use default parameters correctly', () => {
    it('should use default parameters when no arguments are provided', async () => {
      await repo(); // Same with `await doesNotReject(() => repo());`.
    });

    it('should use default parameters when empty object (`{}`) is provided', async () => {
      await repo({});
    });

    it('should use default parameters when only browser object is provided', async () => {
      await repo({ browser: {} });
    });

    it('should use default parameters when only console object is provided', async () => {
      await repo({ console: {} });
    });

    it('should use default parameters when both empty objects are provided', async () => {
      await repo({ browser: {}, console: {} });
    });

    it('should handle mixed valid and invalid values', async () => {
      await repo({ browser: { browser: 'chrome' }, console: { quiet: true } });
    });
  });

  describe('should work as expected', () => {
    it('should reject when invalid values are provided', async () => {
      await rejects(() => repo({ invalid: 'invalid' }));
    });

    it('should open the github repository in a browser', async () => {
      await repo();

      strictEqual(openDefaultExportMock.mock.callCount(), 1); // Should open the browser.
      match(openDefaultExportMock.mock.calls[0].arguments[0], /lumirlumir\/npm-bananass/); // Should open the github repository.
    });

    it('should throw an error when browser opening fails for some reason', async () => {
      openDefaultExportMock.mock.mockImplementationOnce(() => {
        throw new Error();
      });

      await rejects(() => repo(), { name: 'Error' });
      strictEqual(openDefaultExportMock.mock.callCount(), 1); // Check the number of calls (whether `open` was called even if an error occurred)
    });
  });
});
