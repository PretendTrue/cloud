<template>
  <div class="custom-table">
    <el-table
      highlight-current-row
      :data="list"
    >
      <el-table-column
        prop="name"
        label="账户名"
      >
      </el-table-column>
      <el-table-column
        prop="account_name"
        label="开户名"
      >
      </el-table-column>
      <el-table-column
        prop="bank_account_number"
        label="银行卡号"
      >
      </el-table-column>
      <el-table-column
        prop="bank_address"
        label="开户行地址"
      >
      </el-table-column>
      <el-table-column
        prop="bank_name"
        label="银行名称"
      >
      </el-table-column>
      <el-table-column
        width="180"
        align="center"
      >
        <template slot="header">
          <el-button
            type="primary"
            round
            @click="openDialog({}, false)"
          >添加银行账号</el-button>
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

    <BankAccountForm
      :visibleDialog.sync="visibleDialog"
      :title='dialogTitle'
      :form='row'
      :customer="customer"
      :isEdit="visibleDialogIsEdit"
    />
  </div>
</template>

<script>
import BankAccountForm from './BankAccountForm'
import { isEmpty } from 'lodash'

export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BankAccountForm
  },
  data () {
    return {
      customer: '',
      visibleDialog: false,
      visibleDialogIsEdit: false,
      dialogTitle: '',
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
      this.dialogTitle = isEmpty(row) ? '添加银行账号' : '修改银行账号'
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

      console.info(page)
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
