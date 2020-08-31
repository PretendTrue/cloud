<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu :default-active="activeMenu" router>
      <sidebar-item v-for="(menu, key) in routes" :key="key" :menu="menu" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { constantMenus, asyncMenus } from "./menu";
import SidebarItem from "./SidebarItem";
import localforage from "localforage";
import { compact, forEach, isEmpty, orderBy } from 'lodash';

export default {
  components: {
    SidebarItem
  },
  asyncComputed: {
    async routes() {
      let permissions = await localforage.getItem('permissions')
      let menus = [... constantMenus];
      forEach(permissions, permission => {
        // 路由权限分割成数组格式 ['admin', 'user']
        let path = compact(permission.name.split('/'))
        let menu = {}
        let childrens = [];
        forEach(path, item => {
          if (isEmpty(menu)) {
            let route = asyncMenus.find(route => route.path === item)
            if (! isEmpty(route.children)) childrens = route.children

            // 从菜单列表中查询是否存在父级菜单
            let parentMenuIndex = menus.findIndex(parentMenu => parentMenu.path === item)

            if (parentMenuIndex !== -1) {
              menu = menus[parentMenuIndex];
              menus.splice(parentMenuIndex, 1);
            } else {
              menu.title = route.title
              menu.path = route.path
              menu.icon = route.icon
              menu.serial_number = route.serial_number

              if (! isEmpty(route.children)) menu.children = []
            }
          } else {
            let childrenMenu = childrens.find(children => children.path === item)

            if (!isEmpty(childrenMenu)) menu.children.push(childrenMenu)
          }
        })

        if (! isEmpty(menu.children)) menu.children = orderBy(menu.children, 'serial_number')

        menus.push(menu)
      })

      return orderBy(menus, 'serial_number')
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;

      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  }
};
</script>
