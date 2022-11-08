import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "Apple", component: HomeView },
  {
    path: "/whymac",
    name: "Why Mac",
    component: () => import("../views/WhyMacView.vue"),
  },
  {
    path: "/techspecs",
    name: "Tech Specs",
    component: () => import("../views/TechSpecView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  document.title = `MacBook Pro 13-inch - ${to.name}`;
  next();
});
export default router;
