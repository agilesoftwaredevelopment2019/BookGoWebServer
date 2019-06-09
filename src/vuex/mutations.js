import { UID, IDNAME, NICKNAME, IS_AUTH, LOGIN, ERROR_STATE } from './mutation_types'

export default {
  [UID] (state, uid) {
    state.uid = uid
  },
  [IS_AUTH] (state, isAuth) {
    state.isAuth = isAuth
  },
  [IDNAME] (state, idName) {
    state.idName = idName
  },
  [NICKNAME] (state, nickname) {
    state.nickname = nickname
  },
  [LOGIN] (state, login) {
    state.login = login
  },
  [ERROR_STATE] (state, errorState) {
    state.errorState = errorState
  }
}
