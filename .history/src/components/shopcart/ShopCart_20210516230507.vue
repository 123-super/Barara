<template>
  <div class="shopcart">
    <Header />
    <div class="container">
      <el-table
        :data="shopcarts"
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
          <template slot-scope="scope">
            <el-input-number
              v-model="scope.row.count"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="金额" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.price * scope.row.count }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="deleteRow(scope.$index, shopcarts)"
              size="small"
              >刪除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <a href="javascript:;" slot="reference"
        ><i class="iconfont">&#xe607;</i>购物车<span style="color: white">{{
          shopcarts.length
        }}</span
        >件</a
      >
      <div class="jiesuan">
        <div class="jiesuan_left"></div>
        <div class="jiesuan_right">
          <span>总计:</span>
          <span class="jiesuan_price">{{ getTotalPrice }}元</span
          ><span>数量:{{ getTotalNumber }}件</span>
          <el-button
            style="background-color: rgb(180, 2, 28); color: white"
            @click="myOrder"
            >去结算</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopcarts: [],
      number: 1,
      multipleSelection: [],
    }
  },
  components: {
    Header: () => import('../headandfoot/Header')
  },
  methods: {
    deleteRow(index, rows) {
      let delgoods = { index, rows }
      this.$store.commit('deleteGoodList', delgoods)
      this.$message({
        message: '删除成功！',
        type: 'success'
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 进入结算页面
    myOrder() {
      this.$router.push({
        path: "/account",
      });
      let totalPrice = this.getTotalPrice
      let totalNumber = this.getTotalNumber
      let selectgoods = [];
      this.multipleSelection.forEach((item) => {
        selectgoods.push(item)
      })
      this.$store.commit('updateGoodList', selectgoods)
      this.$store.commit('updateNum', totalNumber)
      this.$store.commit('updatePri', totalPrice)

    }
  },

  computed: {
    getTotalPrice() {
      return this.multipleSelection.reduce((prev, good) => prev + good.count * good.price, 0)
    },
    getTotalNumber() {
      var totalnumber = 0
      this.multipleSelection.forEach((item) => {
        totalnumber += item.count
      })
      return totalnumber
    },
  },
  created() {
    this.shopcarts = this.$store.state.shopcart

    console.log(this.shopcarts)
    // console.log(this.shopcarts.price * this.shopcarts.count)
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
</style>