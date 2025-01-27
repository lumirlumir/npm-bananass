/**
 * @fileoverview Shared configuration for VitePress.
 *
 * @see https://vitepress.dev/reference/site-config#site-config
 */

/* eslint-disable import/no-extraneous-dependencies -- TODO: Delete it after this rule is updated in `eslint-config-bananass` */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import footnote from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

// --------------------------------------------------------------------------------
// Constants
// --------------------------------------------------------------------------------

const AUTHOR = '루밀LuMir';
const SITE_URL = 'https://bananass.lumir.page';
const GOOGLE_GA_ID = 'G-1Q3XQ6JTF9';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default defineConfig({
  head: [
    // Basic
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/logo-small.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'theme-color', content: '#fff478' }],
    ['meta', { name: 'author', content: AUTHOR }],

    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image:width', content: '1280' }],
    ['meta', { property: 'og:image:height', content: '640' }],
    ['meta', { property: 'og:article:author', content: AUTHOR }],

    // Twitter
    ['meta', { name: 'twitter:creator', content: AUTHOR }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],

    // Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Jua&display=swap',
        rel: 'stylesheet',
      },
    ],

    // Google Analytics
    [
      'script',
      { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_GA_ID}` },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GOOGLE_GA_ID}');`,
    ],
  ],

  /* Routing */
  cleanUrls: true,
  rewrites: {
    'ko/:rest*': ':rest*',
  },

  /* Build */
  outDir: 'build',
  metaChunk: true,

  /* Theming */
  lastUpdated: true,

  /* Sitemap */
  sitemap: {
    hostname: SITE_URL,
  },

  /* Thme Configuration */
  themeConfig: {
    logo: {
      src: '/logo.svg',
      width: 24,
      height: 24,
    },

    outline: {
      level: 'deep',
    },

    search: {
      provider: 'local',
    },
  },

  markdown: {
    math: true,

    config(md) {
      md.use(footnote);
      md.use(groupIconMdPlugin);
    },
  },

  vite: {
    plugins: [groupIconVitePlugin()],
  },
});