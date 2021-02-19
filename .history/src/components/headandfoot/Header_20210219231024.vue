<template>
  <div class="head">
    <div class="clearfix topbar">
      <div class="container">
        <div class="topbar-nav">
          <a href="" style="color: rgb(212, 40, 38)">欢迎来到巴拉啦官网</a
          ><span>|</span> <a href="">我的订单</a><span>|</span>
          <el-popover placement="right-end" trigger="click">
            <el-table
              :data="p"
              style="width: 1095px"
              @selection-change="handleSelectionChange"
              ref="multipleTable"
            >
              <el-table-column type="selection" label="全选" width="55">
              </el-table-column>
              <el-table-column label="商品图片" width="120">
                <template>
                  <img
                    src="../../../static/img/testImg/amani.jpg"
                    style="width: 50px; height: 50px"
                  />
                </template>
              </el-table-column>
              <el-table-column prop="name" label="商品信息" width="140">
              </el-table-column>
              <el-table-column prop="price" label="单价" width="120">
              </el-table-column>
              <el-table-column label="数量" width="240">
                <template>
                  <el-input-number
                    v-model="number"
                    :min="1"
                    :max="10"
                    label="描述文字"
                  ></el-input-number>
                </template>
              </el-table-column>
              <el-table-column label="金额" width="120">
                <template slot-scope="scope">
                  <span>{{ scope.row.price*}}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    @click="handleClick(scope.row)"
                    size="small"
                    >刪除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>

            <a href="javascript:;" slot="reference"
              ><i class="iconfont">&#xe607;</i>购物车<span>(0)</span></a
            >
            <div class="jiesuan">
              <div class="jiesuan_left"></div>
              <div class="jiesuan_right">
                <span>总计:</span>
                <span class="jiesuan_price">{{ getTotalPrice }}元</span
                ><span>数量:{{ getTotalNumber }}件</span>
                <el-button
                  style="background-color: rgb(180, 2, 28); color: white"
                  >去结算</el-button
                >
              </div>
            </div>
          </el-popover>
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
          <input typr="button" class="search-btn iconfont" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 1,
      multipleSelection: [],
      number: 1,
      tableData: [{
        name: '阿玛尼唇釉',
        price: 150,
        src: '../../../static/img/testImg/amani.jpg',
        number: 1
      },
      {
        name: 'memei口红',
        price: 100,
        src: '../../../static/img/testImg/amani.jpg',
        number: 1
      }]
    }
  },


  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    allchecked(rows) {
      console.log(rows)
      rows.forEach((item) => {
        this.$refs.multipleTable.toggleRowSelection(item)
      })
    },
    register() {
      this.$router.push({
        path: "/register",
      });
    },
  },
  props: ["p"],
  computed: {
    getTotalPrice() {
      var totalprice = 0
      this.multipleSelection.forEach((item) => {
        console.log(item)
        return totalprice = totalprice + item.number * item.price
      })
      return totalprice
    },
    getTotalNumber() {
      var totalnumber = 0
      this.multipleSelection.forEach((item) => {
        return totalnumber += item.number
      })
      return totalnumber
    }
  },
  created() {
    console.log("++++++++++")
    console.log(this.addtocart)
  }
}

</script>
<style>
.jiesuan {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
.jiesuan_left {
  float: left;
  width: 60%;
  height: 50px;
}
.jiesuan_right {
  float: left;
  width: 40%;
}
.jiesuan_right span {
  margin-right: 10px;
}
.jiesuan_price {
  color: rgb(180, 2, 28);
}
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
  border: 1px solid black;
  box-sizing: border-box;
  outline: 0;
  line-height: 50px;
  text-align: center;
}

.header-search .search-form .iconfont {
  font-size: 24px;
  font-weight: 500;
}

.header-search .search-form .search-btn:hover {
  color: white;
  background-color: rgb(180, 2, 28);
}
</style>