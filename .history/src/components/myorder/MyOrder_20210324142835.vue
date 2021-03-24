
<template>
  <div class="container">
    <div class="myorder" style="height: 400px">
      <h4>我的订单</h4>
      <template>
        <el-tabs value="first">
          <el-tab-pane label="所有订单" name="first">
            <div class="row1">
              <div class="col-md-8">宝贝</div>
              <div class="col-md-1">单价</div>
              <div class="col-md-1">数量</div>
              <div class="col-md-1">实付款</div>
              <div class="col-md-1">交易操作</div>
            </div>
            <div class="order">
              <div>
                <div>
                  <div class="col-md-11">
                    <span>日期</span><span>订单号</span>
                  </div>
                  <div class="col-md-1">删除</div>
                </div>
                <div>
                  <div class="col-md-2">
                    <img src="" alt="商品图片" class="" />
                  </div>
                  <div class="title col-md-6">标题</div>
                  <div class="price col-md-1">price</div>
                  <div class="number col-md-1">number</div>
                  <div class="totalPrice col-md-1">totalPrice</div>
                  <div class="status col-md-1">status</div>
                </div>
              </div>
              <div></div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待付款" name="second">待付款</el-tab-pane>
          <el-tab-pane label="待发货" name="third">待发货</el-tab-pane>
          <el-tab-pane label="待收货" name="fourth">待收货</el-tab-pane>
          <el-tab-pane label="待评价" name="fifth">待评价</el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>
<style scoped>
/* 我的订单 */
.el-tabs__item {
  width: 100px !important;
  font-size: 18px;
  font-weight: bold;
}
</style>
<script>
import '../../../static/css/bootstrap.css'
import { getMyOrder } from "../../api/order"
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      multipleSelection: [],

    }
  },
  methods: {
    //   我的订单页面所有订单
    getMyOrders() {
      getMyOrder().then(() => {
        console.log(res)
      })
    }
  },
  computed: {
    ...mapState(['shopcart', 'totalPrice', 'totalNumber'])
  },
  created() {
    this.tableData = this.$store.state.shopcart
    getMyOrders()
  }
} 
</script>