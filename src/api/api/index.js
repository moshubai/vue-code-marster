import axios from 'axios';
import Setting from '@/project.config';
import { Message } from 'element-ui';
import homeService from './home'



// 创建一个 axios 实例
const ajaxinstance = axios.create({
    baseURL: Setting.apiBaseURL,
    timeout: 50000 // 请求超时时间
});

// 请求拦截器
ajaxinstance.interceptors.request.use(
    config => {
        // 在请求发送之前做一些处理

        return config;
    },
    error => {
        // 发送失败
        console.log(error);
        Promise.reject(error);
    }
);

// 响应拦截器
ajaxinstance.interceptors.response.use(
    response => {
        // datas 是 axios 返回数据中的 data
        const datas = response.data;
        // 这个状态码是和后端约定的
        const { code } = datas;
        // 根据 code 进行判断
        if (code === undefined) {
            // 如果没有 code 代表这不是项目后端开发的接口
            return datas;
        } else {
            // 有 code 代表这是一个后端接口 可以进行进一步的判断
            switch (code) {
                case 0:
                    // [ 示例 ] code === 0 代表没有错误
                    return datas.data;
                case 1:
                    // [ 示例 ] 其它和后台约定的 code
                    console.log(datas.data);
                    break;
                default:
                    // 不是正确的 code
                    console.log(datas.data);
                    break;
            }
        }
    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400: error.message = '请求错误'; break;
                case 401: error.message = '未授权，请登录'; break;
                case 403: error.message = '拒绝访问'; break;
                case 404: error.message = `请求地址出错: ${error.response.config.url}`; break;
                case 408: error.message = '请求超时'; break;
                case 500: error.message = '服务器内部错误'; break;
                case 501: error.message = '服务未实现'; break;
                case 502: error.message = '网关错误'; break;
                case 503: error.message = '服务不可用'; break;
                case 504: error.message = '网关超时'; break;
                case 505: error.message = 'HTTP版本不受支持'; break;
                default: break;
            }
        }
        Message.error(error.response);
        return Promise.reject(error);
    }
);

/**
 * [API api接口封装]
 * @type {Object}
 */
const API = {
    ...homeService(ajaxinstance)
}
export default API
