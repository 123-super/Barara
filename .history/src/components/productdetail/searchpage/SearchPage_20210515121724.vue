<template>
  <div id="searchPage">
    <Header />
    <ul class="category-right">
      <li
        class="category_right_li clearfix"
        v-for="it2 in this.$store.state.searchResult"
        :key="it2.id"
        style=""
      >
        <a href="javascript:;" style="color: black">
          <div class="cbrand">{{ it2.brand }}</div>
          <div>{{ it2.name }}</div>
          <div class="cprice">{{ it2.price }}</div>
          <div>
            <img src="../../../../static/img/兰蔻.jpg" alt="商品图片" />
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  components: {
    Header: () => import("../../Header")
  }
}
</script>