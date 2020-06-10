<template>
  <el-aside class="sidebar-container">
    <SidebarTop />
    <SidebarMenu />
    <SidebarBottom />
  </el-aside>
</template>

<script>
import SidebarTop from "./SidebarTop";
import SidebarMenu from "./SidebarMenu";
import SidebarBottom from "./SidebarBottom";

export default {
  components: {
    SidebarTop,
    SidebarMenu,
    SidebarBottom
  }
};
</script>
