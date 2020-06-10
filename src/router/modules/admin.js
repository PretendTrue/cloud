import App from '@/App'

const admin = {
  path: "admin",
  redirect: '/admin/users',
  component: App,
  children: [
    {
      path: "users",
      component: App,
      children: [
        {
          path: "",
          name: "admin.user",
          component: () => import("@/views/admin/user/index")
        },
        {
          path: "create",
          name: "admin.user.create",
          component: () => import("@/views/admin/user/create"),
          meta: {
              activeMenu: '/admin/users'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "admin.user.edit",
          component: () => import("@/views/admin/user/edit"),
          meta: {
              activeMenu: '/admin/users'
          }
        }
      ]
    },
    {
      path: "roles",
      component: App,
      children: [
        {
          path: "",
          name: "admin.role",
          component: () => import("@/views/admin/role/index")
        },
        {
          path: "create",
          name: "admin.role.create",
          component: () => import("@/views/admin/role/create"),
          meta: {
              activeMenu: '/admin/roles'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "admin.role.edit",
          component: () => import("@/views/admin/role/edit"),
          meta: {
              activeMenu: '/admin/roles'
          }
        }
      ]
    },
    {
      path: "departments",
      component: App,
      children: [
        {
          path: "",
          name: "admin.department",
          component: () => import("@/views/admin/department/index")
        },
        {
          path: "create",
          name: "admin.department.create",
          component: () => import("@/views/admin/department/create"),
          meta: {
              activeMenu: '/admin/departments'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "admin.department.edit",
          component: () => import("@/views/admin/department/edit"),
          meta: {
              activeMenu: '/admin/departments'
          }
        }
      ]
    },
    {
      path: "permissions",
      component: App,
      children: [
        {
          path: "",
          name: "admin.permission",
          component: () => import("@/views/admin/permission/index")
        },
        {
          path: "create",
          name: "admin.permission.create",
          component: () => import("@/views/admin/permission/create"),
          meta: {
              activeMenu: '/admin/permissions'
          }
        },
        {
          path: ":id(\\d+)/edit",
          name: "admin.permission.edit",
          component: () => import("@/views/admin/permission/edit"),
          meta: {
              activeMenu: '/admin/permissions'
          }
        }
      ]
    }
  ]
}

export default admin
