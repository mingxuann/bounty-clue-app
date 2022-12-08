import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
let routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),
    },
    {
        path: '/promotion',
        name: 'promotion',
        component: () => import('@/views/promotion.vue'),
    },
    {
        path: '/claim',
        name: 'claim',
        component: () => import('@/views/claim.vue'),
    },
    {
        path: '/incubator',
        name: 'incubator',
        component: () => import('@/views/coming-soon.vue'),
    },
    {
        path: '/governance',
        name: 'governance',
        component: () => import('@/views/coming-soon.vue'),
    },
    {
        path: '/farm',
        name: 'farm',
        component: () => import('@/views/coming-soon.vue'),
    },
    {
        path: '/get-clue',
        name: 'get-clue',
        component: () => import('@/views/get-clue.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile.vue'),
    },
    { path: '/:pathMatch(.*)*', name: 'notfound', redirect: '/promotion' },
]
const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
})
export default router
