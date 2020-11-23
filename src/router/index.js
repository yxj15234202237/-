import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import zxdk from '../components/zxdk'

import Falist from '../components/falist.vue'
import Faxq from '../components/faxq.vue'
import Faxqpz from '../components/faxqpz.vue'

import smbj from '../components/smbj'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
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
    path: "/zxdk",
    name: "zxdk",
    component: zxdk
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
    path: "/xiao",
    name: "效果图",
    component: () => import('../components/xiaoguotushouye.vue')
  },
  {
    path: "/gdzb",
    name: "gdzb",
    component: () => import('../components/gdzb.vue')
  },
  {
    path: "/sjslist",
    name: "sjslist",
    component: () => import('../components/sjslist.vue')
  },
  {
    path: "/zxgl",
    name: "zxgl",
    component: () => import('../components/zhuangxiugonglue.vue')
  },
  {
    path:"/gdzb",
    name:"gdzb",
    component:()=>import('../components/gdzb.vue')
  },
  {
    path: "/smbj",
    name: "smbj",
    component: smbj
  },
  {

    path: "/mfyy",
    name: "mfyy",
    component: () => import('../components/mfyy.vue')
  },
  {
    path: "/zxdk",
    name: "zxdk",
    component: () => import('../components/zxdk.vue')
  },
  {
    path: "/xiang",
    name: "图片详情页",
    component: () => import('../components/tupianxiangqingye.vue')
  },

  {
    path: "/wenxiang",
    name: "文章详情页",
    component: () => import('../components/wzyxq.vue')
  },
  {
    path: '/zxgl',
    name: '装修攻略',
    component: () => import('../components/zhuangxiugonglue.vue'),
  },
  {
    path: '/pl',
    name: 'pl',
    component: () => import('../components/pl.vue'),
  },
]




const router = new VueRouter({
  routes
});

export default router;
