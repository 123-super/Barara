<template>
  <div class="register">
    <div class="container">
      <div class="register-list">
          <ul>
          <li><span>用户名</span><input type="text" /></li>
          <li><span>图形验证码</span><input type="text" /></li>
          <li><span>密码</span><input type="text" /></li>
          <li><span>确认密码</span><input type="text" /></li>
          <li><input type="submit" value="注册"></li>
          <li> <el-checkbox v-model="checked">已阅读《巴拉啦用户服务协议和隐私政策》</el-checkbox></li>
      </ul>
      </div>
    </div>
    <div class="register-img">
      <img src="../../../static/img/register.jpg" />
    </div>
    </div>

</template>