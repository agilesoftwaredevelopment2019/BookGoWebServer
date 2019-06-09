import { UID, IDNAME, NICKNAME, IS_AUTH, LOGIN, ERROR_STATE, ITEM } from './mutation_types'
import axios from 'axios'

const getUserInfo = (idname, password) => {
  return axios.post('https://bookgo.herokuapp.com/users/login', {
    idname: idname,
    password: password
  })
}

let setUID = ({ commit }, data) => {
  commit(UID, data)
}

let setIdName = ({ commit }, data) => {
  commit(IDNAME, data)
}

let setNickname = ({ commit }, data) => {
  commit(NICKNAME, data)
}

let setIsAuth = ({ commit }, data) => {
  commit(IS_AUTH, data)
}

let setLogin = ({ commit }, data) => {
  commit(LOGIN, data)
}

let setErrorState = ({ commit }, data) => {
  commit(ERROR_STATE, data)
}

let setItem = ({ commit }, data) => {
  commit(ITEM, data)
}

let processResponse = (store, loginResponse) => {
  if (loginResponse.data.length === 0) {
    setErrorState(store, 'Wrong ID or Password')
  } else {
    setUID(store, loginResponse.data.uid)
    setIdName(store, loginResponse.data.idname)
    setNickname(store, loginResponse.data.nickname)
    setIsAuth(store, loginResponse.data.isAuthenticated)
    setLogin(store, true)
  }
}

export default {
  async login (store, { idname, password }) {
    let loginResponse = await getUserInfo(idname, password)
    processResponse(store, loginResponse)
    return store.getters.getLogin
  },
  setItemInfo (store, { title, author, publisher, uid, price, sellerId, description }) {
    let item = { title, author, publisher, uid, price, sellerId, description }
    setItem(store, item)
  }
}
