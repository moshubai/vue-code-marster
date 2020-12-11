// 实现 defineReactive 
function defineReactive(obj, key, val) {
	observe(val)
	const dep = new Dep()
	Object.defineProperty(obj, key, {
		get() {
			console.log('get', val);
			// 判断Dep.target是否存在，若存在则收集依赖
			Dep.target && dep.addDep(Dep.target)
			return val
		},

		set(v) {
			if (v !== val) {
				console.log('set', val)
				val = v
				dep.notity()
				// watchers.forEach(val => val.undate())
			}
		}
	})

}

function observe(obj) {
	console.log(obj);
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
		} else {
			// Object 处理方法
			this.walk(obj)
		}

	}
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
		console.log(options.el, this);
		new Compile(options.el, this)
	}
}

class Compile {
	constructor(el, vm) {
		this.$vm = vm

		this.$el = document.querySelector(el)
		this.compile(this.$el)
	}
	compile(el) {
		el.childNodes.forEach((node) => {
			if (node.nodeType === 1) {
				console.log('编译元素', node.nodeName);
				this.compileElement(node)
				// 递归
				// console.log(node);
				if (node.childNodes.length > 0) {
					this.compile(node)
				}
			} else if (this.isInter(node)) {
				// 插值绑定文本
				// console.log("编译文本", node.textContent);
				this.compileText(node)
			}
		})
	}
	isInter(node) {
		return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
	}
	isDir(attrName) {
		// v- 开头
		return attrName.startsWith('v-')
	}
	// update : 给传入的node做初始化并创建watcher负责其更新
	undate(node, exp, dir) {
		const fn = this[dir + 'Updater']
		fn && fn(node, this.$vm[exp])

		// 创建watcher实例
		new Watcher(this.$vm, exp, function (val) {
			fn && fn(node, val)
		})
	}


	// 插值文本编译{{}}
	compileText(node) {
		this.undate(node, RegExp.$1, 'text')
		// console.log(RegExp.$1, this.$vm);
		// node.textContent = this.$vm[RegExp.$1]

	}
	textUpdater(node, val) {
		// node.textContent = this.$vm[RegExp.$1]
		node.textContent = val
	}

	// 编译元素
	compileElement(node) {

		const nodeAttrs = node.attributes
		console.log(node.attributes, Array.from(nodeAttrs));
		Array.from(nodeAttrs).forEach(attr => {
			// v-xx
			console.log(attr);
			const attrName = attr.name // v-text
			const exp = attr.value  //counter
			console.log(attr.value);
			if (this.isDir(attrName)) {
				const dir = attrName.substring(2)
				this[dir] && this[dir](node, exp)
			}
		})
	}
	// v-text
	text(node, exp) {
		// node.textContent = this.$vm[exp]
		this.undate(node, exp, 'text')
	}
	// v-html
	html(node, exp) {
		// node.innerHTML = this.$vm[exp]
		this.undate(node, exp, 'html')
	}
	htmlUpdater(node, val) {
		node.innerHTML = val
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