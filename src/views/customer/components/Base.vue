<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span class="cursor-pointer">个人资料</span>
    </div>
    <el-form ref="form" :model="form" label-position="top">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="客户编号">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="客户简称">
            <el-input v-model="form.abbreviation"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="国家">
            <el-select class="w-full" v-model="form.role" filterable placeholder="请选择">
              <el-option
                v-for="item in country"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider content-position="left">中英文信息</el-divider>
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="英文全称 (English full name)">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="英文地址 (English address)">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="中文全称">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="中文地址">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider content-position="left">业务信息</el-divider>
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="业务员">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="跟单员">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="折扣">
            <el-input
              placeholder="请填写折扣"
              suffix-icon="el-icon-edit"
              v-model="input1">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import country from '@/utils/country'

export default {
  data() {
    return {
      form: {
        code: "XXXX",
        abbreviation: "Administrator",
      },
      country
    };
  }
};
</script>
