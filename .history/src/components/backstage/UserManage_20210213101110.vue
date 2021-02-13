<template>
  <div class="container">
    <el-table :data="tableData" height="250" border style="width: 100%">
      <el-table-column prop="username" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="password" label="密码" width="180">
      </el-table-column>
      <el-table-column label="操作"> </el-table-column>
    </el-table>
  </div>
</template>