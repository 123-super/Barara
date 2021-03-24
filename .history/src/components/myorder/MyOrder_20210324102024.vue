
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
                  <div class="col-md-10">
                    <span>日期</span><span>订单号</span>
                  </div>
                  <div class="col-md-2">删除</div>
                </div>
                <div>
                  <div class="col-md-2">
                    <img src="" alt="商品图片" class="" />
                  </div>
                  <div class="title col-md-4"></div>
                  <div class="price col-md-1"></div>
                  <div class="number col-md-1"></div>
                  <div class="totalPrice col-md-1"></div>
                  <div class="status col-md-1"></div>
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

    <!-- <div style="width: 1224px; margin: 20px auto">
      <h2>确认订单信息</h2>
      <div class="submmitcontent">
        <el-table
          :data="tableData"
          style="width: 1220px"
          @selection-change="handleSelectionChange"
          ref="multipleTable"
        >
          <el-table-column label="商品图片" width="200">
            <template>
              <img
                src="../../../static/img/兰蔻.jpg"
                style="width: 50px; height: 50px"
              />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="商品信息" width="200">
          </el-table-column>

          <el-table-column label="数量" width="240">
            <template v-slot="scope">
              <el-input-number
                v-model="scope.row.number"
                :min="1"
                :max="10"
                label="描述文字"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="金额" width="220">
            <template slot-scope="scope">
              <span>{{ scope.row.price * scope.row.number }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button type="text" size="small">刪除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="danger">提交订单</el-button>
      </div>
    </div> -->
  </div>
</template>
<style>
/* 我的订单 */
.el-tabs__item {
  width: 100px !important;
  font-size: 18px;
  font-weight: bold;
}
</style>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      multipleSelection: [],

    }
  },
  methods: {
    //   我的订单页面所有订单
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 2) {
          return [2, 1]
        } else if (columnIndex === 3) { return [2, 1] }
        else if (columnIndex === 4) { return [2, 1] }
      }

    },
  },
  computed: {
    ...mapState(['shopcart', 'totalPrice', 'totalNumber'])
  },
  created() {
    this.tableData = this.$store.state.shopcart
  }
} 
</script>