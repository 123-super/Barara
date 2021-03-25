
<template>
  <div class="container">
    <div class="myorder" style="height: 400px">
      <h4>我的订单</h4>
      <template>
        <el-tabs value="first">
          <el-tab-pane label="所有订单" name="first">
            <div class="orderTitle">
              <div class="col-lg-7">宝贝</div>
              <div class="col-lg-1">单价</div>
              <div class="col-lg-1">数量</div>
              <div class="col-lg-2">实付款</div>
              <div class="col-lg-1">交易操作</div>
            </div>
            <div class="order" v-for="item in allOrders" :key="item.id">
              <div class="orderHeader">
                <div class="col-lg-11">
                  <span>{{ item.createDate }}</span> <span>订单号：</span
                  ><span>{{ item.orderNum }}</span>
                </div>
                <div class="col-lg-1">
                  <i class="el-icon-delete del" @click="delOrder(item.id)"></i>
                </div>
              </div>
              <div class="orderContent">
                <div class="col-lg-2">
                  <img src="" alt="商品图片" class="" />
                </div>
                <div class="title col-lg-5">{{ item.name }}</div>
                <div class="price col-lg-1">￥{{ item.price }}</div>
                <div class="number col-lg-1">{{ item.number }}</div>
                <div class="col-lg-2">
                  <div class="totalPrice">￥{{ item.price * item.number }}</div>
                  <span>含运费（0.00）元</span>
                </div>
                <div class="status col-lg-1">
                  <el-button type="primary" @click="toPay(item.id)"
                    >{{ item.status }}
                  </el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待付款" name="second"
            >待付款
            <div class="orderTitle">
              <div class="col-lg-7">宝贝</div>
              <div class="col-lg-1">单价</div>
              <div class="col-lg-1">数量</div>
              <div class="col-lg-2">实付款</div>
              <div class="col-lg-1">交易操作</div>
            </div>
            <div class="order" v-for="item in allOrders" :key="item.id">
              <div class="orderHeader">
                <div class="col-lg-11">
                  <span>{{ item.createDate }}</span> <span>订单号：</span
                  ><span>{{ item.orderNum }}</span>
                </div>
                <div class="col-lg-1"><i class="el-icon-delete del"></i></div>
              </div>
              <div class="orderContent">
                <div class="col-lg-2">
                  <img src="" alt="商品图片" class="" />
                </div>
                <div class="title col-lg-5">{{ item.name }}</div>
                <div class="price col-lg-1">￥{{ item.price }}</div>
                <div class="number col-lg-1">{{ item.number }}</div>
                <div class="col-lg-2">
                  <div class="totalPrice">￥{{ item.price * item.number }}</div>
                  <span>含运费（0.00）元</span>
                </div>
                <div class="status col-lg-1">
                  <el-button type="primary">{{ item.status }} </el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待发货" name="third"
            >待发货
            <div class="orderTitle">
              <div class="col-lg-7">宝贝</div>
              <div class="col-lg-1">单价</div>
              <div class="col-lg-1">数量</div>
              <div class="col-lg-2">实付款</div>
              <div class="col-lg-1">交易操作</div>
            </div>
            <div class="order" v-for="item in allOrders" :key="item.id">
              <div class="orderHeader">
                <div class="col-lg-11">
                  <span>{{ item.createDate }}</span> <span>订单号：</span
                  ><span>{{ item.orderNum }}</span>
                </div>
                <div class="col-lg-1"><i class="el-icon-delete del"></i></div>
              </div>
              <div class="orderContent">
                <div class="col-lg-2">
                  <img src="" alt="商品图片" class="" />
                </div>
                <div class="title col-lg-5">{{ item.name }}</div>
                <div class="price col-lg-1">￥{{ item.price }}</div>
                <div class="number col-lg-1">{{ item.number }}</div>
                <div class="col-lg-2">
                  <div class="totalPrice">￥{{ item.price * item.number }}</div>
                  <span>含运费（0.00）元</span>
                </div>
                <div class="status col-lg-1">
                  <el-button type="primary">{{ item.status }} </el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待收货" name="fourth"
            >待收货
            <div class="orderTitle">
              <div class="col-lg-7">宝贝</div>
              <div class="col-lg-1">单价</div>
              <div class="col-lg-1">数量</div>
              <div class="col-lg-2">实付款</div>
              <div class="col-lg-1">交易操作</div>
            </div>
            <div class="order" v-for="item in allOrders" :key="item.id">
              <div class="orderHeader">
                <div class="col-lg-11">
                  <span>{{ item.createDate }}</span> <span>订单号：</span
                  ><span>{{ item.orderNum }}</span>
                </div>
                <div class="col-lg-1"><i class="el-icon-delete del"></i></div>
              </div>
              <div class="orderContent">
                <div class="col-lg-2">
                  <img src="" alt="商品图片" class="" />
                </div>
                <div class="title col-lg-5">{{ item.name }}</div>
                <div class="price col-lg-1">￥{{ item.price }}</div>
                <div class="number col-lg-1">{{ item.number }}</div>
                <div class="col-lg-2">
                  <div class="totalPrice">￥{{ item.price * item.number }}</div>
                  <span>含运费（0.00）元</span>
                </div>
                <div class="status col-lg-1">
                  <el-button type="primary">{{ item.status }} </el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待评价" name="fifth">待评价</el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>
<script>
import '../../../static/css/damu.css'
import { delCurrentOrder, getMyOrder, getOrderUnPay } from "../../api/order"
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      allOrders: [],
      unPayOrders: []
    }
  },
  methods: {
    //   我的订单页面所有订单
    getMyOrders() {
      getMyOrder().then((res) => {
        if (res.status == 200) {
          this.allOrders = res.data
        }
      })
    },
    //删除当前订单
    delOrder(id) {
      delCurrentOrder(id).then((res) => {
        if (res.status == 200) {
          this.$message.success('删除当前订单成功!')
          this.getMyOrders()
        }
      })
    },
    //代付款的订单
    getOrderUnPay() {
      getOrderUnPay().then((res) => {
        if (res.status == 200) {
          this.unPayOrders = res.data
        }
      })
    }
    //待支付
  },
  computed: {
    ...mapState(['shopcart', 'totalPrice', 'totalNumber'])

  },
  created() {
    this.getMyOrders()
  }
} 
</script>
<style scoped>
/* 我的订单 */
* {
  box-sizing: border-box;
}
.el-tabs__item {
  width: 100px !important;
  font-size: 18px;
  font-weight: bold;
}
.orderTitle {
  border: 1px solid #e8e8e8;
  width: 100%;
  margin: 20px 0px;
  background-color: #f5f5f5;
  text-align: center;
  height: 41px;
  line-height: 41px;
  font-size: 16px;
}
.order {
  border: 2px solid #ececec;
  margin: 20px 0px;
}
.orderHeader {
  background-color: #f1f1f1;
  font-size: 14px;
  font-weight: bold;
  height: 41px;
  line-height: 41px;
}
.orderContent {
  height: 96px;
  padding: 20px;
  text-align: center;
}
.price,
.totalPrice {
  font-weight: bold;
  font-size: 16px;
}
.del {
  font-size: 20px;
}
</style>