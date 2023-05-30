import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'indexPage',
                component: () => import('../views/IndexPage.vue'),
            },
            {
                path: '/sub1',
                name: 'subPage1',
                component: () => import('../views/SubPage1.vue'),
            },
            {
                path: '/sub2',
                name: 'subPage2',
                component: () => import('../views/SubPage2.vue'),
            },
            {
                path: '/test',
                name: 'testPate',
                component: () => import('../views/TestPage.vue'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;