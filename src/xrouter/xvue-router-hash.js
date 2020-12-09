
import View from './component/view'
import Link from './component/link'
// 实现vue-router的hash
// 声明组件内的Vue  此为下位的this指向
let Vue;

class VueRouter {
	constructor(options) {
		// console.log(options);
		this.$options = options
		// 获取 当前窗口hash
		this.current = window.location.hash.slice(1) || '/'
		// Vue.util.defineReactive 是vue中实现的响应式api
		Vue.util.defineReactive(this, 'matched', [])
		// 监听hash变化的 hashchange事件  并绑定该this，避免指向问题


		// match可以递归遍历路由表，获取匹配关系的数组
		this.match()

		// 监听url变化
		window.addEventListener("hashchange", this.onHashChange.bind(this));
		window.addEventListener("load", this.onHashChange.bind(this))

		// 创建路由映射表
		// this.routeMap={}
		// options.routes.forEch((route=>{
		// 	this.routeMap[route.path] = route
		// }))
	}
	onHashChange() {
		// 获取当前浏览器的hash
		// console.log(window.location.hash.slice(1), '当前hash');
		this.current = window.location.hash.slice(1)
		this.matched = []
		this.match()
	}

	match(routes) {
		routes = routes || this.$options.routes
		console.log(routes, 'routes');

		const iterable = ['mini', 'mani', 'mo'];

		for (const value of iterable) {
			console.log(value);
		}
		for (const route of routes) {
			console.log(route, 'route');  
			if (route.path === '/' && this.current === '/') {
				this.matched.push(route)
				return
			}
			//   路由为：/about/child
			if (route.path !== '/' && this.current.indexOf(route.path) != -1) {
				this.matched.push(route)
				if (route.children) {
					this.match(route.children)
				}
				return
			}
		}
	}
}
// 组件
VueRouter.install = function (_Vue) {
	Vue = _Vue;
	// mixin 混入
	Vue.mixin({
		beforeCreate() {
			if (this.$options.router) {
				// console.log('router')
				Vue.prototype.$router = this.$options.router
			}
		}

	});
	// router-link组件，相当于转化成<a href=""></a>
	Vue.component('router-link', Link)
	// 路由中最重要的组件，存放内容 compontent
	Vue.component('router-view', View)
}

export default VueRouter
