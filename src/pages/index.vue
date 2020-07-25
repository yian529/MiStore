<template>
  <div class="index">
    <div class="container">
      <!-- 轮播菜单 -->
      <div class="swiper-box">
        <!-- 导航菜单 -->
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a class="item-list" href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,i) in item" :key="i">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub?sub.img:'/imgs/item-box-2.png'" />
                      {{sub?sub.name:'小米8青春版'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a class="item-list" href="javascript:;">电视 盒子</a>
              <div class="children">
                <ul v-for="(item,index) in menuList_second" :key="index">
                  <li v-for="(sub,i) in item" :key="i">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub?sub.img:'/imgs/item-box-6.jpg'" />
                      {{sub?sub.name:'小米电视5 75英寸'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a class="item-list" href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a class="item-list" href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a class="item-list" href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a class="item-list" href="javascript:;">耳机 音箱</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a class="item-list" href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a class="item-list" href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <!-- 轮播插件 -->
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id">
              <img :src="item.img" />
            </a>
          </swiper-slide>
          <!-- 如果需要分页器 slot插槽 会自动往里面渲染分页器-->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 广告位 -->
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img :src="item.img" alt />
        </a>
      </div>
      <div class="banner-box">
        <a href="'/#/product/30'">
          <img src="/imgs/banner-1.png" alt />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <span class="product-box-title">手机</span>
        <div class="wrapper">
          <div class="wrapper-left">
            <a href="javascript:;">
              <img src="/imgs/mix-alpha.jpg" alt />
            </a>
          </div>
          <div class="wrapper-box">
            <div class="wrapper-box-list" v-for="(item,index) in phoneList" :key="index">
              <div class="list-item" v-for="(sub,i) in item" :key="i">
                <span :class="{'new-pro':i%2==0}">新品</span>
                <div class="list-item-img">
                  <img :src="sub.mainImage" />
                </div>
                <div class="list-item-info">
                  <p class="info-name">{{sub.name}}</p>
                  <p class="info-describe">{{sub.subtitle}}</p>
                  <p @click="addCart" class="info-price">{{sub.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar />
    <!-- 在父组件定义一个submit事件（组件中不能用click进行事件绑定，需要用子组件传来的名称进行定义，即submit） -->
    <Modal title="提示" btnType="3" modalType="middle" :showModal="showModal" v-on:submit="goToCart" v-on:cancel="showModal=false">
      <!-- 插槽的用法：嵌套一个template模板，用v-slot定义插槽的名称（Modal.vue中的<slot name="body"></slot>） -->
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar";
import Modal from "../components/Modal";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },
  data() {
    return {
      swiperOptions: {
        // 自动播放
        autoplay: true,
        // 环路播放
        loop: true,
        // 切换效果
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        // 分页器
        pagination: {
          el: ".swiper-pagination",
          // clickable设置为true时，点击分页器的指示点分页器会控制Swiper切换
          clickable: true
        },
        // 前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      // 轮播菜单功能的实现
      // 定义两个数组，一个二维数组，循环两次，横向循环六次，纵向循环四次
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      menuList_second: [
        [
          {
            id: 30,
            img: "/imgs/item-box-5.jpg",
            name: "小米电视 大师 65英寸"
          },
          {
            id: 31,
            img: "/imgs/item-box-6.jpg",
            name: "小米电视5 75英寸"
          },
          {
            id: 32,
            img: "/imgs/item-box-7.jpg",
            name: "全面屏电视Pro 55英寸"
          },
          {
            id: 33,
            img: "/imgs/item-box-8.jpg",
            name: "小米电视4A 58英寸"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      // 广告位功能的实现
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 347,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      // 手机商品功能的实现
      phoneList: [],
      // Modal动画是否展示
      showModal:false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios.get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        }).then(res => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    // 添加至购物车
    addCart(){
      this.showModal=true;
      // 调后台接口
      // this.axios.post('/carts',{
      //   productId:id,
      //   selected: true
      // }).then((res)=>{

      // });
    },
    goToCart(){
      this.$router.push('/cart');
    }
  }
};
</script>

<style lang="scss" scope>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/base.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      z-index: 10;
      width: 264px;
      height: 451px;
      background-color: rgba(85, 88, 90, 0.486);
      padding: 26px 0;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          padding-left: 30px;
          .item-list {
            // a标签是行内元素，没有填满；li标签是填满的
            // 让a变为块级元素可以实现a与箭头在li中被填满，从而排在一行
            display: block;
            position: relative;
            color: $colorG;
            font-size: 16px;
            &::after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " ";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            transition: all 0.9s linear;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            position: absolute;
            top: 0;
            left: 264px;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            border-top: 1px solid $colorH;
            ul {
              @include flex();
              height: 75px;
              line-height: 75px;
              li {
                flex: 1;
                height: 75px;
                padding-left: 23px;
                a {
                  font-size: $fontJ;
                  color: $colorB;
                  img {
                    width: 35px;
                    height: 42px;
                    margin-left: 10px;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-button-prev {
        // 解决前进按钮被导航菜单挡住的问题
        left: 274px;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner-box {
    margin-bottom: 40px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px auto 50px;
    .product-box-title {
      display: block;
      font-size: $fontF;
      color: $colorB;
      padding: 30px 0;
    }
    .wrapper {
      display: flex;
      .wrapper-left {
        margin-right: 16px;
        width: 224px;
        height: 619px;
      }
      .wrapper-box {
        margin-bottom: 51px;
        .wrapper-box-list {
          @include flex();
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
          .list-item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            margin-right: 14px;
            text-align: center;
            &:nth-child(4n) {
              margin-right: 0;
            }
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              text-align: center;
              color: $colorG;
              // 可通过动态修改class，实现颜色的切换
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .list-item-img {
              img {
                width: 190px;
                height: 195px;
                object-fit: cover;
              }
            }
            .list-item-info {
              .info-name {
                font-size: $fontJ;
                font-weight: bold;
                color: $colorB;
                line-height: $fontJ;
              }
              .info-describe {
                font-size: $fontK;
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .info-price {
                font-size: $fontJ;
                font-weight: bold;
                color: #f20a0a;
                cursor: pointer;
                &::after {
                  content: " ";
                  @include bgImg(20px, 20px, "/imgs/icon-cart-hover.png");
                  margin-left: 8px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style> 