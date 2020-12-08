// 实现vue-router的hash
// 声明组件内的Vue  此为下位的this指向
let Vue;

class VueRouter {
	constructor(options) {
		console.log(options);
		this.$options = options
		// 获取 当前窗口hash
		const initial = window.location.hash.slice(1) || '/'
		// Vue.util.defineReactive 是vue中实现的响应式api
		Vue.util.defineReactive(this, 'current', initial)
		// 监听hash变化的 hashchange事件  并绑定该this，避免指向问题
		window.addEventListener("hashchange", this.onHashChange.bind(this));
	}
	onHashChange() {
		// 获取当前浏览器的hash
		console.log(window.location.hash.slice(1), '当前hash');
		this.current = window.location.hash.slice(1)
	}

}
// 组件
VueRouter.install = function (_Vue) {
	Vue = _Vue;
	// mixin 混入
	Vue.mixin({
		beforeCreate() {
			if (this.$options.router) {
				console.log('router')
				Vue.prototype.$router = this.$options.router
			}
		}

	});
	// router-link组件，相当于转化成<a href=""></a>
	Vue.component('router-link', {
		props: {
			to: {
				type: String,
				required: true
			}
		},
		render(h) {
			return h('a', {
				attrs: {
					href: '#' + this.to
				}
			}, this.$slots.default)
		}
	})
	// 路由中最重要的组件，存放内容 compontent
	Vue.component('router-view', {
		render(h) {
			let Component = null
			// this.current当前路径，并筛选出来。返回当前的component
			const route = this.$router.$options.routes.find(
				(route) => route.path === this.$router.current
			);
			if (route) {
				Component = route.component
			}
			return h(Component);
		}
	})
}

export default VueRouter
