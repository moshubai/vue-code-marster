'use strict'
import Vue from 'vue'
import axios from 'axios'

import webConfig from 'config'
// import { apiUrl } from './env'
// import { Loading, Message, MessageBox } from 'element-ui'

// 全局配置
// axios.defaults.baseURL = baseURLs;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.withCredentials = true;
// axios.defaults.crossDomain = true;
// axios.defaults.timeout = 3000;

const instance = axios.create({
    baseURL: webConfig.apiBaseUrl, // api的base_url
    timeout: 10000, // 请求超时时间
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }

})

instance.interceptors.request.use(response => {

    console.log('loading...');

    Vue.$vux.loading.show({
        text: ""
    });
    return response;

}, err => {
    console.log('----sds');
    return Promise.reject(err);

});


instance.interceptors.response.use(response => {
    if (Vue.$vux.loading.isVisible()) {
        Vue.$vux.loading.hide();
    }

    console.log('相应成功！：', response);
    return response;

}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '请求错误'
                break;

            case 401:
                err.message = '未授权，请登录'
                break;

            case 403:
                err.message = '拒绝访问'
                break;

            case 404:
                err.message = `请求地址出错: ${err.response.config.url}`
                break;

            case 408:
                err.message = '请求超时'
                break;

            case 500:
                err.message = '服务器内部错误'
                break;

            case 501:
                err.message = '服务未实现'
                break;

            case 502:
                err.message = '网关错误'
                break;

            case 503:
                err.message = '服务不可用'
                break;

            case 504:
                err.message = '网关超时'
                break;

            case 505:
                err.message = 'HTTP版本不受支持'
                break;

            default:
        }
    }
    console.log('响应错误！：', err);
    if (Vue.$vux.loading.isVisible()) {
        Vue.$vux.loading.hide();
    }
    Vue.$vux.toast.show({
        text: "请求出错",
        type: 'warn'
    });
    return Promise.reject(err) // 返回接口返回的错误信息
});


export default instance;