import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/whymac",
    name: "Why Mac",
    component: import("../views/WhyMacView.vue"),
  },
  {
    path: "/techspecs",
    name: "Tech Specs",
    component: import("../views/TechSpecView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
