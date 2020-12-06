// 
const env = process.env.NODE_ENV;

const Setting = {
    /**
     * 基础配置
     * */
    // 网页标题
    titleContent: 'vue-project',
    // 路由模式，可选值为 history 或 hash
    routerMode: 'hash',
    // 应用的基路径
    routerBase: '/',
    // 页面切换时，是否显示模拟的进度条
    showProgressBar: true,
    // 接口请求地址
    apiBaseURL: env === 'development' ? '/' : '/',
    // 接口请求返回错误时，弹窗的持续时间，单位：秒
    modalDuration: 10,

};

export default Setting;
