<template>
  <div>
    <el-form ref="form" :model="form" label-position="top">
      <el-card>
        <div slot="header" class="clearfix">
          <el-row type="flex" align="middle">
            <el-col :span="12" class="text-left"><span>角色信息</span></el-col>
            <el-col :span="12" class="text-right"><el-button type="primary">保存</el-button></el-col>
          </el-row>
        </div>
        <el-row :gutter="30">
          <el-col :xs="24" :sm="12" :lg="6" :span="4">
            <el-form-item label="角色名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
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
            <el-form-item label="特殊权限">
              <el-select class="w-full" v-model="form.permissions" multiple placeholder="请选择">
                <el-option
                  v-for="permission in permissions"
                  :key="permission.id"
                  :label="permission.name"
                  :value="permission.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        departments: '',
        permissions: []
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
      permissions: [
        {
          id: 1,
          name: '系统管理权限'
        },
        {
          id: 2,
          name: '仪表盘权限'
        }
      ]
    };
  }
};
</script>
