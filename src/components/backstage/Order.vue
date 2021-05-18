<template>
  <div>
    <div class="container">
      <el-form :inline="true">
        <el-form-item label="订单管理" class="label">
          <el-input v-model="orderName" placeholder="请输入订单名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
        <el-button type="success">添加</el-button>
      </el-form>
      <el-table :data="tableData2" border style="width: 100%">
        <el-table-column prop="name" label="商品名" width="180" />
        <el-table-column prop="orderNum" label="订单编号" width="180" />
        <el-table-column prop="createDate" label="生成日期" width="180" />
        <el-table-column prop="price" label="价格" width="180" />
        <el-table-column prop="status" label="状态" width="180" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="fillupdateorder(scope.row.id)"
              type="text"
              size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 修改订单 -->
    <el-dialog title="修改订单" :visible.sync="dialogFormVisible5">
      <el-form :model="form5">
        <el-form-item label="收货人" :label-width="formLabelWidth">
          <el-input v-model="form5.orderNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收货人电话" :label-width="formLabelWidth">
          <el-input v-model="form5.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-input v-model="form5.status" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible4 = false">取 消</el-button>
        <el-button type="primary" @click="updOById(form5)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getMyOrder } from "../../api/order";

export default {
  name: "Order",
  data() {
    return {
      orderName: "",
      tableData2: [],
      formLabelWidth: "220px",
      dialogFormVisible5: false,
      form5: {}
    };
  },
  created() {
    this.getMyOrders()
  },
  methods: {
    getMyOrders() {
      getMyOrder().then(res => {
        if (res.status == 200) {
          this.tableData2 = res.data.data;
        }
      });
    },
    updOById(param) {
      updOrderById(param).then(res => {
        if (res.status == 200) {
          this.dialogFormVisible5 = false;
          this.getMyOrders();
          this.$message.success("修改订单成功!");
        }
      });
    },
    fillupdateorder(id) {
      this.dialogFormVisible5 = true;
      this.form5 = {
        ...this.tableData2.filter(item => {
          return item.id == id;
        })
      }[0];
      console.log(this.form5);
    }
  }
};
</script>
