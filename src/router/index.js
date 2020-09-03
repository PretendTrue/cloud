import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/layout'
import beforeEach from './beforeEach';

import admin from './modules/admin'
import customer from './modules/customer'
import manufacturer from './modules/manufacturer'
import product from './modules/product'

Vue.use(VueRouter);

const constantRoutes = [
  {
    path: "/auth",
    name: "auth.login",
    component: () => import("@/views/auth/index")
  },
  {
    path: "/",
    name: 'dashboard',
    component: Layout
  }
];

export const asyncRoutes = [
  admin,
  customer,
  manufacturer,
  product
]

const router = new VueRouter({
  mode: "history",
  routes: constantRoutes
});

router.beforeEach(beforeEach)

export default router;
