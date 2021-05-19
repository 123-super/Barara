<template>
  <div class="back">
    <el-tabs
      v-model="activeName"
      type="border-card"
      @tab-click="handleTabsClick"
    >
      <el-tab-pane label="Barara后台管理" class="backname" disabled />
      <el-tab-pane label="用户管理" name="first" />
      <el-tab-pane label="订单管理" name="second" />
      <el-tab-pane label="分类管理" name="third" />
      <router-view />
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'first',
      tableData3: [],
      tableData4: [],
      cateName: "",
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {},
      form1: {}
    };
  },
  watch: {
    '$route': {
      handler: function (route) {
        if (route.meta && route.meta.active) this.activeName = route.meta.active
      },
      immediate: true
    }
  },
  methods: {
    handleTabsClick(tab) {
      this.$router.replace(`/backstage/${tab.name}`);
    }
  }
};
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
.el-tabs--border-card {
  box-shadow: none;
  border: none;
}

/* 表格样式 */
.cell {
  text-align: center;
}
</style>
