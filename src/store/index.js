import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import index from './module/index'
export default new Vuex.Store({
  modules:{index}
})