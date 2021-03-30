<template>
  <div class="comment">
    <Header />
    <div class="container">
      <div class="detail">
        <div class="detail-leftpic">
          <img src="../../../static/img/testImg/detail1.jpg" alt="商品图片" />
        </div>
        <div class="detail-rightinfo">
          <h2 class="dtitle">{{ productitems[0].name }}</h2>
          <hr />
          <div class="one-p">
            <span class="keys">促销价</span>
            <span class="pprice">{{ productitems[0].price }}</span>
          </div>
          <div class="one-o">
            <span class="keys">品牌</span>
            <s class="oprice">{{ productitems[0].brand }}</s>
          </div>
          <div class="three">
            <span
              >库存<strong>{{ productitems[0].stocknum }}</strong
              >件</span
            >
          </div>
          <div class="four">
            服务承诺 正品保证 极速退款 赠运费险 七天无理由退换
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getProductById } from "../../api/product"
export default {
  data() {
    return {
      pid: "",
      uid: ""
    }
  },
  components: {
    Header: () => import('../headandfoot/Header')
  },
  created() {
    this.pid = this.$route.query.pid
    this.uid = this.$route.query.uid
    console.log("+++++++++++++++______")
    console.log(this.uid)
    this.getProductById()
  },
  methods: {
    getProductById() {
      getProductById(this.pid).then(() => {
        this.productitems = res.data
      })
    }
  },
}
</script>
<style scoped>
</style>