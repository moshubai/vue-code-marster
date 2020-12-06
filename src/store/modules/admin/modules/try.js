export default {
    namespaced: true,
    state: {
        count: 0
    },
    getters: {
        getterFn(state) {
            return state.count++
        }
    },
    actions: {
        addFn({ commit }) {
            commit('add')
        }
    },
    mutations: {
        add(state) {
            state.count++
        }
    }
}
