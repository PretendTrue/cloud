<template>
  <div>
    <h1 class="text-center">Welcome Back</h1>
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-position="top"
      hide-required-asterisk
      class="auth-form"
    >
      <el-form-item label="邮箱" prop="email" class="font-blod tracking-widest">
        <el-input
          v-model="form.email"
          placeholder="example@gmail.com"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        class="font-blod tracking-widest"
      >
        <el-input v-model="form.password" placeholder="******" show-password></el-input>
      </el-form-item>
      <el-button class="w-full" type="primary" @click="onSubmit" >登录</el-button>
    </el-form>
  </div>
</template>

<script>
import localforage from "localforage";
import { login, me } from "@/api/auth";
import { permissions } from '@/api/admin-user'

export default {
  data() {
    return {
      form: {
        email: "alipapa@example.com",
        password: "secret",
        remember: false
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { type: 'email', message: "请输入正确的邮箱格式", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度至少在 6 个字符以上", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    /**
     * 切换组件
     */
    authComponent(type) {
      this.$emit("authComponent", type);
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    /**
     * 登录
     */
    async login() {
      await login(this.form).then(({access_token}) => {
        localforage.setItem("token", access_token);
      });

      await me().then(user => {
        localforage.setItem("user", user);
      });

      await permissions().then(permissions => {
        localforage.setItem('permissions', permissions)
      })

      this.$message.success("登录成功~");
      this.$router.push({ name: "dashboard" });
    }
  }
};
</script>
