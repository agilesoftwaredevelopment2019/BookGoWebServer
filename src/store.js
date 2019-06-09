import Vue from 'vue'
import Vuex from 'vuex'
import getters from './vuex/getters'
import actions from './vuex/actions'
import mutations from './vuex/mutations'

Vue.use(Vuex)

const state = {
  uid: '',
  errorState: '',
  isAuth: false,
  nickname: '',
  login: false
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
