
// 实现 defineReactive 
function defineReactive(obj, key, val) {
    // 嵌套 递归
    observe(val)

    Object.defineProperty(obj, key, {
        get() {
            console.log('get', val);
            return val
        },

        set(v) {
            if (v !== val) {
                console.log('set', val)
                val = v
            }
        }
    })

}

function observe(obj) {
    // 判断ojb 是什么类型
    if (typeof obj != 'object' || obj === null) {
        return
    }
    // 政委  管理传进来的参数 是对象还是数组，然后处理
    new Observe(obj)
}

// vue 中有vue.set(obj , key , val) 方法来实现 未定义在date里key动态添加。
// vue.delete 同理
function set(obj, key, val) {
    defineReactive(obj, key, val)
}

class Observe {
    constructor(obj) {
        this.value = obj
        // 对传进来的参数做相应的处理。
        // 判断是属于Array，还是Object
        if (Array.isArray(obj)) {
            // 处理数组
        } else {
            // 处理Object
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
    Object.keys(vm.$data).forEach(key => {
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
        this.$options = options
        this.$data = options.data
        // 执行响应式 observe 方法
        observe(this.$data)

        // 将数据代理到 Vue实例中
        proxy(this)

        // 编译模板
        new Compile(options.el, this)

    }
}

class Compile {
    constructor(el, vm) {
        this.$vm = vm
        this.$el = document.querySelector(el)
        // console.log(this.$el, this.$vm);
        this.compile(this.$el)
    }
    compile(el) {
        // console.log(el.childNodes);
        el.childNodes.forEach(node => {
            // console.log(node);
            if (node.nodeType === 1) {
                console.log('编译元素', node.nodeName)
                if (node.childNodes.length > 0) {
                    this.compile(node)
                }
            } else if (this.isInter(node)) {
                // 插值绑定文本
                console.log('编译文本', node.textContent);
            }

        })
    }
    isInter(node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }
}

