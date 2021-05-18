<template>
  <div class="container">
    <el-breadcrumb style="margin-bottom: 20px" separator="/">
      <el-breadcrumb-item :to="{ path: '/backstage/third' }"
        >分类管理</el-breadcrumb-item
      >
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

    <el-row style="margin-bottom: 15px">
      <el-button type="success" @click="handleAdd">添加</el-button>
    </el-row>

    <el-table v-loading="loading" :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="商品编号" />
      <el-table-column label="商品图片">
        <template slot-scope="scope">
          <el-avatar
            shape="square"
            alt="商品图片"
            @error="handleError"
            :size="100"
            fit="cover"
            :src="'/api/images/productSingle/' + scope.row.id + '.jpg'"
          >
            <img :src="defaultImg" />
          </el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="brand" label="商标" />
      <el-table-column prop="name" label="商品名" />
      <el-table-column prop="price" label="价格">
        <template slot-scope="scope">
          <span>￥ {{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="desc"
        label="详细信息"
        :show-overflow-tooltip="true"
      />
      <el-table-column prop="stocknum" label="库存" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            icon="el-icon-edit"
            size="small"
            @click="handleUpdate(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="text"
            icon="el-icon-picture-outline"
            size="small"
            @click="handleUpload(scope.row)"
            >上传图片</el-button
          >
          <el-button
            type="text"
            icon="el-icon-delete"
            size="small"
            @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加或修改商品 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row :gutter="15">
          <el-col :span="12">
            <el-form-item label="商标名" prop="brand">
              <el-input v-model="form.brand" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商品名称" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商品价格" prop="price">
              <el-input v-model.number="form.price" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商品库存" prop="stocknum">
              <el-input-number
                v-model="form.stocknum"
                controls-position="right"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="商品描述" prop="desc">
              <el-input type="textarea" :rows="5" v-model="form.desc" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getCategory, updateCategory } from '../../api/category'
import { listProduct, addProduct, updateProduct, delProduct, getProductById } from '../../api/product'

export default {
  name: "Product",
  data() {
    return {
      loading: true,
      open: false,
      title: '',
      tableData: [],
      defaultImg: require('../../assets/default.png'),
      defaultCategoryId: undefined,
      categoryName: undefined,
      queryParams: {
        cid: undefined,
        brand: undefined,
        name: undefined,
        price: undefined,
        stocknum: undefined,
        desc: undefined
      },
      form: {},
      rules: {
        brand: { required: true, message: '商标名不可为空', trigger: 'blur' },
        name: { required: true, message: '商品名不可为空', trigger: 'blur' },
        price: [
          { required: true, message: '价格不可为空', trigger: 'blur' },
          { type: 'number', message: '价格必须为数字值', trigger: 'blur'}
        ],
        stocknum: { required: true, message: '库存不可为空', trigger: 'blur' },
        desc: { required: true, message: '详情不可为空', trigger: 'blur' }
      }
    }
  },
  created() {
    const cid = this.$route.params && this.$route.params.cId
    this.getCategory(cid)
  },
  methods: {
    getList() {
      this.loading = true
      listProduct(this.queryParams).then(resp => {
        this.tableData = resp.data.data
        this.loading = false
      })
    },
    getCategory(cid) {
      this.defaultCategoryId = cid
      getCategory(cid).then(resp => {
        this.queryParams.cid = cid
        this.categoryName = resp.data.data.name
        this.getList()
      })
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
        name: undefined,
        price: undefined,
        stocknum: 1,
        desc: undefined,
        cid: undefined
      };
      this.resetForm('form')
    },
    // 取消
    cancel() {
      this.open = false;
      this.title = ""
      this.reset()
    },
    handleError() {
      return true
    },
    handleAdd() {
      this.reset()
      this.open = true;
      this.title = "添加商品"
      this.form.cid = this.defaultCategoryId
    },
    // 处理修改
    handleUpdate(row) {
      this.reset()
      this.title = "修改商品"
      getProductById(row.id).then(resp => {
        this.form = resp.data.data[0]
        this.open = true
      });
    },
    handleUpload() {

    },
    // 处理删除
    handleDelete(row) {
      this.$confirm("确定删除编号为'" + row.id + "'的商品吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        return delProduct(row.id)
      }).then(() => {
        this.getList()
        this.msgSuccess('删除成功')
      })
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.id !== undefined) {
            updateProduct(this.form).then(resp => {
              this.msgSuccess('修改成功')
              this.open = false
              this.getList()
            })
          } else {
            addProduct(this.form).then(resp => {
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