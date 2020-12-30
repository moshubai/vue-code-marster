// 实现 defineReactive 
function defineReactive(obj, key, val) {
	observe(val)
	const dep = new Dep()
	Object.defineProperty(obj, key, {
		get() {
			// console.log('get', val);
			// 判断Dep.target是否存在，若存在则收集依赖
			Dep.target && dep.addDep(Dep.target)
			return val
		},
		set(newVal) {
			if (val !== newVal) {
				// 如果newVal是对象，也要做响应式处理
				observe(newVal)
				val = newVal
				console.log('set', key, newVal);
				// 通知更新
				dep.notify()
			}
		}
	})

}

// 遍历指定数据对象每个key，拦截他们
function observe(obj) {
	if (typeof obj !== "object" || obj === null) {
		return obj;
	}
	// 政委  管理传进来的参数 是对象还是数组，然后处理
	new Observe(obj)
}



class Observe {
	constructor(obj) {
		this.value = obj
		if (Array.isArray(obj)) {
			// 数组处理方法
			console.log('数组处理方法');
		} else {
			// Object 处理方法
			this.walk(obj)
		}
	}
	// 数组处理方法

	// object 处理方法
	walk(obj) {
		Object.keys(obj).forEach((key) => {
			defineReactive(obj, key, obj[key])
		})
	}
}
// proxy代理函数,将$data的key代理到vm上去，用户就可以直接使用data中的key
function proxy(vm, key) {
	Object.keys(vm[key]).forEach(k => {
		Object.defineProperty(vm, k, {
			get() {
				return vm[key][k]
			},
			set(v) {
				vm[key][k] = v
			}
		})
	})
}





class XVue {
	constructor(options) {
		// 响应式
		this.$options = options
		this.$data = options.data
		// 响应式
		observe(this.$data)
		// 代理
		proxy(this, "$data")
		// 编译模板

		// new Compile(options.el, this)

		// 若存在el选项，直接挂载mount
		if (options.el) {
			this.$mount(options.el)
		}
	}
	// updateComponent,Watcher
	$mount(el) {
		// 获取宿主
		this.$el = document.querySelector(el)

		const updateComponent = () => {
			// 执行render
			const { render } = this.$options;

			const el = render.call(this)
			const parent = this.$el.parentElement
			parent.insertBefore(el, this.$el.nextSibling)
			parent.removeChild(this.$el)
			this.$el = el
			
		}
		// 创建watcher实例
		new Watcher(this, updateComponent)
	}
}




// const watchers = []

// 监听器：负责页面中的一个依赖更新
class Watcher {
	constructor(vm, fn) {
		this.vm = vm

		this.getter = fn;

		this.get();
	}
	get() {
		// 获取key的值，触发它的get方法，在那创建当前watcher实例和dep之间映射关系
		Dep.target = this
		// this.vm[this.key]
		this.getter.call(this.vm)
		Dep.target = null
	}
	update() {
		// this.undateFn.call(this.vm, this.vm[this.key])
		this.get()
	}
}

class Dep {
	constructor() {
		this.deps = new Set()
	}
	addDep(watcher) {
		this.deps.add(watcher);
	}
	notify() {
		this.deps.forEach((watcher) => watcher.update())
	}
}