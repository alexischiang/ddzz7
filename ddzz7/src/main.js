import Vue from 'vue'
import App from './App.vue'
import router from './router'
import toasted from 'vue-toasted'
import './plugins/element.js'

Vue.use(toasted)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')