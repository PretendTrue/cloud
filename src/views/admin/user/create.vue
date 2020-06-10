<template>
  <div>
    <el-row class="mb-30">
      <el-col>
        <h1>{{ title }}</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col><Base /></el-col>
    </el-row>
  </div>
</template>

<script>
import Base from "./components/Base";

export default {
  data() {
    return {
      title: "系统管理 - 管理员 - 添加"
    };
  },
  components: {
    Base
  }
};
</script>
