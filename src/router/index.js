import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import DevTimeRouter from "./codTime";
import Auth from "../utils/oauth2";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

routes.push(DevTimeRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



router.beforeEach((to, from, next) => {

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !Auth.loggedIn()
  ) {
    next(
      {
        path: "/login",
        query: { redirect: to.fullPath },
      }
    );
  } else if (to.matched.some((record) => record.name === "Login") && Auth.loggedIn()) {
    next({ name: "Home" });
  } 
  else {
    next();
  }
});


export default router;
