<template>
  <div class="comment">
    <Header />
    <div class=""></div>
  </div>
</template>
<script>
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
  },
  methods: {

  },
}
</script>
<style scoped>
</style>