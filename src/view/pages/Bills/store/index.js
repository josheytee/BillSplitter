// import HTTP from '@/utils/http'

export default {
  namespaced: true,
  state: {
    bills: []
  },
  getters: {},
  actions: {
    async bills({ commit }) {
      try {
        // startLoading(dispatch, 'loading messages')
        let user = JSON.parse(window.localStorage.getItem('user'))
        const response = await HTTP.post('list', user.user_account_id)
        if (response.status === 201) {
          commit(updateBills, response.data.user)
        }
        console.log(response, payload, user)
      } catch (err) {
        throw Error(err)
      } finally {
        // endLoading(dispatch, 'loading messages')
      }
    }
  },
  mutations: {
    updateBills(state, bills) {
      state.bills = bills;
    }
  }
}
