<template>
  <div class="productdetail">
    <Header :p="addtocart" />
    <div class="container">
      <div class="detail">
        <div class="detail-leftpic">
          <img src="../../../static/img/testImg/detail1.jpg" alt="商品图片" />
        </div>
        <div class="detail-rightinfo">
          <h2 class="dtitle">{{ productitems.name }}</h2>
          <hr />
          <div class="one-p">
            <span class="keys">促销价</span>
            <span class="pprice">{{ productitems.price }}</span>
          </div>
          <div class="one-o">
            <span class="keys">品牌</span>
            <s class="oprice">{{ productitems.brand }}</s>
          </div>
          <div class="two">
            <span class="keys">规格</span>
            <ul>
              <li @click="checknorms(item.id)">{{ norm.value }}</li>
            </ul>
          </div>
          <div class="three">
            <span class="keys"> 选择数量</span
            ><input type="text" placeholder="index" v-model="index" />
            <span class="row">
              <div class="number-up" @click="index > 8 ? (index = 9) : index++">
                <i class="iconfont up">&#xe642;</i>
              </div>

              <div
                class="number-down"
                @click="index < 1 ? (index = 0) : index--"
              >
                <i class="iconfont down">&#xe642;</i>
              </div>
            </span>
            <span
              >库存<strong>{{ productitems.stocknum }}</strong
              >件</span
            >
          </div>
          <div class="four">
            服务承诺 正品保证 极速退款 赠运费险 七天无理由退换
          </div>
          <div class="five">
            <input type="button" class="buysoon" value="立即购买" /><input
              type="submit"
              class="putincart"
              @click="addC()"
              value="加入购物车"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="productandcomment">
        <el-tabs v-model="activeName">
          <el-tab-pane label="产品详情" name="first">
            <template>
              <div class="detailpage">
                <div class="detailpage-fr">
                  <ul class="productitems">
                    <h3>产品参数</h3>
                    <li v-for="item in pnorms" :key="item.id">
                      <span class="keyname">{{ item.name }}:</span
                      ><span class="keyvalue">{{ item.value }}</span>
                    </li>
                  </ul>
                </div>
                <div class="detailpage-sr">
                  <img
                    src="../../../static/img/testImg/detail1.jpg"
                    alt="详情页图片"
                  />
                </div>
              </div> </template
          ></el-tab-pane>

          <el-tab-pane label="评论" name="second">
            <template>
              <div class="commentpage">
                <div class="commentitems">
                  <i class="iconfont">&#xe6cc;</i>
                  <span class="comment">真不错呀</span>
                  <div class="clearfix">
                    <span class="user">张三</span
                    ><span class="datetime">2010-10-10</span>
                  </div>
                </div>
              </div>
            </template>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductById, getPVByPidAndPtid, getPVByPId } from '../../api/product'
export default {
  data() {
    return {
      index: 1,
      isTrue: 'false',
      detailpage: '/detailpage',
      comment: '/comment',
      imgurl: '',
      pid: '',
      ptid: '',
      productitems: [],
      activeName: "first",
      pnorms: [],
      norm: {},
      add: false,
      addtocart: []
    }
  },

  created() {
    this.pid = this.$route.query.id
    this.ptid = this.$route.query.cid

    this.getProduct(this.pid)
    this.getProductNorms(this.pid)
    // console.log(this.pid)
    this.getPV(this.pid)
  },
  methods: {
    checknorms(id) {
      var e = e || window.event;
      var target = e.target || e.srcElement;
      let c = this.productitems.norms.find(function (item) {
        return item.id == id
      })
      if (c) {
        $('.two li').removeClass('active')
        $('.two li').eq(id - 1).addClass('active')
        $('.detail-leftpic img').attr('src', c.imgid)
      }
    },
    getProduct(id) {
      getProductById(id).then((res) => {
        this.productitems = res.data[0]
        // console.log(res.data)
      })
    },
    getProductNorms(pid) {
      getPVByPidAndPtid(pid).then((res) => {
        // console.log(res)
        this.norm = res.data[0]
      })
    },
    getPV(pid) {
      getPVByPId(pid).then((res) => {
        this.pnorms = res.data
        // console.log(res)
      })
    },
    // 加入购物车
    addC() {
      this.add = !this.add
      if (this.add) {
        this.addtocart = this.productitems
      }
    }
  },
  components: {
    Header: () => import('../headandfoot/Header')
  },
}
</script>
<style scoped>
.detail {
  position: relative;
  margin-top: 20px;
  height: 400px;
}

.detail-leftpic {
  position: absolute;
  width: 400px;
  height: 400px;
  float: left;
}

img {
  width: 100%;
  height: 100%;
}

.detail-rightinfo {
  position: absolute;
  width: calc(100% - 400px);
  height: 400px;
  float: left;
  left: 400px;
  font-size: 16px;
}

.dtitle {
  padding-bottom: 30px;
}

hr {
  border: 0px;
  border-bottom: 1px solid;
}

.one-p,
.one-o,
.two,
.three,
.four,
.five {
  margin-top: 20px;
  height: 30px;
  padding-left: 30px;
}

.two {
  margin-top: 0px;
}

.pprice {
  font-size: 30px;
  /* font-weight: 400; */
  font-weight: bold;
  color: rgb(194, 0, 0);
  letter-spacing: -2px;
}

.keys {
  display: inline-block;
  width: 100px;
}

.two ul {
  display: inline-block;
}

.two li {
  display: inline-block;
  margin-right: 10px;
  width: 40px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid black;
  /* float: left; */
}

.three input {
  width: 80px;
  height: 30px;
  text-indent: 14px;
}

.three .row {
  position: relative;
  display: inline-block;
  height: 30px;
  width: 18px;
  line-height: 20px;
}

.three .number-up,
.three .number-down {
  height: 15px;
  width: 19px;
  line-height: 15px;
  display: inline-block;
  border: 1px solid black;
  cursor: pointer;
  position: absolute;
  text-align: center;
}

.three .number-up {
  top: 7px;
  left: 0px;
}

.three .number-down {
  top: 27px;
  left: 0px;
}

.three .down {
  transform: rotate(270deg);
  display: block;
}

.three .up {
  transform: rotate(90deg);
  display: block;
}

.five {
  margin: 20px auto;
  width: 480px;
}

.buysoon,
.putincart {
  width: 200px;
  height: 50px;
  border: 1px solid grey;
  display: inline-block;
  font-size: medium;
}

.buysoon {
  background-color: rgb(255, 232, 229);
  color: rgb(194, 0, 0);
}

.putincart {
  background-color: rgb(194, 0, 0);
  margin-left: 80px;
  color: white;
}

.productandcomment {
  padding: 0 100px;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid rgb(194, 0, 0);
}

.el-menu--horizontal > .el-menu-item {
  font-size: 16px;
  font-weight: bold;
}
.active {
  background-color: red;
}

/* 评论的样式 */
.commentpage {
  padding: 20px 0px 0px 40px;
}

.commentitems {
  height: 70px;
  margin-top: 20px;
  border-bottom: 1px solid grey;
}

.comment {
  font-size: 14px;
}

.commentitems > .iconfont {
  margin-right: 50px;
  font-size: 30px;
}

.user {
  float: left;
  font-size: 16px;
}

.datetime {
  float: right;
  font-size: 14px;
}

/* 详情的样式 */
.detailpage-fr {
  height: 120px;
  padding: 20px 0px 0px 20px;
}

.productitems li {
  float: left;
  width: 33%;
  height: 40px;
  line-height: 40px;
  /* border: 1px solid red; */
  text-align: center;
}

.productitems li .keyname {
  margin-right: 20px;
}

.detailpage-sr {
  text-align: center;
}
</style>