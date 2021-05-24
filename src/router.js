import Vue from "vue";
import Menu from "./views/Menu.vue"
import Janken from "./views/Janken.vue"
import Router from "vue-router";
Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/",
    },
    {
      path: "/",
      component: Menu,
    },
    {
      path: "/janken",
      component: Janken,
    },
  ],
});  
export default router;