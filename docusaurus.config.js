// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KernaCraft',
  tagline: 'La saison 2 arrive 😱',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/kernadoc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // If you use CNAME Record, you can disable this
  organizationName: 'Funasitien', // Usually your GitHub org/user name.
  projectName: 'kernadoc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Han"
  // This template add two language by default
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Funasitien/kernadoc/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: 'KernaCraft',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'News', position: 'left'},
          /** {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, 
          {
            type: 'localeDropdown',
            position: 'right',
          }, **/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Le Site',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'News',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Discord',
                href: 'https://dsc.gg/kernacraft',
              },
              {
                label: 'Dynamap',
                href: 'http://game.vaatigames.ovh:20018',
              },
            ],
          },
          {
            title: '"Partenaires"',
            items: [
              {
                label: 'DEMOCRAFT',
                href: 'https://democraft.fr',
              },
              {
                label: 'DreamCloud Development',
                href: 'http://f.dreamclouds.fr',
              },
              {
                label: 'Diamond Heberg',
                href: 'http://diamond-heberg.fr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KernaCraft - DreamCloud Development.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
