const moment = require('moment');

module.exports = {
    title: '程序员峰峰',// 设置网站标题
    description: '程序员峰峰，分享优质的前后端知识，总结日常学习的笔记',
    head: [ 
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
    base: '/',   // 设置站点根路径
    port: 8086,
    head: [],
    plugins: [],
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
              return moment(timestamp).format("LLLL")
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
        ['@vuepress/back-to-top']
      ],
}
