module.exports = {
    '/baodian/': [
        {
            title: '面试宝典',
            collapsable: false,
            children: [
                { title: '初级开发篇', path: '/baodian/zero' },
                { title: '中高进阶篇', path: '/baodian/high' },
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