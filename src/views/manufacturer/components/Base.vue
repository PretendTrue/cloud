<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>客户资料</span>
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
      </el-row>
      <el-divider content-position="left">中英文信息</el-divider>
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="英文全称 (English full name)">
            <el-input v-model="form.english_full_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="英文地址 (English address)">
            <el-input v-model="form.english_address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="中文全称">
            <el-input v-model="form.full_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="中文地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider content-position="left">业务信息</el-divider>
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="跟单员">
            <el-select class="w-full" v-model="form.merchandiser" filterable placeholder="请选择跟单员">
              <el-option
                v-for="item in merchant_admin_users"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="交货方式">
            <el-input
              placeholder="请填写交货方式"
              suffix-icon="el-icon-edit"
              v-model="form.delivery_type">
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
      form: {},
      country,
      merchant_admin_users: [
        {
          id: 1,
          name: '小白'
        },
        {
          id: 2,
          name: '小明'
        }
      ]
    };
  }
};
</script>
