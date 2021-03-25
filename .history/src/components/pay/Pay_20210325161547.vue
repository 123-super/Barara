<template>
  <div>
    <Header />
    <div class="container">
      <div class="payPage">
        <h3>扫一扫向商家付钱</h3>
        <h3>Price</h3>
        <img src="../../../static/img/pay.jpg" alt="收钱码" class="check" />
        <el-button type="primary" @click="pay()">确认支付</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Header: () => import('../headandfoot/Header')
  }
}
</script>
<style>
.check {
  width: 195px;
  height: 230px;
}
</style>