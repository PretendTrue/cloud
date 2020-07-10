<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>物料信息</span>
    </div>
    <el-row :gutter="30">
      <el-col :xs="24" :span="4" class="text-center">
        <el-avatar :src="form.avatar" :size="100"></el-avatar>
      </el-col>
      <el-col :xs="24" :span="19">
        <el-form ref="form" :model="form" label-position="top">
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="物料编号">
                <el-input v-model="form.code"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="物料名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="物料分类">
                <el-select class="w-full" v-model="form.category" placeholder="请选择">
                  <el-option
                    v-for="category in categories"
                    :key="category.id"
                    :label="category.name"
                    :value="category.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6" :span="4">
              <el-form-item label="厂家">
                <el-select class="w-full" v-model="form.manufacturer" placeholder="请选择">
                  <el-option
                    v-for="manufacturer in manufacturers"
                    :key="manufacturer.id"
                    :label="manufacturer.name"
                    :value="manufacturer.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="12" :sm="6" :lg="4" :span="2">
              <el-form-item label="采购单价">
                <el-input v-model="form.buying_unit_price"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :lg="4" :span="2">
              <el-form-item label="重量">
                <el-input v-model="form.weight"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :lg="4" :span="2">
              <el-form-item label="当前库存">
                <el-input v-model="form.current_stock"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :lg="4" :span="2">
              <el-form-item label="安全库存">
                <el-input v-model="form.safety_stock"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :lg="4" :span="2">
              <el-form-item label="起订量">
                <el-input v-model="form.moq"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :lg="4" :span="2">
              <el-form-item label="同步">
                <el-switch
                  v-model="form.sync"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import avatar from '@/assets/avatar.png'

export default {
  data() {
    return {
      form: {
        avatar: avatar,
        code: "xxx",
        name: "刀柄",
        password: "secret",
        category: '',
        manufacturer: '',
      },
      categories: [
        {
          id: 1,
          name: '厨具'
        },
        {
          id: 2,
          name: '刀具'
        }
      ],
      manufacturers: [
        {
          id: 1,
          name: '阿里巴巴'
        },
        {
          id: 2,
          name: '鹅厂'
        }
      ]
    };
  }
};
</script>
