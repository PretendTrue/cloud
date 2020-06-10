import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/layout'

import admin from './modules/admin'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      admin
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
