import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SECVerge Knowledge Center',
  tagline: 'Beyond Protection.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.secverge.com',
  baseUrl: '/',

  organizationName: 'secvergetech',
  projectName: 'secverge-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        blog: {
          showReadingTime: true,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      hideOnScroll: false,

      /*
       * The SECVerge wordmark itself will act as the navbar title.
       * Do not add a separate navbar title, because it duplicates branding.
       */
      logo: {
        alt: 'SECVerge Technologies',
        src: 'img/secverge-logo.png',
        href: '/',
        target: '_self',
        width: 210,
        height: 42,
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/blog',
          label: 'Blogs',
          position: 'left',
        },
        {
          href: 'https://secverge.com',
          label: 'SECVerge.com',
          position: 'right',
        },
        {
          href: 'https://github.com/secvergetech',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'SECVerge AI',
              to: '/docs/secverge-ai/overview',
            },
            {
              label: 'SECIQ',
              to: '/docs/seciq/overview',
            },
            {
              label: 'NeuroSEC',
              to: '/docs/neurosec/overview',
            },
          ],
        },
        {
          title: 'Knowledge Center',
          items: [
            {
              label: 'Technical Blogs',
              to: '/blog',
            },
            {
              label: 'Documentation Home',
              to: '/',
            },
          ],
        },
        {
          title: 'SECVerge Technologies',
          items: [
            {
              label: 'Corporate Website',
              href: 'https://secverge.com',
            },
            {
              label: 'GitHub Organization',
              href: 'https://github.com/secvergetech',
            },
          ],
        },
      ],

      copyright:
        `Copyright © ${new Date().getFullYear()} ` +
        `SECVerge Technologies Private Limited. ` +
        `All rights reserved. Beyond Protection.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;