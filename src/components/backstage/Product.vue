<template>
  <div class="container">
    <el-breadcrumb style="margin-bottom: 20px" separator="/">
      <el-breadcrumb-item :to="{ path: '/backstage/third' }">分类管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{ categoryName }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form :model="queryParams" ref="queryForm" :inline="true">
      <el-form-item label="商品商标" prop="brand" class="label">
        <el-input
          v-model="queryParams.brand"
          placeholder="请输入商品商标"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品名称" prop="name" class="label">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入商品名称"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">查询</el-button>
        <el-button icon="el-icon-refresh" circle @click="resetQuery" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getCategory } from '../../api/category'
import { getProductByCid, getProductById } from '../../api/product'

export default {
  name: "Product",
  data() {
    return {
      loading: true,
      tableData: [],
      defaultCategoryId: undefined,
      categoryName: undefined,
      queryParams: {
        brand: undefined,
        name: undefined
      },
      form: {}
    }
  },
  created() {
    if (this.$route.params && this.$route.params.cId) this.defaultCategoryId = this.$route.params.cId
    this.getCategory()
    this.getList()
  },
  methods: {
    getList() {

    },
    getCategory() {
      if (this.defaultCategoryId) {
        getCategory(this.defaultCategoryId).then(resp => {
          this.categoryName = resp.data.data.name
        })
      }
    },
    // 处理查询
    handleQuery() {
      this.getList()
    },
    // 重置查询参数
    resetQuery() {
      this.$refs["queryForm"].resetFields()
      this.handleQuery()
    },
    // 重置表单
    reset() {
      this.form = {
        id: undefined,
        name: undefined
      };
      this.$refs["form"].resetFields()
    },
    // 取消
    cancel() {
      this.open = false;
      this.title = ""
      this.reset()
    },
    handleAdd() {
      this.open = true;
      this.title = "添加分类"
    },
    // 处理修改
    handleUpdate(row) {
      this.title = "修改分类"
      getCategory(row.id).then(resp => {
        this.form = resp.data.data
        this.open = true
      });
    },
    // 处理删除
    handleDelete(row) {
      this.$confirm("确定删除分类编号为'" + row.id + "'的分类吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {

      }).then(() => {
        this.getList()
        this.msgSuccess('删除成功')
      })
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.id !== undefined) {
            updateCategory(this.form).then(resp => {
              this.msgSuccess('修改成功')
              this.open = false
              this.getList()
            })
          } else {
            addCategory(this.form).then(resp => {
              this.msgSuccess('添加成功')
              this.open = false
              this.getList()
            })
          }
        }
      })
    }
  }
}
</script>