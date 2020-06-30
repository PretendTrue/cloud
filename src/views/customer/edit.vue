<template>
  <div>
    <el-row class="mb-30">
      <el-col>
        <h1>{{ title }}</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col><Base /></el-col>
      <el-col class="mt-8"><Contacts :isEdit="true" /></el-col>
      <el-col class="mt-8"><BankAccounts :isEdit="true" /></el-col>
    </el-row>
  </div>
</template>

<script>
import Base from "./components/Base";
import Contacts from "./components/Contacts";
import BankAccounts from "./components/BankAccounts";

export default {
  data() {
    return {
      title: "客户管理 - 编辑"
    };
  },
  components: {
    Base,
    Contacts,
    BankAccounts
  }
};
</script>
