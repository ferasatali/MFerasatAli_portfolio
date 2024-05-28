// Composables
import { createRouter, createMemoryHistory } from "vue-router";
// import WorkExperience from "@/components/discover/WorkExperience.vue";
// import PersonalProject from "@/components/discover/PersonalProject.vue";
// import ContactMe from "@/components/discover/ContactMe.vue";
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
      {
        path: "/education",
        name: "Education",
        component: () => import("@/components/discover/Education.vue"),
      },
      {
        path: "/work-experience",
        name: "WorkExperience",
        component: () => import("@/components/discover/WorkExperience.vue"),
      },
      {
        path: "/personal-project",
        name: "PersonalProject",
        component: () => import("@/components/discover/PersonalProject.vue"),
      },
      {
        path: "/contact-me",
        name: "ContactMe",
        component: () => import("@/components/discover/ContactMe.vue"),
      },
      {
        path: "/blogs",
        name: "blogs",
        component: () => import("@/components/Blogs/BlogsPage.vue"),
      },
      {
        path: "/blogs/:blog",
        name: "blog-details",
        component: () => import("@/components/Blogs/BlogsPageView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
