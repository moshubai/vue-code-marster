import Vue from 'vue'
import VueX from 'vuex'
import * as types from './type'
import { loadFromLocal, saveToLocal } from "./localStorage";
Vue.use(VueX);

const key = 'user'
const isLogin = 'isLogin'
const store = new VueX.Store({
    state: {
        loading: {
            status: false,
            text: ''
        },
        loaginState: {
            user: null,
            isLogin: '0' // 0:未登录
        },
        // cityIndex: {
        //     thisCity: '',
        // }
        city: loadFromLocal("city") || {}, // city相关

    },
    getters: {
        getStorage: function(state) {
            if (!state.user) {
                state.loaginState.user = JSON.parse(localStorage.getItem(key))
                state.loaginState.isLogin = localStorage.getItem(isLogin)
            }
            return state.loaginState.user
        },
        city(state) {
            return state.city;
        },

    },
    mutations: {
        setLogin(state, value) {
            state.loaginState.isLogin = value;
            localStorage.setItem(isLogin, value)
        },
        setStorage(state, value) {
            state.loaginState.user = value
            localStorage.setItem(key, JSON.stringify(value))
        },
        removeStorage() {
            state.loaginState.user = null
            localStorage.removeItem(key)
        },
        // 修改loding状态
        updateLoadingStatus(state, status) {
            state.loading.status = status.status;
            state.loading.text = status.text;
        },

        [types.CITY](state, payload) {
            state.city = Object.freeze(payload);
        },
    },
    actions: {
        // 控制loding
        startLoding({ state, commit }, status) {
            commit('updateLoadingStatus', status)
        },
        // city相关
        setCity({ commit }, city) {
            saveToLocal("city", city);
            commit(types.CITY, city);
        },

    }

});
export default store