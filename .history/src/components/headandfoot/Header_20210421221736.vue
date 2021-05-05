<template>
  <div class="head">
    <div class="clearfix topbar">
      <div class="container">
        <div class="topbar-nav">
          <a href="" style="color: rgb(212, 40, 38)" @click="toHome"
            >欢迎来到巴拉啦官网</a
          ><span>|</span> <a href="javascript:;" @click="toMyOrder">我的订单</a
          ><span>|</span>
          <a href="javascript:;" slot="reference" @click="toShopCart"
            ><i class="iconfont">&#xe607;</i>购物车<span style="color: white">{{
              $store.state.shopcart.length
            }}</span
            >件</a
          >
          <span>|</span>
        </div>
        <div class="topbar-info">
          <a href="" style="color: rgb(212, 40, 38)">请登录</a><span>|</span>
          <a href="javascript:;" @click="register()">免费注册</a><span>|</span>
          <a href="">消息通知</a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header-log">
        <!-- Barara -->
      </div>
      <a href="" class="navfirsttitle">Welcome To Barara</a>
      <div class="header-search">
        <form class="search-form">
          <input type="text" class="search-text" />
          <span class="search-btn el-icon-search"></span>
        </form>
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
  created() {
    this.userState()
  },
  methods: {
    //用户登录状态
    userState() {
      userState = this.$store.state.user ? (你好 + this.$store.state.user) : 请登录
    },
    toShopCart() {
      this.$router.push("/shopcart")
    },
    register() {
      this.$router.push({
        path: "/register",
      });
    },
    // 返回首页
    toHome() {
      this.$router.push({
        path: "/home",
      })
    },
    // 进入我的订单
    toMyOrder() {
      this.$router.push({
        path: "/myorder",
      })
    }
  },
}
</script>
<style>
.container {
  margin: 0 auto;
  width: 1226px;
  position: relative;
  /* border: 1px solid black; */
}
.topbar {
  background-color: #333333;
  /* border: 1px solid black; */
}
.topbar a {
  color: #b0b0b0;
}

.topbar a:hover {
  color: white;
}

.topbar-nav {
  float: left;
  font-size: 0;
  height: 40px;
  line-height: 40px;
}

/* .topbar-nav a {
  font-size: 12px;
} */

.topbar-nav span,
.topbar-info span {
  font-size: 12px;
  margin: 0.5em;
  color: #333333;
}

.topbar-cart,
.topbar-info {
  float: right;
  font-size: 0;
  line-height: 40px;
  height: 40px;
  /* 因为<span>|</span>后边是回车所以会在页面显示多余的空格，所以此处字体大小要设置为0 */
}

.topbar-info a,
.topbar-cart a,
.topbar-nav a,
.topbar-cart .iconfont {
  font-size: 14px;
}

.topbar-info a {
  float: left;
}

.topbar-info span {
  float: left;
}

.topbar-cart a {
  text-align: center;
  width: 120px;
  display: block;
  margin-left: 15px;
}

.topbar-cart a:hover {
  background-color: white;
  color: rgb(212, 40, 38);
}
.header-log {
  width: 62px;
  /* border:1px solid black; */
  float: left;
  margin-top: 22px;
  height: 55px;
}
.logo .iconfont {
  font-size: 35px;
  color: white;
}
.navfirsttitle {
  font-size: 30px;
  font-weight: 400;
  font-family: fantasy;
  display: inline-block;
  color: #333;
  /* padding: 28px 0 0 0; */
  text-align: right;
  letter-spacing: 3px;
  margin: 28px 0px 10px 0px;
}

.header-search {
  width: 296px;
  height: 50px;
  float: right;
  margin: 25px 0px 10px 0px;
}

.header-search .search-form {
  position: relative;
  width: 296px;
  height: 50px;
}

.header-search .search-form .search-text {
  display: block;
  position: absolute;
  width: 400px;
  height: 50px;
  top: 0px;
  right: 51px;
  border: 1px solid black;
  box-sizing: border-box;
  outline: 0;
  text-indent: 10px;
}

.header-search .search-form .search-btn {
  display: block;
  position: absolute;
  width: 52px;
  height: 50px;
  top: 0px;
  right: 0px;
  box-sizing: border-box;
  outline: 0;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
}
.search-btn {
  border: 1px solid black;
  border-left: 0px solid transparent;
}

.header-search .search-form .search-btn:hover {
  color: white;
  background-color: rgb(180, 2, 28);
}
</style>