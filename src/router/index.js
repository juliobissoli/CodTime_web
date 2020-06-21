import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import DevTimeRouter from "./codTime";
import Auth from "../utils/auth";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
  if (to.name !== "Login" && !Auth.loggedIn()) next({ name: "Login" });
  else next();
});

export default router;
