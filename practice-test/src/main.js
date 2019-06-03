import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import './assets/styles.css'
import clientEditor from './components/client'

Vue.config.productionTip = false

Vue.component('client-editor', clientEditor);

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
