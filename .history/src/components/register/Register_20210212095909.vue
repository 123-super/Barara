<template>
  <div class="registerPage">
    <div class="register-title">
      <div class="register-titleleft">Barara注册</div>
      <div class="register-titleright">
        已有账号<span
          ><router-link to="/login" style="color: black"
            >立即登录</router-link
          ></span
        >
      </div>
    </div>
    <div class="container">
      <div class="register-list">
        <h1>欢迎注册巴拉啦会员</h1>
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
              value="注册"
            />
          </li>
        </ul>
        <el-checkbox v-model="checked"
          >已阅读《巴拉啦用户服务协议和隐私政策》</el-checkbox
        >
      </div>

      <div class="register-img">
        <img src="../../../static/img/register.jpg" />
      </div>
    </div>
  </div>
</template>
<style>
.register-titleleft {
  float: left;
  width: 80%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.register-titleright {
  float: left;
  width: 20%;
  height: 50px;
}
.register-list {
  width: 65%;
  height: 500px;
  float: left;
  /* padding: 80px 40px; */
}
.register-list h1 {
  margin-bottom: 80px;
}
.register-img {
  width: 30%;
  height: 500px;
  float: left;
}
.register-list li {
  height: 60px;
  width: 500px;

  box-sizing: border-box;
}
.register-list li span {
  display: inline-block;
  width: 20%;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
.register-list li input {
  width: 75%;
  height: 30px;
  line-height: 60px;
}
.registerbutton[disabled] {
  background: rgb(156, 147, 147) !important;
  /* color: white; */
}

.registerbutton {
  display: block;
  width: 60% !important;
  height: 40px !important;
  font-size: large;
  background: rgb(200, 56, 59) !important;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  margin: 10px 100px;
  cursor: pointer;
}
</style>