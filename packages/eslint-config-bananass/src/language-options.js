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
  ...globalsModule.jest,
  ...globalsModule.vitest,
  ...globalsModule.mocha,
  // Browser Web Speech APIs: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
  SpeechGrammar: false,
  SpeechGrammarList: false,
  SpeechRecognition: false,
  SpeechRecognitionAlternative: false,
  SpeechRecognitionErrorEvent: false,
  SpeechRecognitionEvent: false,
  SpeechRecognitionResult: false,
  SpeechRecognitionResultList: false,
  speechSynthesis: false,
  SpeechSynthesis: false,
  SpeechSynthesisErrorEvent: false,
  SpeechSynthesisEvent: false,
  SpeechSynthesisUtterance: false,
  SpeechSynthesisVoice: false,
};

export const parser = typescriptParser;

export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
};
