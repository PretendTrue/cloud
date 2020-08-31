export const constantMenus = [
  {
    title: "仪表盘",
    path: "/",
    icon: "el-icon-data-line",
    serial_number: 1
  }
];

export const asyncMenus = [
  {
    title: "客户管理",
    path: "customers",
    icon: "el-icon-data-line",
    serial_number: 2
  },
  {
    title: "厂家管理",
    path: "manufacturers",
    icon: "el-icon-data-line",
    serial_number: 3
  },
  {
    title: "产品",
    path: "products",
    icon: "el-icon-data-line",
    serial_number: 4,
    children: [
      {
        title: "物料管理",
        path: "materials",
        icon: "el-icon-stopwatch",
        serial_number: 1
      },
      {
        title: "样品管理",
        path: "specimens",
        icon: "el-icon-stopwatch",
        serial_number: 2
      },
      {
        title: "产品列表",
        path: "list",
        icon: "el-icon-stopwatch",
        serial_number: 3
      }
    ]
  },
  {
    title: "系统管理",
    path: "admin",
    icon: "el-icon-setting",
    serial_number: 5,
    children: [
      {
        title: "管理员",
        path: "users",
        icon: "el-icon-stopwatch",
        serial_number: 1
      },
      {
        title: "角色",
        path: "roles",
        icon: "el-icon-stopwatch",
        serial_number: 2
      },
      {
        title: "部门",
        path: "departments",
        icon: "el-icon-stopwatch",
        serial_number: 3
      }
    ]
  }
];
