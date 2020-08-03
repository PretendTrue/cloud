import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/layout'
import beforeEach from './beforeEach';

import admin from './modules/admin'
import customer from './modules/customer'
import manufacturer from './modules/manufacturer'
import product from './modules/product'

Vue.use(VueRouter);

export const childrenRoutes = [
  admin,
  customer,
  manufacturer,
  product,
]

const routes = [
  {
    path: "/auth",
    name: "auth.login",
    component: () => import("@/views/auth/index")
  },
  {
    path: "/",
    name: 'dashboard',
    component: Layout,
    children: childrenRoutes
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach(beforeEach)

export default router;
