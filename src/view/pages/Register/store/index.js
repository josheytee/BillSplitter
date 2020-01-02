import HTTP from '@/utils/http'
import _ from 'lodash'
import Messages from '../model'
import { startLoading, endLoading } from '@/utils/loader'

import router from '@/router'
// import { buildSuccess, handleError } from '@/utils/utils.js'

export default {
  namespaced: true,
  state: {
  },
  getters: {
  },
  actions: {
    async register({ commit, dispatch }, payload) {
      try {
        // startLoading(dispatch, 'loading messages')
        const response = await HTTP.post('signup', payload)
        if (response.status === 200) {

          commit('updateUser', response.data.user)
          dispatch('Login/loginUser', payload)
        }
        console.log(response, payload)
      } catch (err) {
        throw Error(err)
      } finally {
        // endLoading(dispatch, 'loading messages')
      }
    }
  },
  mutations: {
    updateRegister(state, payload) {
      _.assign(state.register, payload)
    },
    updateUser(state, user) {
      state.user = user
    }
  }
}




