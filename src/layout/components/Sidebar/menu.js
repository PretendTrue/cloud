export default [
  {
    title: "仪表盘",
    path: "/",
    icon: "el-icon-data-line"
  },
  {
    title: "系统管理",
    path: "/admin",
    icon: "el-icon-setting",
    children: [
      {
        title: "管理员",
        path: "users",
        icon: "el-icon-stopwatch",
      },
      {
        title: "角色",
        path: "roles",
        icon: "el-icon-stopwatch",
      },
      {
        title: "部门",
        path: "departments",
        icon: "el-icon-stopwatch",
      },
      {
        title: "权限",
        path: "permissions",
        icon: "el-icon-stopwatch",
      }
    ]
  }
];
