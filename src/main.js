import Vue from 'vue'
import App from './App.vue'


import router from './router'
// 去掉vue原有的router
// import router from './xrouter'

import store from './store'
// 去掉vue原有的store
// import store from './xstore'

import '@/assets/icons'

// ElementUI 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// style
import "./style/index.less"

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
