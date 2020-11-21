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
<<<<<<< HEAD
    redirect : "/plxpj"
=======
    redirect : "/index"
  },
  {
   path:"/xiao",
   name:"效果图",
   component:()=>import('../components/xiaoguotushouye.vue')
>>>>>>> 3f05f9990c5a6692dfb8a8d173268314edf8e9e4
  }
]

const router = new VueRouter({
  routes
});

export default router;
