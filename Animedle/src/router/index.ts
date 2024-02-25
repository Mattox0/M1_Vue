import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/classic',
      name: 'classic',
      component: () => import('../views/ClassicView.vue')
    },
    {
      path: '/emoji',
      name: 'emoji',
      component: () => import('../views/EmojiView.vue')
    }
  ]
})

export default router
