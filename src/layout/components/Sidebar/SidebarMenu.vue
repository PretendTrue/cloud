<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu :default-active="activeMenu" router>
      <sidebar-item v-for="(menu, key) in routes" :key="key" :menu="menu" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import routes from "./menu";
import SidebarItem from "./SidebarItem";

export default {
  components: {
    SidebarItem
  },
  computed: {
    routes() {
      return routes;
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
