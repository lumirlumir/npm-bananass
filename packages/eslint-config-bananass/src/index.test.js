/**
 * @fileoverview Test for `index.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import js from 'eslint-config-bananass/js';
import ts from 'eslint-config-bananass/ts';
import jsxReact from 'eslint-config-bananass/jsx-react';
import jsxNext from 'eslint-config-bananass/jsx-next';
import tsxReact from 'eslint-config-bananass/tsx-react';
import tsxNext from 'eslint-config-bananass/tsx-next';
import json from 'eslint-config-bananass/json';
import jsonc from 'eslint-config-bananass/jsonc';
import json5 from 'eslint-config-bananass/json5';
import packageJson from '../package.json' with { type: 'json' };

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('index', () => {
  describe('package.json', () => {
    it('should not have `typesVersions` keys that start with `./`', () => {
      const typesVersionKeys = Object.keys(packageJson.typesVersions['*']);

      strictEqual(typesVersionKeys.filter(key => key.startsWith('./')).length, 0);
    });
  });

  describe('subpath exports', () => {
    it('should have a `js` subpath export', () => {
      ok(js);
    });

    it('should have a `ts` subpath export', () => {
      ok(ts);
    });

    it('should have a `jsx-react` subpath export', () => {
      ok(jsxReact);
    });

    it('should have a `jsx-next` subpath export', () => {
      ok(jsxNext);
    });

    it('should have a `tsx-react` subpath export', () => {
      ok(tsxReact);
    });

    it('should have a `tsx-next` subpath export', () => {
      ok(tsxNext);
    });

    it('should have a `json` subpath export', () => {
      ok(json);
    });

    it('should have a `jsonc` subpath export', () => {
      ok(jsonc);
    });

    it('should have a `json5` subpath export', () => {
      ok(json5);
    });
  });
});
