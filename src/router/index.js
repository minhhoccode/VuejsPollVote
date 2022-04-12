import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
Ohistory: createWebHistory(),
  routes: [
     { path: "/", component: () => import("../App.vue") },
  ],
});

export default router;