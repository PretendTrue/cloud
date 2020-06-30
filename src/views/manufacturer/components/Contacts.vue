<template>
  <div class="custom-table">
    <el-table
      highlight-current-row
      :data="list"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left">
            <el-form-item label="生日">
              <span>{{ props.row.birthday }}</span>
            </el-form-item>
            <el-form-item label="传真">
              <span>{{ props.row.fax }}</span>
            </el-form-item>
            <el-form-item label="电话">
              <span>{{ props.row.telephone }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="photo"
        label="照片"
        width="130"
        align="center"
      >
        <template slot-scope="scope">
          <el-avatar
            shape="square"
            :size="100"
            :src="scope.row.photo"
          ></el-avatar>
        </template>
      </el-table-column>
      <el-table-column
        prop="visiting_card"
        label="名片"
        width="130"
        align="center"
      >
        <template slot-scope="scope">
          <el-avatar
            shape="square"
            :size="100"
            :src="scope.row.visiting_card"
          ></el-avatar>
        </template>
      </el-table-column>
      <el-table-column
        prop="department"
        label="部门"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="job"
        label="职位"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号码"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="on_staff"
        label="在职人员"
        width="180"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.on_staff ? 'success' : 'danger'">{{scope.row.on_staff ? '在职' : '离职'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="primary_contact"
        label="联系人类型"
        width="180"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.primary_contact ? '' : 'info'">{{scope.row.primary_contact ? '主要联系人' : '一般联系人'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        width="150"
        align="center"
      >
        <template slot="header">
          <el-button
            type="primary"
            round
            @click="openDialog({}, false)"
          >添加联系人</el-button>
        </template>
        <template slot-scope="scope">
          <i
            class="cursor-pointer icon-style el-icon-edit-outline"
            @click="openDialog(scope.row, true)"
          ></i>
          <el-popconfirm
            confirmButtonText='好的'
            cancelButtonText='不用了'
            icon="el-icon-info"
            title="这是一段内容确定删除吗？"
            @onConfirm="handleDelete(scope.row)"
            :value="scope.row.visible"
          >>
            <i
              slot="reference"
              class="cursor-pointer icon-style el-icon-delete"
            ></i>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        background
        layout="prev, pager, next, jumper, sizes, total"
        hide-on-single-page
        :total="meta.total"
        :page-sizes="pageSizes"
        :page-size="meta.per_page"
        @current-change="getList"
        @prev-click="getList"
        @next-click="getList"
        @size-change="handleSizeChange"
      >
      </el-pagination>
    </div>

    <ContactForm
      :visibleDialog.sync="visibleDialog"
      :title='dialogTitle'
      :form='row'
      :isEdit="visibleDialogIsEdit"
      :customer="customer"
    />
  </div>
</template>

<script>
import ContactForm from './ContactForm'
import { isEmpty } from 'lodash'

export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ContactForm
  },
  data () {
    return {
      customer: 0,
      visibleDialog: false,
      dialogTitle: '',
      visibleDialogIsEdit: false,
      row: {},
      list: [],
      meta: {},
      listQuery: {
        keywords: '',
        page: 1,
        limit: 20
      },
      pageSizes: [20, 50, 100]
    }
  },
  created () {
    if (this.isEdit) {
      let id = this.$route.params && this.$route.params.id

      this.customer = id
      this.getList()
    }
  },
  methods: {
    openDialog (row, visibleDialogIsEdit) {
      this.row = row
      this.dialogTitle = isEmpty(row) ? '添加联系人' : '修改联系人'
      this.visibleDialogIsEdit = visibleDialogIsEdit
      this.visibleDialog = true
    },
    /**
     * 搜索
     */
    search (keywords) {
      this.listQuery.keywords = keywords

      this.getList()
    },
    /**
     * 更改每页显示数量
     */
    handleSizeChange (limit = 20) {
      this.listQuery.limit = limit

      this.getList()
    },
    /**
     * 获取列表数据
     */
    getList (page = 1) {
      this.listQuery.page = page


    },
    /**
     * 删除数据
     */
    handleDelete (row) {
      console.info(row)
    }
  }
}
</script>
