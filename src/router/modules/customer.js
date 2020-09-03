import Layout from '@/layout'

const customer = {
  path: "/customers",
  component: Layout,
  meta: {
    title: '客户管理'
  },
  children: [
    {
      path: "",
      name: "customer",
      component: () => import("@/views/customer/index"),
      meta: {
          actions: 'list'
      }
    },
    {
      path: "create",
      name: "customer.create",
      component: () => import("@/views/customer/create"),
      meta: {
          activeMenu: '/customers',
          actions: 'create'
      }
    },
    {
      path: ":id(\\d+)/edit",
      name: "customer.edit",
      component: () => import("@/views/customer/edit"),
      meta: {
          activeMenu: '/customers',
          actions: 'edit'
      }
    }
  ]
}

export default customer
