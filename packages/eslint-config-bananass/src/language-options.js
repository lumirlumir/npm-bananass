/**
 * @fileoverview ESLint language options.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import globalsModule from 'globals';
import typescriptParser from '@typescript-eslint/parser';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const globals = {
  ...globalsModule.browser,
  ...globalsModule.builtin,
  ...globalsModule.es2026,
  ...globalsModule.node,
  // Browser Web Speech APIs which are not yet supported by `globals`: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
  webkitSpeechRecognition: false,
  SpeechRecognitionAlternative: false,
  SpeechRecognitionResult: false,
  SpeechRecognitionResultList: false,
};

export const parser = typescriptParser;

export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
};
