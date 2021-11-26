// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RAW Roadtrip Adventure",
  tagline: "Sistema de navegación GPS",
  url: "https://roadtrip.ricardobaquero.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "RickyTB", // Usually your GitHub org/user name.
  projectName: "roadtrip-docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/RickyTB/roadtrip-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Roadtrip Adventure",
        logo: {
          alt: "RAW Roadtrip Adventure Logo",
          src: "img/logo_roadtrip.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Manual",
          },
          {
            href: "https://github.com/RickyTB/roadtrip-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Manual",
                to: "/docs/intro",
              },
              {
                label: "Política de privacidad",
                to: "/privacy",
              },
              {
                label: "Términos y Condiciones",
                to: "/tos",
              },
            ],
          },
          {
            title: "Redes sociales",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "Descarga la app",
            items: [
              {
                label: "App Store",
                href: "https://apps.apple.com/us/app/raw-roadtrip-adventure/id1597340162",
              },
              {
                label: "Google Play",
                href: "https://play.google.com/store/apps/details?id=com.raw.roadtrip",
              },
            ],
          },
          {
            title: "Más",
            items: [
              {
                label: "Ayuda a mejorar el manual",
                href: "https://github.com/RickyTB/roadtrip-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Roadtrip Adventure Ecuador.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },
};

module.exports = config;
