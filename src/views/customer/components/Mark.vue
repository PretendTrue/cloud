<template>
  <el-row :gutter="20">
    <el-col
      :span="6"
      v-for="(item, index) in marks"
      :key="index"
    >
      <el-card :body-style="{ padding: '0px' }">
        <div slot="header">
          <span>{{item}}</span>
        </div>
        <el-upload
          class="avatar-uploader"
          action="#"
          :data="{key: index}"
          :show-file-list="false"
          :http-request="uploadAvatar"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-show="form[index].picture"
            :src="form[index].picture"
            class="avatar"
          >
          <i
            v-show="!form[index].picture"
            class="el-icon-plus avatar-uploader-icon"
          ></i>
        </el-upload>
        <div style="padding: 14px;">
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 6}"
            placeholder="请输入唛标内容"
            v-model="form[index].content"
          >
          </el-input>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>

export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      customer: '',
      currentDate: new Date(),
      marks: {
        front: '正唛',
        side: '侧唛',
        inner_box: '内盒唛',
        middle_box: '中盒唛'
      },
      form: {
        'front': {
          content: '',
          picture: ''
        },
        'side': {
          content: '',
          picture: ''
        },
        'inner_box': {
          content: '',
          picture: ''
        },
        'middle_box': {
          content: '',
          picture: ''
        }
      }
    }
  },
  created () {
    if (this.isEdit) {
      let id = this.$route.params && this.$route.params.id

      this.customer = id
      this.info()
    }
  },
  methods: {
    /**
     * 唛标
     */
    info () {
      console.info(123)
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
    async uploadAvatar (params) {
      const formData = new FormData()
      formData.append('key', 'photo')
      formData.append('folder', 'photos')
      formData.append('photo', params.file)


      console.info(123)

      this.onSubmit()
    },
    /**
     * 提交
     */
    onSubmit () {

      console.info(123)
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
