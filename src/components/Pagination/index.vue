<template>
  <div class="mt-6 float-right">
    <el-pagination
      hide-on-single-page
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>

export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get() {
        return this.perPage
      },
      set(val) {
        this.$emit('update:perPage', val)
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', { page: this.currentPage, perPage: val })
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, perPage: this.pageSize })
    }
  }
}
</script>
