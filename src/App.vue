<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
  mounted(){
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res)=>{
        // to-do 保存到vuex中（将数据保存下来，存储到vuex中，在NavHeader中将vuex中的数据读取出来就可以了）
      });
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{
        // to-do 保存到vuex中
      });
    }
  }
};
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
@import './assets/scss/base.scss';
</style>
