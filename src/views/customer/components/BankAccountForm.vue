<template>
  <el-dialog
    :title="title"
    :visible="visible"
    @close="handleDialog"
    width="45%"
  >
    <el-form
      :model="form"
      label-width="100px"
    >
      <el-form-item label="账户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="开户名">
        <el-input v-model="form.account_name"></el-input>
      </el-form-item>
      <el-form-item label="银行卡号">
        <el-input v-model="form.bank_account_number"></el-input>
      </el-form-item>
      <el-form-item label="开户行地址">
        <el-input v-model="form.bank_address"></el-input>
      </el-form-item>
      <el-form-item label="银行名称">
        <el-input v-model="form.bank_name"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remarks"></el-input>
      </el-form-item>
    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="handleDialog">取 消</el-button>
      <el-button
        type="primary"
        @click="onSubmit"
      >确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'BankAccountForm',
  props: {
    customer: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    visibleDialog: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    form: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      visible: this.visibleDialog
    }
  },
  watch: {
    visibleDialog (value) {
      this.visible = value
    }
  },
  methods: {
    /**
     * 关闭会话窗口
     */
    handleDialog () {
      this.visible = false
      this.$emit('update:visibleDialog', false)
    },
    /**
     * 提交
     */
    onSubmit () {

      this.handleDialog()
    }
  }
}
</script>
