import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/layout'

import admin from './modules/admin'
import customer from './modules/customer'

Vue.use(VueRouter);

export const childrenRoutes = [
  admin,
  customer
]

const routes = [
  {
    path: "/",
    component: Layout,
    children: childrenRoutes
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
