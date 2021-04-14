
<template>
  <div>
    <Header />
    <div class="container">
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
            <div class="order" v-for="item1 in unPayOrders" :key="item1.id">
              <div class="orderHeader">
                <div class="col-lg-11">
                  <span>{{ item1.createDate }}</span> <span>订单号：</span
                  ><span>{{ item1.orderNum }}</span>
                </div>
                <div class="col-lg-1"><i class="el-icon-delete del"></i></div>
              </div>
              <div class="orderContent">
                <div class="col-lg-2">
                  <img src="" alt="商品图片" class="" />
                </div>
                <div class="title col-lg-5">{{ item1.name }}</div>
                <div class="price col-lg-1">￥{{ item1.price }}</div>
                <div class="number col-lg-1">{{ item1.number }}</div>
                <div class="col-lg-2">
                  <div class="totalPrice">
                    ￥{{ item1.price * item1.number }}
                  </div>
                  <span>含运费（0.00）元</span>
                </div>
                <div class="status col-lg-1">
                  <el-button type="primary" @click="toPay(item1.id)"
                    >{{ item1.status }}
                  </el-button>
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
            <div class="order" v-for="item2 in unDeliverOrder" :key="item2.id">
              <div class="orderHeader">
                <div class="col-lg-11">
                  <span>{{ item2.createDate }}</span> <span>订单号：</span
                  ><span>{{ item2.orderNum }}</span>
                </div>
                <div class="col-lg-1"><i class="el-icon-delete del"></i></div>
              </div>
              <div class="orderContent">
                <div class="col-lg-2">
                  <img src="" alt="商品图片" class="" />
                </div>
                <div class="title col-lg-5">{{ item2.name }}</div>
                <div class="price col-lg-1">￥{{ item2.price }}</div>
                <div class="number col-lg-1">{{ item2.number }}</div>
                <div class="col-lg-2">
                  <div class="totalPrice">
                    ￥{{ item2.price * item2.number }}
                  </div>
                  <span>含运费（0.00）元</span>
                </div>
                <div class="status col-lg-1">
                  <div>待发货</div>
                  <el-button
                    type="primary"
                    @click="updLeftStatus(item2, '已通知卖家发货')"
                    >{{ item2.status }}
                  </el-button>
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
            <div class="order" v-for="item3 in unReceiveOrder" :key="item3.id">
              <div class="orderHeader">
                <div class="col-lg-11">
                  <span>{{ item3.createDate }}</span> <span>订单号：</span
                  ><span>{{ item3.orderNum }}</span>
                </div>
                <div class="col-lg-1"><i class="el-icon-delete del"></i></div>
              </div>
              <div class="orderContent">
                <div class="col-lg-2">
                  <img src="" alt="商品图片" class="" />
                </div>
                <div class="title col-lg-5">{{ item3.name }}</div>
                <div class="price col-lg-1">￥{{ item3.price }}</div>
                <div class="number col-lg-1">{{ item3.number }}</div>
                <div class="col-lg-2">
                  <div class="totalPrice">
                    ￥{{ item3.price * item3.number }}
                  </div>
                  <span>含运费（0.00）元</span>
                </div>
                <div class="status col-lg-1">
                  <el-button
                    type="primary"
                    @click="updLeftStatus(item3, '卖家已发货')"
                    >{{ item3.status }}
                  </el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待评价" name="fifth">
            待评价
            <div class="orderTitle">
              <div class="col-lg-7">宝贝</div>
              <div class="col-lg-1">单价</div>
              <div class="col-lg-1">数量</div>
              <div class="col-lg-2">实付款</div>
              <div class="col-lg-1">交易操作</div>
            </div>
            <div class="order" v-for="item4 in unCommentOrder" :key="item4.id">
              <div class="orderHeader">
                <div class="col-lg-11">
                  <span>{{ item4.createDate }}</span> <span>订单号：</span
                  ><span>{{ item4.orderNum }}</span>
                </div>
                <div class="col-lg-1"><i class="el-icon-delete del"></i></div>
              </div>
              <div class="orderContent">
                <div class="col-lg-2">
                  <img src="" alt="商品图片" class="" />
                </div>
                <div class="title col-lg-5">{{ item4.name }}</div>
                <div class="price col-lg-1">￥{{ item4.price }}</div>
                <div class="number col-lg-1">{{ item4.number }}</div>
                <div class="col-lg-2">
                  <div class="totalPrice">
                    ￥{{ item4.price * item4.number }}
                  </div>
                  <span>含运费（0.00）元</span>
                </div>
                <div class="status col-lg-1">
                  <el-button
                    type="primary"
                    @click="updLeftStatus(item4, '收货成功')"
                    >{{ item4.status }}
                  </el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>
<script>
import '../../../static/css/damu.css'
import { delCurrentOrder, getMyOrder, getOrderUnPay, getOrdersUnDeliver, updLeftStatus, getOrdersUnReceive, getOrdersUnComment } from "../../api/order"
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      allOrders: [],
      unPayOrders: [],
      unDeliverOrder: [],
      unReceiveOrder: [],
      unCommentOrder: []
    }
  },
  components: {
    Header: () => import('../headandfoot/Header')
  },
  methods: {
    //   我的订单页面所有订单
    getMyOrders() {
      getMyOrder().then((res) => {
        if (res.status == 200) {
          this.allOrders = res.obj
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
          this.unPayOrders = res.obj
        }
        console.log(res.obj)
      })
    },
    //待发货的所有订单
    getOrdersUnDeliver() {
      getOrdersUnDeliver().then((res) => {
        this.unDeliverOrder = res.obj
      })
    },
    //待收货的所有订单
    getOrdersUnReceive() {
      getOrdersUnReceive().then((res) => {
        this.unReceiveOrder = res.obj
      })
    },
    //待评价的所有订单
    getOrdersUnComment() {
      getOrdersUnComment().then((res) => {
        this.unCommentOrder = res.obj
      })
    },
    //跳转到pay页面
    toPay(temp) {
      console.log(temp)
      this.$router.push({
        path: "/pay",
        query: {
          oid: temp
        }
      })
    },
    //修改除了支付订单的订单状态
    updLeftStatus(item, tip) {
      if (item.status == "催卖家发货") {
        item.status = "待收货"
      } else if (item.status == "待收货") {
        item.status = "去评价"
      } else if (item.status == "去评价") {
        this.$router.push({
          path: '/comment',
          query: {
            pid: item.pid,
            uid: item.uid
          }
        })
        return
      }
      console.log(item)
      updLeftStatus(item).then((res) => {
        if (res.status == 200) {
          this.$message.success(tip)
          this.getOrdersUnDeliver()
          this.getOrdersUnReceive()
          this.getOrdersUnComment()
        }
      })
    },

  },
  computed: {
    ...mapState(['shopcart', 'totalPrice', 'totalNumber'])

  },
  created() {
    this.getMyOrders()
    this.getOrderUnPay()
    this.getOrdersUnDeliver()
    this.getOrdersUnReceive()
    this.getOrdersUnComment()
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