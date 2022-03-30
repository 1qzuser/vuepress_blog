const moment = require('moment');

module.exports = {
    title: '程序员峰峰',// 设置网站标题
    description: '程序员峰峰，分享优质的前后端知识，总结日常学习的笔记!',
    head: [ 
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { name: 'keywords', content: '程序员峰峰,峰峰博客,vuepress' }],
    ['link', { name: 'author', content: '程序员峰峰' }],
    ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    ['script', { charset: 'utf-8', src: '/js/style.js' }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }],
  ],
    base: '/',   // 设置站点根路径
    port: 8086,
    themeConfig: {
        lastUpdated:'更新时间',
        logo: '/img/logo.png',
        // 添加导航栏
        nav: require("./nav"),
        // 为以下路由添加左侧边栏
        sidebar: require("./sidebar"),
        sidebarDepth: 4,//左侧导航显示的层级
    },
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp) => {
              const moment = require('moment')
              moment.locale("zh-cn")
              return moment(timestamp).format("lll")
            }
          }
        ],
        [
            '@vuepress/pwa', {
                serviceWorker: true,
                updatePopup: {
                message: "发现新的内容可用",
                buttonText: "刷新"
                }
            }
        ],
        ['@vuepress/back-to-top'],
        ["vuepress-plugin-nuggets-style-copy", {
          copyText: "复制代码",
          tip: {
              content: "恭喜这位小可爱，复制成功啦！"
          }
        }],
        [
          'cursor-effects',
          {
             size: 2, // 粒子大小，默认：2 
             shape: ['star' | 'circle'], // 粒子的形状, 默认: 'star' 
             zIndex: 999999999, // 画布的z-index属性, 默认: 999999999 
          },
       ],
        ["vuepress-plugin-cat"],
      ],
}
