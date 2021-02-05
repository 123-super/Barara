
<template>
  <div class="container">
    <div class="myorder">
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
    <div class="submmit">
      <h4>提交订单</h4>
      <h4>输入收货地址</h4>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="详细地址">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码">
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
        <el-form-item label="商家留言">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <h4>确认订单信息</h4>
        <div class="submmitcontent">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="120">
            </el-table-column>
            <el-table-column prop="city" label="市区" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120">
            </el-table-column>
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  @click="handleClick(scope.row)"
                  size="small"
                  >查看</el-button
                >
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
            <el-input
              :placeholder="number"
              v-model="number"
              :value="number"
              class="input-with-select"
              type="text"
            >
              <el-button slot="prepend" @click="number--">-</el-button>
              <el-button slot="append" @click.native="number++">+</el-button>
            </el-input>
          </el-table>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
  }
} </script>