/**
 * @fileoverview Test for `logger.js`.
 */

/* eslint-disable import/extensions, no-console */ // TODO: Remove this line after developing `eslint-config-bananass` package.

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it, mock, afterEach } from 'node:test';

import createLogger from './logger.js';

// --------------------------------------------------------------------------------
// Mock
// --------------------------------------------------------------------------------

class ConsoleLogMock {
  #output = '';

  constructor() {
    mock.method(console, 'log', (...args) => {
      this.#output += `${args.join(' ')}\n`;
    }); // Mock `console.log` method.
  }

  reset() {
    this.#output = '';
  }

  get output() {
    return this.#output;
  }
}

const consoleLogMock = new ConsoleLogMock();

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

afterEach(() => {
  consoleLogMock.reset();
});

describe('logger.js', () => {
  describe('default behavior', () => {
    it('', () => {
      createLogger().log('Test message');

      strictEqual(consoleLogMock.output, '> Test message\n');
    });
    it('', () => {
      createLogger().log('Test message 1').log('Test message 2');

      strictEqual(consoleLogMock.output, '> Test message 1\n> Test message 2\n');
    });
    it('', () => {
      createLogger()
        .log('Test message 1')
        .log('Test message 2')
        .log()
        .log('Test message 3');

      strictEqual(
        consoleLogMock.output,
        '> Test message 1\n> Test message 2\n> \n> Test message 3\n',
      );
    });
  });

  // describe('options', () => {
  //   describe('debug', () => {});
  //   describe('quiet', () => {});
  //   describe('textPrefix', () => {});
  // });
  // it('quiet가 false일 때 log 메소드가 메시지를 출력합니다.', () => {
  //   logger = createLogger({ quiet: false });
  //   logger.log('테스트 메시지');
  //   strictEqual(outputData.trim(), '> 테스트 메시지');
  // });
  // it('quiet가 true일 때 log 메소드가 메시지를 출력하지 않습니다.', () => {
  //   logger = createLogger({ quiet: true });
  //   logger.log('테스트 메시지');
  //   strictEqual(outputData.trim(), '');
  // });
});
