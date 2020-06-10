<template>
  <el-row>
    <el-col class="mb-30">
      <el-row type="flex" align="middle">
        <el-col :span="12">
          <h1>{{ title }}</h1>
        </el-col>
        <el-col class="text-right" :span="12">
          <router-link :to="{name: 'admin.role.create'}">
            <el-button type="primary" round icon="el-icon-plus" >
            添加角色
            </el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-col>
    <el-col>
      <el-table :data="list">
        <el-table-column width="60">
          <template slot-scope="{row}">
            <el-avatar :size="50" :src="row.avatar"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column label="上次登录日期" width="180" align="center">
          <template slot-scope="{row}">
            <i class="el-icon-time"></i>
            <span style="margin-left: 0.625rem">{{ row.last_actived_at }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建日期" width="180" align="center">
          <template slot-scope="{row}">
            <i class="el-icon-time"></i>
            <span style="margin-left: 0.625rem">{{ row.created_at }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="{row}">
            <router-link :to="{name: 'admin.role.edit', params: { id: row.id }}">
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
import avatar from '@/assets/avatar.png'

export default {
  data() {
    return {
      title: "系统管理 - 角色",
      visible: false,
      list: [
        {
          id: 1,
          avatar: avatar,
          name: "Administrator",
          email: "admin@example.com",
          created_at: "2020-06-08",
          last_actived_at: "2020-06-08"
        }
      ]
    };
  },
  methods: {
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
