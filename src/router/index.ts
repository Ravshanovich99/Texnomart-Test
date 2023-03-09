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
      path: '/todo',
      name: 'todo',
      component: () => import('../views/Todo.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue')
    }
  ]
})

export default router
