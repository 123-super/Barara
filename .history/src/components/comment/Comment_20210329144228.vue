<template>
  <div class="comment">
    <Header />
    <div class="container">
      <div class="commentPorduct">
        <div><img src="" alt="评论页的商品图片" /></div>
        <div></div>
      </div>
      <div></div>
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
    getProductById({ id: this.pid })
  },
  methods: {

  },
}
</script>
<style scoped>
</style>