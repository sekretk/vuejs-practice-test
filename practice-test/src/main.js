import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store.js'

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
