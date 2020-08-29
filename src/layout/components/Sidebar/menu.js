export default [
  {
    title: "仪表盘",
    path: "/",
    icon: "el-icon-data-line"
  },
  {
    title: "客户管理",
    path: "customers",
    icon: "el-icon-data-line"
  },
  {
    title: "厂家管理",
    path: "manufacturers",
    icon: "el-icon-data-line"
  },
  {
    title: "产品",
    path: "products",
    icon: "el-icon-data-line",
    children: [
      {
        title: "物料管理",
        path: "materials",
        icon: "el-icon-stopwatch",
      },
      {
        title: "样品管理",
        path: "specimens",
        icon: "el-icon-stopwatch",
      },
      {
        title: "产品列表",
        path: "list",
        icon: "el-icon-stopwatch",
      }
    ]
  },
  {
    title: "系统管理",
    path: "admin",
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
      }
    ]
  }
];
