import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import './assets/styles.css'
import clientEditor from './components/clienteditor'
import noteEditor from './components/noteeditor'
import moment from 'moment'

Vue.config.productionTip = false

Vue.component('client-editor', clientEditor);

Vue.component('note-editor', noteEditor);

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(value).format('MM/DD/YYYY hh:mm')
  }
});

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
