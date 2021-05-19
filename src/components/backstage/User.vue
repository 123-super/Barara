<template>
  <div>
    <div class="container">
      <el-form :inline="true">
        <el-form-item label="用户名称" class="label">
          <el-input v-model="userName" placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
        <el-button type="success" @click="dialogFormVisible3 = true"
          >添加</el-button
        >
      </el-form>
      <el-table :data="tableData1" border>
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="password" label="密码" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="fillupdateuser(scope.row.id)"
              type="text"
              size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="deleteU(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

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
  </div>
</template>

<script>
import {
  register,
  searchUser,
  delUserById,
  updUserById,
  getUser
} from "../../api/user";

export default {
  name: "Order",
  data() {
    return {
      tableData1: [],
      userName: "",
      dialogFormVisible3: false,
      dialogFormVisible4: false,
      formLabelWidth: "220px",
      form3: {},
      form4: {}
    };
  },
  created() {
    this.getAllUser();
  },
  methods: {
    // 用户的方法模块
    getAllUser() {
      getUser().then(res => {
        if (res.status == 200) {
          this.tableData1 = res.data.data;
          //   Array.of(res.data)
          //   console.log(this.tableData1)
        }
      });
    },
    addUser(param) {
      register(param).then(res => {
        if (res.status == 200) {
          this.dialogFormVisible3 = false;
          this.getAllUser();
          this.$message.success("添加用户成功!");
        }
      });
    },
    updUById(param) {
      updUserById(param).then(res => {
        if (res.status == 200) {
          this.dialogFormVisible4 = false;
          this.getAllUser();
          this.$message.success("修改用户成功!");
        }
      });
    },
    deleteU(id) {
      delUserById(id).then(res => {
        this.getAllUser();
        this.$message.success("删除用户成功!");
      });
    },
    fillupdateuser(id) {
      this.dialogFormVisible4 = true;
      this.form4 = {
        ...this.tableData1.filter(item => {
          return item.id == id;
        })
      }[0];
    }
  }
};
</script>
