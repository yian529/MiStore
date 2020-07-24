<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="goToLogin">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart()">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="item-child">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product'+item.id" target="_blank"> 
                    <div class="product-img">
                      <img :src="item.mainImage" alt/>
                    </div>
                    <div class="product-name">{{item.name}}</div>
                    <div class="product-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="item-child">
              <ul>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ddc8849eaf164aac333bfd10627867f.png?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="product-name">Redmi 9</div>
                    <div class="product-price">799元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfbedb76699240a6c9a3f875b930983c.png?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="product-name">Redmi 10X 4G</div>
                    <div class="product-price">999元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="product-name">Redmi 10X</div>
                    <div class="product-price">1599元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="product-name">Redmi K30 Pro</div>
                    <div class="product-price">2499元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e95616fd1620e469386f007eeab1c763.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="product-name">Redmi K30 Pro 变焦版</div>
                    <div class="product-price">3399元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="product-name">Redmi K30</div>
                    <div class="product-price">1399元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="item-child">
              <ul>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="product-name">小米电视 大师 65英寸OLED</div>
                    <div class="product-price">12999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="product-name">Redmi 智能电视 MAX 98</div>
                    <div class="product-price">19999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0f2d1079c767a834f098dd824bb6fee.png?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="product-name">小米电视4A 60英寸</div>
                    <div class="product-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70f6c0c28c61e8585805565e5e16da84.png?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="product-name">Redmi 智能电视 X55</div>
                    <div class="product-price">2199元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="product-name">Redmi 红米电视 70英寸 R70A</div>
                    <div class="product-price">2999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="product-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg?thumb=1&w=200&h=138"
                        alt
                      />
                    </div>
                    <div class="product-name">小米壁画电视 65英寸</div>
                    <div class="product-price">6999元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data(){
    return {
      username:"yian",
      phoneList:[]
    }
  },
  // 定义一个局部过滤器  一般用于金额格式化、日期格式化等
  filters:{
    currency(val){
      if(!val) return '0.00';
      return '￥'+val.toFixed(2)+'元';
    }
  },
  mounted(){
    this.getProductList();
  },
  methods:{
    goToLogin(){
      this.$router.push('/login');
    },
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryId:'100012'
        }
      }).then((res)=>{
        if(res.list.length>6){
          this.phoneList=res.list.slice(0,6);
        }
      });
    },
    goToCart(){
      this.$router.push('/cart');
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: $colorB;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: $colorA;
        color: $colorG;
        text-align: center;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: $colorA;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png");
            transition: margin 0.2s;
          }
          &::after {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-home.png");
          }
          &:hover::before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        padding-left: 264px;
        width: 588px;
        .item-menu {
          display: inline-block;
          font-size: $fontI;
          color: $colorB;
          font-weight: bold;
          margin-right: 20px;
          line-height: 112px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .item-child {
              height: 220px;
              opacity: 1;
            }
          }
          .item-child {
            position: absolute;
            z-index: 10;
            top: 112px;
            left: 0; 
            width: $min-width;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            transition: height .5s;
            background-color: $colorG;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              font-size: $fontK;
              line-height: 12px;
              text-align: center;
              &::before{
                  content: ' ';
                  position: absolute;
                  top: 34px;
                  left: 0;
                  width: 1px;
                  height: 99px;
                  border-left: 1px solid $colorF;
              }
              &:first-child::before{
                  border-left: none;
              }
              a {
                display: inline-block;
                .product-img{
                    height: 160px;
                    img {
                        width: auto;
                        height: 111px;
                        margin-top: 26px;
                    }
                }
                .product-name{
                    font-weight: bold;
                    color: $colorB;
                }
                .product-price{
                    margin-top: 12px;
                    color: $colorA;
                }
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            width: 264px;
            height: 50px;
            border-right: 1px solid #e0e0e0;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17.5px;
          }
        }
      }
    }
  }
}
</style>