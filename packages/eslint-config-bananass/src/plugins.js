/**
 * @fileoverview ESLint plugins.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import importPluginModule from 'eslint-plugin-import';
import nodePluginModule from 'eslint-plugin-n';
import stylisticJsPluginModule from '@stylistic/eslint-plugin-js';

import jsxA11yPluginModule from 'eslint-plugin-jsx-a11y';
import reactPluginModule from 'eslint-plugin-react';
import reactHooksPluginModule from 'eslint-plugin-react-hooks';

import nextPluginModule from '@next/eslint-plugin-next';

import typescriptPluginModule from '@typescript-eslint/eslint-plugin';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const importPlugin = { import: importPluginModule };

export const nodePlugin = { n: nodePluginModule };

export const stylisticJsPlugin = { '@stylistic/js': stylisticJsPluginModule };

export const jsxA11yPlugin = { 'jsx-a11y': jsxA11yPluginModule };

export const reactPlugin = { react: reactPluginModule };

export const reactHooksPlugin = { 'react-hooks': reactHooksPluginModule };

export const nextPlugin = { '@next/next': nextPluginModule };

export const typescriptPlugin = { '@typescript-eslint': typescriptPluginModule };
