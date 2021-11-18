// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Webcipe',
  tagline: 'Web 開發食譜',
  url: 'https://webcipe.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'isaackwok', // Usually your GitHub org/user name.
  projectName: 'isaackwok.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'main',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/isaackwok/webcipe/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/isaackwok/webcipe/tree/main',
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
      googleAnalytics: {
        trackingID: 'G-EKQYY30LHM',
      },
      navbar: {
        title: 'Webcipe | Web 開發食譜',
        logo: {
          alt: 'Webcipe',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Tech Notes',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            href: 'https://github.com/isaackwok',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tech Notes',
            items: [
              {
                label: 'React',
                to: '/docs/react',
              },
              {
                label: 'Next.js',
                to: '/docs/nextjs',
              },
              {
                label: 'Python',
                to: '/docs/python',
              },
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'Linggle',
                to: 'https://linggle.com',
              },
              {
                label: 'eWriting | NCHU',
                to: 'https://ewriting.nchu.edu.tw',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/isaac.0625/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/isaac-kwok-026b2a184/'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Webcipe by Isaac. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
