<template>
  <div class="commentpage">
    <div class="commentitems">
      <i class="iconfont">&#xe6cc;</i>
      <span class="comment">真不错呀</span>
      <div class="clearfix">
        <span class="user">张三</span><span class="datetime">2010-10-10</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  components: {
    Header: () => { import '../headandfoot/Header' }
  }
}
</script>
<style scoped>
</style>