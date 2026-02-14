/**
 * @fileoverview ESLint plugins.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import importPluginModule from 'eslint-plugin-import';
import nodePluginModule from 'eslint-plugin-n';
import jsxA11yPluginModule from 'eslint-plugin-jsx-a11y';
import reactPluginModule from 'eslint-plugin-react';
import reactHooksPluginModule from 'eslint-plugin-react-hooks';
import nextPluginModule from '@next/eslint-plugin-next';
import typescriptPluginModule from '@typescript-eslint/eslint-plugin';
import jsonPluginModule from '@eslint/json';
import { stylistic as stylisticPluginModule } from './plugins/index.js';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * @import { ESLint } from 'eslint';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {{'import': ESLint.Plugin}} */
export const importPlugin = { import: importPluginModule };

/** @type {{'n': ESLint.Plugin}} */
export const nodePlugin = { n: nodePluginModule };

/** @type {{'@stylistic': ESLint.Plugin}} */
export const stylisticPlugin = { '@stylistic': stylisticPluginModule };

/** @type {{'jsx-a11y': ESLint.Plugin}} */
export const jsxA11yPlugin = { 'jsx-a11y': jsxA11yPluginModule };

/** @type {{'react': ESLint.Plugin}} */
export const reactPlugin = { react: reactPluginModule };

/** @type {{'react-hooks': ESLint.Plugin}} */
export const reactHooksPlugin = {
  'react-hooks': { rules: reactHooksPluginModule.rules },
};

/** @type {{'@next/next': ESLint.Plugin}} */
export const nextPlugin = { '@next/next': { rules: nextPluginModule.rules } };

/** @type {{'@typescript-eslint': ESLint.Plugin}} */ // @ts-expect-error -- TODO: `typescriptPlugin` makes an error here, but it is a valid config.
export const typescriptPlugin = { '@typescript-eslint': typescriptPluginModule };

/** @type {{'json': ESLint.Plugin}} */
export const jsonPlugin = { json: jsonPluginModule };
