<template>
  <div class="registerPage">
    <div class="register-title">
      <div class="register-titleleft"><h1>欢迎注册巴拉啦会员</h1></div>
      <div class="register-titleright">
        已有账号<router-link
          to="/login"
          style="color: black; padding-left: 20px; font-weight: bold"
          >立即登录 ></router-link
        >
      </div>
    </div>
    <div class="container">
      <div class="register-list">
        <ul>
          <li>
            <span>用户名</span
            ><input
              type="text"
              v-model="user.name"
              placeholder="请输入手机号或者邮箱"
              @blur.capture="checkusername()"
            />
          </li>
          <li>
            <span>图形验证码</span><input type="text" /><span class="checkcode"
              >sxde</span
            >
          </li>
          <li>
            <span>密码</span
            ><input
              type="text"
              v-model="user.password"
              @blur.capture="checkpassword"
              placeholder="请输入密码"
            />
          </li>
          <li>
            <span>确认密码</span
            ><input
              type="text"
              class="repassword"
              v-model="user.repassword"
              @onkeyup="checkrepassword"
              placeholder="请确认密码"
            />
          </li>
          <li>
            <input
              class="registerbutton"
              :disabled="checked == false"
              value="注册"
              @blur.capture="validates()"
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
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: "",
      user: {
        name: "",
        password: "",
        repassword: ""
      }
    }
  },
  components: {
    Footer: () => import('../headandfoot/Footer')
  },
  methods: {
    checkusername() {
      var name = this.user.name
      var reg = /^[a-zA-Z0-9]{10,21}$/
      if (reg.test(name) == false) {
        this.$message.error("输入手机号或邮箱名位数有误");
      }
    },
    checkpassword() {
      var p = this.user.password
      var reg = /^[a-zA-Z0-9]{6,8}$/
      if (reg.test(p) == false) {
        this.$message.error("请重新设置密码");
      }
    },
    checkrepassword() {
      var p = this.user.password
      var rp = this.user.repassword
      if (p !== rp) {
        this.$message.error("两次密码不同");
      }
    },
    validates() {
      var p = this.user.password
      var rp = this.user.repassword
      if (p && rp) {
        return true
      } else {
        this.$message.error("请完善信息");
      }
    },
    register() {

    }
  }
}
</script>
<style >
.registerPage {
  width: 100%;
  height: 100%;
  background: rgb(244, 209, 242);
}
.register-titleleft {
  width: 80%;
}
.register-titleright {
  width: 20%;
}
.register-titleright,
.register-titleleft {
  height: 150px;
  line-height: 150px;
  float: left;
  text-align: center;
}
.register-list {
  width: 65%;
  height: 500px;
  float: left;
  background: rgb(244, 209, 242);
  /* padding: 80px 40px; */
}
.register-titleleft h1 {
  margin-bottom: 80px;
}
.register-img {
  width: 30%;
  height: 500px;
  float: left;
  border-radius: 20px;
}
.register-list li {
  height: 70px;

  box-sizing: border-box;
}
.register-list li span {
  display: inline-block;
  width: 20%;
  text-align: center;
}
.register-list li input {
  width: 50%;
  height: 30px;
  line-height: 60px;
  text-indent: 14px;
}
.checkcode {
  width: 40px;
  height: 40px !important;
  line-height: 40px;
  background: grey;
  margin-left: 20px;
}
.registerbutton[disabled] {
  background: rgb(156, 147, 147) !important;
}

.registerbutton {
  display: block;
  width: 40% !important;
  height: 40px !important;
  font-size: large;
  background: rgb(200, 56, 59) !important;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  margin: 10px 200px;
  cursor: pointer;
}
.el-checkbox {
  margin: 10px 200px;
}
</style>