/**
 * @fileoverview ESLint plugins for custom rules.
 */

/* eslint-disable import/prefer-default-export -- Named export will be more in the future. */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import type { Rule } from 'eslint';
import spacedComment from './spaced-comment.ts';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const stylistic = {
  rules: {
    'spaced-comment': spacedComment as Rule.RuleModule,
  },
} as const;
