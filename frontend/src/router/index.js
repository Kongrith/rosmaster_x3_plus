import { createRouter, createWebHistory } from "vue-router";

import LayoutView from "../layouts/LayoutView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: LayoutView,
      meta: { title: "xxxx" },
      children: [
        {
          path: "",
          name: "homeview",
          meta: { title: "Smart Farming: HOME" },
          component: HomeView,
        }
      ],
    },
    // {
    //     path: "*",
    //     redirect: "/404",
    // },
  ],
});


router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "Smart Farming";
});

export default router;
