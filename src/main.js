// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import axios from 'axios' // 引入axios
import Vuex from 'vuex' // 引入vuex
import store from '@/store/store.js' // 引入store.js，这是仓库文件，非常重要

Vue.config.productionTip = false
Vue.prototype.$axios = axios // axios声明和其他不一样
Vue.use(Vuex) // 声明vuex

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
