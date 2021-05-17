<template>
  <div class="back">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane
        label="Barara后台管理"
        class="backname"
        disabled
      ></el-tab-pane>
      <el-tab-pane label="用户管理" name="first">
        <div class="container">
          <el-form :inline="true">
            <el-form-item label="用户名称" class="label">
              <el-input
                v-model="userName"
                placeholder="请输入用户名称"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-button type="success" @click="dialogFormVisible3 = true"
              >添加</el-button
            >
          </el-form>
          <el-table :data="tableData1" border>
            <el-table-column prop="id" label="ID" width="180">
            </el-table-column>
            <el-table-column prop="username" label="用户名" width="180">
            </el-table-column>
            <el-table-column prop="password" label="密码" width="180">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="fillupdateuser(scope.row.id)"
                  type="text"
                  size="small"
                  >编辑</el-button
                >
                <el-button
                  type="text"
                  size="small"
                  @click="deleteU(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <!-- 增加用户 -->
      <el-dialog title="增加用户" :visible.sync="dialogFormVisible3">
        <el-form :model="form3">
          <el-form-item label="用户名称" :label-width="formLabelWidth">
            <el-input v-model="form3.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" :label-width="formLabelWidth">
            <el-input v-model="form3.password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible3 = false">取 消</el-button>
          <el-button type="primary" @click="addUser(form3)">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 修改用户 -->
      <el-dialog title="修改用户" :visible.sync="dialogFormVisible4">
        <el-form :model="form4">
          <el-form-item label="用户名称" :label-width="formLabelWidth">
            <el-input v-model="form4.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" :label-width="formLabelWidth">
            <el-input v-model="form4.password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible4 = false">取 消</el-button>
          <el-button type="primary" @click="updUById(form4)">确 定</el-button>
        </div>
      </el-dialog>

      <el-tab-pane label="订单管理" name="second">
        <div class="container">
          <el-form :inline="true">
            <el-form-item label="订单管理" class="label">
              <el-input
                v-model="orderName"
                placeholder="请输入订单名称"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-button type="success">添加</el-button>
          </el-form>
          <el-table :data="tableData2" border style="width: 100%">
            <el-table-column prop="name" label="商品名" width="180">
            </el-table-column>
            <el-table-column prop="orderNum" label="订单编号" width="180">
            </el-table-column>
            <el-table-column prop="createDate" label="生成日期" width="180">
            </el-table-column>
            <el-table-column prop="price" label="价格" width="180">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="180">
            </el-table-column>
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
        </div></el-tab-pane
      >
      <!-- 修改订单 -->
      <el-dialog title="修改用户" :visible.sync="dialogFormVisible5">
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
    </el-tabs>
  </div>
</template>
<script>
import { getCategory, searchC, addCategory, delCategoryById, updCategoryById } from "../../api/category"
import { register, searchUser, delUserById, updUserById, getUser } from "../../api/user"
import { getMyOrder } from "../../api/order"
export default {
  data() {
    return {
      tableData: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      userName: '',
      cateName: '',
      orderName: '',
      activeName: 'second',
      tableData1: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible3: false,
      dialogFormVisible4: false,
      formLabelWidth: '220px',
      form: {},
      form1: {},
      form3: {},
      form4: {},

    }
  },
  created() {
    // this.getCategory()
    this.getAllUser()
    this.getMyOrders()
  },
  methods: {
    getMyOrders() {
      getMyOrder().then((res) => {
        if (res.status == 200) {
          this.tableData2 = res.data.data
          console.log(res.data.data)
        }
      })
    },


    // 用户的方法模块
    getAllUser() {
      getUser().then((res) => {
        if (res.status == 200) {
          this.tableData1 = res.data.data
          //   Array.of(res.data)
          //   console.log(this.tableData1)
        }
      })
    },
    searchName(cateName) {
      searchC(cateName).then((res) => {
        if (res.status == 200) {
          //   console.log(res.data)
          this.tableData = res.data.data
        }
      })
    },
    addUser(param) {
      register(param).then((res) => {
        if (res.status == 200) {
          this.dialogFormVisible3 = false
          this.getAllUser()
          this.$message.success("添加用户成功!");
        }
      })
    },
    updUById(param) {
      updUserById(param).then((res) => {
        if (res.status == 200) {
          this.dialogFormVisible4 = false
          this.getAllUser()
          this.$message.success("修改用户成功!");
        }
      })
    },
    updOById(param) {
      updOrderById(param).then((res) => {
        if (res.status == 200) {
          this.dialogFormVisible5 = false
          this.getMyOrders()
          this.$message.success("修改订单成功!");
        }
      })
    },
    deleteU(id) {
      delUserById(id).then((res) => {
        this.getAllUser()
        this.$message.success("删除用户成功!");
      })
    },
    fillupdateuser(id) {
      this.dialogFormVisible4 = true
      this.form4 = { ...(this.tableData1.filter((item) => { return item.id == id })) }[0]
    },
    fillupdateorder(id) {
      this.dialogFormVisible5 = true
      this.form5 = { ...(this.tableData2.filter((item) => { return item.id == id })) }[0]
      console.log(this.form5)
    },
    fillupdateCate(id) {
      this.dialogFormVisible1 = true
      this.form1 = { ...(this.tableData.filter((item) => { return item.id == id })) }[0]
      console.log(id)
      console.log(this.form1)
    },
    handleClick(a) { },
  }
}
</script>
<style >
.back {
  font-size: 16px !important;
}
#tab-0 {
  margin-right: 20px;
  width: 200px !important;
}
.el-menu-demo {
  padding-left: 100px;
}
.el-tabs__nav {
  padding-left: 100px;
}
.el-tabs__item {
  height: 80px;
  width: 150px;
  text-align: center;
  line-height: 80px;
  font-size: 20px !important;
  font-weight: bold;
  color: #fff !important;
  border: none;
  border: none !important;
}
.el-tabs__nav-scroll {
  background-color: #545c64;
}
.is-active {
  background: black !important;
  border: none !important;
}

/* 表格样式 */
.cell {
  text-align: center;
}
</style>
