<template>
  <div class="login">
    <div class="login-model">
      <a class="close-login icon-c iconfont" title="关闭"></a>
      <h3 class="login-title">登录</h3>
      <ul class="input-content">
        <li class="input-row">
          <span class="icon iconfont icon-xm"></span>
          <input type="text" placeholder="用户名" class="full-input" id="username" v-model="loginParams.username">
        </li>
        <li class="input-row">
          <span class="icon iconfont icon-mm"></span>
          <input type="password" placeholder="密码" class="full-input" id="password" v-model="loginParams.password">
        </li>
        <li class="input-row">
          <input type="text" placeholder="验证码" class="sm-input" id="captcha" v-model="loginParams.captcha">

          <div class="code-img">
            <img src="http://172.0.0.42:8116/cspo/captcha.jpg?Tue%20Jun%2026%202018%2016:40:21%20GMT+0800%20(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)" title="点击刷新" id="codeImg" @click="refreshCodeImg"/>
          </div>
        </li>
      </ul>
      <a class="submit-login-btn" id="submit-login-btn" @click="signIn">登录</a>
      <div class="protocol">
        <div class="manage-protocol">
          <input type="checkbox" v-model="checked" id="checkbox-id"/>
          <a class="protocol-link">《掌上体检健康管理服务平台协议》</a>
        </div>
        <a class="forget-pass">忘记密码</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginParams:{
          username: "",
          password: "",
          captcha: ""
        },
        checked:false,
        codeImg:'captcha.jpg'
      }
    },
    created() {

    },
    methods: {
      signIn() {
        if (!this.loginParams.username || !this.loginParams.password || !this.loginParams.captcha) {
          alert("输入框不能为空");
          return
        }
        if (!this.checked) {
          alert("请先阅读《掌上体检健康管理服务平台协议》");
          return;
        }
        this.$store.dispatch("getuserinfo", {
          username: this.loginParams.username,
          password: this.loginParams.password,
          captcha: this.loginParams.captcha
        });
      },
      //刷新图形验证码
      refreshCodeImg() {
        let src = "captcha.jpg?" + new Date();
          this.codeImg = src;
      }
    }
  }
</script>

<style scoped>
  body {
    font: 12px/16px Microsoft YaHei, 宋体, Arial, Helvetica, sans-serif;
    color: #444;
  }

  .width_min_1200 {
    min-width: 1200px;
  }

  .margin_auto {
    width: 1200px;
    margin: 0 auto;
  }

  .header {
    min-width: 1200px;
    box-shadow: 0 3px 5px #ccc;
    height: 100px;
    background-color: #fff;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%
  }

  .logo {
    float: left;
    height: 70px;
    padding-top: 15px;
  }

  .logo .logo-img {
    width: 70px;
    float: left;
  }

  .logo-text {
    float: left;
    line-height: 36px;
    font-size: 20px;
    color: #999;
    font-weight: normal;
    padding-top: 17px;
  }

  .blue-text {
    color: #64adf9
  }

  .pink-text {
    color: #fd6e70
  }

  .login-btn {
    float: right;
    width: 90px;
    height: 36px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background-color: #4fb136;
    line-height: 36px;
    text-align: center;
    color: #fff;
    margin-right: 30px;
    margin-top: 32px;
  }

  .login-btn:hover {
    background-color: #328817;
  }

  .header-nav {
    float: right;
    padding-top: 32px;
  }

  .header-nav .nav-item {
    display: inline-block;
    margin: 0 25px;
    padding: 0 10px;
    box-sizing: border-box;
    line-height: 36px;
    height: 36px;
    font-size: 18px;
    color: #999;
  }

  .header-nav .nav-item.active {
    border-bottom: 2px solid #4fb136;
    color: #4fb136
  }

  .transition-5s {
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .transition-3s {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .move-5s {
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }

  .banner {
    height: 700px;
    position: relative;
    margin-top: 100px
  }

  .dot-box {
    position: absolute;
    width: 100%;
    text-align: center;
    height: 20px;
    line-height: 0;
    bottom: 10px;
    z-index: 10;
    font-size: 0;
  }

  .dot-box li {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin: 0 5px;
  }

  .dot-box li a {
    display: block;
    border: 2px solid #fff;
    height: 14px;
    box-sizing: border-box;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .dot-box li a.flex-active {
    background-color: #fff;
  }

  .slider-item {
    height: 700px;
    overflow: hidden;
  }

  .banner-auto {
    position: relative;
    height: 700px
  }

  .banner-auto .load-btn {
    position: absolute;
    right: 233px;
    bottom: 132px;
    border-radius: 6px;
    width: 110px;
    height: 40px;
    background-color: #fff;
    color: #4db32c;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
  }

  .slider-item .load-btn {
    position: absolute
  }

  .banner01 {
    background: url("../assets/banner1.jpg") no-repeat center top;
  }

  .banner02 {
    background: url("../assets/banner2.jpg") no-repeat center top;
  }

  .product-service {
    height: 545px;
    padding-top: 80px;
    background: url("../assets/product-service.jpg") no-repeat center top;
    overflow: hidden
  }

  .product-service-center {
    height: 545px;
  }

  .product-service-center .title-container {
    overflow: hidden;
    height: 110px;
    margin-bottom: 70px;
  }

  .product-service-center .title-part {
    text-align: center;
  }

  .product-service-center .title-part.hide {
    transform: translateY(-100%)
  }

  .product-service-center .text-c {
    line-height: 66px;
    font-size: 44px;
    color: #333;
  }

  .product-service-center .text-e {
    line-height: 44px;
    font-size: 24px;
    color: #999;
  }

  .items-container {
    height: 270px;
    overflow: hidden;
    padding-top: 20px
  }

  .service-items-box {
    width: 1240px;
    height: 270px;
  }

  .service-items-box.hide {
    -webkit-transform: translate(0, 100%);
    -moz-transform: translate(0, 100%);
    -ms-transform: translate(0, 100%);
    -o-transform: translate(0, 100%);
    transform: translate(0, 100%);
  }

  .serviceItem {
    float: left;
    width: 270px;
    height: 240px;
    box-sizing: border-box;
    border: 1px solid #e8e8e8;
    background-color: #fff;
    padding: 25px 20px 15px;
    margin: 0 30px 0 0;
  }

  .serviceItem:hover {
    border: 1px solid #4fb136;
    -webkit-transform: translate3d(0, -10px, 0);
    -moz-transform: translate3d(0, -10px, 0);
    -ms-transform: translate3d(0, -10px, 0);
    -o-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
    -webkit-box-shadow: 0 10px 20px #ccc;
    -moz-box-shadow: 0 10px 20px #ccc;
    box-shadow: 0 10px 20px #ccc;
  }

  .serviceItem .item-title {
    font-size: 0;
    padding-bottom: 25px;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 18px;
  }

  .serviceItem .icon {
    display: inline-block;
    width: 48px;
    height: 48px;
    vertical-align: top;
  }

  .icon1 {
    background: url("../assets/icons.png") no-repeat left top;
  }

  .serviceItem:hover .icon1 {
    background: url("../assets/icons.png") no-repeat left -48px;
  }

  .icon2 {
    background: url("../assets/icons.png") no-repeat -48px top;
  }

  .serviceItem:hover .icon2 {
    background: url("../assets/icons.png") no-repeat -48px -48px;
  }

  .icon3 {
    background: url("../assets/icons.png") no-repeat -96px top;
  }

  .serviceItem:hover .icon3 {
    background: url("../assets/icons.png") no-repeat -96px -48px;
  }

  .icon4 {
    background: url("../assets/icons.png") no-repeat -144px top;
  }

  .serviceItem:hover .icon4 {
    background: url("../assets/icons.png") no-repeat -144px -48px;
  }

  .serviceItem .item-title-text {
    display: inline-block;
    line-height: 48px;
    font-size: 18px;
    color: #999;
    padding-left: 10px
  }

  .serviceItem:hover .item-title-text {
    color: #666;
  }

  .img-part {
    text-align: center;
    font-size: 0;
  }

  .img-part .item-img {
    display: inline-block;
    margin: 0 10px;
    border: 1px solid #e8e8e8;
    -webkit-box-shadow: 0 0 5px #999;
    -moz-box-shadow: 0 0 5px #999;
    box-shadow: 0 0 5px #999;
    width: 75px;
    height: 99px;
  }

  .img-part .item-img img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .about-us-wrapper {
    background: url("../assets/about-us.jpg") no-repeat center top;
    height: 670px;
    padding-top: 50px;
  }

  .about-us-center {
    height: 670px;
  }

  .about-us-title-container {
    height: 110px;
    overflow: hidden;
    margin-bottom: 40px;
  }

  .about-us-title-b {
    text-align: center;
  }

  .about-us-title-b.hide {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  .about-us-title-b .text-c {
    line-height: 66px;
    font-size: 44px;
    color: #fff;
  }

  .about-us-title-b .text-e {
    line-height: 44px;
    font-size: 24px;
    color: #fff;
  }

  .about-us-content-container {
    height: 476px;
    overflow: hidden
  }

  .aboutUs-content {
    height: 476px;
    background-color: #fff;
    width: 1200px;
    box-sizing: border-box;
    padding: 40px;
  }

  .aboutUs-content.hide {
    -webkit-transform: translateY(100%);
    -moz-transform: translateY(100%);
    -ms-transform: translateY(100%);
    -o-transform: translateY(100%);
    transform: translateY(100%);
  }

  .about-us-link {
    float: left;
    width: 462px;
    height: 398px;
    box-sizing: border-box;
    padding: 8px;
    -webkit-box-shadow: 0 0 10px #ccc;
    -moz-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
  }

  .text-info {
    width: 620px;
    float: right;
  }

  .text-info p {
    line-height: 32px;
    font-size: 16px;
    color: #666;
    text-indent: 2em;
  }

  .attention-download-wrapper {
    height: 730px;
    background: url("../assets/attention-bg.jpg") no-repeat center top;
    overflow: hidden;
  }

  .attention-download-center {
    height: 730px;
    overflow: hidden;
    position: relative;
  }

  .hand-phone {
    width: 474px;
    height: 619px;
    position: absolute;
    left: 60px;
    bottom: 0;
    overflow: hidden
  }

  .hand-phone .hand-phone-img {
    display: block;
    width: 100%;
  }

  .hand-phone .hand-phone-img.hide {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .load-content-container {
    width: 490px;
    position: absolute;
    right: 40px;
    top: 100px;
    overflow: hidden
  }

  .load-content {
    width: 490px;
  }

  .load-content.hide {
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
  }

  .load-title {
    height: 90px;
    line-height: 90px;
    position: relative;
    font-size: 46px;
  }

  .load-title:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 5px;
    background-color: #4fb136;
    color: #333
  }

  .load-title-e {
    line-height: 38px;
    padding: 10px 0;
    color: #999;
    font-size: 24px;
    margin-bottom: 22px;
  }

  .info-introduce {
    line-height: 46px;
    font-size: 30px;
    color: #333;
    margin-bottom: 56px;
  }

  .code-img-content {
    overflow: hidden;
    margin-bottom: 20px;
  }

  .notice-text {
    line-height: 24px;
    font-size: 16px;
    color: #999;
  }

  .code-img-content .code-img-item {
    width: 130px;
    float: left;
    margin: 0 35px 0 0;
  }

  .code-img-content .code-img-item p {
    line-height: 34px;
    font-size: 18px;
    color: #666;
  }

  .footWrapper {
    background-color: #1e2124;
    height: 374px;
  }

  .foot-center {
    padding-top: 50px;
  }

  .about-company {
    float: left;
    width: 50%;
  }

  .company-name {
    line-height: 36px;
    font-size: 24px;
    color: #fff;
    margin-bottom: 22px;
  }

  .company-lists .list-info {
    line-height: 24px;
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
  }

  .company-lists .list-info .icon {
    margin-right: 10px;
    vertical-align: top;
    font-size: 18px;
    display: inline-block;
  }

  .cooperation {
    float: left;
    width: 50%;
  }

  .cooperation .cooperation-title {
    text-align: center;
    line-height: 36px;
    font-size: 30px;
    color: #ccc;
    margin-bottom: 98px;
    padding-right: 160px;
  }

  .coop-service-content {
    overflow: hidden;
  }

  .department-item {
    width: 50%;
    float: left
  }

  .department-item dt {
    line-height: 36px;
    font-size: 24px;
    color: #fff;
    margin-bottom: 22px
  }

  .department-item dd {
    line-height: 24px;
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
  }

  .department-item dd .icon {
    margin-right: 10px;
    vertical-align: top;
    font-size: 18px;
    display: inline-block;
  }

  .footer-indentify {
    font-size: 14px;
    text-align: center;
    color: #999;
    line-height: 24px;
    background-color: #0b0b0b;
    padding: 16px 0
  }

  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
  }

  .login-model {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 410px;
    height: 460px;
    background-color: #fff;
    margin: -230px 0 0 -205px;
    z-index: 100;
    display: block;
    box-sizing: border-box;
    padding: 40px 35px 15px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  .login-model .close-login {
    position: absolute;
    font-size: 28px;
    right: 20px;
    top: 20px;
    color: #999;
  }

  .login-title {
    line-height: 48px;
    text-align: center;
    font-size: 30px;
    color: #4fb136;
    margin-bottom: 40px;
  }

  .input-row {
    height: 50px;
    position: relative;
    margin-bottom: 20px;
  }

  .input-row .icon {
    font-size: 0px;
    color: #ccc;
    left: 10px;
    top: 15px;
    position: absolute;
    width: 24px;
    height: 24px;
    vertical-align: top;
  }

  .input-row .icon::before {
    vertical-align: top;
    font-size: 24px;
  }

  .input-row .full-input {
    border: 1px solid #e8e8e8;
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px 10px 10px 40px
  }

  .input-row .sm-input {
    border: 1px solid #e8e8e8;
    float: left;
    width: 190px;
    height: 100%;
    box-sizing: border-box;
    padding: 10px
  }

  .input-row .code-img {
    float: right;
    width: 130px;
    height: 50px;
  }

  .input-row .code-img img {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer
  }

  .submit-login-btn {
    display: block;
    background-color: #4fb136;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .protocol {
    height: 20px;
  }

  .protocol .manage-protocol {
    float: left;
    line-height: 20px;
    height: 20px;
  }

  .protocol .manage-protocol input[type="checkbox"] {
    padding: 0;
    margin: 5px 0 0 0;
    vertical-align: top;
    display: inline-block
  }

  .protocol .protocol-link {
    font-size: 12px;
    color: #2686ce;
    line-height: 20px;
    vertical-align: top;
    display: inline-block;
  }

  .protocol .forget-pass {
    float: right;
    font-size: 12px;
    line-height: 20px;
    color: #999;
  }

</style>
