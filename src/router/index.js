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
    path: "/plxpj",
    name: "plxpj",
    component: () => import("../components/plxpj")
  },
  {
    path: "/plzdl",
    name: "plzdl",
    component: () => import("../components/plzdl")
  },
  {
    path: "/falist",
    name: "Falist",
    component: Falist
  },
  {
    path: "/gywm",
    name: "gywm",
    component: () => import("../components/gywm")
  },
  {
    path : "/",
    redirect : "/gywm"
  },
  {
   path:"/xiao",
   name:"效果图",
   component:()=>import('../components/xiaoguotushouye.vue')
  }
]

const router = new VueRouter({
  routes
});

export default router;
