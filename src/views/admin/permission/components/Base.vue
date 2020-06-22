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
                placeholder="试试搜索：权限"
                :options="routes"
                :props="{
                  multiple: true,
                  value: 'path',
                  label: 'title'
                }"
                filterable
                clearable
                collapse-tags
                ref="changeMenu"
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
import { isEmpty, findIndex, findLastIndex, startsWith } from 'lodash'
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
    /**
     * 菜单选中
     */
    change() {
      let nodes = this.$refs.changeMenu.getCheckedNodes();
      let menus = this.form.actions

      if (isEmpty(nodes)) {
        this.form.actions = [];
        return ;
      }

      // 添加节点数据
      nodes.forEach( node => {
        // 在当前菜单数据下『从右到左』查询是否存在本节点
        let nodeIndex = findLastIndex(menus, value => {
          return startsWith(value.path, node.value)
        })

        if (isEmpty(node.parent)) {
          // 没有父节点，并且在当前菜单数据下不存在本节点，则添加

          if (nodeIndex === -1) menus.push(node.data)
        } else {
          // 在当前菜单数据下『从右到左』查询当前父节点下的最后一个节点的下标
          let index = findLastIndex(menus, value => {
            return startsWith(value.path, node.parent.value)
          })

          if (index === -1) {
            // 不存在父节点下的数据
            // 直接添加父节点和本节点
            menus.push(node.parent.data, node.data)
          } else {
            // 存在父节点
            // 当前菜单数据下不存在本节点，则在父节点下最后一个节点后面添加本节点

            if (nodeIndex === -1) menus.splice(index + 1, 0, node.data)

          }
        }
      })

      // 寻找差异化节点，进行删除操作
      menus.forEach( (menu, key) => {
        // 获取菜单数据中的节点是否在所有选中的节点中
        let index = findIndex(nodes, node => {
          return node.value === menu.path
        })

        if (index === -1) {
          // 不是父节点，直接删除
          if (isEmpty(menu.children)) menus.splice(key, 1)
        }

      })
    }
  }
};
</script>
