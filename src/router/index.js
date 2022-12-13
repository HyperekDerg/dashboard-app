import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'display',
      component: () => import('../views/DisplayView.vue')
    },
    {
      path: '/admin/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin/layout',
      name: 'layout',
      component: () => import('../views/LayoutView.vue')
    },
    {
      path: '/admin/config',
      name: 'config',
      component: () => import('../views/ConfigView.vue')
    }
  ]
})

export default router
