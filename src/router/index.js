import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import App from "../App.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
