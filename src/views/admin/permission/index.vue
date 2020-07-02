<template>
  <div>
    <el-row>
      <el-col class="">
        <el-row type="flex" align="middle">
          <el-col :span="12">
            <h1>{{ title }}</h1>
          </el-col>
          <el-col class="text-right" :span="12">
            <router-link :to="{name: 'admin.permission.create'}">
              <el-button type="primary" round icon="el-icon-plus" >
              添加权限
              </el-button>
            </router-link>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="custom-table">
        <el-table :data="list">
          <el-table-column prop="name" label="权限名称"></el-table-column>
          <el-table-column label="操作权限" align="center">
            <template slot-scope="{row}">
              <span v-if="row.operation" class="link-type" @click="showOperation(row.operation)">
                <i class="el-icon-view mr-2"></i>查看
              </span>
              <span v-else>暂未添加操作权限</span>
            </template>
          </el-table-column>
          <el-table-column label="创建日期" width="180" align="center">
            <template slot-scope="{row}">
              <i class="el-icon-time"></i>
              <span style="margin-left: 0.625rem">{{ row.created_at }}</span>
            </template>
          </el-table-column>
          <el-table-column label="上次修改日期" width="180" align="center">
            <template slot-scope="{row}">
              <i class="el-icon-time mr-2"></i>
              <span>{{ row.last_active_at }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180" align="center">
            <template slot-scope="{row}">
              <router-link :to="{name: 'admin.permission.edit', params: { id: row.id }}">
                <el-button class="mr-4" size="mini" >
                  编辑
                </el-button>
              </router-link>
              <el-popover placement="bottom" v-model="visible">
                <p>是否要删除？</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="handleDelete(0)">
                    取消
                  </el-button>
                  <el-button type="primary" size="mini" @click="handleDelete(row)" >
                    确定
                  </el-button>
                </div>
                <el-button size="mini" type="danger" slot="reference">
                  删除
                </el-button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-dialog title="操作权限列表" :visible.sync="dialogTableVisible">
      <el-table :data="operationPermission">
        <el-table-column property="action" label="操作权限">
          <template slot-scope="{row}">
            <el-tag v-for="action in row.actions" :key="action" class="mr-2 mb-1">{{action}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column property="uri" label="URI"></el-table-column>
        <el-table-column property="uri" label="菜单"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "系统管理 - 权限",
      visible: false,
      dialogTableVisible: false,
      list: [
        {
          id: 1,
          name: "系统管理权限",
          email: "admin@example.com",
          operation: [
            {
              actions: [
                'GET', 'POST', 'PUT', 'PATCH', 'DELETE'
              ],
              uri: '/admin/permissions'
            },
            {
              actions: [
                'GET', 'POST', 'PUT', 'PATCH'
              ],
              uri: '/admin/users'
            },
            {
              actions: [
                'GET', 'POST', 'PUT'
              ],
              uri: '/admin/roles'
            }
          ],
          created_at: "2020-06-08",
          last_active_at: "2020-06-11"
        },
        {
          id: 1,
          name: "仪表盘权限",
          email: "admin@example.com",
          created_at: "2020-06-08",
          last_active_at: "2020-06-11"
        }
      ],
      operationPermission: []
    };
  },
  methods: {
    /**
     * 删除操作
     */
    handleDelete(row) {
      this.visible = !this.visible

      if (row !== 0) {
        this.$notify.success({
          title: '提醒',
          message: '删除成功'
        });
      }
    },
    /**
     * 查看操作权限列表
     */
    showOperation(operation) {
      this.operationPermission = operation
      this.dialogTableVisible = !this.dialogTableVisible
    },
  }
};
</script>
