// Composables
import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/discover",
    component: () => import("@/layouts/discover/discover.vue"),
    children: [
      {
        path: "",
        name: "discover",
        component: () => import("@/views/discover.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
