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
  // problem,
  // problems,
  // input,
  output,
  testcase,
  testcases,
  // solution,
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
    it('should return true for a valid `clean` property', () => {
      const object = {
        clean: true,
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
    it('should return true for a valid `all` property', () => {
      const object = {
        all: true,
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

  describe('output', () => {
    // true
    it('should return true for string', () => {
      const out = 'Hello, World!';

      strictEqual(output.safeParse(out).success, true);
    });

    it('should return true for number', () => {
      const out = 1000;

      strictEqual(output.safeParse(out).success, true);
    });

    it('should return true for boolean', () => {
      const out = true;

      strictEqual(output.safeParse(out).success, true);
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
});
