/**
 * @fileoverview Vitepress site configuration.
 *
 * @see https://vitepress.dev/reference/site-config#site-config
 * @see https://vitepress.dev/guide/i18n
 * @see https://github.com/vuejs/vitepress/tree/main/docs/.vitepress/config
 */

/* eslint-disable import/no-extraneous-dependencies -- TODO: Delete it after this rule is updated in `eslint-config-bananass` */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { defineConfig } from 'vitepress';
import shared from './shared';
import en from './en';
import ko from './ko';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default defineConfig({
  ...shared,
  locales: {
    root: { label: '한국어', ...ko },
    en: { label: 'English', ...en },
  },
});
