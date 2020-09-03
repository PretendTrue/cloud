import App from '@/App'
import Layout from '@/layout'

const admin = {
  path: "/admin",
  redirect: '/admin/users',
  component: Layout,
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: "users",
      component: App,
      meta: {
        title: '管理员'
      },
      children: [
        {
          path: "",
          name: "admin.user",
          component: () => import("@/views/admin/user/index"),
          meta: {
            actions: 'list'
          }
        },
        {
          path: "create",
          name: "admin.user.create",
          component: () => import("@/views/admin/user/create"),
          meta: {
              activeMenu: '/admin/users',
              actions: 'create'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "admin.user.edit",
          component: () => import("@/views/admin/user/edit"),
          meta: {
              activeMenu: '/admin/users',
              actions: 'edit'
          }
        }
      ]
    },
    {
      path: "roles",
      component: App,
      meta: {
        title: '角色'
      },
      children: [
        {
          path: "",
          name: "admin.role",
          component: () => import("@/views/admin/role/index"),
          meta: {
              actions: 'list'
          }
        },
        {
          path: "create",
          name: "admin.role.create",
          component: () => import("@/views/admin/role/create"),
          meta: {
              activeMenu: '/admin/roles',
              actions: 'create'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "admin.role.edit",
          component: () => import("@/views/admin/role/edit"),
          meta: {
              activeMenu: '/admin/roles',
              actions: 'edit'
          }
        }
      ]
    },
    {
      path: "departments",
      component: App,
      meta: {
        title: '部门'
      },
      children: [
        {
          path: "",
          name: "admin.department",
          component: () => import("@/views/admin/department/index"),
          meta: {
              actions: 'list'
          }
        },
        {
          path: "create",
          name: "admin.department.create",
          component: () => import("@/views/admin/department/create"),
          meta: {
              activeMenu: '/admin/departments',
              actions: 'create'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "admin.department.edit",
          component: () => import("@/views/admin/department/edit"),
          meta: {
              activeMenu: '/admin/departments',
              actions: 'edit'
          }
        }
      ]
    }
  ]
}

export default admin
