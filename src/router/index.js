import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
      requireLogin: true,
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      requireLogin: false,
    }
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) {
    if (store.state.login.logInData.email) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;