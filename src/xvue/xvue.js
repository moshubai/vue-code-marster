// 数组响应式实现
const methodsToPatch = [
	'push',
	'pop',
	'shift',
	'unshift',
	'splice',
	'sort',
	'reverse'
]
// 1.替换数组原型常用的7个方法
const arrayProto = Array.prototype;
// 2.备份，并修改备份
const arrayMethods = Object.create(arrayProto);
methodsToPatch.forEach(method => {
	arrayMethods[method] = function () {
		const dep = new Dep()
		// 原始操作
		const result = arrayProto[method].apply(this, [])
		// 覆盖操作;通知更新
		dep.notity()
		return result
	}

})




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

		set(v) {
			if (v !== val) {
				// console.log('set', val)
				val = v
				dep.notity()
				// watchers.forEach(val => val.undate())
			}
		}
	})

}

function observe(obj) {
	// console.log(obj);
	if (typeof obj !== "object" || obj === null) {
		return;
	}
	// 政委  管理传进来的参数 是对象还是数组，然后处理
	new Observe(obj)
}

// vue 中有vue.set(obj , key , val) 方法来实现 未定义在date里key动态添加。
function set(obj, key, val) {
	defineReactive(obj, key, val)
}

class Observe {
	constructor(obj) {
		this.value = obj
		if (Array.isArray(obj)) {
			// 数组处理方法
			this.observeArray(obj)
		} else {
			// Object 处理方法
			this.walk(obj)
		}

	}
	// 数组处理方法
	observeArray(obj) {
		console.log(obj);
		// 覆盖原型，替换7个变更操作
		obj.__proto__ = arrayMethods
		// 对数组内部元素执行响应式
		for (let i = 0; i < obj.length; i++) {
			const element = obj[i];
			observe(element)
		}

	}
	// object 处理方法
	walk(obj) {
		Object.keys(obj).forEach((key) => {
			defineReactive(obj, key, obj[key])
		})
	}
}
// 将$data的key代理到vm上去，用户就可以直接使用
function proxy(vm) {
	Object.keys(vm.$data).forEach((key) => {
		Object.defineProperty(vm, key, {
			get() {
				return vm.$data[key]
			},
			set(v) {
				vm.$data[key] = v
			}
		})
	})
}
class XVue {
	constructor(options) {
		// 响应式
		this.$options = options
		this.$data = options.data
		observe(this.$data)
		// 代理
		proxy(this)
		// 编译
		// console.log(options.el, this);
		new Compile(options.el, this)
	}
}




// const watchers = []

// 监听器：负责页面中的一个依赖更新
class Watcher {
	constructor(vm, key, undateFn) {
		this.vm = vm
		this.key = key
		this.undateFn = undateFn
		// watchers.push(this)

		// 获取key的值，触发它的get方法，在那创建当前watcher实例和dep之间映射关系
		Dep.target = this
		this.vm[this.key]
		Dep.target = null
	}
	undate() {
		this.undateFn.call(this.vm, this.vm[this.key])
	}
}

class Dep {
	constructor() {
		this.deps = []
	}
	addDep(dep) {
		this.deps.push(dep)
	}
	notity() {
		this.deps.forEach(dep => dep.undate())
	}
}