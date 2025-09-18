/**
 * @fileoverview Webpack resolve using `enhanced-resolve` to resolve module paths.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import enhancedResolve from 'enhanced-resolve';
import { SUPPORTED_SOLUTION_FILE_EXTENSIONS } from '../../constants.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Webpack resolve using `enhanced-resolve` to resolve module paths.
 */
const webpackResolve = enhancedResolve.create({
  extensions: [...SUPPORTED_SOLUTION_FILE_EXTENSIONS],
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default webpackResolve;
