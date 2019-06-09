import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vmodal from 'vue-js-modal'
import VuetifyToast from 'vuetify-toast-snackbar'

Vue.config.productionTip = false
Vue.use(Vmodal, { dynamic: true })
Vue.use(VuetifyToast, {
  timeout: 2000,
  shorts: {
    custom: {
      color: 'purple'
    }
  },
  property: '$toast'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
