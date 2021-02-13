<template>
  <div class="back">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Barara">Barara后台管理</el-tab-pane>
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
.el-tabs,
.el-tabs--top {
  height: 100px;
  padding-left: 100px;
  background: rgb();
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