import { createRouter, createWebHistory } from "vue-router";

import login from "../views/login.vue";
import Home from "../views/home.vue";
import JWT from "../views/JWT.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/jwt",
    name: "JWT",
    component: JWT,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth && !token) {
    next("/");
  } else {
    next();
  }
});

export default router;
