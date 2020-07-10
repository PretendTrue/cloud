import App from '@/App'

const product = {
  path: "/products",
  redirect: '/products/list',
  component: App,
  children: [
    {
      path: "list",
      component: App,
      children: [
        {
          path: "",
          name: "product.list",
          component: () => import("@/views/product/list/index")
        },
        {
          path: "create",
          name: "product.list.create",
          component: () => import("@/views/product/list/create"),
          meta: {
              activeMenu: '/products/list'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "product.list.edit",
          component: () => import("@/views/product/list/edit"),
          meta: {
              activeMenu: '/products/list'
          }
        }
      ],
      meta: {
        title: '产品列表',
        actions: [
          {
            value: 'list',
            text: '列表'
          },
          {
            value: 'show',
            text: '详情'
          },
          {
            value: 'create',
            text: '添加'
          },
          {
            value: 'edit',
            text: '修改'
          },
          {
            value: 'delete',
            text: '删除'
          }
        ]
      }
    },
    {
      path: "materials",
      component: App,
      children: [
        {
          path: "",
          name: "product.material",
          component: () => import("@/views/product/material/index")
        },
        {
          path: "create",
          name: "product.material.create",
          component: () => import("@/views/product/material/create"),
          meta: {
              activeMenu: '/products/materials'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "product.material.edit",
          component: () => import("@/views/product/material/edit"),
          meta: {
              activeMenu: '/products/materials'
          }
        }
      ],
      meta: {
        title: '物料管理',
        actions: [
          {
            value: 'list',
            text: '列表'
          },
          {
            value: 'show',
            text: '详情'
          },
          {
            value: 'create',
            text: '添加'
          },
          {
            value: 'edit',
            text: '修改'
          },
          {
            value: 'delete',
            text: '删除'
          }
        ]
      }
    },
    {
      path: "specimens",
      component: App,
      children: [
        {
          path: "",
          name: "product.specimen",
          component: () => import("@/views/product/specimen/index")
        },
        {
          path: "create",
          name: "product.specimen.create",
          component: () => import("@/views/product/specimen/create"),
          meta: {
              activeMenu: '/product/specimens'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "product.specimen.edit",
          component: () => import("@/views/product/specimen/edit"),
          meta: {
              activeMenu: '/product/specimens'
          }
        }
      ],
      meta: {
        title: '样品管理',
        actions: [
          {
            value: 'list',
            text: '列表'
          },
          {
            value: 'show',
            text: '详情'
          },
          {
            value: 'create',
            text: '添加'
          },
          {
            value: 'edit',
            text: '修改'
          },
          {
            value: 'delete',
            text: '删除'
          }
        ]
      }
    }
  ],
  meta: {
    title: '产品'
  }
}

export default product
