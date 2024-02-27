import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassicView from "@/views/ClassicView.vue";
import EmojiView from "@/views/EmojiView.vue";
import BlurView from "@/views/BlurView.vue";

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
      component: ClassicView
    },
    {
      path: '/emoji',
      name: 'emoji',
      component: EmojiView
    },
    {
      path: '/blur',
      name: 'blur',
      component: BlurView
    }
  ]
})

export default router
