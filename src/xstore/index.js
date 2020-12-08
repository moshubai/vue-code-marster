import Vue from 'vue'
import Vuex from './xvuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        add(state) {
            state.count++
        }
    },
    actions: {
        addFn({ commit }) {
            commit('add')
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    }
})
