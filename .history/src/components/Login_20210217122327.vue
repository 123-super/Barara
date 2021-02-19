<template>
  <div id="app" class="login">
    <div class="loginpage">
      <div class="headerlogo">
        <span>Barara</span>
      </div>
      <div class="bodyback">
        <div class="imgshow">
          <div class="loginform">
            <span>欢迎登录巴拉拉官网</span>
            <div class="accounttext">
              <div class="iconfont l">&#xe70a;</div>
              <input
                class="enter"
                type="text"
                maxlength="17"
                minlength="11"
                blur
                placeholder="请输入账号"
                v-model="user.username"
              />
            </div>
            <div class="passwordtext">
              <div class="iconfont l">&#xe805;</div>
              <input
                class="enter"
                type="password"
                maxlength="10"
                minlength="6"
                v-model="user.password"
                placeholder="请输入密码"
              />
            </div>
            <a href="" class="grey">忘记密码</a>
            <input
              class="loginbutton"
              :disabled="checked == false"
              @click="loginClick"
              value="登录"
            />
            <div class="agreement">
              <el-checkbox v-model="checked"
                >已阅读《巴拉啦用户服务协议和隐私政策》</el-checkbox
              >
            </div>
            <div class="thirdlogin">
              <div class="thirdaccount">
                <a class="iconfont a">&#xe6b9;</a>
                <a class="iconfont a">&#xe630;</a>
                <a class="iconfont a">&#xe618;</a>
              </div>
              <div class="register">
                <span class="grey">还没有账号？</span>
                <a href="">注册</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import { login } from "../api/user.js";
export default {
  components: {
    Footer: () => import('./headandfoot/Footer')
  },
  data() {
    return {
      checked: false,
      user: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    loginClick() {
      let { username, password } = this.user;
      login({ username, password }).then((resp) => {
        console.log(resp.data)
        if (resp.status === 200) {
          sessionStorage.setItem('user', JSON.stringify(resp.data.obj))
          console.log(JSON.stringify(resp.data.obj))
          this.$router.push("/home")
        } else {
          this.$message.error('用户或密码错误！')
        }
      });
    },
    register() {
      this.$router.push({
        path: "/register",
      });
    },
  }

}

</script>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

.loginpage {
  height: 700px;
}

a {
  text-decoration: none;
}

/* 登录页面头部 */

.headerlogo {
  height: 89px;
  width: 1190px;
  margin: 0px auto;
  /* background: red; */
}

.headerlogo > span {
  display: inline-block;
  margin-top: 18px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 40px;
  letter-spacing: 2px;
  font-weight: bold;
}

/* 登录页面body部分 */

.bodyback {
  /* margin: 0px auto; */
  /* margin-left: -200px; */
  height: 610px;
  width: 1719px;
  overflow: hidden;
  width: 100%;
  background: url("../../static/img/bg.jpg") no-repeat right top;
}

.imgshow {
  height: 100%;
  margin: 0px auto;
  width: 1190px;
  /* background-color: aqua; */
  position: relative;
}

/* 登录页面的登录框 */

.loginform {
  position: absolute;
  right: 0px;
  bottom: 115px;
  width: 300px;
  height: 320px;
  border: 1px sold blue;
  padding: 30px;
  opacity: 0.8;
  background: whitesmoke;
}

.loginform > span {
  font-size: 20px;
  font-weight: bold;
  font-family: fantasy;
  color: rgb(191, 21, 38);
  letter-spacing: 2px;
  display: block;
  margin-bottom: 20px;
}

input.enter {
  width: 298px;
  height: 30px;
  border: 1px solid black;
  text-indent: 32px;
  margin-bottom: 15px;
}

.grey {
  color: black;
  font-size: 12px;
}

.loginbutton {
  height: 40px;
  background: rgba(153, 153, 153, 1);
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  margin: 10px 0px;
}

.accounttext,
.passwordtext {
  position: relative;
}

.l {
  position: absolute;
  top: 10px;
  left: 10px;
}

.thirdaccount {
  float: left;
}

.thirdaccount a {
  margin-right: 5px;
}

.register {
  float: right;
}

.register > a {
  font-size: 14px;
  color: red;
  font-weight: bold;
}

.agreement {
  height: 16px;
  margin-bottom: 15px;
}

.a:hover {
  background-color: slategray;
  /* border: 1px solid black; */
}
</style>