import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("../views/Index")
  },
  {
    path: "/plxpj",
    name: "plxpj",
    component: () => import("../components/plxpj")
  },
  
  {
    path : "/",
    redirect : "/plxpj"
  }
];

const router = new VueRouter({
  routes
});

export default router;
