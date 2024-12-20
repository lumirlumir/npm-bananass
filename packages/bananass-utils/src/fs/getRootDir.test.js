/**
 * @fileoverview Test for `getRootDir.js`.
 */

/* eslint-disable import/extensions */ // TODO: Remove this line after developing `eslint-config-bananass` package.

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual, throws } from 'node:assert';
import { describe, it, mock, afterEach } from 'node:test';
import { resolve } from 'node:path';
import cp from 'node:child_process';
import fs from 'node:fs';

import getRootDir from './getRootDir.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

afterEach(() => {
  mock.reset();
});

describe('getRootDir.js', () => {
  it('should return `process.cwd()` when `package.json` exists in current directory', () => {
    const MOCK_CWD = resolve('my-folder', 'cwd');
    const MOCK_VALID_PATHS = [MOCK_CWD, resolve(MOCK_CWD, 'package.json')];

    mock.method(process, 'cwd', () => MOCK_CWD);
    mock.method(fs, 'existsSync', path => MOCK_VALID_PATHS.includes(path));

    strictEqual(getRootDir(), MOCK_CWD);
  });

  it('should throw error when git command fails', () => {
    const MOCK_CWD = resolve('my-folder', 'cwd');
    const MOCK_VALID_PATHS = [MOCK_CWD, resolve(MOCK_CWD, '..', 'package.json')];

    mock.method(process, 'cwd', () => MOCK_CWD);
    mock.method(fs, 'existsSync', path => MOCK_VALID_PATHS.includes(path));
    mock.method(cp, 'execSync', () => {
      throw new Error('Throw error');
    });

    throws(() => getRootDir(), { name: 'Error', message: /Git command failed/ });
  });

  it('should return git root when `package.json` exists only in git root', () => {
    const MOCK_CWD = resolve('my-folder', 'cwd');
    const MOCK_GIT_ROOT = resolve(MOCK_CWD, '..');
    const MOCK_VALID_PATHS = [
      MOCK_CWD,
      MOCK_GIT_ROOT,
      resolve(MOCK_GIT_ROOT, 'package.json'),
    ];

    mock.method(process, 'cwd', () => MOCK_CWD);
    mock.method(fs, 'existsSync', path => MOCK_VALID_PATHS.includes(path));
    mock.method(cp, 'execSync', () => MOCK_GIT_ROOT);

    strictEqual(getRootDir(), MOCK_GIT_ROOT);
  });

  it('should throw error when `package.json` not found anywhere', () => {
    const MOCK_CWD = resolve('my-folder', 'cwd');
    const MOCK_GIT_ROOT = resolve(MOCK_CWD, '..');
    const MOCK_VALID_PATHS = [MOCK_CWD, MOCK_GIT_ROOT];

    mock.method(process, 'cwd', () => MOCK_CWD);
    mock.method(fs, 'existsSync', path => MOCK_VALID_PATHS.includes(path));
    mock.method(cp, 'execSync', () => MOCK_GIT_ROOT);

    throws(() => getRootDir(), { name: 'Error', message: /Cannot find root directory/ });
  });
});