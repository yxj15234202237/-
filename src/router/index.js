import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import smbj from '../components/smbj'

import Falist from '../components/falist.vue'
import Faxq from '../components/faxq.vue'
import Faxqpz from '../components/faxqpz.vue'

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
    path: "/smbj",
    name: "smbj",
    component: smbj
  },
  {
    path: "/falist",
    name: "Falist",
    component: Falist
  },
  {
    path: "/faxq",
    name: "Faxq",
    component: Faxq
  },
  {
    path: "/faxqpz",
    name: "Fazqpz",
    component: Faxqpz
  },
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/xiao",
    name: "效果图",
    component: () => import('../components/xiaoguotushouye.vue')
  },
  {
    path: "/xiang",
    name: "图片详情页",
    component: () => import('../components/tupianxiangqingye.vue')
  },
  {
    path: "/gdzb",
    name: "gdzb",
    component: () => import('../components/gdzb.vue')
  },
  {
    path:"/wenxiang",
    name:"文章详情页",
    component:()=>import('../components/wzyxq.vue')
  }

]

const router = new VueRouter({
  routes
});

export default router;
