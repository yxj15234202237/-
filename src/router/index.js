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
    component: () => import("../views/Index"),
  },
  {
    path : "/",
    redirect : "/index"
  },
  {
   path:"/xiao",
   name:"效果图",
   component:()=>import('../components/xiaoguotushouye.vue')
  },
  {
    path:"/gdzb",
    name:"gdzb",
    component:()=>import('../components/gdzb.vue')
  }
]

const router = new VueRouter({
  routes
});

export default router;
