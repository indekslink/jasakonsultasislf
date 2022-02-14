import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/kajian-teknis",
    component: () => import("./views/KajianTeknis.vue"),
  },
  {
    path: "/formulir-slf",
    component: () => import("./views/Formulir.vue"),
  },
  {
    path: "/persyaratan",
    component: () => import("./views/Persyaratan.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes,
});

export default router;
