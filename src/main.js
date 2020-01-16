import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.config.productionTip = false
axios.defaults.withCredentials=true
Vue.prototype.axios=axios;

// 引入全部组件
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'; 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
