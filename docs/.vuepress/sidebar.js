module.exports = {
    '/guide/': [
        {
            title: '懵逼指南',
            collapsable: false,
            children: [
                { title: '前端学习', path: '/guide/end' },
                { title: '后端学习', path: '/guide/back' },
            ]
        }
    ],
    '/baodian/': [
        {
            title: '面试宝典',
            collapsable: true,
            children: [
                { title: 'html', path: '/baodian/html' },
                { title: 'css', path: '/baodian/css' },
                { title: 'javascript', path: '/baodian/javascript' },
                { title: 'vue', path: '/baodian/vue' },
            ]
        }
    ],
    '/life/': [
        {
            title: '记录生活',
            collapsable: true,
            children: [
                { title: '学习', path: '/life/study' },
                { title: '生活', path: '/life/lifes' },
            ]
        }
    ],
    '/tool/': [
        {
            title: '工具箱',
            collapsable: true,
            children: [
                { title: '峰峰软件', path: '/tool/software' },
                { title: '峰峰作业', path: '/tool/homework' },
            ]
        }
    ]
    
}