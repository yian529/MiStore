import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'
// import env from './env'


// 定义一个开关
const mock=false;
if(mock){
  require('./mock/mock');
}
  
// 设置基础值  
// 根据前端的跨域方式做调整  /yian/mi : /api/yian/mi => /yian/mi
axios.defaults.baseURL='/api';
// 设置超时时间
axios.defaults.timeout=8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL=env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function(response){
  // 获取到接口返回的值
  let res=response.data;
  let path=location.hash;
  if(res.status==0){
    // 成功
    return res.data;
  }else if(res.status==10){
    // 登录时的接口报错  跳转到登录页面
    // 使用window.location.href跳转的原因：
    // 在main.js中用路由跳没有用，路由是挂载到vue实例中，在每一个页面里才能用this.$route.push，在这里this并没有指向vue
    // 当路由不是首页，即其他页面时，做跳转至登录路由；是首页就不用做跳转
    if(path != '#/index'){
      window.location.href='/#/login'
    }
    window.location.href='/#/login'
  }else{
    // 报错
    alert(res.msg);
    return Promise.reject(res);
  }
});

Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
