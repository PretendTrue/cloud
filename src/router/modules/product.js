import App from '@/App'
import Layout from '@/layout'

const product = {
  path: "/products",
  redirect: '/products/list',
  component: Layout,
  meta: {
    title: '产品'
  },
  children: [
    {
      path: "list",
      component: App,
      meta: {
        title: '产品列表'
      },
      children: [
        {
          path: "",
          name: "product.list",
          component: () => import("@/views/product/list/index"),
          meta: {
              actions: 'list'
          }
        },
        {
          path: "create",
          name: "product.list.create",
          component: () => import("@/views/product/list/create"),
          meta: {
              activeMenu: '/products/list',
              actions: 'create'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "product.list.edit",
          component: () => import("@/views/product/list/edit"),
          meta: {
              activeMenu: '/products/list',
              actions: 'edit'
          }
        }
      ]
    },
    {
      path: "materials",
      component: App,
      meta: {
        title: '物料管理'
      },
      children: [
        {
          path: "",
          name: "product.material",
          component: () => import("@/views/product/material/index"),
          meta: {
              actions: 'list'
          }
        },
        {
          path: "create",
          name: "product.material.create",
          component: () => import("@/views/product/material/create"),
          meta: {
              activeMenu: '/products/materials',
              actions: 'create'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "product.material.edit",
          component: () => import("@/views/product/material/edit"),
          meta: {
              activeMenu: '/products/materials',
              actions: 'edit'
          }
        }
      ]
    },
    {
      path: "specimens",
      component: App,
      meta: {
        title: '样品管理'
      },
      children: [
        {
          path: "",
          name: "product.specimen",
          component: () => import("@/views/product/specimen/index"),
          meta: {
              actions: 'list'
          }
        },
        {
          path: "create",
          name: "product.specimen.create",
          component: () => import("@/views/product/specimen/create"),
          meta: {
              activeMenu: '/product/specimens',
              actions: 'create'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "product.specimen.edit",
          component: () => import("@/views/product/specimen/edit"),
          meta: {
              activeMenu: '/product/specimens',
              actions: 'edit'
          }
        }
      ]
    }
  ]
}

export default product
