<template>
  <el-row class="switch-box">
    <el-col class="hand">
      <router-link :to="{name: 'auth.login'}">
        <i class="el-icon-switch-button"></i><span>退出登录</span>
      </router-link>
    </el-col>
  </el-row>
</template>
