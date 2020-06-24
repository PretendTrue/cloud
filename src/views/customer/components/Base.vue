<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span class="cursor-pointer">个人资料</span>
    </div>
    <el-form ref="form" :model="form" label-position="top">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="客户名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>

export default {
  data() {
    return {
      form: {
        name: "Administrator",
      }
    };
  }
};
</script>
