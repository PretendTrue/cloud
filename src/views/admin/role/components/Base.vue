<template>
  <div>
    <el-form ref="form" :model="form" label-position="top">
      <el-card>
        <div slot="header" class="clearfix">
          <el-row type="flex" align="middle">
            <el-col :span="12" class="text-left"><span>角色信息</span></el-col>
            <el-col :span="12" class="text-right"><el-button type="primary" @click="onSubmit">保存</el-button></el-col>
          </el-row>
        </div>
        <el-row :gutter="30">
          <el-col :xs="24" :sm="12" :lg="6" :span="4">
            <el-form-item label="角色名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="6" :span="4">
            <el-form-item label="角色权限">
              <el-cascader
                class="w-full"
                placeholder="试试搜索：权限"
                v-model="form.permissions"
                :options="menus"
                :props="{
                  multiple: true,
                  value: 'action',
                  label: 'name',
                  children: 'operation'
                }"
                filterable
                clearable
                collapse-tags
                @change="changePermission"
              >
              </el-cascader>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
    </el-form>
  </div>
</template>

<script>
import { fetchDetails, store, update } from '@/api/admin-role'
import { fetchList as fetchMenuList } from '@/api/menu'
import { forEach } from 'lodash'

export default {
  inject:['reload'],
  data() {
    return {
      id: 0,
      form: {
        name: '',
        permissions: []
      },
      menus: [],
      permissionsTabel: []
    };
  },
  created() {
    let id = this.$route.params && this.$route.params.id
    this.getMenus()
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
        response.permissions = this.handlePermissions(response.permissions)
        this.form = response
      })
    },
    /**
     * 获取菜单列表
     */
    getMenus() {
      fetchMenuList().then(response => {
        this.menus = response
      })
    },
    changePermission(node) {
      console.info(node)
    },
    /**
     * 处理获取的权限
     */
    handlePermissions(arr, permissions = []) {
      forEach(arr, (item, key) => {
        forEach(item, (value) => {
          let permission = [key, value]
          permissions.push(permission)
        })
      })

      return permissions
    },
    /**
     * 修改提交时的权限
     */
    handleSubmitPermissions(arr, permissions = {}) {
      forEach(arr, (item) => {
        console.info(arr)
        if (permissions[item[0]]) {
          permissions[item[0]].push(item[1])
        } else {
          permissions[item[0]] = [ item[1]]
        }
      })

      return permissions
    },
    /**
     * 提交表单
     */
    onSubmit() {
      this.form.permissions = this.handleSubmitPermissions(this.form.permissions)
      if (this.id > 0) {
        update(this.id, this.form).then(() => {
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
          this.$router.push({name: 'admin.role.edit', params: { id: response.id }})
        })
      }
    }
  }
};
</script>
