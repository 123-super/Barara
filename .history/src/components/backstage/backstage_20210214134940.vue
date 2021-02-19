<template>
  <div class="back">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane
        label="Barara后台管理"
        class="backname"
        disabled
      ></el-tab-pane>
      <el-tab-pane label="用户管理" name="first">
        <div class="container">
          <el-form :inline="true">
            <el-form-item label="用户名称" class="label">
              <el-input
                v-model="userName"
                placeholder="请输入用户名称"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-button type="success">添加</el-button>
          </el-form>
          <el-table :data="tableData1" height="250" border>
            <el-table-column prop="username" label="用户名" width="180">
            </el-table-column>
            <el-table-column prop="password" label="密码" width="180">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >编辑</el-button
                >
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <!-- 增加用户 -->
      <el-dialog title="增加用户" :visible.sync="dialogFormVisible3">
        <el-form :model="form3">
          <el-form-item label="分类名称" :label-width="formLabelWidth">
            <el-input v-model="form3.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible3 = false">取 消</el-button>
          <el-button type="primary" @click="addCate(form3)">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 修改用户 -->
      <el-dialog title="修改用户" :visible.sync="dialogFormVisible4">
        <el-form :model="form4">
          <el-form-item label="分类名称" :label-width="formLabelWidth">
            <el-input v-model="form4.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible4 = false">取 消</el-button>
          <el-button type="primary" @click="updCateById(form4)"
            >确 定</el-button
          >
        </div>
      </el-dialog>

      <el-tab-pane label="订单管理" name="second">
        <div class="container">
          <el-form :inline="true">
            <el-form-item label="订单管理" class="label">
              <el-input
                v-model="orderName"
                placeholder="请输入订单名称"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-button type="success">添加</el-button>
          </el-form>
          <el-table :data="tableData2" height="250" border style="width: 40%">
            <el-table-column prop="username" label="用户名" width="180">
            </el-table-column>
            <el-table-column prop="password" label="密码" width="180">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >编辑</el-button
                >
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div></el-tab-pane
      >

      <el-tab-pane label="分类管理" name="third">
        <div class="container">
          <el-form :inline="true">
            <el-form-item label="分类名称" class="label">
              <el-input
                v-model="cateName"
                placeholder="请输入分类名称"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="searchName(cateName)"
                >查询</el-button
              >
            </el-form-item>
            <el-button type="success" @click="dialogFormVisible = true"
              >添加</el-button
            >
          </el-form>
          <el-table :data="tableData" border>
            <el-table-column prop="id" label="分类id" width="180">
            </el-table-column>
            <el-table-column prop="name" label="分类名称" width="180">
            </el-table-column>
            <el-table-column label="属性管理" width="180">
              <template><i class="iconfont">&#xe8f5;</i></template>
            </el-table-column>
            <el-table-column label="产品管理" width="180">
              <template><i class="iconfont">&#xe607;</i></template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="dialogFormVisible = true"
                  type="text"
                  size="small"
                  >编辑</el-button
                >
                <el-button
                  type="text"
                  size="small"
                  @click="deleteCate(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div></el-tab-pane
      >
    </el-tabs>
    <!-- 增加分类 -->
    <el-dialog title="增加分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCate(form)">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改分类 -->
    <el-dialog title="修改分类" :visible.sync="dialogFormVisible1">
      <el-form :model="form1">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input
            v-model="form1.name"
            :value="tableData.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="updCateById(form1)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getCategory, search, addCategory, delCategoryById, updCategoryById } from "../../api/category"
export default {
  data() {
    return {
      tableData: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      userName: '',
      cateName: '',
      orderName: '',
      activeName: 'second',
      tableData1: [{
        username: "sasa",
        password: "123456"
      }],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible3: false,
      dialogFormVisible4: false,
      formLabelWidth: '220px',
      form: {},
      form1: {},
      form3: {},
      form4: {}
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    getCategory() {
      getCategory().then((res) => {
        if (res.status == 200) {
          this.tableData = res.data
        }
      })
    },
    searchName(cateName) {
      search(cateName).then((res) => {
        if (res.status == 200) {
          console.log(res.data)
          this.tableData = res.data
        }
      })
    },
    addCate(param) {
      addCategory(param).then((res) => {
        if (res.status == 200) {
          this.dialogFormVisible = false
          this.getCategory()
          this.$message.success("添加用户成功!");
        }
      })
    },
    updCateById(param) {
      updCategoryById(param).then((res) => {
        this.getCategory()
        this.$message.success("修改用户成功!");
      })
    },
    deleteCate(id) {
      delCategoryById(id).then((res) => {
        this.getCategory()
        this.$message.success("删除用户成功!");
      })
    },
    handleClick(a) { },
  }
}
</script>
<style >
.back {
  font-size: 16px !important;
}
#tab-0 {
  margin-right: 20px;
  width: 200px !important;
}
.el-menu-demo {
  padding-left: 100px;
}
.el-tabs__nav {
  padding-left: 100px;
}
.el-tabs__item {
  height: 80px;
  width: 150px;
  text-align: center;
  line-height: 80px;
  font-size: 20px !important;
  font-weight: bold;
  color: #fff !important;
  border: none;
  border: none !important;
}
.el-tabs__nav-scroll {
  background-color: #545c64;
}
.is-active {
  background: black !important;
  border: none !important;
}

/* 表格样式 */
.cell {
  text-align: center;
}
</style>
