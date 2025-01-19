/**
 * @fileoverview Docusaurus configurations.
 *
 * This runs in Node.js - Don't use client-side code here. (Browser APIs, JSX...)
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { themes as prismThemes } from 'prism-react-renderer';

// --------------------------------------------------------------------------------
// Constants
// --------------------------------------------------------------------------------

const title = 'Bananass';
const organizationName = 'lumirlumir';
const projectName = 'npm-bananass';
const githubUrl = `https://github.com/${organizationName}/${projectName}`;
const editUrl = `${githubUrl}/tree/main/websites/docusaurus`; // "edit this page" links.

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import('@docusaurus/types').Config} */
export default {
  title,
  tagline: 'Baekjoon Framework for JavaScript🍌.',
  favicon: 'img/favicon.ico',
  url: 'https://bananass.lumir.page',
  baseUrl: '/',
  organizationName,
  projectName,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.mjs',
          editUrl,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title,
        logo: {
          alt: `${title} Logo`,
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'learnSidebar',
            label: 'Learn',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apisSidebar',
            label: 'APIs',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'solutionsSidebar',
            label: 'Solutions',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: githubUrl,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learn',
                to: '/docs/learn',
              },
              {
                label: 'APIs',
                to: '/docs/apis',
              },
              {
                label: 'Solutions',
                to: '/docs/solutions',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: githubUrl,
              },
              {
                label: 'GitHub Discussions',
                href: `${githubUrl}/discussions`,
              },
            ],
          },
          {
            title: `Other Websites`,
            items: [
              {
                label: 'ko.react.dev',
                href: 'https://ko.react.dev',
              },
              {
                label: 'blog.lumir.page',
                href: 'https://blog.lumir.page',
              },
              {
                label: 'clang-format-node.lumir.page',
                href: 'https://clang-format-node.lumir.page',
              },
            ],
          },
          {
            title: `Other Packages`,
            items: [
              {
                label: 'clang-format-node',
                href: 'https://github.com/lumirlumir/clang-format-node',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 루밀LuMir. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
