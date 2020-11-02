import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Pagination from 'element-ui' // 按需引入element

axios.defaults.baseURL = 'http://wyy.api.blog8090.com' // 配置baseURL
axios.defaults.withCredentials = true

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios // 挂载axios

Vue.use(Pagination)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
