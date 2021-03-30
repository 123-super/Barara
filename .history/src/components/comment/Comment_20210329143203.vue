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
    }
  },
  components: {
    Header: () => import('../headandfoot/Header')
  },
  created() {
    this.pid = this.$route.query.id
    console.log()
  },
  methods: {

  },
}
</script>
<style scoped>
</style>