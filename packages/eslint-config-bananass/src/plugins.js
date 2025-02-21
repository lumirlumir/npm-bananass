/**
 * @fileoverview ESLint plugins.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const importPlugin = require('eslint-plugin-import');
const nodePlugin = require('eslint-plugin-n');
const stylisticJsPlugin = require('@stylistic/eslint-plugin-js');

const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const reactPlugin = require('eslint-plugin-react');
const reactCompilerPlugin = require('eslint-plugin-react-compiler');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

const nextPlugin = require('@next/eslint-plugin-next');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports.importPlugin = { import: importPlugin };

module.exports.nodePlugin = { n: nodePlugin };

module.exports.stylisticJsPlugin = { '@stylistic/js': stylisticJsPlugin };

module.exports.jsxA11yPlugin = { 'jsx-a11y': jsxA11yPlugin };

module.exports.reactPlugin = { react: reactPlugin };

module.exports.reactCompilerPlugin = { 'react-compiler': reactCompilerPlugin };

module.exports.reactHooksPlugin = { 'react-hooks': reactHooksPlugin };

module.exports.nextPlugin = { '@next/next': nextPlugin };
