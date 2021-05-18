<template>
  <div class="container">
    <el-form :model="queryParams" ref="queryForm" @submit.native.prevent :inline="true">
      <el-form-item label="分类名称" prop="name" class="label">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入分类名称"
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
      <el-table-column prop="id" label="分类编号" />
      <el-table-column prop="name" label="分类名" />
      <el-table-column label="管理">
        <template slot-scope="scope">
          <router-link :to="'/backstage/product/' + scope.row.id">
            <el-link icon="el-icon-goods" type="primary">商品管理</el-link>
          </router-link>
        </template>
      </el-table-column>
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
            icon="el-icon-delete"
            size="small"
            @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加或修改分类 -->
    <el-dialog :title="title" :visible.sync="open" append-to-body>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item label="商品类别">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listCategory, getCategory, addCategory, delCategory, updateCategory } from "../../api/category"

export default {
  name: "Order",
  data() {
    return {
      loading: true,
      open: false,
      title: "",
      tableData: [],
      queryParams: {
        name: undefined
      },
      form: {},
      rules: {
        name: { required: true, message: '分类名不可为空', trigger: 'blur' }
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 获取列表信息
    getList() {
      this.loading = true;
      listCategory(this.queryParams).then(resp => {
        this.tableData = resp.data.data
        this.loading = false
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
        return delCategory(row.id)
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
};
</script>
