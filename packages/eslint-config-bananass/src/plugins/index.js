/**
 * @fileoverview ESLint plugin configuration for custom rules.
 */

/* eslint-disable import/prefer-default-export -- Named export will be more in the future. */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import spacedComment from './spaced-comment.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const stylisticJs = /** @type {const} */ ({
  rules: {
    'spaced-comment': spacedComment,
  },
});
