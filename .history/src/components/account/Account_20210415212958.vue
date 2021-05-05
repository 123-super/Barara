<template>
  <div>
    <Header />
    <div class="container">
      <div class="submmit">
        <h4 class="receiveGoodTitle">输入收货地址</h4>
        <el-form ref="form" :model="form" label-width="200px">
          <el-form-item label="详细地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码">
            <el-input v-model="form.postNum"></el-input>
          </el-form-item>
          <el-form-item label="收货人姓名">
            <el-input v-model="form.receiverName"></el-input>
          </el-form-item>
          <el-form-item label="收货人手机号">
            <el-input v-model="form.tel"></el-input>
          </el-form-item>
          <div>
            <el-table :data="good" border style="width: 100%">
              <el-table-column fixed prop="name" label="宝贝" width="264">
              </el-table-column>
              <el-table-column prop="price" label="单价" width="240">
              </el-table-column>
              <el-table-column prop="count" label="数量" width="240">
              </el-table-column>
              <el-table-column prop="city" label="实付款" width="240">
                <template v-slot="scope"
                  ><span>{{
                    scope.row.price * scope.row.count
                  }}</span></template
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
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { addOrder, addOrderItem, getOrderId } from "../../api/order"
export default {
  data() {
    return {
      form: {
        address: '',
        postNum: '',
        receiverName: '',
        tel: '',
      },
      orid: '',
      good: [],
    }
  },
  components: {
    Header: () => import('../headandfoot/Header')
  },
  computed: {
    ...mapState(['selectgoods', 'totalPrice', 'totalNumber'])
  },
  watch() {
    this.test()
  },
  methods: {
    test() {
      this.good = [...this.$route.query.goods] || [...this.selectgoods[0]]
      // ? [...this.$route.query.goods] : this.selectgoods
      console.log(this.$route.query.goods)
      console.log(this.good)
    },
    account() {
      //首先把order和orderitem的数据提交到数据库
      let status = "待支付"
      let uid = 1
      let createDate = new Date()
      let orderNum = +new Date()
      //判断是加入购物车结算跳转而来还是直接购买
      //   let good = !this.selectgoods[0] ? this.$route.query.goods : this.selectgoods[0]
      //   console.log(this.selectgoods[0])
      let pid = this.good.id
      let number = this.good.count
      //   console.log(createDate)
      //   console.log(this.selectgoods)
      //   let { uid, status, createDate, orderNum, address, postNum, receiverName, tel } = {
      //     uid, status, createDate, orderNum, ...this.form
      //   }
      addOrder({ orderNum, ...this.form, uid, status, createDate, pid, number }).then((res) => {
        if (res.status == 200) {
          //   getOrderId(orderNum).then((res) => {
          //     this.orid = res.obj.id

          //   })

        }
      })
      //   addOrderItem({}).then((res) => {
      //     if (res.status == 200) {
      //       this.$router.push({
      //         path: "/pay",
      //         query: {
      //           oid: this.orid,
      //         }
      //       })
      //     }
      //   })
      //需要跳转到pay页面，得从数据库获取order的id然后通过路由跳转传到pay页面
      //用这个传递的id来修改status

    }
  }
}
</script>
<style>
.receiveGoodTitle {
  margin: 30px 130px;
  font-size: 20px;
  font-weight: 500;
}
.el-input__inner {
  width: 50%;
}
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