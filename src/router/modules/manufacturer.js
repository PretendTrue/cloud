import App from '@/App'

const manufacturer = {
  path: "/manufacturers",
  component: App,
  children: [
    {
      path: "",
      name: "manufacturer",
      component: () => import("@/views/manufacturer/index")
    },
    {
      path: "create",
      name: "manufacturer.create",
      component: () => import("@/views/manufacturer/create"),
      meta: {
          activeMenu: '/manufacturers'
      }
    },
    {
      path: ":id(\\d+)/edit",
      name: "manufacturer.edit",
      component: () => import("@/views/manufacturer/edit"),
      meta: {
          activeMenu: '/manufacturers'
      }
    }
  ],
  meta: {
    title: '厂家管理',
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

export default manufacturer
