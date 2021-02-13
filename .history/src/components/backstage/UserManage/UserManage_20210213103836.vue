<template>
  <div class="container">
    <el-form>
      <el-form-item label="用户名称" class="label">
        <el-input v-model="menuName" placeholder="请输入用户名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-button @click="toAdd" type="success">添加</el-button>
    </el-form>
    <el-table :data="tableData" height="250" border style="width: 40%">
      <el-table-column prop="username" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="password" label="密码" width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        username: "sasa",
        password: "123456"
      }]
    }
  }
}
</script>