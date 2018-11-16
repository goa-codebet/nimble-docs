module.exports = {
  title: "Nimble-utils",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "News", link: "/news/" },
      { text: "GitHub", link: "https://github.com/goa-codebet/nimble-utils" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated'
  },

  serviceWorker: true,

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: true,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

