/**
 * @fileoverview Test for `generate-google-analytics-script.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import generateGoogleAnalyticsScript from './generate-google-analytics-script.js';

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const googleAnalyticsID = 'G-1234567890';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('generate-google-analytics-script.js', () => {
  it('should return an array', () => {
    const actual = Array.isArray(generateGoogleAnalyticsScript(googleAnalyticsID));
    const expected = true;

    strictEqual(actual, expected);
  });

  it('should return an array with a length of 2', () => {
    const actual = generateGoogleAnalyticsScript(googleAnalyticsID).length;
    const expected = 2;

    strictEqual(actual, expected);
  });
});
