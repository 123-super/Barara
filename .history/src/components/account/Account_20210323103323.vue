<template>
  <div class="container">
    <div class="submmit">
      <h2>提交订单</h2>
      <h4>输入收货地址</h4>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="详细地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="收货人姓名" label-width="100px">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="收货人手机号">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="商家留言">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <div>
          <el-table :data="selectgoods" border style="width: 100%">
            <el-table-column fixed prop="name" label="宝贝" width="264">
            </el-table-column>
            <el-table-column prop="price" label="单价" width="240">
            </el-table-column>
            <el-table-column prop="count" label="数量" width="240">
            </el-table-column>
            <el-table-column prop="city" label="实付款" width="240">
              <template v-slot="scope"
                ><span>{{ scope.row.price * scope.row.count }}</span></template
              >
            </el-table-column>
            <el-table-column label="配送方式" width="240">
              <template>
                <el-button type="text" size="small">免运费</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="jiesuan">
            <div class="jiesuan_left"></div>
            <div class="jiesuan_right">
              <span>总计:</span>
              <span class="jiesuan_price">{{ totalPrice }}元</span
              ><span>数量:{{ totalNumber }}件</span>
            </div>
          </div>
        </div>
        <el-form-item>
          <el-button type="primary" @click="account">结算</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { addOrder } from "../../api/order"
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
    }
  },
  computed: {
    ...mapState(['selectgoods', 'totalPrice', 'totalNumber'])
  },
  methods: {

    account() {
      //首先把order和orderitem的数据提交到数据库
      let status = "待支付"
      let uid = 1
      let createDate = new Date()
      let goods = this.selectgoods[0]
      let pid = goods.id
      let number = goods.count
      console.log(createDate)
      console.log(this.selectgoods)
      let { uid, status, createDate, orderNum, address, postNum, receiverName, tel } = {
        status, uid, ...this.form]
        let { pid, oid, uid, number } = { pid, oid, uid, number }
      addOrder()
      //修改selectgoods的值供我的订单页面使用
      //还要添加status设置为待支付
    }
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