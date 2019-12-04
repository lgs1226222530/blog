import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { Menu, Layout } from 'ant-design-vue';
import router from './router'
import store from './store'


Vue.component(Layout.name,Layout)
Vue.component(Menu.name,Menu)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
