
<template>
  <div class="container-fluid">
    <div class="myorder" style="height: 400px">
      <h4>我的订单</h4>
      <template>
        <el-tabs value="first">
          <el-tab-pane label="所有订单" name="first">
            <div class="row1">
              <div class="col-lg-8">宝贝</div>
              <div class="col-lg-1">单价</div>
              <div class="col-lg-1">数量</div>
              <div class="col-lg-1">实付款</div>
              <div class="col-lg-1">交易操作</div>
            </div>
            <div class="order">
              <div>
                <div class="col-lg-11">
                  <span>{{ item.createDate }}</span
                  ><span>{{ item.orderNum }}</span>
                </div>
                <div class="col-lg-1">删除</div>
              </div>
              <div>
                <div class="col-lg-2">
                  <img src="" alt="商品图片" class="" />
                </div>
                <div class="title col-lg-6">{{ item.name }}</div>
                <div class="price col-lg-1">{{ item.price }}</div>
                <div class="number col-lg-1">{{ item.number }}</div>
                <div class="totalPrice col-lg-1">{{ totalPrice }}</div>
                <div class="status col-lg-1">{{ item.status }}</div>
              </div>
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
import '../../../static/css/damu.css'
import { getMyOrder } from "../../api/order"
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      multipleSelection: [],
      item: [],
    }
  },
  methods: {
    //   我的订单页面所有订单
    getMyOrders() {
      getMyOrder().then((res) => {
        if (res.status == 200) {
          this.item = res.data
        }
        console.log(res)
      })
    }
  },
  computed: {
    ...mapState(['shopcart', 'totalPrice', 'totalNumber'])
  },
  created() {
    this.tableData = this.$store.state.shopcart
    this.getMyOrders()
  }
} 
</script>