// Vue 组件化后this指向
let Vue;

// Store 实现
class Store {
	constructor(options) {
		console.log(options);
		this._mutations = options.mutations
		this._actions = options.actions
		this._wrappedGetters = options.getters
		// commit 是唯一可以改变state值得方法。所以在他之前可以截断，并做项目需要的功能（eq：数据的缓存，token的存储，等等）
		// bing当前方法的this  这里实现相对于源码十分简单。


		// bind commit and dispatch to self 绑定当前this
		// var store = this;
		// var ref = this;
		// var dispatch = ref.dispatch;
		// var commit = ref.commit;
		// this.dispatch = function boundDispatch (type, payload) {
		//   return dispatch.call(store, type, payload)
		// };
		// this.commit = function boundCommit (type, payload, options) {
		//   return commit.call(store, type, payload, options)
		// };
		// call() 方法是预定义的 JavaScript 方法，它可以用来调用所有者对象作为参数的方法。通过 call()，您能够使用属于另一个对象的方法。
		// 实现mutation 同步方法。
		// 实现actions异步方法
		this.commit = this.commit.bind(this)
		this.dispatch = this.dispatch.bind(this)


		// 暴露api  并实现getters
		// getters其实就是computed
		const computed = {}
		this.getters = {}
		const store = this
		// function forEachValue(obj, fn) {
		// 	Object.keys(obj).forEach(key => fn(obj[key], key))
		// }
		// forEachValue(this._wrappedGetters, (fn, key) => {
		// 	// use computed to leverage its lazy-caching mechanism
		// 	// direct inline function use will lead to closure preserving oldVm.
		// 	// using partial to return function with only arguments preserved in closure environment.
		// 	computed[key] = function(){
		// 		return fn(store.state)
		// 	}
		// 	Object.defineProperty(store.getters, key, {
		// 		get: () => store._vm[key],
		// 		enumerable: true // for local getters
		// 	})
		// })
		Object.keys(this._wrappedGetters).forEach((key) => {
			// 获取用户定义的getters
			const fn = store._wrappedGetters[key]
			// 转化成无参数形式
			computed[key] = function () {
				return fn(store.state)
			}
			// 只读
			Object.defineProperty(store.getters, key, {
				get: () => store._vm[key]
			})
		})



		// new Vue为响应式方法，可以处理state数据的响应式变化。
		this._vm = new Vue({
			data: {
				$$state: options.state
			},
			computed: computed
		})

	}
	get state() {
		console.log(this._vm, '_vm');
		return this._vm._data.$$state
	}

	set state(v) {
		console.error('please use replaceState to reset state');
	}

	commit(type, payload) {
		const entry = this._mutations[type]
		if (!entry) {
			console.error('unkwnow mutation type');
			return
		}

		entry(this.state, payload)
	}

	dispatch(type, payload) {

		const entry = this._actions[type]
		// 源码中 entry.length > 1 执行Promise.all()
		// 	var result = entry.length > 1
		// 	? Promise.all(entry.map(function (handler) { return handler(payload); }))
		// 	: entry[0](payload);

		//   return new Promise(function (resolve, reject) {
		// 	result.then(function (res) {
		// 	  try {
		// 		this$1._actionSubscribers
		// 		  .filter(function (sub) { return sub.after; })
		// 		  .forEach(function (sub) { return sub.after(action, this$1.state); });
		// 	  } catch (e) {
		// 		{
		// 		  console.warn("[vuex] error in after action subscribers: ");
		// 		  console.error(e);
		// 		}
		// 	  }
		// 	  resolve(res);
		// 	}, function (error) {
		// 	  try {
		// 		this$1._actionSubscribers
		// 		  .filter(function (sub) { return sub.error; })
		// 		  .forEach(function (sub) { return sub.error(action, this$1.state, error); });
		// 	  } catch (e) {
		// 		{
		// 		  console.warn("[vuex] error in error action subscribers: ");
		// 		  console.error(e);
		// 		}
		// 	  }
		// 	  reject(error);
		// 	});
		//   })
		if (!entry) {
			console.error('unkwnow action type');
			return
		}
		entry(this, payload)
	}
}


function install(_Vue) {
	Vue = _Vue
	//  利用全局混入延迟调用后续代码
	Vue.mixin({
		beforeCreate() {
			// 挂载到Vue上  即全局可以用this.$store访问
			if (this.$options.store) {
				Vue.prototype.$store = this.$options.store
			}
		},
	})
}


// new Vuex.Store({}) 导出必然是xxx.Store 由于是组件须有install方法
export default { Store, install }