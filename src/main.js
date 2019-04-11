import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import '@fortawesome/fontawesome-free/css/all.css'
import { uppercase } from './filters/uppercase'

Vue.filter('uppercase', uppercase)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
