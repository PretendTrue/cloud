<template>
  <div>
    <el-form ref="form" :model="form" label-position="top">
      <el-card>
        <div slot="header" class="clearfix">
          <el-row type="flex" align="middle">
            <el-col :span="12" class="text-left"><span>权限信息</span></el-col>
            <el-col :span="12" class="text-right"><el-button type="primary">保存</el-button></el-col>
          </el-row>
        </div>
        <el-row :gutter="30">
          <el-col :xs="24" :sm="12" :lg="6" :span="4">
            <el-form-item label="权限名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="6" :span="4">
            <el-form-item label="菜单">
              <el-cascader
                class="w-full"
                placeholder="试试搜索：指南"
                :options="routes"
                :props="{
                  multiple: true,
                  value: 'path',
                  label: 'title'
                }"
                filterable
                clearable
                collapse-tags
                ref="test"
                @change="change"
              >
              </el-cascader>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
    </el-form>
    <div class="custom-table mt-8">
      <el-table :data="form.actions">
        <el-table-column property="action" label="操作权限">
          <template slot-scope="{row}">
            <el-tag v-for="action in row.actions" :key="action.value" class="mr-2 mb-1">{{action.text}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column property="path" label="path"></el-table-column>
        <el-table-column property="title" label="菜单"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'
import { childrenRoutes } from '@/router/index'

export default {
  data() {
    return {
      form: {
        name: "权限管理",
        actions: []
      },
      value: '',
      routes: []
    };
  },
  created() {
    this.handleMenus()
  },
  methods: {
    /**
     * 菜单栏处理
     */
    handleMenus(route = childrenRoutes, prefix = '', arr = []) {
      route.forEach((item) => {
        if (isEmpty(item.meta.actions)) {
          let children = this.handleMenus(item.children, item.path + '/', [])

          let object = {
            path: item.path,
            title: item.meta.title,
            children
          }

          this.routes.push(object)
        } else {
          let object = {
            path: prefix + item.path,
            title: item.meta.title,
            actions: item.meta.actions
          }

          arr.push(object)
        }
      });

      if (!isEmpty(arr)) {
        return arr
      }
    },
    change() {
      let menus = this.$refs.test.getCheckedNodes();

      if (isEmpty(menus)) {
        this.form.actions = [];
        return ;
      }

      menus.forEach(item => {
        console.info(item)
        this.form.actions.push(item.data)
      })
    }
  }
};
</script>
