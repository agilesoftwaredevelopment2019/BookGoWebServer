import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idname: null,
    nickname: null,
    login: null
  },
  getters: {
  },
  mutations: {
    UPDATE_USER_STATE: function (state, payload) {
      state.idname = payload.idname
      state.nickname = payload.nickname
      state.login = payload.login
    }
  },
  actions: {
    try_sign_in_and_get_status: function (context, payload) {
      axios.post('https://bookgo.herokuapp.com/users/login', {
        idname: payload.idname,
        password: payload.password
      })
        .then(res => {
          context.commit('UPDATE_USER_STATE', {
            idname: res.data.idname,
            nickname: res.data.nickname,
            login: true
          })
        })
    }
  }
})
