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
    <div class="custom-table mt-8">
      <el-table :data="permissionsTabel">
        <el-table-column property="action" label="操作权限">
          <template slot-scope="{row}">
            <el-tag
              class="mr-2 mb-1"
              v-for="operation in row.operation"
              :key="operation.action"
            >{{operation.name}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column property="action" label="action"></el-table-column>
        <el-table-column property="name" label="菜单"></el-table-column>
      </el-table>
    </div>
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
        this.changePermission(response.permissions)
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
    /**
     * 角色权限选中操作
     */
    changePermission(node) {
      node = this.handleSubmitPermissions(node)

      let permissions = [];
      forEach(node, item => {
        let permission = {};
        let menu = this.menus.find(menu => menu.action == item.path)
        if (menu === undefined) return ;

        permission.name = menu.name;
        permission.actions = menu.actions;
        permission.operation = [];

        forEach(menu.operation, value => {
          if (item.actions.includes(value.action)) {
            permission.operation.push(value)
          }
        })

        permissions.push(permission)
      })

      this.permissionsTabel = permissions
    },
    /**
     * 处理获取的权限
     */
    handlePermissions(arr) {
      let permissions = []

      forEach(arr, item => {
        forEach(item.actions, value => {
          let permission = [item.path, value]
          permissions.push(permission)
        })
      })

      return permissions
    },
    /**
     * 修改提交时的权限
     */
    handleSubmitPermissions(arr) {
      let permissions = []
      forEach(arr, (item) => {
        let permissionIndex = permissions.findIndex(value => value.path === item[0]);
        if (permissionIndex !== -1) {
          permissions[permissionIndex].actions.push(item[1])
        } else {
          let permission = {};
          permission.path = item[0]
          permission.actions = [item[1]]
          permissions.push(permission)
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
