<template>
  <el-row>
    <el-col>
      <el-row type="flex" align="middle">
        <el-col :span="12">
          <h1>{{ title }}</h1>
        </el-col>
        <el-col class="text-right" :span="12">
          <router-link :to="{name: 'admin.user.create'}">
            <el-button type="primary" round icon="el-icon-plus" >
            添加管理员
            </el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-col>
    <el-col class="custom-table">
      <el-table :data="list">
        <el-table-column width="60">
          <template slot-scope="{row}">
            <el-avatar :size="50" :src="row.avatar"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="department.name" label="所属部门"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column label="上次登录日期" width="200" align="center">
          <template slot-scope="{row}">
            <i class="el-icon-time"></i>
            <span style="margin-left: 0.625rem">{{ row.last_actived_at }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建日期" width="200" align="center">
          <template slot-scope="{row}">
            <i class="el-icon-time"></i>
            <span style="margin-left: 0.625rem">{{ row.created_at }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="{row}">
            <router-link :to="{name: 'admin.user.edit', params: { id: row.id }}">
              <el-button class="mr-4" size="mini" >
                编辑
              </el-button>
            </router-link>
            <el-popover placement="bottom" v-model="row.visible">
              <p>是否要删除？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="row.visible = !row.visible">
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

      <pagination
        :total="meta.total"
        :page.sync="listQuery.page"
        :perPage.sync="listQuery.per_page"
        @pagination="getList"
      />
    </el-col>
  </el-row>
</template>

<script>
import { fetchList, destroy } from '@/api/admin-user'
import Pagination from '@/components/Pagination'

export default {
  data() {
    return {
      title: "系统管理 - 管理员",
      list: [],
      meta: {},
      listQuery: {
        page: 1,
        per_page: 20
      }
    };
  },
  components: { Pagination },
  created () {
    this.getList()
  },
  methods: {
    getList() {
      fetchList(this.listQuery)
        .then(response => {
          this.list = response.data
          response.meta.per_page = parseInt(response.meta.per_page)
          this.meta = response.meta
        })
    },
    async handleDelete(row) {
      row.visible = !row.visible

      await destroy(row.id)
        .then(response => {
          this.$notify.success({
            title: '提醒',
            message: '删除成功'
          });
        })

      this.getList()
    }
  }
};
</script>
