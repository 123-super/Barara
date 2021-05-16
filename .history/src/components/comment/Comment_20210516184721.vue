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
            <span class="oprice">{{ productitems[0].brand }}</span>
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
      <div class="tocomment" style="margin-top: 50px">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="评价">
            <el-input
              type="textarea"
              placeholder="其他买家需要您的评价哦"
              v-model="form.desc"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交评价</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
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
      uid: "",
      productitems: [],
      form: {
        desc: ""
      }
    }
  },
  components: {
    Header: () => import('../headandfoot/Header')
  },
  created() {
    this.pid = this.$route.query.pid
    this.uid = this.$route.query.uid
    // console.log("+++++++++++++++______")
    // console.log(this.uid)
    this.getProductById()
  },
  methods: {
    getProductById() {
      getProductById(this.pid).then((res) => {
        this.productitems = res.data.data
      })
    },
    addComment() {
      let createDate = new Date()
      addComments({ pid: this.pid, uid: this.uid, createDate }).then(res => {
        if (res.data.status == 200) {

        }
      })
    }
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
.three,
.four,
.five {
  margin-top: 20px;
  height: 30px;
  padding-left: 30px;
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
</style>