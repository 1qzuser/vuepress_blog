module.exports = {
    '/guide/': [
        {
            title: '懵逼指南',
            collapsable: false,
            children: [
                { title: '一、前端学习', path: '/guide/end' },
                { title: '二、后端学习', path: '/guide/back' },
            ]
        }
    ],
    '/baodian/': [
        {
            title: '面试宝典',
            collapsable: true,
            children: [
                { title: '一、初级开发篇', path: '/baodian/zero' },
                { title: '二、中高进阶篇', path: '/baodian/high' },
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
                { title: '一、峰峰软件', path: '/tool/software' },
                { title: '二、峰峰作业', path: '/tool/homework' },
            ]
        }
    ]
    
}