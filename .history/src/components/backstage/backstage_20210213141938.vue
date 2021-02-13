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

    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
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