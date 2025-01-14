﻿//路由表！！！
export default [
    {
        path: '/',
        wrappers: [
            '@/wrappers/auth/index.tsx',
        ],
    },
    {
        name: 'checkIn',
        path: '/checkIn',
        component: './CheckIn',
    },
    {
        name: '404',
        path: '/404',
        component: './404',
    },
    {
        path: '/blog',
        component: '@/layouts/Main',
        // wrappers:[
        //     '@/wrappers/init/index.ts.tsx.tsx',
        // ],
        routes: [
            {
                name: 'messageBoard',
                path: '/blog/:id/messageBoard',
                component: './MessageBoard',
                // wrappers: [
                //     '@/wrappers/auth/index.ts.tsx.tsx',
                // ],
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/:id/home',
                component: './Home',
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/:id/essay',
                component: './Essay',
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/square',
                component: './Square',
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/:id/aboutMe',
                component: './AboutMe',
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/:id/setting',
                component: './Setting',
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/details/:id',
                component: './BlogDetail',
            },
            {
                //todo  此处一定要写全路径
                path: '/blog/:id/skill/:category',
                component: './SkillBlog',
            },
            {
                component: './404'
            }
        ]
    },
    {
        name: 'write',
        path: '/write',
        component: './Write',
    },
    {
        name: '404',
        path: '/*',
        component: './404',
    },
]
