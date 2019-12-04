import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import {Layout,Menu} from 'ant-design-vue'
import 'ant-design-vue/lib/layout/style/css'
import 'ant-design-vue/lib/menu/style/css'
import router from './router'
import store from './store'

Vue.use(Layout,Menu)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
