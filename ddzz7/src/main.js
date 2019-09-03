import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/index'
import toasted from 'vue-toasted'
import './plugins/element.js'

Vue.use(toasted)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')