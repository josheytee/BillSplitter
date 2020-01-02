import HTTP from '@/utils/http'
import helper from '@/utils/helper'
import _ from 'lodash'

export default {
  namespaced: true,
  state: {

  },
  getters: {
    userId: state => {
      return state.auth.user_account_id;
    }
  },
  actions: {
    async loginUser({ commit, dispatch }, payload) {
      try {
        // startLoading(dispatch, 'loading messages')

        const response = await HTTP.post('login', payload)
        helper.setCookie("user", payload)
        commit('App/updateUser', response.data)
      } catch (err) {
        throw Error(err)
      } finally {
        // endLoading(dispatch, 'loading messages')
      }
    },
  },
  mutations: {
    // updateLogin(state, payload) {
    //   _.assign(state.login, payload)
    // },
    // updateAuth(state, payload) {
    //   console.log(payload);

    //   _.assign(state.auth, payload)
    //   console.log(state);
    //   state.auth = payload
    //   console.log(state);


    // }
  }
}
