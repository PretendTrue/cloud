<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span class="cursor-pointer" @click="cardPointer()">客户资料</span>
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
            <el-select class="w-full" v-model="form.country" filterable placeholder="请选择">
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
        <el-col :xs="24" :sm="12" :lg="6" :span="4">
          <el-form-item label="成立于">
            <el-date-picker
              class="w-full"
              v-model="form.founded_at"
              type="date"
              placeholder="选择成立日期"
            >
            </el-date-picker>
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
          <el-form-item label="业务员">
            <el-select class="w-full" v-model="form.salesman" filterable placeholder="请选择业务员">
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
          <el-form-item label="折扣">
            <el-input
              placeholder="请填写折扣"
              suffix-icon="el-icon-edit"
              v-model="form.rebate">
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
import { findIndex } from 'lodash'
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
      ],
      test: true
    };
  },
  methods: {
    /**
     * 动态操作 card
     */
    cardPointer () {
      let card_body = this.$el.lastChild;
      let classArr = card_body.className.split(' ')
      let showClassIndex = findIndex(classArr, item => { return item === 'card-display-show' })
      let hiddenClassIndex = findIndex(classArr, item => { return item === 'card-display-hidden' })

      if (showClassIndex === -1 && hiddenClassIndex === -1) {
        classArr.splice(0, 0, 'card-display-hidden')
      } else if (showClassIndex === -1) {
        classArr.splice(hiddenClassIndex, 1, 'card-display-show')
      } else if (hiddenClassIndex === -1) {
        classArr.splice(showClassIndex, 1, 'card-display-hidden')
      }

      card_body.className = classArr.join(' ')
      this.test = !this.test
    }
  }
};
</script>
