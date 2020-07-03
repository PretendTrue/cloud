<template>
  <div>
    <el-row>
      <el-col>
        <h1>{{ title }}</h1>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between" class="mb-5">
      <el-col class="colored-cards purple-colored-cards" :class="{ 'filter-none': configure.baseShow}" :span="5" @click.native="switchModular('baseShow')">
        <i class="el-icon-ice-tea"></i> 客户资料
      </el-col>
      <el-col class="colored-cards purplish-red-colored-cards" :class="{ 'filter-none': configure.contactShow}" :span="5" @click.native="switchModular('contactShow')">
        <i class="el-icon-ice-tea"></i> 联系人信息
      </el-col>
      <el-col class="colored-cards blue-colored-cards" :class="{ 'filter-none': configure.bankAccountShow}" :span="5" @click.native="switchModular('bankAccountShow')">
        <i class="el-icon-ice-tea"></i> 银行卡信息
      </el-col>
    </el-row>
    <el-row>
      <el-col class="mt-8" v-if="configure.baseShow"><Base /></el-col>
      <el-col v-if="configure.contactShow"><Contacts :isEdit="true" /></el-col>
      <el-col v-if="configure.bankAccountShow"><BankAccounts :isEdit="true" /></el-col>
    </el-row>
  </div>
</template>

<script>
import Base from "./components/Base";
import Contacts from "./components/Contacts";
import BankAccounts from "./components/BankAccounts";
import { forEach } from 'lodash'

export default {
  data() {
    return {
      title: "厂家管理 - 编辑",
      configure: {
        baseShow: true,
        contactShow: false,
        bankAccountShow: false,
      }
    };
  },
  components: {
    Base,
    Contacts,
    BankAccounts
  },
  methods: {
    /**
     * 切换模块
     */
    switchModular(type) {
      forEach(this.configure, (item, key) => {
        if (item === true) this.configure[key] = false
      })
      this.configure[type] = !this.configure[type]

      console.info(this.configure)
    }
  }
};
</script>
