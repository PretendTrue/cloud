<template>
  <el-row class="user">
    <el-col class="text-center">
      <el-avatar class="avatar" :size="80" :src="avatar"></el-avatar>
    </el-col>
    <el-col class="info text-center">
      <span class="user-name">{{ username }}</span>
      <br />
      <span class="user-motto">{{ motto }}</span>
    </el-col>
    <el-col class="operate-box">
      <el-row type="flex" justify="space-between">
        <el-col class="text-center"><i class="el-icon-bell hand"></i></el-col>
        <el-col class="text-center"><i class="el-icon-date hand"></i></el-col>
        <el-col class="text-center"><i class="el-icon-search hand"></i></el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import avatar from '@/assets/avatar.png'

export default {
  data() {
    return {
      keywords: "",
      username: "Administrator",
      motto: "admin@example.com",
      avatar: avatar
    };
  }
};
</script>
