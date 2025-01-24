import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://grace.bornforthis.cn/",

  author: {
    name: "AI悦创",
    url: "https://grace.bornforthis.cn/",
  },

  logo: "/Dumpling.png",

  repo: "AndersonHJB/Grace-study-club",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "婉棠记",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "婉棠记",
    avatar: "/Dumpling.png",
    intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      BiliBili: "https://space.bilibili.com/405961705",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "mailto:info@example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    },
  },
  markdown: {
    // 启用 figure
    figure: true,
    // 启用图片懒加载
    imgLazyload: true,
    // 启用图片标记
    imgMark: true,
    // 启用图片大小
    imgSize: true,
    mark: true,
    codeTabs: true,
    tabs: true,
    math: true,
    hint: true,
    alert: true,
    chartjs: false,
    echarts: false,
    mermaid: true,
    vuePlayground: false,
    sub: true,
    spoiler: true,
    sup: true,
    demo: true,
    tasklist: true,
    include: true,
    attrs: false,
    footnote: true,
    align: true,
    flowchart: false,
    gfm: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    highlighter: {
      type: "shiki",
      collapsedLines: 15,
      //   lineNumbers: 1,
      notationDiff: true,
      notationFocus: true,
      highlightLines: true,
      notationHighlight: true,
      //   langs: ['sql', 'python', 'java', 'javascript', 'c', 'c#', 'c++', 'html', 'css',
      //     'bash', 'rust', 'php', 'r', 'cmd', 'yaml', 'markdown', 'http', 'cmake', 'matlab',
      //     'plsql', 'ini', "fortran-free-form", "fortran-fixed-form", 'go', 'vue', 'tex', 'text', 'csv', 'fish',
      //     'makefile', 'typescript',
      //   ],
      // langAlias: {
      //   ["fortran"]: "fortran-free-form",
      // },
      theme: "monokai",
      // themes: {
      //   light: "monokai",
      //   dark: "one-dark-pro",
      // },
    },
    vPre: true,
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      componentOptions: {

        share: {

          // services: ["email", "qq", "weibo", "qrcode"],
          services: ["email", "qq", "qrcode"],
        }
      },
      components: [
        "VPBanner",
        "VPCard",
        "BiliBili",
        "PDF",
        "SiteInfo",
        "StackBlitz",
        "Share",
        "VidStack",
      ],
      rootComponents: {

      }
    },

    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   // type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },
});
