import Vue from 'vue'
import Vuetify, { VSnackbar } from 'vuetify/lib'
import VuetifyToast from 'vuetify-toast-snackbar'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VSnackbar
  },
  iconfont: 'md'
})

Vue.use(VuetifyToast)
