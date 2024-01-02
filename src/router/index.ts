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
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/contact-us',
        name: 'ContactUs',
        component: () => import('@/views/ContactUs.vue'),
      },
      {
        path: '/blogs',
        name: 'Blogs',
        component: () => import('@/views/BlogsPage.vue'),
      },
      {
        path: '/blogs/:blog',
        name: 'BlogPage',
        component: () => import('@/views/BlogsPageView.vue'),
      },
    ],
  },
  {
    path: '/explore',
    component: () => import('@/layouts/explore/Explore.vue'),
    children: [
      {
        path: '',
        name: 'Explore',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/ExploreView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
