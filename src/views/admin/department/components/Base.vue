<template>
  <div>
    <el-form ref="form" :model="form" label-position="top">
      <el-card>
        <div slot="header" class="clearfix">
          <el-row type="flex" align="middle">
            <el-col :span="12" class="text-left"><span>部门信息</span></el-col>
            <el-col :span="12" class="text-right"><el-button type="primary" @click="onSubmit">保存</el-button></el-col>
          </el-row>
        </div>
        <el-row :gutter="30">
          <el-col :xs="24" :sm="12" :lg="6" :span="4">
            <el-form-item label="部门名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
    </el-form>
  </div>
</template>

<script>
import { fetchDetails, store, update } from '@/api/admin-department'

export default {
  inject:['reload'],
  data() {
    return {
      id: 0,
      form: {}
    };
  },
  created() {
    let id = this.$route.params && this.$route.params.id
    if (id > 0) {
      this.getDetails(id)
    }
  },
  methods : {
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
          this.$router.push({name: 'admin.department.edit', params: { id: response.id }})
        })
      }
    }
  }
};
</script>
