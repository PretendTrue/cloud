<template>
  <div>
    <el-row>
      <el-col>
        <el-row type="flex" align="middle">
          <el-col :span="12">
            <h1>{{ title }}</h1>
          </el-col>
          <el-col class="text-right" :span="12">
            <router-link :to="{name: 'product.material.create'}">
              <el-button type="primary" round icon="el-icon-plus" >
              添加物料
              </el-button>
            </router-link>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="custom-table">
        <el-table :data="list">
          <el-table-column prop="name" label="物料名称"></el-table-column>
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
              <router-link :to="{name: 'product.material.edit', params: { id: row.id }}">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "产品 - 物料管理",
      visible: false,
      list: [
        {
          id: 1,
          name: "系统管理物料",
          email: "admin@example.com",
          created_at: "2020-06-08",
          last_active_at: "2020-06-11"
        },
        {
          id: 1,
          name: "仪表盘物料",
          email: "admin@example.com",
          created_at: "2020-06-08",
          last_active_at: "2020-06-11"
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
