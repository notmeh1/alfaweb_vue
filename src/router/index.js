import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    alias: ["/home", "/index"],
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/notFound.vue"),
    meta: {
      requireLogin: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      requireLogin: false,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/CourseAdmin.vue"),
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/admin/edit/:id",
    component: () =>
      import(/* webpackChunkName: "edit_course" */ "../views/manageCourse.vue"),
    meta: {
      requireLogin: true,
    },
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
