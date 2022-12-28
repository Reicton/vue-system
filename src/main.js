import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import dataV from '@jiaminghi/data-view'
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from "echarts";
import scroll from 'vue-seamless-scroll'
import router from '@/router';
Vue.use(scroll)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(dataV)
Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
