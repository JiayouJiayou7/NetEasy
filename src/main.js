import Vue from 'vue'
import App from './App.vue'
import waterfall from 'vue-waterfall2'
import 'lib-flexible/flexible'
import * as API from './api'
import router from './router/index'
import store from './store'
Vue.config.productionTip = false
Vue.use(waterfall)
Vue.prototype.$API = API;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
