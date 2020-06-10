<template>
  <el-row>
    <el-col class="mb-30">
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
    <el-col>
      <el-table :data="list">
        <el-table-column prop="name" label="权限名称"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column label="创建日期" width="180" align="center">
          <template slot-scope="{row}">
            <i class="el-icon-time"></i>
            <span style="margin-left: 0.625rem">{{ row.created_at }}</span>
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
</template>

<script>
export default {
  data() {
    return {
      title: "系统管理 - 权限",
      visible: false,
      list: [
        {
          id: 1,
          name: "系统管理权限",
          email: "admin@example.com",
          created_at: "2020-06-08"
        },
        {
          id: 1,
          name: "仪表盘权限",
          email: "admin@example.com",
          created_at: "2020-06-08"
        }
      ]
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
    }
  }
};
</script>
