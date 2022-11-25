import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
let routes = [
    {
        path: '/',
        redirect: '/promotion',
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
