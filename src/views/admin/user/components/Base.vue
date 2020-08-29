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
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="邮箱">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="8" :lg="6" :span="4">
              <el-form-item label="所属部门">
                <el-select class="w-full" v-model="form.department_id" placeholder="请选择">
                  <el-option
                    v-for="department in departments"
                    :key="department.id"
                    :label="department.name"
                    :value="department.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="8" :lg="6" :span="4">
              <el-form-item label="角色">
                <el-select class="w-full" v-model="form.roles" multiple placeholder="请选择">
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
          <el-divider content-position="left">用户密码</el-divider>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="新密码">
                <el-input v-model="form.password" show-password></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="确认密码">
                <el-input v-model="form.password_confirmation" show-password></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { fetchDetails, store, update } from '@/api/admin-user'
import { fetchList as departments } from '@/api/admin-department'
import { fetchList as roles } from '@/api/admin-role'

export default {
  inject:['reload'],
  data() {
    return {
      form: {},
      departments: [],
      roles: []
    };
  },
  created() {
    this.fetchDepartments()
    this.fetchRoles()
    let id = this.$route.params && this.$route.params.id
    if (id > 0) {
      this.getDetails(id)
    }
  },
  methods: {
    /**
     * 详细信息
     */
    getDetails (id) {
      fetchDetails(id).then(response => {
        this.id = id
        this.form = response
      })
    },
    /**
     * 获取部门列表
     */
    fetchDepartments() {
      departments().then(response => {
        this.departments = response
      })
    },
    /**
     * 获取角色列表
     */
    fetchRoles() {
      roles().then(response => {
        this.roles = response
      })
    },
    /**
     * 提交表单
     */
    onSubmit() {
      if (this.id > 0) {
        update(this.id, this.form).then(response => {
          this.$notify.success({
            title: '提醒',
            message: '更新成功'
          });
          this.reload();
        })
      } else {
        store(this.form).then(response => {
          this.$notify.success({
            title: '提醒',
            message: '添加成功'
          });
          this.$router.push({name: 'admin.user.edit', params: { id: response.id }})
        })
      }
    }
  }
};
</script>
