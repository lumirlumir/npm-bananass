/**
 * @fileoverview ESLint plugins for custom rules.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import first from './first.js';
import newlineAfterImport from './newline-after-import.js';
import noAbsolutePath from './no-absolute-path.js';
import noEmptyNamedBlocks from './no-empty-named-blocks.js';
import noImportModuleExports from './no-import-module-exports.js';
import noMutableExports from './no-mutable-exports.js';
import noNamedDefault from './no-named-default.js';
import noRelativePackages from './no-relative-packages.js';
import noSelfImport from './no-self-import.js';
import noUselessPathSegments from './no-useless-path-segments.js';
import order from './order.js';
import spacedComment from './spaced-comment.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const importPluginModule = /** @type {const} */ ({
  rules: {
    first,
    'newline-after-import': newlineAfterImport,
    'no-absolute-path': noAbsolutePath,
    'no-empty-named-blocks': noEmptyNamedBlocks,
    'no-import-module-exports': noImportModuleExports,
    'no-mutable-exports': noMutableExports,
    'no-named-default': noNamedDefault,
    'no-relative-packages': noRelativePackages,
    'no-self-import': noSelfImport,
    'no-useless-path-segments': noUselessPathSegments,
    order,
  },
});

export const stylisticPluginModule = /** @type {const} */ ({
  rules: {
    'spaced-comment': spacedComment,
  },
});
