import { createRouter, createWebHashHistory } from 'vue-router' // ① 改这里
import TabLayout from '@/layouts/TabLayout.vue'

import Home from '@/views/home/index.vue'
import Sport from '@/views/sport/index.vue'
import Equipment from '@/views/equipment/index.vue'
import Mine from '@/views/mine/index.vue'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: () => import('@/views/login/index.vue') },
    {
        path: '/app',
        component: TabLayout,
        redirect: '/app/home',
        children: [
            { path: 'home', name: '健康', component: Home },
            { path: 'sport', name: '运动', component: Sport },
            { path: 'equipment', name: '设备', component: Equipment },
            { path: 'mine', name: '我的', component: Mine }
        ]
    },
    { path: '/erweima', component: () => import('@/views/equipment/erweima.vue') },
    { path: '/kllxq', meta: { bg: 'black' }, component: () => import('@/views/home/kllxq.vue') },
    { path: '/add', component: () => import('@/views/equipment/add.vue') }
]

const router = createRouter({
    history: createWebHashHistory(), // ② 改这里
    routes
})

export default router