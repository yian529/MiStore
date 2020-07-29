<template>
  <div class="login">
    <div class="container">
      <a href="/#/index">
        <img src="/imgs/login-logo.png" alt />
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <div class="form-title">
            <span class="check">账号登录</span>
            <span class="form-line">|</span>
            <span>扫码登录</span>
          </div>
          <div class="login-input">
            <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username" />
          </div>
          <div class="login-input">
            <input type="password" placeholder="密码" v-model="password" />
          </div>
          <div class="login-btn">
            <a href="javascript:;" class="btn-login" @click="login">登录</a>
          </div>
          <div class="login-tips">
            <div class="tips-msg" @click="register">手机短信登录/注册</div>
            <div class="tips-resigter">
              立即注册
              <span>|</span>忘记密码？
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/u/index/allcourses" target="_blank">易安_小葵坤主页</a>
        <span>|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a>
        <span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a>
        <span>|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程（H5+小程序/云+Node+MongoDB）</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return {
            username:'',
            password:'',
            userId:''
        }
    },
    methods:{
        login(){
            let { username,password } = this;
            this.axios.post('/user/login',{
                username,
                password
            }).then((res)=>{
                this.$cookie.set('userId',res.id,{expires:'1M'});
                // 保存用户名
                this.$router.push('/index');
            });
        },
        register(){
            this.axios.post('/user/register',{
                username:'qqq',
                password:'qqq',
                email:'qqq@163.com'
            }).then(()=>{
                alert('注册成功！');
            });
        }
    }
};
</script>

<style lang="scss" scope>
@import '../assets/scss/config.scss';
.login{
    &>.container{
        height: 112px;
        img{
            width: auto;
            height: 100%;
        }
    }
    .wrapper{
        width: 100%;
        height: 576px;
        background: url('/imgs/login-bg.jpg') no-repeat center;
        .container{
            .login-form{
                position: absolute;
                top: 37px;
                right: 0;
                width: 410px;
                height: 510px;
                background-color: $colorG;
                padding-left: 31px;
                padding-right: 31px;
                box-sizing: border-box;
                .form-title{
                    height: 23px;
                    font-size: 24px;
                    margin: 40px auto 49px;
                    text-align: center;
                    font-weight: bold;
                    color: $colorC;
                    .check{
                        color: $colorA;
                    }
                    .form-line{
                        margin: 0 35px;
                        color: $colorF;
                        font-weight: normal;
                    }
                }
            }
            .login-input{
                width: 348px;
                height: 50px;
                color: $colorD;
                font-size: $fontJ;
                border: 1px solid $colorH;
                margin-bottom: 20px;
                input{
                    width: 100%;
                    height: 100%;
                    border: none;
                    padding: 18px;
                    box-sizing: border-box;
                }
            }
            .login-btn{
                width: 348px;
                height: 50px;
                line-height: 50px;
                background-color: $colorA;
                text-align: center;
                margin-top: 10px;
                a{
                    color: $colorG;
                    font-size: $fontI;
                }
            }
            .login-tips{
                display: flex;
                justify-content: space-between;
                margin-top: 14px;
                font-size: $fontJ;
                cursor: pointer;
                .tips-msg{
                    color: $colorA;
                    font-weight: bold;
                }
                .tips-resigter{
                    color: $colorD;
                    span{
                        margin: 0 7px;
                        color: $colorF;
                    }
                }
            }
        }
    }
    .login-footer{
        height: 100px;
        text-align: center;
        padding-top: 60px;
        color: $colorB;
        .footer-link{
            a{
                color: $colorB;
                font-size: $fontJ;
            }
            span{
                margin: 0 12px;
                color: $colorD;
            }
        }
        .copyright{
            margin-top: 20px;
        }
    }
}
</style>