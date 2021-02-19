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
            <el-button type="success">添加</el-button>
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
    </el-tabs>
  </div>
</template>
<script>
import { getCategory, search } from "../../api/category"
export default {
  data() {
    return {
      tableData: [],
      tableData2: [],
      userName: '',
      cateName: '',
      orderName: '',
      activeName: 'second',
      tableData1: [{
        username: "sasa",
        password: "123456"
      }]
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
    addCategory(param) {
      addCategory(param).then(() => {

      })
    },
    updCategoryById(param) {
      updCategoryById(param).then(() => {

      })
    },
    delCategoryById(id) {
      delCategoryById(id).then(() => {

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
