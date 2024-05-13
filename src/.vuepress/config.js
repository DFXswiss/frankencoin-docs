const { description } = require("../../package");

module.exports = {
  title: "Docs",
  description: description,

  head: [
    ["meta", { name: "theme-color", content: "#072440" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["script", { type: "text/javascript", src: "https://cdn.weglot.com/weglot.min.js" }],
    ["script", {}, `Weglot.initialize({ api_key: 'wg_641101d8c524e0c20811d8a007f8cef56' });`],
  ],

  themeConfig: {
    repo: "DFXswiss/frankencoin-docs",
    logo: "/assets/logo.svg",
    editLinks: true,
    editLinkText: "Edit this page on Github",
    docsBranch: "develop",
    docsDir: "src",
    lastUpdated: true,

    nav: [
      {
        text: "English",
        link: "/en/",
      },
      {
        text: "Frankencoin.app",
        link: "https://frankencoin.app",
      },
    ],

    sidebar: [
      { title: "Home", path: "/" },
      {
        title: "English",
        path: "/en/",
        children: [
          "/en/disclaimer",
          "/en/tnc",
          "/en/tou",
          "/en/privacy",
          "/en/imprint",
          "/en/faq",
        ],
      },
    ],
  },

  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("dfx"),
        },
      }));
  },
};
