import Layout from '@/layout'

const manufacturer = {
  path: "/manufacturers",
  component: Layout,
  meta: {
    title: '厂家管理'
  },
  children: [
    {
      path: "",
      name: "manufacturer",
      component: () => import("@/views/manufacturer/index"),
      meta: {
          actions: 'list'
      }
    },
    {
      path: "create",
      name: "manufacturer.create",
      component: () => import("@/views/manufacturer/create"),
      meta: {
          activeMenu: '/manufacturers',
          actions: 'create'
      }
    },
    {
      path: ":id(\\d+)/edit",
      name: "manufacturer.edit",
      component: () => import("@/views/manufacturer/edit"),
      meta: {
          activeMenu: '/manufacturers',
          actions: 'edit'
      }
    }
  ]
}

export default manufacturer
