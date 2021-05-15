<template>
  <div id="searchPage">
    <ul class="category-right">
      <li
        class="category_right_li clearfix"
        v-for="it2 in clist[it1.id - 2]"
        :key="it2.id"
        style=""
      >
        <a href="javascript:;" style="color: black">
          <div class="cbrand">{{ it2.brand }}</div>
          <div>{{ it2.name }}</div>
          <div class="cprice">{{ it2.price }}</div>
          <div>
            <img src="../../static/img/兰蔻.jpg" alt="商品图片" />
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>