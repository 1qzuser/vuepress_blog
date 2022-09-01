module.exports = {
    // '/baodian/front/': [
    //     {
    //         title: '懵逼指南',
    //         collapsable: true,
    //         children: [
    //             { title: '前端学习', path: '/baodian/front/css' },
    //             { title: '后端学习', path: '/guide/back' },
    //         ]
    //     }
    // ],
    '/baodian/': [
        {
            title: '前端面试',
            children: [
                { title: 'css', path: 'front/css' },
                { title: 'html', path: 'front/html' },
                { title: 'javascript', path: 'front/javascript' },
                { title: 'vue', path: 'front/vue' },
            ]
        },
        {
            title: '后端面试',
            children: [
                { title: 'php', path: 'back/php' },
                { title: 'java', path: 'back/java' },
            ]
        },
    ]
}