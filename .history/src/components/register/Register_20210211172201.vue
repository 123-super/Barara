<template>
  <div class="registerPage">
    <div class="container">
      <div class="register-list">
        <ul>
          <li><span>用户名</span><input type="text" /></li>
          <li><span>图形验证码</span><input type="text" /></li>
          <li><span>密码</span><input type="text" /></li>
          <li><span>确认密码</span><input type="text" /></li>
          <li>
            <input
              class="registerbutton"
              :disabled="checked == false"
              @click="registerbutton"
              value="登录"
            />
          </li>
          <li>
            <el-checkbox v-model="checked"
              >已阅读《巴拉啦用户服务协议和隐私政策》</el-checkbox
            >
          </li>
        </ul>
      </div>

      <div class="register-img">
        <img src="../../../static/img/register.jpg" />
      </div>
    </div>
  </div>
</template>
<style>
.register-list {
  width: 65%;
  height: 500px;
  float: left;
  padding: 80px 40px;
}
.register-img {
  width: 30%;
  height: 500px;
  float: left;
}
.register-list li {
  height: 80px;
  width: 500px;

  box-sizing: border-box;
}
.register-list li span {
  display: inline-block;
  width: 30%;
  height: 80px;
  line-height: 80px;
}
.register-list li input {
  width: 60%;
  height: 80px;
  line-height: 80px;
}
.registerbutton [disabled] {
  background: rgb(156, 147, 147) !important;
  /* color: white; */
}

.registerbutton {
  display: block;
  width: 100%;
  height: 40px;
  font-size: large;
  background: rgb(200, 56, 59) !important;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  margin: 10px 0px;
  cursor: pointer;
}
</style>