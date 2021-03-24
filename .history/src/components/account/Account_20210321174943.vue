<template>
  <div class="container">
    <div class="submmit">
      <h2>提交订单</h2>
      <h4>输入收货地址</h4>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="详细地址">
          <el-input v-model="form.name"></el-input>
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
        <el-form-item>
          <el-button type="primary">保存地址</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
        :data="shopcart"
        border
        style="width: 100%"
        :span-method="arraySpanMethod"
      >
        <el-table-column fixed prop="name" label="宝贝" width="264">
        </el-table-column>
        <el-table-column prop="price" label="单价" width="240">
        </el-table-column>
        <el-table-column prop="number" label="数量" width="240">
        </el-table-column>
        <el-table-column prop="city" label="实付款" width="240">
          <template v-slot="scope"
            ><span>{{ scope.row.price * scope.row.number }}</span></template
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
          <span class="jiesuan_price">{{ getTotalPrice }}元</span
          ><span>数量:{{ getTotalNumber }}件</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
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
      }
    }
  },
computed: {
    ...mapState(['shopcart', 'totalPrice', 'totalNumber'])
  },
}
</script>