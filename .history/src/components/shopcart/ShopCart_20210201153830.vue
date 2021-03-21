<template>
  <div class="shopcart">
    <Header />
    <div class="container">
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
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="handleClick(scope.row)" size="small"
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
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  components: {
    Header: () => import('../headandfoot/Header')
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
}
</script>