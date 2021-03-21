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
            <el-button type="text" @click="handleClick(scope.row)" size="small"
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
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
  },
}
</script>