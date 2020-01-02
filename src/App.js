import HTTP from '@/utils/http'
import _ from 'lodash'
import { startLoading, endLoading } from '@/utils/loader'

import router from '@/router'
// import { buildSuccess, handleError } from '@/utils/utils.js'

export default {
    namespaced: true,
    state: {
        user: {

        },
    },
    getters: {
        userId: state => {
            return state.user.user_account_id;
        }
    },
    actions: {

    },
    mutations: {
        updateUser(state, user) {
            _.assign(state.user, payload)
        }
    }
}




