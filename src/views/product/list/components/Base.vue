<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>个人资料</span>
    </div>
    <el-row :gutter="30">
      <el-col :xs="24" :span="4" class="text-center">
        <el-avatar :src="form.avatar" :size="100"></el-avatar>
      </el-col>
      <el-col :xs="24" :span="19">
        <el-form ref="form" :model="form" label-position="top">
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="邮箱">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="所属部门">
                <el-select class="w-full" v-model="form.department" placeholder="请选择">
                  <el-option
                    v-for="department in departments"
                    :key="department.id"
                    :label="department.name"
                    :value="department.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="角色">
                <el-select class="w-full" v-model="form.role" placeholder="请选择">
                  <el-option
                    v-for="role in roles"
                    :key="role.id"
                    :label="role.name"
                    :value="role.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider content-position="left">修改密码</el-divider>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="24" :lg="6" :span="4">
              <el-form-item label="旧密码">
                <el-input v-model="form.password" show-password></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="新密码">
                <el-input v-model="form.password" show-password></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="确认密码">
                <el-input v-model="form.password" show-password></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import avatar from '@/assets/avatar.png'

export default {
  data() {
    return {
      form: {
        avatar: avatar,
        username: "Administrator",
        email: "admin@example.com",
        password: "secret",
        department: '',
        role: ''
      },
      departments: [
        {
          id: 1,
          name: '销售部'
        },
        {
          id: 2,
          name: '技术部'
        }
      ],
      roles: [
        {
          id: 1,
          name: '技术部小菜鸟'
        }
      ]
    };
  }
};
</script>
