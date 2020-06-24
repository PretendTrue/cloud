import App from '@/App'

const customer = {
  path: "/customers",
  component: App,
  children: [
    {
      path: "",
      name: "customer",
      component: () => import("@/views/customer/index")
    },
    {
      path: "create",
      name: "customer.create",
      component: () => import("@/views/customer/create"),
      meta: {
          activeMenu: '/customers'
      }
    },
    {
      path: ":id(\\d+)/edit",
      name: "customer.edit",
      component: () => import("@/views/customer/edit"),
      meta: {
          activeMenu: '/customers'
      }
    }
  ],
  meta: {
    title: '客户管理',
    level: 1,
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

export default customer
