<template>
  <div id="home">
    <Header />
    <div class="category-content">
      <div class="container clearfix">
        <div class="bancontent">
          <div class="banner">
            <ul class="bannerlist">
              <li class="listitem" v-for="item in listdata" :key="item.id">
                <a href="" class="banitems"
                  >{{ item.name }}<i class="iconfont">&#xe633;</i></a
                >
                <div class="banrightlist clearfix">
                  <ul>
                    <li
                      v-for="it in productlist[item.id - 2]"
                      :key="it.id"
                      style="
                        width: 400px;
                        float: left;
                        margin-left: 50px;
                        font-size: 14px;
                        font-weight: bold;
                        cursor: pointer;
                      "
                    >
                      <router-link
                        :to="{
                          path: '/ProductDetail',
                          query: { id: it.id, cid: it.cid },
                        }"
                        style="color: black"
                        ><span> {{ it.name }}</span></router-link
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tianc"></div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="lunbo">
      <div class="container">
        <div class="lunbolist">
          <div class="swrapper" style="left: 0px">
            <img class="scrollImg ac" src="../../static/img/bannerback.jpg" />
            <img class="scrollImg ac" src="../../static/img/bannerback2.jpg" />
            <img class="scrollImg ac" src="../../static/img/bannerback3.jpg" />
            <img class="scrollImg ac" src="../../static/img/bannerback4.jpg" />
            <img class="scrollImg ac" src="../../static/img/bannerback5.jpg" />
          </div>
          <!-- 如果需要分页器 -->
          <div class="spagination">
            <a href="javascript:;" index="1" name="first"></a>
            <a href="javascript:;" index="2"></a>
            <a href="javascript:;" index="3"></a>
            <a href="javascript:;" index="4"></a>
            <a href="javascript:;" index="5"></a>
          </div>
          <a class="sbutton-prev"><i class="iconfont ileft">&#xe642;</i></a>
          <!--左箭头。如果放置在scontainer外面，需要自定义样式。-->
          <a class="sbutton-next"><i class="iconfont">&#xe633;</i></a>
        </div>
      </div>
    </div>
    <!-- 主页分类模块 -->
    <div class="categoryModule">
      <div class="container">
        <div
          class="category-title clearfix"
          v-for="it1 in listdata"
          :key="it1.id"
        >
          <a style="height: 36px" href="javascript:;">
            <h2>{{ it1.name }}</h2>
          </a>
        </div>
        <div class="category-content">
          <ul class="category-right">
            <li class="category_right_li" v-for="it2 in clist" :key="it2.id">
              <a href="">
                <div>{{ it2.brand }}</div>
                <div>{{ it2.name }}</div>
                <div>{{ it2.price }}</div>
                <div><img src="../../static/img/兰蔻.jpg" alt="" /></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="toolbar" id="toolbar">
      <a href="" class="items" id="items1">
        <div class="icon"><i class="iconfont">&#xe632;</i></div>
        <span class="text">手机APP</span>
        <div class="popcontent">
          <img src="../../static/img/phone2wm.png" alt="" />
          <span class="desc">扫码领取新人百元礼包</span>
        </div>
      </a>
      <a href="" class="items">
        <div class="icon"><i class="iconfont">&#xe63a;</i></div>
        <span class="text">个人中心</span>
      </a>
      <a href="" class="items">
        <div class="icon"><i class="iconfont">&#xe629;</i></div>
        <span class="text">售后服务</span>
      </a>
      <a href="" class="items">
        <div class="icon"><i class="iconfont">&#xe88d;</i></div>
        <span class="text">人工客服</span>
      </a>
      <a href="" class="items">
        <div class="icon"><i class="iconfont">&#xe607;</i></div>
        <span class="text">购物车</span>
      </a>
      <a href="" class="items">
        <div class="icon"><i class="iconfont">&#xe65b;</i></div>
        <span class="text">回顶部</span>
      </a>
    </div>
    <Footer />
  </div>
</template>
<script>
import { lunbo } from '../../static/js/firstpagelunbo'
import { getCategory, getProductByCidlimit } from '../api/category'
import { getProductByCid } from '../api/product'
export default {
  data() {
    return {
      listdata: [],
      productlist: [],
      clist: []
    }
  },
  components: {
    Header: () => import('./headandfoot/Header'),
    Footer: () => import('./headandfoot/Footer')
  },
  mounted() {
    lunbo()
  },
  created: function () {
    this.getCg()
    this.getPC()
    this.getProductByCidlimit()
  },
  methods: {
    getCg() {
      getCategory().then((res) => {
        if (res.status == 200) {
          this.listdata = res.data
        }
        else {
          Toast("加载失败");
        }
      })
    },
    getPC() {
      for (var i = 2; i < 11; i++) {
        getProductByCid(i).then((res) => {
          if (res.status == 200) {
            this.productlist.push(res.data)
          }
          else {
            Toast("加载失败");
          }
        })
      }
    },
    getProductByCidlimit() {
      for (var i = 2; i < 11; i++)
        getProductByCidlimit(i).then((res) => {
          if (res.status == 200) {
            this.clist.push(res.data)  //首页商品分类推荐
          }
          console.log(res.data)
        })
    }

  }
}
</script>
<style>
</style>