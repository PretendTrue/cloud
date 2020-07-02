<template>
  <div>
    <el-row>
      <el-col>
        <h1>{{ title }}</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col>123</el-col>
    </el-row>
    <el-row>
      <el-col><Base /></el-col>
      <el-col class="mt-8"><Contacts :isEdit="false" /></el-col>
      <el-col class="mt-8"><BankAccounts :isEdit="false" /></el-col>
      <el-col class="mt-8"><Mark :isEdit="false" /></el-col>
    </el-row>
  </div>
</template>

<script>
import Base from "./components/Base";
import Mark from "./components/Mark";
import Contacts from "./components/Contacts";
import BankAccounts from "./components/BankAccounts";

export default {
  data() {
    return {
      title: "客户管理 - 添加"
    };
  },
  components: {
    Base,
    Mark,
    Contacts,
    BankAccounts
  }
};
</script>
