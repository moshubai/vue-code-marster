// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 路由依赖
import VueRouter from 'vue-router'
import routes from './router/router'
import './assets/css/base.less'
import './assets/css/common.scss'
import store from './store/store'
import tap from '@/directives/tap'
import { ToastPlugin, LoadingPlugin } from 'vux'
Vue.directive('tap', tap)

// import Message from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(VueRouter)



//阻止启动生产消息,常用作指令
// Vue.config.productionTip = false

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // 判断登录权限
    if (to.matched.some(m => m.meta.auth)) {
        if (window.localStorage.isLogin === '1') {
            next()
        } else if (to.path !== '/') {
            next({ path: '/login' })
                // Vue.prototype.$message.warning('检测到您还未登录,请登录后操作！')
        }
    } else {
        next()
    }
    // 添加title
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        next()
    }
})


new Vue({
    router,
    store,
    // Message
    //Router, //not Router,  需要严格参照router的构造配置http://router.vuejs.org/zh-cn/api/options.html

}).$mount('#app')