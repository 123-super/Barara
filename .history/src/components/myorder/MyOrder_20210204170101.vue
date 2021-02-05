
<template>
  <div class="container">
    <div class="myorder" style="height: 200px">
      <h4>我的订单</h4>
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">所有订单</el-menu-item>
        <el-menu-item index="3">待付款</el-menu-item>
        <el-menu-item index="4">待发货</el-menu-item>
        <el-menu-item index="4">待收货</el-menu-item>
        <el-menu-item index="4">待评价</el-menu-item>
      </el-menu>
    </div>
    <div class="submmit" style="height: 600px; width: 600px">
      <h2>提交订单</h2>
      <h4>输入收货地址</h4>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="详细地址" label-width="80px">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码" label-width="80px">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="提交日期时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="配送方式">
          <el-radio-group v-model="form.resource">
            <el-radio label="普通配送"></el-radio>
            <el-radio label="即时配送"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="收货人姓名" label-width="180px">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="收货人手机号">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <h2>确认订单信息</h2>
        <div class="submmitcontent" style="width: 1220px">
          <el-table
            :data="tableData"
            style="width: 1220px"
            @selection-change="handleSelectionChange"
            ref="multipleTable"
          >
            <el-table-column label="商品图片" width="200">
              <template slot-scope="scope">
                <img :src="scope.row.src" style="width: 50px; height: 50px" />
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
            <el-table-column label="金额" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.price * scope.row.number }}</span>
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
        </div>
        <el-form-item label="商家留言">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交订单</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      multipleSelection: [],
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
      }],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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
    }
  },
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
  }
} </script>