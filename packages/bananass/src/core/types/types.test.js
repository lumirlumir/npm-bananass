/**
 * @fileoverview Test for `types.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import {
  configObject,
  configObjectBrowser,
  configObjectConsole,
  configObjectAdd,
  configObjectBug,
  configObjectBuild,
  configObjectDiscussion,
  configObjectHome,
  configObjectInfo,
  configObjectOpen,
  configObjectRepo,
  configObjectRun,
  problem,
  problems,
  input,
  output,
  testcase,
  testcases,
  solution,
} from './types.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('types', () => {
  describe('config-object', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObject.safeParse(object).success, true);
    });
    it('should return true for a valid object with some properties', () => {
      const object = {
        cwd: '/path/to/directory',
        entryDir: 'entry',

        browser: {
          browser: 'default',
          secret: false,
        },
        console: {
          debug: false,
        },
      };

      strictEqual(configObject.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObject.safeParse(object).success, false);
    });
    it('should return false for an invalid type', () => {
      strictEqual(configObject.safeParse(0).success, false);
      strictEqual(configObject.safeParse('string').success, false);
      strictEqual(configObject.safeParse(true).success, false);
      strictEqual(configObject.safeParse(undefined).success, false);
      strictEqual(configObject.safeParse(null).success, false);
      strictEqual(configObject.safeParse([]).success, false);
    });
  });

  describe('config-object-browser', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` property (`chrome`)', () => {
      const object = {
        browser: 'chrome',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` property (`edge`)', () => {
      const object = {
        browser: 'edge',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` property (`firefox`)', () => {
      const object = {
        browser: 'firefox',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` property (`brave`)', () => {
      const object = {
        browser: 'brave',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` property (`default`)', () => {
      const object = {
        browser: 'default',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `secret` property', () => {
      const object = {
        secret: true,
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` and `secret` property', () => {
      const object = {
        browser: 'default',
        secret: false,
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, false);
    });
    it('should return false for an invalid `browser` property', () => {
      const object = {
        browser: 'chrmoe',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, false);
    });
  });

  describe('config-object-console', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectConsole.safeParse(object).success, true);
    });
    it('should return true for a valid `debug` property', () => {
      const object = {
        debug: true,
      };

      strictEqual(configObjectConsole.safeParse(object).success, true);
    });
    it('should return true for a valid `quiet` property', () => {
      const object = {
        quiet: true,
      };

      strictEqual(configObjectConsole.safeParse(object).success, true);
    });
    it('should return true for a valid `debug` and `quiet` property', () => {
      const object = {
        debug: true,
        quiet: true,
      };

      strictEqual(configObjectConsole.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectConsole.safeParse(object).success, false);
    });
    it('should return false for an invalid `debug` property', () => {
      const object = {
        debug: 'Hello, World!',
      };

      strictEqual(configObjectConsole.safeParse(object).success, false);
    });
  });

  describe('config-object-add', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectAdd.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectAdd.safeParse(object).success, false);
    });
  });

  describe('config-object-bug', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectBug.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectBug.safeParse(object).success, false);
    });
  });

  describe('config-object-build', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectBuild.safeParse(object).success, true);
    });
    it('should return true for a valid `clean` property (`true`)', () => {
      const object = {
        clean: true,
      };

      strictEqual(configObjectBuild.safeParse(object).success, true);
    });
    it('should return true for a valid `clean` property (`false`)', () => {
      const object = {
        clean: false,
      };

      strictEqual(configObjectBuild.safeParse(object).success, true);
    });
    it('should return true for a valid `templateType` property (`fs`)', () => {
      const object = {
        templateType: 'fs',
      };

      strictEqual(configObjectBuild.safeParse(object).success, true);
    });
    it('should return true for a valid `templateType` property (`rl`)', () => {
      const object = {
        templateType: 'rl',
      };

      strictEqual(configObjectBuild.safeParse(object).success, true);
    });
    it('should return true for a valid `clean` and `templateType` property', () => {
      const object = {
        clean: true,
        templateType: 'fs',
      };

      strictEqual(configObjectBuild.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectBuild.safeParse(object).success, false);
    });
    it('should return false for an invalid `templateType` property', () => {
      const object = {
        templateType: 'fe',
      };

      strictEqual(configObjectBuild.safeParse(object).success, false);
    });
  });

  describe('config-object-discussion', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectDiscussion.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectDiscussion.safeParse(object).success, false);
    });
  });

  describe('config-object-home', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectHome.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectHome.safeParse(object).success, false);
    });
  });

  describe('config-object-info', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectInfo.safeParse(object).success, true);
    });
    it('should return true for a valid `all` property (`true`)', () => {
      const object = {
        all: true,
      };

      strictEqual(configObjectInfo.safeParse(object).success, true);
    });
    it('should return true for a valid `all` property (`false`)', () => {
      const object = {
        all: false,
      };

      strictEqual(configObjectInfo.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectInfo.safeParse(object).success, false);
    });
    it('should return false for an invalid `all` property', () => {
      const object = {
        all: 'Hello, World!',
      };

      strictEqual(configObjectInfo.safeParse(object).success, false);
    });
  });

  describe('config-object-open', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectOpen.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectOpen.safeParse(object).success, false);
    });
  });

  describe('config-object-repo', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectRepo.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectRepo.safeParse(object).success, false);
    });
  });

  describe('config-object-run', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectRun.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectRun.safeParse(object).success, false);
    });
  });

  describe('problem', () => {
    // true
    it('should return true for a valid problem string', () => {
      const problem1 = '1234';
      const problem2 = '30002';

      strictEqual(problem.safeParse(problem1).success, true);
      strictEqual(problem.safeParse(problem2).success, true);
    });

    // false
    it('should return false if any problem number is below minimum', () => {
      const problem1 = '999';
      const problem2 = '0';
      const problem3 = '-999';

      strictEqual(problem.safeParse(problem1).success, false);
      strictEqual(problem.safeParse(problem2).success, false);
      strictEqual(problem.safeParse(problem3).success, false);
    });
    it('should return false if the value is non-string', () => {
      const problem1 = 1500;

      strictEqual(problem.safeParse(problem1).success, false);
    });
    it('should return false if the value is an empty string', () => {
      const problem1 = '';

      strictEqual(problem.safeParse(problem1).success, false);
    });
    it('should return false for non-integer inputs', () => {
      strictEqual(problem.safeParse(1000.5).success, false);
      strictEqual(problem.safeParse('1000.5').success, false);
    });
    it('should return false for non-string inputs', () => {
      strictEqual(problem.safeParse(null).success, false);
      strictEqual(problem.safeParse(undefined).success, false);
      strictEqual(problem.safeParse({}).success, false);
    });
  });

  describe('problems', () => {
    // true
    it('should return true for a single valid problem string', () => {
      const array = ['1234'];

      strictEqual(problems.safeParse(array).success, true);
    });
    it('should return true for valid problems array', () => {
      const array = ['1000', '1500', '2000'];

      strictEqual(problems.safeParse(array).success, true);
    });

    // false
    it('should return false for an empty array', () => {
      const array = [];

      strictEqual(problems.safeParse(array).success, false);
    });
    it('should return false if any problem number is below minimum', () => {
      const array = ['1000', '999', '1500'];

      strictEqual(problems.safeParse(array).success, false);
    });
    it('should return false if the array contains non-string values', () => {
      const array = ['1000', 1500, '2000'];

      strictEqual(problems.safeParse(array).success, false);
    });
    it('should return false if the array includes an empty string', () => {
      const array = ['1000', '', '2000'];

      strictEqual(problems.safeParse(array).success, false);
    });
    it('should return false for non-integer inputs', () => {
      const array = ['1000', '1500.5'];

      strictEqual(problems.safeParse(array).success, false);
    });
    it('should return false for non-array inputs', () => {
      strictEqual(problems.safeParse(null).success, false);
      strictEqual(problems.safeParse('1000').success, false);
      strictEqual(problems.safeParse({}).success, false);
    });
  });

  describe('input', () => {
    // true
    it('should return true for a single valid input string', () => {
      const input1 = 'Hello, World!';

      strictEqual(input.safeParse(input1).success, true);
    });
    it('should return true for a single valid input string with a newline character', () => {
      const input1 = 'Hello\nBaekjoon\nOnline Judge\n';

      strictEqual(input.safeParse(input1).success, true);
    });
    it('should return true for a single valid input string with template literals', () => {
      const input1 = `1
2
3
4
5`;

      strictEqual(input.safeParse(input1).success, true);
    });
    it('should return true for undefined', () => {
      const input1 = undefined;

      strictEqual(input.safeParse(input1).success, true);
    });

    // false
    it('should return false for other primitive types', () => {
      strictEqual(input.safeParse(1000).success, false);
      strictEqual(input.safeParse(true).success, false);
      strictEqual(input.safeParse(null).success, false);
      strictEqual(input.safeParse(Symbol('Hello, World!')).success, false);
      strictEqual(input.safeParse(BigInt(1000)).success, false);
      strictEqual(input.safeParse({}).success, false);
      strictEqual(input.safeParse([]).success, false);
      strictEqual(input.safeParse(() => {}).success, false);
    });
  });

  describe('output', () => {
    // true
    it('should return true for string', () => {
      const output1 = 'Hello, World!';

      strictEqual(output.safeParse(output1).success, true);
    });
    it('should return true for number', () => {
      const output1 = 1000;

      strictEqual(output.safeParse(output1).success, true);
    });
    it('should return true for boolean', () => {
      const output1 = true;

      strictEqual(output.safeParse(output1).success, true);
    });

    // false
    it('should return false for other primitive types', () => {
      strictEqual(output.safeParse(null).success, false);
      strictEqual(output.safeParse(undefined).success, false);
      strictEqual(output.safeParse(Symbol('Hello, World!')).success, false);
      strictEqual(output.safeParse(BigInt(1000)).success, false);
      strictEqual(output.safeParse({}).success, false);
      strictEqual(output.safeParse([]).success, false);
      strictEqual(output.safeParse(() => {}).success, false);
    });
  });

  describe('testcase', () => {
    // true
    it('should return true for a valid object without input', () => {
      const object = {
        output: 'result',
      };

      strictEqual(testcase.safeParse(object).success, true);
    });
    it('should return true for a valid object with input', () => {
      const object = {
        input: 'Hello, World!',
        output: 'Hello, World! processed',
      };

      strictEqual(testcase.safeParse(object).success, true);
    });

    // false
    it('should return false for an empty object', () => {
      const object = {};

      strictEqual(testcase.safeParse(object).success, false);
    });
    it('should return false for a object without output', () => {
      const object = {
        input: 'Hello, World!',
      };

      strictEqual(testcase.safeParse(object).success, false);
    });
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(testcase.safeParse(object).success, false);
    });
  });

  describe('testcases', () => {
    // true
    it('should return true for valid testcases', () => {
      const array = [
        {
          input: '1\n2',
          output: '3',
        },
        {
          input: '2\n3',
          output: '5',
        },
      ];

      strictEqual(testcases.safeParse(array).success, true);
    });

    // false
    it('should return false for an empty array', () => {
      const array = [];

      strictEqual(testcases.safeParse(array).success, false);
    });
    it('should return false for non-array inputs', () => {
      strictEqual(testcases.safeParse(null).success, false);
      strictEqual(testcases.safeParse('1000').success, false);
      strictEqual(testcases.safeParse({}).success, false);
    });
  });

  describe('solution', () => {
    // true

    // TODO: arror function, func declaration ...

    it('should return true for a function with 0 parameter (arrow func)', () => {
      const stringFunc = solution.implement(() => 'result');
      const numberFunc = solution.implement(() => 1);

      /*
       * NOTE: Zod expects an argument to always be present,
       * so calling a function without an argument, like `numberFunc()`, will fail.
       * https://github.com/colinhacks/zod/issues/2990#issuecomment-3100312904
       */

      strictEqual(stringFunc(undefined), 'result');
      strictEqual(stringFunc('1'), 'result');
      strictEqual(numberFunc(undefined), 1);
    });

    /*

    it('should return true for a function with 0 parameter (arrow func)', () => {
      const solution = () => 'result';

      strictEqual(Solution.is(solution), true);
    });
    it('should return true for a function with 1 parameter (arrow func)', () => {
      const solution = input => `${input} processed`;

      strictEqual(Solution.is(solution), true);
    });
    it('should return true for a function with 1 parameter (func declaration)', () => {
      function solution(input) {
        return `Result: ${input}`;
      }

      strictEqual(Solution.is(solution), true);
    });

    // false
    it('should return false for a function with 2 parameters', () => {
      const solution = (input, extra) => input + extra;

      strictEqual(Solution.is(solution), false);
    });
    it('should return false for a function with 3 parameters', () => {
      const solution = (a, b, c) => a + b + c;

      strictEqual(Solution.is(solution), false);
    });
    it('should return false for non-function values', () => {
      strictEqual(Solution.is('string'), false);
      strictEqual(Solution.is(123), false);
      strictEqual(Solution.is({}), false);
      strictEqual(Solution.is([]), false);
      strictEqual(Solution.is(null), false);
      strictEqual(Solution.is(undefined), false);
    });

    */
  });
});
