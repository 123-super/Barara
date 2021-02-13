<template>
  <div class="back">
    <el-menu
      router
      :default-active="$router.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item>Barara后台管理</el-menu-item>
      <el-menu-item :index="user">用户管理</el-menu-item>
      <el-menu-item :index="3">订单管理</el-menu-item>
      <el-menu-item :index="4">分类管理</el-menu-item>
    </el-menu>
    <div class="backcontent">
      <router-view></router-view>
    </div>

    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
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
      <el-tab-pane label="配置管理" name="second">订单管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">分类管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
.el-menu-demo {
  padding-left: 100px;
}
</style>
<script>
export default {
  data() {
    return {
      activeName: 'second',
      user: "/backstage/usermanage"
    }
  }
}
</script>