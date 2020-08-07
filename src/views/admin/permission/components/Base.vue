<template>
  <div>
    <el-form ref="form" :model="form" label-position="top">
      <el-card>
        <div slot="header" class="clearfix">
          <el-row type="flex" align="middle">
            <el-col :span="12" class="text-left"><span>权限信息</span></el-col>
            <el-col :span="12" class="text-right"><el-button type="primary" @click="onSubmit">保存</el-button></el-col>
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
                v-model="actions"
                :options="routes"
                :props="{
                  multiple: true,
                  value: 'path',
                  label: 'name'
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
      <el-table :data="menus">
        <el-table-column property="action" label="操作权限">
          <template slot-scope="{row}">
            <el-tag
              class="mr-2 mb-1"
              v-for="action in row.actions"
              :key="action.value"
              :type="action.checked ? '' : 'info'"
              @click="handleTag(action)"
            >{{action.text}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column property="path" label="path"></el-table-column>
        <el-table-column property="name" label="菜单"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { cloneDeep, compact, isEmpty, findIndex, findLastIndex, flattenDeep, uniq, startsWith } from 'lodash'
import { tree } from '@/api/menu'
import { fetchDetails, update } from '@/api/admin-permission'

export default {
  inject:['reload'],
  data() {
    return {
      id: 0,
      form: {},
      routes: [],
      menus: [],
      actions: []
    };
  },
  async created() {
    await this.menusTree()
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
        this.actions = this.flatActions(response.actions)
        this.form = response
        this.change(this.actions)
      })
    },
    /**
     * 获取树形结构菜单
     */
    menusTree () {
      return tree().then(response => {
        this.handleMenus(response)
      })
    },
    /**
     * 菜单栏处理
     */
    handleMenus(route = childrenRoutes, prefix = '', arr = []) {
      route.forEach(item => {
        if (! isEmpty(item.children)) {
          let children = this.handleMenus(item.children, item.path, [])

          let object = {
            path: item.path,
            name: item.name,
            children
          }

          this.routes.push(object)
        } else {
          item.operation.forEach(action => {
            action.checked = false
          })

          let object = {
            path: item.path,
            name: item.name,
            actions: item.operation,
            parent: prefix
          }

          if (item.parent_id === null) {
            // 一级菜单直接添加
            this.routes.push(object)
          } else {
            arr.push(object)
          }
        }
      });

      if (!isEmpty(arr)) {
        return arr
      }
    },
    /**
     * 菜单选中
     */
    change(nodes) {
      if (isEmpty(nodes)) {
        // 节点被清空
        this.form.actions = []
        this.menus = []
        return
      }

      nodes.forEach(node => {
        this.flatAddMenus(node)
      })

      let [...menuArr] =  this.menus;
      let uniqueNodes = uniq(flattenDeep(nodes))
      menuArr.forEach(item => {
        let isInArray = uniqueNodes.includes(item.path)

        if (isInArray === false) {
          let index = findIndex(this.menus, {'path': item.path})
          this.menus.splice(index, 1)
        }
      })
    },
    /**
     * 循环添加菜单
     */
    flatAddMenus(nodes) {
      let parent = ''
      let formActions = cloneDeep(this.form.actions)
      nodes.forEach(node => {
        let menuNodeIndex = findLastIndex(this.menus, { 'path': node })

        if (menuNodeIndex === -1) {
          if (parent === '') {
            let routeIndex = findIndex(this.routes, { 'path': node})
            let menu = cloneDeep(this.routes[routeIndex])
            if (!isEmpty(menu.actions)) {
              menu.actions = menu.actions.map(action => {
                let actionsIndex = findIndex(formActions, {'path': node})
                action.checked = formActions[actionsIndex].actions.includes(action.value)
                return action
              })
            }
            this.menus.push(menu)
          } else {
            let parentMenuNodeIndex = findLastIndex(this.menus, { 'path': parent })
            let childrensMenus = this.menus[parentMenuNodeIndex].children

            let routeIndex = findIndex(childrensMenus, { 'path': node })
            this.menus.splice(parentMenuNodeIndex + 1, 0, childrensMenus[routeIndex])
          }
        }
        parent = node
      })
    },
    /**
     * 标签选择
     */
    handleTag(action) {
      action.checked = !action.checked
    },
    /**
     * 递归获取操作菜单
     */
    flatActions(actions, prefix = '', arr = []) {
      actions.forEach(item => {
        if (isEmpty(item.children)) {
          arr.push(compact([prefix, item.path]))
        } else {
          this.flatActions(item.children, item.path, arr)
        }
      })

      return arr
    },
    /**
     * 提交表单
     */
    onSubmit() {
      let actions = []
      let menus = cloneDeep(this.menus)

      menus.forEach(item => {
        if (item.parent === undefined) return ;
        let arr = [];

        if (item.parent === '') {
          item.actions.forEach(action => {
            if (action.checked) arr.push(action.value)
          })

          item.actions = arr;
          actions.push(item)
        } else {
          let parentIndex = findIndex(actions, {'path' : item.parent})
          if (parentIndex === -1) {
            let parentIndex = findIndex(menus, {'path': item.parent})
            let parent = cloneDeep(menus[parentIndex])
            parent.children = [];
            item.actions.forEach(action => {
              if (action.checked) arr.push(action.value)
            })
            item.actions = arr;
            parent.children.push(item)
            actions.push(parent)
          } else {
            item.actions.forEach(action => {
              if (action.checked) arr.push(action.value)
            })

            item.actions = arr;
            actions[parentIndex].children.push(item)
          }
        }
      })

      this.form.actions = actions

      update(this.id, this.form).then(response => {
        this.$message.success("操作成功~");
        this.reload();
      })
    }
  }
};
</script>
