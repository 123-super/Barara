<template>
  <div class="back">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">Barara后台管理</el-menu-item>
      <el-menu-item index="2">用户管理</el-menu-item>
      <el-menu-item index="3">订单管理</el-menu-item>
      <el-menu-item index="4"></el-menu-item>
    </el-menu>
  </div>
</template>

<style>
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