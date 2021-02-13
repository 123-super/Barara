<template>
  <div class="back">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tabs-pane label="Barara后台管理">Barara后台管理</el-tabs-pane>
      <el-tab-pane label="用户管理" name="first">
        <div class="container">
          <el-form :inline="true">
            <el-form-item label="用户名称" class="label">
              <el-input
                v-model="menuName"
                placeholder="请输入用户名称"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-button @click="toAdd" type="success">添加</el-button>
          </el-form>
          <el-table :data="tableData" height="250" border style="width: 40%">
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
            <el-form-item label="用户名称" class="label">
              <el-input
                v-model="menuName"
                placeholder="请输入用户名称"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-button @click="toAdd" type="success">添加</el-button>
          </el-form>
          <el-table :data="tableData" height="250" border style="width: 40%">
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
            <el-form-item label="用户名称" class="label">
              <el-input
                v-model="menuName"
                placeholder="请输入用户名称"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-button @click="toAdd" type="success">添加</el-button>
          </el-form>
          <el-table :data="tableData" height="250" border style="width: 40%">
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
    </el-tabs>
  </div>
</template>

<style>
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
  font-size: 20px;
  font-weight: bold;
  color: #fff !important;
  border: none;
}
.el-tabs__nav-scroll {
  background-color: #545c64;
}
.is-active {
  background: black !important;
  border: none !important;
}
</style>
<script>
export default {
  data() {
    return {
      activeName: 'second',
      tableData: [{
        username: "sasa",
        password: "123456"
      }],
      user: "/backstage/usermanage"
    }
  }
}
</script>