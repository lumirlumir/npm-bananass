import axios from 'axios';
import * as cheerio from 'cheerio';
import { URL_BOJ_PROBLEM } from '../../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../core/types.js').Problem} Problem
 * @typedef {import('../../core/types.js').Testcases} Testcases
 */

export default {
  /**
   * @param {Problem} problem
   * @returns {Promise<Testcases>}
   */
  baekjoon: async problem => {
    try {
      const response = await axios.get(URL_BOJ_PROBLEM(problem), {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
      });
      const $ = cheerio.load(response.data);

      const sampleInputs = [];
      const sampleOutputs = [];

      let idx = 1;
      while (true) {
        const inputElem = $(`#sample-input-${idx}`);
        const outputElem = $(`#sample-output-${idx}`);

        if (inputElem.length === 0 && outputElem.length === 0) break;

        sampleInputs.push(inputElem.text().trim() || '');
        sampleOutputs.push(outputElem.text().trim() || '');
        idx++;
      }

      return sampleOutputs.map((output, i) => ({
        input: sampleInputs[i],
        output,
      }));
    } catch (error) {
      throw new Error(
        `Failed to parse BOJ problem testcase from ${problem}: ${error.message}`,
      );
    }
  },
};
