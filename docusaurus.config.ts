import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Link Test',
  tagline: 'Testing Docusaurus link resolution',
  favicon: 'img/favicon.ico',

  url: 'https://lennardrother.github.io',
  baseUrl: '/docusaurus-link-test/',

  organizationName: 'lennardrother',
  projectName: 'docusaurus-link-test',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: true,
          sidebarCollapsed: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Link Test',
      items: [
        {
          href: 'https://github.com/lennardrother/docusaurus-link-test',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Link Test`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
