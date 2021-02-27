// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入全局样式表
import './assets/css/global.css'
// 导入js文件
import './plugins/elements'
// 导入font字体图标
import './assets/css/font/iconfont.css'

// // 导入axios库
// import axios from 'axios'
// // 配置请求的根路径
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// axios.interceptors.request.user(config => {
//   console.log(config)
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   return config
// })
// Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
