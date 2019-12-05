import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import {Layout,Menu,Icon} from 'ant-design-vue'
import router from './router'
import store from './store'

Vue.component(Layout.name,Layout)
Vue.component(Menu.name,Menu)
Vue.component(Icon.name,Icon)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
