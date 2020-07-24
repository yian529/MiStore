<template>
    <div class="nav-footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://www.imooc.com/u/index/allcourses" target="_blank">易安_小葵坤主页</a><span>|</span>
            <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span>|</span>
            <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span>|</span>
            <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程（H5+小程序+Node+Mongo）</a>
        </div>
        <div class="copyright">Copyright © 2019 <span class="mi-color">mi.51purse.com</span> All Rights Reserved</div>
    </div>
</template>

<script>
export default {
    name:"nav-footer"

}
</script>

<style lang="scss" scope>
@import './assets/scss/config.scss';
.nav-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 234px;
    border-top: 4px solid $colorA;
    color: $colorD;
    font-size: 16px;
    text-align: center;
    background-color: $colorB;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 15px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 15px;
        }
    }
    .footer-link{
        margin-bottom: 15px;
        a{
            text-decoration: none;
            color: $colorD;
        }
        span{
            margin: 0 10px;
        }
    }
    .copyright{
        .mi-color{
            color: $colorA;
        }
    }
}
</style>