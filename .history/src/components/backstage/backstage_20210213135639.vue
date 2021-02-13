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
      <el-menu-item :index="/backstage/aaeegmnrsu">用户管理</el-menu-item>
      <el-menu-item :index="3">订单管理</el-menu-item>
      <el-menu-item :index="4">分类管理</el-menu-item>
    </el-menu>
    <div class="backcontent">
      <router-view></router-view>
    </div>
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
      activeName: 'second'
    }
  }
}
</script>