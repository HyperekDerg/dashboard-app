import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'display',
      component: () => import('../views/client/ClientView.vue')
    },
    {
      path: '/admin/',
      name: 'home',
      component: () => import('../views/admin/HomeView.vue')
    },
    {
      path: '/admin/layout',
      name: 'layout',
      component: () => import('../views/admin/LayoutView.vue')
    },
    {
      path: '/admin/config',
      name: 'config',
      component: () => import('../views/admin/ConfigView.vue')
    }
  ]
})

export default router
