<template>
  <div>
    <Header />
    <div class="container">
      <div class="payPage">
        <h3>扫一扫向商家付钱</h3>
        <h3>Price</h3>
        <div class="img-container">
          <img src="../../../static/img/pay.jpg" alt="收钱码" class="check" />
        </div>
        <el-button
          type="primary"
          @click="pay()"
          class="confirm"
          :disabled="check"
          >确认支付</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { updateStatus } from "../../api/order"
export default {
  data() {
    return {
      check: false,
    }
  },
  components: {
    Header: () => import('../headandfoot/Header')
  },
  methods: {
    pay() {
      this.check = !this.check
      let id = this.$route.query.oid
      console.log(this.$route.query.oid)
      updateStatus(id).then((res) => {
        if (res.status == 200)
          this.$message.success("支付成功")
      })
    }
  }
}
</script>
<style>
.payPage {
  padding-top: 40px;
  text-align: center;
  height: 462px;
}
.payPage > h3 {
  margin-top: 10px;
  font-size: 18px;
}
.check {
  width: 250px;
  height: 300px;
}
.img-container {
  margin: 20px 0;
}
.confirm {
  width: 150px;
}
</style>