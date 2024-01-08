// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home.vue'),
      },
    ],
  },
  {
    path: '/discover',
    component: () => import('@/layouts/discover/discover.vue'),
    children: [
      {
        path: '',
        name: 'discover',
        component: () => import('@/views/discover.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/ferasatali.github.io/'),
  routes,
})

export default router
