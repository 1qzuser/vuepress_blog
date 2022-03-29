module.exports = {
    title: '程序员峰峰',// 设置网站标题
    description: '程序员峰峰，分享优质的前后端知识，总结日常学习的笔记',
    base: '/',   // 设置站点根路径
    dest: './ROOT',  // 设置输出目录
    port: 8086,
    head: [],
    plugins: [],
    themeConfig: {
        lastUpdated:'更新时间',
        logo: '/logo.png',
        // 添加导航栏
        nav: require("./nav"),
        // 为以下路由添加左侧边栏
        sidebar: require("./sidebar"),
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated'
    }
}
