/**
 * @fileoverview ESLint plugins for custom rules.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import spacedComment from './spaced-comment.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const stylisticPluginModule = /** @type {const} */ ({
  rules: {
    'spaced-comment': spacedComment,
  },
});
