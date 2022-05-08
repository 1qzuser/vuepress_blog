const moment = require('moment');

module.exports = {
    title: '程序员峰峰',// 设置网站标题
    description: '程序员峰峰，分享优质的前后端知识，总结日常学习的笔记!',
    head: [ 
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { name: 'keywords', content: '程序员峰峰,峰峰博客,sbitx.top,峰峰' }],
    ['link', { name: 'author', content: '程序员峰峰' }],
    ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    ['script', { charset: 'utf-8', src: '/js/style.js' }],
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
        ['@vuepress/back-to-top'],
        ["vuepress-plugin-nuggets-style-copy", {
          copyText: "复制代码",
          tip: {
              content: "恭喜这位小可爱，复制成功啦！"
          }
        }],
        ["vuepress-plugin-cat"],
      ],
}
