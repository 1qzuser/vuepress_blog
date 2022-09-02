module.exports = {
    '/front/': [
        {
            title: '前端工程化',
            children: [
                { title: 'npm', path: 'npm' },
                { title: 'vite', path: 'vite' },
            ]
        }
    ],
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
    ],
    '/tool/': [
        {
            title: '工具箱',
            children: [
                { title: '峰峰软件', path: 'software' },
            ]
        }
    ],
}