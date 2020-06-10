<template>
  <el-container class="app-wrapper">
    <Sidebar />
    <el-container>
      <Main />
    </el-container>
  </el-container>
</template>

<script>
import { Sidebar, Main } from "./components";

export default {
  components: {
    Sidebar,
    Main
  }
};
</script>
