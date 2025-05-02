/**
 * @fileoverview Test for `baekjoon` fetcher.
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { deepStrictEqual, rejects } from 'node:assert';
import { describe, it, before, mock } from 'node:test';

let baekjoonParser;

// --------------------------------------------------------------------------------
// Mock HTML for cheerio
// --------------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const mockHTML = await readFile(
  path.resolve(__dirname, './test-data/boj/1000.html'),
  'utf-8',
);

// --------------------------------------------------------------------------------
// Setup
// --------------------------------------------------------------------------------

const getFunctionMock = mock.fn();

before(async () => {
  mock.module('axios', {
    defaultExport: {
      get: getFunctionMock,
    },
  });

  baekjoonParser = (await import('./parsers.js')).default.baekjoon;
});

describe('baekjoon parser', () => {
  it('should parse sample inputs and outputs correctly', async () => {
    getFunctionMock.mock.mockImplementationOnce(async () => ({ data: mockHTML }));

    const result = await baekjoonParser(1000);
    deepStrictEqual(result, [{ input: '1 2', output: '3' }]);
  });

  it('should throw an error if fetch fails', async () => {
    getFunctionMock.mock.mockImplementationOnce(async () => {
      throw new Error('Network error');
    });

    await rejects(() => baekjoonParser(1000), /Failed to parse BOJ problem testcase/);
  });
});
