import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Falist from '../components/falist.vue'

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
    path: "/falist",
    name: "Falist",
    component: Falist
  },
  {
    path : "/",
    redirect : "/index"
  }
];

const router = new VueRouter({
  routes
});

export default router;
