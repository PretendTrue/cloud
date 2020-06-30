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
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="form.department"></el-input>
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-model="form.job"></el-input>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="form.telephone"></el-input>
      </el-form-item>
      <el-form-item label="传真">
        <el-input v-model="form.fax"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="联系人照片">
        <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :http-request="uploadAvatar"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-show="form.photo"
            :src="form.photo"
            class="avatar"
          >
          <i
            v-show="!form.photo"
            class="el-icon-plus avatar-uploader-icon"
          ></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="名片">
        <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :http-request="uploadAvatar"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-show="form.visiting_card"
            :src="form.visiting_card"
            class="avatar"
          >
          <i
            v-show="!form.visiting_card"
            class="el-icon-plus avatar-uploader-icon"
          ></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker
          v-model="form.birthday"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="联系人类型">
        <el-radio-group v-model="form.primary_contact">
          <el-radio-button :label="true">主要联系人</el-radio-button>
          <el-radio-button :label="false">一般联系人</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否在职">
        <el-radio-group v-model="form.on_job">
          <el-radio-button :label="true">在职</el-radio-button>
          <el-radio-button :label="false">离职</el-radio-button>
        </el-radio-group>
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
  name: 'ContactForm',
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
      dialogImageUrl: '',
      visible: this.visibleDialog,
      deletePhotoPath: ''
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
     * 上传前校验
     */
    beforeAvatarUpload (file) {
      let fileType = file.type.indexOf('image') !== -1
      let isLt2M = file.size / 1024 / 1024 < 2

      if (!fileType) {
        this.$message.error('只能上传图片!')
      }
      if (!isLt2M) {
        this.$message.error('图片大小不能超过 2MB!')
      }
      return fileType && isLt2M
    },
    /**
     * 上传
     */
    uploadAvatar (params) {
      const formData = new FormData()
      formData.append('key', 'photo')
      formData.append('folder', 'photos')
      formData.append('photo', params.file)

      console.info(params)
    },
    /**
     * 提交
     */
    onSubmit () {
      console.info(123)

      this.handleDialog()
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 10rem;
  height: 10rem;
  display: block;
}
</style>
